(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"default~admin-admin-module~candidate-candidate-module~home-home-module~login-login-module~teacher-te~5e32cf19",
		"default~admin-admin-module~candidate-candidate-module~detail-job-detail-job-module~home-home-module~~064b63ee",
		"default~admin-admin-module~candidate-candidate-module~home-home-module~teacher-teacher-module",
		"default~admin-admin-module~candidate-candidate-module~home-home-module~test-test-module",
		"default~admin-admin-module~candidate-candidate-module~detail-job-detail-job-module~test-test-module",
		"default~admin-admin-module~candidate-candidate-module~detail-job-detail-job-module~teacher-teacher-m~fadb9215",
		"default~admin-admin-module~candidate-candidate-module~detail-job-detail-job-module",
		"default~admin-admin-module~candidate-candidate-module~teacher-teacher-module",
		"default~admin-admin-module~candidate-candidate-module~home-home-module",
		"default~admin-admin-module~teacher-teacher-module",
		"default~admin-admin-module~candidate-candidate-module",
		"common",
		"admin-admin-module"
	],
	"./candidate/candidate.module": [
		"./src/app/candidate/candidate.module.ts",
		"default~admin-admin-module~candidate-candidate-module~home-home-module~login-login-module~teacher-te~5e32cf19",
		"default~admin-admin-module~candidate-candidate-module~detail-job-detail-job-module~home-home-module~~064b63ee",
		"default~admin-admin-module~candidate-candidate-module~home-home-module~teacher-teacher-module",
		"default~admin-admin-module~candidate-candidate-module~home-home-module~test-test-module",
		"default~admin-admin-module~candidate-candidate-module~detail-job-detail-job-module~test-test-module",
		"default~admin-admin-module~candidate-candidate-module~detail-job-detail-job-module~teacher-teacher-m~fadb9215",
		"default~admin-admin-module~candidate-candidate-module~detail-job-detail-job-module",
		"default~admin-admin-module~candidate-candidate-module~teacher-teacher-module",
		"default~admin-admin-module~candidate-candidate-module~home-home-module",
		"default~candidate-candidate-module~teacher-teacher-module~test-test-module",
		"default~admin-admin-module~candidate-candidate-module",
		"default~candidate-candidate-module~test-test-module",
		"common",
		"candidate-candidate-module"
	],
	"./detail-job/detail-job.module": [
		"./src/app/detail-job/detail-job.module.ts",
		"default~admin-admin-module~candidate-candidate-module~detail-job-detail-job-module~home-home-module~~064b63ee",
		"default~admin-admin-module~candidate-candidate-module~detail-job-detail-job-module~test-test-module",
		"default~admin-admin-module~candidate-candidate-module~detail-job-detail-job-module~teacher-teacher-m~fadb9215",
		"default~admin-admin-module~candidate-candidate-module~detail-job-detail-job-module",
		"common",
		"detail-job-detail-job-module"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"default~admin-admin-module~candidate-candidate-module~home-home-module~login-login-module~teacher-te~5e32cf19",
		"default~admin-admin-module~candidate-candidate-module~detail-job-detail-job-module~home-home-module~~064b63ee",
		"default~admin-admin-module~candidate-candidate-module~home-home-module~teacher-teacher-module",
		"default~admin-admin-module~candidate-candidate-module~home-home-module~test-test-module",
		"default~admin-admin-module~candidate-candidate-module~home-home-module",
		"common",
		"home-home-module"
	],
	"./job-level/job-level.module": [
		"./src/app/job-level/job-level.module.ts",
		"job-level-job-level-module"
	],
	"./list-job/list-job.module": [
		"./src/app/list-job/list-job.module.ts",
		"common",
		"list-job-list-job-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"default~admin-admin-module~candidate-candidate-module~home-home-module~login-login-module~teacher-te~5e32cf19",
		"common",
		"login-login-module"
	],
	"./teacher/teacher.module": [
		"./src/app/teacher/teacher.module.ts",
		"default~admin-admin-module~candidate-candidate-module~home-home-module~login-login-module~teacher-te~5e32cf19",
		"default~admin-admin-module~candidate-candidate-module~detail-job-detail-job-module~home-home-module~~064b63ee",
		"default~admin-admin-module~candidate-candidate-module~home-home-module~teacher-teacher-module",
		"default~admin-admin-module~candidate-candidate-module~detail-job-detail-job-module~teacher-teacher-m~fadb9215",
		"default~admin-admin-module~candidate-candidate-module~teacher-teacher-module",
		"default~candidate-candidate-module~teacher-teacher-module~test-test-module",
		"default~admin-admin-module~teacher-teacher-module",
		"common",
		"teacher-teacher-module"
	],
	"./test/test.module": [
		"./src/app/test/test.module.ts",
		"default~admin-admin-module~candidate-candidate-module~home-home-module~login-login-module~teacher-te~5e32cf19",
		"default~admin-admin-module~candidate-candidate-module~detail-job-detail-job-module~home-home-module~~064b63ee",
		"default~admin-admin-module~candidate-candidate-module~home-home-module~test-test-module",
		"default~admin-admin-module~candidate-candidate-module~detail-job-detail-job-module~test-test-module",
		"default~candidate-candidate-module~teacher-teacher-module~test-test-module",
		"default~candidate-candidate-module~test-test-module",
		"common",
		"test-test-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guard_check_admin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/check_admin.guard */ "./src/app/guard/check_admin.guard.ts");
/* harmony import */ var _guard_check_candidate_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guard/check_candidate.guard */ "./src/app/guard/check_candidate.guard.ts");





var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
    },
    {
        path: 'detailjob/:id',
        loadChildren: './detail-job/detail-job.module#DetailJobModule'
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [_guard_check_admin_guard__WEBPACK_IMPORTED_MODULE_3__["CheckAdminGuard"]]
    },
    {
        path: 'candidate',
        loadChildren: './candidate/candidate.module#CandidateModule',
        canActivate: [_guard_check_candidate_guard__WEBPACK_IMPORTED_MODULE_4__["CheckCandidateGuard"]]
    },
    {
        path: 'listjob/:id/:id1/:id2',
        loadChildren: './list-job/list-job.module#ListJobModule',
    },
    {
        path: 'teacher',
        loadChildren: './teacher/teacher.module#TeacherModule',
    },
    {
        path: 'test',
        loadChildren: './test/test.module#TestModule',
    },
    {
        path: 'taoCV',
        loadChildren: './test/test.module#TestModule',
    },
    {
        path: 'jobLevel/:id',
        loadChildren: './job-level/job-level.module#JobLevelModule',
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-header></app-header>\r\n\r\n<!-- <a routerLink=\"/login\">LogIn</a>\r\n\r\n<a routerLink=\"/admin\">Admin</a>\r\n<a routerLink=\"/teacher\">Teacher</a>\r\n<a routerLink=\"/candidate\">Candidate</a> -->\r\n<div style=\"height: 100%;float:left;width: 100%;\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<!-- <button (click)=\"Add()\">Click Vao</button>\r\n\r\n\r\n<button (click)=\"SendEmail()\">\r\n    \r\n    Send Email\r\n</button> -->\r\n\r\n<!-- <button (click)=\"Export()\">\r\n\r\n</button> -->\r\n<app-footer></app-footer> \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_socket_io_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/socket-io.service */ "./src/app/service/socket-io.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_job_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/job.service */ "./src/app/service/job.service.ts");






