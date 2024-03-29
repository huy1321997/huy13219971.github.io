(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-job-detail-job-module"],{

/***/ "./node_modules/@angular/http/fesm5/http.js":
/*!**************************************************!*\
  !*** ./node_modules/@angular/http/fesm5/http.js ***!
  \**************************************************/
/*! exports provided: ɵangular_packages_http_http_e, ɵangular_packages_http_http_f, ɵangular_packages_http_http_a, ɵangular_packages_http_http_b, ɵangular_packages_http_http_c, BrowserXhr, JSONPBackend, JSONPConnection, CookieXSRFStrategy, XHRBackend, XHRConnection, BaseRequestOptions, RequestOptions, BaseResponseOptions, ResponseOptions, ReadyState, RequestMethod, ResponseContentType, ResponseType, Headers, Http, Jsonp, HttpModule, JsonpModule, Connection, ConnectionBackend, XSRFStrategy, Request, Response, QueryEncoder, URLSearchParams, VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_e", function() { return BrowserJsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_f", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_a", function() { return _createDefaultCookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_b", function() { return httpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_c", function() { return jsonpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserXhr", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPBackend", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPConnection", function() { return JSONPConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieXSRFStrategy", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRBackend", function() { return XHRBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRConnection", function() { return XHRConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequestOptions", function() { return BaseRequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOptions", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponseOptions", function() { return BaseResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseOptions", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyState", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseContentType", function() { return ResponseContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jsonp", function() { return Jsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpModule", function() { return JsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionBackend", function() { return ConnectionBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSRFStrategy", function() { return XSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEncoder", function() { return QueryEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLSearchParams", function() { return URLSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license Angular v7.2.11
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BrowserXhr);
    return BrowserXhr;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Supported http methods.
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var RequestMethod;
(function (RequestMethod) {
    RequestMethod[RequestMethod["Get"] = 0] = "Get";
    RequestMethod[RequestMethod["Post"] = 1] = "Post";
    RequestMethod[RequestMethod["Put"] = 2] = "Put";
    RequestMethod[RequestMethod["Delete"] = 3] = "Delete";
    RequestMethod[RequestMethod["Options"] = 4] = "Options";
    RequestMethod[RequestMethod["Head"] = 5] = "Head";
    RequestMethod[RequestMethod["Patch"] = 6] = "Patch";
})(RequestMethod || (RequestMethod = {}));
/**
 * All possible states in which a connection can be, based on
 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
 * additional "CANCELLED" state.
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ReadyState;
(function (ReadyState) {
    ReadyState[ReadyState["Unsent"] = 0] = "Unsent";
    ReadyState[ReadyState["Open"] = 1] = "Open";
    ReadyState[ReadyState["HeadersReceived"] = 2] = "HeadersReceived";
    ReadyState[ReadyState["Loading"] = 3] = "Loading";
    ReadyState[ReadyState["Done"] = 4] = "Done";
    ReadyState[ReadyState["Cancelled"] = 5] = "Cancelled";
})(ReadyState || (ReadyState = {}));
/**
 * Acceptable response types to be associated with a {@link Response}, based on
 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["Basic"] = 0] = "Basic";
    ResponseType[ResponseType["Cors"] = 1] = "Cors";
    ResponseType[ResponseType["Default"] = 2] = "Default";
    ResponseType[ResponseType["Error"] = 3] = "Error";
    ResponseType[ResponseType["Opaque"] = 4] = "Opaque";
})(ResponseType || (ResponseType = {}));
/**
 * Supported content type to be automatically associated with a {@link Request}.
 * @deprecated see https://angular.io/guide/http
 */
var ContentType;
(function (ContentType) {
    ContentType[ContentType["NONE"] = 0] = "NONE";
    ContentType[ContentType["JSON"] = 1] = "JSON";
    ContentType[ContentType["FORM"] = 2] = "FORM";
    ContentType[ContentType["FORM_DATA"] = 3] = "FORM_DATA";
    ContentType[ContentType["TEXT"] = 4] = "TEXT";
    ContentType[ContentType["BLOB"] = 5] = "BLOB";
    ContentType[ContentType["ARRAY_BUFFER"] = 6] = "ARRAY_BUFFER";
})(ContentType || (ContentType = {}));
/**
 * Define which buffer to use to store the response
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ResponseContentType;
(function (ResponseContentType) {
    ResponseContentType[ResponseContentType["Text"] = 0] = "Text";
    ResponseContentType[ResponseContentType["Json"] = 1] = "Json";
    ResponseContentType[ResponseContentType["ArrayBuffer"] = 2] = "ArrayBuffer";
    ResponseContentType[ResponseContentType["Blob"] = 3] = "Blob";
})(ResponseContentType || (ResponseContentType = {}));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Headers} from '@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Headers = /** @class */ (function () {
    // TODO(vicb): any -> string|string[]
    function Headers(headers) {
        var _this = this;
        /** @internal header names are lower case */
        this._headers = new Map();
        /** @internal map lower case names to actual names */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     */
    Headers.fromResponseHeaderString = function (headersString) {
        var headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var index = line.indexOf(':');
            if (index > 0) {
                var name_1 = line.slice(0, index);
                var value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    Headers.prototype.append = function (name, value) {
        var values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     */
    Headers.prototype.delete = function (name) {
        var lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    Headers.prototype.forEach = function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     */
    Headers.prototype.get = function (name) {
        var values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     */
    Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     */
    Headers.prototype.keys = function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     */
    Headers.prototype.set = function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     */
    Headers.prototype.values = function () { return Array.from(this._headers.values()); };
    /**
     * Returns string of all headers.
     */
    // TODO(vicb): returns {[name: string]: string[]}
    Headers.prototype.toJSON = function () {
        var _this = this;
        var serialized = {};
        this._headers.forEach(function (values, name) {
            var split = [];
            values.forEach(function (v) { return split.push.apply(split, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(v.split(','))); });
            serialized[_this._normalizedNames.get(name)] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     */
    Headers.prototype.getAll = function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    };
    /**
     * This method is not implemented.
     */
    Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
    Headers.prototype.mayBeSetNormalizedName = function (name) {
        var lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a response options object to be optionally provided when instantiating a
 * {@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {@link Response Responses} for
 * mock responses (see {@link MockBackend}).
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {ResponseOptions, Response} from '@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ResponseOptions = /** @class */ (function () {
    function ResponseOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var body = opts.body, status = opts.status, headers = opts.headers, statusText = opts.statusText, type = opts.type, url = opts.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * @usageNotes
     * ### Example
     *
     * ```typescript
     * import {ResponseOptions, Response} from '@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     */
    ResponseOptions.prototype.merge = function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link ResponseOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create {@link Response Responses}.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {provide} from '@angular/core';
 * import {bootstrap} from '@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {@link Response}
 * object.
 *
 * ### Example
 *
 * ```
 * import {BaseResponseOptions, Response} from '@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var BaseResponseOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
    }
    BaseResponseOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BaseResponseOptions);
    return BaseResponseOptions;
}(ResponseOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {@link Request}.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ConnectionBackend = /** @class */ (function () {
    function ConnectionBackend() {
    }
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Connection = /** @class */ (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var XSRFStrategy = /** @class */ (function () {
    function XSRFStrategy() {
    }
    return XSRFStrategy;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return RequestMethod.Get;
        case 'POST':
            return RequestMethod.Post;
        case 'PUT':
            return RequestMethod.Put;
        case 'DELETE':
            return RequestMethod.Delete;
        case 'OPTIONS':
            return RequestMethod.Options;
        case 'HEAD':
            return RequestMethod.Head;
        case 'PATCH':
            return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
function stringToArrayBuffer(input) {
    var view = new Uint16Array(input.length);
    for (var i = 0, strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var map = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], 2), key = _a[0], val = _a[1];
            var list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 **/
var QueryEncoder = /** @class */ (function () {
    function QueryEncoder() {
    }
    QueryEncoder.prototype.encodeKey = function (key) { return standardEncoding(key); };
    QueryEncoder.prototype.encodeValue = function (value) { return standardEncoding(value); };
    return QueryEncoder;
}());
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var URLSearchParams = /** @class */ (function () {
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    URLSearchParams.prototype.clone = function () {
        var clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    URLSearchParams.prototype.get = function (param) {
        var storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
    URLSearchParams.prototype.set = function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.setAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.append = function (param, val) {
        if (val === void 0 || val === null)
            return;
        var list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.appendAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.replaceAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.toString = function () {
        var _this = this;
        var paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
        });
        return paramsList.join('&');
    };
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * HTTP request body used by both {@link Request} and {@link Response}
 * https://fetch.spec.whatwg.org/#body
 */
var Body = /** @class */ (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
    Body.prototype.json = function () {
        if (typeof this._body === 'string') {
            return JSON.parse(this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     */
    Body.prototype.text = function (encodingHint) {
        if (encodingHint === void 0) { encodingHint = 'legacy'; }
        if (this._body instanceof URLSearchParams) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            switch (encodingHint) {
                case 'legacy':
                    return String.fromCharCode.apply(null, new Uint16Array(this._body));
                case 'iso-8859':
                    return String.fromCharCode.apply(null, new Uint8Array(this._body));
                default:
                    throw new Error("Invalid value for encodingHint: " + encodingHint);
            }
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     */
    Body.prototype.arrayBuffer = function () {
        if (this._body instanceof ArrayBuffer) {
            return this._body;
        }
        return stringToArrayBuffer(this.text());
    };
    /**
      * Returns the request's body as a Blob, assuming that body exists.
      */
    Body.prototype.blob = function () {
        if (this._body instanceof Blob) {
            return this._body;
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Response = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Response, _super);
    function Response(responseOptions) {
        var _this = _super.call(this) || this;
        _this._body = responseOptions.body;
        _this.status = responseOptions.status;
        _this.ok = (_this.status >= 200 && _this.status <= 299);
        _this.statusText = responseOptions.statusText;
        _this.headers = responseOptions.headers;
        _this.type = responseOptions.type;
        _this.url = responseOptions.url;
        return _this;
    }
    Response.prototype.toString = function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(Body));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
function _getJsonpConnections() {
    var w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
// Make sure not to evaluate this in a non-browser environment!
var BrowserJsonp = /** @class */ (function () {
    function BrowserJsonp() {
    }
    // Construct a <script> element with the specified URL
    BrowserJsonp.prototype.build = function (url) {
        var node = document.createElement('script');
        node.src = url;
        return node;
    };
    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
    BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
        var connections = _getJsonpConnections();
        connections[id] = connection;
    };
    BrowserJsonp.prototype.removeConnection = function (id) {
        var connections = _getJsonpConnections();
        connections[id] = null;
    };
    // Attach the <script> element to the DOM
    BrowserJsonp.prototype.send = function (node) { document.body.appendChild((node)); };
    // Remove <script> element from the DOM
    BrowserJsonp.prototype.cleanup = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild((node));
        }
    };
    BrowserJsonp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BrowserJsonp);
    return BrowserJsonp;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Base class for an in-flight JSONP request.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var JSONPConnection = /** @class */ (function () {
    /** @internal */
    function JSONPConnection(req, _dom, baseResponseOptions) {
        var _this = this;
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     */
    JSONPConnection.prototype.finished = function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection;
}());
/**
 * A {@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var JSONPBackend = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(JSONPBackend, _super);
    /** @internal */
    function JSONPBackend(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    JSONPBackend.prototype.createConnection = function (request) {
        return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BrowserJsonp, ResponseOptions])
    ], JSONPBackend);
    return JSONPBackend;
}(ConnectionBackend));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {@link MockConnection} may be interacted with in tests.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var XHRConnection = /** @class */ (function () {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            var _xhr = browserXHR.build();
            _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = _xhr.status === 1223 ? 204 : _xhr.status;
                var body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var url = getResponseURL(_xhr) || req.url;
                var statusText = _xhr.statusText || 'OK';
                var responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var response = new Response(responseOptions);
                response.ok = isSuccess(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var onError = function (err) {
                var responseOptions = new ResponseOptions({
                    body: err,
                    type: ResponseType.Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new Headers();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case ResponseContentType.ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case ResponseContentType.Json:
                        _xhr.responseType = 'json';
                        break;
                    case ResponseContentType.Text:
                        _xhr.responseType = 'text';
                        break;
                    case ResponseContentType.Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    XHRConnection.prototype.setDetectedContentType = function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case ContentType.NONE:
                break;
            case ContentType.JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case ContentType.FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case ContentType.TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case ContentType.BLOB:
                var blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var CookieXSRFStrategy = /** @class */ (function () {
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    CookieXSRFStrategy.prototype.configureRequest = function (req) {
        var xsrfToken = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["ɵgetDOM"])().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '@angular/http';
 * @Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var XHRBackend = /** @class */ (function () {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    XHRBackend.prototype.createConnection = function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BrowserXhr, ResponseOptions,
            XSRFStrategy])
    ], XHRBackend);
    return XHRBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var RequestOptions = /** @class */ (function () {
    // TODO(Dzmitry): remove search when this.search is removed
    function RequestOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var method = opts.method, headers = opts.headers, body = opts.body, url = opts.url, search = opts.search, params = opts.params, withCredentials = opts.withCredentials, responseType = opts.responseType;
        this.method = method != null ? normalizeMethodName(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.params = this._mergeSearchParams(params || search);
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    Object.defineProperty(RequestOptions.prototype, "search", {
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        get: function () { return this.params; },
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        set: function (params) { this.params = params; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    RequestOptions.prototype.merge = function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new Headers(this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            params: options && this._mergeSearchParams(options.params || options.search),
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    RequestOptions.prototype._mergeSearchParams = function (params) {
        if (!params)
            return this.params;
        if (params instanceof URLSearchParams) {
            return params.clone();
        }
        if (typeof params === 'string') {
            return new URLSearchParams(params);
        }
        return this._parseParams(params);
    };
    RequestOptions.prototype._parseParams = function (objParams) {
        var _this = this;
        if (objParams === void 0) { objParams = {}; }
        var params = new URLSearchParams();
        Object.keys(objParams).forEach(function (key) {
            var value = objParams[key];
            if (Array.isArray(value)) {
                value.forEach(function (item) { return _this._appendParam(key, item, params); });
            }
            else {
                _this._appendParam(key, value, params);
            }
        });
        return params;
    };
    RequestOptions.prototype._appendParam = function (key, value, params) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        params.append(key, value);
    };
    return RequestOptions;
}());
/**
 * Subclass of {@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {@link RequestMethod RequestMethod.Get}
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link RequestOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create and send {@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var BaseRequestOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
    }
    BaseRequestOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BaseRequestOptions);
    return BaseRequestOptions;
}(RequestOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jeffbcross): properly implement body accessors
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {@link Http} and
 * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '@angular/http';
 *
 * @Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Request = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Request, _super);
    function Request(requestOptions) {
        var _this = _super.call(this) || this;
        // TODO: assert that url is present
        var url = requestOptions.url;
        _this.url = requestOptions.url;
        var paramsArg = requestOptions.params || requestOptions.search;
        if (paramsArg) {
            var params = void 0;
            if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                params = urlEncodeParams(paramsArg).toString();
            }
            else {
                params = paramsArg.toString();
            }
            if (params.length > 0) {
                var prefix = '?';
                if (_this.url.indexOf('?') != -1) {
                    prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                _this.url = url + prefix + params;
            }
        }
        _this._body = requestOptions.body;
        _this.method = normalizeMethodName(requestOptions.method);
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        _this.headers = new Headers(requestOptions.headers);
        _this.contentType = _this.detectContentType();
        _this.withCredentials = requestOptions.withCredentials;
        _this.responseType = requestOptions.responseType;
        return _this;
    }
    /**
     * Returns the content type enum based on header options.
     */
    Request.prototype.detectContentType = function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return ContentType.JSON;
            case 'application/x-www-form-urlencoded':
                return ContentType.FORM;
            case 'multipart/form-data':
                return ContentType.FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return ContentType.TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     */
    Request.prototype.detectContentTypeFromBody = function () {
        if (this._body == null) {
            return ContentType.NONE;
        }
        else if (this._body instanceof URLSearchParams) {
            return ContentType.FORM;
        }
        else if (this._body instanceof FormData) {
            return ContentType.FORM_DATA;
        }
        else if (this._body instanceof Blob$1) {
            return ContentType.BLOB;
        }
        else if (this._body instanceof ArrayBuffer$1) {
            return ContentType.ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return ContentType.JSON;
        }
        else {
            return ContentType.TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     */
    Request.prototype.getBody = function () {
        switch (this.contentType) {
            case ContentType.JSON:
                return this.text();
            case ContentType.FORM:
                return this.text();
            case ContentType.FORM_DATA:
                return this._body;
            case ContentType.TEXT:
                return this.text();
            case ContentType.BLOB:
                return this.blob();
            case ContentType.ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(Body));
function urlEncodeParams(params) {
    var searchParams = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
        var value = params[key];
        if (value && Array.isArray(value)) {
            value.forEach(function (element) { return searchParams.append(key, element.toString()); });
        }
        else {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams;
}
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = w /** TODO #9100 */['FormData'] || noop;
var Blob$1 = w /** TODO #9100 */['Blob'] || noop;
var ArrayBuffer$1 = w /** TODO #9100 */['ArrayBuffer'] || noop;

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return newOptions.merge(new RequestOptions({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        }));
    }
    return newOptions.merge(new RequestOptions({ method: method, url: url }));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {@link Response} when a
 * response is received.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '@angular/http';
 * import {map} from 'rxjs/operators';
 *
 * @Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .pipe(map(res => res.json()))
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '@angular/http';
 * import {MockBackend} from '@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Http = /** @class */ (function () {
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    Http.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
        }
        else if (url instanceof Request) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     */
    Http.prototype.get = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     */
    Http.prototype.post = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     */
    Http.prototype.put = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     */
    Http.prototype.delete = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     */
    Http.prototype.patch = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     */
    Http.prototype.head = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     */
    Http.prototype.options = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    Http = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ConnectionBackend, RequestOptions])
    ], Http);
    return Http;
}());
/**
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Jsonp = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Jsonp, _super);
    function Jsonp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     *
     * @security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     */
    Jsonp.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            url =
                new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url));
        }
        if (url instanceof Request) {
            if (url.method !== RequestMethod.Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ConnectionBackend, RequestOptions])
    ], Jsonp);
    return Jsonp;
}(Http));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function _createDefaultCookieXSRFStrategy() {
    return new CookieXSRFStrategy();
}
function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
}
function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var HttpModule = /** @class */ (function () {
    function HttpModule() {
    }
    HttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                // TODO(pascal): use factory type annotations once supported in DI
                // issue: https://github.com/angular/angular/issues/3183
                { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
                BrowserXhr,
                { provide: RequestOptions, useClass: BaseRequestOptions },
                { provide: ResponseOptions, useClass: BaseResponseOptions },
                XHRBackend,
                { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
            ],
        })
    ], HttpModule);
    return HttpModule;
}());
/**
 * The module that includes jsonp's providers
 *
 * @deprecated see https://angular.io/api/common/http/HttpClient#jsonp
 * @publicApi
 */
var JsonpModule = /** @class */ (function () {
    function JsonpModule() {
    }
    JsonpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                // TODO(pascal): use factory type annotations once supported in DI
                // issue: https://github.com/angular/angular/issues/3183
                { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
                BrowserJsonp,
                { provide: RequestOptions, useClass: BaseRequestOptions },
                { provide: ResponseOptions, useClass: BaseResponseOptions },
                JSONPBackend,
            ],
        })
    ], JsonpModule);
    return JsonpModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Version"]('7.2.11');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./node_modules/primeng/fileupload.js":
/*!********************************************!*\
  !*** ./node_modules/primeng/fileupload.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/fileupload/fileupload */ "./node_modules/primeng/components/fileupload/fileupload.js"));

/***/ }),

/***/ "./src/app/detail-job/apply-job/apply-job.component.html":
/*!***************************************************************!*\
  !*** ./src/app/detail-job/apply-job/apply-job.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"infoJob && listCandidate \">\n<div class=\"ui-g\">\n  <div class=\"ui-g-12\">\n    <div class=\"ui-g\">\n      <div class=\"ui-g-12\" style=\"border: 1px solid;padding-left: 10px;\">\n          <div class=\"ui-g\">\n              <div class=\"ui-g-12\">\n                  <h4 class=\"modal-title\" id=\"myModalLabel\">Bạn đang ứng tuyển cho vị trí\n                      <strong>{{infoJob.title}}</strong><br>\n                      <em class=\"small\" id=\"appPreferLanguage\" style=\"display: none;\">Nhà tuyển dụng ưu tiên hồ sơ ứng tuyển viết bằng tiếng <strong id=\"appPreferLanguageName\"></strong>.</em>\n                  </h4>\n              </div>\n          </div>\n          <div class=\"ui-g\">\n              <div class=\"ui-g-10\">\n                  <div class=\"ui-g-2\">\n                      <img style=\"width: 70px;height: 70px;;\" src=\"http://ttgdnngdtxkbang.gialai.edu.vn/upload/19937/20170707/avatar65.jpg\">\n                  </div>\n                  <div class=\"ui-g-7\">\n                      <span id=\"app-fullName\">{{listCandidate[0].name}}</span>\n                      <div class=\"m-t-xs app-title\">\n                          <a href=\"javascript:void(0);\" class=\"editable editable-click\" data-placeholder=\"Nhập chức danh của bạn\" tabindex=\"1\" id=\"app-title\" data-optional=\"1\">c#</a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"ui-g\">\n              <div class=\"ui-g-10\">\n                  <div class=\"ui-g-2\">\n                      <label for=\"app-resume\" class=\"col-sm-3 col-xs-12 control-label\">Email</label>\n                  </div>\n                  <div class=\"ui-g-7\">\n                      <div class=\"form-control-static\" id=\"app-email\">{{listCandidate[0].email}}</div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"ui-g\">\n              <div class=\"ui-g-10\">\n                  <div class=\"ui-g-2\">\n                      <label for=\"app-resume\" class=\"col-sm-3 col-xs-12 control-label\">Số điện thoại</label>\n                  </div>\n                  <div class=\"ui-g-7\">\n                      <div class=\"form-control-static\" id=\"app-email\">{{listCandidate[0].phone}}</div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"ui-g\">\n              <div class=\"ui-g-10\">\n                  <div class=\"ui-g-2\">\n                      <label for=\"app-resume\" class=\"col-sm-3 col-xs-12 control-label\">Resume</label>\n                  </div>\n                  <div class=\"ui-g-7\">\n                      <span>nguyen_huy.pdf</span>\n                      <span class=\"small gray-light select-resume__hint\"> (Ngày cập nhật: 04/03/2019 15:12)</span>\n                  </div>\n              </div>\n          </div>\n          <div class=\"ui-g\">\n              <p-fileUpload name=\"myfile[]\" url=\"./upload.php\"></p-fileUpload>\n\n              <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\">\n              <input type=\"file\"  (change)=\"changeListener($event)\">\n          </div>\n          <div class=\"ui-g\">\n            <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"ApplyJob()\"   label=\"Yes\"></button>\n            <button type=\"button\" pButton icon=\"pi pi-close\" (click)=\"Cancel()\" label=\"No\" class=\"ui-button-secondary\"></button>\n          </div>\n          \n      </div>\n      <div class=\"ui-g-1\">\n          \n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n\n<!-- <input (change)=\"upload($event)\" multiple type=\"file\" /> -->\n<embed style=\"width: 100%; height: 100%\" id=\"pdfDisplay\" [src]=\"imagePath1\" type=\"application/pdf\"/>\n\n"

/***/ }),

/***/ "./src/app/detail-job/apply-job/apply-job.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/detail-job/apply-job/apply-job.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC1qb2IvYXBwbHktam9iL2FwcGx5LWpvYi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/detail-job/apply-job/apply-job.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/detail-job/apply-job/apply-job.component.ts ***!
  \*************************************************************/
/*! exports provided: ApplyJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyJobComponent", function() { return ApplyJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_models_saveJob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/saveJob */ "./src/app/models/saveJob.ts");




var ApplyJobComponent = /** @class */ (function () {
    function ApplyJobComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.applyJob = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saveJob = new src_app_models_saveJob__WEBPACK_IMPORTED_MODULE_3__["SaveJob"]();
        this.fileToUpload = null; //khai bao gia tri
        this.pdfSrc = '/pdf-test.pdf';
    }
    ApplyJobComponent.prototype.ngOnInit = function () {
    };
    ApplyJobComponent.prototype.handleFileInput = function (files) {
        var _this = this;
        alert('cc');
        // var file:File = inputValue.files[0];
        var myReader = new FileReader();
        this.fileToUpload = files.item(0);
        myReader.onloadend = function (e) {
            _this.image = myReader.result;
        };
        myReader.readAsDataURL(this.fileToUpload);
        myReader.onload = function () {
            var base64String = myReader.result.match(/.+;base64,(.+)/)[1];
            _this.imagePath = base64String;
        };
    };
    ApplyJobComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    ApplyJobComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        //   alert(inputValue.files[0]);
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.image = myReader.result;
        };
        myReader.readAsDataURL(file);
        myReader.onload = function () {
            var base64String = myReader.result.match(/.+;base64,(.+)/)[1];
            //     alert(base64String);
            _this.imagePath1 = _this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                + base64String);
            _this.imagePath = base64String;
            // this.imagePath+="";
            //alert(this.imagePath+"");           
        };
    };
    ApplyJobComponent.prototype.upload = function (event) {
        this.file = event.target.files[0];
    };
    ApplyJobComponent.prototype.ApplyJob = function () {
        //alert('co gang tao san du lieu tai day');
        this.saveJob.filePdf = this.imagePath;
        alert(this.imagePath);
        this.saveJob.tinhTrang = 0;
        this.applyJob.emit(this.saveJob);
    };
    ApplyJobComponent.prototype.Cancel = function () {
        alert('Huy thong tin tai day');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ApplyJobComponent.prototype, "listCandidate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ApplyJobComponent.prototype, "infoJob", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ApplyJobComponent.prototype, "applyJob", void 0);
    ApplyJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apply-job',
            template: __webpack_require__(/*! ./apply-job.component.html */ "./src/app/detail-job/apply-job/apply-job.component.html"),
            styles: [__webpack_require__(/*! ./apply-job.component.scss */ "./src/app/detail-job/apply-job/apply-job.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], ApplyJobComponent);
    return ApplyJobComponent;
}());



/***/ }),

/***/ "./src/app/detail-job/description-job/description-job.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/detail-job/description-job/description-job.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div class=\"ui-g-6 view\">\n      <div class=\"ui-g\">\n          <div class=\"ui-g-6\">\n              <i class=\"fa fa-cloud icon-date-posted\"></i>\n              <div class=\"bottom\">\n                <span class=\"content-label\">Ngày Đăng Tuyển</span><br>\n                <span class=\"content\">25/03/2019</span>\n              </div>\n          </div>\n      </div>\n      <div class=\"ui-g\">\n          <div class=\"ui-g-6\">\n              <i class=\"fa fa-cloud icon-date-posted\"></i>\n              <div class=\"bottom\">\n                <span class=\"content-label\">CẤP BẬC</span><br>\n                <span class=\"content\">IT - Phần mềm</span>\n              </div>\n          </div>\n      </div>\n      <div class=\"ui-g\">\n          <div class=\"ui-g-6\">\n              <i class=\"fa fa-cloud icon-date-posted\"></i>\n              <div class=\"bottom\">\n                <span class=\"content-label\">KỸ NĂNG</span><br>\n                <span class=\"content\">Unit Test, Java Core, Mysql, Java</span>\n              </div>\n          </div>\n      </div>\n      <div class=\"ui-g\">\n          <div class=\"ui-g-6\">\n              <i class=\"fa fa-cloud icon-date-posted\"></i>\n              <div class=\"bottom\">\n                <span class=\"content-label\">NGÔN NGỮ TRÌNH BÀY HỒ SƠ</span><br>\n                <span class=\"content\">Bất kỳ</span>\n              </div>\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/detail-job/description-job/description-job.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/detail-job/description-job/description-job.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-date-posted {\n  background-image: url(https://images.vietnamworks.com/icon/icon-experience-layers.png);\n  width: 25px;\n  height: 25.5px;\n  float: left;\n  margin-right: 20px;\n  margin-top: 5px; }\n\n.view {\n  border: 1px solid;\n  background-color: aqua;\n  width: 586px;\n  height: 238px; }\n\n.bottom {\n  border-bottom: 1px solid;\n  width: 290px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsLWpvYi9kZXNjcmlwdGlvbi1qb2IvRTpcXFdlYk1WQ1xcRnJvbnRlbmRVSUhcXEZyb250ZW5kVUlIL3NyY1xcYXBwXFxkZXRhaWwtam9iXFxkZXNjcmlwdGlvbi1qb2JcXGRlc2NyaXB0aW9uLWpvYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHNGQUFzRjtFQUN0RixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUVuQjtFQUVJLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFFakI7RUFFSSx3QkFBd0I7RUFDeEIsWUFBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlsLWpvYi9kZXNjcmlwdGlvbi1qb2IvZGVzY3JpcHRpb24tam9iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tZGF0ZS1wb3N0ZWRcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnZpZXRuYW13b3Jrcy5jb20vaWNvbi9pY29uLWV4cGVyaWVuY2UtbGF5ZXJzLnBuZyk7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjUuNXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnZpZXdcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gICAgd2lkdGg6IDU4NnB4O1xyXG4gICAgaGVpZ2h0OiAyMzhweDtcclxufVxyXG4uYm90dG9tXHJcbntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIHdpZHRoOjI5MHB4O1xyXG4gIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/detail-job/description-job/description-job.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/detail-job/description-job/description-job.component.ts ***!
  \*************************************************************************/
/*! exports provided: DescriptionJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionJobComponent", function() { return DescriptionJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DescriptionJobComponent = /** @class */ (function () {
    function DescriptionJobComponent() {
    }
    DescriptionJobComponent.prototype.ngOnInit = function () {
    };
    DescriptionJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-description-job',
            template: __webpack_require__(/*! ./description-job.component.html */ "./src/app/detail-job/description-job/description-job.component.html"),
            styles: [__webpack_require__(/*! ./description-job.component.scss */ "./src/app/detail-job/description-job/description-job.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DescriptionJobComponent);
    return DescriptionJobComponent;
}());



/***/ }),

/***/ "./src/app/detail-job/detail-job-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/detail-job/detail-job-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DetailJobRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailJobRoutingModule", function() { return DetailJobRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_job_detail_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-job/detail-job.component */ "./src/app/detail-job/detail-job/detail-job.component.ts");




var routes = [
    { path: '', component: _detail_job_detail_job_component__WEBPACK_IMPORTED_MODULE_3__["DetailJobComponent"] }
];
var DetailJobRoutingModule = /** @class */ (function () {
    function DetailJobRoutingModule() {
    }
    DetailJobRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DetailJobRoutingModule);
    return DetailJobRoutingModule;
}());



/***/ }),

