(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["candidate-candidate-module"],{

/***/ "./src/app/candidate/account-candidate/account-candidate.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/candidate/account-candidate/account-candidate.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div class=\"ui-g-12\">\n      <div class=\"ui-g\">\n          <img src=\"https://image.flaticon.com/icons/svg/59/59965.svg\" style=\"width: 50px;height: 50px;margin-top:13px;\">\n          <h1>Thông tin tài khoản</h1>\n      </div>\n      <div class=\"ui-g\">\n          <div class=\"ui-g-2\">\n                <h3>Mật khẩu hiện tại</h3>\n          </div>\n          <div class=\"ui-g-4\">\n              <input  type=\"password\" placeholder=\"Nhập mật khẩu cũ\" pPassword [(ngModel)]=\"property1\"/>\n          </div>\n      </div>\n      <div class=\"ui-g\">\n          <div class=\"ui-g-2\">\n                <h3>Mật khẩu mới</h3>\n          </div>\n          <div class=\"ui-g-4\">\n              <input type=\"password\" placeholder=\"Nhập mật khẩu mới\" pPassword [(ngModel)]=\"property2\"/>\n          </div>\n      </div>\n      <div class=\"ui-g\">\n          <div class=\"ui-g-2\">\n                <h3>Nhập lại mật khẩu mới</h3>\n          </div>\n          <div class=\"ui-g-4\">\n              <input type=\"password\" placeholder=\"Nhập lại mật khẩu mới\" pPassword [(ngModel)]=\"property3\"/>\n          </div>\n      </div>\n      <div class=\"ui-g\">\n          <div class=\"ui-g-3\" style=\"margin-left: 302px;\">\n              <button pButton type=\"button\" style=\"margin-right: 5px;\" label=\"Hủy\" ></button>\n              <button pButton type=\"button\" style=\"margin-right: 5px;\" label=\"Lưu\" ></button>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/candidate/account-candidate/account-candidate.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/candidate/account-candidate/account-candidate.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  margin-top: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlL2FjY291bnQtY2FuZGlkYXRlL0U6XFxXZWJNVkNcXEZyb250ZW5kVUlIXFxGcm9udGVuZFVJSC9zcmNcXGFwcFxcY2FuZGlkYXRlXFxhY2NvdW50LWNhbmRpZGF0ZVxcYWNjb3VudC1jYW5kaWRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9hY2NvdW50LWNhbmRpZGF0ZS9hY2NvdW50LWNhbmRpZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0XHJcbntcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/candidate/account-candidate/account-candidate.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/candidate/account-candidate/account-candidate.component.ts ***!
  \****************************************************************************/
/*! exports provided: AccountCandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountCandidateComponent", function() { return AccountCandidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccountCandidateComponent = /** @class */ (function () {
    function AccountCandidateComponent() {
    }
    AccountCandidateComponent.prototype.ngOnInit = function () {
    };
    AccountCandidateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-candidate',
            template: __webpack_require__(/*! ./account-candidate.component.html */ "./src/app/candidate/account-candidate/account-candidate.component.html"),
            styles: [__webpack_require__(/*! ./account-candidate.component.scss */ "./src/app/candidate/account-candidate/account-candidate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccountCandidateComponent);
    return AccountCandidateComponent;
}());



/***/ }),

/***/ "./src/app/candidate/apply-work/apply-work.component.html":
/*!****************************************************************!*\
  !*** ./src/app/candidate/apply-work/apply-work.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css\" integrity=\"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp\" crossorigin=\"anonymous\">\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\" integrity=\"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay\" crossorigin=\"anonymous\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n<link rel=\"stylesheet\" href=\"./assets/css/style1.css\"> \n\n\n<div class=\"ui-g\">\n  <div class=\"ui-g-12\">\n      <div class=\"ui-g\">\n          <div class=\"ui-g-3\" style=\"margin-top: -10px;padding-left: 200px;\">\n                  <a data-item-id=\"1080993\"  target=\"_blank\" title=\"Việc làm - Tuyển Gấp 02 IT Business Analyst Làm Việc Tại Hà Nội - Yumeshin Vietnam - Hà Nội\" tabindex=\"0\">\n                      <img src=\"https://ih1.redbubble.net/image.416412087.0587/mp,840x830,matte,f8f8f8,t-pad,750x1000,f8f8f8.jpg\"   style=\"width: 100px;height: 100px;\" class=\"img-responsive logo\" id=\"topjob-logo-1080993\"   alt=\"Tuyển Gấp 02 IT Business Analyst Làm Việc Tại Hà Nội\" >\n                  </a>\n          </div>\n          <div class=\"ui-g-5\" style=\"margin-top: -50px;\">\n                  <p class=\"job-title\">\n                            {{applyWork.title}}\n                      </p>\n                    <div class=\"job-title-bottom\">\n                        <span>\n                            {{applyWork.level}}\n                        </span>\n                        <span class=\"hidden-xs\">-</span>\n                        <span class=\"location hidden-xs\">{{applyWork.location}}</span>\n                        <span class=\"hot-job-badge\">Hot</span>\n                    </div>\n          </div>\n          <div class=\"ui-g-1\">\n                  <div class=\"text-light\">Ngày hết hạn<span class=\"hidden-md hidden-lg m-r-xs\">:</span></div>\n                  <div class=\"text-strong\">{{applyWork.endDate}}</div>\n          </div>\n          <div class=\"ui-g-3\">\n                  <div class=\"text-light\">Đã ứng tuyển<span class=\"hidden-md hidden-lg m-r-xs\">:</span></div>\n                  <div class=\"text-strong\">6/5/2019</div>\n          </div>\n      </div>\n  </div>\n</div> "

/***/ }),

/***/ "./src/app/candidate/apply-work/apply-work.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/candidate/apply-work/apply-work.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hot-job-badge {\n  background-color: #fd7c7d;\n  border-radius: 3px;\n  color: #fff;\n  font-weight: 500;\n  width: 40px;\n  height: 20px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  position: relative;\n  margin-left: 524px;\n  margin-top: -84px; }\n\n.logo-box {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: -285px; }\n\n.detail {\n  position: absolute;\n  margin-top: -101px;\n  margin-left: 32px; }\n\n.job-title {\n  font-size: 25px;\n  color: aqua;\n  margin-top: 43px; }\n\n.job-title-bottom {\n  font-size: 18px;\n  margin-top: 24px; }\n\n.tabs-container {\n  border: 1px solid #f2f2f2;\n  background: cornsilk;\n  padding: 35px 40px 80px; }\n\n.logo-box img {\n  width: 50px;\n  height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlL2FwcGx5LXdvcmsvRTpcXFdlYk1WQ1xcRnJvbnRlbmRVSUhcXEZyb250ZW5kVUlIL3NyY1xcYXBwXFxjYW5kaWRhdGVcXGFwcGx5LXdvcmtcXGFwcGx5LXdvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUVyQjtFQUVJLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBa0IsRUFBQTs7QUFFdEI7RUFFSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUVyQjtFQUVJLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUVJLHlCQUF5QjtFQUN6QixvQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9hcHBseS13b3JrL2FwcGx5LXdvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG90LWpvYi1iYWRnZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZDdjN2Q7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogNTI0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtODRweDtcclxufVxyXG4ubG9nby1ib3hcclxue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0Oi0yODVweDtcclxufVxyXG4uZGV0YWlsXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IC0xMDFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG59XHJcbi5qb2ItdGl0bGVcclxue1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IGFxdWE7XHJcbiAgICBtYXJnaW4tdG9wOiA0M3B4O1xyXG59XHJcblxyXG4uam9iLXRpdGxlLWJvdHRvbXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuLnRhYnMtY29udGFpbmVyXHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XHJcbiAgICBiYWNrZ3JvdW5kOmNvcm5zaWxrO1xyXG4gICAgcGFkZGluZzogMzVweCA0MHB4IDgwcHg7XHJcbn1cclxuLmxvZ28tYm94IGltZ3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4OztcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/candidate/apply-work/apply-work.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/candidate/apply-work/apply-work.component.ts ***!
  \**************************************************************/
/*! exports provided: ApplyWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyWorkComponent", function() { return ApplyWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_saveWork__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/saveWork */ "./src/app/models/saveWork.ts");



var ApplyWorkComponent = /** @class */ (function () {
    function ApplyWorkComponent() {
    }
    ApplyWorkComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_saveWork__WEBPACK_IMPORTED_MODULE_2__["SaveWork"])
    ], ApplyWorkComponent.prototype, "applyWork", void 0);
    ApplyWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apply-work',
            template: __webpack_require__(/*! ./apply-work.component.html */ "./src/app/candidate/apply-work/apply-work.component.html"),
            styles: [__webpack_require__(/*! ./apply-work.component.scss */ "./src/app/candidate/apply-work/apply-work.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApplyWorkComponent);
    return ApplyWorkComponent;
}());



/***/ }),

/***/ "./src/app/candidate/candidate-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/candidate/candidate-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CandidateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateRoutingModule", function() { return CandidateRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _candidate_candidate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./candidate/candidate.component */ "./src/app/candidate/candidate/candidate.component.ts");
/* harmony import */ var _infomation_add_infomation_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./infomation-add/infomation-add.component */ "./src/app/candidate/infomation-add/infomation-add.component.ts");
/* harmony import */ var _my_work_my_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-work/my-work.component */ "./src/app/candidate/my-work/my-work.component.ts");
/* harmony import */ var _list_savework_list_savework_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-savework/list-savework.component */ "./src/app/candidate/list-savework/list-savework.component.ts");
/* harmony import */ var _list_applywork_list_applywork_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-applywork/list-applywork.component */ "./src/app/candidate/list-applywork/list-applywork.component.ts");
/* harmony import */ var _view_cv_view_cv_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-cv/view-cv.component */ "./src/app/candidate/view-cv/view-cv.component.ts");
/* harmony import */ var _list_job_interview_list_job_interview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-job-interview/list-job-interview.component */ "./src/app/candidate/list-job-interview/list-job-interview.component.ts");
/* harmony import */ var _detail_interview_detail_interview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detail-interview/detail-interview.component */ "./src/app/candidate/detail-interview/detail-interview.component.ts");











var routes = [
    { path: '', component: _candidate_candidate_component__WEBPACK_IMPORTED_MODULE_3__["CandidateComponent"],
        children: [
            { path: 'thongTinCaNhan', component: _infomation_add_infomation_add_component__WEBPACK_IMPORTED_MODULE_4__["InfomationAddComponent"] },
            { path: 'viecLamCuaToi', component: _my_work_my_work_component__WEBPACK_IMPORTED_MODULE_5__["MyWorkComponent"] },
            { path: 'saveWork', component: _list_savework_list_savework_component__WEBPACK_IMPORTED_MODULE_6__["ListSaveworkComponent"] },
            { path: 'applywork', component: _list_applywork_list_applywork_component__WEBPACK_IMPORTED_MODULE_7__["ListApplyworkComponent"] },
            { path: 'viewCV', component: _view_cv_view_cv_component__WEBPACK_IMPORTED_MODULE_8__["ViewCVComponent"] },
            { path: 'listJobInterview', component: _list_job_interview_list_job_interview_component__WEBPACK_IMPORTED_MODULE_9__["ListJobInterviewComponent"] },
            { path: 'detailInterview/:id/:idJob', component: _detail_interview_detail_interview_component__WEBPACK_IMPORTED_MODULE_10__["DetailInterviewComponent"] },
        ]
    },
];
var CandidateRoutingModule = /** @class */ (function () {
    function CandidateRoutingModule() {
    }
    CandidateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CandidateRoutingModule);
    return CandidateRoutingModule;
}());



/***/ }),

/***/ "./src/app/candidate/candidate.module.ts":
/*!***********************************************!*\
  !*** ./src/app/candidate/candidate.module.ts ***!
  \***********************************************/
/*! exports provided: CandidateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateModule", function() { return CandidateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _candidate_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./candidate-routing.module */ "./src/app/candidate/candidate-routing.module.ts");
/* harmony import */ var _candidate_candidate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./candidate/candidate.component */ "./src/app/candidate/candidate/candidate.component.ts");
/* harmony import */ var _header_candidate_header_candidate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header-candidate/header-candidate.component */ "./src/app/candidate/header-candidate/header-candidate.component.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _profile_candidate_profile_candidate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-candidate/profile-candidate.component */ "./src/app/candidate/profile-candidate/profile-candidate.component.ts");
/* harmony import */ var _infomation_candidate_infomation_candidate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./infomation-candidate/infomation-candidate.component */ "./src/app/candidate/infomation-candidate/infomation-candidate.component.ts");
/* harmony import */ var _level_candidate_level_candidate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./level-candidate/level-candidate.component */ "./src/app/candidate/level-candidate/level-candidate.component.ts");
/* harmony import */ var _langugae_candidate_langugae_candidate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./langugae-candidate/langugae-candidate.component */ "./src/app/candidate/langugae-candidate/langugae-candidate.component.ts");
/* harmony import */ var _experience_candidate_experience_candidate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./experience-candidate/experience-candidate.component */ "./src/app/candidate/experience-candidate/experience-candidate.component.ts");
/* harmony import */ var _education_candidate_education_candidate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./education-candidate/education-candidate.component */ "./src/app/candidate/education-candidate/education-candidate.component.ts");
/* harmony import */ var _infomation_refer_infomation_refer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./infomation-refer/infomation-refer.component */ "./src/app/candidate/infomation-refer/infomation-refer.component.ts");
/* harmony import */ var _dream_work_dream_work_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dream-work/dream-work.component */ "./src/app/candidate/dream-work/dream-work.component.ts");
/* harmony import */ var _infomation_add_infomation_add_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./infomation-add/infomation-add.component */ "./src/app/candidate/infomation-add/infomation-add.component.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _my_work_my_work_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./my-work/my-work.component */ "./src/app/candidate/my-work/my-work.component.ts");
/* harmony import */ var _save_work_save_work_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./save-work/save-work.component */ "./src/app/candidate/save-work/save-work.component.ts");
/* harmony import */ var _apply_work_apply_work_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./apply-work/apply-work.component */ "./src/app/candidate/apply-work/apply-work.component.ts");
/* harmony import */ var _list_savework_list_savework_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./list-savework/list-savework.component */ "./src/app/candidate/list-savework/list-savework.component.ts");
/* harmony import */ var _list_applywork_list_applywork_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./list-applywork/list-applywork.component */ "./src/app/candidate/list-applywork/list-applywork.component.ts");
/* harmony import */ var _create_notify_work_create_notify_work_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./create-notify-work/create-notify-work.component */ "./src/app/candidate/create-notify-work/create-notify-work.component.ts");
/* harmony import */ var _notify_work_notify_work_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./notify-work/notify-work.component */ "./src/app/candidate/notify-work/notify-work.component.ts");
/* harmony import */ var _list_notifywork_list_notifywork_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./list-notifywork/list-notifywork.component */ "./src/app/candidate/list-notifywork/list-notifywork.component.ts");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _account_candidate_account_candidate_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./account-candidate/account-candidate.component */ "./src/app/candidate/account-candidate/account-candidate.component.ts");
/* harmony import */ var ngx_rating__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-rating */ "./node_modules/ngx-rating/index.js");
/* harmony import */ var ngx_rating__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(ngx_rating__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/password.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(primeng_password__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/inplace */ "./node_modules/primeng/inplace.js");
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(primeng_inplace__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _view_cv_view_cv_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./view-cv/view-cv.component */ "./src/app/candidate/view-cv/view-cv.component.ts");
/* harmony import */ var _list_job_interview_list_job_interview_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./list-job-interview/list-job-interview.component */ "./src/app/candidate/list-job-interview/list-job-interview.component.ts");
/* harmony import */ var _detail_interview_detail_interview_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./detail-interview/detail-interview.component */ "./src/app/candidate/detail-interview/detail-interview.component.ts");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_43__);














































var CandidateModule = /** @class */ (function () {
    function CandidateModule() {
    }
    CandidateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_infomation_refer_infomation_refer_component__WEBPACK_IMPORTED_MODULE_14__["InfomationReferComponent"], _candidate_candidate_component__WEBPACK_IMPORTED_MODULE_5__["CandidateComponent"], _header_candidate_header_candidate_component__WEBPACK_IMPORTED_MODULE_6__["HeaderCandidateComponent"], _profile_candidate_profile_candidate_component__WEBPACK_IMPORTED_MODULE_8__["ProfileCandidateComponent"], _infomation_candidate_infomation_candidate_component__WEBPACK_IMPORTED_MODULE_9__["InfomationCandidateComponent"], _level_candidate_level_candidate_component__WEBPACK_IMPORTED_MODULE_10__["LevelCandidateComponent"], _langugae_candidate_langugae_candidate_component__WEBPACK_IMPORTED_MODULE_11__["LangugaeCandidateComponent"], _experience_candidate_experience_candidate_component__WEBPACK_IMPORTED_MODULE_12__["ExperienceCandidateComponent"], _education_candidate_education_candidate_component__WEBPACK_IMPORTED_MODULE_13__["EducationCandidateComponent"], _infomation_refer_infomation_refer_component__WEBPACK_IMPORTED_MODULE_14__["InfomationReferComponent"], _dream_work_dream_work_component__WEBPACK_IMPORTED_MODULE_15__["DreamWorkComponent"], _infomation_add_infomation_add_component__WEBPACK_IMPORTED_MODULE_16__["InfomationAddComponent"], _my_work_my_work_component__WEBPACK_IMPORTED_MODULE_23__["MyWorkComponent"], _save_work_save_work_component__WEBPACK_IMPORTED_MODULE_24__["SaveWorkComponent"], _apply_work_apply_work_component__WEBPACK_IMPORTED_MODULE_25__["ApplyWorkComponent"], _list_savework_list_savework_component__WEBPACK_IMPORTED_MODULE_26__["ListSaveworkComponent"], _list_applywork_list_applywork_component__WEBPACK_IMPORTED_MODULE_27__["ListApplyworkComponent"], _create_notify_work_create_notify_work_component__WEBPACK_IMPORTED_MODULE_28__["CreateNotifyWorkComponent"], _notify_work_notify_work_component__WEBPACK_IMPORTED_MODULE_29__["NotifyWorkComponent"], _list_notifywork_list_notifywork_component__WEBPACK_IMPORTED_MODULE_30__["ListNotifyworkComponent"], _account_candidate_account_candidate_component__WEBPACK_IMPORTED_MODULE_32__["AccountCandidateComponent"], _view_cv_view_cv_component__WEBPACK_IMPORTED_MODULE_40__["ViewCVComponent"], _list_job_interview_list_job_interview_component__WEBPACK_IMPORTED_MODULE_41__["ListJobInterviewComponent"], _detail_interview_detail_interview_component__WEBPACK_IMPORTED_MODULE_42__["DetailInterviewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _candidate_routing_module__WEBPACK_IMPORTED_MODULE_4__["CandidateRoutingModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_17__["ButtonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__["DropdownModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                primeng_radiobutton__WEBPACK_IMPORTED_MODULE_20__["RadioButtonModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_21__["CalendarModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_22__["MultiSelectModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_31__["DialogModule"],
                primeng_password__WEBPACK_IMPORTED_MODULE_35__["PasswordModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_37__["MessageModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_37__["KeyFilterModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_36__["TableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_37__["PanelModule"],
                primeng_inplace__WEBPACK_IMPORTED_MODULE_38__["InplaceModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_39__["InputTextModule"],
                ngx_rating__WEBPACK_IMPORTED_MODULE_33__["RatingModule"],
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_43__["FileUploadModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_34__["PdfViewerModule"]
            ]
        })
    ], CandidateModule);
    return CandidateModule;
}());



/***/ }),

/***/ "./src/app/candidate/candidate/candidate.component.html":
/*!**************************************************************!*\
  !*** ./src/app/candidate/candidate/candidate.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-header-candidate></app-header-candidate>\r\n"

/***/ }),

/***/ "./src/app/candidate/candidate/candidate.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/candidate/candidate/candidate.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9jYW5kaWRhdGUvY2FuZGlkYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/candidate/candidate/candidate.component.ts":
/*!************************************************************!*\
  !*** ./src/app/candidate/candidate/candidate.component.ts ***!
  \************************************************************/
/*! exports provided: CandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateComponent", function() { return CandidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_socket_io_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/socket-io.service */ "./src/app/service/socket-io.service.ts");



var CandidateComponent = /** @class */ (function () {
    function CandidateComponent(soketIo) {
        this.soketIo = soketIo;
    }
    CandidateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.soketIo.listen("ServerInterview").subscribe(function (data) {
            _this.interview = data;
        });
    };
    CandidateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-candidate',
            template: __webpack_require__(/*! ./candidate.component.html */ "./src/app/candidate/candidate/candidate.component.html"),
            styles: [__webpack_require__(/*! ./candidate.component.scss */ "./src/app/candidate/candidate/candidate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_socket_io_service__WEBPACK_IMPORTED_MODULE_2__["SocketIoService"]])
    ], CandidateComponent);
    return CandidateComponent;
}());



/***/ }),

/***/ "./src/app/candidate/create-notify-work/create-notify-work.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/candidate/create-notify-work/create-notify-work.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{mgsChild}}</h3>\n\n<form [formGroup]=\"userform\" (ngSubmit)=\"onSubmit()\" *ngIf=\"!mgsChild1\" >\n<p-panel header=\"\">\n<div class=\"ui-g\">\n  <div class=\"ui-g-12\">\n    <div class=\"ui-g\">\n      <h3>Tạo thông báo việc làm</h3>\n    </div>\n    <div class=\"ui-g\">\n      <div class=\"ui-g-3\">\n          <span>Tên việc làm</span>\n      </div>\n      <div class=\"ui-g-9\">\n        <span class=\"ui-float-label\">\n          <input formControlName=\"tenViecLam\"  id=\"float-input\" type=\"text\" size=\"42\" pInputText> \n           <label for=\"float-input\">Tên việc làm</label> \n          <p-message severity=\"error\" text=\"Firstname is required\" *ngIf=\"!userform.controls['tenViecLam'].valid&&userform.controls['tenViecLam'].dirty\"></p-message>\n        </span>\n    </div>\n    </div>\n    <div class=\"ui-g\">\n      <div class=\"ui-g-3\">\n          <span>Cấp bậc</span>\n      </div>\n      <div class=\"ui-g-9\">\n        <p-dropdown formControlName=\"CapBac\" [options]=\"capBac\" [style]=\"{'width':'300px'}\" [(ngModel)]=\"selectedCity1\"></p-dropdown>\n        <p-message severity=\"error\" text=\"Firstname is required\" *ngIf=\"!userform.controls['CapBac'].valid&&userform.controls['CapBac'].dirty\"></p-message>\n      </div>\n    </div>\n    <div class=\"ui-g\">\n      <div class=\"ui-g-3\">\n        <span>Khu vực</span>\n      </div>\n      <div class=\"ui-g-9\">\n        <p-dropdown  formControlName=\"KhuVuc\" [options]=\"khuVuc\" [style]=\"{'width':'300px'}\" [(ngModel)]=\"selectedCity2\"></p-dropdown>\n        <p-message severity=\"error\" text=\"Firstname is required\" *ngIf=\"!userform.controls['KhuVuc'].valid&&userform.controls['KhuVuc'].dirty\"></p-message>\n      </div>\n    </div>\n    <div class=\"ui-g\">\n      <div class=\"ui-g-3\">\n        <span>Ngành nghề</span>\n      </div>\n      <div class=\"ui-g-9\">\n        <p-dropdown formControlName=\"NganhNghe\"  [options]=\"nganhNghe\" [style]=\"{'width':'300px'}\" [(ngModel)]=\"selectedCity3\"></p-dropdown>\n        <p-message severity=\"error\" text=\"Firstname is required\" *ngIf=\"!userform.controls['NganhNghe'].valid&&userform.controls['NganhNghe'].dirty\"></p-message>\n      </div>\n    </div>\n    <div class=\"ui-g\">\n      <div class=\"ui-g-3\">\n        <span>Kỹ năng</span>\n      </div>\n      <div class=\"ui-g-9\">\n        <p-dropdown formControlName=\"KyNang\"  [options]=\"kyNang\" [style]=\"{'width':'300px'}\" [(ngModel)]=\"selectedCity4\"></p-dropdown>\n        <p-message severity=\"error\" text=\"Firstname is required\" *ngIf=\"!userform.controls['KyNang'].valid&&userform.controls['KyNang'].dirty\"></p-message>\n      </div>\n    </div>\n    <div class=\"ui-g\">\n      <div class=\"ui-g-3\">\n        <span>Mức lương</span>\n      </div>\n      <div class=\"ui-g-9\">\n        <span class=\"ui-float-label\">\n          <input formControlName=\"mucLuong\" id=\"float-input\" type=\"text\" size=\"42\" pInputText> \n          <label  for=\"float-input\">Mức lương</label>\n        </span>\n        <p-message severity=\"error\" text=\"Firstname is required\" *ngIf=\"!userform.controls['mucLuong'].valid&&userform.controls['mucLuong'].dirty\"></p-message>\n      </div>\n    </div>\n    <div class=\"ui-g\">\n      <div class=\"ui-g-10\">\n        <div class=\"ui-g\" style=\"margin-left: 200px;\">\n          <p-button [disabled]=\"!userform.valid\"  label=\"Lưu\" style=\"margin-right: 10px;\"></p-button>\n          <p-button (click)=\"Huy()\"  type=\"button\" label=\"Hủy\"></p-button>\n      </div>  \n      </div>\n    </div>\n  </div>\n</div>\n</p-panel>\n</form>\n\n\n\n<div *ngIf=\"mgsChild1\">\n  <form [formGroup]=\"userform\" (ngSubmit)=\"onSubmitEdit()\" >\n   <div class=\"ui-g\">\n      <div class=\"ui-g-12\">\n        <div class=\"ui-g\">\n          <h3>Tạo thông báo</h3>\n        </div>\n        <div class=\"ui-g\">\n          <div class=\"ui-g-3\">\n              <span>Tên việc làm</span>\n          </div>\n          <div class=\"ui-g-9\">\n            <span class=\"ui-float-label\">\n              <input formControlName=\"tenViecLam\" value=\"{{mgsChild1.nameJob}}\" id=\"float-input\" type=\"text\" size=\"42\" pInputText> \n              \n              <p-message severity=\"error\" text=\"Firstname is required\" *ngIf=\"!userform.controls['tenViecLam'].valid&&userform.controls['tenViecLam'].dirty\"></p-message>\n            </span>\n        </div>\n        </div>\n        <div class=\"ui-g\">\n          <div class=\"ui-g-3\">\n              <span>Cấp bậc</span>\n          </div>\n          <div class=\"ui-g-9\">\n            <p-dropdown placeholder=\"{{mgsChild1.capBac}}\"  formControlName=\"CapBac\"  [options]=\"capBac1\" [style]=\"{'width':'300px'}\" [(ngModel)]=\"selectedCity1\">\n          \n            </p-dropdown>\n            <p-message severity=\"error\" text=\"Firstname is required\" *ngIf=\"!userform.controls['CapBac'].valid&&userform.controls['CapBac'].dirty\"></p-message>\n          </div>\n        </div>\n        <div class=\"ui-g\">\n          <div class=\"ui-g-3\">\n            <span>Khu vực</span>\n          </div>\n          <div class=\"ui-g-9\">\n            <p-dropdown editable=\"true\" placeholder=\"{{mgsChild1.khuVuc}}\" formControlName=\"KhuVuc\" [options]=\"khuVuc1\" [style]=\"{'width':'300px'}\" [(ngModel)]=\"selectedCity2\"></p-dropdown>\n            <p-message severity=\"error\" text=\"Firstname is required\" *ngIf=\"!userform.controls['KhuVuc'].valid&&userform.controls['KhuVuc'].dirty\"></p-message>\n          </div>\n        </div>\n        <div class=\"ui-g\">\n          <div class=\"ui-g-3\">\n            <span>Ngành nghề</span>\n          </div>\n          <div class=\"ui-g-9\">\n            <p-dropdown  editable=\"true\" placeholder=\"{{mgsChild1.nganhNghe}}\" formControlName=\"NganhNghe\" [options]=\"nganhNghe1\" [style]=\"{'width':'300px'}\" [(ngModel)]=\"selectedCity3\"></p-dropdown>\n            <p-message severity=\"error\" text=\"Firstname is required\" *ngIf=\"!userform.controls['NganhNghe'].valid&&userform.controls['NganhNghe'].dirty\"></p-message>\n          </div>\n        </div>\n        <div class=\"ui-g\">\n          <div class=\"ui-g-3\">\n            <span>Kỹ năng</span>\n          </div>\n          <div class=\"ui-g-9\">\n            <p-dropdown editable=\"true\" placeholder=\"{{mgsChild1.kyNang}}\"  formControlName=\"KyNang\" [options]=\"kyNang1\" [style]=\"{'width':'300px'}\" [(ngModel)]=\"selectedCity4\"></p-dropdown>\n            <p-message severity=\"error\" text=\"Firstname is required\" *ngIf=\"!userform.controls['KyNang'].valid&&userform.controls['KyNang'].dirty\"></p-message>\n          </div>\n        </div>\n        <div class=\"ui-g\">\n          <div class=\"ui-g-3\">\n            <span>Mức lương</span>\n          </div>\n          <div class=\"ui-g-9\">\n            <span class=\"ui-float-label\">\n              <input formControlName=\"mucLuong\" value=\"{{mgsChild1.mucLuong}}\" id=\"float-input\" type=\"text\" size=\"42\" pInputText> \n              \n            </span>\n            <p-message severity=\"error\" text=\"Firstname is required\" *ngIf=\"!userform.controls['mucLuong'].valid&&userform.controls['mucLuong'].dirty\"></p-message>\n          </div>\n        </div>\n        <div class=\"ui-g\">\n          <div class=\"ui-g-10\">\n            <div class=\"ui-g\" style=\"margin-left: 200px;\">\n              <p-button  label=\"Lưu\" style=\"margin-right: 10px;\"></p-button>\n            </div>  \n          </div>\n        </div>\n      </div>\n    </div>\n  \n    </form>\n</div>"

/***/ }),

/***/ "./src/app/candidate/create-notify-work/create-notify-work.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/candidate/create-notify-work/create-notify-work.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9jcmVhdGUtbm90aWZ5LXdvcmsvY3JlYXRlLW5vdGlmeS13b3JrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/candidate/create-notify-work/create-notify-work.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/candidate/create-notify-work/create-notify-work.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateNotifyWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNotifyWorkComponent", function() { return CreateNotifyWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models_createNotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/createNotify */ "./src/app/models/createNotify.ts");




var CreateNotifyWorkComponent = /** @class */ (function () {
    function CreateNotifyWorkComponent(fb) {
        this.fb = fb;
        this.notyfyJob = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editJob1 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.capBac = [
            { label: 'Vui lòng chọn cấp bậc', value: null },
            { label: 'Mới tốt nghiệp', value: { id: 1, name: 'Mới tốt nghiệp', code: 'NY' } },
            { label: 'Nhân viên', value: { id: 2, name: 'Nhân viên', code: 'RM' } },
            { label: 'Trưởng phòng', value: { id: 3, name: 'Trưởng phòng', code: 'LDN' } },
            { label: 'Giam đốc', value: { id: 4, name: 'Giám đốc', code: 'IST' } },
        ];
        this.capBac1 = [
            { label: '', value: { name: 'x' } },
            { label: 'Mới tốt nghiệp', value: { id: 1, name: 'Mới tốt nghiệp', code: 'NY' } },
            { label: 'Nhân viên', value: { id: 2, name: 'Nhân viên', code: 'RM' } },
            { label: 'Trưởng phòng', value: { id: 3, name: 'Trưởng phòng', code: 'LDN' } },
            { label: 'Giam đốc', value: { id: 4, name: 'Giam đốc', code: 'IST' } },
        ];
        this.khuVuc = [
            { label: 'Vui lòng chọn khu vực', value: null },
            { label: 'Sài gòn', value: { id: 1, name: 'Sài gòn', code: 'NY' } },
            { label: 'Hà Nội', value: { id: 2, name: 'Hà Nội', code: 'RM' } },
            { label: 'Tây Ninh', value: { id: 3, name: 'Tây Ninh', code: 'LDN' } },
            { label: 'Hưng Yên', value: { id: 4, name: 'Hưng Yên', code: 'IST' } },
        ];
        this.khuVuc1 = [
            { label: '', value: { name: '' } },
            { label: 'Sài gòn', value: { id: 1, name: 'Sài gòn', code: 'NY' } },
            { label: 'Hà Nội', value: { id: 2, name: 'Hà Nội', code: 'RM' } },
            { label: 'Tây Ninh', value: { id: 3, name: 'Tây Ninh', code: 'LDN' } },
            { label: 'Hưng Yên', value: { id: 4, name: 'Hưng Yên', code: 'IST' } },
        ];
        this.nganhNghe = [
            { label: 'Vui lòng chọn nganh nghe', value: null },
            { label: 'IT', value: { id: 1, name: 'IT', code: 'NY' } },
            { label: 'Lập trình', value: { id: 2, name: 'Lập trình', code: 'RM' } },
            { label: 'Phần mềm', value: { id: 3, name: 'Phần mềm', code: 'LDN' } },
            { label: 'Quản ly', value: { id: 4, name: 'Quản lý', code: 'IST' } },
        ];
        this.nganhNghe1 = [
            { label: '', value: { name: '' } },
            { label: 'IT', value: { id: 1, name: 'IT', code: 'NY' } },
            { label: 'Lập trình', value: { id: 2, name: 'Lập trình', code: 'RM' } },
            { label: 'Phần mềm', value: { id: 3, name: 'Phần mềm', code: 'LDN' } },
            { label: 'Quản ly', value: { id: 4, name: 'Quản lý', code: 'IST' } },
        ];
        this.kyNang = [
            { label: 'Vui lòng chọn Kỹ năng', value: null },
            { label: 'C++', value: { id: 1, name: 'C++', code: 'NY' } },
            { label: 'C#', value: { id: 2, name: 'C#', code: 'RM' } },
            { label: 'Java', value: { id: 3, name: 'Java', code: 'LDN' } },
            { label: 'Node Js', value: { id: 4, name: 'Node Js', code: 'IST' } },
        ];
        this.kyNang1 = [
            { label: '', value: { name: '' } },
            { label: 'C++', value: { id: 1, name: 'C++', code: 'NY' } },
            { label: 'C#', value: { id: 2, name: 'C#', code: 'RM' } },
            { label: 'Java', value: { id: 3, name: 'Java', code: 'LDN' } },
            { label: 'Node Js', value: { id: 4, name: 'Node Js', code: 'IST' } },
        ];
    }
    CreateNotifyWorkComponent.prototype.ngOnInit = function () {
        if (this.mgsChild1) {
            this.userform = this.fb.group({
                'tenViecLam': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'CapBac': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'KhuVuc': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'NganhNghe': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'KyNang': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'mucLuong': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('yyy', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            });
        }
        else {
            this.userform = this.fb.group({
                'tenViecLam': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'CapBac': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'KhuVuc': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'NganhNghe': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'KyNang': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'mucLuong': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            });
        }
        this.i = 0;
    };
    CreateNotifyWorkComponent.prototype.onSubmit = function () {
        this.job = new src_app_models_createNotify__WEBPACK_IMPORTED_MODULE_3__["CreateNotify"]();
        this.job.idJobNotify = this.i;
        this.job.nameJob = this.userform.value.tenViecLam;
        this.job.capBac = this.userform.value.CapBac.name;
        this.job.khuVuc = this.userform.value.KhuVuc.name;
        this.job.nganhNghe = this.userform.value.NganhNghe.name;
        this.job.kyNang = this.userform.value.KyNang.name;
        this.job.mucLuong = this.userform.value.mucLuong;
        this.job.dateCreate = "7-4-2019";
        this.userform.controls['tenViecLam'].reset();
        this.userform.controls['CapBac'].reset({ value: "" });
        this.userform.controls['KhuVuc'].reset({ value: "" });
        this.userform.controls['NganhNghe'].reset({ value: "" });
        this.userform.controls['KyNang'].reset({ value: "" });
        this.userform.controls['mucLuong'].reset();
        console.log('xuanVu' + this.job.khuVuc);
        this.notyfyJob.emit(this.job);
        this.i++;
    };
    CreateNotifyWorkComponent.prototype.Huy = function () {
        this.userform.controls['tenViecLam'].reset();
        this.userform.controls['CapBac'].reset();
        this.userform.controls['KhuVuc'].reset();
        this.userform.controls['NganhNghe'].reset();
        this.userform.controls['KyNang'].reset();
        this.userform.controls['mucLuong'].reset();
    };
    CreateNotifyWorkComponent.prototype.suaTT = function (id) {
        this.userform.controls['CapBac'].reset({ value: id });
    };
    CreateNotifyWorkComponent.prototype.getJob = function (id) {
        console.log('tai sao');
    };
    CreateNotifyWorkComponent.prototype.onSubmitEdit = function () {
        this.job = new src_app_models_createNotify__WEBPACK_IMPORTED_MODULE_3__["CreateNotify"]();
        this.job.idJobNotify = this.mgsChild1.idJobNotify;
        console.log('xxx' + this.userform.controls['tenViecLam'].value);
        // this.job.nameJob=this.userform.value.tenViecLam;
        if (this.userform.controls['tenViecLam'].value == '') {
            this.job.nameJob = this.mgsChild1.nameJob;
            console.log('cccc');
        }
        else {
            this.job.nameJob = this.userform.value.tenViecLam;
            console.log('lllllll' + this.job.nameJob);
        }
        if (this.userform.controls['CapBac'].value == null) {
            this.job.capBac = this.mgsChild1.capBac;
        }
        else {
            this.job.capBac = this.userform.value.CapBac.name;
            console.log('xuanVu' + this.job.capBac);
        }
        if (this.userform.controls['KhuVuc'].value == null) {
            this.job.khuVuc = this.mgsChild1.khuVuc;
        }
        else {
            this.job.khuVuc = this.userform.value.KhuVuc.name;
        }
        if (this.userform.controls['NganhNghe'].value == null) {
            this.job.nganhNghe = this.mgsChild1.nganhNghe;
        }
        else {
            this.job.nganhNghe = this.userform.value.NganhNghe.name;
        }
        if (this.userform.controls['KyNang'].value == null) {
            this.job.kyNang = this.mgsChild1.kyNang;
        }
        else {
            this.job.kyNang = this.userform.value.KyNang.name;
        }
        if (this.userform.controls['mucLuong'].value == '') {
            this.job.mucLuong = this.mgsChild1.mucLuong;
        }
        else {
            this.job.mucLuong = this.userform.value.mucLuong;
        }
        this.editJob1.emit(this.job);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNotifyWorkComponent.prototype, "notyfyJob", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNotifyWorkComponent.prototype, "editJob1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateNotifyWorkComponent.prototype, "mgsChild", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_createNotify__WEBPACK_IMPORTED_MODULE_3__["CreateNotify"])
    ], CreateNotifyWorkComponent.prototype, "mgsChild1", void 0);
    CreateNotifyWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-notify-work',
            template: __webpack_require__(/*! ./create-notify-work.component.html */ "./src/app/candidate/create-notify-work/create-notify-work.component.html"),
            styles: [__webpack_require__(/*! ./create-notify-work.component.scss */ "./src/app/candidate/create-notify-work/create-notify-work.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CreateNotifyWorkComponent);
    return CreateNotifyWorkComponent;
}());



/***/ }),

/***/ "./src/app/candidate/detail-interview/detail-interview.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/candidate/detail-interview/detail-interview.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"detailJobInterView.length!=0\">\n  <h3>Xin chào: {{detailJobInterView[0].name}}.Chúng tôi thấy bạn vừa ứng tuyển vào công việc {{detailJobInterView[0].nameJob}}  </h3><br>\n  <h3>Kỹ năng cho công việc:{{detailJobInterView[0].skill}}</h3><br>\n  <h3>Chúng tôi mời bạn đến phỏng vấn {{detailJobInterView[0].dateInterview}}.Vui lòng xác nhận thông tin</h3>\n</div>\n<button (click)=\"Yes()\">Yes</button>\n<button (click)=\"No()\"> No</button>"

/***/ }),

/***/ "./src/app/candidate/detail-interview/detail-interview.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/candidate/detail-interview/detail-interview.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9kZXRhaWwtaW50ZXJ2aWV3L2RldGFpbC1pbnRlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/candidate/detail-interview/detail-interview.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/candidate/detail-interview/detail-interview.component.ts ***!
  \**************************************************************************/
/*! exports provided: DetailInterviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailInterviewComponent", function() { return DetailInterviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/job.service */ "./src/app/service/job.service.ts");
/* harmony import */ var src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/candidate.service */ "./src/app/service/candidate.service.ts");
/* harmony import */ var src_app_models_findCV__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/findCV */ "./src/app/models/findCV.ts");






var DetailInterviewComponent = /** @class */ (function () {
    function DetailInterviewComponent(candidateService, jobService, router, _Activatedroute) {
        this.candidateService = candidateService;
        this.jobService = jobService;
        this.router = router;
        this._Activatedroute = _Activatedroute;
        this.detailJobInterView = [];
    }
    DetailInterviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.confirm = new src_app_models_findCV__WEBPACK_IMPORTED_MODULE_5__["FindCV"]();
        this.findCv = new src_app_models_findCV__WEBPACK_IMPORTED_MODULE_5__["FindCV"]();
        //xac dnh ngay day
        this.id = this._Activatedroute.snapshot.params['id'];
        this.idJob = this._Activatedroute.snapshot.params['idJob'];
        this.findCv.idJob = this.idJob;
        this.findCv.idUser = this.id;
        this.jobService.getDetailInterview(this.findCv)
            .subscribe(function (res) {
            _this.detailJobInterView = res;
            console.log(_this.detailJobInterView);
        });
    };
    DetailInterviewComponent.prototype.Yes = function () {
        // alert('xx');
        this.confirm.idJob = this.idJob;
        this.confirm.idUser = this.id;
        this.confirm.confirm = true;
        this.jobService.ConfirmRequest(this.confirm)
            .subscribe(function (res) {
            alert('Xác nhận thành công!');
        });
    };
    DetailInterviewComponent.prototype.No = function () {
        this.confirm.idJob = this.idJob;
        this.confirm.idUser = this.id;
        this.confirm.confirm = false;
        this.jobService.ConfirmRequest(this.confirm)
            .subscribe(function (res) {
        });
    };
    DetailInterviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-interview',
            template: __webpack_require__(/*! ./detail-interview.component.html */ "./src/app/candidate/detail-interview/detail-interview.component.html"),
            styles: [__webpack_require__(/*! ./detail-interview.component.scss */ "./src/app/candidate/detail-interview/detail-interview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_4__["CandidateService"], src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailInterviewComponent);
    return DetailInterviewComponent;
}());



/***/ }),

/***/ "./src/app/candidate/dream-work/dream-work.component.html":
/*!****************************************************************!*\
  !*** ./src/app/candidate/dream-work/dream-work.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\" style=\"border: 1px solid\">\n  <div class=\"ui-g-12\">\n      <div class=\"ui-g\">\n              <i class=\"fa fa-flag\"></i> \n              <h1 style=\"margin-top: -6px;margin-left: 10px;\">Công việc mong muốn</h1>\n      </div>\n      <div class=\"ui-g\">\n              <label><strong class=\"text-red\">*</strong>Nơi làm việc</label>\n      </div>\n      <div class=\"ui-g\" style=\"margin-bottom: 41px;\">\n          <div>\n            <p-multiSelect [style.visibility]=\"x\" [options]=\"diadiem\" [(ngModel)]=\"selectedCars3\" [panelStyle]=\"{minWidth:'12em'}\" [style]=\"{'width':'750px'}\"></p-multiSelect>\n            <p [style.visibility]=\"y\" style=\"margin-top: -25px;\">Địa điểm: {{selectedCars3}}</p>\n          </div>\n      </div>\n    <div class=\"ui-g\" style=\"margin-top: -24px;\">\n        <label><strong class=\"text-red\">*</strong>Ngành Nghề</label>\n    </div>\n      <div class=\"ui-g\">\n        <div>\n            <p-multiSelect [style.visibility]=\"x\" [options]=\"nganhNge\" [(ngModel)]=\"selectedCars4\" [panelStyle]=\"{minWidth:'12em'}\" [style]=\"{'width':'750px'}\"></p-multiSelect>\n            <p [style.visibility]=\"y\" style=\"margin-top: -25px;\">Ngành nghề:{{selectedCars4}}</p>\n        </div>\n      </div>\n      <div class=\"ui-g\" style=\"margin-top: 27px;\">\n              <label><strong class=\"text-red\">*</strong>Mức lương mong muốn</label>\n      </div>\n      <div class=\"ui-g\" style=\"margin-top: 15px;\">\n          <span class=\"ui-float-label\">\n              <input [style.visibility]=\"x\" [(ngModel)]=\"luong\" id=\"float-input\" type=\"text\" size=\"113\" pInputText> \n              <label [style.visibility]=\"x\"  for=\"float-input\">Mức lương mong muốn</label>\n              <label [style.visibility]=\"y\">{{luong}}</label>\n          </span>\n      </div>\n      <div style=\"margin-top: 21px;\">\n        <label><strong class=\"text-red\">*</strong>Top 5 phúc lợi bạn muốn</label>\n      </div>\n      <div class=\"ui-g\">\n        <div>\n            <p-multiSelect [style.visibility]=\"x\" [options]=\"phucLoi\" [(ngModel)]=\"selectedCars5\" [panelStyle]=\"{minWidth:'12em'}\" [style]=\"{'width':'750px'}\"></p-multiSelect>\n            <p  [style.visibility]=\"y\" style=\"margin-top: -25px;\">Phúc lơi:{{selectedCars5}}</p>\n        </div>\n      </div>\n      <div class=\"ui-g\">\n        <div style=\"margin-left: 750px;margin-top: 10px;\">\n                <button pButton type=\"button\" [style.visibility]=\"x\" style=\"margin-right: 5px;\" label=\"Hủy\" ></button>\n                <button pButton (click)=\"onClick()\" [style.visibility]=\"x\" type=\"button\" label=\"Lưu\" ></button>\n                <div style=\"margin-top: -33px;margin-left: 61px;\">\n                  <button pButton type=\"button\" [style.visibility]=\"y\" (click)=\"Edit()\" style=\"margin-right: 5px;\" label=\"Edit\" ></button>\n                </div>\n        </div>\n      </div> \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/candidate/dream-work/dream-work.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/candidate/dream-work/dream-work.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9kcmVhbS13b3JrL2RyZWFtLXdvcmsuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/candidate/dream-work/dream-work.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/candidate/dream-work/dream-work.component.ts ***!
  \**************************************************************/
