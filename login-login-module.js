(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/primeng/components/checkbox/checkbox.js":
/*!**************************************************************!*\
  !*** ./node_modules/primeng/components/checkbox/checkbox.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
exports.CHECKBOX_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return Checkbox; }),
    multi: true
};
var Checkbox = /** @class */ (function () {
    function Checkbox(cd) {
        this.cd = cd;
        this.onChange = new core_1.EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.focused = false;
        this.checked = false;
    }
    Checkbox.prototype.onClick = function (event, checkbox, focus) {
        event.preventDefault();
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.updateModel();
        if (focus) {
            checkbox.focus();
        }
    };
    Checkbox.prototype.updateModel = function () {
        if (!this.binary) {
            if (this.checked)
                this.addValue();
            else
                this.removeValue();
            this.onModelChange(this.model);
            if (this.formControl) {
                this.formControl.setValue(this.model);
            }
        }
        else {
            this.onModelChange(this.checked);
        }
        this.onChange.emit(this.checked);
    };
    Checkbox.prototype.handleChange = function (event) {
        this.checked = event.target.checked;
        this.updateModel();
    };
    Checkbox.prototype.isChecked = function () {
        if (this.binary)
            return this.model;
        else
            return this.model && this.model.indexOf(this.value) > -1;
    };
    Checkbox.prototype.removeValue = function () {
        var _this = this;
        this.model = this.model.filter(function (val) { return val !== _this.value; });
    };
    Checkbox.prototype.addValue = function () {
        if (this.model)
            this.model = this.model.concat([this.value]);
        else
            this.model = [this.value];
    };
    Checkbox.prototype.onFocus = function (event) {
        this.focused = true;
    };
    Checkbox.prototype.onBlur = function (event) {
        this.focused = false;
        this.onModelTouched();
    };
    Checkbox.prototype.writeValue = function (model) {
        this.model = model;
        this.checked = this.isChecked();
        this.cd.markForCheck();
    };
    Checkbox.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Checkbox.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Checkbox.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Checkbox.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Checkbox.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "binary", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Checkbox.prototype, "tabindex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "inputId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Checkbox.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "labelStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", forms_1.FormControl)
    ], Checkbox.prototype, "formControl", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Checkbox.prototype, "onChange", void 0);
    Checkbox = __decorate([
        core_1.Component({
            selector: 'p-checkbox',
            template: "\n        <div [ngStyle]=\"style\" [ngClass]=\"'ui-chkbox ui-widget'\" [class]=\"styleClass\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [attr.id]=\"inputId\" [name]=\"name\" [value]=\"value\" [checked]=\"checked\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\"\n                [ngClass]=\"{'ui-state-focus':focused}\" (change)=\"handleChange($event)\" [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\">\n            </div>\n            <div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\" (click)=\"onClick($event,cb,true)\"\n                        [ngClass]=\"{'ui-state-active':checked,'ui-state-disabled':disabled,'ui-state-focus':focused}\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'pi pi-check':checked}\"></span>\n            </div>\n        </div>\n        <label (click)=\"onClick($event,cb,true)\" [class]=\"labelStyleClass\"\n                [ngClass]=\"{'ui-chkbox-label': true, 'ui-label-active':checked, 'ui-label-disabled':disabled, 'ui-label-focus':focused}\"\n                *ngIf=\"label\" [attr.for]=\"inputId\">{{label}}</label>\n    ",
            providers: [exports.CHECKBOX_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], Checkbox);
    return Checkbox;
}());
exports.Checkbox = Checkbox;
var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
    }
    CheckboxModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [Checkbox],
            declarations: [Checkbox]
        })
    ], CheckboxModule);
    return CheckboxModule;
}());
exports.CheckboxModule = CheckboxModule;
//# sourceMappingURL=checkbox.js.map

/***/ }),

