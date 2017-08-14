import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './nav/nav.component';
import { TweetComponent }  from './tweet/tweet.component';

import { PaginationModule } from 'ng2-bootstrap';
import { AlertModule } from 'ng2-bootstrap';

import { TweetService } from './tweet/tweet.service';

@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   AppRoutingModule,
                   HttpModule,
                   AlertModule.forRoot(),
                   PaginationModule.forRoot()
                   ],
  declarations: [ AppComponent,
                          HomeComponent,
                          NavbarComponent,
                          TweetComponent
                          ],
  providers: [ TweetService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }