"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var nav_component_1 = require("./nav/nav.component");
var tweet_component_1 = require("./tweet/tweet.component");
var stream_component_1 = require("./stream/stream.component");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var ng2_bootstrap_2 = require("ng2-bootstrap");
var tweet_service_1 = require("./tweet/tweet.service");
var socket_service_1 = require("./stream/socket.service");
var time_ago_pipe_1 = require("./shared/time-ago.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.AppRoutingModule,
                http_1.HttpModule,
                ng2_bootstrap_2.AlertModule.forRoot(),
                ng2_bootstrap_1.PaginationModule.forRoot()
            ],
            declarations: [app_component_1.AppComponent,
                home_component_1.HomeComponent,
                nav_component_1.NavbarComponent,
                tweet_component_1.TweetComponent,
                stream_component_1.StreamComponent,
                time_ago_pipe_1.TimeAgoPipe
            ],
            providers: [tweet_service_1.TweetService,
                socket_service_1.SocketService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map