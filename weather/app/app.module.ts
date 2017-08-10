import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './nav/nav.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { WeatherItemComponent, WeatherListComponent, WeatherSearchComponent } from './weather/index'

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    NavbarComponent,
    WeatherItemComponent, 
    WeatherListComponent, 
    WeatherSearchComponent,
    SidebarComponent 
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }