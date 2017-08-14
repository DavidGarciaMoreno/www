import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ICountry } from './country';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class GeonameService {
	private URL: string = "http://api.geonames.org/countryInfoJSON?username=david.garcia.dev";
	
	constructor(private _htpp: Http) {}

	getCountries(): Observable<ICountry[]> {
		return this._htpp
							 .get(this.URL)
							 .map((response: Response) => <ICountry[]> response.json().geonames)
							 .do(data => console.log(data))
							 .catch(error => {
							 	console.log(error);
							 	return Observable.throw(error.json());
						});
	}
}