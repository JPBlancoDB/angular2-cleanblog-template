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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./app.component');
var footer_component_1 = require('./footer/footer.component');
var header_component_1 = require('./header/header.component');
var navigation_component_1 = require('./navigation/navigation.component');
var main_component_1 = require('./home/main/main.component');
var post_preview_component_1 = require('./home/post-preview/post-preview.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                app_routes_1.Routing
            ],
            exports: [],
            declarations: [
                app_component_1.AppComponent,
                footer_component_1.FooterComponent,
                header_component_1.HeaderComponent,
                navigation_component_1.NavigationComponent,
                main_component_1.MainComponent,
                post_preview_component_1.PostPreviewComponent
            ],
            providers: [],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map