/***/ "./src/app/detail-job/detail-job.module.ts":
/*!*************************************************!*\
  !*** ./src/app/detail-job/detail-job.module.ts ***!
  \*************************************************/
/*! exports provided: DetailJobModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailJobModule", function() { return DetailJobModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _detail_job_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-job-routing.module */ "./src/app/detail-job/detail-job-routing.module.ts");
/* harmony import */ var _panel_job_panel_job_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel-job/panel-job.component */ "./src/app/detail-job/panel-job/panel-job.component.ts");
/* harmony import */ var _description_job_description_job_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./description-job/description-job.component */ "./src/app/detail-job/description-job/description-job.component.ts");
/* harmony import */ var _info_job_info_job_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-job/info-job.component */ "./src/app/detail-job/info-job/info-job.component.ts");
/* harmony import */ var _detail_job_detail_job_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail-job/detail-job.component */ "./src/app/detail-job/detail-job/detail-job.component.ts");
/* harmony import */ var _similar_job_similar_job_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./similar-job/similar-job.component */ "./src/app/detail-job/similar-job/similar-job.component.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apply_job_apply_job_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./apply-job/apply-job.component */ "./src/app/detail-job/apply-job/apply-job.component.ts");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
















var DetailJobModule = /** @class */ (function () {
    function DetailJobModule() {
    }
    DetailJobModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_panel_job_panel_job_component__WEBPACK_IMPORTED_MODULE_4__["PanelJobComponent"], _description_job_description_job_component__WEBPACK_IMPORTED_MODULE_5__["DescriptionJobComponent"], _info_job_info_job_component__WEBPACK_IMPORTED_MODULE_6__["InfoJobComponent"], _detail_job_detail_job_component__WEBPACK_IMPORTED_MODULE_7__["DetailJobComponent"], _similar_job_similar_job_component__WEBPACK_IMPORTED_MODULE_8__["SimilarJobComponent"], _apply_job_apply_job_component__WEBPACK_IMPORTED_MODULE_10__["ApplyJobComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _detail_job_routing_module__WEBPACK_IMPORTED_MODULE_3__["DetailJobRoutingModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_11__["DialogModule"],
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_14__["HttpModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__["PdfViewerModule"]
            ]
        })
    ], DetailJobModule);
    return DetailJobModule;
}());