var AppComponent = /** @class */ (function () {
    //ham tinh tong
    function AppComponent(soketIo, injector, jobService) {
        this.soketIo = soketIo;
        this.jobService = jobService;
        this.today = new Date();
        this.jstoday = '';
        this.date2 = new Date();
        this.title = 'Website tìm kiếm việc làm cho sinh viên';
        this.soketIo.listen("Client-to-serve").subscribe(function (data) {
            //console.log(data);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        ////20-5-12h30:
        this.date2.setFullYear(2019, 4, 19);
        this.jstoday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
        if (this.today.getTime() > this.date2.getTime()) {
            console.log('today is greater than date2');
        }
        else {
            console.log('date2 is greater than date1'); //se la bai tin nay cu hon luc nay se thong bao la bai dang nay het han
        }
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
        console.log(message);
    };
    AppComponent.prototype.Add = function () {
        this.soketIo.emit("Client-to-serve", "1");
    };
    AppComponent.prototype.SendEmail = function () {
        this.a = "";
        // let headers = new HttpHeaders();
        // headers = headers.set('Accept', 'application/json');
        // if (this.a) {
        //   headers = headers.set('Content-Type', 'application/json');
        // }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        headers = headers.set('Accept', 'application/json');
        this.jobService.sendEmail(1)
            .subscribe(function (res) {
            alert('Gửi thành công');
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_socket_io_service__WEBPACK_IMPORTED_MODULE_2__["SocketIoService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _service_job_service__WEBPACK_IMPORTED_MODULE_5__["JobService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/menubar */ "./node_modules/primeng/menubar.js");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_menubar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/login.service */ "./src/app/service/login.service.ts");
/* harmony import */ var _guard_check_login_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guard/check_login.guard */ "./src/app/guard/check_login.guard.ts");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _guard_check_admin_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guard/check_admin.guard */ "./src/app/guard/check_admin.guard.ts");
/* harmony import */ var _service_candidate_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/candidate.service */ "./src/app/service/candidate.service.ts");
/* harmony import */ var _guard_check_candidate_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guard/check_candidate.guard */ "./src/app/guard/check_candidate.guard.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");



















var config = { url: 'http://localhost:3000', options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                primeng_menubar__WEBPACK_IMPORTED_MODULE_4__["MenubarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_17__["ButtonModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__["SocketIoModule"].forRoot(config)
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"], _service_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"], _guard_check_login_guard__WEBPACK_IMPORTED_MODULE_11__["CheckLoginGuard"], _service_admin_service__WEBPACK_IMPORTED_MODULE_12__["AdminService"], _guard_check_admin_guard__WEBPACK_IMPORTED_MODULE_13__["CheckAdminGuard"], _service_candidate_service__WEBPACK_IMPORTED_MODULE_14__["CandidateService"], _guard_check_candidate_guard__WEBPACK_IMPORTED_MODULE_15__["CheckCandidateGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guard/check_admin.guard.ts":
/*!********************************************!*\
  !*** ./src/app/guard/check_admin.guard.ts ***!
  \********************************************/
/*! exports provided: CheckAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckAdminGuard", function() { return CheckAdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/admin.service */ "./src/app/service/admin.service.ts");




var CheckAdminGuard = /** @class */ (function () {
    function CheckAdminGuard(adminSerive, router) {
        this.adminSerive = adminSerive;
        this.router = router;
    }
    CheckAdminGuard.prototype.canActivate = function (route, state) {
        if (this.adminSerive.IsLogged() == true) {
            alert('Ban co quyen');
            return true;
        }
        alert('Ban ko co quyen');
        this.adminSerive.redirectUrl = state.url;
        this.router.navigate(['/']);
        return false;
        // let status=this.adminSerive.IsLogged();
        // if(status==false)
        // {
        //     alert('you dont have permission');
        // }
        // if(status==true)
        // {
        //     alert('ccc');
        // }
        // return this.adminSerive.IsLogged();
    };
    CheckAdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CheckAdminGuard);
    return CheckAdminGuard;
}());

//b1:dang nhap vao trong he thong
//b2:


/***/ }),

/***/ "./src/app/guard/check_candidate.guard.ts":
/*!************************************************!*\
  !*** ./src/app/guard/check_candidate.guard.ts ***!
  \************************************************/
/*! exports provided: CheckCandidateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckCandidateGuard", function() { return CheckCandidateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/candidate.service */ "./src/app/service/candidate.service.ts");




var CheckCandidateGuard = /** @class */ (function () {
    function CheckCandidateGuard(candidateService, router) {
        this.candidateService = candidateService;
        this.router = router;
    }
    CheckCandidateGuard.prototype.canActivate = function (next, state) {
        if (this.candidateService.IsLogged() == true) {
            alert('Ban co quyen');
            return true;
        }
        alert('Ban ko co quyen');
        this.candidateService.redirectUrl = state.url;
        this.router.navigate(['/']);
        return false;
        // let url: string = state.url;
        // if(this.checkLogin(url))
        // {
        //   alert("true")
        // }
        // else
        // {
        //   alert(this.candidateService.getName());
        // }
        // return this.checkLogin(url);
    };
    CheckCandidateGuard.prototype.checkLogin = function (url) {
        if (this.candidateService.isLoggedIn) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.candidateService.redirectUrl = url;
        // Navigate to the login page with extras
        //this.router.navigate(['/']);
        return false;
    };
    CheckCandidateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_candidate_service__WEBPACK_IMPORTED_MODULE_3__["CandidateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CheckCandidateGuard);
    return CheckCandidateGuard;
}());



/***/ }),

/***/ "./src/app/guard/check_login.guard.ts":
/*!********************************************!*\
  !*** ./src/app/guard/check_login.guard.ts ***!
  \********************************************/
/*! exports provided: CheckLoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckLoginGuard", function() { return CheckLoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/login.service */ "./src/app/service/login.service.ts");



