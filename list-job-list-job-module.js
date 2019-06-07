(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-job-list-job-module"],{

/***/ "./src/app/list-job/job-level/job-level.component.html":
/*!*************************************************************!*\
  !*** ./src/app/list-job/job-level/job-level.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  job-level works!\n</p>\n"

/***/ }),

/***/ "./src/app/list-job/job-level/job-level.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/list-job/job-level/job-level.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3Qtam9iL2pvYi1sZXZlbC9qb2ItbGV2ZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/list-job/job-level/job-level.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/list-job/job-level/job-level.component.ts ***!
  \***********************************************************/
/*! exports provided: JobLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobLevelComponent", function() { return JobLevelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var JobLevelComponent = /** @class */ (function () {
    function JobLevelComponent(_Activatedroute) {
        this._Activatedroute = _Activatedroute;
    }
    JobLevelComponent.prototype.ngOnInit = function () {
    };
    JobLevelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job-level',
            template: __webpack_require__(/*! ./job-level.component.html */ "./src/app/list-job/job-level/job-level.component.html"),
            styles: [__webpack_require__(/*! ./job-level.component.scss */ "./src/app/list-job/job-level/job-level.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], JobLevelComponent);
    return JobLevelComponent;
}());



/***/ }),

/***/ "./src/app/list-job/job/job.component.html":
/*!*************************************************!*\
  !*** ./src/app/list-job/job/job.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    \n        <div class=\"ui-g-3\">\n            <div class=\"logo-box\">\n                <a data-item-id=\"1080993\" href=\"https://www.vietnamworks.com/tuyen-gap-02-it-business-analyst-lam-viec-tai-ha-noi-1-1080993-jv/?utm_source=vnw_homepage&amp;utm_medium=HotJob&amp;utm_campaign=HotJob&amp;source=homePage\" target=\"_blank\" title=\"Việc làm - Tuyển Gấp 02 IT Business Analyst Làm Việc Tại Hà Nội - Yumeshin Vietnam - Hà Nội\" tabindex=\"0\">\n                <img style=\"width: 150px;height: 100px;\" class=\"img-responsive logo\" id=\"topjob-logo-1080993\" src=\"https://techtalk.vn/wp-content/uploads/2018/06/Cover-696x392.jpg\" alt=\"Tuyển Gấp 02 IT Business Analyst Làm Việc Tại Hà Nội\" >\n                </a>\n            </div>\n        </div>\n        <div class=\"ui-g-9\">\n            <!-- <div class=\"detail\">\n                <p class=\"job-title\">{{item.title}}</p>\n              <div class=\"job-title-bottom\" style=\"margin-top: -1px;\">\n                  <span>Lương:</span>\n                  <span style=\"color: darkgoldenrod\">{{item.maxSalary}}</span>\n                  <span class=\"hidden-xs\">-</span>\n                  <span>Khu vực:</span>\n                  <span style=\"color: darkgoldenrod\" class=\"location hidden-xs\">{{item.location}}</span>\n                  <span class=\"hidden-xs\">-</span>\n                  <span>Đã đăng:</span>\n                  <span style=\"color: darkgoldenrod\">{{resule}}</span>\n                  <span class=\"hot-job-badge\">Hot</span>\n                  \n              </div>\n              \n            </div> -->\n            <div class=\"detail\">\n                <p class=\"job-title\">{{item.title}}</p>\n                <span>Lương: </span>\n                  <span style=\"color: darkgoldenrod\">{{item.maxSalary}}</span>\n                  <span class=\"hidden-xs\"> | </span>\n                  <span>Khu vực: </span>\n                  <span style=\"color: darkgoldenrod\" class=\"location hidden-xs\">{{item.location}}</span>\n                  <span class=\"hidden-xs\"> | </span>\n                  <span>Đã đăng: </span>\n                  <span style=\"color: darkgoldenrod\">{{resule}}</span>\n            </div>\n            <div style=\"margin-top: 25px;margin-left: 0px;\">\n                <a class=\"hienthichitiet\" routerLink=\"/detailjob/{{item.idJob}}\">Hiển thị chi tiết ></a>\n            </div>\n        </div>\n        <div class=\"ui-g-3\">\n            <div *ngIf=\"checkApply==true\">\n                \n            </div>\n          <div *ngIf=\"checkApply==false\">\n              <!-- <img style=\"width: 30px;height: 30px;\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYk6jckNjAjYwNXGbAc-cX7HuwqD3B8b0Gm7V50dtxHOEd5RPF\"> -->\n            <div *ngIf=\"check==false\" style=\"margin-top:-45px;margin-left:370%;\">\n                <!-- <a style=\"color: black\">Lưu</a>   -->\n                <i class=\"far fa-heart\" >\n                    <span class=\"cheked\"  (click)=\"Save()\">\n                        <label style=\"margin-left:10px;color:red;\">Lưu </label>\n                      </span>\n                </i>\n                \n            </div>\n            \n            <div *ngIf=\"check==true\" class=\"daluu\">\n              <span class=\"cheked\"  (click)=\"UnSave()\" >\n                <label>Đã lưu</label>\n                \n              </span>\n            </div>\n            \n          </div>\n           \n        \n        \n    </div>\n    <hr style=\"border-width: 1px solid;\">\n  </div> \n\n\n\n\n\n  \n"

/***/ }),

/***/ "./src/app/list-job/job/job.component.scss":
/*!*************************************************!*\
  !*** ./src/app/list-job/job/job.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g {\n  width: 150%;\n  height: auto;\n  float: left;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 16pt;\n  padding: 0px;\n  margin-left: 40%; }\n\n.detail {\n  width: 100%; }\n\n.daluu {\n  text-align: center;\n  border-radius: 5px;\n  background: #4caf50; }\n\n.daluu span label {\n  color: #fff;\n  font-weight: bold; }\n\na.hienthichitiet {\n  background: #a70d0d;\n  padding: 5px 25px;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #fff; }\n\na.hienthichitiet:hover {\n  background: #4caf50;\n  transition: .5s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1qb2Ivam9iL0U6XFxXZWJNVkNcXEZyb250ZW5kVUlIXFxGcm9udGVuZFVJSC9zcmNcXGFwcFxcbGlzdC1qb2JcXGpvYlxcam9iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUVYLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFdBQVUsRUFBQTs7QUFFZDtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksV0FBVTtFQUNWLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWY7RUFDSSxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGlzdC1qb2Ivam9iL2pvYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5ob3Qtam9iLWJhZGdle1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkN2M3ZDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICAgIHdpZHRoOiA0MHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAyMHB4O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IDEwcHg7XHJcbi8vICAgICByaWdodDogMTBweDtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgIG1hcmdpbi10b3A6IC01MnB4O1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDU4NXB4O1xyXG4vLyB9XHJcbi8vIC5sb2dvLWJveFxyXG4vLyB7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDI1OHB4O1xyXG4vLyB9XHJcbi8vIC5kZXRhaWxcclxuLy8ge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogLTU3cHg7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuLy8gfVxyXG4vLyAuam9iLXRpdGxlXHJcbi8vIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjVweDtcclxuLy8gICAgIGNvbG9yOiBhcXVhO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogNDdweDtcclxuLy8gfVxyXG5cclxuLy8gLmpvYi10aXRsZS1ib3R0b217XHJcbi8vICAgICBmb250LXNpemU6IDE4cHg7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuLy8gfVxyXG4vLyAudGFicy1jb250YWluZXJcclxuLy8ge1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcclxuLy8gICAgIGJhY2tncm91bmQ6Y29ybnNpbGs7XHJcbi8vICAgICBwYWRkaW5nOiAzNXB4IDQwcHggODBweDtcclxuLy8gfVxyXG4vLyAubG9nby1ib3ggaW1ne1xyXG4vLyAgICAgd2lkdGg6IDUwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDUwcHg7O1xyXG4vLyB9XHJcblxyXG4udWktZ3tcclxuICAgIHdpZHRoOiAxNTAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB0O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxufVxyXG5cclxuLmRldGFpbHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuLmRhbHV1e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzRjYWY1MDtcclxufVxyXG4uZGFsdXUgc3BhbiBsYWJlbHtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5hLmhpZW50aGljaGl0aWV0IHtcclxuICAgIGJhY2tncm91bmQ6ICNhNzBkMGQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbmEuaGllbnRoaWNoaXRpZXQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzRjYWY1MDtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/list-job/job/job.component.ts":
/*!***********************************************!*\
  !*** ./src/app/list-job/job/job.component.ts ***!
  \***********************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/candidate.service */ "./src/app/service/candidate.service.ts");