/*! exports provided: DreamWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DreamWorkComponent", function() { return DreamWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DreamWorkComponent = /** @class */ (function () {
    function DreamWorkComponent() {
        this.diadiem = [
            { label: 'Sài gòn', value: 'Sài gòn' },
            { label: 'Hà Nội', value: 'Hà Nội' },
        ];
        this.nganhNge = [
            { label: 'Phần mềm', value: 'Phần mềm' },
            { label: 'Phần cứng', value: 'Phần cứng' },
            { label: 'Quản viên', value: 'Quản viên' },
            { label: 'Mạng/IT', value: 'Mạng/IT' }
        ];
        this.phucLoi = [
            { label: 'Giai thưởng', value: 'Giai thưởng' },
            { label: 'Tiền thưởng', value: 'Tiền thưởng' },
            { label: 'Căn tin', value: 'Căn tin' },
            { label: 'Chăm sóc sức khỏe', value: 'Chăm sóc sức khỏe' },
            { label: 'Thư viện', value: 'Thư viện' },
            { label: 'Đào tạo', value: 'Đào tạo' },
            { label: 'Xe đưa đón', value: 'Xe đưa đón' },
        ];
    }
    DreamWorkComponent.prototype.ngOnInit = function () {
        this.x = "visible";
        this.y = "hidden";
    };
    DreamWorkComponent.prototype.onClick = function () {
        this.x = "hidden";
        this.y = "visible";
    };
    DreamWorkComponent.prototype.Edit = function () {
        this.x = "visible";
        this.y = "hidden";
    };
    DreamWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dream-work',
            template: __webpack_require__(/*! ./dream-work.component.html */ "./src/app/candidate/dream-work/dream-work.component.html"),
            styles: [__webpack_require__(/*! ./dream-work.component.scss */ "./src/app/candidate/dream-work/dream-work.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DreamWorkComponent);
    return DreamWorkComponent;
}());



/***/ }),

/***/ "./src/app/candidate/education-candidate/education-candidate.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/candidate/education-candidate/education-candidate.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\" style=\"border: 1px solid\">\n  <div class=\"ui-g-12\">\n      <div class=\"ui-g\">\n          <i class=\"fa fa-flag\"></i> \n          <h1 style=\"margin-top: -6px;margin-left: 10px;\">Chuyên ngành</h1>\n      </div>\n      <div class=\"ui-g\">\n              <label><strong class=\"text-red\">*</strong>Chuyên ngành</label>\n      </div>\n      <div class=\"ui-g\"  style=\"margin-top: 15px\">\n              <span class=\"ui-float-label\">\n                      <input [style.visibility]=\"x\" [(ngModel)]=\"cn\"  id=\"float-input\" type=\"text\" size=\"30\" pInputText> \n                      <label [style.visibility]=\"x\" for=\"float-input\">Ví dụ:Kỹ thuật phần mềm</label>\n                        \n                </span>\n                <label [style.visibility]=\"y\" style=\"margin-left:-248px;\">{{cn}}</label>\n      </div>\n      <div class=\"ui-g\">\n          <div class=\"ui-g-3\">\n              <label><strong  class=\"text-red\">*</strong>Trường</label>\n          </div>\n          <div class=\"ui-g-3\">\n              <label><strong class=\"text-red\">*</strong>Bằng cấp</label>\n          </div>\n      </div>\n      <div class=\"ui-g\">\n              <div class=\"ui-g-3\">\n                      <span class=\"ui-float-label\">\n                              <input [style.visibility]=\"x\" [(ngModel)]=\"truong\"   id=\"float-input\" type=\"text\" size=\"30\" pInputText> \n                              <label [style.visibility]=\"x\" for=\"float-input\">Trường:Đại học công nghiệp</label>\n                              \n                      </span>\n                      <div style=\"margin-top: -31px;\">\n\n                      <label [style.visibility]=\"y\"  >{{truong}}</label>\n                      </div>\n                      \n              </div>\n              <div class=\"ui-g-3\">\n                      <p-dropdown [style.visibility]=\"x\"   [options]=\"bangCap\" [(ngModel)]=\"bc\"></p-dropdown>\n             </div>\n             <div>\n                <label [style.visibility]=\"y\"  style=\"margin-left:-344px;\"> {{bc ?bc.name :'none'}}  </label>\n             </div>\n      </div>\n      <div class=\"ui-g\">\n              <label><strong class=\"text-red\">*</strong>Thành tưu</label>\n      </div>\n      <div class=\"ui-g\">\n              <textarea  [style.visibility]=\"x\" [(ngModel)]=\"tt\" pInputTextarea style=\"width: 863px;height: 100px;;\"></textarea>\n              <label [style.visibility]=\"y\" style=\"margin-left: -862px;\">{{tt}}</label>\n      </div>\n      <div class=\"ui-g\">\n              <div style=\"margin-left:750px;margin-top: 10px;\">\n                      <button [style.visibility]=\"x\" pButton type=\"button\" style=\"margin-right: 5px;\" label=\"Hủy\" ></button>\n                      <button [style.visibility]=\"x\" pButton (click)=\"onClick()\" type=\"button\" label=\"Lưu\" ></button>\n                      <div style=\"margin-top: -33px;margin-left: 61px;\">\n                        <button [style.visibility]=\"y\" pButton type=\"button\" [style.visibility]=\"y\" (click)=\"Edit()\" style=\"margin-right: 5px;\" label=\"Edit\" ></button>\n                      </div>\n              </div>\n      </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/candidate/education-candidate/education-candidate.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/candidate/education-candidate/education-candidate.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9lZHVjYXRpb24tY2FuZGlkYXRlL2VkdWNhdGlvbi1jYW5kaWRhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/candidate/education-candidate/education-candidate.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/candidate/education-candidate/education-candidate.component.ts ***!
  \********************************************************************************/
/*! exports provided: EducationCandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationCandidateComponent", function() { return EducationCandidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EducationCandidateComponent = /** @class */ (function () {
    function EducationCandidateComponent() {
        this.bangCap = [
            { label: 'Vui lòng chọn bằng cấp', value: null },
            { label: 'Đại học', value: { id: 1, name: 'Đại học', code: 'NY' } },
            { label: 'Cao đẳng', value: { id: 2, name: 'Cao đẳng', code: 'RM' } },
            { label: 'Trung cấp', value: { id: 3, name: 'Trung cấp', code: 'LDN' } },
        ];
    }
    EducationCandidateComponent.prototype.ngOnInit = function () {
        this.x = "visible";
        this.y = "hidden";
    };
    EducationCandidateComponent.prototype.onClick = function () {
        this.x = "hidden";
        this.y = "visible";
    };
    EducationCandidateComponent.prototype.Edit = function () {
        this.x = "visible";
        this.y = "hidden";
    };
    EducationCandidateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education-candidate',
            template: __webpack_require__(/*! ./education-candidate.component.html */ "./src/app/candidate/education-candidate/education-candidate.component.html"),
            styles: [__webpack_require__(/*! ./education-candidate.component.scss */ "./src/app/candidate/education-candidate/education-candidate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EducationCandidateComponent);
    return EducationCandidateComponent;
}());



/***/ }),

/***/ "./src/app/candidate/experience-candidate/experience-candidate.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/candidate/experience-candidate/experience-candidate.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<div class=\"ui-g\"style=\"border: 1px solid\">\n  <div class=\"ui-g-12\">\n      <div class=\"ui-g\">\n              <i class=\"fa fa-flag\"></i> \n              <h1 style=\"margin-top: -6px;margin-left: 10px;\">Kinh nghiệm làm việc</h1>\n      </div>\n      <div class=\"ui-g\">\n          <span>Mô tả kinh nghiệm làm việc của bạn càng chi tiết càng tốt</span>\n      </div>\n      <div class=\"ui-g\">\n              <label><strong class=\"text-red\">*</strong> Chức danh</label>\n      </div>\n      <div class=\"ui-g\" style=\"margin-top: 15px;\">\n              <span class=\"ui-float-label\">\n                      <input [style.visibility]=\"x\" [(ngModel)]=\"cd\"  id=\"float-input\" type=\"text\" size=\"30\" pInputText> \n                      <label [style.visibility]=\"x\"  for=\"float-input\">Ví dụ:Designer</label>\n                    \n              </span>\n              <label [style.visibility]=\"y\" style=\"margin-left: -247px;margin-top: -19px;\">{{cd}}</label>\n              \n      </div>\n      <div class=\"ui-g\" style=\"margin-top: 15px;\">\n              <label><strong class=\"text-red\">*</strong>Công ty</label>\n      </div>\n      <div class=\"ui-g\" style=\"margin-top: 15px\">\n              <span class=\"ui-float-label\">\n                      <input [style.visibility]=\"x\" [(ngModel)]=\"ct\"  id=\"float-input\" type=\"text\" size=\"30\" pInputText> \n                      <label [style.visibility]=\"x\" for=\"float-input\">Ví dụ:Fpt</label>\n              </span>\n              <label [style.visibility]=\"y\" style=\"margin-left: -247px;margin-top: -19px;\">{{ct}}</label>\n      </div>\n      <div class=\"ui-g\">\n          <div class=\"ui-g-3\">\n                  <label><strong class=\"text-red\">*</strong>Từ tháng</label>\n          </div>\n          <div class=\"ui-g-3\">\n                  <label><strong class=\"text-red\">*</strong>Đến tháng</label>\n          </div>\n      </div>\n      <div class=\"ui-g\">\n              <div class=\"ui-g-3\">\n                      <p-calendar [style.visibility]=\"x\"   [(ngModel)]=\"date2\" [showIcon]=\"true\"></p-calendar>\n                      <label [style.visibility]=\"y\" style=\"margin-left:-208px;margin-top: -19px;\">{{a}}</label>          \n              </div>\n              \n              <div class=\"ui-g-3\">\n                      <p-calendar [style.visibility]=\"x\" [(ngModel)]=\"date3\" [showIcon]=\"true\"></p-calendar>    \n                      <label [style.visibility]=\"y\" style=\"margin-left:-208px;margin-top: -19px;\">{{b}}</label>\n              </div>\n              \n      </div>\n      <div class=\"ui-g\">\n          <label><strong class=\"text-red\">*</strong>Mô tả</label>\n      </div>\n      <div class=\"ui-g\">\n          <textarea [style.visibility]=\"x\" [(ngModel)]=\"mt\"  pInputTextarea style=\"width: 864px;height: 100px;;\"></textarea>\n          <label [style.visibility]=\"y\" style=\"margin-left: -862px;\">{{mt}}</label>\n     </div>\n      \n\n      <div class=\"ui-g\">\n              <div style=\"margin-left: 750px;margin-top: 10px;\">\n                  <button [style.visibility]=\"x\" pButton type=\"button\" style=\"margin-right: 5px;\" label=\"Hủy\" ></button>\n                  <button [style.visibility]=\"x\" pButton (click)=\"onSubmit()\"  type=\"button\" label=\"Lưu\" ></button>\n                  <div style=\"margin-top: -33px;margin-left: 61px;\">\n                        <button pButton type=\"button\" [style.visibility]=\"y\" (click)=\"Edit()\" style=\"margin-right: 5px;\" label=\"Edit\" ></button>\n                  </div>\n             </div>\n      </div>\n  </div>\n</div> -->\n\n\n\n<p-panel>\n<div class=\"ui-g\"style=\"border: 1px solid\" *ngIf=\"candidateExperience!=null\">\n                <div class=\"ui-g-12\">\n                    <div class=\"ui-g\">\n                            <i class=\"fa fa-flag\"></i> \n                            <h1 style=\"margin-top: -6px;margin-left: 10px;\">Kinh nghiệm làm việc</h1>\n                    </div>\n                    <div class=\"ui-g\">\n                        <span>Mô tả kinh nghiệm làm việc của bạn càng chi tiết càng tốt</span>\n                    </div>\n                    <div class=\"ui-g\">\n                            <label><strong class=\"text-red\">*</strong> Chức danh</label>\n                    </div>\n                    <div class=\"ui-g\" style=\"margin-top: 15px;\">\n                            <span class=\"ui-float-label\">\n                                    \n                                    <input id=\"float-input\"  value=\"{{candidateExperience[0].chucDanh}}\"    name=\"first1\" type=\"text\" size=\"100\" pInputText  [style.visibility]=\"x\" type=\"text\"   style=\"width: 200px;margin-right: 5px;\">\n                                    <label   for=\"float-input\">Ví dụ:Designer</label>\n                                  \n                            </span>\n                            <label  style=\"margin-left: -247px;margin-top: -19px;\"></label>\n                            \n                    </div>\n                    <div class=\"ui-g\" style=\"margin-top: 15px;\">\n                            <label><strong class=\"text-red\">*</strong>Công ty</label>\n                    </div>\n                    <div class=\"ui-g\" style=\"margin-top: 15px\">\n                            <span class=\"ui-float-label\">\n                                <input id=\"float-input\"  value=\"{{candidateExperience[0].congTy}}\"    name=\"first1\" type=\"text\" size=\"100\" pInputText  [style.visibility]=\"x\" type=\"text\"   style=\"width: 200px;margin-right: 5px;\">\n                                    <label for=\"float-input\">Ví dụ:Fpt</label>\n                            </span>\n                            <label style=\"margin-left: -247px;margin-top: -19px;\"></label>\n                    </div>\n                    <div class=\"ui-g\">\n                        <div class=\"ui-g-3\">\n                                <label><strong class=\"text-red\">*</strong>Từ tháng</label>\n                        </div>\n                        <div class=\"ui-g-3\">\n                                <label><strong class=\"text-red\">*</strong>Đến tháng</label>\n                        </div>\n                    </div>\n                    <div class=\"ui-g\">\n                            <div class=\"ui-g-3\">\n                                    <p-calendar  [(ngModel)]=\"date2\" [showIcon]=\"true\"></p-calendar>\n                                    <label style=\"margin-left:-208px;margin-top: -19px;\"></label>          \n                            </div>\n                            \n                            <div class=\"ui-g-3\">\n                                    <p-calendar  [(ngModel)]=\"date3\" [showIcon]=\"true\"></p-calendar>    \n                                    <label style=\"margin-left:-208px;margin-top: -19px;\"></label>\n                            </div>\n                            \n                    </div>\n                    <div class=\"ui-g\">\n                        <label><strong class=\"text-red\">*</strong>Mô tả</label>\n                    </div>\n                    <div class=\"ui-g\">\n                        <textarea value=\"{{candidateExperience[0].moTa}}\"   [(ngModel)]=\"mt\"  pInputTextarea style=\"width: 864px;height: 100px;;\"></textarea>\n                        <label  style=\"margin-left: -862px;\"></label>\n                   </div>\n                    \n              \n                    <div class=\"ui-g\">\n                            <div style=\"margin-left: 750px;margin-top: 10px;\">\n                                <button  pButton type=\"button\" style=\"margin-right: 5px;\" label=\"Hủy\" ></button>\n                                <button  pButton (click)=\"onSubmit()\"  type=\"button\" label=\"Lưu\" ></button>\n                                <div style=\"margin-top: -33px;margin-left: 61px;\">\n                                      <button pButton type=\"button\"  (click)=\"Edit()\" style=\"margin-right: 5px;\" label=\"Edit\" ></button>\n                                </div>\n                           </div>\n                    </div>\n                </div>\n</div>\n</p-panel>\n\n<!-- <div *ngIf=\"candidateExperience\">\n        <h3>ConCac</h3>\n        {{candidateExperience[0].chucDanh}}\n        {{candidateExperience[0].congTy}}\n        {{candidateExperience[0].startDate}}\n        {{candidateExperience[0].endDate}}\n        {{candidateExperience[0].moTa}}\n</div>\n\n<div *ngFor=\"let person of candidateExperience\">\n        {{person.chucDanh}}\n</div> -->\n"

/***/ }),

/***/ "./src/app/candidate/experience-candidate/experience-candidate.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/candidate/experience-candidate/experience-candidate.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9leHBlcmllbmNlLWNhbmRpZGF0ZS9leHBlcmllbmNlLWNhbmRpZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/candidate/experience-candidate/experience-candidate.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/candidate/experience-candidate/experience-candidate.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ExperienceCandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceCandidateComponent", function() { return ExperienceCandidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/candidate.service */ "./src/app/service/candidate.service.ts");
/* harmony import */ var src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/job.service */ "./src/app/service/job.service.ts");




var ExperienceCandidateComponent = /** @class */ (function () {
    function ExperienceCandidateComponent(candidateService, jobService) {
        this.candidateService = candidateService;
        this.jobService = jobService;
        this.date2 = new Date("2/1/2019");
        this.date3 = new Date("2/4/2019");
        this.cc = [];
    }
    ExperienceCandidateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.x = "visible";
        this.y = "hidden";
        if (this.candidateService.IsLogged() == true) {
            console.log(this.cc.length);
            this.jobService.getExperience(this.candidateService.getId())
                .subscribe(function (res) {
                _this.cc = res;
                //   this.mt=res[0].moTa;
            });
        }
    };
    ExperienceCandidateComponent.prototype.onSubmit = function () {
        var cc = this.date2.getMonth() + 1;
        var cc1 = this.date2.getDate();
        var cc2 = this.date2.getFullYear();
        this.a = "" + cc + "/" + cc1 + "/" + cc2;
        var ca = this.date2.getMonth() + 1;
        var ca1 = this.date2.getDate();
        var ca2 = this.date2.getFullYear();
        this.b = "" + ca + "/" + ca1 + "/" + ca2;
        this.x = "hidden";
        this.y = "visible";
    };
    ExperienceCandidateComponent.prototype.Edit = function () {
        this.x = "visible";
        this.y = "hidden";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExperienceCandidateComponent.prototype, "candidateExperience", void 0);
    ExperienceCandidateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience-candidate',
            template: __webpack_require__(/*! ./experience-candidate.component.html */ "./src/app/candidate/experience-candidate/experience-candidate.component.html"),
            styles: [__webpack_require__(/*! ./experience-candidate.component.scss */ "./src/app/candidate/experience-candidate/experience-candidate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_2__["CandidateService"], src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"]])
    ], ExperienceCandidateComponent);
    return ExperienceCandidateComponent;
}());



/***/ }),

/***/ "./src/app/candidate/header-candidate/header-candidate.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/candidate/header-candidate/header-candidate.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p-tabView>\n  <p-tabPanel header=\"Thông tin cá nhân\" leftIcon=\"pi pi-calendar\">\n     <app-infomation-add></app-infomation-add>\n  </p-tabPanel>\n  <p-tabPanel header=\"Việc làm của tôi\" leftIcon=\"pi pi-inbox\">\n      <app-my-work></app-my-work>\n  </p-tabPanel>\n  <p-tabPanel header=\"Thông báo việc làm\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\">\n      <app-list-notifywork></app-list-notifywork>\n  </p-tabPanel>\n  <p-tabPanel header=\"Nhà tuyển dụng xem hồ sơ\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\">\n    \n  </p-tabPanel>\n  <p-tabPanel header=\"Tài khoản\" leftIcon=\"pi pi-inbox\">\n    <app-account-candidate></app-account-candidate>\n  </p-tabPanel>\n</p-tabView> -->\n\n\n<!-- <ul class=\"nav navbar-nav navbar-right\" style=\"margin-top: -80px\">\n\n    <li class=\"dropdown\">\n    <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span (click)=\"getListJobInterView()\" class=\"glyphicon glyphicon-bell\"></span> </a>\n              \n            <ul  class=\"dropdown-menu cadi-custom\" *ngFor=\"let item of listJobInterview\"  >\n                <li><a [routerLink]=\"['/candidate/detailInterview',item.idUser,item.idJob]\">NTD mới bạn cho vị trí công việc:{{item.title}}</a></li>\n                <li><a [routerLink]=\"['candidate/listJobInterview']\">Danh sách công việc phỏng vấn</a></li>\n            </ul>\n           \n          \n    </li>\n    <li class=\"dropdown\" >\n      <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Xin chào:Huy <span class=\"caret\"></span></a>\n      <ul class=\"dropdown-menu\">\n        <li><a [routerLink]=\"['/candidate/thongTinCaNhan']\">Thông tin tài khoản</a></li>\n        <li><a [routerLink]=\"['/candidate/saveWork']\">Việc làm của tôi</a></li>\n        <li><a href=\"#\">Đăng xuất</a></li>\n      </ul>\n    </li>\n</ul> -->\n<div class=\"container-fluid\">\n\n    <!-- Nav tabs -->\n    <ul class=\"nav nav-pills nav-justified\" role=\"tablist\">\n      <li role=\"presentation\"><a [routerLink]=\"['thongTinCaNhan']\">Thông tin cá nhân</a></li>\n      <li role=\"presentation\"><a [routerLink]=\"['saveWork']\">Việc làm của tôi</a></li>\n      <li role=\"presentation\"><a [routerLink]=\"['viewCV']\">Xem CV</a></li>\n    </ul>\n  \n    <!-- Tab panes -->\n    <div class=\"tab-content\">\n        <router-outlet></router-outlet>\n    </div>\n  </div>\n\n\n\n\n\n  \n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/candidate/header-candidate/header-candidate.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/candidate/header-candidate/header-candidate.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9oZWFkZXItY2FuZGlkYXRlL2hlYWRlci1jYW5kaWRhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/candidate/header-candidate/header-candidate.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/candidate/header-candidate/header-candidate.component.ts ***!
  \**************************************************************************/
/*! exports provided: HeaderCandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderCandidateComponent", function() { return HeaderCandidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderCandidateComponent = /** @class */ (function () {
    function HeaderCandidateComponent() {
    }
    HeaderCandidateComponent.prototype.ngOnInit = function () {
    };
    HeaderCandidateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-candidate',
            template: __webpack_require__(/*! ./header-candidate.component.html */ "./src/app/candidate/header-candidate/header-candidate.component.html"),
            styles: [__webpack_require__(/*! ./header-candidate.component.scss */ "./src/app/candidate/header-candidate/header-candidate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderCandidateComponent);
    return HeaderCandidateComponent;
}());



/***/ }),

/***/ "./src/app/candidate/infomation-add/infomation-add.component.html":
/*!************************************************************************!*\
  !*** ./src/app/candidate/infomation-add/infomation-add.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <a [routerLink]=\"['../thongTinCaNhan']\">Thông tin cá nhân</a>\n<a [routerLink]=\"['../saveWork']\">Việc làm của tôi</a>\n<a [routerLink]=\"['../viewCV']\">Xem CV</a> -->\n\n\n\n\n\n\n\n\n<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"ui-g\">\n            <div class=\"ui-g-12\">\n                <app-profile-candidate [inforCandidate]=\"inforCandidate\"></app-profile-candidate>\n            </div>\n        </div>\n        <div class=\"ui-g\">\n            <div class=\"ui-g-12\">\n                <app-infomation-refer [inforCandidate]=\"inforCandidate\"></app-infomation-refer>\n            </div>\n        </div>\n        <div class=\"ui-g\">\n            <div class=\"ui-g-12\">\n                <app-level-candidate [candidateSkill]=\"candidateSkill\"></app-level-candidate>\n            </div>\n        </div>\n        <!-- <div class=\"ui-g\">\n            <div class=\"ui-g-12\">\n               <app-langugae-candidate [candidateLanguage]=\"candidateLanguage\"></app-langugae-candidate>\n            </div>\n        </div>\n        <div class=\"ui-g\">\n            <div class=\"ui-g-12\">\n                <app-experience-candidate [candidateExperience]=\"candidateExperience\"></app-experience-candidate>\n            </div>\n        </div> -->\n        <!-- <div class=\"ui-g\">\n            <div class=\"ui-g-12\">\n                <app-education-candidate></app-education-candidate>\n            </div>\n        </div>\n        <div class=\"ui-g\">\n            <div class=\"ui-g-12\">\n                <app-dream-work></app-dream-work>\n            </div>\n        </div> -->\n    </div>\n</div>\n\n\n\n\n\n<!-- <div id=\"download\">\n    <img #canvas>\n    <a #downloadLink></a>\n</div> -->\n\n<!-- <div class=\"btn btn-primary\" (click)=\"downloadImage()\">DL</div> -->\n<!-- <div class=\"btn btn-primary\" (click)=\"UploadCV()\">Upload CV</div>\n<div class=\"btn btn-primary\" (click)=\"OK()\">OK</div> -->\n<!-- <button (click)=\"Export()\">PDF</button> -->\n\n\n\n\n<!-- <div class=\"ui-g\">\n  <div class=\"ui-g-6\" style=\"padding-left: 700px\">\n      <p-button  (click)=\"UploadCV()\" label=\"Upload CV\" ></p-button>\n  </div>\n  <div class=\"ui-g-6\" style=\"margin-left:-40px;;\">\n      <p-button (click)=\"OK()\" label=\"OK\" ></p-button>\n  </div>\n</div> -->\n\n\n\n\n\n\n<div id=\"download\" >\n    <img #canvas >\n    <a #downloadLink></a>\n</div>\n\n<!-- <img [src]=\"img\" id='content' #content > -->\n\n\n\n\n\n    \n    \n"

/***/ }),

