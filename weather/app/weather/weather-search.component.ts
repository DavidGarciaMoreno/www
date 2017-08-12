import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeatherService } from './weather.service';
import { IWeather } from './weather';

@Component({
  moduleId: module.id,
  selector: 'we-search',
  templateUrl: 'weather-search.template.html'
})
export class WeatherSearchComponent implements OnInit {
	searchInput: FormControl = new FormControl('');
	city: any = {};

  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {
    this.searchInput.valueChanges
    	  .debounceTime(400)
    	  .distinctUntilChanged() // emit when the current value is different than the last
    	  //takes the current observable and makes a request, cancels any pending requests
    	  .switchMap((input: string) => this._weatherService.searchWeatherData(input))
    	  .subscribe(
    	  	city => this.city = city,
    	  	err => { 
    	  		console.log(`Can't get the weather. Error code: ${err.cod}, Message: ${err.message}`);
    	  		console.log(err);
    	  	}
    	  )
  }

  onSubmit() {
  	const weatherItem: IWeather = {
  		cityName: this.city.name,
  		description: this.city.weather[0].description,
  		temperature: this.city.main.temp
  	};

  	console.log(weatherItem);
  	this.addWeatherItem(weatherItem);
  }

  addWeatherItem(item: IWeather) {
  	this._weatherService.addWeatherItem(item);
  	this.searchInput.reset();
  }
}