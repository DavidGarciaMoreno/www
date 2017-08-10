import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './nav/nav.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { WeatherItemComponent, WeatherListComponent, WeatherSearchComponent } from './weather/index'

import { WeatherService } from './weather/weather.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
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
  providers: [ WeatherService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }