package http

import (
	"github.com/gin-gonic/gin"
)

/*Begin starts the blog webserver on a specified port*/
func Begin(port string) {

	router := gin.Default()
	posts := router.Group("/blog")
	{
		posts.GET("/posts", getPosts)
		posts.GET("/post/:id", getPost)

		posts.GET("/search/tag/:id", getByTag)
		posts.GET("/search/string/:id", getByString)

        posts.GET("/number", getPostCount)

		posts.PUT("/", putPost)
		posts.DELETE("/:id", deletePost)
	}

	writer := router.Group("/author")
	writer.Use(authRequired())
	{
		writer.Static("/", "writer/")
	}

	router.Run(port)
}
