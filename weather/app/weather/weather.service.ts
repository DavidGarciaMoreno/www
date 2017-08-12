import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { IWeather } from './weather';
import { WEATHER_ITEMS } from './weather.data';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class WeatherService {
  private URL: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private KEY: string = 'a0851bd9c268754d5ddaa0a008c9d7ed';
  private IMP: string = '&units=imperial';
  
  constructor(private _http: Http) {}

  getWeatherItems() {
    return WEATHER_ITEMS;
  }

  addWeatherItem(weatherItem: IWeather) {
    WEATHER_ITEMS.push(weatherItem);
    console.log(WEATHER_ITEMS);
  } 

  searchWeatherData(cityName: string): Observable<IWeather[]> {
    return this._http
               .get(this.URL + cityName + '&APPID=' + this.KEY + this.IMP)
               .map((res: Response) => <IWeather[]> res.json())
               .do(res => console.log('Weather Data Object' + JSON.stringify(res)))
               .catch(error => {
                 console.error(error);
                 return Observable.throw(error.json())
               });
  }
}