var CheckLoginGuard = /** @class */ (function () {
    function CheckLoginGuard(loginservice) {
        this.loginservice = loginservice;
    }
    CheckLoginGuard.prototype.canActivate = function () {
        var status = this.loginservice.IsLogged();
        if (status == false) {
            alert('you dont have permission');
        }
        if (status == true) {
            alert('ccc');
        }
        return this.loginservice.IsLogged();
    };
    CheckLoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], CheckLoginGuard);
    return CheckLoginGuard;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"ui-g footer\">  \n    <!-- <div class=\"ui-g-12\">\n        <div class=\"ui-g\">\n            <div class=\"ui-g-1\">\n                \n            </div>\n            <div class=\"ui-g-10\">\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-3\">\n                        <div class=\"ui-g\">\n                            <div class=\"ui-g-6\">\n                                Về Fpt\n                            </div>\n                        </div>\n                        <div class=\"ui-g\">\n                                <div class=\"ui-g-6\">\n                                    Liên hệ\n                                </div>\n                        </div>\n                        <div class=\"ui-g\">\n                                <div class=\"ui-g-6\">\n                                    Góc báo chí\n                                </div>\n                        </div>\n                        <div class=\"ui-g\">\n                                <div class=\"ui-g-6\">\n                                    Hỏi đáp\n                                </div>\n                        </div>\n                        <div class=\"ui-g\">\n                                <div class=\"ui-g-6\">\n                                    Thỏa thuận sử dụng\n                                </div>\n                        </div>\n                        <div class=\"ui-g\">\n                                <div class=\"ui-g-6\">\n                                    Quy định bảo mật\n                                </div>\n                        </div>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <div class=\"ui-g\">\n                            <div class=\"ui-g-6\">\n                                <span>Tài khoản của tôi</span>\n                            </div>\n                        </div>\n                        <div class=\"ui-g\">\n                                <div class=\"ui-g-6\">\n                                    <span>Hồ sơ của tôi</span>\n                                </div>\n                        </div>\n                        <div class=\"ui-g\">\n                                <div class=\"ui-g-6\">\n                                    <span>Việc làm của tôi</span>\n                                </div>\n                        </div>\n                        <div class=\"ui-g\">\n                                <div class=\"ui-g-6\">\n                                    <span>Thông báo việc làm</span>\n                                </div>\n                        </div>\n                        <div class=\"ui-g\">\n                                <div class=\"ui-g-6\">\n                                    <span>Phản hồi</span>\n                                </div>\n                        </div>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <div class=\"ui-g\">\n                           \n                        </div>\n                        <div class=\"ui-g\">\n                             <div class=\"ui-g-9\">\n                                    <h5>Kết Nối Với VietnamWorks</h5>\n                                   <img src=\"https://www.facebook.com/images/fb_icon_325x325.png\">\n                                   <img src=\"https://pbs.twimg.com/profile_images/875135141135302656/eiM2Wz66_400x400.jpg\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"ui-g-1\">\n                \n            </div>\n        </div>\n    </div> -->\n   \n</div> \n\n<div class=\"vnw-footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4 hidden-sm hidden-xs\">\n                <h5>About VietnamWorks</h5>\n                <ul class=\"list-unstyled text-capitalize\">\n                    <li>\n                        <a href=\"https://www.vietnamworks.com/company/vietnamworks?lang=en\" title=\"About VietnamWorks\">About Us</a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.vietnamworks.com/contact-us\" title=\"Contact Us\">Contact Us</a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.vietnamworks.com/press-corner\" title=\"Press Corner\">Press Corner</a>\n                    </li>\n                    <li>\n                        <a href=\"http://faq.vietnamworks.com/en/\" title=\"Frequently Asked\">FAQ</a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.vietnamworks.com/terms-of-use\" title=\"Terms of Use\">Terms of Use</a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.vietnamworks.com/privacy-policy\" title=\"Privacy Statement\">Privacy\n                            Statement</a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.vietnamworks.com/operation-ecommerce\" title=\"Operation Regulation of VietnamWorks E-commerce Trading Floor\">\n                            Operation Regulation of VietnamWorks E-commerce Trading Floor\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.vietnamworks.com/mobile\" target=\"_blank\">Mobile Apps</a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"col-md-4 hidden-sm hidden-xs\">\n                <h5>Tools</h5>\n                <ul class=\"list-unstyled text-capitalize\">\n                    <li>\n                        <a href=\"https://www.vietnamworks.com/my-career-center/my-account\">My Account</a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.vietnamworks.com/my-career-center/my-resume\">My Resumes</a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.vietnamworks.com/my-career-center/my-jobs\">My Jobs</a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.vietnamworks.com/my-career-center/my-job-alert\">My Job Alerts</a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.vietnamworks.com/my-career-center/employer-message\">Employers'\n                            Messages</a>\n                    </li>\n                    <li>\n                        <a href=\"http://hrinsider.vietnamworks.com/\" target=\"_blank\">Career Advice</a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"col-md-12 col-sm-8 col-xs-12\">\n                    <div class=\"row\">\n                    <div class=\"col-sm-6 col-md-12 footer__app-badges m-t-md\">\n                        <a class=\"app-store-badge\" href=\"https://itunes.apple.com/app/apple-store/id1180866051?pt=1608090&amp;ct=mobile_landingpage&amp;mt=8\" target=\"_blank\">\n                            <img src=\"./FPT/app-store-badge.png\" alt=\"Download on the App Store\">\n                        </a> <a class=\"google-play-badge\" href=\"https://play.google.com/store/apps/details?id=com.vietnamworks.vietnamworks&amp;referrer=utm_source%3Dvietnamworks_footer\" target=\"_blank\">\n                            <img class=\"android-coming-soon-badge\" src=\"./FPT/google-play-badge.png\" alt=\"Download on the Google Play\">\n                        </a>\n                    </div>\n                    <div class=\"col-sm-6 col-md-12 col-xs-12\">\n                        <div class=\"home-social\">\n                            <h5>Subscribe to Us</h5>\n\n                            <a href=\"http://blogs.vietnamworks.com/\" class=\"blog\" target=\"_blank\" title=\"VietnamWorks Blog\"></a>\n                            <a href=\"http://www.linkedin.com/company/vietnamworks\" class=\"linkedin\" target=\"_blank\" title=\"LinkedIn\"></a>\n                            <a href=\"https://www.facebook.com/VietnamWorksFanpage\" class=\"facebook\" target=\"_blank\" title=\"Facebook\"></a>\n                        </div>\n                    </div>\n                    </div>\n                </div>\n                <div cilass=\"col-md-12 col-sm-4 hidden-xs\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <h5>Verified By</h5>\n                            <a href=\"http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=17746\" target=\"_blank\">\n                                <img alt=\"\" title=\"\" src=\"./FPT/dadangky.jpgx\" width=\"124\">\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\">\n        <hr class=\"hidden-sm hidden-xs\">\n        <div class=\"copyright\">\n            <p class=\"text-muted text-center\">Copyright © Navigos Group Vietnam Joint Stock Company <br> Floor 20, \n            E.Town Central, 11 Doan Van Bo Street, Ward 12 District 4, Ho Chi Minh City, Vietnam </p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  border-top: 1px solid #d5d5d5;\n  background: #726b6b;\n  padding: 0 0 30px 0;\n  width: 100%;\n  margin-top: 50px; }\n\n.footer img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%; }\n\n.footer {\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9FOlxcV2ViTVZDXFxGcm9udGVuZFVJSFxcRnJvbnRlbmRVSUgvc3JjXFxhcHBcXGxheW91dFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw2QkFBNkI7RUFDN0IsbUJBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBRUksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlclxyXG57XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q1ZDVkNTtcclxuICAgIGJhY2tncm91bmQ6IzcyNmI2YjtcclxuICAgIHBhZGRpbmc6IDAgMCAzMHB4IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLmZvb3RlciBpbWdcclxue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/login.service */ "./src/app/service/login.service.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(loginService) {
        this.loginService = loginService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.name = this.loginService.getName();
        console.log("cc" + this.name);
    };
    FooterComponent.prototype.ngOnChanges = function () {
        this.name = this.loginService.getName();
        console.log("cc" + this.name);
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\" integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\">\n\n<div id=\"menu-main\">\n    <div id=\"left-menu\">\n        <a href=\"#\"><img src=\"./assets/images/1.jpg\" alt=\"logo\" id=\"logo\" style=\"width: 300px;margin-left: 3px;\"/></a>\n    </div>\n    <div id=\"mid-menu\">\n        <div id=\"menu\">\n            <ul>\n              <li><a [routerLink]=\"['home']\" style=\"margin-left:-309px; width: 120px;\">TRANG CHỦ</a></li>\n              <li><a [routerLink]=\"['taoCV']\" style=\"margin-left: -180px; width: 107px;\">TẠO CV</a></li>\n              <!-- <li><a >GIỚI THIỆU</a></li> -->\n              <li><a href=\"#\" style=\"margin-left: -514px;width: 150px;\">TẤT CẢ VIỆC LÀM</a></li>\n              <!-- <li><a>LIÊN HỆ</a></li>\n              <li><a>VỊ TRÍ</a></li>\n              <li><a>SỰ KIỆN</a></li> -->\n            </ul>\n          </div>\n    </div>\n    <div id=\"right-menu\">\n            \n        <div id=\"annouce\" class=\"xt-ct-menu\"  *ngIf=\"candidateService.IsLogged()==true\">\n            <li class=\"dropdown\" >\n                    <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fas fa-bell\" id=\"toggle-btn\"></i></a>      \n                    <ul class=\"dropdown-menu\">\n                            <li><a href=\"#\">Quản lý hồ sơ</a></li>\n                            <li><a href=\"#\">Việc làm của tôi</a></li>\n                            <li><i class=\"fas fa-key\"><a href=\"#\" style=\"margin-left:10px;\">Đăng xuất</a></i></li>\n                            <li><a href=\"#\">Việc làm của tôi</a></li>\n                            <li><a href=\"#\">Đăng xuất</a></li>\n                          </ul>\n            </li>\n        </div>\n\n        <div id=\"us\"  *ngIf=\"candidateService.IsLogged()==true\">\n            <!-- <i class=\"fas fa-user\"> </i> -->\n            <li class=\"dropdown\" >\n                <!-- <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fas fa-user\" id=\"toggle-btn\"></i></a>    \n                <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Thông tin tài khoản</a></li>\n                        <li><a href=\"#\">Danh sách việc làm</a></li>\n                        <li><a href=\"#\">Danh sách việc làm</a></li>\n                        <li><a href=\"#\">Đăng xuất</a></li>\n                </ul> -->\n               \n                <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fas fa-user\" id=\"toggle-btn\"></i></a> \n                    <ul class=\"dropdown-menu\">\n                        <li><a [routerLink]=\"['/candidate/thongTinCaNhan']\">Quản lý hồ sơ</a></li>\n                        <li><a [routerLink]=\"['/candidate/saveWork']\">Việc làm của tôi</a></li>\n                        <li><a [routerLink]=\"['/candidate/viewCV']\">Xem CV</a></li>\n                        <li><a (click)=\"DangXuat()\">Đăng xuất</a></li>\n                    </ul>\n            </li>\n        </div>\n\n        \n        <div id=\"dang-nhap\" *ngIf=\"candidateService.IsLogged()==false\">\n            <button class=\"btn btn-success\" (click)=\"DangNhap()\">Đăng nhập</button>\n        </div>\n        \n    </div>\n    <!-- <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"teacher.getName()\">\n        <li class=\"dropdown\">\n\n         <a href=\"\"  class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span (click)=\"getRequestCV()\" class=\"glyphicon glyphicon-bell\">\n            <span *ngIf=\"tongRequestCv!=0\">\n                {{tongRequestCv}}\n            </span>\n         </span> </a>\n                   <ul  class=\"dropdown-menu cadi-custom\" >\n                     <ul>\n                        <ul *ngFor=\"let item of listRequetCV\">\n                            <li><a [routerLink]=\"['/teacher/ketqua',item.idUser]\">Một CV tên yêu cầu được đánh giá</a></li>\n                        </ul>\n                     </ul>\n                  </ul>\n         </li> \n\n      <li class=\"dropdown\" >\n           <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Xin chào:Việt <span class=\"caret\"></span></a>\n           <ul class=\"dropdown-menu\">\n             <li><a href=\"#\">Danh sách sinh viên đi làm</a></li>\n             <li><a href=\"#\">Danh sách sinh viên chuyên ngành</a></li>\n             <li><a href=\"#\">Đăng xuất</a></li>\n           </ul>\n      </li>\n     </ul> -->\n\n     <!-- <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"adminService.getName()\">\n        <li class=\"dropdown\">\n         <a href=\"\"  class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span (click)=\"acceptCV()\" class=\"glyphicon glyphicon-bell\"></span> </a>\n                   <ul  class=\"dropdown-menu cadi-custom\" *ngFor=\"let item of listCVAccept\"  >\n                    <li><a [routerLink]=\"['admin/detail',item.idUser,item.idJob]\">Một CV nộp tuyển cho công việc {{item.title}} được xác nhận</a></li>\n                   <li><a href=\"#\">Danh sách CV được xác nhận</a></li>\n                 </ul>\n         </li> \n\n         <li class=\"dropdown\">\n             <a href=\"\"  class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span (click)=\"viewListCV()\" class=\"glyphicon glyphicon-bell\">{{tongCVnop}}</span> </a>\n                     <ul class=\"dropdown-menu cadi-custom\" *ngFor=\"let item of listCV\"  >\n                        <li><a [routerLink]=\"['/admin/danhsach',item.idJob]\">Một CV moi duoc nop tuyen</a></li>\n                       <li><a href=\"#\">Danh sách CV được xác nhận</a></li>\n                     </ul>\n                     </li> \n                \n     \n          <li class=\"dropdown\" >\n           <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Xin chào:Tuấn <span class=\"caret\"></span></a>\n           <ul class=\"dropdown-menu\">\n             <li><a href=\"#\">Thông tin tài khoản</a></li>\n             <li><a href=\"#\">Danh sách việc làm</a></li>\n             <li><a href=\"#\">Đăng xuất</a></li>\n           </ul>\n         </li>\n     </ul>  -->\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n#menu-main {\n  width: 100%;\n  background: #1F568B;\n  height: 100px;\n  float: left; }\n#left-menu {\n  width: 30%;\n  height: 100%;\n  float: left; }\n#mid-menu {\n  width: 50%;\n  height: 100%;\n  float: left; }\n#right-menu {\n  width: 20%;\n  height: 100%;\n  float: left;\n  background: #00b9f2; }\n#right-menu i {\n  color: #fff; }\n#menu {\n  width: 100%;\n  height: 100%;\n  float: left; }\n/*==Reset CSS==*/\n* {\n  margin: 0;\n  padding: 0; }\n/*==Style cơ bản cho website==*/\nbody {\n  font-family: sans-serif;\n  color: #333; }\n/*==Style cho menu===*/\n#menu ul {\n  background: #1F568B;\n  list-style-type: none;\n  text-align: center; }\n#menu li {\n  color: #f1f1f1;\n  display: inline-block;\n  width: 170px;\n  margin-left: 0px;\n  cursor: pointer;\n  height: 100px;\n  line-height: 100px; }\n#menu a {\n  font-weight: bold;\n  text-decoration: none;\n  color: #fff;\n  display: block; }\n#menu a:hover {\n  background: #F1F1F1;\n  color: #333;\n  border-bottom: 6px solid #00b9f2;\n  transition: .5s; }\n/*==Dropdown Menu==*/\n.sub-menu {\n  display: none;\n  position: absolute; }\n#menu li {\n  position: relative; }\n#menu li:hover .sub-menu {\n  display: block; }\n.sub-menu li {\n  margin-left: 0 !important; }\n/*==Menu cấp 3==*/\n.sub-menu > ul {\n  display: none important; }\n#dang-nhap.btn-success {\n  width: 100px;\n  height: 40px;\n  float: left;\n  margin-top: 30%; }\n#annouce {\n  width: 35%;\n  height: 100%;\n  float: left; }\n#us {\n  width: 35%;\n  height: 100%;\n  float: left; }\n#dang-nhap {\n  width: 100%;\n  height: 100%;\n  float: left; }\n#dang-nhap .btn-success {\n  width: 100%;\n  height: 100%;\n  float: left; }\n.fa-bell, .fa-user {\n  font-size: 20px;\n  float: left;\n  margin-left: 45%;\n  margin-top: 32%; }\n#logo {\n  width: 150px;\n  height: 92%;\n  float: left;\n  margin: 5px 0 0 50px; }\n.dropdown {\n  list-style-type: none; }\n#annouce .dropdown-menu {\n  height: 150px;\n  overflow-y: scroll; }\n.dropdown-menu {\n  margin-top: 50%; }\n.dropdown-menu li {\n  overflow-y: visible; }\n.dropdown-menu li a {\n  width: 300px;\n  height: 50px;\n  line-height: 50px;\n  background-color: smoke; }\n.dropdown-menu li a:hover {\n  color: #00b9f2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9oZWFkZXIvRTpcXFdlYk1WQ1xcRnJvbnRlbmRVSUhcXEZyb250ZW5kVUlIL3NyY1xcYXBwXFxsYXlvdXRcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ21DaEI7RUFDSSxXQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGFBQVk7RUFDWixXQUFXLEVBQUE7QUFHZjtFQUNJLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVyxFQUFBO0FBSWY7RUFDSSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVcsRUFBQTtBQUdmO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7QUFHdkI7RUFDRSxXQUFXLEVBQUE7QUFJYjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVyxFQUFBO0FBRWYsZ0JBQUE7QUFDQTtFQUNJLFNBQVM7RUFDVCxVQUFVLEVBQUE7QUFHWiwrQkFBQTtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVcsRUFBQTtBQUdiLHNCQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7QUFFcEI7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxjQUFjLEVBQUE7QUFFaEI7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUVYLGdDQUFnQztFQUNoQyxlQUFlLEVBQUE7QUFHakIsb0JBQUE7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0IsRUFBQTtBQUVwQjtFQUNFLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCO0VBQ0UseUJBQXlCLEVBQUE7QUFHM0IsaUJBQUE7QUFDQTtFQUNFLHVCQUF1QixFQUFBO0FBR3ZCO0VBQ0UsWUFBVztFQUNYLFlBQVc7RUFDWCxXQUFXO0VBRVgsZUFBZSxFQUFBO0FBR25CO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXLEVBQUE7QUFHZjtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVyxFQUFBO0FBR2I7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVcsRUFBQTtBQUdmO0VBQ0UsV0FBVTtFQUNWLFlBQVc7RUFDWCxXQUFXLEVBQUE7QUFJYjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUduQjtFQUNJLFlBQVc7RUFDWCxXQUFVO0VBQ1YsV0FBVztFQUNYLG9CQUFvQixFQUFBO0FBR3hCO0VBQ0kscUJBQXFCLEVBQUE7QUFFekI7RUFDRSxhQUFZO0VBQ1Ysa0JBQWtCLEVBQUE7QUFFdEI7RUFFRSxlQUFlLEVBQUE7QUFHakI7RUFDSSxtQkFBbUIsRUFBQTtBQUV2QjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHVCQUFzQixFQUFBO0FBRzFCO0VBQ0ksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4jbWVudS1tYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMxRjU2OEI7XG4gIGhlaWdodDogMTAwcHg7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbiNsZWZ0LW1lbnUge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbiNtaWQtbWVudSB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuI3JpZ2h0LW1lbnUge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjMDBiOWYyOyB9XG5cbiNyaWdodC1tZW51IGkge1xuICBjb2xvcjogI2ZmZjsgfVxuXG4jbWVudSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi8qPT1SZXNldCBDU1M9PSovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwOyB9XG5cbi8qPT1TdHlsZSBjxqEgYuG6o24gY2hvIHdlYnNpdGU9PSovXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMzMzOyB9XG5cbi8qPT1TdHlsZSBjaG8gbWVudT09PSovXG4jbWVudSB1bCB7XG4gIGJhY2tncm91bmQ6ICMxRjU2OEI7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbiNtZW51IGxpIHtcbiAgY29sb3I6ICNmMWYxZjE7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE3MHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMTAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDBweDsgfVxuXG4jbWVudSBhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbiNtZW51IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xuICBjb2xvcjogIzMzMztcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICMwMGI5ZjI7XG4gIHRyYW5zaXRpb246IC41czsgfVxuXG4vKj09RHJvcGRvd24gTWVudT09Ki9cbi5zdWItbWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuXG4jbWVudSBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4jbWVudSBsaTpob3ZlciAuc3ViLW1lbnUge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4uc3ViLW1lbnUgbGkge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50OyB9XG5cbi8qPT1NZW51IGPhuqVwIDM9PSovXG4uc3ViLW1lbnUgPiB1bCB7XG4gIGRpc3BsYXk6IG5vbmUgaW1wb3J0YW50OyB9XG5cbiNkYW5nLW5oYXAuYnRuLXN1Y2Nlc3Mge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDMwJTsgfVxuXG4jYW5ub3VjZSB7XG4gIHdpZHRoOiAzNSU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuI3VzIHtcbiAgd2lkdGg6IDM1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogbGVmdDsgfVxuXG4jZGFuZy1uaGFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuI2RhbmctbmhhcCAuYnRuLXN1Y2Nlc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogbGVmdDsgfVxuXG4uZmEtYmVsbCwgLmZhLXVzZXIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNDUlO1xuICBtYXJnaW4tdG9wOiAzMiU7IH1cblxuI2xvZ28ge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogOTIlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiA1cHggMCAwIDUwcHg7IH1cblxuLmRyb3Bkb3duIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XG5cbiNhbm5vdWNlIC5kcm9wZG93bi1tZW51IHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyB9XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgbWFyZ2luLXRvcDogNTAlOyB9XG5cbi5kcm9wZG93bi1tZW51IGxpIHtcbiAgb3ZlcmZsb3cteTogdmlzaWJsZTsgfVxuXG4uZHJvcGRvd24tbWVudSBsaSBhIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzbW9rZTsgfVxuXG4uZHJvcGRvd24tbWVudSBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMGI5ZjI7IH1cbiIsIi8vIC54eHtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4vLyAgICAgcGFkZGluZzogMTRweCAxMnB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgXHJcbi8vIH1cclxuXHJcbi8vIC5uYXZiYXItZGVmYXVsdCB7XHJcbi8vICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuLy8gICAgIGJvcmRlci1jb2xvcjogI2U3ZTdlNztcclxuLy8gfVxyXG4vLyAubmF2YmFyLWJyYW5kIHtcclxuICBcclxuLy8gICAgIGhlaWdodDogNjBweDtcclxuLy8gICAgICBwYWRkaW5nOiAwOyBcclxuICAgXHJcbi8vIH1cclxuLy8gLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2Pi5hY3RpdmU+YSwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2Pi5hY3RpdmU+YTpmb2N1cywgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2Pi5hY3RpdmU+YTpob3ZlciB7XHJcbi8vICAgICBjb2xvcjogI2ZmN2YyMTtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbi8vIH1cclxuXHJcbi8vIGEubnV0LWRhbmdreS5idG4ge1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2ZmN2YyMTtcclxuLy8gICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLm5hdmJhci1uYXY+bGk+LmRyb3Bkb3duLW1lbnUuY2FkaS1jdXN0b217XHJcbi8vICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4vLyB9XHJcblxyXG4jbWVudS1tYWlue1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMxRjU2OEI7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIFxyXG59XHJcbiNsZWZ0LW1lbnV7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBcclxufVxyXG4jbWlkLW1lbnV7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6bGlnaHRibHVlO1xyXG59XHJcbiNyaWdodC1tZW51e1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogIzAwYjlmMjtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4jcmlnaHQtbWVudSBpe1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIFxyXG59XHJcblxyXG4jbWVudXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLyo9PVJlc2V0IENTUz09Ki9cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICAvKj09U3R5bGUgY8ahIGLhuqNuIGNobyB3ZWJzaXRlPT0qL1xyXG4gIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbiAgXHJcbiAgLyo9PVN0eWxlIGNobyBtZW51PT09Ki9cclxuICAjbWVudSB1bCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMUY1NjhCO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAjbWVudSBsaSB7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuICAjbWVudSBhIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgI21lbnUgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBcclxuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjMDBiOWYyO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gIH1cclxuICBcclxuICAvKj09RHJvcGRvd24gTWVudT09Ki9cclxuICAuc3ViLW1lbnUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgI21lbnUgbGkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAjbWVudSBsaTpob3ZlciAuc3ViLW1lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5zdWItbWVudSBsaSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAvKj09TWVudSBj4bqlcCAzPT0qL1xyXG4gIC5zdWItbWVudSA+IHVsIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgICAjZGFuZy1uaGFwLmJ0bi1zdWNjZXNze1xyXG4gICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAvL21hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwJTtcclxuICB9XHJcblxyXG4gICNhbm5vdWNle1xyXG4gICAgICB3aWR0aDogMzUlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAvL2JhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbiAgfVxyXG4gICN1c3tcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcbiAgI2RhbmctbmhhcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG4jZGFuZy1uaGFwIC5idG4tc3VjY2Vzc3tcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIC8vbWFyZ2luLWxlZnQ6IDQwJTtcclxuICAvL21hcmdpbi10b3A6IDMwJTtcclxufVxyXG4uZmEtYmVsbCwgLmZhLXVzZXJ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NSU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMiU7XHJcbn1cclxuXHJcbiNsb2dve1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICBoZWlnaHQ6OTIlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDVweCAwIDAgNTBweDtcclxufVxyXG5cclxuLmRyb3Bkb3due1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbiNhbm5vdWNlIC5kcm9wZG93bi1tZW51e1xyXG4gIGhlaWdodDoxNTBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4uZHJvcGRvd24tbWVudXtcclxuXHJcbiAgbWFyZ2luLXRvcDogNTAlO1xyXG5cclxufVxyXG4uZHJvcGRvd24tbWVudSBsaXtcclxuICAgIG92ZXJmbG93LXk6IHZpc2libGU7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUgbGkgYXtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpzbW9rZTtcclxuICAgIFxyXG59XHJcbi5kcm9wZG93bi1tZW51IGxpIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzAwYjlmMjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/login.service */ "./src/app/service/login.service.ts");
/* harmony import */ var src_app_service_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/candidate.service */ "./src/app/service/candidate.service.ts");
/* harmony import */ var src_app_service_job_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/job.service */ "./src/app/service/job.service.ts");
/* harmony import */ var src_app_service_socket_io_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/socket-io.service */ "./src/app/service/socket-io.service.ts");









var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(user, router, loginService, adminService, candidateService, jobService, soketIo, teacher) {
        this.user = user;
        this.router = router;
        this.loginService = loginService;
        this.adminService = adminService;
        this.candidateService = candidateService;
        this.jobService = jobService;
        this.soketIo = soketIo;
        this.teacher = teacher;
        this.conCa = ['1', '2', '3'];
        //-----Admin
        this.listCVAccept = [];
        this.listJobInterview = [];
        this.listCV = [];
        this.tongCVnop = "";
        this.tongCVAccept = "";
        //
        this.check = false;
        //---Teacher
        this.listRequetCV = [];
        //
        //teacher
        this.tongRequestCv = "";
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.soketIo.listen("ServerApplyJob6").subscribe(function (data) {
            _this.tongCVnop = data;
            //localStorage.setItem("duLieu",data+"");
        });
        // this.tongCVnop=localStorage.getItem("duLieu");
        this.soketIo.listen("ServerRequest").subscribe(function (data) {
            _this.tongRequestCv = data;
            //localStorage.setItem("duLieu",data+"");
        });
        this.soketIo.listen("ServerXacNhan").subscribe(function (data) {
            _this.tongCVAccept = data;
            //localStorage.setItem("duLieu",data+"");
        });
        this.items = [
            {
                label: '',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        icon: 'pi pi-fw pi-pencil',
                        label: 'Open'
                    },
                    {
                        icon: 'pi pi-fw pi-pencil',
                        label: 'Đăng Xuất',
                        command: function (event) {
                            localStorage.removeItem('token');
                            localStorage.removeItem('user');
                            _this.router.navigate(['login']);
                            _this.user.setUserLogout();
                        }
                    }
                ]
            },
        ];
        if (this.user.getUser()) {
            this.userInfo = this.user.getUser();
            this.items[0].label = this.userInfo.userName;
        }
    };
    HeaderComponent.prototype.ngOnChanges = function () {
        debugger;
    };
    HeaderComponent.prototype.UngVien = function () {
        this.candidateService.SetLoggin(false);
        this.candidateService.setName("");
        this.router.navigate(['login']);
        // alert("La gi day"+this.candidateService._isLogin);
    };
    HeaderComponent.prototype.acceptCV = function () {
        var _this = this;
        this.jobService.listAcceptCV()
            .subscribe(function (res) {
            _this.listCVAccept = res;
            console.log(res);
            // this.router.navigate(['login'])
        });
    };
    HeaderComponent.prototype.getListJobInterView = function () {
        var _this = this;
        this.jobService.getJobInterview(this.candidateService.getId())
            .subscribe(function (res) {
            _this.listJobInterview = res;
            console.log(_this.listJobInterview);
        });
    };
    HeaderComponent.prototype.viewListCV = function () {
        var _this = this;
        this.jobService.getListNewcvModelcs()
            .subscribe(function (res) {
            _this.listCV = res;
            console.log(res);
            _this.listCV.reverse();
            _this.soketIo.emit("Update", "");
            _this.tongCVnop = 0;
        });
    };
    HeaderComponent.prototype.getRequestCV = function () {
        var _this = this;
        this.jobService.getRequestCandidate()
            .subscribe(function (res) {
            _this.listRequetCV = res;
            _this.soketIo.emit("UpdateRequest", "");
            _this.tongRequestCv = 0;
            console.log(_this.listRequetCV);
        });
    };
    HeaderComponent.prototype.DangNhap = function () {
        this.router.navigate(['login']);
    };
    HeaderComponent.prototype.DangXuat = function () {
        localStorage.setItem("UngVien", "");
        this.router.navigate(['home']);
        this.candidateService._isLogin = false;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            src_app_service_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"],
            src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_6__["CandidateService"],
            src_app_service_job_service__WEBPACK_IMPORTED_MODULE_7__["JobService"],
            src_app_service_socket_io_service__WEBPACK_IMPORTED_MODULE_8__["SocketIoService"],
            src_app_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/service/admin.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/admin.service.ts ***!
  \******************************************/
/*! exports provided: browserRefresh, AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserRefresh", function() { return browserRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./candidate.service */ "./src/app/service/candidate.service.ts");