/***/ "./node_modules/primeng/components/inputtext/inputtext.js":
/*!****************************************************************!*\
  !*** ./node_modules/primeng/components/inputtext/inputtext.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var InputText = /** @class */ (function () {
    function InputText(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
    }
    InputText.prototype.ngDoCheck = function () {
        this.updateFilledState();
    };
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    InputText.prototype.onInput = function (e) {
        this.updateFilledState();
    };
    InputText.prototype.updateFilledState = function () {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
            (this.ngModel && this.ngModel.model);
    };
    __decorate([
        core_1.HostListener('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InputText.prototype, "onInput", null);
    InputText = __decorate([
        core_1.Directive({
            selector: '[pInputText]',
            host: {
                '[class.ui-inputtext]': 'true',
                '[class.ui-corner-all]': 'true',
                '[class.ui-state-default]': 'true',
                '[class.ui-widget]': 'true',
                '[class.ui-state-filled]': 'filled'
            }
        }),
        __param(1, core_1.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef, forms_1.NgModel])
    ], InputText);
    return InputText;
}());
exports.InputText = InputText;
var InputTextModule = /** @class */ (function () {
    function InputTextModule() {
    }
    InputTextModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [InputText],
            declarations: [InputText]
        })
    ], InputTextModule);
    return InputTextModule;
}());
exports.InputTextModule = InputTextModule;
//# sourceMappingURL=inputtext.js.map

/***/ }),

/***/ "./node_modules/primeng/inputtext.js":
/*!*******************************************!*\
  !*** ./node_modules/primeng/inputtext.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/inputtext/inputtext */ "./node_modules/primeng/components/inputtext/inputtext.js"));

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login/login.component.ts");




var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login/login.component.ts");









