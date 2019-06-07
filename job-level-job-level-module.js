(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["job-level-job-level-module"],{

/***/ "./src/app/job-level/job-level-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/job-level/job-level-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: JobLevelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobLevelRoutingModule", function() { return JobLevelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _jobleve_jobleve_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobleve/jobleve.component */ "./src/app/job-level/jobleve/jobleve.component.ts");




var routes = [
    { path: '', component: _jobleve_jobleve_component__WEBPACK_IMPORTED_MODULE_3__["JobleveComponent"] }
];
var JobLevelRoutingModule = /** @class */ (function () {
    function JobLevelRoutingModule() {
    }
    JobLevelRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], JobLevelRoutingModule);
    return JobLevelRoutingModule;
}());



/***/ }),

/***/ "./src/app/job-level/job-level.module.ts":
/*!***********************************************!*\
  !*** ./src/app/job-level/job-level.module.ts ***!
  \***********************************************/
/*! exports provided: JobLevelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobLevelModule", function() { return JobLevelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _job_level_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-level-routing.module */ "./src/app/job-level/job-level-routing.module.ts");
/* harmony import */ var _job_level_job_level_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job-level/job-level.component */ "./src/app/job-level/job-level/job-level.component.ts");
/* harmony import */ var _jobleve_jobleve_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jobleve/jobleve.component */ "./src/app/job-level/jobleve/jobleve.component.ts");






var JobLevelModule = /** @class */ (function () {
    function JobLevelModule() {
    }
    JobLevelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_job_level_job_level_component__WEBPACK_IMPORTED_MODULE_4__["JobLevelComponent"], _jobleve_jobleve_component__WEBPACK_IMPORTED_MODULE_5__["JobleveComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _job_level_routing_module__WEBPACK_IMPORTED_MODULE_3__["JobLevelRoutingModule"]
            ]
        })
    ], JobLevelModule);
    return JobLevelModule;
}());



/***/ }),

/***/ "./src/app/job-level/job-level/job-level.component.html":
/*!**************************************************************!*\
  !*** ./src/app/job-level/job-level/job-level.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  job-level works!\n</p>\n"

/***/ }),

/***/ "./src/app/job-level/job-level/job-level.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/job-level/job-level/job-level.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi1sZXZlbC9qb2ItbGV2ZWwvam9iLWxldmVsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/job-level/job-level/job-level.component.ts":
/*!************************************************************!*\
  !*** ./src/app/job-level/job-level/job-level.component.ts ***!
  \************************************************************/
/*! exports provided: JobLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobLevelComponent", function() { return JobLevelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JobLevelComponent = /** @class */ (function () {
    function JobLevelComponent() {
    }
    JobLevelComponent.prototype.ngOnInit = function () {
    };
    JobLevelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job-level',
            template: __webpack_require__(/*! ./job-level.component.html */ "./src/app/job-level/job-level/job-level.component.html"),
            styles: [__webpack_require__(/*! ./job-level.component.scss */ "./src/app/job-level/job-level/job-level.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JobLevelComponent);
    return JobLevelComponent;
}());



/***/ }),

/***/ "./src/app/job-level/jobleve/jobleve.component.html":
/*!**********************************************************!*\
  !*** ./src/app/job-level/jobleve/jobleve.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  jobleve works!\n</p>\n"

/***/ }),

/***/ "./src/app/job-level/jobleve/jobleve.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/job-level/jobleve/jobleve.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi1sZXZlbC9qb2JsZXZlL2pvYmxldmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/job-level/jobleve/jobleve.component.ts":
/*!********************************************************!*\
  !*** ./src/app/job-level/jobleve/jobleve.component.ts ***!
  \********************************************************/
/*! exports provided: JobleveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobleveComponent", function() { return JobleveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/job.service */ "./src/app/service/job.service.ts");




var JobleveComponent = /** @class */ (function () {
    function JobleveComponent(jobService, _Activatedroute) {
        this.jobService = jobService;
        this._Activatedroute = _Activatedroute;
    }
    JobleveComponent.prototype.ngOnInit = function () {
        this.idLevel = this._Activatedroute.snapshot.params['id'];
        this.jobService.GetJobLevel(this.idLevel)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    JobleveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobleve',
            template: __webpack_require__(/*! ./jobleve.component.html */ "./src/app/job-level/jobleve/jobleve.component.html"),
            styles: [__webpack_require__(/*! ./jobleve.component.scss */ "./src/app/job-level/jobleve/jobleve.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], JobleveComponent);
    return JobleveComponent;
}());



/***/ })

}]);
//# sourceMappingURL=job-level-job-level-module.js.map