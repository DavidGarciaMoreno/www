import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Carousel } from './carousel';

@Injectable()
export class CarouselService {
  private carselUrl: string = 'api/carousel_items.json';
  
  constructor(private _http: Http) {}

  featured(): Observable<Carousel[]> {
    return this._http
               .get(this.carselUrl)
               .map((response: Response) => <Carousel[]> response.json())
               .do(data => console.log(data))
               .catch(this.handleError);
  }

  private handleError(error: Response) {
    let msg = `Error status code ${error.status} status ${error.statusText} at ${error.url}`;
    return Observable.throw(msg);
  }
}