/***/ "./src/app/candidate/infomation-add/infomation-add.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/candidate/infomation-add/infomation-add.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9pbmZvbWF0aW9uLWFkZC9pbmZvbWF0aW9uLWFkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/candidate/infomation-add/infomation-add.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/candidate/infomation-add/infomation-add.component.ts ***!
  \**********************************************************************/
/*! exports provided: InfomationAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfomationAddComponent", function() { return InfomationAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/candidate.service */ "./src/app/service/candidate.service.ts");
/* harmony import */ var src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/job.service */ "./src/app/service/job.service.ts");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_models_ImageCV__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/ImageCV */ "./src/app/models/ImageCV.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_6__);







var InfomationAddComponent = /** @class */ (function () {
    function InfomationAddComponent(candidateService, jobService) {
        this.candidateService = candidateService;
        this.jobService = jobService;
    }
    InfomationAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        //  alert("XuanOi"+this.candidateService.getId());
        if (this.candidateService.IsLogged() == true) {
            this.jobService.getInfoCandidate(this.candidateService.getId())
                .subscribe(function (res) {
                _this.inforCandidate = res;
            });
            this.jobService.getCandidateSkill(this.candidateService.getId())
                .subscribe(function (res) {
                _this.candidateSkill = res;
                // console.log(this.candidateSkill);
            });
            this.jobService.getLanguage(this.candidateService.getId())
                .subscribe(function (res) {
                _this.candidateLanguage = res;
                //console.log(this.candidateLanguage);
            });
            this.jobService.getExperience(this.candidateService.getId())
                .subscribe(function (res) {
                if (res && res.length > 0) {
                    _this.candidateExperience = res;
                }
                else {
                    _this.candidateExperience = null;
                }
                //   console.log(this.candidateExperience);
            });
        }
    };
    InfomationAddComponent.prototype.downloadImage = function () {
        // html2canvas(this.screen.nativeElement).then(canvas => {
        //   this.canvas.nativeElement.src = canvas.toDataURL();
        //   this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
        //   this.downloadLink.nativeElement.download = 'marble-diagram.png';
        //   //alert(this.downloadLink.nativeElement.href);
        //   var file:File =this.screen.nativeElement.file;
        //   var myReader:FileReader = new FileReader();
        //   myReader.onloadend = (e) => {
        //     this.image =myReader.result as string;
        //   }
        //   myReader.readAsDataURL(file);
        //   myReader.onload = (): void => {
        //     const base64String: string = (myReader.result as string).match(
        //         /.+;base64,(.+)/
        //     )[1];
        //     this.img=base64String;
        //     //alert(base64String);
        //     // this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
        //     //            + base64String);
        //   };
        //   //this.downloadLink.nativeElement.click();
        // });
    };
    InfomationAddComponent.prototype.UploadCV = function () {
        var _this = this;
        this.jobService.getInfoCandidate(this.candidateService.getId())
            .subscribe(function (res) {
            _this.inforCandidate = res;
        });
        this.jobService.getCandidateSkill(this.candidateService.getId())
            .subscribe(function (res) {
            _this.candidateSkill = res;
        });
        this.jobService.getLanguage(this.candidateService.getId())
            .subscribe(function (res) {
            _this.candidateLanguage = res;
        });
        this.jobService.getExperience(this.candidateService.getId())
            .subscribe(function (res) {
            _this.candidateExperience = res;
            console.log(_this.candidateExperience);
        });
    };
    InfomationAddComponent.prototype.OK = function () {
        var _this = this;
        html2canvas__WEBPACK_IMPORTED_MODULE_4__(this.screen.nativeElement).then(function (canvas) {
            _this.canvas.nativeElement.src = canvas.toDataURL();
            _this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
            _this.downloadLink.nativeElement.download = 'marble-diagram.png';
            _this.imgageData = canvas.toDataURL("image/png");
            _this.review = new src_app_models_ImageCV__WEBPACK_IMPORTED_MODULE_5__["ImageCV"]();
            _this.review.UserId = _this.candidateService.getId();
            _this.review.Charcode = _this.imgageData;
            _this.jobService.urlupdateCV(_this.review)
                .subscribe(function (res) {
                if (res == "OK") {
                    alert("Update CV thanh cong");
                }
                else {
                    alert("Update CV that bai");
                }
            });
            _this.jobService.getCV(_this.candidateService.getId())
                .subscribe(function (res) {
                _this.img = res;
                alert(res);
            });
            //alert(this.downloadLink.nativeElement.href);
            // var file:File =this.screen.nativeElement.file;
            // var myReader:FileReader = new FileReader();
            // myReader.onloadend = (e) => {
            //   this.image =myReader.result as string;
            // }
            // myReader.readAsDataURL(file);
            // myReader.onload = (): void => {
            //   const base64String: string = (myReader.result as string).match(
            //       /.+;base64,(.+)/
            //   )[1];
            //   this.img=base64String;
            //   //alert(base64String);
            //   // this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
            //   //            + base64String);
            // };
        });
    };
    InfomationAddComponent.prototype.Export = function () {
        alert('ccc');
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__();
        var specialElemenHandlers = {
            '#editor': function (element, redderer) {
                return true;
            }
        };
        var content = this.content.nativeElement;
        doc.fromHTML(content.innerHTML, 15, 15, {
            'width': 300,
            'height': 300,
            'elementHandlers': specialElemenHandlers
        });
        alert(this.img);
        doc.addImage(this.img, 'JPEG', 15, 40, 300, 300);
        doc.save('test.pdf');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('screen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InfomationAddComponent.prototype, "screen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InfomationAddComponent.prototype, "canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('downloadLink'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InfomationAddComponent.prototype, "downloadLink", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InfomationAddComponent.prototype, "content", void 0);
    InfomationAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-infomation-add',
            template: __webpack_require__(/*! ./infomation-add.component.html */ "./src/app/candidate/infomation-add/infomation-add.component.html"),
            styles: [__webpack_require__(/*! ./infomation-add.component.scss */ "./src/app/candidate/infomation-add/infomation-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_2__["CandidateService"], src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"]])
    ], InfomationAddComponent);
    return InfomationAddComponent;
}());



/***/ }),

/***/ "./src/app/candidate/infomation-candidate/infomation-candidate.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/candidate/infomation-candidate/infomation-candidate.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  infomation-candidate works!\n</p>\n"

/***/ }),

/***/ "./src/app/candidate/infomation-candidate/infomation-candidate.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/candidate/infomation-candidate/infomation-candidate.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9pbmZvbWF0aW9uLWNhbmRpZGF0ZS9pbmZvbWF0aW9uLWNhbmRpZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/candidate/infomation-candidate/infomation-candidate.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/candidate/infomation-candidate/infomation-candidate.component.ts ***!
  \**********************************************************************************/
/*! exports provided: InfomationCandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfomationCandidateComponent", function() { return InfomationCandidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfomationCandidateComponent = /** @class */ (function () {
    function InfomationCandidateComponent() {
    }
    InfomationCandidateComponent.prototype.ngOnInit = function () {
    };
    InfomationCandidateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-infomation-candidate',
            template: __webpack_require__(/*! ./infomation-candidate.component.html */ "./src/app/candidate/infomation-candidate/infomation-candidate.component.html"),
            styles: [__webpack_require__(/*! ./infomation-candidate.component.scss */ "./src/app/candidate/infomation-candidate/infomation-candidate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfomationCandidateComponent);
    return InfomationCandidateComponent;
}());



/***/ }),

/***/ "./src/app/candidate/infomation-refer/infomation-refer.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/candidate/infomation-refer/infomation-refer.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css\" integrity=\"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp\" crossorigin=\"anonymous\">\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\" integrity=\"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay\" crossorigin=\"anonymous\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n<link rel=\"stylesheet\" href=\"./assets/css/style1.css\"> \n\n\n\n\n<!-- <form [formGroup]=\"userform2\" (ngSubmit)=\"onSubmit(userform2.value)\">\n<div class=\"ui-g-12\" style=\"border: 1px solid\">\n  <div class=\"ui-g\">\n      <i class=\"fa fa-flag\"></i> \n      <h1 style=\"margin-top: -6px;margin-left: 10px;\"> Thông Tin Chung</h1>\n  </div>\n  <div class=\"ui-g\">\n      <h3>Giới thiệu bản thân</h3>\n  </div>\n  <div class=\"ui-g\" *ngIf=\"inforCandidate\">\n          <textarea  [(ngModel)]=\"inforCandidate[0].moTaBanThan\"   [style.visibility]=\"x\" formControlName=\"Decription\" pInputTextarea style=\"width: 849px;height: 100px;;\" name=\"first\">\n            \n          </textarea>\n          <label style=\"margin-left: -847px;\" [style.visibility]=\"y\"  ></label>\n       \n  </div>\n  <div class=\"ui-g\">\n    <p-message severity=\"error\" text=\"Vui lòng nhập thông tin\" *ngIf=\"!userform2.controls['Decription'].valid&&userform2.controls['Decription'].dirty\"></p-message>\n  </div>\n  <div class=\"ui-g\">\n      <div style=\"margin-left: 750px;margin-top: 10px;\">\n          <button pButton  [style.visibility]=\"x\" (click)=\"Cancel()\" type=\"button\" style=\"margin-right: 5px;\" label=\"Hủy\" ></button>\n          <button pButton [style.visibility]=\"x\" type=\"submit\" label=\"Lưu\" ></button>\n          <div style=\"margin-top: -33px;margin-left: 61px;\" >\n            <button pButton type=\"button\" [style.visibility]=\"y\" (click)=\"Edit()\" style=\"margin-right: 5px;\" label=\"Edit\" ></button>\n          </div>\n      </div>\n  </div>\n  \n</div>\n</form> -->\n\n\n\n\n<p-panel header=\"Thông tin cá nhân\" >                    \n <div class=\"row\">\n  <div class=\"col-sm-6\">\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\">\n        <i class=\"material-icons\">date_range</i>\n      </span>\n      \n      <div class=\"form-group label-floating\">\n        <div style=\"margin-left: -37px;font-size: 14px;\">\n            <label style=\"margin-left: -37px;font-size: 14px;\"  class=\"control-label\">Ngày Sinh\n                <small  class='text-red'>*</small>\n              </label>\n        </div>\n       \n        <input [(ngModel)]=\"date1\" type=\"date\" style=\"width:765px;height: 34px;margin-top: 6px;margin-left: -39px;\"  name=\"bday\">\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6\">\n    <div class=\"select-wrapper\">\n      <label class=\"control-label select-label\">Quốc Tịch\n        <small class='text-red'>*</small>\n      </label>\n      <select style=\"width: 771px;\" readonly  class=\" form-control\" title=\"Single Select\" name=\"nationality\" required>\n        <option value=\"VietNam\">VietNam</option>\n        <option value=\"English\">English</option>\n        <option value=\"Spaint\">Spaint</option>\n        <option value=\"China\">China</option>\n      </select>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <div class=\"radio-wrapper\">\n      <label class=\"control-label select-label\">Giới Tính\n        <small class='text-red'>*</small>\n      </label>\n      <div class=\"\">\n        <select readonly  class=\" form-control\" title=\"Single Select\" name=\"nationality\" required>\n          <option value=\"Nam\">Nam</option>\n          <option value=\"Nữ\">Nữ</option>\n     \n        </select>\n      </div>\n   \n    </div>\n  </div>\n  <div class=\"col-sm-6\">\n    <div class=\"radio-wrapper\">\n      <label class=\"control-label select-label\">Tình Trạng Hôn Nhân\n        <small class='text-red'>*</small>\n      </label>\n      <div class=\"\">\n        <select style=\"width: 771px;\" readonly   class=\" form-control selectpicker select2 country\" title=\"Single Select\" name=\"country\" required>\n          <option value=\"Độc thân\">Độc thân</option>\n          <option value=\"Kết hôn\">Kết hôn</option>\n        </select>\n      </div>\n      \n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <div class=\"select-wrapper\">\n      <label class=\"control-label select-label\">Quốc Gia\n        <small class='text-red'>*</small>\n      </label>\n      <select style=\"width: 771px;\" readonly  class=\" form-control selectpicker select2 country\" title=\"Single Select\" name=\"country\" required>\n        <option value=\"VietNamses\">VietNamses</option>\n        <option  value=\"Chinaes\">Chinaes</option>\n      </select>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <div class=\"select-wrapper\">\n      <label class=\"control-label select-label\">Tỉnh/Thành Phố\n        <small class='text-red'>*</small>\n      </label>\n      <select style=\"width: 771px;\"  readonly   class=\"form-control selectpicker select2 city\" title=\"Single Select\" name=\"city\" required>\n        <option value=\"Tây Ninh\">Tây Ninh</option>\n        <option value=\"Sài Gòn\">Sài Gòn</option>\n        <option value=\"Bình Dương\">Bình Dương</option>\n      </select>\n    </div>\n  </div>\n   <div class=\"col-sm-6\">\n    <div class=\"select-wrapper\">\n      <label class=\"control-label select-label\">Quận/Huyện\n        <small class='text-red'>*</small>\n      </label>\n      <select style=\"width: 771px;\" readonly class=\"form-control selectpicker select2 district\" title=\"Single Select\" name=\"district\">\n        <option value=\"a\">Châu Thành</option>\n        <option value=\"a\">DươnMinhChau</option>\n        <option value=\"a\">Châu Thành</option>\n      </select>\n    </div>\n  </div> \n </div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\">\n        <i class=\"material-icons\">location_on</i>\n      </span>\n      <div class=\"form-group label-floating\">\n        <label class=\"control-label\">Địa Chỉ\n          <small class='text-red'>*</small>\n        </label>\n        <input readonly value=\"Khu phố 2,Thị trấn châu thành,Tây Ninh\" name=\"address\" type=\"text\" class=\"form-control\" required>\n      </div>\n    </div>\n  </div>\n</div>  \n<div style=\"margin-left:760px;\">\n    <button type=\"button\" [style.visibility]=\"visible\"  class=\"btn btn-success\" (click)=\"sua()\" >Edit</button>\n</div>\n</p-panel>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/candidate/infomation-refer/infomation-refer.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/candidate/infomation-refer/infomation-refer.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9pbmZvbWF0aW9uLXJlZmVyL2luZm9tYXRpb24tcmVmZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/candidate/infomation-refer/infomation-refer.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/candidate/infomation-refer/infomation-refer.component.ts ***!
  \**************************************************************************/
/*! exports provided: InfomationReferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfomationReferComponent", function() { return InfomationReferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);




var InfomationReferComponent = /** @class */ (function () {
    function InfomationReferComponent(fb, messageService) {
        this.fb = fb;
        this.messageService = messageService;
        this.minDate = new Date(1996, 4, 28);
    }
    InfomationReferComponent.prototype.ngOnInit = function () {
        this.userform2 = this.fb.group({
            'Decription': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.x = "visible";
        this.y = "hidden";
    };
    InfomationReferComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
        this.mota = this.userform2.value.Decription;
        this.x = "hidden";
        this.y = "visible";
    };
    InfomationReferComponent.prototype.Edit = function () {
        this.x = "visible";
        this.y = "hidden";
    };
    Object.defineProperty(InfomationReferComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.userform2.value); },
        enumerable: true,
        configurable: true
    });
    InfomationReferComponent.prototype.Cancel = function () {
        this.userform2.controls['Decription'].reset();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InfomationReferComponent.prototype, "inforCandidate", void 0);
    InfomationReferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-infomation-refer',
            template: __webpack_require__(/*! ./infomation-refer.component.html */ "./src/app/candidate/infomation-refer/infomation-refer.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]],
            styles: [__webpack_require__(/*! ./infomation-refer.component.scss */ "./src/app/candidate/infomation-refer/infomation-refer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], InfomationReferComponent);
    return InfomationReferComponent;
}());



/***/ }),

/***/ "./src/app/candidate/langugae-candidate/langugae-candidate.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/candidate/langugae-candidate/langugae-candidate.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <form   [formGroup]=\"userform\" (ngSubmit)=\"onSubmit(userform.value)\" >\n<div class=\"ui-g\" style=\"border: 1px solid\">\n  <div class=\"ui-g-12\">\n      <div class=\"ui-g\">\n              <i class=\"fa fa-flag\"></i> \n              <h1 style=\"margin-top: -6px;margin-left: 10px;\">Ngoại ngữ</h1>\n      </div>\n      <div class=\"ui-g\">\n          <div class=\"ui-g-3\">\n              <strong>Ngoại ngữ</strong>\n          </div>\n          <div class=\"ui-g-6\">\n              <strong>Trình độ</strong>\n          </div>\n      </div>\n      <div class=\"ui-g\">\n          <div class=\"ui-g-3\">\n                  <p-dropdown [style.visibility]=\"x\" formControlName=\"ngonNgu\"  name=\"input1\"  [options]=\"language\" [(ngModel)]=\"selectedCity1\"></p-dropdown>\n                  <label [style.visibility]=\"y\" style=\"margin-left: -170px;\"> {{val0}}</label>\n                  \n          </div>\n          <div class=\"ui-g-6\">\n              <div class=\"ui-g\">\n                      <div class=\"ui-g-2\" style=\"float: left;\">\n                          <p-radioButton [style.visibility]=\"x\" formControlName=\"trinhDo\"  name=\"group1\" [(ngModel)]=\"val1\"   value=\"Sơ cấp\" label=\"Sơ cấp\" [(ngModel)]=\"val1\" inputId=\"opt1\"></p-radioButton>\n                      </div>\n                      <div class=\"ui-g-2\" style=\"float: left;\">\n                             <p-radioButton [style.visibility]=\"x\" formControlName=\"trinhDo\"   name=\"group1\" [(ngModel)]=\"val1\"  value=\"Trung cấp\" label=\"Trung cấp\" [(ngModel)]=\"val1\" inputId=\"opt2\"></p-radioButton>\n                      </div>\n                      <div class=\"ui-g-2\" style=\"float: left;\">\n                              <p-radioButton [style.visibility]=\"x\" formControlName=\"trinhDo\"   name=\"group1\" [(ngModel)]=\"val1\"   value=\"Cao cấp\" label=\"Cao cấp\" [(ngModel)]=\"val1\" inputId=\"opt3\"></p-radioButton>\n                      </div>\n                      <div class=\"ui-g-2\" style=\"float: left;\">\n                              <p-radioButton [style.visibility]=\"x\" formControlName=\"trinhDo\"  name=\"group1\" [(ngModel)]=\"val1\"  value=\"Bản ngữ\" label=\"Bản ngữ\" [(ngModel)]=\"val1\" inputId=\"opt4\"></p-radioButton>\n                      </div> \n                      <label [style.visibility]=\"y\" style=\"margin-left: -465px;\">{{val1}}</label>\n                      \n              </div>\n          </div>\n      </div>\n      <div class=\"ui-g\">\n              <div style=\"margin-left: 750px;margin-top: 10px;\">\n                  <button [style.visibility]=\"x\" pButton type=\"button\" style=\"margin-right: 5px;\" label=\"Hủy\" ></button>\n                  <button [style.visibility]=\"x\" pButton type=\"submit\" label=\"Lưu\" ></button>\n                  <div style=\"margin-top: -33px;margin-left: 61px;\">\n                    <button pButton type=\"button\" [style.visibility]=\"y\" (click)=\"Edit()\" style=\"margin-right: 5px;\" label=\"Edit\" ></button>\n                  </div>\n             </div>\n\n      </div>\n  </div>\n</div>\n</form> -->\n<p-panel>\n<form  [formGroup]=\"userform\" (ngSubmit)=\"onSubmit(userform.value)\" >\n    \n    <div class=\"ui-g\">\n                <i class=\"fa fa-flag\"></i> \n                <h1 style=\"margin-top: -6px;margin-left: 10px;\">Ngoại ngữ</h1>\n    </div>\n    <div class=\"ui-g\">\n            <p-dropdown formControlName=\"ngonNgu\" [options]=\"language\" [(ngModel)]=\"selectedCar\"  [showTransitionOptions]=\"'0ms'\"  [hideTransitionOptions]=\"'0ms'\" [style]=\"{'width':'750px'}\">\n            </p-dropdown>\n            <button type=\"button\" class=\"btn btn-sm btn-default\" id=\"btn-add-tag\">\n                    <i class=\"fa fa-plus\"></i>\n            </button>\n    </div>\n\n    <div class=\"ui-g\">\n            <div style=\"margin-left: 750px;margin-top: 10px;\">\n                <button pButton type=\"button\" style=\"margin-right: 5px;\" label=\"Hủy\" ></button>\n                <button pButton type=\"submit\" label=\"Lưu\" ></button>\n            </div>\n                \n    </div>\n</form>\n<div>\n        <!-- <p-rating [(ngModel)]=\"val\"></p-rating> -->\n</div>\n<!-- <div *ngFor=\"let person of candidateLanguage\">\n    {{person.nameLanguage}}\n   \n\n    <p-rating readonly=\"true\" [(ngModel)]=\"person.sao\"></p-rating>\n</div> -->\n</p-panel>\n"

/***/ }),

/***/ "./src/app/candidate/langugae-candidate/langugae-candidate.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/candidate/langugae-candidate/langugae-candidate.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9sYW5ndWdhZS1jYW5kaWRhdGUvbGFuZ3VnYWUtY2FuZGlkYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/candidate/langugae-candidate/langugae-candidate.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/candidate/langugae-candidate/langugae-candidate.component.ts ***!
  \******************************************************************************/
/*! exports provided: LangugaeCandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangugaeCandidateComponent", function() { return LangugaeCandidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/job.service */ "./src/app/service/job.service.ts");
/* harmony import */ var src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/candidate.service */ "./src/app/service/candidate.service.ts");
/* harmony import */ var src_app_models_candidate_language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/candidate_language */ "./src/app/models/candidate_language.ts");






