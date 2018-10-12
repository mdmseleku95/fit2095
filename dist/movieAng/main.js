(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addactor/addactor.component.css":
/*!*************************************************!*\
  !*** ./src/app/addactor/addactor.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/addactor/addactor.component.html":
/*!**************************************************!*\
  !*** ./src/app/addactor/addactor.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <div class=\"form-group\">\n    <label for=\"actorName\">Full Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"fullName\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"actorName\">Birth Year</label>\n    <input type=\"number\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"bYear\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSaveActor()\">Save Actor</button>\n</div>"

/***/ }),

/***/ "./src/app/addactor/addactor.component.ts":
/*!************************************************!*\
  !*** ./src/app/addactor/addactor.component.ts ***!
  \************************************************/
/*! exports provided: AddactorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddactorComponent", function() { return AddactorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddactorComponent = /** @class */ (function () {
    function AddactorComponent(dbService, router) {
        this.dbService = dbService;
        this.router = router;
        this.fullName = "";
        this.bYear = 0;
        this.actorId = "";
    }
    AddactorComponent.prototype.onSaveActor = function () {
        var _this = this;
        var obj = { name: this.fullName, bYear: this.bYear };
        this.dbService.createActor(obj).subscribe(function (result) {
            _this.router.navigate(["/listactors"]);
        });
    };
    AddactorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-addactor",
            template: __webpack_require__(/*! ./addactor.component.html */ "./src/app/addactor/addactor.component.html"),
            styles: [__webpack_require__(/*! ./addactor.component.css */ "./src/app/addactor/addactor.component.css")],
        }),
        __metadata("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddactorComponent);
    return AddactorComponent;
}());



/***/ }),

/***/ "./src/app/addmovie-toactor/addmovie-toactor.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/addmovie-toactor/addmovie-toactor.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/addmovie-toactor/addmovie-toactor.component.html":
/*!******************************************************************!*\
  !*** ./src/app/addmovie-toactor/addmovie-toactor.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Title</th>\n      <th>Year</th>\n      <th>Select!</th>\n    </tr>\n    <tr *ngFor=\"let item of moviesDB\">\n      <td>{{item.title}}</td>\n      <td>{{item.year}}</td>\n      <td><button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSelectUpdate(item)\">Select Movie</button></td>\n    </tr>\n    <tr>\n      <th>Name</th>\n      <th>Birth Year</th>\n      <th>Select!</th>\n    </tr>\n    <tr *ngFor=\"let itemA of actorsDB\">\n      <td>{{itemA.name}}</td>\n      <td>{{itemA.bYear}}</td>\n      <td><button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSelectActor(itemA)\">Select Actor</button></td>\n    </tr>\n  </table>\n  <hr>\n  <div *ngIf=\"moviesDB.length>0\">\n    <div class=\"form-group\">\n      <label for=\"movieName\">Movie Title</label>\n      <input type=\"text\" class=\"form-control\" id=\"movieName\" [(ngModel)]=\"movietitle\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"actorName\">Actor Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"fullName\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onUpdateMovie()\">Update</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/addmovie-toactor/addmovie-toactor.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/addmovie-toactor/addmovie-toactor.component.ts ***!
  \****************************************************************/
/*! exports provided: AddmovieToactorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmovieToactorComponent", function() { return AddmovieToactorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddmovieToactorComponent = /** @class */ (function () {
    function AddmovieToactorComponent(dbService) {
        this.dbService = dbService;
        this.actorsDB = [];
        this.moviesDB = [];
        this.section = 1;
        this.movietitle = "";
        this.year = 0;
        this.movieId = "";
        this.fullName = "";
        this.bYear = 0;
        this.actorId = "";
    }
    AddmovieToactorComponent.prototype.ngOnInit = function () {
        this.onGetMovies();
        this.onGetActors();
        throw new Error("Method not implemented.");
    };
    //Get all Movies
    AddmovieToactorComponent.prototype.onGetMovies = function () {
        var _this = this;
        this.dbService.getMovies().subscribe(function (data) {
            _this.moviesDB = data;
        });
    };
    AddmovieToactorComponent.prototype.onGetActors = function () {
        var _this = this;
        console.log("From on GetActors");
        return this.dbService.getActors().subscribe(function (data) {
            _this.actorsDB = data;
        });
    };
    //Create a new Movie POST request
    AddmovieToactorComponent.prototype.onSaveMovie = function () {
        var _this = this;
        var obj = { title: this.movietitle, year: this.year };
        this.dbService.createMovie(obj).subscribe(function (result) {
            _this.onGetMovies();
        });
    };
    // Update a Movie
    AddmovieToactorComponent.prototype.onSelectUpdate = function (item) {
        this.movietitle = item.title;
        this.year = item.year;
        this.movieId = item._id;
    };
    AddmovieToactorComponent.prototype.onSelectActor = function (itemA) {
        this.fullName = itemA.name;
        this.bYear = itemA.bYear;
        this.actorId = itemA._id;
    };
    AddmovieToactorComponent.prototype.onUpdateMovie = function () {
        var _this = this;
        var obj = { "id": this.movieId };
        this.dbService.addMovie(this.actorId, obj).subscribe(function (result) {
            _this.onGetMovies();
        });
    };
    AddmovieToactorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addmovie-toactor',
            template: __webpack_require__(/*! ./addmovie-toactor.component.html */ "./src/app/addmovie-toactor/addmovie-toactor.component.html"),
            styles: [__webpack_require__(/*! ./addmovie-toactor.component.css */ "./src/app/addmovie-toactor/addmovie-toactor.component.css")]
        }),
        __metadata("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])
    ], AddmovieToactorComponent);
    return AddmovieToactorComponent;
}());



/***/ }),

/***/ "./src/app/addmovie/addmovie.component.css":
/*!*************************************************!*\
  !*** ./src/app/addmovie/addmovie.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/addmovie/addmovie.component.html":
/*!**************************************************!*\
  !*** ./src/app/addmovie/addmovie.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <div class=\"form-group\">\n    <label for=\"movieName\">Movie Title</label>\n    <input type=\"text\" class=\"form-control\" id=\"movieName\" [(ngModel)]=\"movietitle\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"movieYear\">Movie Year</label>\n    <input type=\"number\" class=\"form-control\" id=\"movieName\" [(ngModel)]=\"year\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSaveMovie()\">Save Movie</button>\n</div>"

/***/ }),

/***/ "./src/app/addmovie/addmovie.component.ts":
/*!************************************************!*\
  !*** ./src/app/addmovie/addmovie.component.ts ***!
  \************************************************/
