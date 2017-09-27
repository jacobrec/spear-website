import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './site/app.component';


// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';

// My Stuff
import { MainPageComponent } from './site/mainpage/main.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MdButtonModule,
    MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