var LangugaeCandidateComponent = /** @class */ (function () {
    function LangugaeCandidateComponent(fb, jobService, candidateService) {
        this.fb = fb;
        this.jobService = jobService;
        this.candidateService = candidateService;
        this.listLanguage = [];
        this.language = [
            { label: 'Vui lòng chọn ngôn ngữ', value: null },
            { label: 'Nhât Bản', value: { id: 1, name: 'Trung Quốc', code: 'NY' } },
            { label: 'Trung Quốc', value: { id: 2, name: 'Nhật Bản', code: 'RM' } },
            { label: 'Pháp', value: { id: 3, name: 'Hàn Quốc', code: 'LDN' } },
            { label: 'Tây Ban Nha', value: { id: 4, name: 'Trung Quốc', code: 'NY' } },
            { label: 'Viêt Nam', value: { id: 5, name: 'Nhật Bản', code: 'RM' } },
        ];
    }
    LangugaeCandidateComponent.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'ngonNgu': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'trinhDo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](['Option 1', ['Option 2']]),
        });
    };
    LangugaeCandidateComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.val0 = this.userform.value.ngonNgu.id;
        this.addLanguage = new src_app_models_candidate_language__WEBPACK_IMPORTED_MODULE_5__["Candidate_Language"]();
        this.addLanguage.idUser = this.candidateService.getId();
        this.addLanguage.idLanguage = this.userform.value.ngonNgu.id;
        this.addLanguage.sao = this.val;
        this.jobService.addLanguage(this.addLanguage)
            .subscribe(function (res) {
            _this.candidateLanguage = res;
        });
        this.val = 0;
    };
    LangugaeCandidateComponent.prototype.Edit = function () {
        this.x = "visible";
        this.y = "hidden";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LangugaeCandidateComponent.prototype, "candidateLanguage", void 0);
    LangugaeCandidateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-langugae-candidate',
            template: __webpack_require__(/*! ./langugae-candidate.component.html */ "./src/app/candidate/langugae-candidate/langugae-candidate.component.html"),
            styles: [__webpack_require__(/*! ./langugae-candidate.component.scss */ "./src/app/candidate/langugae-candidate/langugae-candidate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"], src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_4__["CandidateService"]])
    ], LangugaeCandidateComponent);
    return LangugaeCandidateComponent;
}());



/***/ }),

/***/ "./src/app/candidate/level-candidate/level-candidate.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/candidate/level-candidate/level-candidate.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-panel  header=\"Kỹ năng\">\n<!-- \n<div class=\"ui-g\" style=\"border: 1px solid\">\n  <div class=\"ui-g-12\">\n      <div class=\"ui-g\">\n              <i class=\"fa fa-flag\"></i> \n              <h1 style=\"margin-top: -6px;margin-left: 10px;\">Kỹ năng</h1>\n      </div>\n      <div class=\"ui-g\">\n           <span>Thêm kỹ năng nghề nghiệp đề nhận được những đề nghị công việc phù hợp hơn</span>\n      </div>\n <form [formGroup]=\"userform1\" (ngSubmit)=\"onSubmit(userform1.value)\">\n      <div class=\"ui-g\">\n                <p-dropdown formControlName=\"Skill\" [options]=\"ngonNgu\" [(ngModel)]=\"selectedCar\"  [showTransitionOptions]=\"'0ms'\"  [hideTransitionOptions]=\"'0ms'\" [style]=\"{'width':'750px'}\">\n\n                </p-dropdown>\n              <button type=\"button\" class=\"btn btn-sm btn-default\" id=\"btn-add-tag\">\n                      <i class=\"fa fa-plus\"></i>\n                      \n              </button>\n      </div>\n\n      <div class=\"ui-g\">\n              <div style=\"margin-left: 750px;margin-top: 10px;\">\n                  <button pButton type=\"button\" style=\"margin-right: 5px;\" label=\"Hủy\" ></button>\n                  <button pButton type=\"submit\" label=\"Lưu\" ></button>\n              </div>\n                  \n      </div>\n</form>\n<!-- <div>\n        <p-rating [(ngModel)]=\"val\"></p-rating>\n</div> -->\n\n  <!-- </div>\n  <div *ngIf=\"candidateSkill\">\n        <div *ngFor=\"let person of candidateSkill\">\n                {{person.nameSkill}}\n        </div>\n        <div *ngFor=\"let x of danhSach\">\n                <p-rating readonly=\"true\" [(ngModel)]=\"x\"></p-rating>\n        </div>\n </div>  \n</div>\n<div *ngFor=\"let person of listSkil\">\n        {{person.nameSkill}}\n</div>\n<div *ngFor=\"let person of ds\">\n                {{person.nameSkill}}\n</div>\n</p-panel> -->\n\n\n\n\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css\" integrity=\"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp\" crossorigin=\"anonymous\">\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\" integrity=\"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay\" crossorigin=\"anonymous\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n<link rel=\"stylesheet\" href=\"./assets/css/style1.css\"> \n\n  \n<div id=\"skillSection\">\n                      \n                \n                    <!-- <div class=\"row\">\n                      <div class=\"col-sm-6\">\n                        <div class=\"input-group\">\n                          <span class=\"input-group-addon\">\n                            <i class=\"material-icons\">extension</i>\n                          </span>\n                        <div class=\"form-group label-floating\">\n                            <label class=\"control-label\">Hãy điền thông tin về lĩnh vực chuyên môn của bạn.\n                              <small class='text-red'>*</small>\n                            </label>\n                            <select class=\"form-control skill-selection\" required>\n                              <option value=\"sa\">C#</option>\n                            </select>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-6\" style=\"margin-top: 31px;\">\n                                <p-rating  readonly=\"true\" [(ngModel)]=\"val\"></p-rating>\n                      </div>\n                    </div>\n                   -->\n              <!-- append new skill here -->\n </div>\n\n <div id=\"skillSection\">\n                      \n                \n                <!-- <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">extension</i>\n                      </span>\n                    <div class=\"form-group label-floating\">\n                      \n                          <small class='text-red'>*</small>\n                        \n                        <select class=\"form-control skill-selection\" required>\n                          <option value=\"sa\">C++</option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-6\" style=\"margin-top: 31px;\">\n                            <p-rating  readonly=\"true\" [(ngModel)]=\"val\"></p-rating>\n                  </div>\n                </div> -->\n\n                <div class=\"ui-g\">\n                  <div class=\"ui-g-12\">\n                      <div class=\"ui-g\">\n                          <div class=\"ui-g-6\">\n                                  .Net\n                          </div>\n                          <div   class=\"ui-g-6\" style=\"margin-top: -14px;margin-left: -659px;\">\n                                  <rating   [(ngModel)]=\"val1\" [readonly]=\"true\"></rating><br>\n                          </div>\n                      \n                      </div>\n                  </div>\n                  <div class=\"ui-g-12\">\n                          <div class=\"ui-g\">\n                              <div class=\"ui-g-6\">\n                                      HTML/CSS\n                              </div>\n                              <div class=\"ui-g-6\"  style=\"margin-top: -14px;margin-left: -659px;;\">\n                                      <rating   [(ngModel)]=\"val2\" [readonly]=\"true\" ></rating><br>\n                              </div>\n                          \n                          </div>\n                  </div>\n                   <div class=\"ui-g-12\">\n                          <div class=\"ui-g\">\n                              <div class=\"ui-g-6\">\n                                      C/C++\n                              </div>\n                              <div class=\"ui-g-6 \" style=\"margin-top: -14px;margin-left: -659px;\">\n                                      <rating  [(ngModel)]=\"val3\" [readonly]=\"true\"></rating><br>\n                              </div>\n                            \n                          </div>\n                  </div>\n                  <div class=\"ui-g-12\">\n                          <div class=\"ui-g\">\n                              <div class=\"ui-g-6\">\n                                      Tester\n                              </div>\n                              <div class=\"ui-g-6\"  style=\"margin-top: -14px;margin-left: -659px;\">\n                                      <rating   [(ngModel)]=\"val4\" [readonly]=\"true\"></rating><br>\n                              </div>\n                           \n                          </div>\n                  </div>\n                  <div class=\"ui-g-12\">\n                          <div class=\"ui-g\">\n                              <div class=\"ui-g-6\">\n                                      IOS/Android\n                              </div>\n                              <div class=\"ui-g-6\"  style=\"margin-top: -14px;margin-left: -659px;\">\n                                      <rating  [(ngModel)]=\"val5\" [readonly]=\"true\"></rating><br>\n                              </div>\n                             \n                          </div>\n                  </div> \n               \n              </div>\n          <!-- append new skill here -->\n          <!-- <div style=\"margin-left:760px;\">\n                        <button type=\"button\" [style.visibility]=\"visible\"  class=\"btn btn-success\" (click)=\"sua()\" >Edit</button>\n         </div> -->\n</div>\n\n"

/***/ }),

/***/ "./src/app/candidate/level-candidate/level-candidate.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/candidate/level-candidate/level-candidate.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9sZXZlbC1jYW5kaWRhdGUvbGV2ZWwtY2FuZGlkYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/candidate/level-candidate/level-candidate.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/candidate/level-candidate/level-candidate.component.ts ***!
  \************************************************************************/
/*! exports provided: LevelCandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelCandidateComponent", function() { return LevelCandidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/job.service */ "./src/app/service/job.service.ts");
/* harmony import */ var src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/candidate.service */ "./src/app/service/candidate.service.ts");
/* harmony import */ var src_app_service_point_candidate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/point-candidate.service */ "./src/app/service/point-candidate.service.ts");






var LevelCandidateComponent = /** @class */ (function () {
    function LevelCandidateComponent(point, fb, jobService, candidateService) {
        this.point = point;
        this.fb = fb;
        this.jobService = jobService;
        this.candidateService = candidateService;
        this.listSkil = []; //khai bao danh sach CandidateSkill
        this.danhSach = [1, 2];
        this.infoStudent1 = [];
        this.list = [];
        this.tk = [];
    }
    LevelCandidateComponent.prototype.ngOnInit = function () {
        this.listSkil = this.candidateSkill;
        console.log(this.listSkil);
        this.val = 4;
        this.danhSach.push(4);
        this.userform1 = this.fb.group({
            'Skill': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.ngonNgu =
            [
                { label: 'C#', value: '1' },
                { label: 'C++', value: '2' },
                { label: 'Java', value: '3' },
                { label: 'Android', value: '4' },
            ];
        this.inFo = [{
                label: 'Nguyen Duc Huy',
                type: 'person',
                styleClass: 'ui-person',
                expanded: true,
                data: { name: 'Walter White', 'avatar': 'walter.jpg' },
                children: [
                    {
                        label: '.Net',
                        type: 'person',
                        styleClass: 'ui-person',
                        expanded: true,
                        data: { name: 'Saul Goodman', 'avatar': 'saul.jpg' },
                        children: [{
                                type: 'department',
                                label: 'Lập trình WindowForm',
                                styleClass: 'department-cfo',
                                data: { name: '', 'avatar': 'saul.jpg' },
                            },
                            {
                                type: 'department',
                                label: 'Lập trình hướng đối tượng',
                                styleClass: 'department-cfo',
                                data: { name: '', 'avatar': 'saul.jpg' }
                            },
                            {
                                type: 'department',
                                label: 'Lập trình hướng sự kiện',
                                styleClass: 'department-cfo',
                                data: { name: '', 'avatar': 'saul.jpg' }
                            },
                            {
                                type: 'department',
                                label: 'Lập trình C# nâng cao',
                                styleClass: 'department-cfo',
                                data: { name: '', 'avatar': 'saul.jpg' }
                            }],
                    },
                    {
                        label: 'HTML/CSS',
                        type: 'person',
                        styleClass: 'ui-person',
                        expanded: true,
                        data: { name: 'Mike E.', 'avatar': 'mike.jpg' },
                        children: [{
                                type: 'department',
                                label: 'Lập trình web căn bản',
                                styleClass: 'department-coo',
                                data: { name: '', 'avatar': 'saul.jpg' }
                            },
                            {
                                type: 'department',
                                label: 'Lập trình web nâng cao',
                                styleClass: 'department-coo',
                                data: { name: '', 'avatar': 'saul.jpg' }
                            }
                        ]
                    },
                    {
                        label: 'C/C++',
                        type: 'person',
                        styleClass: 'ui-person',
                        expanded: true,
                        data: { name: 'Mike E.', 'avatar': 'mike.jpg' },
                        children: [{
                                type: 'department',
                                label: 'Nhập môn lập trình',
                                styleClass: 'department-coo',
                                data: { name: '', 'avatar': 'saul.jpg' }
                            },
                            {
                                type: 'department',
                                label: 'Kỹ thuật lập trinh',
                                styleClass: 'department-coo',
                                data: { name: '', 'avatar': 'saul.jpg' }
                            }
                        ]
                    },
                    {
                        label: 'Tester',
                        type: 'person',
                        styleClass: 'ui-person',
                        expanded: true,
                        data: { name: 'Mike E.', 'avatar': 'mike.jpg' },
                        children: [{
                                type: 'department',
                                label: 'Kiểm thử phần mềm',
                                styleClass: 'department-coo',
                                data: { name: '', 'avatar': 'saul.jpg' }
                            },
                            {
                                type: 'department',
                                label: 'Xây dựng phần mềm',
                                styleClass: 'department-coo',
                                data: { name: '', 'avatar': 'saul.jpg' }
                            },
                            {
                                type: 'department',
                                label: 'Công nghệ phần mềm',
                                styleClass: 'department-coo',
                                data: { name: '', 'avatar': 'saul.jpg' }
                            },
                        ]
                    },
                    {
                        label: 'IOS/Android',
                        type: 'person',
                        styleClass: 'ui-person',
                        expanded: true,
                        data: { name: 'Mike E.', 'avatar': 'mike.jpg' },
                        children: [{
                                type: 'department',
                                label: 'Lập trình thiết bị di động',
                                styleClass: 'department-coo',
                                data: { name: '', 'avatar': 'saul.jpg' }
                            },
                            {
                                type: 'department',
                                label: 'Nhập môn lập trình Android',
                                styleClass: 'department-coo',
                                data: { name: '', 'avatar': 'saul.jpg' }
                            },
                        ]
                    },
                ]
            }];
        //duyet ra cac mon hoc
        this.infoStudent1 = this.point.getMonHoc(this.candidateService.getId());
        for (var i = 0; i < this.inFo.length; i++) {
            for (var t = 0; t < this.inFo[i].children.length; t++) {
                //alert(this.inFo[i].children[t].label);
                this.tong = 0;
                this.sl = 1;
                for (var z = 0; z < this.inFo[i].children[t].children.length; z++) {
                    // alert(this.inFo[i].children[t].children[z].label);
                    this.ten = this.inFo[i].children[t].children[z].label;
                    for (var k = 0; k < this.infoStudent1.length; k++) {
                        if (this.infoStudent1[k].TenMonHoc == this.ten) {
                            //alert(this.inFo[i].children[t].children[z].label);
                            this.inFo[i].children[t].children[z].data.name = this.infoStudent1[k].TK;
                            this.tong = this.tong + parseInt(this.inFo[i].children[t].children[z].data.name);
                            // alert(this.inFo[i].children[t].children[z].label);
                            this.sl = this.sl + 1;
                        }
                    }
                    //this.pieChartData=this.list;
                }
                this.tong = this.tong / this.sl;
                this.list.push(this.tong);
                //  console.log(this.list);
                //update CV neu thay đổi trong ngôi sao sẽ 
            }
        }
        console.log(this.list);
        for (var x = 0; x < this.list.length; x++) {
            if (this.list[x] < 4) {
                this.tk.push(1);
            }
            else if (this.list[x] < 6) {
                this.tk.push(2);
            }
            else if (this.list[x] < 7) {
                this.tk.push(3);
            }
            else if (this.list[x] < 8) {
                this.tk.push(4);
            }
            else if (this.list[x] < 9) {
                this.tk.push(5);
            }
        }
        console.log(this.tk);
        for (var t = 0; t < this.tk.length; t++) {
            if (t == 0) {
                this.val1 = this.tk[t];
            }
            if (t == 1) {
                this.val2 = this.tk[t];
            }
            if (t == 2) {
                this.val3 = this.tk[t];
            }
            if (t == 3) {
                this.val4 = this.tk[t];
            }
            if (t == 4) {
                this.val5 = this.tk[t];
            }
        }
        console.log(this.tk);
    };
    LevelCandidateComponent.prototype.onSubmit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LevelCandidateComponent.prototype, "candidateSkill", void 0);
    LevelCandidateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-level-candidate',
            template: __webpack_require__(/*! ./level-candidate.component.html */ "./src/app/candidate/level-candidate/level-candidate.component.html"),
            styles: [__webpack_require__(/*! ./level-candidate.component.scss */ "./src/app/candidate/level-candidate/level-candidate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_point_candidate_service__WEBPACK_IMPORTED_MODULE_5__["PointCandidateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"], src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_4__["CandidateService"]])
    ], LevelCandidateComponent);
    return LevelCandidateComponent;
}());



/***/ }),

/***/ "./src/app/candidate/list-applywork/list-applywork.component.html":
/*!************************************************************************!*\
  !*** ./src/app/candidate/list-applywork/list-applywork.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <a [routerLink]=\"['../thongTinCaNhan']\">Thông tin cá nhân</a>\n<a [routerLink]=\"['../saveWork']\">Việc làm của tôi</a>\n<br> -->\n<a class=\"a-link\" [routerLink]=\"['../saveWork']\">Công việc đã lưu</a> |\n<a class=\"a-link\" [routerLink]=\"['../applywork']\">Công việc đã ứng tuyển</a> \n\n<!-- <div class=\"ui-g\">\n  <div class=\"ui-g-12\">\n      <div class=\"ui-g\">\n          <div class=\"ui-g-12\">\n                  <div *ngFor=\"let item of listJob\">\n                      <div class=\"ui-g-12\">\n                            <app-apply-work [applyWork]=\"item\"></app-apply-work>\n                      </div>\n                  </div>\n          </div>\n      </div>\n  </div>\n</div>  -->\n\n<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"ui-g\">\n            <div class=\"ui-g-12\">\n                    <div *ngFor=\"let item of listApply \" class=\"hhh\">\n                        <div class=\"ui-g-12 hhh\">\n                              <app-apply-work [applyWork]=\"item\"></app-apply-work>\n                        </div>\n                    </div>\n            </div>\n        </div>\n    </div>\n  </div> \n"

/***/ }),

/***/ "./src/app/candidate/list-applywork/list-applywork.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/candidate/list-applywork/list-applywork.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".a-link {\n  text-decoration: underline;\n  color: red;\n  font-weight: bold; }\n\n.hhh {\n  background: #f5f5f5;\n  margin: 5px 0;\n  box-shadow: 0 0 8px #999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlL2xpc3QtYXBwbHl3b3JrL0U6XFxXZWJNVkNcXEZyb250ZW5kVUlIXFxGcm9udGVuZFVJSC9zcmNcXGFwcFxcY2FuZGlkYXRlXFxsaXN0LWFwcGx5d29ya1xcbGlzdC1hcHBseXdvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLGlCQUNKLEVBQUE7O0FBQ0E7RUFDSSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FuZGlkYXRlL2xpc3QtYXBwbHl3b3JrL2xpc3QtYXBwbHl3b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmEtbGlua3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn1cclxuLmhoaCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggIzk5OTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/candidate/list-applywork/list-applywork.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/candidate/list-applywork/list-applywork.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListApplyworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListApplyworkComponent", function() { return ListApplyworkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/job.service */ "./src/app/service/job.service.ts");
/* harmony import */ var src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/candidate.service */ "./src/app/service/candidate.service.ts");




var ListApplyworkComponent = /** @class */ (function () {
    function ListApplyworkComponent(candidateService, jobService) {
        this.candidateService = candidateService;
        this.jobService = jobService;
        this.testcc = ['A', 'B', 'C'];
        this.listJob = [
            { idJob: 1, nameJob: 'Tuyển nhân viên C#', yeuCau: 'C#,C,C++', startDate: '1-4-2019', endDate: '30-4-2019', locationJob: 'Hồ Chí Minh', img: 'https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png', ungVien: 'Mới tốt nghiệp' },
            { idJob: 2, nameJob: 'Tuyển nhân viên Java', yeuCau: 'Java,Html', startDate: '1-4-2019', endDate: '20-4-2019', locationJob: 'Hà Nội', img: 'https://cdn.vox-cdn.com/thumbor/_AobZZDt_RVStktVR7mUZpBkovc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg', ungVien: 'Mới tốt nghiệp' },
            { idJob: 3, nameJob: 'Sinh viên C++', yeuCau: 'C,C++', startDate: '1-4-2019', endDate: '6-4-2019', locationJob: 'Tây Ninh', img: 'https://itviec.com/blog/wp-content/uploads/2018/05/C-e1527463988593.png', ungVien: 'Mới tốt nghiệp' },
        ];
        this.listApply = [];
    }
    ListApplyworkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobService.getApplyJob(this.candidateService.getId())
            .subscribe(function (res) {
            _this.listApply = res;
            console.log(_this.listApply);
        });
    };
    ListApplyworkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-applywork',
            template: __webpack_require__(/*! ./list-applywork.component.html */ "./src/app/candidate/list-applywork/list-applywork.component.html"),
            styles: [__webpack_require__(/*! ./list-applywork.component.scss */ "./src/app/candidate/list-applywork/list-applywork.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_3__["CandidateService"], src_app_service_job_service__WEBPACK_IMPORTED_MODULE_2__["JobService"]])
    ], ListApplyworkComponent);
    return ListApplyworkComponent;
}());



/***/ }),

/***/ "./src/app/candidate/list-job-interview/list-job-interview.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/candidate/list-job-interview/list-job-interview.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  list-job-interview works!\n</p>\n\n<div  >\n  <p-table #dt1 [columns]=\"colsCandidate\" [value]=\"listJobInterview\" [paginator]=\"true\" [rows]=\"10\">\n      <ng-template pTemplate=\"caption\">\n          <div style=\"text-align: right\">        \n              <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n              <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt1.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n          </div>\n      </ng-template>\n      <ng-template pTemplate=\"header\" let-columns>\n      \n            <tr>\n                <th>Id Job</th>\n                <th>Tên công việc</th>\n                <th>Vị trí làm việc</th>\n                <th>Ngày nộp</th>\n                <th>Xem thông tin</th>\n\n            </tr>\n      </ng-template>\n      <ng-template ng-template pTemplate=\"body\" let-rowData  let-columns=\"columns\">\n        <tr *ngFor=\"let col of listJobInterview\">\n            <td>{{col.idJob}}</td>\n            <td>{{col.title}}</td>\n            <td>{{col.level}}</td>\n            <td>{{col.dateApply}}</td>\n            <td> <a [routerLink]=\"['../detailInterview',col.idUser,col.idJob]\">Xem chi tiết</a> </td>\n        </tr> \n</ng-template>\n\n\n\n    \n  </p-table>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/candidate/list-job-interview/list-job-interview.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/candidate/list-job-interview/list-job-interview.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9saXN0LWpvYi1pbnRlcnZpZXcvbGlzdC1qb2ItaW50ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/candidate/list-job-interview/list-job-interview.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/candidate/list-job-interview/list-job-interview.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListJobInterviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListJobInterviewComponent", function() { return ListJobInterviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/job.service */ "./src/app/service/job.service.ts");
/* harmony import */ var src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/candidate.service */ "./src/app/service/candidate.service.ts");




var ListJobInterviewComponent = /** @class */ (function () {
    function ListJobInterviewComponent(jobService, candidateService) {
        this.jobService = jobService;
        this.candidateService = candidateService;
        this.listJobInterview = [];
    }
    ListJobInterviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.colsCandidate = [
            { field: 'id', header: 'idJob' },
            { field: 'level', header: 'Vị trí làm việc' },
            { field: 'title', header: 'Tên công việc' },
            { field: 'dateApply', header: 'Ngày nộp' },
        ];
        alert('taisao' + this.candidateService.getId());
        this.jobService.getJobInterview(this.candidateService.getId())
            .subscribe(function (res) {
            _this.listJobInterview = res;
            console.log(_this.listJobInterview);
        });
    };
    ListJobInterviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-job-interview',
            template: __webpack_require__(/*! ./list-job-interview.component.html */ "./src/app/candidate/list-job-interview/list-job-interview.component.html"),
            styles: [__webpack_require__(/*! ./list-job-interview.component.scss */ "./src/app/candidate/list-job-interview/list-job-interview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_job_service__WEBPACK_IMPORTED_MODULE_2__["JobService"], src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_3__["CandidateService"]])
    ], ListJobInterviewComponent);
    return ListJobInterviewComponent;
}());