var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_7__["LoginRoutingModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputTextModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/login/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g login\">\r\n  <div class=\"ui-g-4\"></div>\r\n  <div class=\"ui-g-4 wrap-login\" style=\"margin-top: 126px;margin-bottom: 84px;\">\r\n    \r\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\">\r\n      <!-- <div class=\"ui-g-12 login-logo\">\r\n        <span>\r\n            <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1d9UrC524mr-V1e9NcTD2eav54M43SKpWdNqT3SWj97fGRxkZQ\"  \r\n             alt=\"Smiley face\" height=\"130\" width=\"130\">\r\n        </span>\r\n      </div> -->\r\n      <div class=\"ui-g-12\">\r\n        <span class=\"login-title\">\r\n         Đăng nhập\r\n        </span>\r\n      </div>\r\n      <div class=\"ui-g-12 login-input\" style=\"margin-top: 12px;\">\r\n          <div class=\"ui-inputgroup\"  >\r\n              <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\r\n              <input type=\"text\" pInputText  ngModel name=\"username\" placeholder=\"Tài khoản\">         \r\n          </div>\r\n      </div>\r\n      <div class=\"ui-g-12 login-input\"style=\"margin-top: 32px;\">\r\n          <div class=\"ui-inputgroup\">\r\n              <span class=\"ui-inputgroup-addon\"><i class=\"fas fa-unlock-alt\"></i></span>\r\n              <input type=\"password\" pInputText  ngModel name=\"password\" placeholder=\"Mật khẩu\">         \r\n          </div>\r\n      </div>\r\n      <!-- <div class=\"ui-g-12 login-checkbox\">\r\n        <div>\r\n            <p-checkbox name=\"groupname\" label=\"Nhớ mật khẩu\"></p-checkbox>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"ui-g-12 login-btn\" >\r\n          <button pButton type=\"submit\" style=\"width: 200px;background: indigo; margin-top: 21px;\" label=\"Đăng nhập\"></button>\r\n      </div>\r\n       <!-- <div class=\"ui-g-12 input-forgot\">\r\n        <a href=\"#\">Forgot Password?</a>\r\n      </div>\r\n      <div class=\"ui-g-12 input-forgot\">\r\n          <a href=\"#\">Sign up</a>\r\n        </div>  -->\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/login/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  height: 600px; }\n\n.wrap-login {\n  width: 500px;\n  border-radius: 10px;\n  overflow: hidden;\n  padding: 55px 55px 37px 55px;\n  background: -webkit-linear-gradient(top, #7579ff, #b224ef); }\n\n.login-title {\n  font-family: Poppins-Medium;\n  font-size: 30px;\n  color: #fff;\n  line-height: 1.2;\n  text-align: center;\n  text-transform: uppercase;\n  display: block; }\n\n.login-input input {\n  font-size: 16px;\n  color: black;\n  line-height: 1.2;\n  display: block;\n  width: 100%; }\n\n.login-logo span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background-color: #fff;\n  margin: 0 auto; }\n\n.login-logo img {\n  border-radius: 50%; }\n\n.login-checkbox {\n  padding-left: 8px;\n  padding-top: 5px;\n  padding-bottom: 35px; }\n\n.login-checkbox label {\n  color: #fff !important; }\n\n.login-btn {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n.login-btn button {\n  border-radius: 25px;\n  padding: inherit; }\n\n.login-btn button:hover {\n  background-color: #ff6666; }\n\n.input-forgot {\n  text-align: center !important; }\n\n.input-forgot a {\n  font-family: Poppins-Regular;\n  font-size: 13px;\n  color: #e5e5e5;\n  line-height: 1.5; }\n\n.input-register {\n  text-align: center !important; }\n\n.input-register a {\n  font-family: Poppins-Regular;\n  font-size: 13px;\n  color: #e5e5e5;\n  line-height: 1.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4vRTpcXFdlYk1WQ1xcRnJvbnRlbmRVSUhcXEZyb250ZW5kVUlIL3NyY1xcYXBwXFxsb2dpblxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QiwwREFBMEQsRUFBQTs7QUFHOUQ7RUFDSSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxzQkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQ0osRUFBQTs7QUFFQTtFQUNJLHlCQUNKLEVBQUE7O0FBRUE7RUFDSSw2QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSw2QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuLndyYXAtbG9naW4ge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiA1NXB4IDU1cHggMzdweCA1NXB4O1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjNzU3OWZmLCAjYjIyNGVmKTtcclxufVxyXG5cclxuLmxvZ2luLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLU1lZGl1bTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmxvZ2luLWlucHV0IGlucHV0e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1sb2dvIHNwYW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmxvZ2luLWxvZ28gaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ubG9naW4tY2hlY2tib3gge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDM1cHg7XHJcbn1cclxuXHJcbi5sb2dpbi1jaGVja2JveCBsYWJlbHtcclxuICAgIGNvbG9yOiAjZmZmICEgaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9naW4tYnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1idG4gYnV0dG9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmc6IGluaGVyaXRcclxufVxyXG5cclxuLmxvZ2luLWJ0biBidXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NjY2XHJcbn1cclxuXHJcbi5pbnB1dC1mb3Jnb3R7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQtZm9yZ290IGF7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICNlNWU1ZTU7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uaW5wdXQtcmVnaXN0ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQtcmVnaXN0ZXIgYXtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogI2U1ZTVlNTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/login.service */ "./src/app/service/login.service.ts");
/* harmony import */ var src_app_service_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/candidate.service */ "./src/app/service/candidate.service.ts");
/* harmony import */ var src_app_service_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/log.service */ "./src/app/service/log.service.ts");
/* harmony import */ var src_app_service_socket_io_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/socket-io.service */ "./src/app/service/socket-io.service.ts");









