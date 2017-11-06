import { Component } from '@angular/core';
import { PageEvent } from '@angular/material';
import { BlogPost } from './BlogPost';
import { BlogService } from './blog.service';
import { MatPaginatorIntl } from '@angular/material';

@Component({
  selector: 'blog-page',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogPageComponent {
  posts = [];
  displayedPosts = [];
  // Initial values for paginator
  pageLength = 0;
  pageIndex = 0;
  pageSize = 5;
  pageSizeOptions = [5, 10, 25, 100];

  constructor(private blogService: BlogService, private pager: MatPaginatorIntl) {
    this.getPosts(0, 100);
  }

  getPosts(index: number, number: number) {
    this.blogService.getPosts(index, number)
    .subscribe((posts) => {
      this.posts = posts;
      this.pageLength = this.posts.length;
      this.displayedPosts = this.posts.slice(this.pageSize * this.pageIndex, this.pageSize * (this.pageIndex + 1));
    }, (error) => {
      alert("Error.");
    });
  }

  // Called when changing pages or changing the page size
  updatePages(pageEvent) {
    this.displayedPosts = this.posts.slice(pageEvent.pageSize * pageEvent.pageIndex, pageEvent.pageSize * (pageEvent.pageIndex + 1));
  }
}
