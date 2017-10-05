package http

import (
	"encoding/json"
	"fmt"
	"github.com/jacobrec/spearserver/sql"
	"net/http"
	"strconv"
	"strings"
)

func handler(w http.ResponseWriter, r *http.Request) {
	info := strings.Split(strings.Split(r.URL.Path, "/blog/")[1], "+")
	index, err := strconv.Atoi(info[0])
	number, err2 := strconv.Atoi(info[1])

	if err != nil || err2 != nil {
		fmt.Fprintf(w, "Error, input not recognised %q\n", r.URL.Path)
	} else {
		bp := sql.GetPosts(index, number)
		js, err := json.Marshal(bp)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")

		w.Write(js)
	}
}
func taghandler(w http.ResponseWriter, r *http.Request) {
	tag := strings.Split(r.URL.Path, "/blog/tags/")[1]
	bp := sql.GetPostsByTag(tag)
	js, err := json.Marshal(bp)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	w.Write(js)
}

func searchhandler(w http.ResponseWriter, r *http.Request) {
	tag := strings.Split(r.URL.Path, "/blog/search/")[1]
	bp := sql.GetPostsBySearch(tag)
	js, err := json.Marshal(bp)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	w.Write(js)
}

/*Begin starts the blog webserver on a specified port*/
func Begin(port string) {
	http.HandleFunc("/blog/", handler)
	http.HandleFunc("/blog/tags/", taghandler)
	http.HandleFunc("/blog/search/", searchhandler)

	http.ListenAndServe(port, nil)
}