/*! exports provided: AddmovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmovieComponent", function() { return AddmovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddmovieComponent = /** @class */ (function () {
    function AddmovieComponent(dbService, router) {
        this.dbService = dbService;
        this.router = router;
        this.movietitle = "";
        this.year = 0;
        this.movieId = "";
    }
    AddmovieComponent.prototype.onSaveMovie = function () {
        var _this = this;
        var obj = { title: this.movietitle, year: this.year };
        this.dbService.createMovie(obj).subscribe(function (result) {
            _this.router.navigate(["/listmovies"]);
        });
    };
    AddmovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-addmovie",
            template: __webpack_require__(/*! ./addmovie.component.html */ "./src/app/addmovie/addmovie.component.html"),
            styles: [__webpack_require__(/*! ./addmovie.component.css */ "./src/app/addmovie/addmovie.component.css")],
        }),
        __metadata("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddmovieComponent);
    return AddmovieComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/listactors\" routerLinkActive=\"active\">List Actors </a>\n        </li>\n\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/listmovies\" routerLinkActive=\"active\">List Movies </a>\n        </li>\n\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/addactor\" routerLinkActive=\"active\">Add Actor </a>\n        </li>\n\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/addmovie\" routerLinkActive=\"active\">Add Movie </a>\n        </li>\n\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/updateactor\" routerLinkActive=\"active\">Update Actor</a>\n        </li>\n\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/addmovie-toactor\" routerLinkActive=\"active\">Add Movie To Actor</a>\n        </li>\n\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/deleteactor\" routerLinkActive=\"active\">Delete Actor</a>\n        </li>\n\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/deletemovie\" routerLinkActive=\"active\">Delete Movie</a>\n        </li>\n    </ul>\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'movieAng';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _listactors_listactors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listactors/listactors.component */ "./src/app/listactors/listactors.component.ts");
/* harmony import */ var _listmovies_listmovies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listmovies/listmovies.component */ "./src/app/listmovies/listmovies.component.ts");
/* harmony import */ var _addactor_addactor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addactor/addactor.component */ "./src/app/addactor/addactor.component.ts");
/* harmony import */ var _addmovie_addmovie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addmovie/addmovie.component */ "./src/app/addmovie/addmovie.component.ts");
/* harmony import */ var _deleteactor_deleteactor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./deleteactor/deleteactor.component */ "./src/app/deleteactor/deleteactor.component.ts");
/* harmony import */ var _deletemovie_deletemovie_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./deletemovie/deletemovie.component */ "./src/app/deletemovie/deletemovie.component.ts");
/* harmony import */ var _updateactor_updateactor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./updateactor/updateactor.component */ "./src/app/updateactor/updateactor.component.ts");
/* harmony import */ var _updatemovie_updatemovie_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./updatemovie/updatemovie.component */ "./src/app/updatemovie/updatemovie.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addmovie_toactor_addmovie_toactor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./addmovie-toactor/addmovie-toactor.component */ "./src/app/addmovie-toactor/addmovie-toactor.component.ts");
/* harmony import */ var _viewnotfound_viewnotfound_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./viewnotfound/viewnotfound.component */ "./src/app/viewnotfound/viewnotfound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: "listactors", component: _listactors_listactors_component__WEBPACK_IMPORTED_MODULE_6__["ListactorsComponent"] },
    { path: "listmovies", component: _listmovies_listmovies_component__WEBPACK_IMPORTED_MODULE_7__["ListmoviesComponent"] },
    { path: "addactor", component: _addactor_addactor_component__WEBPACK_IMPORTED_MODULE_8__["AddactorComponent"] },
    { path: "addmovie", component: _addmovie_addmovie_component__WEBPACK_IMPORTED_MODULE_9__["AddmovieComponent"] },
    { path: "updateactor", component: _updateactor_updateactor_component__WEBPACK_IMPORTED_MODULE_12__["UpdateactorComponent"] },
    { path: "updatemovie", component: _updatemovie_updatemovie_component__WEBPACK_IMPORTED_MODULE_13__["UpdatemovieComponent"] },
    { path: "deleteactor", component: _deleteactor_deleteactor_component__WEBPACK_IMPORTED_MODULE_10__["DeleteactorComponent"] },
    { path: "deletemovie", component: _deletemovie_deletemovie_component__WEBPACK_IMPORTED_MODULE_11__["DeletemovieComponent"] },
    { path: "addmovie-toactor", component: _addmovie_toactor_addmovie_toactor_component__WEBPACK_IMPORTED_MODULE_15__["AddmovieToactorComponent"] },
    { path: "", redirectTo: "/listactors", pathMatch: "full" },
    { path: "**", component: _viewnotfound_viewnotfound_component__WEBPACK_IMPORTED_MODULE_16__["ViewnotfoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _listactors_listactors_component__WEBPACK_IMPORTED_MODULE_6__["ListactorsComponent"],
                _listmovies_listmovies_component__WEBPACK_IMPORTED_MODULE_7__["ListmoviesComponent"],
                _addactor_addactor_component__WEBPACK_IMPORTED_MODULE_8__["AddactorComponent"],
                _addmovie_addmovie_component__WEBPACK_IMPORTED_MODULE_9__["AddmovieComponent"],
                _updateactor_updateactor_component__WEBPACK_IMPORTED_MODULE_12__["UpdateactorComponent"],
                _updatemovie_updatemovie_component__WEBPACK_IMPORTED_MODULE_13__["UpdatemovieComponent"],
                _deleteactor_deleteactor_component__WEBPACK_IMPORTED_MODULE_10__["DeleteactorComponent"],
                _deletemovie_deletemovie_component__WEBPACK_IMPORTED_MODULE_11__["DeletemovieComponent"],
                _addmovie_toactor_addmovie_toactor_component__WEBPACK_IMPORTED_MODULE_15__["AddmovieToactorComponent"],
                _viewnotfound_viewnotfound_component__WEBPACK_IMPORTED_MODULE_16__["ViewnotfoundComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
            providers: [_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/database.service.ts":
/*!*************************************!*\
  !*** ./src/app/database.service.ts ***!
  \*************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" }),
};
var DatabaseService = /** @class */ (function () {
    function DatabaseService(http) {
        this.http = http;
    }
    DatabaseService.prototype.getActors = function () {
        return this.http.get("/actors");
    };
    DatabaseService.prototype.getActor = function (id) {
        var url = "/actors/" + id;
        return this.http.get(url);
    };
    DatabaseService.prototype.createActor = function (data) {
        return this.http.post("/actors", data, httpOptions);
    };
    DatabaseService.prototype.updateActor = function (id, data) {
        var url = "/actors/" + id;
        return this.http.put(url, data, httpOptions);
    };
    DatabaseService.prototype.deleteActor = function (id) {
        var url = "/actors/" + id;
        return this.http.delete(url, httpOptions);
    };
    DatabaseService.prototype.getMovies = function () {
        return this.http.get("/movies");
    };
    DatabaseService.prototype.getMovie = function (id) {
        var url = "/movies/" + id;
        return this.http.get(url);
    };
    DatabaseService.prototype.createMovie = function (data) {
        return this.http.post("/movies", data, httpOptions);
    };
    DatabaseService.prototype.updateMovie = function (id, data) {
        var url = "/movies/" + id;
        return this.http.put(url, data, httpOptions);
    };
    DatabaseService.prototype.deleteMovie = function (id) {
        var url = "/movies/" + id;
        return this.http.delete(url, httpOptions);
    };
    DatabaseService.prototype.addMovie = function (id, data) {
        var url = "/actors/" + id + "/movies";
        return this.http.post(url, data, httpOptions);
    };
    DatabaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/deleteactor/deleteactor.component.css":
/*!*******************************************************!*\
  !*** ./src/app/deleteactor/deleteactor.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/deleteactor/deleteactor.component.html":
/*!********************************************************!*\
  !*** ./src/app/deleteactor/deleteactor.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Name</th>\n      <th>Birth Year</th>\n      <th>Delete?</th>\n    </tr>\n    <tr *ngFor=\"let item of actorsDB\">\n      <td>{{item.name}}</td>\n      <td>{{item.bYear}}</td>\n      <td><button type=\"submit\" class=\"btn btn-primary\" (click)=\"onDeleteActor(item)\">Delete</button></td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/deleteactor/deleteactor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/deleteactor/deleteactor.component.ts ***!
  \******************************************************/
/*! exports provided: DeleteactorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteactorComponent", function() { return DeleteactorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteactorComponent = /** @class */ (function () {
    function DeleteactorComponent(dbService, router) {
        this.dbService = dbService;
        this.router = router;
        this.actorsDB = [];
    }
    //Get all Actors
    DeleteactorComponent.prototype.onGetActors = function () {
        var _this = this;
        console.log("From on GetActors");
        return this.dbService.getActors().subscribe(function (data) {
            _this.actorsDB = data;
        });
    };
    //Delete Actor
    DeleteactorComponent.prototype.onDeleteActor = function (item) {
        var _this = this;
        this.dbService.deleteActor(item._id).subscribe(function (result) {
            _this.onGetActors();
            _this.router.navigate(["/listactors"]);
        });
    };
    // This callback function will be invoked with the component get initialized by Angular.
    DeleteactorComponent.prototype.ngOnInit = function () {
        this.onGetActors();
    };
    DeleteactorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-deleteactor",
            template: __webpack_require__(/*! ./deleteactor.component.html */ "./src/app/deleteactor/deleteactor.component.html"),
            styles: [__webpack_require__(/*! ./deleteactor.component.css */ "./src/app/deleteactor/deleteactor.component.css")],
        }),
        __metadata("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DeleteactorComponent);
    return DeleteactorComponent;
}());



/***/ }),

/***/ "./src/app/deletemovie/deletemovie.component.css":
/*!*******************************************************!*\
  !*** ./src/app/deletemovie/deletemovie.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/deletemovie/deletemovie.component.html":
/*!********************************************************!*\
  !*** ./src/app/deletemovie/deletemovie.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Movie Title</th>\n      <th>Movie Year</th>\n      <th>Delete?</th>\n    </tr>\n    <tr *ngFor=\"let item of moviesDB\">\n      <td>{{item.title}}</td>\n      <td>{{item.year}}</td>\n      <td><button type=\"submit\" class=\"btn btn-primary\" (click)=\"onDeleteMovie(item)\">Delete</button></td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/deletemovie/deletemovie.component.ts":
/*!******************************************************!*\
  !*** ./src/app/deletemovie/deletemovie.component.ts ***!
  \******************************************************/
/*! exports provided: DeletemovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletemovieComponent", function() { return DeletemovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeletemovieComponent = /** @class */ (function () {
    function DeletemovieComponent(dbService, router) {
        this.dbService = dbService;
        this.router = router;
        this.moviesDB = [];
    }
    //Get all Movies
    DeletemovieComponent.prototype.onGetMovies = function () {
        var _this = this;
        console.log("From on GetMovies");
        return this.dbService.getMovies().subscribe(function (data) {
            _this.moviesDB = data;
        });
    };
    //Delete Movie
    DeletemovieComponent.prototype.onDeleteMovie = function (item) {
        var _this = this;
        this.dbService.deleteMovie(item._id).subscribe(function (result) {
            _this.onGetMovies();
            _this.router.navigate(["/listmovies"]);
        });
    };
    // This callback function will be invoked with the component get initialized by Angular.
    DeletemovieComponent.prototype.ngOnInit = function () {
        this.onGetMovies();
    };
    DeletemovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-deletemovie",
            template: __webpack_require__(/*! ./deletemovie.component.html */ "./src/app/deletemovie/deletemovie.component.html"),
            styles: [__webpack_require__(/*! ./deletemovie.component.css */ "./src/app/deletemovie/deletemovie.component.css")],
        }),
        __metadata("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DeletemovieComponent);
    return DeletemovieComponent;
}());



/***/ }),

