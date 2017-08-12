import { Component, Input } from '@angular/core';
import { IWeather } from './weather';

@Component({
  moduleId: module.id,
  selector: 'we-item',
  templateUrl: 'weather-item.template.html'
})
export class WeatherItemComponent {
	@Input('item') weatherItem: IWeather;

  constructor() {}

  ngOnInit() {
    
  }
}