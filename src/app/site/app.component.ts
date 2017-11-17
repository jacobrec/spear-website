import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { MainPageComponent } from './mainpage/main.component';
import { MatMenuModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SPEAR';
  showMain = true;
  showAbout = false;
  showSponsors = false;
  showBlog = false;
  showTeam = false;
  showMR1 = false;
  showContact = false;

  isMobile = false;

  constructor() {
    this.resize();
  }

  resize() {
    // Consider window widths less than 768px to be mobile.
    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
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
    this.showTeam = false;
    this.showMR1 = false;
    this.showContact = false;
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
  shouldShowTeam() {
    this.shouldShowNothing();
    this.showTeam = true;
  }
  shouldShowMR1() {
    this.shouldShowNothing();
    this.showMR1 = true;
  }
  shouldShowContact() {
    this.shouldShowNothing();
    this.showContact = true;
  }
}
