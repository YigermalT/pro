import { HomeComponent } from './home.component';
import { P404Component } from './p404.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import {DataService} from './data.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    P404Component
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(MY_ROUTES)
    //AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
