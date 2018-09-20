var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
var SearchUserProfileComponent = /** @class */ (function () {
    function SearchUserProfileComponent(apiService) {
        this.apiService = apiService;
        this.contacts = [];
    }
    SearchUserProfileComponent.prototype.ngOnInit = function () {
        //this.getUserProfile();
        this.getJson();
    };
    SearchUserProfileComponent.prototype.getUserProfile = function () {
        var _this = this;
        this.apiService.getUserProfile().subscribe(function (data) {
            _this.contacts = data;
            console.log(data);
        });
    };
    SearchUserProfileComponent.prototype.getJson = function () {
        var _this = this;
        this.apiService.getJSON().subscribe(function (data) {
            _this.contacts = data;
            console.log(data);
        });
    };
    SearchUserProfileComponent = __decorate([
        Component({
            selector: 'app-search-user-profile',
            templateUrl: './search-user-profile.component.html',
            styleUrls: ['./search-user-profile.component.css']
        }),
        __metadata("design:paramtypes", [ApiService])
    ], SearchUserProfileComponent);
    return SearchUserProfileComponent;
}());
export { SearchUserProfileComponent };
//# sourceMappingURL=search-user-profile.component.js.map