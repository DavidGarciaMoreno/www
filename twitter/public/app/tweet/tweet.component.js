"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tweet_service_1 = require("./tweet.service");
var TweetComponent = (function () {
    function TweetComponent(_tweetService) {
        this._tweetService = _tweetService;
        this.query = "";
        this.totalItems = 0;
        this.currentPage = 1;
        this.itemsPerPage = 5;
        this.startPoint = 0;
        this.noTweets = false;
        this.isLoading = false;
        this.errorMessage = "Oh no, No Tweets found :(";
    }
    TweetComponent.prototype.search = function () {
        var _this = this;
        this.isLoading = true;
        this._tweetService.searchTweets(this.query)
            .subscribe(function (res) {
            console.log(res);
            _this.assignResults(res);
        }, function (err) { return _this.errorMessage = err; }, function () {
            _this.query = '';
        });
    };
    TweetComponent.prototype.assignResults = function (response) {
        this.isLoading = false;
        this.tweets = response;
        if (this.tweets && !this.tweets.length) {
            this.noTweets = true;
        }
        this.noTweets = false;
        this.totalItems = this.tweets.length;
        this.startPoint = 0;
        this.perPageTweets = this.tweets.slice(this.startPoint, 5);
        this.currentPage = 1;
    };
    TweetComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items page page: ' + event.itemsPerPage);
        this.startPoint = (event.page - 1) * 5;
        this.perPageTweets = this.tweets.slice(this.startPoint + 5);
    };
    TweetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'tweet.template.html'
        }),
        __metadata("design:paramtypes", [tweet_service_1.TweetService])
    ], TweetComponent);
    return TweetComponent;
}());
exports.TweetComponent = TweetComponent;
//# sourceMappingURL=tweet.component.js.map