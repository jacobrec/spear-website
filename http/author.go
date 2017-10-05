package http

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/jacobrec/spearserver/blog"
    "github.com/jacobrec/spearserver/sql"
)

func deletePost(c *gin.Context) {

}
func putPost(c *gin.Context) {
	var post blog.Post
	c.BindJSON(&post)
    sql.AddPost(post)
    fmt.Println(post)
}