/***/ "./src/app/listactors/listactors.component.css":
/*!*****************************************************!*\
  !*** ./src/app/listactors/listactors.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listactors/listactors.component.html":
/*!******************************************************!*\
  !*** ./src/app/listactors/listactors.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"section\"> -->\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Name</th>\n      <th>Birth Year</th>\n    </tr>\n    <tr *ngFor=\"let item of actorsDB\">\n      <td>{{item.name}}</td>\n      <td>{{item.bYear}}</td>\n    </tr>\n  </table>\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/listactors/listactors.component.ts":
/*!****************************************************!*\
  !*** ./src/app/listactors/listactors.component.ts ***!
  \****************************************************/
/*! exports provided: ListactorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListactorsComponent", function() { return ListactorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListactorsComponent = /** @class */ (function () {
    function ListactorsComponent(dbService) {
        this.dbService = dbService;
        this.actorsDB = [];
    }
    ListactorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Hi From ListActors ngIOnit");
        this.dbService.getActors().subscribe(function (data) {
            _this.actorsDB = data;
        });
    };
    ListactorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-listactors",
            template: __webpack_require__(/*! ./listactors.component.html */ "./src/app/listactors/listactors.component.html"),
            styles: [__webpack_require__(/*! ./listactors.component.css */ "./src/app/listactors/listactors.component.css")],
        }),
        __metadata("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])
    ], ListactorsComponent);
    return ListactorsComponent;
}());