var browserRefresh = false;
var AdminService = /** @class */ (function () {
    function AdminService(candidateService, router, platformId) {
        // if (isPlatformBrowser(this.platformId)) {
        //     this._isLogin = !!localStorage.getItem('name');
        //   }
        //alert(this._isLogin);
        //  alert(platformId.valueOf);
        // alert(localStorage.getItem('id'));
        //alert(localStorage.getItem('name'));
        var _this = this;
        this.candidateService = candidateService;
        this.router = router;
        this.platformId = platformId;
        this._isLogin = false;
        this.check = "";
        this.subscription = router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                browserRefresh = !router.navigated;
                if (browserRefresh == true) {
                    _this.check = localStorage.getItem("Admin");
                    if (_this.check != "") {
                        _this._isLogin = true;
                        _this.setName("Tuan");
                        //  alert(localStorage.getItem("Admin"));
                    }
                }
            }
        });
    }
    AdminService.prototype.canActivate = function () {
        return this._isLogin;
    };
    AdminService.prototype.IsLogged = function () {
        return this._isLogin;
    };
    AdminService.prototype.SetLoggin = function (isLoggin) {
        this._isLogin = isLoggin;
    };
    AdminService.prototype.Check = function (name, password) {
        if (name == "teacher" && password == "123456") {
            return true;
        }
        return false;
    };
    AdminService.prototype.setName = function (x) {
        this.name = x;
    };
    AdminService.prototype.getName = function () {
        return this.name;
    };
    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_candidate_service__WEBPACK_IMPORTED_MODULE_3__["CandidateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/service/candidate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/candidate.service.ts ***!
  \**********************************************/
/*! exports provided: browserRefresh, CandidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserRefresh", function() { return browserRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateService", function() { return CandidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log.service */ "./src/app/service/log.service.ts");
/* harmony import */ var _socket_io_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./socket-io.service */ "./src/app/service/socket-io.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var browserRefresh = false;
var CandidateService = /** @class */ (function () {
    // BehaviorSubjects have an initial value.
    // isLoggedIn is property (not function) now:
    function CandidateService(soketIo, xx, router, platformId) {
        var _this = this;
        this.soketIo = soketIo;
        this.xx = xx;
        this.router = router;
        this.platformId = platformId;
        this.isLoggedIn = false;
        // isLoggedIn = new BehaviorSubject<boolean>(false);
        this._isLogin = false;
        this.name = "";
        this.id = -1;
        this.UserId = "";
        this.conCac = "cc";
        this.conCac = this.id + "";
        //  if (isPlatformBrowser(this.platformId)) {
        //      this._isLogin = !!localStorage.getItem('name');
        //    }
        //alert(this._isLogin);
        // alert(platformId.valueOf);
        //alert(localStorage.getItem('id'));
        //  alert(localStorage.getItem('name'));
        this.subscription = router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                browserRefresh = !router.navigated;
                if (browserRefresh == true) {
                    if (localStorage.getItem("UngVien") == "") {
                        _this._isLogin = false;
                    }
                    else {
                        _this._isLogin = true;
                        _this.setName("Huy");
                        //alert(localStorage.getItem("UngVien"));
                        _this.setId(parseInt(localStorage.getItem("UngVien")));
                    }
                    // this.soketIo.emit("GetIdCandidate","");
                    // this.soketIo.listen("ServeGetIdCandidate").subscribe(data=>
                    // {
                    //       this.UserId=data;
                    //       alert("cai loz"+this.UserId);
                    //       this.xx.GetUser(parseInt(this.UserId)).subscribe(res =>{
                    //         this._isLogin=true;
                    //         this.name=res[0].name;
                    //         this.id=res[0].userID;
                    //         console.log(res);
                    //     });
                    // });
                    // alert("ServeUser");
                    // this.soketIo.emit("User",'xx');
                    // this.soketIo.listen("ServerUser").subscribe(data=>
                    //   {
                    //        //alert("Huy"+data);
                    //   });
                    //   if(this.name=="")
                    //   {
                    //      // alert("Cap nhat lai ne");
                    //   }
                    // this.xx.GetUser()
                    //  this._isLogin=true;
                    // this.name="15039131";
                    // this.id=1;
                    //alert(""+this.name);
                    // this._isLogin=true;
                    // this.name=this.name;
                    // this.id=this.id;
                }
            }
        });
    }
    CandidateService.prototype.canActivate = function () {
        return this._isLogin;
    };
    CandidateService.prototype.IsLogged = function () {
        return this._isLogin;
    };
    CandidateService.prototype.SetLoggin = function (isLoggin) {
        this._isLogin = isLoggin;
        // localStorage.setItem('auth_token', 'test');
        localStorage.setItem('name', "");
    };
    CandidateService.prototype.Check = function (name, password) {
        if (name == "candidate" && password == "123456") {
            return true;
        }
        return false;
    };
    CandidateService.prototype.setName = function (x) {
        this.name = x;
        // localStorage.setItem('name',x);
    };
    CandidateService.prototype.getName = function () {
        return this.name;
        // return  localStorage.getItem('name');
    };
    CandidateService.prototype.setId = function (x) {
        this.id = x;
        //localStorage.setItem('id',x+"");
    };
    CandidateService.prototype.getId = function () {
        return this.id;
        //return localStorage.getItem('id');
    };
    CandidateService.prototype.ngOnInit = function () {
    };
    CandidateService.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CandidateService.prototype.login = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (val) { return _this.isLoggedIn = true; }));
    };
    CandidateService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    CandidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_socket_io_service__WEBPACK_IMPORTED_MODULE_5__["SocketIoService"], _log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object])
    ], CandidateService);
    return CandidateService;
}());



