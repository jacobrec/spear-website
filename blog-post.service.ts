import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class BlogPostService {
  server: string = "http://localhost:4200/"; // Server ip address.

  constructor(private http: Http) { }

  getPosts(): Observable<Post[]> {
    return this.http.get(this.server + "blog/posts")
      .map(response => this.parsePosts(response.json()));
  }

  getByTag(tag: string): Observable<Post[]> {
    return this.http.get(this.server + "blog/search/tag/" + tag)
      .map(response => this.parsePosts(response.json()));
  }

  getByString(string: string): Observable<Post[]> {
    return this.http.get(this.server + "blog/search/string/" + string)
      .map(response => this.parsePosts(response.json()));
  }

  createPost(post: Post) {
    this.http.put(this.server + "blog/", post);
  }

  deletePost(id: string) {
    this.http.delete("blog/" + id);
  }

  // Parses a JSON array of blog posts.
  private parsePosts(array): Post[] {
    let posts: Post[] = [];
    for (let object of array) {
      posts.push(new Post(object.title, object.author, object.post, object.timestamp));
    }
    return posts;
  }
}

export class Post {
  constructor(public title, public author, public post, public timestamp) { }
}