/***/ }),

/***/ "./src/app/detail-job/detail-job/detail-job.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/detail-job/detail-job/detail-job.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of listJob\">\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-1\">\r\n                        \r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-12\" style=\"background-color: dodgerblue;height: 100px;width: 1587px;\">\r\n                                <app-panel-job [item]=\"item\"></app-panel-job>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-12 box-detail\" style=\"padding-top:100px\">\r\n                                <app-info-job  [item1]=\"item\"></app-info-job>\r\n                                <!-- <div class=\"desciption\" style=\"padding-top:96px;margin-left: 721px;\">\r\n                                     <app-description-job style=\"margin-top: 74px; margin-left: 46px;\"></app-description-job>\r\n                                </div>\r\n                                <div class=\"desciption1\" style=\"margin-top: -417px;margin-left: 721px;\">\r\n                                    <app-similar-job></app-similar-job> \r\n                                </div> -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-1\">\r\n                        \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/detail-job/detail-job/detail-job.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/detail-job/detail-job/detail-job.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".desciption {\n  float: left;\n  margin-top: -782px;\n  margin-left: 618px; }\n\n.desciption1 {\n  float: left;\n  margin-top: -367px;\n  margin-left: 633px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsLWpvYi9kZXRhaWwtam9iL0U6XFxXZWJNVkNcXEZyb250ZW5kVUlIXFxGcm9udGVuZFVJSC9zcmNcXGFwcFxcZGV0YWlsLWpvYlxcZGV0YWlsLWpvYlxcZGV0YWlsLWpvYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBRUksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC1qb2IvZGV0YWlsLWpvYi9kZXRhaWwtam9iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NpcHRpb25cclxue1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtNzgycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNjE4cHg7XHJcbn1cclxuLmRlc2NpcHRpb24xXHJcbntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogLTM2N3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYzM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/detail-job/detail-job/detail-job.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/detail-job/detail-job/detail-job.component.ts ***!
  \***************************************************************/
/*! exports provided: DetailJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailJobComponent", function() { return DetailJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/job.service */ "./src/app/service/job.service.ts");




