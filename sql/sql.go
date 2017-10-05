package sql

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql" // needs the specific driver
	"github.com/jacobrec/spearserver/blog"
	"log"
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

/*GetPosts takes in an index and a number of posts, returns posts from index index, to index+number*/
func GetPosts(index, number int) []blog.Post {
	// TODO: Probably at some point we are going to want to make it go in reverse order, because post one will always be the oldest post
	// maybe use https://stackoverflow.com/questions/5191503/how-to-select-the-last-record-of-a-table-in-sql

	fmt.Println("prepared")
	a := make([]blog.Post, number)

	for i := 0; i < number; i++ {
		a[i] = getPostByID(index + i)
	}
	return a
}

func getPostByID(id int) blog.Post {
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

	tags := make([]string, 100)
	stmt, _ = db.Prepare("SELECT t.tag FROM tags t, blogtags bt WHERE bt.post = ? AND t.id = bt.tag")
	rows, err := stmt.Query(id)
	if err != nil {
		if err == sql.ErrNoRows {
		} else {
			log.Fatal(err)
		}
	}
	defer rows.Close()
	var str string
	i := 0
	for rows.Next() {
		err := rows.Scan(&str)
		if err != nil {
			continue
		}
		tags[i] = str
		i++
	}

	return blog.Post{Post: btext, Author: bauthor, Title: btitle, Timestamp: timestamp, Tags: tags[:i]}
}

/*GetPostsBySearch takes in an string, returns posts that match the search*/
func GetPostsBySearch(search string) []blog.Post {
	//TODO: implement this method
	a := make([]blog.Post, 1)
	a[1] = getPostByID(1)
	return a
}

/*GetPostsByTag gets all the posts with the tag specified*/
func GetPostsByTag(tag string) []blog.Post {
	stmt, _ := db.Prepare(`SELECT b.id
							FROM blogtags bt, blogposts b, tags t
							WHERE bt.tag = t.id
							AND (t.tag IN (?))
							AND b.id = bt.post
							GROUP BY b.id`)
	i := 0
	val, _ := stmt.Query(tag)

	a := make([]blog.Post, 100)

	defer val.Close()
	for val.Next() {

		var id int
		err := val.Scan(&id)
		if err != nil {
			if err == sql.ErrNoRows {
				break
			} else {
				log.Fatal(err)
			}
		}

		a[i] = getPostByID(id)
		i++
	}

	return a[:i]
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