/***/ }),

/***/ "./src/app/candidate/list-notifywork/list-notifywork.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/candidate/list-notifywork/list-notifywork.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div class=\"ui-g-12\">\n      <div class=\"ui-g-3\">\n          <h1 style=\"color: darkgoldenrod\">Tạo thông báo việc làm</h1>\n      </div>\n      <div class=\"ui-g-9\" style=\"padding-left: 647px;margin-top: 31px;\">\n        <button type=\"text\" (click)=\"showDialog()\" pButton icon=\"pi pi-plus\" label=\"Tạo thông báo việc làm\"></button>\n      </div>\n  </div>\n</div>\n\n<div class=\"ui-g\">\n  <div class=\"ui-g-12\">\n      <div class=\"ui-g\">\n          <div class=\"ui-g-12\">\n                  <div *ngFor=\"let item of listJob\">\n                      <div class=\"ui-g-12\">\n                            <!-- <app-notify-work (editJob)=\"Edit($event)\" [TEN]='ten' [notifyWork]=\"item\"></app-notify-work> -->\n                            <app-notify-work (deleteJobNotify)=\"deleteJob($event)\" (job)=\"tri($event)\" (editJob)=\"Edit($event)\" [JOB]='job' [notifyWork]=\"item\"></app-notify-work>\n                      </div>\n                  </div>\n          </div>\n      </div>\n  </div>\n</div> \n\n\n\n <p-dialog header=\"Tạo thông báo việc làm\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [style]=\"{width: '500px', minWidth: '500px'}\" [minY]=\"70\" \n        [maximizable]=\"true\" [baseZIndex]=\"20000\">\n      \n        <app-create-notify-work (sua)=\"getJob($event)\"  (Edit)=\"suaTT($event)\" (notyfyJob)=\"addJob($event)\"></app-create-notify-work>     \n</p-dialog>\n \n"

/***/ }),

/***/ "./src/app/candidate/list-notifywork/list-notifywork.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/candidate/list-notifywork/list-notifywork.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9saXN0LW5vdGlmeXdvcmsvbGlzdC1ub3RpZnl3b3JrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/candidate/list-notifywork/list-notifywork.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/candidate/list-notifywork/list-notifywork.component.ts ***!
  \************************************************************************/
/*! exports provided: ListNotifyworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListNotifyworkComponent", function() { return ListNotifyworkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListNotifyworkComponent = /** @class */ (function () {
    function ListNotifyworkComponent() {
        this.testcc = ['A', 'B', 'C'];
        this.testcc1 = ['A'];
        this.sua = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.listJob = [];
        this.display = false;
    }
    ListNotifyworkComponent.prototype.ngOnInit = function () {
    };
    ListNotifyworkComponent.prototype.showDialog = function () {
        this.display = true;
    };
    ListNotifyworkComponent.prototype.addJob = function (job) {
        console.log('dang o day ne');
        this.listJob.push(job);
        console.log(this.listJob);
        this.display = false;
    };
    ListNotifyworkComponent.prototype.Edit = function (id) {
        this.sua.emit(id);
        var index = this.listJob.findIndex(function (x) { return x.idJobNotify == id; });
        this.job = this.listJob[index];
        console.log(this.job);
        this.ten = id + "";
    };
    ListNotifyworkComponent.prototype.tri = function (x) {
        var index = this.listJob.findIndex(function (y) { return y.idJobNotify == x.idJobNotify; });
        this.listJob[index].idJobNotify = x.idJobNotify;
        this.listJob[index].khuVuc = x.khuVuc;
        this.listJob[index].kyNang = x.kyNang;
        this.listJob[index].mucLuong = x.mucLuong;
        this.listJob[index].nameJob = x.nameJob;
        this.listJob[index].nganhNghe = x.nganhNghe;
        this.listJob[index].capBac = x.capBac;
    };
    ListNotifyworkComponent.prototype.deleteJob = function (id) {
        var index = this.listJob.findIndex(function (x) { return x.idJobNotify == id; });
        this.listJob.splice(index, 1);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListNotifyworkComponent.prototype, "sua", void 0);
    ListNotifyworkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-notifywork',
            template: __webpack_require__(/*! ./list-notifywork.component.html */ "./src/app/candidate/list-notifywork/list-notifywork.component.html"),
            styles: [__webpack_require__(/*! ./list-notifywork.component.scss */ "./src/app/candidate/list-notifywork/list-notifywork.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListNotifyworkComponent);
    return ListNotifyworkComponent;
}());



/***/ }),

/***/ "./src/app/candidate/list-savework/list-savework.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/candidate/list-savework/list-savework.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <a [routerLink]=\"['../thongTinCaNhan']\">Thông tin cá nhân</a>\n<a [routerLink]=\"['../saveWork']\">Việc làm của tôi</a>\n<a [routerLink]=\"['../viewCV']\">Xem CV</a> -->\n <a class=\"a-link\" [routerLink]=\"['../saveWork']\">Việc làm đã lưu</a> |\n<a class=\"a-link\" [routerLink]=\"['../applywork']\">Việc làm ứng tuyển</a> \n  <!-- <div class=\"ui-g\">\n  <div class=\"ui-g-12\">\n      <div class=\"ui-g\">\n          <div class=\"ui-g-12\">\n                  <div *ngFor=\"let item of listJob\">\n                      <div class=\"ui-g-12\">\n                            <app-save-work  (deleteJob)=\"delete($event)\" [saveWork]=\"item\" (xoa)=\"parentXoa($event)\"></app-save-work>\n                      </div>\n                  </div>\n          </div>\n      </div>\n  </div>\n</div> \n<p>Componen {{name}}</p> \n<h3>cccccccccccccccc</h3> -->\n\n<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"ui-g\">\n            <div class=\"ui-g-12\">\n                    <div *ngFor=\"let item of listJob1\">\n                        <div class=\"ui-g-12\">\n                              <app-save-work  (deleteJob)=\"delete($event)\" [saveWork]=\"item\" (xoa)=\"parentXoa($event)\"></app-save-work>\n                        </div>\n                    </div>\n            </div>\n        </div>\n    </div>\n  </div> \n\n"

/***/ }),

/***/ "./src/app/candidate/list-savework/list-savework.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/candidate/list-savework/list-savework.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".a-link {\n  text-decoration: underline;\n  color: red;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlL2xpc3Qtc2F2ZXdvcmsvRTpcXFdlYk1WQ1xcRnJvbnRlbmRVSUhcXEZyb250ZW5kVUlIL3NyY1xcYXBwXFxjYW5kaWRhdGVcXGxpc3Qtc2F2ZXdvcmtcXGxpc3Qtc2F2ZXdvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLGlCQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYW5kaWRhdGUvbGlzdC1zYXZld29yay9saXN0LXNhdmV3b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmEtbGlua3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/candidate/list-savework/list-savework.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/candidate/list-savework/list-savework.component.ts ***!
  \********************************************************************/
/*! exports provided: ListSaveworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSaveworkComponent", function() { return ListSaveworkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/candidate.service */ "./src/app/service/candidate.service.ts");
/* harmony import */ var src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/job.service */ "./src/app/service/job.service.ts");
/* harmony import */ var src_app_models_saveJob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/saveJob */ "./src/app/models/saveJob.ts");





var ListSaveworkComponent = /** @class */ (function () {
    function ListSaveworkComponent(candidateService, jobService) {
        this.candidateService = candidateService;
        this.jobService = jobService;
        this.testcc = ['A', 'B', 'C'];
        this.listJob = [
            { idJob: 1, nameJob: 'Tuyển nhân viên C#', yeuCau: 'C#,C,C++', startDate: '1-4-2019', endDate: '30-4-2019', locationJob: 'Hồ Chí Minh', img: 'https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png', ungVien: 'Mới tốt nghiệp' },
            { idJob: 2, nameJob: 'Tuyển nhân viên Java', yeuCau: 'Java,Html', startDate: '1-4-2019', endDate: '20-4-2019', locationJob: 'Hà Nội', img: 'https://cdn.vox-cdn.com/thumbor/_AobZZDt_RVStktVR7mUZpBkovc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg', ungVien: 'Mới tốt nghiệp' },
            { idJob: 3, nameJob: 'Sinh viên C++', yeuCau: 'C,C++', startDate: '1-4-2019', endDate: '6-4-2019', locationJob: 'Tây Ninh', img: 'https://itviec.com/blog/wp-content/uploads/2018/05/C-e1527463988593.png', ungVien: 'Mới tốt nghiệp' },
        ];
        this.listJob1 = [];
    }
    ListSaveworkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobService.getSaveJob(this.candidateService.getId())
            .subscribe(function (res) {
            _this.listJob1 = res;
            console.log(_this.listJob1);
        });
    };
    // parentXoa(xoa:boolean)
    // {
    //   console.log('dang xoa');
    //   this.testcc = ['A','B'];
    // }
    ListSaveworkComponent.prototype.delete = function (deleteJob) {
        var _this = this;
        this.saveJob = new src_app_models_saveJob__WEBPACK_IMPORTED_MODULE_4__["SaveJob"]();
        this.saveJob.idJob = deleteJob;
        this.saveJob.idUser = this.candidateService.id;
        this.jobService.unCheckSaveJob(this.saveJob)
            .subscribe(function (res) {
            _this.jobService.getSaveJob(_this.candidateService.getId())
                .subscribe(function (res) {
                _this.listJob1 = res;
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ListSaveworkComponent.prototype, "name", void 0);
    ListSaveworkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-savework',
            template: __webpack_require__(/*! ./list-savework.component.html */ "./src/app/candidate/list-savework/list-savework.component.html"),
            styles: [__webpack_require__(/*! ./list-savework.component.scss */ "./src/app/candidate/list-savework/list-savework.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_2__["CandidateService"], src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"]])
    ], ListSaveworkComponent);
    return ListSaveworkComponent;
}());



/***/ }),

/***/ "./src/app/candidate/my-work/my-work.component.html":
/*!**********************************************************!*\
  !*** ./src/app/candidate/my-work/my-work.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <a [routerLink]=\"['../thongTinCaNhan']\">Thông tin cá nhân</a>\r\n<a [routerLink]=\"['../saveWork']\">Việc làm của tôi</a>\r\n<a [routerLink]=\"['../viewCV']\">Xem CV</a> -->\r\n\r\n<!-- <p-tabView>\r\n    <p-tabPanel header=\"Việc làm đã lưu\" leftIcon=\"pi pi-calendar\">\r\n        <app-list-savework></app-list-savework>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"Việc làm đã ứng tuyển\" leftIcon=\"pi pi-inbox\">\r\n        <app-list-applywork></app-list-applywork> \r\n    </p-tabPanel>\r\n</p-tabView> -->\r\n<br>\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css\" integrity=\"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp\" crossorigin=\"anonymous\">\r\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\" integrity=\"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay\" crossorigin=\"anonymous\">\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\r\n<link rel=\"stylesheet\" href=\"./assets/css/style1.css\"> \r\n<a class=\"a-link\" [routerLink]=\"['../saveWork']\">Công việc đã lưu</a> | \r\n<a class=\"a-link\" [routerLink]=\"['../applywork']\">Công việc đã ứng tuyển</a>\r\n"

/***/ }),

/***/ "./src/app/candidate/my-work/my-work.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/candidate/my-work/my-work.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".a-link {\n  text-decoration: underline;\n  color: red;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlL215LXdvcmsvRTpcXFdlYk1WQ1xcRnJvbnRlbmRVSUhcXEZyb250ZW5kVUlIL3NyY1xcYXBwXFxjYW5kaWRhdGVcXG15LXdvcmtcXG15LXdvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLGlCQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYW5kaWRhdGUvbXktd29yay9teS13b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmEtbGlua3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/candidate/my-work/my-work.component.ts":
/*!********************************************************!*\
  !*** ./src/app/candidate/my-work/my-work.component.ts ***!
  \********************************************************/
/*! exports provided: MyWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWorkComponent", function() { return MyWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyWorkComponent = /** @class */ (function () {
    function MyWorkComponent() {
    }
    MyWorkComponent.prototype.ngOnInit = function () {
    };
    MyWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-work',
            template: __webpack_require__(/*! ./my-work.component.html */ "./src/app/candidate/my-work/my-work.component.html"),
            styles: [__webpack_require__(/*! ./my-work.component.scss */ "./src/app/candidate/my-work/my-work.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyWorkComponent);
    return MyWorkComponent;
}());



/***/ }),

/***/ "./src/app/candidate/notify-work/notify-work.component.html":
/*!******************************************************************!*\
  !*** ./src/app/candidate/notify-work/notify-work.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\" style=\"border-bottom: 1px solid;\">\n  <div class=\"ui-g-12\">\n    <div class=\"ui-g\">\n      <div class=\"ui-g-4\">\n          <h3>{{notifyWork.nameJob}}</h3>\n      </div>\n      <div class=\"ui-g-1\">\n          <h3>Nhận</h3>\n      </div>\n      <div class=\"ui-g-2\">\n          <h3>Ngày cập nhật</h3>\n      </div>\n      <div class=\"ui-g-4\" style=\"padding-top: 36px;padding-left: 174px;\">\n        <p-button label=\"Xem việc phù hợp\" style=\"margin-right: 10px;\"></p-button>\n        <p-button label=\"Xóa\" type=\"button\" (click)=\"Delete()\"  style=\"margin-right: 10px;\"></p-button>\n        <p-button type=\"button\" (click)=\"Edit()\" label=\"Sửa\" style=\"margin-right: 10px;\"></p-button>\n      </div>\n    </div>\n    <div class=\"ui-g\" style=\"margin-top: -22px;\">\n      <div class=\"ui-g-4\">\n        <span>{{notifyWork.khuVuc}}-</span>\n        <span>{{notifyWork.nganhNghe}}-</span>\n        <span>{{notifyWork.kyNang}}-</span>\n        <span>{{notifyWork.capBac}}-</span>\n        <span>{{notifyWork.mucLuong}}</span>\n      </div>\n      <div class=\"ui-g-1\">\n          <span>Hàng ngày</span>\n      </div>\n      <div class=\"ui-g-2\">\n          <span>{{notifyWork.dateCreate}}</span>\n          \n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n<p-dialog header=\"Tạo thông báo việc làm\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [style]=\"{width: '500px', minWidth: '500px'}\" [minY]=\"70\" \n        [maximizable]=\"true\" [baseZIndex]=\"20000\">\n        <!-- <input [(ngModel)]='childMgs' type=\"text\"> -->\n        <!-- <app-create-notify-work [mgsChild]='TEN'></app-create-notify-work>      -->\n        <app-create-notify-work  (editJob1)=\"xuan($event)\" [mgsChild1]='JOB'></app-create-notify-work> \n</p-dialog> \n "

/***/ }),

/***/ "./src/app/candidate/notify-work/notify-work.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/candidate/notify-work/notify-work.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9ub3RpZnktd29yay9ub3RpZnktd29yay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/candidate/notify-work/notify-work.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/candidate/notify-work/notify-work.component.ts ***!
  \****************************************************************/
/*! exports provided: NotifyWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyWorkComponent", function() { return NotifyWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_createNotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/createNotify */ "./src/app/models/createNotify.ts");



var NotifyWorkComponent = /** @class */ (function () {
    function NotifyWorkComponent() {
        this.editJob = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.job = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteJobNotify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.display = false;
    }
    NotifyWorkComponent.prototype.ngOnInit = function () {
    };
    NotifyWorkComponent.prototype.Edit = function () {
        this.editJob.emit(this.notifyWork.idJobNotify);
        this.display = true;
    };
    NotifyWorkComponent.prototype.SUA = function (id) {
        console.log('Chay ve notify rùi');
    };
    NotifyWorkComponent.prototype.xuan = function (x) {
        // console.log(job);
        this.job.emit(x);
        this.display = false;
    };
    NotifyWorkComponent.prototype.Delete = function () {
        this.deleteJobNotify.emit(this.notifyWork.idJobNotify);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_createNotify__WEBPACK_IMPORTED_MODULE_2__["CreateNotify"])
    ], NotifyWorkComponent.prototype, "notifyWork", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NotifyWorkComponent.prototype, "TEN", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_createNotify__WEBPACK_IMPORTED_MODULE_2__["CreateNotify"])
    ], NotifyWorkComponent.prototype, "JOB", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotifyWorkComponent.prototype, "editJob", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotifyWorkComponent.prototype, "job", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotifyWorkComponent.prototype, "deleteJobNotify", void 0);
    NotifyWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notify-work',
            template: __webpack_require__(/*! ./notify-work.component.html */ "./src/app/candidate/notify-work/notify-work.component.html"),
            styles: [__webpack_require__(/*! ./notify-work.component.scss */ "./src/app/candidate/notify-work/notify-work.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotifyWorkComponent);
    return NotifyWorkComponent;
}());



/***/ }),