var DetailJobComponent = /** @class */ (function () {
    function DetailJobComponent(jobService, _Activatedroute) {
        this.jobService = jobService;
        this._Activatedroute = _Activatedroute;
        this.listJob = [];
    }
    DetailJobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this._Activatedroute.snapshot.params['id'];
        // alert('xuanVu'+this.id);
        this.jobService.findJob(this.id)
            .subscribe(function (res) {
            _this.listJob = res;
            console.log(res);
        });
    };
    DetailJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-job',
            template: __webpack_require__(/*! ./detail-job.component.html */ "./src/app/detail-job/detail-job/detail-job.component.html"),
            styles: [__webpack_require__(/*! ./detail-job.component.scss */ "./src/app/detail-job/detail-job/detail-job.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailJobComponent);
    return DetailJobComponent;
}());

//Android


/***/ }),

/***/ "./src/app/detail-job/info-job/info-job.component.html":
/*!*************************************************************!*\
  !*** ./src/app/detail-job/info-job/info-job.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g de\">\n  <div class=\"ui-g-12 content\">\n    <div class=\"ui-g\">\n      <div class=\"ui-g-6\">\n        <h3>Các Phúc Lợi Dành Cho Bạn</h3>\n      </div>\n    </div>\n    <div class=\"ui-g\">\n      <div class=\"ui-g-4 detail\" *ngIf=\"item1\">\n          <ul>\n              <li>{{item1.loiIch}}</li>\n          </ul>\n      </div>\n    </div>\n    <div class=\"ui-g\">\n        <div class=\"ui-g-4\">\n          <h3>Mô Tả Công Việc</h3>\n        </div>\n    </div>\n    <div class=\"ui-g\">\n        <div class=\"ui-g-4 detail\">\n            <ul>\n              <li>\n                -\t{{item1.yeuCau}}\n              </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"ui-g\">\n      <div class=\"ui-g-4\">\n        <h3>Yêu Cầu Công Việc</h3>\n      </div>\n    </div>\n    <div class=\"ui-g\">\n        <div class=\"ui-g-6 detail\">\n            <ul>\n                <li>\n                  -\tCó kiến thức cơ bản về ngôn ngữ lập trình Java, ưu tiên các ứng viên đã có kinh nghiệm làm việc thực tế ít nhất 3 tháng trở lên.\n                </li>\n                <li>\n                  -\tTốt nghiệp đại học hoặc tương đương chuyên ngành Công nghệ thông tin/Điện tử viễn thông/Khoa học máy tính/Toán-Tin…\n                </li>\n                <li>\n                  -\tCó khả năng đọc hiểu các tài liệu chuyên ngành tiếng Anh.\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"ui-g\">\n        <div class=\"ui-g-6\">\n            <h3>QUYỀN LỢI VÀ CHẾ ĐỘ ĐÃI NGỘ\t</h3>\n        </div>\n    </div>\n    <div class=\"ui-g\">\n        <div class=\"ui-g-4 detail\">\n            <ul>\n                <li>\n                    {{item1.quyenLoi}}\n                </li>\n               \n            </ul>\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/detail-job/info-job/info-job.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/detail-job/info-job/info-job.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail {\n  margin-top: -17px;\n  padding-left: 30px; }\n\n.content {\n  border: 1px solid; }\n\n.de {\n  background: #fff;\n  margin: 28px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsLWpvYi9pbmZvLWpvYi9FOlxcV2ViTVZDXFxGcm9udGVuZFVJSFxcRnJvbnRlbmRVSUgvc3JjXFxhcHBcXGRldGFpbC1qb2JcXGluZm8tam9iXFxpbmZvLWpvYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFFSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWwtam9iL2luZm8tam9iL2luZm8tam9iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG4uY29udGVudFxyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG4uZGV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAyOHB4IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/detail-job/info-job/info-job.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/detail-job/info-job/info-job.component.ts ***!
  \***********************************************************/
/*! exports provided: InfoJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoJobComponent", function() { return InfoJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoJobComponent = /** @class */ (function () {
    function InfoJobComponent() {
    }
    InfoJobComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InfoJobComponent.prototype, "item1", void 0);
    InfoJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-job',
            template: __webpack_require__(/*! ./info-job.component.html */ "./src/app/detail-job/info-job/info-job.component.html"),
            styles: [__webpack_require__(/*! ./info-job.component.scss */ "./src/app/detail-job/info-job/info-job.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoJobComponent);
    return InfoJobComponent;
}());



/***/ }),

/***/ "./src/app/detail-job/panel-job/panel-job.component.html":
/*!***************************************************************!*\
  !*** ./src/app/detail-job/panel-job/panel-job.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <button (click)=\"XXX()\">XXXXXXXXXXXXXXX</button> -->\n<div class=\"ui-g\" >\n    <div class=\"ui-g-12\">\n      <div class=\"ui-g \">\n        <div class=\"ui-g-1\">\n            \n        </div>\n        <div class=\"ui-g-10\">\n            <div class=\"ui-g detail\" style=\"width: 1100px\">\n                <div class=\"ui-g-2\">\n                  <img  src=\"https://images.vietnamworks.com/pictureofcompany/49/10197315.jpg\" alt=\"Jobs FPT Software recruitment\" class=\"logo img-responsive\">\n                </div>\n                <div class=\"ui-g-8\">\n                  <h2 class=\"job-title\">{{item.title}}</h2>\n                  <!-- <a href=\"https://www.vietnamworks.com/jobs-at-fpt-software-e529938-en\" class=\"track-event\" data-evt-type=\"view-other-jobs\">\n                    FPT SOFTWARE\n                  </a> -->\n                  <span class=\"gray-light m-l-xs m-r-xs hidden-xs\">-</span>\n                  <span class=\"pr10\">Chuyên ngành:{{item.level}}</span>\n                  <a class=\"pr10\" itemprop=\"address\" itemscope=\"\" itemtype=\"http://schema.org/PostalAddress\" href=\"https://www.vietnamworks.com/jobs-in-da-nang-v17-en\" title=\"Jobs in Da Nang\">Địa điểm:{{item.location}}</a>\n                \n                  <strong class=\"text-primary text-lg\"> Mức lương:{{item.maxSalary}}</strong><br>\n                  \n                  <span class=\"expiry gray-light\">Ngày đăng:{{item.endDate}}</span>\n                \n                </div>\n                <div>\n                    <div class=\"ui-g-6\" *ngIf=\"checkApply==true\">\n                        <button pButton type=\"button\" label=\"Đã ứng tuyển\" style=\"width:120px;height:50px;margin-bottom:10px;margin-left:-32px;margin-top: 60px;\"></button>\n  \n                    </div>\n                </div>\n                <div style=\"margin-top: 40px;\">\n                <div class=\"ui-g-6\">\n                   \n\n                    <div *ngIf=\"checkApply==false\">\n                        <button pButton type=\"button\" label=\"Ưng tuyển\" style=\"width: 120px;height: 50px;margin-bottom: 10px;margin-left: -112px;\" (click)=\"showDialog()\" ></button>\n                        <div *ngIf=\"checkSave==true\">\n                          <button pButton type=\"button\" label=\"đã lưu việc làm\" style=\"width: 120px;height: 50px;margin-left: -112px;\"(click)=\"UnSaveWork()\" ></button>\n                        </div>\n                        <div *ngIf=\"checkSave==false\">\n                          <button pButton  type=\"button\" label=\"Lưu việc làm\" style=\"width: 120px;height: 50px;margin-left: -112px;\" (click)=\"SaveWork()\"></button>\n                        </div>\n                    </div>\n                    \n                  <!-- <button pButton type=\"button\" label=\"Lưu việc làm\" style=\"width: 120px;height: 50px;margin-left: -112px;\" ></button> -->\n                </div>\n                </div>\n               \n\n\n\n            </div>\n        </div>\n        <div class=\"ui-g-1\">\n        </div>\n      </div>\n    </div>\n</div>\n\n\n<p-dialog header=\"Nộp CV\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [style]=\"{width: '800px', minWidth: '900px'}\" [minY]=\"70\" [maximizable]=\"true\" [baseZIndex]=\"10000\">\n        <app-apply-job (applyJob)=\"applyJob($event)\" [infoJob]=\"infoJob\" [listCandidate]=\"listCandidate\" ></app-apply-job>\n        <p-footer>\n        \n            <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"ApplyJob()\"   label=\"Yes\"></button>\n            <button type=\"button\" pButton icon=\"pi pi-close\" (click)=\"display=false\" label=\"No\" class=\"ui-button-secondary\"></button>\n        </p-footer>\n</p-dialog>\n\n\n\n"

/***/ }),

