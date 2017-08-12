import { Component, OnInit } from '@angular/core';
import { IWeather } from './weather';
import { WeatherService } from './weather.service';

@Component({
  moduleId: module.id,
  selector: 'we-list',
  templateUrl: 'weather-list.template.html'
})
export class WeatherListComponent implements OnInit {
  weatherItems: IWeather[];

  constructor(private _weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherItems();    
  }

  getWeatherItems(): void {
    this.weatherItems = this._weatherService.getWeatherItems();
  }
}