/***/ "./src/app/candidate/profile-candidate/profile-candidate.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/candidate/profile-candidate/profile-candidate.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- <div class=\"ui-g\" style=\"border: 1px solid\">\n    <div class=\"ui-g-12\">\n      <div class=\"ui-g-3\">\n        <h1 style=\"margin-top:-10px;\">Thông tin cá nhân</h1>\n          <img style=\"width: 200px;height: 200px;margin-top: 0px;\">\n      </div>\n      <div class=\"ui-g-9\">\n        <div class=\"ui-g\">\n            <div class=\"ui-g-3\">\n                  <h3>Họ</h3>\n            </div>\n            <div class=\"ui-g-3\">\n              <h3>Tên</h3>\n            </div>\n        </div>\n        <div class=\"ui-g\">\n          <div class=\"ui-g-3 xx\">\n            <input type=\"text\" pInputText placeholder=\"Họ\" style=\"width: 200px;margin-right: 5px;\">\n          </div>\n          <div class=\"ui-g-3 xx\">\n            <input type=\"text\"  pInputText placeholder=\"Tên\" style=\"width: 200px;margin-right: 5px;\">\n          </div>\n        </div>\n      <div class=\"ui-g\">\n          <div class=\"ui-g-3\">\n                <h3>Chức danh</h3>\n          </div>\n          <div class=\"ui-g-3\">\n            <h3>Cấp bậc hiện tại</h3>\n          </div>\n      </div>\n      <div class=\"ui-g\">\n        <div class=\"ui-g-3 xx\">\n          <input type=\"text\"  pInputText placeholder=\"Chuc danh\" style=\"width: 200px;margin-right: 5px;\">\n        </div>\n        <div class=\"ui-g-3\" style=\"margin-top:-26px;\">\n          <p-dropdown  [options]=\"capBac\"></p-dropdown>\n        </div>\n      </div>\n      <div class=\"ui-g\">\n        <div class=\"ui-g-3\">\n              <h3>Số năm kinh nghiệm</h3>\n        </div>\n      </div>\n      <div class=\"ui-g\">\n        <div class=\"ui-g-3 xx\">\n          <input type=\"text\" pInputText placeholder=\"Số năm kinh nghiệm\" style=\"width:471px;;margin-right: 5px;\">\n        </div>\n      </div>\n      <div class=\"ui-g\">\n        <div class=\"ui-g-3\" style=\"margin-left:376px;\">\n          \n          <button pButton type=\"button\" style=\"margin-right: 5px;\" label=\"Hủy\" ></button>\n          <button pButton type=\"button\" label=\"Lưu\" ></button>\n        </div>\n      </div>\n      </div>\n    </div>\n</div> \n\n -->\n<!-- \n<form [formGroup]=\"userform\" (ngSubmit)=\"onSubmit(userform.value)\">\n  <div class=\"ui-g\" style=\"border: 1px solid\">\n     <div class=\"ui-g-12\">\n       <div class=\"ui-g-3\">\n         <h1 style=\"margin-top:-10px;\">Thông tin cá nhân</h1>\n           <img style=\"width: 200px;height: 200px;margin-top: 0px;\">\n       </div>\n       <div class=\"ui-g-9\">\n         <div class=\"ui-g\">\n             <div class=\"ui-g-3\">\n                   <h3>Họ</h3>\n             </div>\n             <div class=\"ui-g-3\">\n               <h3>Tên</h3>\n             </div>\n         </div>\n         <div class=\"ui-g\">\n           <div class=\"ui-g-3 xx\">\n             <input type=\"text\" formControlName=\"Ho\" pInputText placeholder=\"Họ\" style=\"width: 200px;margin-right: 5px;\">\n             <div style=\"margin-top: 2px;\">\n              <p-message severity=\"error\" text=\"Vui lòng nhập Họ\" *ngIf=\"!userform.controls['Ho'].valid&&userform.controls['Ho'].dirty\"></p-message>\n             </div>\n            \n            </div>\n           <div class=\"ui-g-3 xx\">\n             <input type=\"text\" formControlName=\"Ten\"  pInputText placeholder=\"Tên\" style=\"width: 200px;margin-right: 5px;\">\n             <div style=\"margin-top: 2px;\">\n              <p-message severity=\"error\" text=\"Vui long nhập tên\" *ngIf=\"!userform.controls['Ten'].valid&&userform.controls['Ten'].dirty\"></p-message>\n             </div>  \n           </div>\n          \n         </div>\n       <div class=\"ui-g\">\n           <div class=\"ui-g-3\">\n                 <h3>Chức danh</h3>\n           </div>\n           <div class=\"ui-g-3\">\n             <h3>Cấp bậc hiện tại</h3>\n           </div>\n       </div>\n       <div class=\"ui-g\">\n         <div class=\"ui-g-3 xx\">\n           <input type=\"text\" formControlName=\"ChucDanh\"  pInputText placeholder=\"Chuc danh\" style=\"width: 200px;margin-right: 5px;\">\n            <div style=\"margin-top: 1px\">\n              <p-message severity=\"error\" text=\"Vui lòng nhập chức danh\" *ngIf=\"!userform.controls['ChucDanh'].valid&&userform.controls['ChucDanh'].dirty\"></p-message>\n            </div>\n          </div>\n         <div class=\"ui-g-3\" style=\"margin-top:-26px;\">\n           <p-dropdown [options]=\"capBac\" formControlName=\"CapBac\"></p-dropdown>\n           \n           <div style=\"margin-top: 1px;\">\n              <p-message severity=\"error\" text=\"Vui lòng chọn cấp bậc\" *ngIf=\"!userform.controls['CapBac'].valid&&userform.controls['CapBac'].dirty\"></p-message>\n            </div>\n        </div>\n       </div>\n       <div class=\"ui-g\">\n         <div class=\"ui-g-3\">\n               <h3>Số năm kinh nghiệm</h3>\n         </div>\n       </div>\n       <div class=\"ui-g\">\n         <div class=\"ui-g-3 xx\">\n           <input type=\"text\" formControlName=\"KinhNghiem\" pInputText placeholder=\"Số năm kinh nghiệm\" style=\"width:471px;;margin-right: 5px;\">\n           <div style=\"margin-top: 1px;\">\n              <p-message severity=\"error\" text=\"Vui lòng nhập kinh nghiệm\" *ngIf=\"!userform.controls['KinhNghiem'].valid&&userform.controls['KinhNghiem'].dirty\"></p-message>  \n            </div>\n        </div>\n       </div>\n       <div class=\"ui-g\">\n         <div class=\"ui-g-3\" style=\"margin-left:376px;\">\n           <button pButton type=\"button\" style=\"margin-right: 5px;\" label=\"Hủy\" ></button>\n           <button pButton type=\"submit\" label=\"Submit\" [disabled]=\"!userform.valid\"></button>\n         </div>\n      </div>\n       </div>\n     </div>\n </div> \n </form>\n  -->\n\n\n<!-- <form [formGroup]=\"userform\" (ngSubmit)=\"onSubmit(userform.value)\"  *ngIf=\"inforCandidate\">\n    <p-panel header=\"Validate\">\n    <div class=\"ui-g\" style=\"border: 1px solid\">\n       <div class=\"ui-g-12\">\n         <div class=\"ui-g-3\">\n           <h1 style=\"margin-top:-10px;\">Thông tin cá nhân</h1>\n             <img style=\"width: 200px;height: 200px;margin-top: 0px;\">\n         </div>\n         <div class=\"ui-g-9\">\n           <div class=\"ui-g\">\n               <div class=\"ui-g-3\">\n                     <h3>Họ</h3>\n               </div>\n               <div class=\"ui-g-3\">\n                 <h3>Tên</h3>\n               </div>\n           </div>\n           <div class=\"ui-g\">\n             <div class=\"ui-g-3 xx\">\n               <input value=\"{{inforCandidate[0].name}}\"  name=\"first1\" type=\"text\" size=\"100\" pInputText  [style.visibility]=\"x\" type=\"text\" formControlName=\"Ho\" pInputText placeholder=\"Họ\" style=\"width: 200px;margin-right: 5px;\">\n               \n               <label style=\"margin-left: -205px;\" [style.visibility]=\"y\">{{ho}}</label>\n               <div style=\"margin-top: 2px;\">\n                <p-message severity=\"error\" text=\"Vui lòng nhập Họ\" *ngIf=\"!userform.controls['Ho'].valid&&userform.controls['Ho'].dirty\"></p-message>\n               </div>\n              \n              </div>\n             <div class=\"ui-g-3 xx\">\n               <input name=\"first2\" [style.visibility]=\"x\" type=\"text\" formControlName=\"Ten\"  pInputText placeholder=\"Tên\" style=\"width: 200px;margin-right: 5px;\">\n               <label style=\"margin-left: -205px;\" [style.visibility]=\"y\">{{ten}}</label>\n               <div style=\"margin-top: 2px;\">\n                <p-message severity=\"error\" text=\"Vui long nhập tên\" *ngIf=\"!userform.controls['Ten'].valid&&userform.controls['Ten'].dirty\"></p-message>\n               </div>  \n             </div>\n            \n           </div>\n         <div class=\"ui-g\">\n             <div class=\"ui-g-3\">\n                   <h3>Chức danh</h3>\n             </div>\n             <div class=\"ui-g-3\">\n               <h3>Cấp bậc hiện tại</h3>\n             </div>\n         </div>\n         <div class=\"ui-g\">\n           <div class=\"ui-g-3 xx\">\n             <input name=\"first3\" [style.visibility]=\"x\" type=\"text\" formControlName=\"ChucDanh\"  pInputText placeholder=\"Chuc danh\" style=\"width: 200px;margin-right: 5px;\">\n             <label  style=\"margin-left: -205px;\" [style.visibility]=\"y\" >{{chucdanh}}</label>\n             <div style=\"margin-top: 1px\">\n                <p-message severity=\"error\" text=\"Vui lòng nhập chức danh\" *ngIf=\"!userform.controls['ChucDanh'].valid&&userform.controls['ChucDanh'].dirty\"></p-message>\n              </div>\n            </div>\n           <div class=\"ui-g-3\" style=\"margin-top:-26px;\">\n             <p-dropdown name=\"first5\" [style.visibility]=\"x\"   [options]=\"capBac\" formControlName=\"CapBac\" [style]=\"{'width':'200px'}\"></p-dropdown>\n             <label  style=\"margin-left: -173px;\" [style.visibility]=\"y\">{{capbac}}</label>\n             <div style=\"margin-top: 1px;\">\n                <p-message  severity=\"error\" text=\"Vui lòng chọn cấp bậc\" *ngIf=\"!userform.controls['CapBac'].valid&&userform.controls['CapBac'].dirty\"></p-message>\n              </div>\n          </div>\n         </div>\n         <div class=\"ui-g\">\n           <div class=\"ui-g-3\">\n                 <h3>Số năm kinh nghiệm</h3>\n           </div>\n         </div>\n         <div class=\"ui-g\">\n           <div class=\"ui-g-3 xx\">\n             <input name=\"first4\" [style.visibility]=\"x\" type=\"text\" formControlName=\"KinhNghiem\" pInputText placeholder=\"Số năm kinh nghiệm\" style=\"width:471px;;margin-right: 5px;\">\n             <label  style=\"margin-left: -1px;margin-top: 10px;\" [style.visibility]=\"y\">{{kinhnghiem}}</label>\n             <div style=\"margin-top: 1px;\">\n                <p-message severity=\"error\" text=\"Vui lòng nhập kinh nghiệm\" *ngIf=\"!userform.controls['KinhNghiem'].valid&&userform.controls['KinhNghiem'].dirty\"></p-message>  \n              </div>\n          </div>\n         </div>\n         <div class=\"ui-g\">\n           <div class=\"ui-g-3\" style=\"margin-left:376px;\">\n             <button pButton type=\"button\" [style.visibility]=\"x\" (click)=\"onClear()\" style=\"margin-right: 5px;\" label=\"Hủy\" ></button>\n             <button pButton type=\"submit\" [style.visibility]=\"x\"   label=\"Lưu\" [disabled]=\"!userform.valid\"></button>\n             <div style=\"margin-top: -33px;margin-left: 61px;\">\n             <button pButton type=\"button\" [style.visibility]=\"y\" (click)=\"Edit()\" style=\"margin-right: 5px;\" label=\"Edit\" ></button>\n              </div>\n          </div>\n        </div>\n        \n        </div>\n       </div>\n   </div> \n   </p-panel>\n </form> -->\n\n\n<!-- <div  [style.visibility]=\"HienThi\" *ngIf=\"inforCandidate\" >\n  <h3>{{inforCandidate[0].name}}</h3>\n  <h3>{{inforCandidate[0].email}}</h3>\n  <h3>{{inforCandidate[0].experience}}</h3>\n  <h3>{{inforCandidate[0].phone}}</h3>\n  <h3>{{inforCandidate[0].position}}</h3>\n  <h3>{{inforCandidate[0].skill}}</h3>\n  <h3>{{inforCandidate[0].idUser}}</h3>\n</div> -->\n\n\n\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css\" integrity=\"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp\" crossorigin=\"anonymous\">\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\" integrity=\"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay\" crossorigin=\"anonymous\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n<link rel=\"stylesheet\" href=\"./assets/css/style1.css\"> \n\n\n<!-- <form [formGroup]=\"userform1\" (ngSubmit)=\"onSubmit1(userform1.value)\"  *ngIf=\"inforCandidate\">\n  <p-panel>\n  <div class=\"ui-g\" style=\"border: 1px solid\">\n     <div class=\"ui-g-12\">\n       <div class=\"ui-g-3\">\n         <h1 style=\"margin-top:-10px;\">Hồ sơ cá nhân</h1>\n           <img src=\"https://kenh14cdn.com/zoom/600_315/2019/4/27/5cc016debe2c9-2-hq-blackpink-jisoo-photos-coachella-off-the-page-fansite-1556342665620403918112-crop-15567702594171121321828.jpg\" style=\"width: 200px;height: 200px;margin-top: 0px;\">\n       </div>\n       <div class=\"ui-g-9\">\n         <div class=\"ui-g\">\n             <div class=\"ui-g-3\">\n                   <h3>Họ tên</h3>\n                 \n             </div>\n             <div class=\"ui-g-3\">\n               <h3>Email</h3>\n             </div>\n         </div>\n         <div class=\"ui-g\">\n           <div class=\"ui-g-3 xx\">\n             <input value=\"{{inforCandidate[0].name}}\" [(ngModel)]=\"name\"    name=\"first1\" type=\"text\" size=\"100\" pInputText  [style.visibility]=\"x\" type=\"text\" formControlName=\"Name\" pInputText placeholder=\"Họ\" style=\"width: 200px;margin-right: 5px;\">\n            </div>\n           \n            <div class=\"ui-g-3 xx\">\n             <input   value=\"{{inforCandidate[0].email}}\"   name=\"first2\" [style.visibility]=\"x\" type=\"text\" formControlName=\"Email\"  pInputText placeholder=\"Tên\" style=\"width: 200px;margin-right: 5px;\">\n            </div>\n          \n         </div>\n       <div class=\"ui-g\">\n           <div class=\"ui-g-3\">\n                 <h3>Trường</h3>\n           </div>\n           <div class=\"ui-g-3\">\n             <h3>Chuyên ngành</h3>\n           </div>\n       </div>\n       <div class=\"ui-g\">\n         <div class=\"ui-g-3 xx\">\n           <input  value=\"{{inforCandidate[0].nameSchool}}\"  name=\"first3\" [style.visibility]=\"x\" type=\"text\" formControlName=\"truong\"  pInputText placeholder=\"Chuc danh\" style=\"width: 200px;margin-right: 5px; \">\n         </div>\n         <input value=\"{{inforCandidate[0].faculty}}\"  name=\"first3\" [style.visibility]=\"x\" type=\"text\" formControlName=\"chuyenhNganh\"  pInputText placeholder=\"Chuc danh\" style=\"width: 200px;margin-right: 5px; margin-top:-18px;height: 34px;;\">\n        </div>\n        <div class=\"ui-g\">\n          <div class=\"ui-g-3\">\n                <h3>Năm học</h3>\n          </div>\n          <div class=\"ui-g-3\">\n            <h3>Số điện thoại</h3>\n          </div>\n      </div>\n        <div class=\"ui-g\">\n          <div class=\"ui-g-3 xx\">\n            <input   value=\"{{inforCandidate[0].yearGraduation}}\" name=\"first3\" [style.visibility]=\"x\" type=\"text\" formControlName=\"namHoc\"  pInputText placeholder=\"Chuc danh\" style=\"width: 200px;margin-right: 5px;\">\n          </div>\n          <input value=\"{{inforCandidate[0].phone}}\" name=\"first3\" [style.visibility]=\"x\" type=\"text\" formControlName=\"soDienThoai\"  pInputText placeholder=\"Chuc danh\" style=\"width: 200px;margin-right: 5px; margin-top: -19px; height: 37px;\">\n        </div>\n\n       <div class=\"ui-g\">\n        <button pButton type=\"submit\" style=\"width: 35px; height: 20px;\">Lưu</button>\n      </div>\n    </div>\n     </div>\n </div> \n </p-panel>\n</form>\n -->\n\n\n\n\n<p-panel header=\"Thông tin chung\" >\n<form [formGroup]=\"userform\" *ngIf=\"inforCandidate\">\n<div class=\"row\" >\n  <div class=\"col-xs-12 col-sm-4\">\n    <div class=\"picture-container\">\n       <!-- <div [style.visibility]=\"visible\"  class=\"picture\">\n          <p-fileUpload mode=\"basic\" name=\"demo[]\" url=\"./upload.php\" accept=\"image/*\" maxFileSize=\"1000000\" (onUpload)=\"onBasicUpload($event)\"></p-fileUpload>\n        <img src=\"\" class=\"picture-src\" id=\"wizardPicturePreview\" title=\"\"/>\n        <input  type=\"file\" id=\"wizard-picture\" name=\"fileToUpload\">\n        <input type=\"hidden\" id=\"avatarUrl\" name=\"avatar_url\">\n      </div>  -->\n      <div>\n        <img style=\"width: 166px;height:160px;margin-left: 256px;\" [src]=\"imagePath\" id='content' #content >\n      </div>\n      <div [style.visibility]=\"disible\"  >\n        \n        <div class=\"col-xs-12 col-sm-4\">\n          <div class=\"picture-container\">\n            <div class=\"picture\">\n              \n              <!-- <input  type=\"file\" id=\"wizard-picture\" name=\"fileToUpload\"> -->\n              <input style=\"margin-left: 237px;margin-top: 20px;\" type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\">\n              <!-- <img style=\"width: 100px;height: 100px\" [src]=\"imagePath\" id='content' #content > -->\n            </div>\n           \n          </div>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-12 col-sm-8\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"material-icons\">face</i>\n          </span>\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Họ\n              <small class='text-red'>*</small>\n            </label>\n\n            <input [readonly]=\"check\"  value=\"Nguyễn\"   name=\"lastname\" type=\"text\" class=\"form-control\" required>\n        </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"material-icons\">face</i>\n          </span>\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Tên\n              <small class='text-red'>*</small>\n            </label>\n            <input  [readonly]=\"check\"  formControlName=\"Ten\"  value=\"{{inforCandidate[0].name}}\"  name=\"firstname\" type=\"text\" class=\"form-control\" required>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"material-icons\">subtitles</i>\n          </span>\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Kinh nghiệm\n              <small class='text-red'>*</small>\n            </label>\n            <input [readonly]=\"check\" formControlName=\"KinhNghiem\"     value=\"{{inforCandidate[0].experience}}\"   id=\"keywordPosition\" name=\"position\" type=\"text\" class=\"form-control\" required>\n          </div>\n        </div>\n        \n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"select-wrapper\">\n          <label class=\"control-label select-label\">Chuyên ngành\n            <small class='text-red'>*</small>\n          </label>\n          <input [readonly]=\"check\" formControlName=\"ChuyenNganh\"    value=\"{{inforCandidate[0].faculty}}\"  id=\"keywordPosition\" name=\"position\" type=\"text\" class=\"form-control\" required>\n        </div>\n      </div>\n      \n      \n      <div class=\"col-sm-6\">\n        <div class=\"input-group input-year\">\n          <span class=\"input-group-addon\">\n            <i class=\"material-icons\">explore</i>\n          </span>\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Năm học\n              <small class='text-red'>*</small>\n            </label>\n            <input [readonly]=\"check\" formControlName=\"NamHoc\" value=\"{{inforCandidate[0].yearGraduation}}\"  name=\"years_of_exp\" type=\"number\" min=\"1\" max=\"127\" maxlength=\"2\"\n            class=\"form-control\" required>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"col-sm-12\">\n        <div class=\"checkbox new-graduate-checkbox\">\n          <label>\n            <input type=\"checkbox\" name=\"new_graduate\">\n            Tôi mới tốt nghiệp/chưa có kinh nghiệm làm việc\n          </label>\n        </div>\n      </div> -->\n    </div>\n  </div>\n</div>\n</form>\n\n<div style=\"margin-left:760px;\">\n    <button type=\"button\" [style.visibility]=\"visible\"  class=\"btn btn-success\" (click)=\"sua()\" >Edit</button>\n</div>\n\n\n<div style=\"margin-left:760px;margin-top: -44px;\">\n  <button type=\"button\" [style.visibility]=\"disible\"  class=\"btn btn-success\" (click)=\"huy()\">Hủy</button>\n  <button type=\"button\" [style.visibility]=\"disible\"  class=\"btn btn-success\" (click)=\"luu()\">Lưu</button>\n</div> \n</p-panel>\n\n"

/***/ }),

/***/ "./src/app/candidate/profile-candidate/profile-candidate.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/candidate/profile-candidate/profile-candidate.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".xx {\n  margin-top: -25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlL3Byb2ZpbGUtY2FuZGlkYXRlL0U6XFxXZWJNVkNcXEZyb250ZW5kVUlIXFxGcm9udGVuZFVJSC9zcmNcXGFwcFxcY2FuZGlkYXRlXFxwcm9maWxlLWNhbmRpZGF0ZVxccHJvZmlsZS1jYW5kaWRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9wcm9maWxlLWNhbmRpZGF0ZS9wcm9maWxlLWNhbmRpZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi54eFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/candidate/profile-candidate/profile-candidate.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/candidate/profile-candidate/profile-candidate.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProfileCandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCandidateComponent", function() { return ProfileCandidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/candidate.service */ "./src/app/service/candidate.service.ts");
/* harmony import */ var src_app_service_job_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/job.service */ "./src/app/service/job.service.ts");
/* harmony import */ var src_app_models_infoCandidate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/infoCandidate */ "./src/app/models/infoCandidate.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");








var ProfileCandidateComponent = /** @class */ (function () {
    function ProfileCandidateComponent(_sanitizer, fb, messageService, candidateService, jobService) {
        this._sanitizer = _sanitizer;
        this.fb = fb;
        this.messageService = messageService;
        this.candidateService = candidateService;
        this.jobService = jobService;
        //
        //28/5
        this.visible = "visible";
        this.disible = "hidden";
        this.check = true;
        this.fileToUpload = null;
    }
    ProfileCandidateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.candidate = new src_app_models_infoCandidate__WEBPACK_IMPORTED_MODULE_6__["InforCandidate"]();
        this.jobService.getInfoCandidate(this.candidateService.getId())
            .subscribe(function (res) {
            _this.candidate = res;
            //console.log("conCac"+res[0].nameSchool);
            console.log(res);
            _this.candidate.Name = res[0].name; //
            _this.candidate.Phone = res[0].phone;
            _this.candidate.Email = res[0].email;
            _this.candidate.YearGraduation = res[0].yearGraduation; //
            _this.candidate.Faculty = res[0].faculty; //
            _this.candidate.NameSchool = res[0].nameSchool;
            _this.candidate.kinhNghiem = res[0].experience; //
            _this.candidate.idUser = _this.candidateService.getId();
            console.log(_this.candidate);
        });
        this.userform = this.fb.group({
            'Ho': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'Ten': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'KinhNghiem': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])),
            'ChuyenNganh': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'NamHoc': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.userform1 = this.fb.group({
            'Name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'Email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'truong': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'chuyenhNganh': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'namHoc': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'soDienThoai': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'idUser': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.getId())
        });
        //   this.capBac = [
        //     {label:'Vui lòng chọn cấp bấc', value:null},
        //     {label:'Mới tốt nghiệp', value:{id:1, name: 'Thailand', code: 'NY'}},
        //     {label:'Nhân viên', value:{id:2, name: 'Japanes', code: 'RM'}},
        //     {label:'Trưởng phòng', value:{id:3, name: 'English', code: 'LDN'}},
        // ];
        this.capBac = [];
        this.capBac.push({ label: 'Vui lòng chọn cấp bậc', value: null });
        this.capBac.push({ label: 'Mới tốt nghiệp', value: 'Mới tốt nghiệp' });
        this.capBac.push({ label: 'Nhân viên', value: 'Nhân viên' });
        this.capBac.push({ label: 'Trưởng phòng', value: 'Trưởng phòng' });
        this.x = "visible";
        this.y = "hidden";
    };
    ProfileCandidateComponent.prototype.onSubmit = function (value) {
        console.log('cc');
        this.submitted = true;
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
        //console.log(this.userform.value);
        console.log(this.ho);
        this.capbac = this.userform.value.CapBac;
        this.ho = this.userform.value.Ho;
        this.ten = this.userform.value.Ten;
        this.chucdanh = this.userform.value.ChucDanh;
        this.kinhnghiem = this.userform.value.KinhNghiem;
        console.log(this.capBac);
        // this.userform.controls['Ho'].reset({ value:this.ho, disabled: true });
        // this.userform.controls['Ten'].reset({ value:this.ten, disabled: true });
        // this.userform.controls['ChucDanh'].reset({ value:this.chucdanh, disabled: true });
        // this.userform.controls['KinhNghiem'].reset({ value:this.kinhnghiem, disabled: true });
        this.xuanvu = this.ho;
        this.x = "hidden";
        this.y = "visible";
        this.HienThi = "visible";
        this.An = "hidden";
    };
    ProfileCandidateComponent.prototype.onClear = function () {
        console.log('cc');
        this.userform.reset();
    };
    Object.defineProperty(ProfileCandidateComponent.prototype, "diagnostic", {
        get: function () {
            return ("Họ:" + this.ho + "-Tên:" + this.ten + "-Chức danh:" + this.chucdanh + "-Cấp bậc:" + this.capbac + "-Kinh nghiệm:" + this.kinhnghiem);
        },
        enumerable: true,
        configurable: true
    });
    ProfileCandidateComponent.prototype.Edit = function () {
        this.x = "visible";
        this.y = "hidden";
    };
    ProfileCandidateComponent.prototype.sua = function () {
        this.visible = "hidden";
        this.disible = "visible";
        this.check = false;
    };
    ProfileCandidateComponent.prototype.huy = function () {
        this.visible = "visible";
        this.disible = "hidden";
        this.check = true;
    };
    ProfileCandidateComponent.prototype.luu = function () {
        this.visible = "visible";
        this.disible = "hidden";
        this.check = true;
        if (this.userform.value.Ten != '') {
            // alert('heheh');
            this.candidate.Name = this.userform.get('Ten').value;
        }
        if (this.userform.value.KinhNghiem != '') {
            this.candidate.kinhNghiem = this.userform.get('KinhNghiem').value;
        }
        if (this.userform.value.ChuyenNganh != '') {
            this.candidate.Faculty = this.userform.get('ChuyenNganh').value;
        }
        if (this.userform.value.NamHoc != '') {
            this.candidate.YearGraduation = this.userform.get('NamHoc').value;
        }
        this.candidate.Email = "huynguyen131997";
        this.candidate.ScoreMedium = 3;
        // alert('taiSao');
        console.log(this.candidate);
        //ham sua thong tin tai day
        this.jobService.AddInforCandidate(this.candidate)
            .subscribe(function (res) {
            alert('Sửa thành công');
        });
    };
    ProfileCandidateComponent.prototype.handleFileInput = function (files) {
        var _this = this;
        // alert('cc');
        // var file:File = inputValue.files[0];
        var myReader = new FileReader();
        this.fileToUpload = files.item(0);
        myReader.onloadend = function (e) {
            _this.image = myReader.result;
        };
        myReader.readAsDataURL(this.fileToUpload);
        myReader.onload = function () {
            var base64String = myReader.result.match(/.+;base64,(.+)/)[1];
            _this.imagePath = _this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                + base64String);
            alert(_this.imagePath);
        };
    };
    ProfileCandidateComponent.prototype.onSubmit1 = function () {
        // alert(this.name);
        //  alert(this.userform1.get('email').value);
        // this.userform1.controls['idUser'].reset({ value:"cc", disabled: true });
        //console.log(this.userform1.value);
        if (this.userform1.value.Name != null) {
            this.candidate.Name = this.userform1.get('Name').value;
        }
        if (this.userform1.value.Email != null) {
            this.candidate.Email = this.userform1.get('Email').value;
            //  alert(this.candidate.Email);
        }
        if (this.userform1.value.Name != null) {
            this.candidate.NameSchool = this.userform1.get('truong').value;
            // alert(this.candidate.NameSchool);
        }
        if (this.userform1.value.chuyenhNganh != null) {
            this.candidate.Faculty = this.userform1.get('chuyenhNganh').value;
        }
        if (this.userform1.value.namHoc != null) {
            this.candidate.YearGraduation = this.userform1.get('namHoc').value;
            alert(this.candidate.YearGraduation);
        }
        if (this.userform1.value.soDienThoai != null) {
            this.candidate.Phone = this.userform1.get('soDienThoai').value;
        }
        //alert('taisao'+this.candidate.Phone);
        //  console.log(this.candidate.)
        this.candidate2 = new src_app_models_infoCandidate__WEBPACK_IMPORTED_MODULE_6__["InforCandidate"]();
        this.candidate2.Name = this.candidate.Name;
        this.candidate2.Email = this.candidate.Email;
        this.candidate2.Faculty = this.candidate.Faculty;
        this.candidate2.Phone = this.candidate.Phone;
        this.candidate2.ScoreMedium = this.candidate.ScoreMedium;
        this.candidate2.idUser = this.candidate.idUser;
        this.concac = this.candidate;
        this.jobService.AddInforCandidate(this.candidate2)
            .subscribe(function (res) {
        });
        //   if(this.userform1.value.Name=='')
        //   {
        //    // this.userform1.controls['Name'].setValue(this.inforCandidate.name);
        //     this.candidate.Name=this.inforCandidate.name;
        //   }
        //  // alert(this.userform1.value.Name);
        //   if(this.userform1.value.truong=='')
        //   {
        //     this.userform1.controls['truong'].setValue(this.inforCandidate.nameSchool);
        //     // alert(this.userform1.value.Name);
        //   }
        //   if(this.userform1.value.Email=='')
        //   {
        //     this.userform1.controls['Email'].setValue(this.inforCandidate.email);
        //     // alert(this.userform1.value.Name);
        //   }
        //   if(this.userform1.value.chuyenhNganh=='')
        //   {
        //     this.userform1.controls['chuyenhNganh'].setValue(this.inforCandidate.faculty);
        //     // alert(this.userform1.value.Name);
        //   }
        //   if(this.userform1.value.namHoc=='')
        //   {
        //     this.userform1.controls['namHoc'].setValue(this.inforCandidate.yearGraduation);
        //     // alert(this.userform1.value.Name);
        //   }
        //   if(this.userform1.value.soDienThoai=='')
        //   {
        //     this.userform1.controls['soDienThoai'].setValue(this.inforCandidate.phone);
        //     // alert(this.userform1.value.Name);
        //   }
        // this.jobService.AddInforCandidate(this.userform1.value)
        //  .subscribe(res =>{
        //    this.inforCandidate=res;
        //  });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileCandidateComponent.prototype, "inforCandidate", void 0);
    ProfileCandidateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-candidate',
            template: __webpack_require__(/*! ./profile-candidate.component.html */ "./src/app/candidate/profile-candidate/profile-candidate.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]],
            styles: [__webpack_require__(/*! ./profile-candidate.component.scss */ "./src/app/candidate/profile-candidate/profile-candidate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"], src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_4__["CandidateService"], src_app_service_job_service__WEBPACK_IMPORTED_MODULE_5__["JobService"]])
    ], ProfileCandidateComponent);
    return ProfileCandidateComponent;
}());



