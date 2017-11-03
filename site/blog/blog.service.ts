import { BlogPost } from "./BlogPost"
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx"

@Injectable()
export class BlogService {
  private baseUrl = "http://localhost:8049/blog/";  // web api URL
  constructor(private http: HttpClient) { }
  getPosts(index, number) {
    return this.http.get(this.baseUrl + "posts?index=" + index + "&number=" + number);
  }
}
