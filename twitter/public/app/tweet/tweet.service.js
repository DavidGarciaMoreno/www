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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var TweetService = (function () {
    function TweetService(_http) {
        this._http = _http;
        this.url = 'http://localhost:3000';
    }
    TweetService.prototype.searchTweets = function (query) {
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append("Access-Control-Allow-Headers", "Content-Type, Accept");
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            headers: this.headers,
            search: new http_1.URLSearchParams('query=' + query)
        });
        return this._http.get(this.url + "/search", options)
            .map(function (res) { return res.json().statuses; })
            .catch(this.handleError);
    };
    TweetService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json().error);
    };
    TweetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TweetService);
    return TweetService;
}());
exports.TweetService = TweetService;
//# sourceMappingURL=tweet.service.js.map