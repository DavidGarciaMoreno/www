import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from './socket.service';
import { ITweet } from '../tweet/tweet';

@Component({
  moduleId: module.id,
  templateUrl: 'stream.template.html'
})

export class StreamComponent implements OnInit, OnDestroy {
  tweets: ITweet[] = [];
  isLoading: boolean = false;

  constructor(private _socketService: SocketService) { }

  ngOnInit() {
    // this.startStreams();
    // this.isStreaming();
    this.obvStreaming();
  }

  obvStreaming() {
    this._socketService.connectToStream()
      .subscribe(
        (tweet: ITweet) => {
          this.tweets.push(tweet);
          this.isLoading = false;
        },
        error => {
          console.log(error);
        });
  }
  stop() {
    this._socketService.emit('disconnect-stream', {});
  }

  ngOnDestroy() {
    this._socketService.removeListener('tweet');
  }

  // Using Events Directly
  // startStreams() {
  //   this._socketService.emit('tweet', {});
  //   this.isLoading = true;
  // }

  // isStreaming() {
  //   this._socketService.on('send-data', (tweet: ITweet) => {
  //     this.isLoading = false;
  //     this.tweets.push(tweet);
  //     console.log(tweet);
  //   });
  // }


}