/* harmony import */ var src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/job.service */ "./src/app/service/job.service.ts");
/* harmony import */ var src_app_models_saveJob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/saveJob */ "./src/app/models/saveJob.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var JobComponent = /** @class */ (function () {
    function JobComponent(candidateService, jobService) {
        this.candidateService = candidateService;
        this.jobService = jobService;
        this.check = false;
        this.checkApply = false;
        this.date2 = new Date();
        this.today = new Date();
        this.jstoday = '';
        this.year = "";
        this.month = "";
        this.day = "";
        this.resule = "";
    }
    JobComponent.prototype.Save = function () {
        if (this.candidateService.IsLogged() == false) {
            alert('Vui long dang nhap vao trong he thong');
        }
        else {
            this.x = new src_app_models_saveJob__WEBPACK_IMPORTED_MODULE_4__["SaveJob"]();
            this.x.idJob = this.item.idJob;
            this.x.idUser = this.candidateService.getId();
            // console.log(this.item.idJob);
            // console.log(this.candidateService.getId());
            this.jobService.saveJob(this.x)
                .subscribe(function (res) {
            });
            this.check = true;
        }
    };
    JobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.year += this.item.startdate[0];
        this.year += this.item.startdate[1];
        this.year += this.item.startdate[2];
        this.year += this.item.startdate[3];
        console.log(this.year);
        this.month += this.item.startdate[5];
        this.month += this.item.startdate[6];
        this.day += this.item.startdate[8];
        this.day += this.item.startdate[9];
        console.log(this.month);
        console.log(this.day);
        this.date2.setFullYear(parseInt(this.year), parseInt(this.month) - 1, parseInt(this.day));
        //this.date2.setFullYear(2019,4,19);
        //  this.date2=this.item.startdate;
        //  //this.date2.setFullYear(this.item.startdate);
        this.jstoday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
        var diff = Math.floor(this.today.getTime() - this.date2.getTime());
        var day = 1000 * 60 * 60 * 24;
        var days = Math.floor(diff / day);
        var months = Math.floor(days / 31);
        var years = Math.floor(months / 12);
        var message = this.date2.toDateString();
        message += " was ";
        message += days + " days ";
        message += months + " months ";
        message += years + " years ago \n";
        // alert(message);
        if (days < 31) {
            this.resule = days + " days";
        }
        else {
            this.resule = months + " month";
        }
        if (this.candidateService.IsLogged() == true) {
            this.x = new src_app_models_saveJob__WEBPACK_IMPORTED_MODULE_4__["SaveJob"]();
            this.x.idJob = this.item.idJob;
            this.x.idUser = this.candidateService.getId();
            this.jobService.checkSaveJob(this.x)
                .subscribe(function (res) {
                if (res == "OK") {
                    _this.check = true;
                }
                else {
                    _this.check = false;
                }
            });
            this.x = new src_app_models_saveJob__WEBPACK_IMPORTED_MODULE_4__["SaveJob"]();
            this.x.idJob = this.item.idJob;
            this.x.idUser = this.candidateService.getId();
            this.jobService.checkApplyJob(this.x)
                .subscribe(function (res) {
                if (res == "OK") {
                    _this.checkApply = true;
                }
            });
        }
    };
    JobComponent.prototype.UnSave = function () {
        var _this = this;
        if (this.candidateService.IsLogged() == true) {
            this.x = new src_app_models_saveJob__WEBPACK_IMPORTED_MODULE_4__["SaveJob"]();
            this.x.idJob = this.item.idJob;
            this.x.idUser = this.candidateService.getId();
            this.jobService.unCheckSaveJob(this.x)
                .subscribe(function (res) {
                if (res == "OK") {
                    _this.check = false;
                }
                else {
                    _this.check = true;
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], JobComponent.prototype, "item", void 0);
    JobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job',
            template: __webpack_require__(/*! ./job.component.html */ "./src/app/list-job/job/job.component.html"),
            styles: [__webpack_require__(/*! ./job.component.scss */ "./src/app/list-job/job/job.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_2__["CandidateService"], src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"]])
    ], JobComponent);
    return JobComponent;
}());



/***/ }),

/***/ "./src/app/list-job/list-job-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/list-job/list-job-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ListJobRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListJobRoutingModule", function() { return ListJobRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_job_list_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-job/list-job.component */ "./src/app/list-job/list-job/list-job.component.ts");




var routes = [
    { path: '', component: _list_job_list_job_component__WEBPACK_IMPORTED_MODULE_3__["ListJobComponent"] },
];
var ListJobRoutingModule = /** @class */ (function () {
    function ListJobRoutingModule() {
    }
    ListJobRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ListJobRoutingModule);
    return ListJobRoutingModule;
}());