/***/ }),

/***/ "./src/app/listmovies/listmovies.component.css":
/*!*****************************************************!*\
  !*** ./src/app/listmovies/listmovies.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listmovies/listmovies.component.html":
/*!******************************************************!*\
  !*** ./src/app/listmovies/listmovies.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Movie Title</th>\n      <th>Movie Year</th>\n    </tr>\n    <tr *ngFor=\"let item of moviesDB\">\n      <td>{{item.title}}</td>\n      <td>{{item.year}}</td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/listmovies/listmovies.component.ts":
/*!****************************************************!*\
  !*** ./src/app/listmovies/listmovies.component.ts ***!
  \****************************************************/
/*! exports provided: ListmoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListmoviesComponent", function() { return ListmoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListmoviesComponent = /** @class */ (function () {
    function ListmoviesComponent(dbService) {
        this.dbService = dbService;
        this.moviesDB = [];
    }
    ListmoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Hi From ListMovies ngIOnit");
        this.dbService.getMovies().subscribe(function (data) {
            _this.moviesDB = data;
        });
    };
    ListmoviesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-listmovies",
            template: __webpack_require__(/*! ./listmovies.component.html */ "./src/app/listmovies/listmovies.component.html"),
            styles: [__webpack_require__(/*! ./listmovies.component.css */ "./src/app/listmovies/listmovies.component.css")],
        }),
        __metadata("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])
    ], ListmoviesComponent);
    return ListmoviesComponent;
}());