/***/ }),

/***/ "./src/app/candidate/save-work/save-work.component.html":
/*!**************************************************************!*\
  !*** ./src/app/candidate/save-work/save-work.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css\" integrity=\"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp\" crossorigin=\"anonymous\">\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\" integrity=\"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay\" crossorigin=\"anonymous\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n<link rel=\"stylesheet\" href=\"./assets/css/style1.css\"> \n\n\n\n\n<form (ngSubmit)=\"onSubmit()\">\n<div class=\"ui-g\">\n  <div class=\"ui-g-12\">\n      <div class=\"ui-g\">\n          <div class=\"ui-g-3\" style=\"margin-top: -10px;padding-left: 200px;\">\n                  <a data-item-id=\"1080993\" href=\"https://www.vietnamworks.com/tuyen-gap-02-it-business-analyst-lam-viec-tai-ha-noi-1-1080993-jv/?utm_source=vnw_homepage&amp;utm_medium=HotJob&amp;utm_campaign=HotJob&amp;source=homePage\" target=\"_blank\" title=\"Việc làm - Tuyển Gấp 02 IT Business Analyst Làm Việc Tại Hà Nội - Yumeshin Vietnam - Hà Nội\" tabindex=\"0\">\n                      <img src=\"https://ih1.redbubble.net/image.416412087.0587/mp,840x830,matte,f8f8f8,t-pad,750x1000,f8f8f8.jpg\" class=\"img-responsive logo\" id=\"topjob-logo-1080993\"     alt=\"Tuyển Gấp 02 IT Business Analyst Làm Việc Tại Hà Nội\" style=\"width: 100px;height: 100px;\" >\n                  </a>\n          </div>\n          <div class=\"ui-g-5\" style=\"margin-top: -50px;\">\n                  <p class=\"job-title\">\n                          {{saveWork.title}}   \n                  </p>\n                    <div class=\"job-title-bottom\">\n                        <span>{{saveWork.level}}</span>\n                        <span class=\"hidden-xs\">-</span>\n                        <span class=\"location hidden-xs\">{{saveWork.location}}</span>\n                        <span class=\"hot-job-badge\">Hot</span>\n                    </div>\n          </div>\n          <div class=\"ui-g-1\">\n                  <div class=\"text-light\">Ngày hết hạn<span class=\"hidden-md hidden-lg m-r-xs\">:</span></div>\n                  <div class=\"text-strong\">{{saveWork.endDate}}</div>\n                  <h3>{{saveWork.idJob}}</h3>\n          </div>\n          <div class=\"ui-g-3\">\n                  <!-- <button pButton type=\"button\" style=\"margin-right: 5px;\" label=\"Ưng tuyển\" ></button> -->\n                    <a class=\"btn btn-success\" [routerLink]=\"['/detailjob',saveWork.idJob]\" >Ứng tuyển</a> \n                    <a class=\"btn btn-danger\" >Xóa</a>    \n                  <!-- <a class=\"btn btn-danger\" pButton   type=\"submit\" label=\"Xóa\" ></a> -->\n          </div>\n      </div>\n  </div>\n</div> \n</form>"

/***/ }),

/***/ "./src/app/candidate/save-work/save-work.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/candidate/save-work/save-work.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hot-job-badge {\n  background-color: #fd7c7d;\n  border-radius: 3px;\n  color: #fff;\n  font-weight: 500;\n  width: 40px;\n  height: 20px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  position: relative;\n  margin-left: 524px;\n  margin-top: -84px; }\n\n.logo-box {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: -285px; }\n\n.detail {\n  position: absolute;\n  margin-top: -101px;\n  margin-left: 32px; }\n\n.job-title {\n  font-size: 25px;\n  color: aqua;\n  margin-top: 43px; }\n\n.job-title-bottom {\n  font-size: 18px;\n  margin-top: 24px; }\n\n.tabs-container {\n  border: 1px solid #f2f2f2;\n  background: cornsilk;\n  padding: 35px 40px 80px; }\n\n.logo-box img {\n  width: 50px;\n  height: 50px; }\n\nform.ng-untouched.ng-pristine.ng-valid {\n  background: #f5f5f5;\n  margin: 5px 0;\n  box-shadow: 0 0 8px #999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlL3NhdmUtd29yay9FOlxcV2ViTVZDXFxGcm9udGVuZFVJSFxcRnJvbnRlbmRVSUgvc3JjXFxhcHBcXGNhbmRpZGF0ZVxcc2F2ZS13b3JrXFxzYXZlLXdvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUVyQjtFQUVJLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBa0IsRUFBQTs7QUFFdEI7RUFFSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUVyQjtFQUVJLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUVJLHlCQUF5QjtFQUN6QixvQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFLaEI7RUFDSSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FuZGlkYXRlL3NhdmUtd29yay9zYXZlLXdvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG90LWpvYi1iYWRnZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZDdjN2Q7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDo1MjRweDtcclxuICAgIG1hcmdpbi10b3A6IC04NHB4O1xyXG59XHJcbi5sb2dvLWJveFxyXG57XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6LTI4NXB4O1xyXG59XHJcbi5kZXRhaWxcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbn1cclxuLmpvYi10aXRsZVxyXG57XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogYXF1YTtcclxuICAgIG1hcmdpbi10b3A6IDQzcHg7XHJcbn1cclxuXHJcbi5qb2ItdGl0bGUtYm90dG9te1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG4udGFicy1jb250YWluZXJcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcclxuICAgIGJhY2tncm91bmQ6Y29ybnNpbGs7XHJcbiAgICBwYWRkaW5nOiAzNXB4IDQwcHggODBweDtcclxufVxyXG4ubG9nby1ib3ggaW1ne1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7O1xyXG59XHJcblxyXG5cclxuXHJcbmZvcm0ubmctdW50b3VjaGVkLm5nLXByaXN0aW5lLm5nLXZhbGlkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAjOTk5O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/candidate/save-work/save-work.component.ts":
/*!************************************************************!*\
  !*** ./src/app/candidate/save-work/save-work.component.ts ***!
  \************************************************************/
/*! exports provided: SaveWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveWorkComponent", function() { return SaveWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/candidate.service */ "./src/app/service/candidate.service.ts");
/* harmony import */ var src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/job.service */ "./src/app/service/job.service.ts");




var SaveWorkComponent = /** @class */ (function () {
    function SaveWorkComponent(candidateService, jobService) {
        this.candidateService = candidateService;
        this.jobService = jobService;
        this.deleteJob = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SaveWorkComponent.prototype.ngOnInit = function () {
    };
    SaveWorkComponent.prototype.onSubmit = function () {
        this.deleteJob.emit(this.saveWork.idJob);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SaveWorkComponent.prototype, "deleteJob", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SaveWorkComponent.prototype, "saveWork", void 0);
    SaveWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-save-work',
            template: __webpack_require__(/*! ./save-work.component.html */ "./src/app/candidate/save-work/save-work.component.html"),
            styles: [__webpack_require__(/*! ./save-work.component.scss */ "./src/app/candidate/save-work/save-work.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_2__["CandidateService"], src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"]])
    ], SaveWorkComponent);
    return SaveWorkComponent;
}());



/***/ }),

/***/ "./src/app/candidate/view-cv/view-cv.component.html":
/*!**********************************************************!*\
  !*** ./src/app/candidate/view-cv/view-cv.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <a [routerLink]=\"['../thongTinCaNhan']\">Thông tin cá nhân</a>\n<a [routerLink]=\"['../saveWork']\">Việc làm của tôi</a>\n<a [routerLink]=\"['../viewCV']\">Xem CV</a> -->\n\n<div>\n<img [src]=\"img\" id='content' #content >\n  <div *ngIf=\"check==true\">\n    \n      <img style=\"margin-top: -3247px;margin-left: 1059px;;width: 100px;height: 100px;\" src=\"https://previews.123rf.com/images/carmenbobo/carmenbobo1412/carmenbobo141200183/34312397-rubber-stamp-with-word-confirm-inside-vector-illustration.jpg\">\n  </div>\n</div>\n\n<!-- <div style=\"width: 900px;height: 900px\">\n  <embed style=\"width: 100%; height: 100%\" id=\"pdfDisplay\" [src]=\"img\" type=\"application/pdf\"/>\n</div>  -->\n<div *ngIf=\"check==true\">\n  <h3>Xác nhận</h3>\n  <h3>{{danhGia}}</h3>\n  <h3>{{nhanXet}}</h3>\n  \n</div>\n\n<div *ngIf=\"check==false\">\n    <h3>Chưa xác nhận</h3>\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"Request()\" >Gửi yêu cầu xác nhận</button>\n</div>\n\n\n<!-- <head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n<title>Resume</title>\n<link type=\"text/css\" rel=\"stylesheet\" href=\"./assets/css/red.css\" />\n<link type=\"text/css\" rel=\"stylesheet\" href=\"./assets/css/print.css\" media=\"print\"/> -->\n<!--[if IE 7]>\n<link href=\"css/ie7.css\" rel=\"stylesheet\" type=\"text/css\" />\n<![endif]-->\n<!--[if IE 6]>\n<link href=\"css/ie6.css\" rel=\"stylesheet\" type=\"text/css\" />\n<![endif]-->\n<!-- <script type=\"text/javascript\" src=\"./assets/js/jquery-1.4.2.min.js\"></script>\n<script type=\"text/javascript\" src=\"./assets/js/jquery.tipsy.js\"></script>\n<script type=\"text/javascript\" src=\"./assets/js/cufon.yui.js\"></script>\n<script type=\"text/javascript\" src=\"./assets/js/scrollTo.js\"></script>\n<script type=\"text/javascript\" src=\"./assets/js/myriad.js\"></script>\n<script type=\"text/javascript\" src=\"./assets/js/jquery.colorbox.js\"></script>\n<script type=\"text/javascript\" src=\"./assets/js/custom.js\"></script>\n<script type=\"text/javascript\">\n\t\tCufon.replace('h1,h2');\n</script>\n</head>\n<body> -->\n<!-- Begin Wrapper -->\n<!-- <div id=\"wrapper\">\n  <div class=\"wrapper-top\"></div>\n  <div class=\"wrapper-mid\"> -->\n    <!-- Begin Paper -->\n    <!-- <div id=\"paper\">\n      <div class=\"paper-top\"></div>\n      <div id=\"paper-mid\">\n        <div class=\"entry\"> -->\n          <!-- Begin Image -->\n          <!-- <img class=\"portrait\" src=\"./assets/images/image.jpg\" alt=\"John Smith\" /> -->\n          <!-- End Image -->\n          <!-- Begin Personal Information -->\n          <!-- <div class=\"self\">\n            <h1 class=\"name\">John Smith <br />\n              <span>Interactive Designer</span></h1>\n            <ul>\n              <li class=\"ad\">111 Lorem Street, 34785, Ipsum City</li>\n              <li class=\"mail\">johnsmith@business.com</li>\n              <li class=\"tel\">+11 444 555 22 33</li>\n              <li class=\"web\">www.businessweb.com</li>\n            </ul>\n          </div> -->\n          <!-- End Personal Information -->\n          <!-- Begin Social -->\n          <!-- <div class=\"social\">\n            <ul>\n              <li><a class='north' href=\"#\" title=\"Download .pdf\"><img src=\"./assets/images/icn-save.jpg\" alt=\"Download the pdf version\" /></a></li>\n              <li><a class='north' href=\"javascript:window.print()\" title=\"Print\"><img src=\"./assets/images/icn-print.jpg\" alt=\"\" /></a></li>\n              <li><a class='north' id=\"contact\" href=\"contact/index.html\" title=\"Contact Me\"><img src=\".assets/images/icn-contact.jpg\" alt=\"\" /></a></li>\n              <li><a class='north' href=\"#\" title=\"Follow me on Twitter\"><img src=\"./assets/images/icn-twitter.jpg\" alt=\"\" /></a></li>\n              <li><a class='north' href=\"#\" title=\"My Facebook Profile\"><img src=\"./assets/images/icn-facebook.jpg\" alt=\"\" /></a></li>\n            </ul>\n          </div> -->\n          <!-- End Social -->\n        <!-- </div> -->\n        <!-- Begin 1st Row -->\n        <!-- <div class=\"entry\">\n          <h2>OBJECTIVE</h2>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim viverra nibh sed varius. Proin bibendum nunc in sem ultrices posuere. Aliquam ut aliquam lacus.</p>\n        </div> -->\n        <!-- End 1st Row -->\n        <!-- Begin 2nd Row -->\n        <!-- <div class=\"entry\">\n          <h2>EDUCATION</h2>\n          <div class=\"content\">\n            <h3>Sep 2005 - Feb 2007</h3>\n            <p>Academy of Art University, London <br />\n              <em>Master in Communication Design</em></p>\n          </div>\n          <div class=\"content\">\n            <h3>Sep 2001 - Jun 2005</h3>\n            <p>University of Art &amp; Design, New York <br />\n              <em>Bachelor of Science in Graphic Design</em></p>\n          </div>\n        </div> -->\n        <!-- End 2nd Row -->\n        <!-- Begin 3rd Row -->\n        <!-- <div class=\"entry\">\n          <h2>EXPERIENCE</h2>\n          <div class=\"content\">\n            <h3>May 2009 - Feb 2010</h3>\n            <p>Agency Creative, London <br />\n              <em>Senior Web Designer</em></p>\n            <ul class=\"info\">\n              <li>Vestibulum eu ante massa, sed rhoncus velit.</li>\n              <li>Pellentesque at lectus in <a href=\"#\">libero dapibus</a> cursus. Sed arcu ipsum, varius at ultricies acuro, tincidunt iaculis diam.</li>\n            </ul>\n          </div>\n          <div class=\"content\">\n            <h3>Jun 2007 - May 2009</h3>\n            <p>Junior Web Designer <br />\n              <em>Bachelor of Science in Graphic Design</em></p>\n            <ul class=\"info\">\n              <li>Sed fermentum sollicitudin interdum. Etiam imperdiet sapien in dolor rhoncus a semper tortor posuere. </li>\n              <li>Pellentesque at lectus in libero dapibus cursus. Sed arcu ipsum, varius at ultricies acuro, tincidunt iaculis diam.</li>\n            </ul>\n          </div>\n        </div> -->\n        <!-- End 3rd Row -->\n        <!-- Begin 4th Row -->\n        <!-- <div class=\"entry\">\n          <h2>SKILLS</h2>\n          <div class=\"content\">\n            <h3>Software Knowledge</h3>\n            <ul class=\"skills\">\n              <li>Photoshop</li>\n              <li>Illustrator</li>\n              <li>InDesign</li>\n              <li>Flash</li>\n              <li>Fireworks</li>\n              <li>Dreamweaver</li>\n              <li>After Effects</li>\n              <li>Cinema 4D</li>\n              <li>Maya</li>\n            </ul>\n          </div>\n          <div class=\"content\">\n            <h3>Languages</h3>\n            <ul class=\"skills\">\n              <li>CSS/XHTML</li>\n              <li>PHP</li>\n              <li>JavaScript</li>\n              <li>Ruby on Rails</li>\n              <li>ActionScript</li>\n              <li>C++</li>\n            </ul>\n          </div>\n        </div> -->\n        <!-- End 4th Row -->\n         <!-- Begin 5th Row -->\n        <!-- <div class=\"entry\">\n        <h2>WORKS</h2>\n        \t<ul class=\"works\">\n        \t\t<li><a href=\"./assets/images/1.jpg\" rel=\"gallery\" title=\"Lorem ipsum dolor sit amet.\"><img src=\"./assets/images/image.jpg\" alt=\"\" /></a></li>\n        \t\t<li><a href=\"./assets/images/2.jpg\" rel=\"gallery\" title=\"Lorem ipsum dolor sit amet.\"><img src=\"./assets/images/image.jpg\" alt=\"\" /></a></li>\n        \t\t<li><a href=\"./assets/images/3.jpg\" rel=\"gallery\" title=\"Lorem ipsum dolor sit amet.\"><img src=\"./assets/images/image.jpg\" alt=\"\" /></a></li>\n        \t\t<li><a href=\"./assets/images/1.jpg\" rel=\"gallery\" title=\"Lorem ipsum dolor sit amet.\"><img src=\"./assets/images/image.jpg\" alt=\"\" /></a></li>\n        \t\t<li><a href=\"./assets/images/2.jpg\" rel=\"gallery\" title=\"Lorem ipsum dolor sit amet.\"><img src=\"./assets/images/image.jpg\" alt=\"\" /></a></li>\n        \t\t<li><a href=\"./assets/images/3.jpg\" rel=\"gallery\" title=\"Lorem ipsum dolor sit amet.\"><img src=\"./assets/images/image.jpg\" alt=\"\" /></a></li>\n        \t\t<li><a href=\"./assets/images/1.jpg\" rel=\"gallery\" title=\"Lorem ipsum dolor sit amet.\"><img src=\"./assets/images/image.jpg\" alt=\"\" /></a></li>\n        \t\t<li><a href=\"./assets/images/1.jpg\" rel=\"gallery\" title=\"Lorem ipsum dolor sit amet.\"><img src=\"./assets/images/image.jpg\" alt=\"\" /></a></li>\n        \t</ul>\n        </div> -->\n        <!-- Begin 5th Row -->\n      <!-- </div>\n      <div class=\"clear\"></div>\n      <div class=\"paper-bottom\"></div>\n    </div> -->\n    <!-- End Paper -->\n  <!-- </div>\n  <div class=\"wrapper-bottom\"></div>\n</div> -->\n<!-- <div id=\"message\"><a href=\"#top\" id=\"top-link\">Go to Top</a></div> -->\n<!-- End Wrapper -->\n<!-- </body> -->\n\n\n"

/***/ }),

/***/ "./src/app/candidate/view-cv/view-cv.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/candidate/view-cv/view-cv.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS92aWV3LWN2L3ZpZXctY3YuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/candidate/view-cv/view-cv.component.ts":
/*!********************************************************!*\
  !*** ./src/app/candidate/view-cv/view-cv.component.ts ***!
  \********************************************************/
/*! exports provided: ViewCVComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCVComponent", function() { return ViewCVComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/candidate.service */ "./src/app/service/candidate.service.ts");
/* harmony import */ var src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/job.service */ "./src/app/service/job.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_service_socket_io_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/socket-io.service */ "./src/app/service/socket-io.service.ts");






var ViewCVComponent = /** @class */ (function () {
    function ViewCVComponent(soketIo, _sanitizer, candidateService, jobService) {
        var _this = this;
        this.soketIo = soketIo;
        this._sanitizer = _sanitizer;
        this.candidateService = candidateService;
        this.jobService = jobService;
        this.check = true;
        this.danhGia = "";
        this.nhanXet = "";
        this.jobService.getInfoCandidate(this.candidateService.getId())
            .subscribe(function (res) {
            console.log(res[0].xacNhan);
            _this.check = res[0].xacNhan;
            _this.danhGia = res[0].danhGia;
            _this.nhanXet = res[0].nhanXet;
            console.log(res);
        });
        this.jobService.getCV(this.candidateService.getId())
            .subscribe(function (res) {
            _this.img = res;
            //  alert(res);
            //     this.img = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
            //           + res);
            // alert(this.img);
        });
    }
    ViewCVComponent.prototype.ngOnInit = function () {
    };
    ViewCVComponent.prototype.Request = function () {
        this.jobService.getRequest(this.candidateService.getId())
            .subscribe(function (res) {
            alert('Yêu cầu xác nhận CV thành công!');
        });
        this.soketIo.emit("Request", "1");
    };
    ViewCVComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-cv',
            template: __webpack_require__(/*! ./view-cv.component.html */ "./src/app/candidate/view-cv/view-cv.component.html"),
            styles: [__webpack_require__(/*! ./view-cv.component.scss */ "./src/app/candidate/view-cv/view-cv.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_socket_io_service__WEBPACK_IMPORTED_MODULE_5__["SocketIoService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_2__["CandidateService"], src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"]])
    ], ViewCVComponent);
    return ViewCVComponent;
}());



/***/ }),

/***/ "./src/app/models/candidate_language.ts":
/*!**********************************************!*\
  !*** ./src/app/models/candidate_language.ts ***!
  \**********************************************/
/*! exports provided: Candidate_Language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Candidate_Language", function() { return Candidate_Language; });
var Candidate_Language = /** @class */ (function () {
    function Candidate_Language() {
    }
    return Candidate_Language;
}());



/***/ }),

/***/ "./src/app/models/createNotify.ts":
/*!****************************************!*\
  !*** ./src/app/models/createNotify.ts ***!
  \****************************************/
/*! exports provided: CreateNotify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNotify", function() { return CreateNotify; });
var CreateNotify = /** @class */ (function () {
    function CreateNotify() {
    }
    return CreateNotify;
}());



/***/ }),

/***/ "./src/app/models/saveWork.ts":
/*!************************************!*\
  !*** ./src/app/models/saveWork.ts ***!
  \************************************/
/*! exports provided: SaveWork */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveWork", function() { return SaveWork; });
var SaveWork = /** @class */ (function () {
    function SaveWork() {
    }
    return SaveWork;
}());



/***/ })

}]);
//# sourceMappingURL=candidate-candidate-module.js.map