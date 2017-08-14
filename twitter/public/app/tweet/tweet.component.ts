import { Component } from '@angular/core';
import { TweetService } from './tweet.service';
import { ITweet } from './tweet';

@Component({
  moduleId: module.id,
  templateUrl: 'tweet.template.html'
})

export class TweetComponent {
  tweets: ITweet[];
  query: string = "";
  totalItems: number = 0;
  currentPage: number = 1;
  perPageTweets: any[];
  itemsPerPage: number = 5;
  startPoint: number = 0;
  noTweets: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = "Oh no, No Tweets found :(";

  constructor(private _tweetService: TweetService) { }

  search() {
    this.isLoading = true;
    this._tweetService.searchTweets(this.query)
          .subscribe(
             (res: ITweet[]) => {
               console.log(res);
               this.assignResults(res);
             },
             err => this.errorMessage = <any>err,
             () => {
               this.query = '';
             })
    }

    assignResults(response: any) {
      this.isLoading = false;
      this.tweets = response;

      if(!this.tweets.length) {
        this.noTweets = true;
      }
      this.noTweets = false;
      this.totalItems = this.tweets.length;
      this.startPoint = 0;
      this.perPageTweets = this.tweets.slice(this.startPoint, 5);
      this.currentPage = 1;
    }

    pageChanged(event: any) {
      console.log('Page changed to: ' + event.page);
      console.log('Number items page page: ' + event.itemsPerPage);
      this.startPoint = (event.page - 1)*5;
      this.perPageTweets = this.tweets.slice(this.startPoint+5);
    }

}