/***/ }),

/***/ "./src/app/updateactor/updateactor.component.css":
/*!*******************************************************!*\
  !*** ./src/app/updateactor/updateactor.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/updateactor/updateactor.component.html":
/*!********************************************************!*\
  !*** ./src/app/updateactor/updateactor.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Name</th>\n      <th>Birth Year</th>\n      <th>Select!</th>\n    </tr>\n    <tr *ngFor=\"let item of actorsDB\">\n      <td>{{item.name}}</td>\n      <td>{{item.bYear}}</td>\n      <td><button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSelectUpdate(item)\">Update</button></td>\n    </tr>\n  </table>\n  <hr>\n  <div *ngIf=\"actorsDB.length>0\">\n    <div class=\"form-group\">\n      <label for=\"actorName\">Full Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"fullName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"actorName\">Birth Year</label>\n      <input type=\"number\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"bYear\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onUpdateActor()\">Update Actor</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/updateactor/updateactor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/updateactor/updateactor.component.ts ***!
  \******************************************************/
/*! exports provided: UpdateactorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateactorComponent", function() { return UpdateactorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateactorComponent = /** @class */ (function () {
    function UpdateactorComponent(dbService, router) {
        this.dbService = dbService;
        this.router = router;
        this.fullName = "";
        this.bYear = 0;
        this.actorId = "";
        this.actorsDB = [];
    }
    //Get all Actors
    UpdateactorComponent.prototype.onGetActors = function () {
        var _this = this;
        console.log("From on GetActors");
        return this.dbService.getActors().subscribe(function (data) {
            _this.actorsDB = data;
        });
    };
    // Update an Actor
    UpdateactorComponent.prototype.onSelectUpdate = function (item) {
        this.fullName = item.name;
        this.bYear = item.bYear;
        this.actorId = item._id;
    };
    UpdateactorComponent.prototype.onUpdateActor = function () {
        var _this = this;
        var obj = { name: this.fullName, bYear: this.bYear };
        this.dbService.updateActor(this.actorId, obj).subscribe(function (result) {
            _this.onGetActors();
            _this.router.navigate(["/listactors"]);
        });
    };
    UpdateactorComponent.prototype.ngOnInit = function () {
        this.onGetActors();
    };
    UpdateactorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-updateactor",
            template: __webpack_require__(/*! ./updateactor.component.html */ "./src/app/updateactor/updateactor.component.html"),
            styles: [__webpack_require__(/*! ./updateactor.component.css */ "./src/app/updateactor/updateactor.component.css")],
        }),
        __metadata("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UpdateactorComponent);
    return UpdateactorComponent;
}());



