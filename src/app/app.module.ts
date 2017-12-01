import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './site/app.component';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
// My Stuff
import { MainPageComponent } from './site/mainpage/main.component';
import { AboutPageComponent } from './site/about/about.component';
import { BlogPageComponent } from './site/blog/blog.component';
import { SponsorsPageComponent } from './site/sponsors/sponsors.component';
import { TeamPageComponent } from './site/team/team.component';
import { MRPageComponent } from './site/mr/mr.component';
import { ContactPageComponent } from './site/contacts/contacts.component';

import { BlogService } from './site/blog/blog.service';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BlogPageComponent,
    AboutPageComponent,
    SponsorsPageComponent,
    TeamPageComponent,
    MRPageComponent,
    ContactPageComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatPaginatorModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
