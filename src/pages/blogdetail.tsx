import React, { useState, useEffect, ReactElement } from "react";
import axios from "axios";
import "./blog.css";

import { blogServerURL } from "./blog";

interface state {
  id: number,
  title?: string,
  author?: string,
  post?: string,
  tags?: Array<string>,
  timestamp?: number,
}

const SpearBlogDetailPage: React.FC = (props: any) => {

  const [state, setState] = useState<state>({
    id: -1,
  })

  useEffect(() => {
    const getBlogPosts = async () => {
      const request = await axios.get(
        blogServerURL + `post/${props.match.params.id}`
      );
      if (request.request.status >= 200 && request.request.status < 300) {
        try {
          setState(request.data);
        } catch (err) {
          console.log("getBlogPost for blog details failed");
          console.log(request);
        }
      }
    }

    getBlogPosts();
  }, [props.match.params.id])

  const normalRender = (): ReactElement => {
    const { id, title, author, post, tags, timestamp } = state;

    return (
      <div className="blog-post">
        <div className="blog-header">
          <h3 className="blog-title">{title}</h3>
          <p className="blog-author">{author}</p>
          <p className="blog-time">{prettyTime(timestamp!)}</p>
          <p className="blog-id">{id}</p>
        </div>
        // @ts-ignore
        <p className="blog-body" dangerouslySetInnerHTML={{ __html: post }}></p>
        <div className="blog-tags">
          {tags!.map(t => (
            <p key={t}>#{t}</p>
          ))}
        </div>
      </div>
    );
  }

  const loadingRender = (): ReactElement => <p>Loading...</p>

  return state.id === -1 ? loadingRender() : normalRender()

}

export const prettyTime = (stamp: number): string => {
  const t = new Date(stamp / 1000000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Dec"
  ];
  return `${months[t.getMonth()]} ${t.getDate()}, ${t.getFullYear() + 1900}`;
}

export default SpearBlogDetailPage;