import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { MainPageComponent } from './mainpage/main.component'
import { BlogPageComponent } from './blog/blog.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SPEAR';
  fullname = 'Space Alberta Exploration Project'
  showMain = true;
  showAbout = false;
  showSponsors = false;
  showBlog = false;
  isMobile = false;
  isDesktop = false;

  mobHeight: any;
  mobWidth: any;

  constructor() {
    this.resize();
  }
  resize() {
    this.mobHeight = (window.screen.height);
    this.mobWidth = (window.screen.width);
    if (this.mobWidth < this.mobHeight) {
      this.isDesktop = false;
      this.isMobile = true;
    } else {
      this.isDesktop = true;
      this.isMobile = false;
    }
  }

  onResize(event) {
    this.resize();
  }

  shouldShowNothing() {
    this.showMain = false;
    this.showAbout = false;
    this.showSponsors = false;
    this.showBlog = false;
  }
  shouldShowMain() {
    this.shouldShowNothing();
    this.showMain = true;
  }
  shouldShowAbout() {
    this.shouldShowNothing();
    this.showAbout = true;
  }
  shouldShowBlog() {
    this.shouldShowNothing();
    this.showBlog = true;
  }
  shouldShowSponsors() {
    this.shouldShowNothing();
    this.showSponsors = true;
  }
}
