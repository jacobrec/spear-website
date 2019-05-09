import React, { Component } from 'react'
import axios from 'axios'
import './blog.css'

import { blogServerURL } from "./blog"

export default class SpearBlogDetailPage extends Component {
  constructor(props){
    super(props)
    this.state = {id: -1}
  }
  render(){
    if(this.state.id === -1)
      return this.loadingRender()
    return this.normalRender()
  }

  componentWillMount(){
    this.getBlogPosts()
  }

  normalRender(){
    const { id, title, author, post, tags, timestamp } = this.state

    return (
      <div className="blog-post">
        <div className="blog-header">
          <h3 className="blog-title">{title}</h3>
          <p className="blog-author">{author}</p>
          <p className="blog-time">{prettyTime(timestamp)}</p>
          <p className="blog-id">{id}</p>
        </div>
        <p className="blog-body" dangerouslySetInnerHTML={{__html: post}}></p>
        <div className="blog-tags">
          { tags.map((t) => <p key={t}>#{t}</p>) }
        </div>
      </div>
    )
  }

  loadingRender(){
    return <p>Loading...</p>
  }

  async getBlogPosts(){
    let request = await axios.get(blogServerURL + `post/${this.props.match.params.id}`)
    if(request.request.status >= 200 && request.request.status < 300){
      try {
        this.setState(request.data)
      } catch (err) {
        console.log("getBlogPost for blog details failed")
        console.log(request)
      }
    }
  }
}

export function prettyTime(stamp) {
    let t = new Date(stamp / 1000000)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Dec']
    return `${months[t.getMonth()]} ${t.getDate()}, ${t.getYear() + 1900}`
}
