package http

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/jacobrec/spearserver/blog"
    "github.com/jacobrec/spearserver/sql"
	"strconv"
	"net/http"
	"strings"
	"encoding/base64"
)

func authRequired() func(c *gin.Context){
	return func(c *gin.Context){

		if strings.Index(c.GetHeader("Authorization"), "Basic") == 0  {
			userPass := strings.SplitAfter(c.GetHeader("Authorization"),"Basic ")[1]

			// decode username and password
			bytes, _  := base64.StdEncoding.DecodeString(userPass)

			decoded := strings.Split(string(bytes),":")

			if "spear_admin" == decoded[0] && "admin_spear" == decoded[1]{
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
    sql.AddPost(post)
    fmt.Println(post)
}
