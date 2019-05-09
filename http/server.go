package http

import (
	"github.com/gin-gonic/gin"
    "github.com/mailgun/mailgun-go"
    "fmt"
)

/*Begin starts the blog webserver on a specified port*/
func Begin(port string) {

	router := gin.Default()
    router.Use(CORSMiddleware())
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

    router.POST("/join", joinBounce)

	writer := router.Group("/author")
	writer.Use(authRequired())
	{
		writer.Static("/", "writer/")
	}

	router.Run(port)
}

func CORSMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
        c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
        c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
        c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

        if c.Request.Method == "OPTIONS" {
            c.AbortWithStatus(204)
            return
        }

        c.Next()
    }
}

type EmailRequest struct {
    TeamId string
    TeamName string
    Email string
    Name string
    Msg string
}
func (e EmailRequest) toString() string {
    return "A new member wishes to join spear. Their name is [" + e.Name + "], their email is [" + e.Email + "].\n" + 
      "They wish to join the [" + e.TeamName + "] team. Their message for you is:\n\n" + e.Msg + "\n"
}
func joinBounce(c *gin.Context) {
	c.Header("Content-Type", "application/json")
	c.Header("Access-Control-Allow-Origin", "*")
    var req EmailRequest
    c.BindJSON(&req)
    fmt.Println(req.toString())
    c.String(200, "Okay")
}
