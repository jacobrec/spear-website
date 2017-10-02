package main

import (
	"bufio"
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"log"
	"os"
)

var hasGottenData = false

var username, password, database string

func getUser() string {
	if !hasGottenData {
		getData()
	}
	return username
}
func getDatabase() string {
	if !hasGottenData {
		getData()
	}
	return database
}
func getPassword() string {
	if !hasGottenData {
		getData()
	}
	return password
}
func getData() {

	if file, err := os.Open(".passwords"); err == nil {
		defer file.Close()
		scanner := bufio.NewScanner(file)

		scanner.Scan()
		username = scanner.Text()
		scanner.Scan()
		password = scanner.Text()
		scanner.Scan()
		database = scanner.Text()
		hasGottenData = true
		if err = scanner.Err(); err != nil {
			log.Fatal(err)
		}
	} else {
		log.Fatal(err)
	}

}

func createDatabase() {
	db, err := sql.Open("mysql",
		getUser()+":"+getPassword()+"@/")

	defer db.Close()

	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Opened sql")
	}
	_, err = db.Exec("CREATE DATABASE " + getDatabase())
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Created database")
	}
	_, err = db.Exec("USE " + getDatabase())
	if err != nil {
		panic(err)
	} else {
		fmt.Println("Using database")
	}
	_, err = db.Exec("CREATE TABLE blogposts (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, title TEXT, author TEXT, post TEXT, timestamp BIGINT)")
	if err != nil {
		panic(err)
	} else {
		fmt.Println("Created table")
	}

}
func removeDatabase() {
	db, err := sql.Open("mysql",
		getUser()+":"+getPassword()+"@/")
	defer db.Close()
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Opened sql")
	}
	_, err = db.Exec("DROP DATABASE spear")
	if err != nil {
		panic(err)
	} else {
		fmt.Println("dropped database")
	}
}
