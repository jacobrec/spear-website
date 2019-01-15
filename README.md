## API
    posts.GET("/:id", getPost) // this gets the post by the actual ID
    posts.GET("/search/tag/:id", getByTag)
    posts.GET("/search/string/:id", getByString)
    posts.GET("/posts", getPosts) // this supports the query string index, and number
    //     index: specifies the number of recent blog posts to skip. Default 0
    //     number: upper limit on the number of blog posts to return. Default 5
    
    posts.PUT("/", putPost)
    posts.DELETE("/:id", deletePost)
    
A post is a json object with the following structure
    
    type Post struct {
        ID        int      `json:"id"`
        Title     string   `json:"title"`
        Author    string   `json:"author"`
        Post      string   `json:"post"`
        Timestamp uint64   `json:"timestamp"`
        Tags      []string `json:"tags"`
    }
    
## Setup
1. Install go
2. Get files with `go get github.com/jacobrec/spearserver`
3. Install mysql server
4. In mysql create a database and a user and grant that user all privaliges on that database
1. Place .passwords file in the src/github.com/jacobrec/spearserver directory
5. From the src/github.com/jacobrec/spearserver directory build the project with `go build`
2. run with -setup from the src/github.com/jacobrec/spearserver directory
3. run normally from the src/github.com/jacobrec/spearserver directory to start webserver 

### Passwords file
should have the name .passwords
file should be 3 lines and read like this. the username, password, and database refer to the sql database and user you just created
```
username
password
database
```
This file needs to be placed in the directory of which you run the program from
