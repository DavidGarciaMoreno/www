import { Component, OnInit } from '@angular/core';
import { IProfile } from './profile';
import { ProfileService } from './profile.service';
import { IWeather } from '../weather/weather';
import { WeatherService } from '../weather/weather.service';

@Component({
  moduleId: module.id,
  selector: 'we-sidebar',
  templateUrl: 'sidebar.template.html'
})
export class SidebarComponent implements OnInit {
	profiles: IProfile[];
	weatherItem: IWeather[];
	newProfile: IProfile = {
		profileName: '',
		city: ''
	};

  constructor(
  	private _profileService: ProfileService,
  	private _weatherService: WeatherService) {}

  ngOnInit() {
    this.profiles = this.getProfiles();
  }

  getProfiles() {
  	return this._profileService.getProfiles();
  }

  onSaveNew() {
  	const profileItem: IProfile = {
  		profileName: this.newProfile.profileName,
  		city: this.newProfile.city
  	};

  	console.log(profileItem);
  	this.saveProfile(profileItem);
  }

  saveProfile(profileItem: IProfile) {
  	this._profileService.saveNewProfile(profileItem);
  	this.newProfile.profileName = '';
  	this.newProfile.city = '';
  }

  onLoadProfile(profile: IProfile) {
  	this._weatherService.searchWeatherData(profile.city)
  			.subscribe(
  				data => this.weatherItem = data
  			);
  }

  onDeleteProfile(event: Event, profile: IProfile) {
  	event.stopPropagation();
  	this._profileService.deleteProfile(profile);
  }
}