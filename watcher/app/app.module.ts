import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { UIModule } from './ui/ui.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import './shared/rxjs-extensions';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UIModule
  ],
  declarations: [ 
    AppComponent,
    HomeComponent
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }