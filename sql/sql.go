package sql

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/go-sql-driver/mysql" // needs the specific driver
	"github.com/jacobrec/spearserver/blog"
)

var db *sql.DB

/*OpenDatabase must be called before GetPosts or AddPost as it initalizes sql connections*/
func OpenDatabase() {
	var err error
	db, err = sql.Open("mysql",
		getUser()+":"+getPassword()+"@/"+getDatabase())
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Opened database")
	}
}

func GetPostCount() int {
	var row int
	db.QueryRow("SELECT COUNT(*) FROM blogposts").Scan(&row)
	return row
}

// GetPosts returns an array of the most recent blog posts.
// index: specifies the number of recent blog posts to skip.
// number: upper limit on the number of blog posts to return.
func GetPosts(index, number int) []blog.Post {
	stmt, err := db.Prepare("SELECT id, post, author, title, timestamp FROM blogposts ORDER BY id DESC LIMIT ? OFFSET ?")
	if err != nil {
		log.Fatal(err)
	}

	rows, err := stmt.Query(number, index)
	if err != nil {
		if err == sql.ErrNoRows {
		} else {
			log.Fatal(err)
		}
	}
	defer rows.Close()

	posts := make([]blog.Post, 0)
	for rows.Next() {
		var post blog.Post
		err := rows.Scan(&post.ID, &post.Post, &post.Author, &post.Title, &post.Timestamp)
		if err != nil {
			log.Fatal(err)
			continue
		}
		post.Tags = GetTagsByPostId(post.ID)
		posts = append(posts, post)
	}
	return posts
}

/*GetLastID Gets the ID of the last row*/
func GetLastID() int {
	var row int
	db.QueryRow("SELECT id FROM blogposts ORDER BY id DESC LIMIT 1").Scan(&row)
	return row
}

/*GetLastID Gets the post with the specified ID*/
func GetPostByID(id int) blog.Post {
	stmt, err := db.Prepare("SELECT post, author, title, timestamp FROM blogposts WHERE id = ?")
	if err != nil {
		log.Fatal(err)
	}
	var btext, bauthor, btitle string
	var timestamp uint64

	err = stmt.QueryRow(id).Scan(&btext, &bauthor, &btitle, &timestamp)
	if err != nil {
		if err == sql.ErrNoRows {
		} else {
			log.Fatal(err)
		}
	}

	tags := GetTagsByPostId(id)
	return blog.Post{ID: id, Post: btext, Author: bauthor, Title: btitle, Timestamp: timestamp, Tags: tags}
}

// GetPostsBySearch searches the database for posts containing the specified string.
func GetPostsBySearch(search string) []blog.Post {
	stmt, err := db.Prepare("SELECT id, post, author, title, timestamp FROM blogposts WHERE post LIKE ?")
	if err != nil {
		log.Fatal(err)
	}

	// Pads the search term with wildcard operator %.
	rows, err := stmt.Query("%" + search + "%")
	if err != nil {
		if err == sql.ErrNoRows {
		} else {
			log.Fatal(err)
		}
	}
	defer rows.Close()

	// Initializes all the variables required by a blog post.
	var id int
	var text, author, title string
	var timestamp uint64
	// Initializes posts to an empty array. This causes an empty array to be returned instead of null.
	posts := make([]blog.Post, 0)
	// Adds all the found blog posts to the array.
	for rows.Next() {
		err := rows.Scan(&id, &text, &author, &title, &timestamp)
		if err != nil {
			continue
		}
		tags := GetTagsByPostId(id)
		posts = append(posts, blog.Post{ID: id, Post: text, Author: author, Title: title, Timestamp: timestamp, Tags: tags})
	}
	return posts
}

// GetTagsByPostId returns the tags for the post with the provided id.
func GetTagsByPostId(id int) []string {
	stmt, err := db.Prepare("SELECT t.tag FROM tags t, blogtags bt WHERE bt.post = ? AND t.id = bt.tag")
	if err != nil {
		log.Fatal(err)
	}

	rows, err := stmt.Query(id)
	if err != nil {
		if err == sql.ErrNoRows {
		} else {
			log.Fatal(err)
		}
	}
	defer rows.Close()

	var tag string
	tags := make([]string, 0)
	for rows.Next() {
		err := rows.Scan(&tag)
		if err != nil {
			continue
		}
		tags = append(tags, tag)
	}
	return tags
}

/*GetPostsByTag gets all the posts with the tag specified*/
func GetPostsByTag(tag string) []blog.Post {
	stmt, err := db.Prepare(`
		SELECT b.id
		FROM blogposts b
		INNER JOIN blogtags bt ON b.id = bt.post
		INNER JOIN tags t ON bt.tag = t.id
		WHERE t.tag = ?
	`)
	if err != nil {
		log.Fatal(err)
	}

	rows, err := stmt.Query(tag)
	if err != nil {
		if err == sql.ErrNoRows {
		} else {
			log.Fatal(err)
		}
	}
	defer rows.Close()

	var id int
	posts := make([]blog.Post, 0)
	for rows.Next() {
		err := rows.Scan(&id)
		if err != nil {
			continue
		}
		posts = append(posts, GetPostByID(id))
	}
	return posts
}

/*EditPost edits an exsisting post in the database*/
func EditPost(post blog.Post) {
	tx, _ := db.Begin()
	stmt, err := tx.Prepare(fmt.Sprintf(`	UPDATE blogposts
								SET post = '%s', author= '%s', title = '%s'
								WHERE id = %d;`, post.Post, post.Author, post.Title, post.ID))
	defer stmt.Close()
	if err != nil {
		log.Fatal(err)
	}
	_, err = stmt.Exec()
	if err != nil {
		log.Fatal(err)
	}
	tx.Commit()
	fmt.Print("Edited post")
}

/*AddPost adds a new post to the database, as well it sets the timestamp*/
func AddPost(post blog.Post) {
	tx, _ := db.Begin()
	post.SetDateToNow()
	stmt, err := tx.Prepare("INSERT INTO blogposts (post, author, title, timestamp) VALUES(?, ?, ?, ?)")
	defer stmt.Close()
	if err != nil {
		log.Fatal(err)
	}
	_, err = stmt.Exec(post.Post, post.Author, post.Title, post.Timestamp)
	if err != nil {
		log.Fatal(err)
	}
	var postID int
	err = tx.QueryRow(fmt.Sprintf("SELECT id FROM blogposts WHERE timestamp=%d", post.Timestamp)).Scan(&postID)
	if err != nil {
		log.Fatal(err)
	}
	addTagStmt, _ := tx.Prepare("INSERT INTO tags (tag) VALUES (?)")
	getTagIDStmt, _ := tx.Prepare("SELECT id FROM tags WHERE tag = ?")
	addBlogTagStmt, _ := tx.Prepare("INSERT INTO blogtags (tag, post) VALUES (?, ?)")

	for _, tag := range post.Tags {
		var tagID int
		err := getTagIDStmt.QueryRow(tag).Scan(&tagID)
		if err != nil {
			if err == sql.ErrNoRows {
				_, _ = addTagStmt.Exec(tag)
				_ = getTagIDStmt.QueryRow(tag).Scan(&tagID)
			} else {
				log.Fatal(err)
			}
		}
		addBlogTagStmt.Exec(tagID, postID)
		fmt.Println(tag)
	}

	tx.Commit()
	fmt.Print("Added to database:")
	fmt.Println(post)
}

/*DeletePost deletes a blogpost from the database*/
func DeletePost(id int) {
	delPostStmt, _ := db.Prepare("DELETE FROM blogposts WHERE id = ?")
	delTagBlogsStmt, _ := db.Prepare("DELETE FROM blogtags WHERE post = ?")

	delPostStmt.Exec(id)
	delTagBlogsStmt.Exec(id)

}
