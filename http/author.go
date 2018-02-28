package http

import (
	"encoding/base64"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/jacobrec/spearserver/blog"
	"github.com/jacobrec/spearserver/sql"
	"net/http"
	"strconv"
	"strings"
)

func authRequired() func(c *gin.Context) {
	return func(c *gin.Context) {

		if strings.Index(c.GetHeader("Authorization"), "Basic") == 0 {
			userPass := strings.SplitAfter(c.GetHeader("Authorization"), "Basic ")[1]

			// decode username and password
			bytes, _ := base64.StdEncoding.DecodeString(userPass)

			decoded := strings.Split(string(bytes), ":")

			// TODO: probably should remove the username and password from the code and put it in a seperate file.
			// it seems like a security issue to have them here when the source is publicly viewable
			if "spear_admin" == decoded[0] && "admin_spear" == decoded[1] {
				c.Next()
				return
			}
		}

		c.Writer.Header().Add("WWW-Authenticate", "Basic")
		c.AbortWithStatus(http.StatusUnauthorized)
		c.Next()
	}

}

func deletePost(c *gin.Context) {
	id, _ := strconv.Atoi(c.Params.ByName("id"))
	sql.DeletePost(id)

}
func putPost(c *gin.Context) {
	var post blog.Post
	c.BindJSON(&post)
	fmt.Println(post.ID)
	if post.ID == -1 {
		sql.AddPost(post)
	}else{
		sql.EditPost(post)
	}
	fmt.Println(post)
}
