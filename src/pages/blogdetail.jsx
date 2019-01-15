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
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{timestamp}</p>
        <p>{post}</p>
        <p>{id}</p>
        { tags.map((t) => <p key={t}>{t}</p>) }
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
