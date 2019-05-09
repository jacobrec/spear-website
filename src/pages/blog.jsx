import React, { Component } from 'react'
import SpearTitle from "../components/SpearTitle"
import { Link } from "react-router-dom";
import axios from 'axios'
import './blog.css'
import { prettyTime } from './blogdetail'


export const blogServerURL = "http://spaceualberta.ca:8049/blog/"
//export const blogServerURL = "http://localhost:8049/blog/"



export class SpearBlogSummary extends Component {
  render(){
    const { id, title, author, timestamp } = this.props.data
    return (
      <Link to={`/blog/${id}`} className="ver card blog-summary">
        <h3 className="blog-summary-title">{title}</h3>
        <div className="hor drift">
          <p className="blog-summary-author">{author}</p>
          {getPrettyDateTime(timestamp)}
        </div>
      </Link>
    )
  }
}

export default class SpearBlogPage extends Component {
  constructor(props){
    super(props)
    this.state = {blog: [{id: -1}]}
  }

  componentWillMount(){
    this.getBlogPosts(0, 25)
  }

  async getBlogPosts(offset, number){
    let request = await axios.get(blogServerURL + `posts?offset=${offset}&number=${number}`)
    if(request.request.status >= 200 && request.request.status < 300){
      this.setState({blog: request.data})
    }
  }

  render(){
    console.log(this.state)
    const posts = this.state.blog.map((p) => {
      if(p.id === -1){
        return <p key={p.id}>Error</p>
      }
      return <SpearBlogSummary data={p}/>
    })
    return (
      <div className="ver">
        <SpearTitle title="Blog" img={require('../img/logos/blog.svg')}/>
        {posts}
      </div>
    )
  }
}

function getPrettyDateTime(timestamp){
    return <p className="blog-summary-time"> { prettyTime(timestamp) } </p>
  }