var LoginComponent = /** @class */ (function () {
    function LoginComponent(soketIo, xx, candidateService, adminService, loginservice, router, user) {
        this.soketIo = soketIo;
        this.xx = xx;
        this.candidateService = candidateService;
        this.adminService = adminService;
        this.loginservice = loginservice;
        this.router = router;
        this.user = user;
        this.list = [];
    }
    LoginComponent.prototype.unloadHandler = function (event) {
        alert("XuanVu");
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    // login(form: NgForm) {
    //   let credentials = JSON.stringify(form.value);
    //   this.user.login(credentials)
    //   .subscribe(response => {
    //     const info = (<any>response);
    //     this.invalidLogin = false;
    //     this.user.setUser(info);      
    //     location.href = '/home';
    //     // this.router.navigate(["/"]);
    //   }, err => {
    //     this.invalidLogin = true;
    //   });
    // }
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        var credentials = JSON.stringify(form.value);
        this.xx.logIn(credentials)
            .subscribe(function (res) {
            //console.log(res[0].name);
            if (res[0].rol == "UngVien") {
                // this.candidateService.login().subscribe(() => {
                //   if (this.candidateService.isLoggedIn) {
                //     // Get the redirect URL from our auth service
                //     // If no redirect has been set, use the default
                //     let redirect = this.candidateService.redirectUrl ? this.router.parseUrl(this.candidateService.redirectUrl) : '/';
                //     // Redirect the user
                //     this.router.navigateByUrl(redirect);
                //     this.candidateService.setName(res[0].name);
                //     this.soketIo.emit("User",res[0].userID);
                //   }
                // });
                _this.candidateService.SetLoggin(true);
                _this.adminService.SetLoggin(false);
                _this.candidateService.setName('Huy');
                _this.candidateService.setId(res[0].userID);
                // this.soketIo.emit("SetIdCandidate","1");
                localStorage.setItem("UngVien", res[0].userID);
                // console.log(res[0].name);
                // console.log('cc');
                _this.router.navigate(['/home']);
                // this.router.navigate(['/candidate/thongTinCaNhan']);
            }
            if (res[0].rol == "Admin") {
                _this.adminService.SetLoggin(true);
                _this.candidateService.SetLoggin(false);
                localStorage.setItem("Admin", res[0].userID);
                _this.adminService.setName('Tuan');
                _this.router.navigate(['/admin/listWork']);
            }
            if (res[0].rol == "Teacher") {
                _this.loginservice.SetLoggin(true);
                _this.loginservice.SetName('Viet');
                _this.router.navigate(['/teacher/danhSachSinhVien']);
            }
        });
        // if(form.value.username=='admin'&& form.value.password=='123456')
        // {
        //   console.log('cc');
        //   this.loginservice.SetLoggin(true);
        //   if(this.loginservice.IsLogged()==true)
        //   {
        //     console.log('concac');
        //   }
        //   this.router.navigate(['/'])
        // }
        // var output=this.loginservice.Check(form.value.username,form.value.password);
        // var outputAdmin=this.adminService.Check(form.value.username,form.value.password);
        // var outputCandidate=this.candidateService.Check(form.value.username,form.value.password);  
        // if(output==true)
        // {
        //   this.loginservice.SetLoggin(true);
        //   //b1:se tim kiem cac thong tin cua nguoi do
        //   //b2:xem role cua ho la gi
        //   //b3:lay service add thong tin ho vao rui truyen cho trang thong tin nguoi dung
        //   this.loginservice.SetName('BTS');
        //   console.log('tsssssssssss');
        //   this.router.navigate(['/']);
        // }
        // if(outputAdmin==true)
        // {
        //   this.adminService.SetLoggin(true);
        //   this.adminService.setName('BlackPink');
        //   this.router.navigate(['/admin']);
        //   console.log('ccccccccccccc');
        // }
        // if(outputCandidate==true)
        // {
        //   this.candidateService.SetLoggin(true);
        //   this.candidateService.setName('BTS');
        //   this.router.navigate(['/candidate']);
        // }
        // else
        // {
        //   this.loginservice.SetLoggin(false);
        //   alert('khong co quyen');
        // }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:beforeunload", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], LoginComponent.prototype, "unloadHandler", null);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_socket_io_service__WEBPACK_IMPORTED_MODULE_8__["SocketIoService"], src_app_service_log_service__WEBPACK_IMPORTED_MODULE_7__["LogService"], src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_6__["CandidateService"], src_app_service_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], src_app_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());

//b1:dang nhap cua candidate
//co user pw->tim trong kia xem co hay ko


/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map