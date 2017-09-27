import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { MainPageComponent } from './mainpage/main.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SPEAR';
  fullname = 'Space Alberta Exploration Project'
}
