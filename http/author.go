package http

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/jacobrec/spearserver/blog"
    "github.com/jacobrec/spearserver/sql"
	"strconv"
)

func deletePost(c *gin.Context) {
	id, _ := strconv.Atoi(c.Params.ByName("id"))
	sql.DeletePost(id)

}
func putPost(c *gin.Context) {
	var post blog.Post
	c.BindJSON(&post)
    sql.AddPost(post)
    fmt.Println(post)
}