/***/ }),

/***/ "./src/app/service/constant.ts":
/*!*************************************!*\
  !*** ./src/app/service/constant.ts ***!
  \*************************************/
/*! exports provided: urlLogin, urlSearchJobs, urlGetJobs, urlEditJobs, urlAddJobs, urlAddJob, urlDisibleJobs, urlVisibleJobs, urlGetCandidate, urlGetUserJob, urlSaveJob, Login, GetUser, urlCheckSaveJob, urlCheckApplyJob, urlApplyJob, urlUnCheckSaveJob, urlfindJob, urlGetInfoCandidate, urlAddInfoCandidate, urlGetSaveJob, urlGetApplyJob, urlCandidate, urlget_Skill, urladd_Skill, urlCandidate_Skill, urlAdd_Skill, urlCandidate_Language, urladd_Language, urlget_Experience, urlReviewCV, urlcheckDanhGia, urlupdateCV, urlgetCV, urlgetImgCV, urlgetCVCandidate, sendEmail, setTinhTrang, setRequest, getReuestCandidate, getRequesetCV, getJobInterview, createInterview, getDetailInterview, ConfirmRequest, listAcceptCV, getListNewcvModelcs, getDanhGia, getRequest, getRequestCandidate, GetJobLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlLogin", function() { return urlLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlSearchJobs", function() { return urlSearchJobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlGetJobs", function() { return urlGetJobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlEditJobs", function() { return urlEditJobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlAddJobs", function() { return urlAddJobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlAddJob", function() { return urlAddJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlDisibleJobs", function() { return urlDisibleJobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlVisibleJobs", function() { return urlVisibleJobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlGetCandidate", function() { return urlGetCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlGetUserJob", function() { return urlGetUserJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlSaveJob", function() { return urlSaveJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUser", function() { return GetUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlCheckSaveJob", function() { return urlCheckSaveJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlCheckApplyJob", function() { return urlCheckApplyJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlApplyJob", function() { return urlApplyJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlUnCheckSaveJob", function() { return urlUnCheckSaveJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlfindJob", function() { return urlfindJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlGetInfoCandidate", function() { return urlGetInfoCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlAddInfoCandidate", function() { return urlAddInfoCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlGetSaveJob", function() { return urlGetSaveJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlGetApplyJob", function() { return urlGetApplyJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlCandidate", function() { return urlCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlget_Skill", function() { return urlget_Skill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urladd_Skill", function() { return urladd_Skill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlCandidate_Skill", function() { return urlCandidate_Skill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlAdd_Skill", function() { return urlAdd_Skill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlCandidate_Language", function() { return urlCandidate_Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urladd_Language", function() { return urladd_Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlget_Experience", function() { return urlget_Experience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlReviewCV", function() { return urlReviewCV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlcheckDanhGia", function() { return urlcheckDanhGia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlupdateCV", function() { return urlupdateCV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlgetCV", function() { return urlgetCV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlgetImgCV", function() { return urlgetImgCV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlgetCVCandidate", function() { return urlgetCVCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendEmail", function() { return sendEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTinhTrang", function() { return setTinhTrang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRequest", function() { return setRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReuestCandidate", function() { return getReuestCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequesetCV", function() { return getRequesetCV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJobInterview", function() { return getJobInterview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInterview", function() { return createInterview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailInterview", function() { return getDetailInterview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmRequest", function() { return ConfirmRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listAcceptCV", function() { return listAcceptCV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListNewcvModelcs", function() { return getListNewcvModelcs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDanhGia", function() { return getDanhGia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequest", function() { return getRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequestCandidate", function() { return getRequestCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetJobLevel", function() { return GetJobLevel; });
var url = 'https://localhost:44316';
var urlLogin = url + "/api/auth/login";
var urlSearchJobs = url + "/api/searchJobs";
var urlGetJobs = url + "/api/getJobs";
var urlEditJobs = url + "/api/editJobs";
var urlAddJobs = url + "/api/addJobs";
var urlAddJob = url + "/api/addJob";
var urlDisibleJobs = url + "/api/disibleJobs";
var urlVisibleJobs = url + "/api/visibleJobs";
var urlGetCandidate = url + "/api/getCandidate";
var urlGetUserJob = url + "/api/getUserJob";
var urlSaveJob = url + "/api/saveJob";
var Login = url + "/ap/LOG";
var GetUser = url + "/ap/GetUser";
var urlCheckSaveJob = url + "/api/checkSaveJob";
var urlCheckApplyJob = url + "/api/checkApplyJob";
var urlApplyJob = url + "/api/applyJob";
var urlUnCheckSaveJob = url + "/api/unCheckSaveJob";
var urlfindJob = url + "/api/findJob";
var urlGetInfoCandidate = url + "/api/getInfoCandidate";
var urlAddInfoCandidate = url + "/api/AddInforCandidate";
var urlGetSaveJob = url + "/api/getSaveJob";
var urlGetApplyJob = url + "/api/getApplyJob";
var urlCandidate = url + "/api/candidate";
var urlget_Skill = url + "/api/getSkill";
var urladd_Skill = url + "/api/addSkill";
var urlCandidate_Skill = url + "/apiCandidate/getSkill";
var urlAdd_Skill = url + "/apiCandidate/addSkill";
var urlCandidate_Language = url + "/apiCandidate/getLanguage";
var urladd_Language = url + "/apiCandidate/addLanguage";
var urlget_Experience = url + "/apiCandidate/getExperience";
var urlReviewCV = url + "/apiCandidate/reviewCV";
var urlcheckDanhGia = url + "/apiCandidate/checkDanhGia";
var urlupdateCV = url + "/apiCandidate/updateCV";
var urlgetCV = url + "/apiCandidate/getCV";
var urlgetImgCV = url + "/apiCandidate/getImageCV";
var urlgetCVCandidate = url + "/api/getCVCandidate";
var sendEmail = url + "/api/mail";
var setTinhTrang = url + "/api/setTinhTrang";
var setRequest = url + "/api/setRequest";
var getReuestCandidate = url + "/api/getReuestCandidate";
var getRequesetCV = url + "/api/getRequesetCV";
var getJobInterview = url + "/api/getJobInterview";
var createInterview = url + "/api/createInterview";
var getDetailInterview = url + "/api/getDetailInterview";
var ConfirmRequest = url + "/api/ConfirmRequest";
var listAcceptCV = url + "/api/listAcceptCV";
var getListNewcvModelcs = url + "/api/getListNewcvModelcs";
var getDanhGia = url + "/api/getDanhGia";
var getRequest = url + "/apiCandidate/getRequest";
var getRequestCandidate = url + "/api/getRequestCandidate";
var GetJobLevel = url + "/apiCandidate/GetJobLevel";


/***/ }),

