package blog

import "time"

// Post is a datatype to hold a single blog post,
// ensures consitancy across I/O
type Post struct {
	ID        int      `json:"id"`
	Title     string   `json:"title"`
	Author    string   `json:"author"`
	Post      string   `json:"post"`
	Timestamp uint64   `json:"timestamp"`
	Tags      []string `json:"tags"`
}

// SetDateToNow sets the posts current timestamp to right now.
// In around the year 2310, this will overflow, not a realistic problem at this time, so I'm ignoring this
func (bp *Post) SetDateToNow() {
	bp.Timestamp = uint64(time.Now().UTC().UnixNano())
}
