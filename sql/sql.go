package sql

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql" // needs the specific driver
	"log"
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
/*GetPosts takes in an index and a number of posts, returns posts from index index, to index+number*/
func GetPosts(index, number int) []blog.Post {
	// TODO: Probably at some point we are going to want to make it go in reverse order, because post one will always be the oldest post
	// maybe use https://stackoverflow.com/questions/5191503/how-to-select-the-last-record-of-a-table-in-sql
 	stmt, err := db.Prepare("SELECT post, author, title, timestamp FROM blogposts WHERE id = ?")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("prepared")
	a := make([]blog.Post, number)
	var btext, bauthor, btitle string
	var timestamp uint64
	for i := 0; i < number; i++ {
		err := stmt.QueryRow(index+i).Scan(&btext, &bauthor, &btitle, &timestamp)
		if err != nil {
			if err == sql.ErrNoRows {
				break
			} else {
				log.Fatal(err)
			}
		}
		a[i] = blog.Post{Post: btext, Author: bauthor, Title: btitle, Timestamp: timestamp}
	}
	return a
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
	tx.Commit()
	fmt.Print("Added to database:")
	fmt.Println(post)
}
