package http

import (
	"github.com/gin-gonic/gin"
)

/*Begin starts the blog webserver on a specified port*/
func Begin(port string) {

	router := gin.Default()
	posts := router.Group("/blog")
	{
		posts.GET("/search/tag/:id", getByTag)
		posts.GET("/search/string/:id", getByString)
		posts.GET("/posts", getPosts)
		posts.PUT("/", putPost)
		posts.DELETE("/:id", deletePost)
		posts.GET("/post/:id", getPost)
	}

	writer := router.Group("/author")
	writer.Use(authRequired())
	{
		writer.Static("/", "writer/")
	}

	router.Run(port)
}
