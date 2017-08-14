import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ITweet } from './tweet';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TweetService {
  headers: Headers;
  private url: string = 'http://localhost:3000';

  constructor(private _http: Http) { }

  searchTweets(query: string): Observable<ITweet[]> {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append("Access-Control-Allow-Headers", "Content-Type, Accept");

    let options = new RequestOptions({
      method: RequestMethod.Get,
      headers: this.headers,
      search: new URLSearchParams('query=' + query)
    })

    return this._http.get(`${this.url}/search`, options)
                      .map((res: Response) => res.json().statuses)
                      .catch(this.handleError);
  }

   private handleError (error: Response) {
    return Observable.throw(error.json().error);
  }

}