/***/ }),

/***/ "./src/app/list-job/list-job.module.ts":
/*!*********************************************!*\
  !*** ./src/app/list-job/list-job.module.ts ***!
  \*********************************************/
/*! exports provided: ListJobModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListJobModule", function() { return ListJobModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_job_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-job-routing.module */ "./src/app/list-job/list-job-routing.module.ts");
/* harmony import */ var _list_job_list_job_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-job/list-job.component */ "./src/app/list-job/list-job/list-job.component.ts");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./job/job.component */ "./src/app/list-job/job/job.component.ts");
/* harmony import */ var _job_level_job_level_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./job-level/job-level.component */ "./src/app/list-job/job-level/job-level.component.ts");







var ListJobModule = /** @class */ (function () {
    function ListJobModule() {
    }
    ListJobModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_job_list_job_component__WEBPACK_IMPORTED_MODULE_4__["ListJobComponent"], _job_job_component__WEBPACK_IMPORTED_MODULE_5__["JobComponent"], _job_level_job_level_component__WEBPACK_IMPORTED_MODULE_6__["JobLevelComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _list_job_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListJobRoutingModule"],
            ]
        })
    ], ListJobModule);
    return ListJobModule;
}());



/***/ }),

/***/ "./src/app/list-job/list-job/list-job.component.html":
/*!***********************************************************!*\
  !*** ./src/app/list-job/list-job/list-job.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div class=\"ui-g-12\">\n      \n  </div>\n</div>\n\n<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"ui-g\">\n            <div class=\"ui-g-12\">\n                    <div *ngFor=\"let item of listJob\">\n                        <div class=\"ui-g job-box\">\n                            <app-job [item]=\"item\"></app-job>\n                        </div>\n                    </div>\n            </div>\n            \n        </div>\n    </div>\n</div> \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/list-job/list-job/list-job.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/list-job/list-job/list-job.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".job-box {\n  border-radius: 5px;\n  margin: 10px 5px;\n  box-shadow: 0 0 5px #666;\n  background: #fff; }\n\n.job-box:hover {\n  background: #f1f1f1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1qb2IvbGlzdC1qb2IvRTpcXFdlYk1WQ1xcRnJvbnRlbmRVSUhcXEZyb250ZW5kVUlIL3NyY1xcYXBwXFxsaXN0LWpvYlxcbGlzdC1qb2JcXGxpc3Qtam9iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saXN0LWpvYi9saXN0LWpvYi9saXN0LWpvYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qb2ItYm94IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMTBweCA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICM2NjY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5qb2ItYm94OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/list-job/list-job/list-job.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/list-job/list-job/list-job.component.ts ***!
  \*********************************************************/
/*! exports provided: ListJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListJobComponent", function() { return ListJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/job.service */ "./src/app/service/job.service.ts");
/* harmony import */ var src_app_models_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/find */ "./src/app/models/find.ts");





var ListJobComponent = /** @class */ (function () {
    function ListJobComponent(jobService, _Activatedroute) {
        this.jobService = jobService;
        this._Activatedroute = _Activatedroute;
        this.testcc = ['A', 'B', 'C'];
        this.listJob = [];
    }
    ListJobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.x = new src_app_models_find__WEBPACK_IMPORTED_MODULE_4__["Find"]();
        this.skill = this._Activatedroute.snapshot.params['id'];
        this.level = this._Activatedroute.snapshot.params['id2'];
        this.location = this._Activatedroute.snapshot.params['id1'];
        this.x.skill = this.skill;
        this.x.location = this.location;
        this.x.level = this.level;
        this.jobService.searchJobs(this.x)
            .subscribe(function (res) {
            _this.listJob = res;
            console.log(res);
        });
    };
    ListJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-job',
            template: __webpack_require__(/*! ./list-job.component.html */ "./src/app/list-job/list-job/list-job.component.html"),
            styles: [__webpack_require__(/*! ./list-job.component.scss */ "./src/app/list-job/list-job/list-job.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ListJobComponent);
    return ListJobComponent;
}());



/***/ }),

/***/ "./src/app/models/find.ts":
/*!********************************!*\
  !*** ./src/app/models/find.ts ***!
  \********************************/
/*! exports provided: Find */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Find", function() { return Find; });
var Find = /** @class */ (function () {
    function Find() {
    }
    return Find;
}());



/***/ })

}]);
//# sourceMappingURL=list-job-list-job-module.js.map