/***/ }),

/***/ "./src/app/updatemovie/updatemovie.component.css":
/*!*******************************************************!*\
  !*** ./src/app/updatemovie/updatemovie.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/updatemovie/updatemovie.component.html":
/*!********************************************************!*\
  !*** ./src/app/updatemovie/updatemovie.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Movie Title</th>\n      <th>Movie Year</th>\n      <th>Select!</th>\n    </tr>\n    <tr *ngFor=\"let item of moviesDB\">\n      <td>{{item.title}}</td>\n      <td>{{item.year}}</td>\n      <td><button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSelectUpdate(item)\">Update</button></td>\n    </tr>\n  </table>\n  <hr>\n  <div *ngIf=\"moviesDB.length>0\">\n    <div class=\"form-group\">\n      <label for=\"movieName\">Movie Title</label>\n      <input type=\"text\" class=\"form-control\" id=\"movieName\" [(ngModel)]=\"movietitle\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"movieName\">Movie Year</label>\n      <input type=\"number\" class=\"form-control\" id=\"movieName\" [(ngModel)]=\"year\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onUpdateMovie()\">Update Movie</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/updatemovie/updatemovie.component.ts":
/*!******************************************************!*\
  !*** ./src/app/updatemovie/updatemovie.component.ts ***!
  \******************************************************/
/*! exports provided: UpdatemovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatemovieComponent", function() { return UpdatemovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdatemovieComponent = /** @class */ (function () {
    function UpdatemovieComponent(dbService, router) {
        this.dbService = dbService;
        this.router = router;
        this.title = "";
        this.year = 0;
        this.movieId = "";
        this.moviesDB = [];
    }
    //Get all Movies
    UpdatemovieComponent.prototype.onGetMovies = function () {
        var _this = this;
        console.log("From on GetMovies");
        return this.dbService.getMovies().subscribe(function (data) {
            _this.moviesDB = data;
        });
    };
    // Update an Actor
    UpdatemovieComponent.prototype.onSelectUpdate = function (item) {
        this.title = item.title;
        this.year = item.year;
        this.movieId = item._id;
    };
    UpdatemovieComponent.prototype.onUpdateMovies = function () {
        var _this = this;
        var obj = { name: this.title, year: this.year };
        this.dbService.updateMovie(this.movieId, obj).subscribe(function (result) {
            _this.onGetMovies();
            _this.router.navigate(["/listmovies"]);
        });
    };
    UpdatemovieComponent.prototype.ngOnInit = function () {
        this.onGetMovies();
    };
    UpdatemovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-updatemovie",
            template: __webpack_require__(/*! ./updatemovie.component.html */ "./src/app/updatemovie/updatemovie.component.html"),
            styles: [__webpack_require__(/*! ./updatemovie.component.css */ "./src/app/updatemovie/updatemovie.component.css")],
        }),
        __metadata("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UpdatemovieComponent);
    return UpdatemovieComponent;
}());



/***/ }),

/***/ "./src/app/viewnotfound/viewnotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/viewnotfound/viewnotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/viewnotfound/viewnotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/viewnotfound/viewnotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>View Not Found</h1>"

/***/ }),

/***/ "./src/app/viewnotfound/viewnotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/viewnotfound/viewnotfound.component.ts ***!
  \********************************************************/
/*! exports provided: ViewnotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewnotfoundComponent", function() { return ViewnotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewnotfoundComponent = /** @class */ (function () {
    function ViewnotfoundComponent() {
    }
    ViewnotfoundComponent.prototype.ngOnInit = function () {
    };
    ViewnotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewnotfound',
            template: __webpack_require__(/*! ./viewnotfound.component.html */ "./src/app/viewnotfound/viewnotfound.component.html"),
            styles: [__webpack_require__(/*! ./viewnotfound.component.css */ "./src/app/viewnotfound/viewnotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewnotfoundComponent);
    return ViewnotfoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mthokozisi\Lab11\movieAng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map