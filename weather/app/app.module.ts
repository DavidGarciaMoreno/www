import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './nav/nav.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { WeatherItemComponent, WeatherListComponent, WeatherSearchComponent } from './weather/index'

import { WeatherService } from './weather/weather.service';
import { ProfileService } from './sidebar/profile.service';
import './shared/rxjs-extensions';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
  providers: [ 
    WeatherService,
    ProfileService 
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }