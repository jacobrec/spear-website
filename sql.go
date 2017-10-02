package main

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"log"
)

var db *sql.DB

func openDatabase() {
	var err error
	db, err = sql.Open("mysql",
		getUser()+":"+getPassword()+"@/"+getDatabase())
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Opened database")
	}
}

func getPosts(index, number int) []blogPost {
	stmt, err := db.Prepare("SELECT post, author, title, timestamp FROM blogposts WHERE id = ?")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("prepared")
	a := make([]blogPost, number)
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
		a[i] = blogPost{Post: btext, Author: bauthor, Title: btitle, Timestamp: timestamp}
	}
	return a
}

func addPost(post blogPost) {
	tx, _ := db.Begin()
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