/***/ "./src/app/detail-job/panel-job/panel-job.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/detail-job/panel-job/panel-job.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-primary {\n  color: #f7941d;\n  font-weight: 400; }\n\n.gray-light {\n  color: #999 !important; }\n\n.detail {\n  background-color: antiquewhite; }\n\n.detail img {\n  margin-top: 27px; }\n\n.pr10 {\n  padding-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsLWpvYi9wYW5lbC1qb2IvRTpcXFdlYk1WQ1xcRnJvbnRlbmRVSUhcXEZyb250ZW5kVUlIL3NyY1xcYXBwXFxkZXRhaWwtam9iXFxwYW5lbC1qb2JcXHBhbmVsLWpvYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFFSSxzQkFBcUIsRUFBQTs7QUFFekI7RUFFRyw4QkFBOEIsRUFBQTs7QUFHakM7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC1qb2IvcGFuZWwtam9iL3BhbmVsLWpvYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LXByaW1hcnlcclxue1xyXG4gICAgY29sb3I6ICNmNzk0MWQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5ncmF5LWxpZ2h0XHJcbntcclxuICAgIGNvbG9yOiAjOTk5IWltcG9ydGFudDtcclxufVxyXG4uZGV0YWlsXHJcbntcclxuICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gICAgXHJcbn1cclxuLmRldGFpbCBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xyXG5cclxufVxyXG4ucHIxMHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/detail-job/panel-job/panel-job.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/detail-job/panel-job/panel-job.component.ts ***!
  \*************************************************************/
