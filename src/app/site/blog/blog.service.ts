import { BlogPost } from "./BlogPost"
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx"

@Injectable()
export class BlogService {
  private baseUrl = "http://localhost:8049/blog/";  // web api URL
  constructor(private http: Http) { }
  getPosts(index, number) {
    return this.http.get(this.baseUrl + "posts?index=" + index + "&number=" + number)
      .map(res => <BlogPost[]>res.json())
      .catch(error => {
        console.log(error);
        return Observable.throw(error);
      });
  }
}