/***/ "./src/app/service/job.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/job.service.ts ***!
  \****************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant */ "./src/app/service/constant.ts");




var JobService = /** @class */ (function () {
    function JobService(http) {
        this.http = http;
    }
    JobService.prototype.searchJobs = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlSearchJobs"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getJob = function () {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlGetJobs"], {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.editJob = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlEditJobs"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.addJobs = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlAddJobs"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.addJob = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlAddJob"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.disibleJobs = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlDisibleJobs"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.visibleJobs = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlVisibleJobs"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getCandidate = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlGetCandidate"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getUserJob = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlGetUserJob"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.saveJob = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlSaveJob"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.checkSaveJob = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlCheckSaveJob"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.unCheckSaveJob = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlUnCheckSaveJob"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.findJob = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlfindJob"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getInfoCandidate = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlGetInfoCandidate"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.applyJob = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlApplyJob"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.checkApplyJob = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlCheckApplyJob"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.AddInforCandidate = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlAddInfoCandidate"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getSaveJob = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlGetSaveJob"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getApplyJob = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlGetApplyJob"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.candidate = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlCandidate"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getCandidateSkill = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlCandidate_Skill"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getSkill = function () {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlget_Skill"], {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.addSkill = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlAdd_Skill"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getLanguage = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlCandidate_Language"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.addLanguage = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urladd_Language"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getExperience = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlget_Experience"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.reviewCV = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlReviewCV"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.checkDanhGia = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlcheckDanhGia"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.urlupdateCV = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlupdateCV"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getCV = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlgetCV"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getImageCV = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlgetImgCV"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getCVCandidate = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlgetCVCandidate"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.Login = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Login"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.sendEmail = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["sendEmail"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.setTinhTrang = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["setTinhTrang"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.setRequest = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["setRequest"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getReuestCandidate = function () {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["getReuestCandidate"], {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getRequesetCV = function () {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["getRequesetCV"], {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getJobInterview = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["getJobInterview"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.createInterview = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["createInterview"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getDetailInterview = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["getDetailInterview"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.ConfirmRequest = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["ConfirmRequest"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.listAcceptCV = function () {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["listAcceptCV"], {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getListNewcvModelcs = function () {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["getListNewcvModelcs"], {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getDanhGia = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["getDanhGia"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getRequest = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["getRequest"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.getRequestCandidate = function () {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["getRequestCandidate"], {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService.prototype.GetJobLevel = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["GetJobLevel"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    JobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "./src/app/service/log.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/log.service.ts ***!
  \****************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant */ "./src/app/service/constant.ts");




var LogService = /** @class */ (function () {
    function LogService(http) {
        this.http = http;
    }
    LogService.prototype.logIn = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Login"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    LogService.prototype.GetUser = function (obj) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["GetUser"], obj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "./src/app/service/login.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/login.service.ts ***!
  \******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginService = /** @class */ (function () {
    function LoginService() {
        this._isLogin = false;
    }
    LoginService.prototype.IsLogged = function () {
        return this._isLogin;
    };
    LoginService.prototype.SetLoggin = function (isLoggin) {
        this._isLogin = isLoggin;
    };
    LoginService.prototype.Check = function (name, password) {
        if (name == "admin" && password == "123456") {
            return true;
        }
        return false;
    };
    LoginService.prototype.SetName = function (x) {
        this.name = x;
    };
    LoginService.prototype.getName = function () {
        return this.name;
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/service/socket-io.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/socket-io.service.ts ***!
  \**********************************************/
/*! exports provided: SocketIoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketIoService", function() { return SocketIoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");





var SocketIoService = /** @class */ (function () {
    function SocketIoService(socket) {
        this.socket = socket;
        // socket:any;
        this.uri = "ws://localhost:3000";
        socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.uri);
        //  alert("cc"+this.socket);
    }
    SocketIoService.prototype.listen = function (eventName) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (subcriber) {
            _this.socket.on(eventName, function (data) {
                subcriber.next(data);
            });
        });
    };
    SocketIoService.prototype.emit = function (eventName, data) {
        this.socket.emit(eventName, data);
    };
    SocketIoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"]])
    ], SocketIoService);
    return SocketIoService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant */ "./src/app/service/constant.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.user = {};
    }
    UserService.prototype.setUser = function (data) {
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("user", JSON.stringify(data.user));
    };
    UserService.prototype.setUserLogout = function () {
        this.user = {};
    };
    UserService.prototype.getUser = function () {
        return JSON.parse(localStorage.getItem("user"));
    };
    UserService.prototype.login = function (credentials) {
        return this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["urlLogin"], credentials, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\WebMVC\FrontendUIH\FrontendUIH\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map