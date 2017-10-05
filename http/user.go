package http

import (
	"github.com/gin-gonic/gin"
	"github.com/jacobrec/spearserver/sql"
	"net/http"
	"strconv"
)

func getPosts(c *gin.Context) {
	index, _ := strconv.Atoi(c.DefaultQuery("index", "1"))
	number, _ := strconv.Atoi(c.DefaultQuery("number", "5"))

	c.Header("Content-Type", "application/json")
	c.Header("Access-Control-Allow-Origin", "*")
	c.JSON(http.StatusOK, sql.GetPosts(index, number))

}

func getByString(c *gin.Context) {
	searchStr := c.Params.ByName("id")

	c.Header("Content-Type", "application/json")
	c.Header("Access-Control-Allow-Origin", "*")
	c.JSON(http.StatusOK, sql.GetPostsBySearch(searchStr))
}

func getByTag(c *gin.Context) {
	tag := c.Params.ByName("id")

	c.Header("Content-Type", "application/json")
	c.Header("Access-Control-Allow-Origin", "*")
	c.JSON(http.StatusOK, sql.GetPostsByTag(tag))
}
