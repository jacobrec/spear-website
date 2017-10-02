package main

import "time"

// BlogPost is a datatype to hold a single blog post,
// ensures consitancy across I/O
type blogPost struct {
	Title     string `json:"title"`
	Author    string `json:"author"`
	Post      string `json:"post"`
	Timestamp uint64 `json:"timestamp"`
}

// In around the year 2310, this will overflow, not a realistic problem at this time, so I'm ignoring this
func (bp *blogPost) setDateToNow() {
	bp.Timestamp = uint64(time.Now().UTC().UnixNano())
}
