import React, { useState, useEffect } from 'react'
import SpearTitle from "../components/SpearTitle"
import { Link } from "react-router-dom";
import axios from 'axios'
import './blog.css'
import { prettyTime } from './blogdetail'


export const blogServerURL = "http://spaceualberta.ca:8049/blog/"
//export const blogServerURL = "http://localhost:8049/blog/"


const SpearBlogSummary = (props: any) => {
  const { id, title, author, timestamp } = props.data
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

const SpearBlogPage: React.FC = (props: any) => {

  const [blog, setBlog] = useState(
    [{ id: -1 }]
  )


  useEffect(() => {
    const getBlogPosts = async (offset: number, number: number) => {
      let request = await axios.get(blogServerURL + `posts?offset=${offset}&number=${number}`)
      if (request.request.status >= 200 && request.request.status < 300) {
        setBlog(request.data)
      }
    }
    getBlogPosts(0, 25)
  }, [])


  console.log(blog)
  const posts = blog.map((p) => {
    if (p.id === -1) {
      return <p key={p.id}>Error</p>
    }
    return <SpearBlogSummary data={p} />
  })
  return (
    <div className="ver">
      <SpearTitle title="Blog" img={require('../img/logos/blog.svg')} />
      {posts}
    </div>
  )
}

const getPrettyDateTime = (timestamp: number) => <p className="blog-summary-time"> {prettyTime(timestamp)} </p>

export {
  SpearBlogSummary
}
export default SpearBlogPage;