/*! exports provided: PanelJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelJobComponent", function() { return PanelJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/job.service */ "./src/app/service/job.service.ts");
/* harmony import */ var src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/candidate.service */ "./src/app/service/candidate.service.ts");
/* harmony import */ var src_app_models_saveJob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/saveJob */ "./src/app/models/saveJob.ts");
/* harmony import */ var src_app_service_socket_io_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/socket-io.service */ "./src/app/service/socket-io.service.ts");






var PanelJobComponent = /** @class */ (function () {
    function PanelJobComponent(soketIo, jobService, candidateService) {
        this.soketIo = soketIo;
        this.jobService = jobService;
        this.candidateService = candidateService;
        this.checkSave = false;
        this.checkApply = false;
        this.display = false;
        this.conCac = [];
    }
    PanelJobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AJ = new src_app_models_saveJob__WEBPACK_IMPORTED_MODULE_4__["SaveJob"]();
        this.Lisa = new src_app_models_saveJob__WEBPACK_IMPORTED_MODULE_4__["SaveJob"]();
        if (this.candidateService.IsLogged() == true) {
            this.x = new src_app_models_saveJob__WEBPACK_IMPORTED_MODULE_4__["SaveJob"]();
            this.x.idJob = this.item.idJob;
            this.x.idUser = this.candidateService.getId();
            this.jobService.checkSaveJob(this.x)
                .subscribe(function (res) {
                if (res == "OK") {
                    _this.checkSave = true;
                }
                else {
                    _this.checkSave = false;
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
    PanelJobComponent.prototype.showDialog = function () {
        var _this = this;
        if (this.candidateService.IsLogged() == true) {
            // this.display = true;
            this.jobService.getInfoCandidate(this.candidateService.getId())
                .subscribe(function (res) {
                console.log(res[0].xacNhan);
                if (res[0].xacNhan == true) {
                    _this.jobService.getCV(_this.candidateService.getId())
                        .subscribe(function (res) {
                        _this.cv = res;
                        // alert(this.cv);
                        _this.AJ.idJob = _this.item.idJob;
                        _this.AJ.idUser = _this.candidateService.getId();
                        _this.AJ.tinhTrang = 0;
                        _this.AJ.filePdf = _this.cv;
                        _this.AJ.ApplyJob = true;
                        _this.jobService.applyJob(_this.AJ).subscribe(function (res) {
                            _this.checkSave = true;
                            _this.checkApply = true;
                            alert('allpy thanh cong');
                            _this.jobService.sendEmail(_this.AJ)
                                .subscribe(function (res) {
                            });
                            _this.soketIo.emit("ApplyJob6", "1");
                        });
                    });
                    // this.jobService.applyJob(this.AJ).subscribe(res =>{
                    // this.checkSave=true;
                    // alert('allpy thanh cong');
                    // });
                }
                else {
                    alert('Vui long chờ xác nhận CV trước khi thực hiện nộp đơn');
                }
            });
            // this.jobService.getInfoCandidate(this.candidateService.getId())
            // .subscribe(res =>{
            //   this.listCandidate=res;
            // });
        }
        else {
            alert('Vui long dang nhap vap he thong');
        }
        this.infoJob = this.item;
    };
    PanelJobComponent.prototype.ApplyJob = function () {
        var _this = this;
        if (this.candidateService.IsLogged() == true) {
            this.x = new src_app_models_saveJob__WEBPACK_IMPORTED_MODULE_4__["SaveJob"]();
            this.x.idJob = this.item.idJob;
            this.x.idUser = this.candidateService.getId();
            this.jobService.applyJob(this.x)
                .subscribe(function (res) {
                alert("Nop don ung tuyen thanh cong");
                _this.checkApply = true;
            });
        }
        else {
            alert('Vui long dang nhap he thong');
        }
    };
    PanelJobComponent.prototype.SaveWork = function () {
        var _this = this;
        if (this.candidateService.IsLogged() == true) {
            this.x = new src_app_models_saveJob__WEBPACK_IMPORTED_MODULE_4__["SaveJob"]();
            this.x.idJob = this.item.idJob;
            this.x.idUser = this.candidateService.getId();
            this.jobService.saveJob(this.x)
                .subscribe(function (res) {
                _this.checkSave = true;
            });
        }
        else {
            alert('Vui long dang nhap he thong');
        }
    };
    PanelJobComponent.prototype.UnSaveWork = function () {
        var _this = this;
        if (this.candidateService.IsLogged() == true) {
            this.x = new src_app_models_saveJob__WEBPACK_IMPORTED_MODULE_4__["SaveJob"]();
            this.x.idJob = this.item.idJob;
            this.x.idUser = this.candidateService.getId();
            this.jobService.unCheckSaveJob(this.x)
                .subscribe(function (res) {
                _this.checkSave = false;
            });
        }
        else {
            alert('Vui long dang nhap vao he thong');
        }
    };
    PanelJobComponent.prototype.applyJob = function (x) {
        var _this = this;
        //luc nay se dua du lieu vao trong he thong
        this.AJ.idJob = this.item.idJob;
        this.AJ.idUser = this.candidateService.getId();
        this.AJ.tinhTrang = x.tinhTrang;
        this.AJ.filePdf = x.filePdf;
        this.AJ.ApplyJob = true;
        console.log(this.AJ);
        // gui mail vs gia tri nay
        this.jobService.sendEmail(this.AJ)
            .subscribe(function (res) {
        });
        this.soketIo.emit("ApplyJob6", "1");
        this.jobService.applyJob(this.AJ)
            .subscribe(function (res) {
            _this.checkSave = true;
            alert('allpy thanh cong');
            _this.checkApply = true;
            //  this.display=false;
        });
        //  this.jobService.sendEmail(this.Lisa)
        //  .subscribe(res =>{
        // });
    };
    PanelJobComponent.prototype.XXX = function () {
        this.soketIo.emit("ApplyJob6", "61");
        // alert("conCac");
        this.Lisa = new src_app_models_saveJob__WEBPACK_IMPORTED_MODULE_4__["SaveJob"]();
        this.Lisa.idJob = 6;
        this.Lisa.idUser = 1;
        this.Lisa.filePdf = "https://2sao.vietnamnetjsc.vn/images/2019/05/15/10/56/blackpink-ariana-grande-coachella.jpg";
        this.jobService.sendEmail(this.Lisa)
            .subscribe(function (res) {
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PanelJobComponent.prototype, "item", void 0);
    PanelJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-panel-job',
            template: __webpack_require__(/*! ./panel-job.component.html */ "./src/app/detail-job/panel-job/panel-job.component.html"),
            styles: [__webpack_require__(/*! ./panel-job.component.scss */ "./src/app/detail-job/panel-job/panel-job.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_socket_io_service__WEBPACK_IMPORTED_MODULE_5__["SocketIoService"], src_app_service_job_service__WEBPACK_IMPORTED_MODULE_2__["JobService"], src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_3__["CandidateService"]])
    ], PanelJobComponent);
    return PanelJobComponent;
}());



/***/ }),

/***/ "./src/app/detail-job/similar-job/similar-job.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/detail-job/similar-job/similar-job.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-8 detail\">\n        <div class=\"ui-g\">\n            <div class=\"ui-g-8\">\n              <h2 style=\"text-align: center;margin-left: 139px\">Công việc tương tự</h2>\n            </div>\n        </div>\n        <div class=\"ui-g \">\n            <div class=\"ui-g-8 mouse\">\n                <img class=\"logo\" src=\"https://images.vietnamworks.com/pictureofcompany/36/10243665.png\" alt=\"Develop .Net &amp; Mobile (Up to 1250$)\">\n                <div class=\"bottom top\">\n                  <span class=\"content-label\">Develop .Net & Mobile (Up to 1250$)</span><br>\n                  <span class=\"content\">Công Ty Cổ Phần Phúc Thành Việt Nam</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"ui-g\">\n            <div class=\"ui-g-8\">\n                <img class=\"logo\" src=\"https://images.vietnamworks.com/pictureofcompany/f3/10778541.png\" alt=\"Tuyển Lập Trình C++/c# / Opencv\">\n                <div class=\"bottom\">\n                    <span class=\"content-label\">Tuyển Lập Trình C++/c# / Opencv</span><br>\n                    <span class=\"content\">Trung Tâm Ứng Dụng Công Nghệ Thông Tin - Đại Học Quốc Gia Hà Nội</span>\n                 </div>\n            </div>\n        </div>\n        <div class=\"ui-g\">\n            <div class=\"ui-g-8\">\n                <img class=\"img-responsive logo\" src=\"https://images.vietnamworks.com/pictureofcompany/05/10296743.png\" alt=\"[HCM &amp; HN] Senior Software Engineer (.NET)\">\n                <div class=\"bottom\">\n                    <span class=\"content-label\">[HCM & HN] Senior Software Engineer (.NET)</span><br>\n                    <span class=\"content\">NashTech</span>\n                 </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/detail-job/similar-job/similar-job.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/detail-job/similar-job/similar-job.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  float: left;\n  width: 100px;\n  height: 50px;\n  margin-top: -8px; }\n\n.detail {\n  border: 1px solid;\n  width: 570px; }\n\n.bottom {\n  border-bottom: 1px solid;\n  width: 545px;\n  height: 76px; }\n\n.top {\n  border-top: 1px solid;\n  margin-top: -19px;\n  padding-top: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsLWpvYi9zaW1pbGFyLWpvYi9FOlxcV2ViTVZDXFxGcm9udGVuZFVJSFxcRnJvbnRlbmRVSUgvc3JjXFxhcHBcXGRldGFpbC1qb2JcXHNpbWlsYXItam9iXFxzaW1pbGFyLWpvYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUVwQjtFQUVJLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBRWhCO0VBRUksd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBRWhCO0VBRUkscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC1qb2Ivc2ltaWxhci1qb2Ivc2ltaWxhci1qb2IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb1xyXG57XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbn1cclxuLmRldGFpbFxyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIHdpZHRoOiA1NzBweDtcclxufVxyXG4uYm90dG9tXHJcbntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIHdpZHRoOiA1NDVweDtcclxuICAgIGhlaWdodDogNzZweDtcclxufVxyXG4udG9wXHJcbntcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcclxuICAgIG1hcmdpbi10b3A6IC0xOXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE0cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/detail-job/similar-job/similar-job.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/detail-job/similar-job/similar-job.component.ts ***!
  \*****************************************************************/
/*! exports provided: SimilarJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarJobComponent", function() { return SimilarJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SimilarJobComponent = /** @class */ (function () {
    function SimilarJobComponent() {
    }
    SimilarJobComponent.prototype.ngOnInit = function () {
    };
    SimilarJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-similar-job',
            template: __webpack_require__(/*! ./similar-job.component.html */ "./src/app/detail-job/similar-job/similar-job.component.html"),
            styles: [__webpack_require__(/*! ./similar-job.component.scss */ "./src/app/detail-job/similar-job/similar-job.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SimilarJobComponent);
    return SimilarJobComponent;
}());



/***/ })

}]);
//# sourceMappingURL=detail-job-detail-job-module.js.map