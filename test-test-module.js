(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-test-module"],{

/***/ "./node_modules/html-to-image/lib/applyStyleWithOptions.js":
/*!*****************************************************************!*\
  !*** ./node_modules/html-to-image/lib/applyStyleWithOptions.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function applyStyleWithOptions(clonedNode, options) {
    var style = clonedNode.style;
    if (options.backgroundColor) {
        style.backgroundColor = options.backgroundColor;
    }
    if (options.width) {
        style.width = options.width + "px";
    }
    if (options.height) {
        style.height = options.height + "px";
    }
    if (options.style) {
        Object.assign(style, options.style);
    }
    return clonedNode;
}
exports.default = applyStyleWithOptions;


/***/ }),

/***/ "./node_modules/html-to-image/lib/cloneNode.js":
/*!*****************************************************!*\
  !*** ./node_modules/html-to-image/lib/cloneNode.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
var clonePseudoElements_1 = __importDefault(__webpack_require__(/*! ./clonePseudoElements */ "./node_modules/html-to-image/lib/clonePseudoElements.js"));
function cloneSingleNode(nativeNode) {
    if (nativeNode instanceof HTMLCanvasElement) {
        return utils_1.createImage(nativeNode.toDataURL());
    }
    if (nativeNode.tagName && nativeNode.tagName.toLowerCase() === 'svg') {
        return Promise.resolve(nativeNode)
            .then(function (svg) { return utils_1.svgToDataURL(svg); })
            .then(utils_1.createImage);
    }
    return Promise.resolve(nativeNode.cloneNode(false));
}
function cloneChildren(nativeNode, clonedNode, filter) {
    var children = utils_1.toArray(nativeNode.childNodes);
    if (children.length === 0) {
        return Promise.resolve(clonedNode);
    }
    // clone children in order
    return children.reduce(function (done, child) { return done
        .then(function () { return cloneNode(child, filter); })
        .then(function (clonedChild) {
        if (clonedChild) {
            clonedNode.appendChild(clonedChild);
        }
    }); }, Promise.resolve())
        .then(function () { return clonedNode; });
}
function cloneCssStyle(nativeNode, clonedNode) {
    var source = window.getComputedStyle(nativeNode);
    var target = clonedNode.style;
    if (source.cssText) {
        target.cssText = source.cssText;
    }
    else {
        utils_1.toArray(source).forEach(function (name) {
            target.setProperty(name, source.getPropertyValue(name), source.getPropertyPriority(name));
        });
    }
}
function cloneInputValue(nativeNode, clonedNode) {
    if (nativeNode instanceof HTMLTextAreaElement) {
        clonedNode.innerHTML = nativeNode.value;
    }
    if (nativeNode instanceof HTMLInputElement) {
        clonedNode.setAttribute('value', nativeNode.value);
    }
}
function decorate(nativeNode, clonedNode) {
    if (!(clonedNode instanceof Element)) {
        return clonedNode;
    }
    return Promise.resolve()
        .then(function () { return cloneCssStyle(nativeNode, clonedNode); })
        .then(function () { return clonePseudoElements_1.default(nativeNode, clonedNode); })
        .then(function () { return cloneInputValue(nativeNode, clonedNode); })
        .then(function () { return clonedNode; });
}
function cloneNode(domNode, filter, isRoot) {
    if (!isRoot && filter && !filter(domNode)) {
        return Promise.resolve(null);
    }
    return Promise.resolve(domNode)
        .then(cloneSingleNode)
        .then(function (clonedNode) { return cloneChildren(domNode, clonedNode, filter); })
        .then(function (clonedNode) { return decorate(domNode, clonedNode); });
}
exports.default = cloneNode;


/***/ }),

/***/ "./node_modules/html-to-image/lib/clonePseudoElements.js":
/*!***************************************************************!*\
  !*** ./node_modules/html-to-image/lib/clonePseudoElements.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
function formatCssText(style) {
    var content = style.getPropertyValue('content');
    return style.cssText + " content: " + content + ";";
}
function formatCssProperties(style) {
    return utils_1.toArray(style).map(function (name) {
        var value = style.getPropertyValue(name);
        var priority = style.getPropertyPriority(name);
        return name + ": " + value + (priority ? ' !important' : '') + ";";
    }).join(' ');
}
function getPseudoElementStyle(className, pseudo, style) {
    var selector = "." + className + ":" + pseudo;
    var cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
    return document.createTextNode(selector + "{" + cssText + "}");
}
function clonePseudoElement(nativeNode, clonedNode, pseudo) {
    var style = window.getComputedStyle(nativeNode, pseudo);
    var content = style.getPropertyValue('content');
    if (content === '' || content === 'none') {
        return;
    }
    var className = utils_1.uuid();
    var styleElement = document.createElement('style');
    styleElement.appendChild(getPseudoElementStyle(className, pseudo, style));
    clonedNode.className = clonedNode.className + " " + className;
    clonedNode.appendChild(styleElement);
}
function clonePseudoElements(nativeNode, clonedNode) {
    [
        ':before',
        ':after',
    ].forEach(function (pseudo) { return clonePseudoElement(nativeNode, clonedNode, pseudo); });
}
exports.default = clonePseudoElements;


/***/ }),

/***/ "./node_modules/html-to-image/lib/createSvgDataURL.js":
/*!************************************************************!*\
  !*** ./node_modules/html-to-image/lib/createSvgDataURL.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
function createSvgDataURL(clonedNode, width, height) {
    var xmlns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(xmlns, 'svg');
    var foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttributeNS('', 'width', "" + width);
    svg.setAttributeNS('', 'height', "" + height);
    foreignObject.setAttributeNS('', 'width', '100%');
    foreignObject.setAttributeNS('', 'height', '100%');
    foreignObject.setAttributeNS('', 'x', '0');
    foreignObject.setAttributeNS('', 'y', '0');
    foreignObject.setAttributeNS('', 'externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);
    foreignObject.appendChild(clonedNode);
    return utils_1.svgToDataURL(svg);
}
exports.default = createSvgDataURL;


/***/ }),

/***/ "./node_modules/html-to-image/lib/embedImages.js":
/*!*******************************************************!*\
  !*** ./node_modules/html-to-image/lib/embedImages.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
var getBlobFromURL_1 = __importDefault(__webpack_require__(/*! ./getBlobFromURL */ "./node_modules/html-to-image/lib/getBlobFromURL.js"));
var embedResources_1 = __importDefault(__webpack_require__(/*! ./embedResources */ "./node_modules/html-to-image/lib/embedResources.js"));
function embedBackground(clonedNode, options) {
    var background = clonedNode.style.getPropertyValue('background');
    if (!background) {
        return Promise.resolve(clonedNode);
    }
    return Promise.resolve(background)
        .then(function (cssString) { return embedResources_1.default(cssString, null, options); })
        .then(function (cssString) {
        clonedNode.style.setProperty('background', cssString, clonedNode.style.getPropertyPriority('background'));
        return clonedNode;
    });
}
function embedImageNode(clonedNode, options) {
    if (!(clonedNode instanceof HTMLImageElement) || utils_1.isDataUrl(clonedNode.src)) {
        return Promise.resolve(clonedNode);
    }
    return Promise.resolve(clonedNode.src)
        .then(function (url) { return getBlobFromURL_1.default(url, options); })
        .then(function (data) { return utils_1.toDataURL(data, utils_1.getMimeType(clonedNode.src)); })
        .then(function (dataURL) { return new Promise((function (resolve, reject) {
        clonedNode.onload = resolve;
        clonedNode.onerror = reject;
        clonedNode.src = dataURL;
    })); })
        .then(function () { return clonedNode; }, function () { return clonedNode; });
}
function embedChildren(clonedNode, options) {
    var children = utils_1.toArray(clonedNode.childNodes);
    var deferreds = children.map(function (child) { return embedImages(child, options); });
    return Promise.all(deferreds).then(function () { return clonedNode; });
}
function embedImages(clonedNode, options) {
    if (!(clonedNode instanceof Element)) {
        return Promise.resolve(clonedNode);
    }
    return Promise.resolve(clonedNode)
        .then(function (node) { return embedBackground(node, options); })
        .then(function (node) { return embedImageNode(node, options); })
        .then(function (node) { return embedChildren(node, options); });
}
exports.default = embedImages;


/***/ }),

/***/ "./node_modules/html-to-image/lib/embedResources.js":
/*!**********************************************************!*\
  !*** ./node_modules/html-to-image/lib/embedResources.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getBlobFromURL_1 = __importDefault(__webpack_require__(/*! ./getBlobFromURL */ "./node_modules/html-to-image/lib/getBlobFromURL.js"));
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
var URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
function resolveUrl(url, baseUrl) {
    // url is absolute already
    if (url.match(/^[a-z]+:\/\//i)) {
        return url;
    }
    // url is absolute already, without protocol
    if (url.match(/^\/\//)) {
        return window.location.protocol + url;
    }
    // dataURI, mailto:, tel:, etc.
    if (url.match(/^[a-z]+:/i)) {
        return url;
    }
    var doc = document.implementation.createHTMLDocument();
    var base = doc.createElement('base');
    var a = doc.createElement('a');
    doc.head.appendChild(base);
    doc.body.appendChild(a);
    if (baseUrl) {
        base.href = baseUrl;
    }
    a.href = url;
    return a.href;
}
function escape(url) {
    return url.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
}
function urlToRegex(url) {
    return new RegExp("(url\\(['\"]?)(" + escape(url) + ")(['\"]?\\))", 'g');
}
function parseURLs(str) {
    var result = [];
    str.replace(URL_REGEX, function (raw, quotation, url) {
        result.push(url);
        return raw;
    });
    return result.filter(function (url) { return !utils_1.isDataUrl(url); });
}
function embed(cssString, resourceURL, baseURL, options) {
    var resolvedURL = baseURL ? resolveUrl(resourceURL, baseURL) : resourceURL;
    return Promise.resolve(resolvedURL)
        .then(function (url) { return getBlobFromURL_1.default(url, options); })
        .then(function (data) { return utils_1.toDataURL(data, utils_1.getMimeType(resourceURL)); })
        .then(function (dataURL) { return cssString.replace(urlToRegex(resourceURL), "$1" + dataURL + "$3"); })
        .then(function (content) { return content; }, function () { return resolvedURL; });
}
function shouldEmbed(string) {
    return string.search(URL_REGEX) !== -1;
}
exports.shouldEmbed = shouldEmbed;
function embedResources(cssString, baseUrl, options) {
    if (!shouldEmbed(cssString)) {
        return Promise.resolve(cssString);
    }
    return Promise.resolve(cssString)
        .then(parseURLs)
        .then(function (urls) { return urls.reduce(function (done, url) { return done.then(function (ret) { return embed(ret, url, baseUrl, options); }); }, Promise.resolve(cssString)); });
}
exports.default = embedResources;


/***/ }),

/***/ "./node_modules/html-to-image/lib/embedWebFonts.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-to-image/lib/embedWebFonts.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
var embedResources_1 = __importStar(__webpack_require__(/*! ./embedResources */ "./node_modules/html-to-image/lib/embedResources.js"));
function getCssRules(styleSheets) {
    var ret = [];
    styleSheets.forEach(function (sheet) {
        if (sheet.hasOwnProperty('cssRules')) {
            try {
                utils_1.toArray(sheet.cssRules).forEach(function (item) {
                    ret.push(item);
                });
            }
            catch (e) {
                console.log("Error while reading CSS rules from " + sheet.href, e.toString());
            }
        }
    });
    return ret;
}
function getWebFontRules(cssRules) {
    return cssRules
        .filter(function (rule) { return rule.type === CSSRule.FONT_FACE_RULE; })
        .filter(function (rule) { return embedResources_1.shouldEmbed(rule.style.getPropertyValue('src')); });
}
function parseWebFontRules(clonedNode) {
    return new Promise(function (resolve, reject) {
        if (!clonedNode.ownerDocument) {
            reject(new Error('Provided element is not within a Document'));
        }
        resolve(utils_1.toArray(clonedNode.ownerDocument.styleSheets));
    })
        .then(getCssRules)
        .then(getWebFontRules);
}
exports.parseWebFontRules = parseWebFontRules;
function embedWebFonts(clonedNode, options) {
    return parseWebFontRules(clonedNode)
        .then(function (rules) { return Promise.all(rules.map(function (rule) {
        var baseUrl = rule.parentStyleSheet ? rule.parentStyleSheet.href : null;
        return embedResources_1.default(rule.cssText, baseUrl, options);
    })); })
        .then(function (cssStrings) { return cssStrings.join('\n'); })
        .then(function (cssString) {
        var styleNode = document.createElement('style');
        var sytleContent = document.createTextNode(cssString);
        styleNode.appendChild(sytleContent);
        if (clonedNode.firstChild) {
            clonedNode.insertBefore(styleNode, clonedNode.firstChild);
        }
        else {
            clonedNode.appendChild(styleNode);
        }
        return clonedNode;
    });
}
exports.default = embedWebFonts;


/***/ }),

/***/ "./node_modules/html-to-image/lib/getBlobFromURL.js":
/*!**********************************************************!*\
  !*** ./node_modules/html-to-image/lib/getBlobFromURL.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:max-line-length */
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
// KNOWN ISSUE
// -----------
// Can not handle redirect-url, such as when access 'http://something.com/avatar.png'
// will redirect to 'http://something.com/65fc2ffcc8aea7ba65a1d1feda173540'
var TIMEOUT = 30000;
function getBlobFromURL(url, options) {
    // cache bypass so we dont have CORS issues with cached images
    // ref: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
    if (options.cacheBust) {
        url += ((/\?/).test(url) ? '&' : '?') + (new Date()).getTime(); // tslint:disable-line
    }
    var failed = function (reason) {
        var placeholder = '';
        if (options.imagePlaceholder) {
            var split = options.imagePlaceholder.split(/,/);
            if (split && split[1]) {
                placeholder = split[1];
            }
        }
        var msg = "Failed to fetch resource: " + url;
        if (reason) {
            msg = typeof reason === 'string' ? reason : reason.message;
        }
        if (msg) {
            console.error(msg);
        }
        return placeholder;
    };
    var deferred = window.fetch
        // fetch
        ? window.fetch(url)
            .then(function (response) { return response.blob(); })
            .then(function (blob) { return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onloadend = function () { return resolve(reader.result); };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        }); })
            .then(utils_1.getDataURLContent)
            .catch(function () { return new Promise(function (resolve, reject) {
            reject();
        }); })
        // xhr
        : new Promise((function (resolve, reject) {
            var req = new XMLHttpRequest();
            var timeout = function () {
                reject(new Error("Timeout of " + TIMEOUT + "ms occured while fetching resource: " + url));
            };
            var done = function () {
                if (req.readyState !== 4) {
                    return;
                }
                if (req.status !== 200) {
                    reject(new Error("Failed to fetch resource: " + url + ", status: " + req.status));
                    return;
                }
                var encoder = new FileReader();
                encoder.onloadend = function () {
                    resolve(utils_1.getDataURLContent(encoder.result));
                };
                encoder.readAsDataURL(req.response);
            };
            req.onreadystatechange = done;
            req.ontimeout = timeout;
            req.responseType = 'blob';
            req.timeout = TIMEOUT;
            req.open('GET', url, true);
            req.send();
        }));
    return deferred.catch(failed);
}
exports.default = getBlobFromURL;


/***/ }),

/***/ "./node_modules/html-to-image/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-to-image/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cloneNode_1 = __importDefault(__webpack_require__(/*! ./cloneNode */ "./node_modules/html-to-image/lib/cloneNode.js"));
var embedWebFonts_1 = __importDefault(__webpack_require__(/*! ./embedWebFonts */ "./node_modules/html-to-image/lib/embedWebFonts.js"));
var embedImages_1 = __importDefault(__webpack_require__(/*! ./embedImages */ "./node_modules/html-to-image/lib/embedImages.js"));
var createSvgDataURL_1 = __importDefault(__webpack_require__(/*! ./createSvgDataURL */ "./node_modules/html-to-image/lib/createSvgDataURL.js"));
var applyStyleWithOptions_1 = __importDefault(__webpack_require__(/*! ./applyStyleWithOptions */ "./node_modules/html-to-image/lib/applyStyleWithOptions.js"));
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
function getImageSize(domNode, options) {
    if (options === void 0) { options = {}; }
    var width = options.width || utils_1.getNodeWidth(domNode);
    var height = options.height || utils_1.getNodeHeight(domNode);
    return { width: width, height: height };
}
function toSvgDataURL(domNode, options) {
    if (options === void 0) { options = {}; }
    var _a = getImageSize(domNode, options), width = _a.width, height = _a.height;
    return cloneNode_1.default(domNode, options.filter, true)
        .then(function (clonedNode) { return embedWebFonts_1.default(clonedNode, options); })
        .then(function (clonedNode) { return embedImages_1.default(clonedNode, options); })
        .then(function (clonedNode) { return applyStyleWithOptions_1.default(clonedNode, options); })
        .then(function (clonedNode) { return createSvgDataURL_1.default(clonedNode, width, height); });
}
exports.toSvgDataURL = toSvgDataURL;
function toCanvas(domNode, options) {
    if (options === void 0) { options = {}; }
    return toSvgDataURL(domNode, options)
        .then(utils_1.createImage)
        .then(utils_1.delay(100))
        .then(function (image) {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var ratio = utils_1.getPixelRatio();
        var _a = getImageSize(domNode, options), width = _a.width, height = _a.height;
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = "" + width;
        canvas.style.height = "" + height;
        context.scale(ratio, ratio);
        if (options.backgroundColor) {
            context.fillStyle = options.backgroundColor;
            context.fillRect(0, 0, canvas.width, canvas.height);
        }
        context.drawImage(image, 0, 0);
        return canvas;
    });
}
exports.toCanvas = toCanvas;
function toPixelData(domNode, options) {
    if (options === void 0) { options = {}; }
    var _a = getImageSize(domNode, options), width = _a.width, height = _a.height;
    return toCanvas(domNode, options)
        .then(function (canvas) { return (canvas.getContext('2d').getImageData(0, 0, width, height).data); });
}
exports.toPixelData = toPixelData;
function toPng(domNode, options) {
    if (options === void 0) { options = {}; }
    return toCanvas(domNode, options).then(function (canvas) { return (canvas.toDataURL()); });
}
exports.toPng = toPng;
function toJpeg(domNode, options) {
    if (options === void 0) { options = {}; }
    return toCanvas(domNode, options).then(function (canvas) { return (canvas.toDataURL('image/jpeg', options.quality || 1)); });
}
exports.toJpeg = toJpeg;
function toBlob(domNode, options) {
    if (options === void 0) { options = {}; }
    return toCanvas(domNode, options).then(utils_1.canvasToBlob);
}
exports.toBlob = toBlob;


/***/ }),

/***/ "./node_modules/html-to-image/lib/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/html-to-image/lib/utils.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WOFF = 'application/font-woff';
var JPEG = 'image/jpeg';
var mimes = {
    woff: WOFF,
    woff2: WOFF,
    ttf: 'application/font-truetype',
    eot: 'application/vnd.ms-fontobject',
    png: 'image/png',
    jpg: JPEG,
    jpeg: JPEG,
    gif: 'image/gif',
    tiff: 'image/tiff',
    svg: 'image/svg+xml',
};
exports.uuid = (function uuid() {
    // generate uuid for className of pseudo elements.
    // We should not use GUIDs, otherwise pseudo elements sometimes cannot be captured.
    var counter = 0;
    // ref: http://stackoverflow.com/a/6248722/2519373
    var randomFourChars = function () {
        return ("0000" + (Math.random() * (Math.pow(36, 4)) << 0).toString(36)).slice(-4);
    };
    return function () {
        counter += 1;
        return "u" + randomFourChars() + counter;
    };
}());
function parseExtension(url) {
    var match = /\.([^./]*?)$/g.exec(url);
    if (match)
        return match[1];
    return '';
}
exports.parseExtension = parseExtension;
function getMimeType(url) {
    var ext = parseExtension(url).toLowerCase();
    return mimes[ext] || '';
}
exports.getMimeType = getMimeType;
function delay(ms) {
    return function (args) { return new Promise((function (resolve) {
        setTimeout(function () {
            resolve(args);
        }, ms);
    })); };
}
exports.delay = delay;
function createImage(url) {
    return new Promise((function (resolve, reject) {
        var image = new Image();
        image.onload = function () {
            resolve(image);
        };
        image.onerror = reject;
        image.crossOrigin = 'anonymous';
        image.src = url;
    }));
}
exports.createImage = createImage;
function isDataUrl(url) {
    return url.search(/^(data:)/) !== -1;
}
exports.isDataUrl = isDataUrl;
function toDataURL(content, mimeType) {
    return "data:" + mimeType + ";base64," + content;
}
exports.toDataURL = toDataURL;
function getDataURLContent(dataURL) {
    return dataURL.split(/,/)[1];
}
exports.getDataURLContent = getDataURLContent;
function toBlob(canvas) {
    return new Promise((function (resolve) {
        var binaryString = window.atob(canvas.toDataURL().split(',')[1]);
        var len = binaryString.length;
        var binaryArray = new Uint8Array(len);
        for (var i = 0; i < len; i += 1) {
            binaryArray[i] = binaryString.charCodeAt(i);
        }
        resolve(new Blob([binaryArray], {
            type: 'image/png',
        }));
    }));
}
function canvasToBlob(canvas) {
    if (canvas.toBlob) {
        return new Promise((function (resolve) {
            canvas.toBlob(resolve);
        }));
    }
    return toBlob(canvas);
}
exports.canvasToBlob = canvasToBlob;
function toArray(arrayLike) {
    var arr = [];
    for (var i = 0, l = arrayLike.length; i < l; i += 1) {
        arr.push(arrayLike[i]);
    }
    return arr;
}
exports.toArray = toArray;
function px(node, styleProperty) {
    var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
    return parseFloat(value.replace('px', ''));
}
function getNodeWidth(node) {
    var leftBorder = px(node, 'border-left-width');
    var rightBorder = px(node, 'border-right-width');
    return node.scrollWidth + leftBorder + rightBorder;
}
exports.getNodeWidth = getNodeWidth;
function getNodeHeight(node) {
    var topBorder = px(node, 'border-top-width');
    var bottomBorder = px(node, 'border-bottom-width');
    return node.scrollHeight + topBorder + bottomBorder;
}
exports.getNodeHeight = getNodeHeight;
function getPixelRatio() {
    return (window.devicePixelRatio || 1);
}
exports.getPixelRatio = getPixelRatio;
function svgToDataURL(svg) {
    return Promise.resolve()
        .then(function () { return new XMLSerializer().serializeToString(svg); })
        .then(encodeURIComponent)
        .then(function (html) { return "data:image/svg+xml;charset=utf-8," + html; });
}
exports.svgToDataURL = svgToDataURL;
function getBlobFromImageURL(url) {
    return createImage(url).then(function (image) {
        var width = image.width, height = image.height;
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var ratio = getPixelRatio();
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = "" + width;
        canvas.style.height = "" + height;
        context.scale(ratio, ratio);
        context.drawImage(image, 0, 0);
        var dataURL = canvas.toDataURL(getMimeType(url));
        return getDataURLContent(dataURL);
    });
}
exports.getBlobFromImageURL = getBlobFromImageURL;


/***/ }),

/***/ "./src/app/models/BangCap.ts":
/*!***********************************!*\
  !*** ./src/app/models/BangCap.ts ***!
  \***********************************/
/*! exports provided: bangCap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bangCap", function() { return bangCap; });
var bangCap = /** @class */ (function () {
    function bangCap() {
    }
    return bangCap;
}());



/***/ }),

/***/ "./src/app/models/Experience.ts":
/*!**************************************!*\
  !*** ./src/app/models/Experience.ts ***!
  \**************************************/
/*! exports provided: expericen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expericen", function() { return expericen; });
var expericen = /** @class */ (function () {
    function expericen() {
    }
    return expericen;
}());



/***/ }),

/***/ "./src/app/models/HocVan.ts":
/*!**********************************!*\
  !*** ./src/app/models/HocVan.ts ***!
  \**********************************/
/*! exports provided: hocVan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hocVan", function() { return hocVan; });
var hocVan = /** @class */ (function () {
    function hocVan() {
    }
    return hocVan;
}());



/***/ }),

/***/ "./src/app/models/Langugae.ts":
/*!************************************!*\
  !*** ./src/app/models/Langugae.ts ***!
  \************************************/
/*! exports provided: languge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languge", function() { return languge; });
var languge = /** @class */ (function () {
    function languge() {
    }
    return languge;
}());



/***/ }),

/***/ "./src/app/test/test-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/test/test-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestRoutingModule", function() { return TestRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test/test.component.ts");




var routes = [
    { path: '', component: _test_test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"] },
];
var TestRoutingModule = /** @class */ (function () {
    function TestRoutingModule() {
    }
    TestRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TestRoutingModule);
    return TestRoutingModule;
}());



/***/ }),

/***/ "./src/app/test/test.module.ts":
/*!*************************************!*\
  !*** ./src/app/test/test.module.ts ***!
  \*************************************/
/*! exports provided: TestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestModule", function() { return TestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-routing.module */ "./src/app/test/test-routing.module.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test/test.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_rating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-rating */ "./node_modules/ngx-rating/index.js");
/* harmony import */ var ngx_rating__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_rating__WEBPACK_IMPORTED_MODULE_9__);










var TestModule = /** @class */ (function () {
    function TestModule() {
    }
    TestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_test_test_component__WEBPACK_IMPORTED_MODULE_4__["TestComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _test_routing_module__WEBPACK_IMPORTED_MODULE_3__["TestRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarModule"],
                ngx_rating__WEBPACK_IMPORTED_MODULE_9__["RatingModule"],
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__["RadioButtonModule"],
            ]
        })
    ], TestModule);
    return TestModule;
}());



/***/ }),

/***/ "./src/app/test/test/test.component.html":
/*!***********************************************!*\
  !*** ./src/app/test/test/test.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Latest compiled and minified CSS -->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css\" integrity=\"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp\" crossorigin=\"anonymous\">\n<!-- Latest compiled and minified JavaScript -->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css\" integrity=\"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp\" crossorigin=\"anonymous\">\n\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/css/bootstrap-datepicker.min.css\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/jquery-bar-rating/1.2.2/themes/fontawesome-stars.min.css\">\n <link rel=\"stylesheet\" href=\"https://fic.vn/HuyNguyen/css/style.css\">\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n<link rel=\"stylesheet\" href=\"./assets/css/style1.css\"> \n<!-- Optional theme -->\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\" integrity=\"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay\" crossorigin=\"anonymous\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<!-- new -->\n<div  class=\"container-fluid\"   >\n  <div class=\"row\" >\n    <div class=\"col-xs-12\">\n      <div class=\"wizard-container\">\n        <div class=\"card wizard-card\" data-color=\"orange\" id=\"wizardProfile\">\n          <!--  start head -->\n          <div  id=\"content\" class=\"step-nav text-center mt1\" >\n            <div class=\"container\">\n              <div class=\"row\">\n                <!-- <div class=\"col-xs-6 col-md-2\">\n                  <button id=\"prevBtn\" class=\"btn btn-nav btn-previous\"><i class=\"fa fa-angle-left mr-half\" aria-hidden=\"true\"></i> Quay lại</button>\n                </div> -->\n                <div class=\"hidden-xs hidden-sm col-md-12\">\n                  <ul class=\"btn-steps\">\n                    <li class=\"active\"><span class=\"btn-step \">1</span><a href=\"#resume\" data-toggle=\"tab\">Thông tin</a></li>\n                    <li class=\"\"><span class=\"btn-step \">2</span><a href=\"#address\" data-toggle=\"tab\" (click)=\"dowload()\" >Dowload</a></li>\n                  </ul>\n                </div>\n                <!-- <div class=\"col-xs-6 col-md-2\">\n                  <input type='button' id=\"previewResumeBtn\" onclick=\"ga('send','event','WowCv', 'previewCV','CreateCV')\" data-toggle=\"tooltip\" data-placement=\"bottom\" class='btn btn-preview btn-fill hidden-xs' value='Xem trước' style=\"display: none\" />\n                  <button id=\"nextBtn\" class=\"btn btn-nav btn-next\">Tiếp theo <i class=\"fa fa-angle-right ml-half\" aria-hidden=\"true\"></i></button>\n                  <input type='button' class='btn btn-finish btn-nav btn-wd' name='finish' value='Kết thúc' />\n                </div> -->\n              </div>\n            </div>\n          </div>\n          <!--  end head -->\n          <!--  tab content -->\n          <div class=\"tab-content\">\n            <div class=\"tab-pane active\" id=\"resume\">\n              <div class=\"row mt2\" >\n                <div class=\"col-sm-3 stickyw hidden-xs \">\n                  <div class=\"row\">\n                    <div class=\"col-sm-12\" >\n                     \n                      \n                      <div *ngIf=\"checkTest1==true\">\n                        <div class=\"tab\" style=\"margin-top:-109px;width: 398px;\" >\n                          <button class=\"tablinks active\" (click)=\"chayngaydi('tabUserInfo')\"  data-tab=\"tabUserInfo\">Thông tin</button>\n                          <button class=\"tablinks\" (click)=\"chayngaydi('tabSummary')\" data-tab=\"tabSummary\">Thông Tin Chung</button>\n                          <button class=\"tablinks\" (click)=\"chayngaydi('tabSkill')\"  data-tab=\"tabSkill\">Kỹ năng</button>\n                          <button class=\"tablinks\" (click)=\"chayngaydi('tabLanguage')\" data-tab=\"tabLanguage\">Ngôn Ngữ</button>\n                          <button class=\"tablinks\" (click)=\"chayngaydi('tabEmploymentHistory')\" data-tab=\"tabEmploymentHistory\">Kinh Nghiệm Làm Việc</button>\n                          <button class=\"tablinks\" (click)=\"chayngaydi('tabEducationHistory')\" data-tab=\"tabEducationHistory\">Học Vấn và Bằng Cấp</button>\n                          <button class=\"tablinks\" (click)=\"chayngaydi('tabReference')\" data-tab=\"tabReference\">Thông Tin Tham Khảo</button>\n                        </div>\n                      </div>\n                      <div *ngIf=\"checkTest1==false\">\n                        <div class=\"tab\" style=\"margin-top:98px;width: 398px;\" >\n                          <button class=\"tablinks active\" (click)=\"chayngaydi('tabUserInfo')\"  data-tab=\"tabUserInfo\">Thông tin</button>\n                          <button class=\"tablinks\" (click)=\"chayngaydi('tabSummary')\" data-tab=\"tabSummary\">Thông Tin Chung</button>\n                          <button class=\"tablinks\" (click)=\"chayngaydi('tabSkill')\"  data-tab=\"tabSkill\">Kỹ năng</button>\n                          <button class=\"tablinks\" (click)=\"chayngaydi('tabLanguage')\" data-tab=\"tabLanguage\">Ngôn Ngữ</button>\n                          <button class=\"tablinks\" (click)=\"chayngaydi('tabEmploymentHistory')\" data-tab=\"tabEmploymentHistory\">Kinh Nghiệm Làm Việc</button>\n                          <button class=\"tablinks\" (click)=\"chayngaydi('tabEducationHistory')\" data-tab=\"tabEducationHistory\">Học Vấn và Bằng Cấp</button>\n                          <button class=\"tablinks\" (click)=\"chayngaydi('tabReference')\" data-tab=\"tabReference\">Thông Tin Tham Khảo</button>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n\n\n\n\n                <form  [formGroup]=\"userform\" >\n                <div id=\"my-node\" class=\"col-sm-9 col-xs-12 xxx\">\n                  <div id=\"tabUserInfo\" class=\"panel-content\">\n                    <h3>Thông tin</h3>\n                    \n                      <div class=\"row\">\n                        \n                        <div class=\"col-xs-12 col-sm-4\">\n                          <div class=\"picture-container\">\n                            <div class=\"picture\">\n                              <img src=\"\" class=\"picture-src\" id=\"wizardPicturePreview\" title=\"\"/>\n                              <!-- <input  type=\"file\" id=\"wizard-picture\" name=\"fileToUpload\"> -->\n                              <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\">\n                              <img [src]=\"imagePath\" id='content' #content >\n                            </div>\n                           \n                            <h6>Chọn ảnh</h6>\n                            <p class=\"text-success avatar-status\" style=\"display: none\"></p>\n                          </div>\n                        </div>\n\n                        <div class=\"col-xs-12 col-sm-8\">\n                          <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                              <div class=\"input-group\">\n                                <span class=\"input-group-addon\">\n                                  <i class=\"material-icons\">face</i>\n                                </span>\n                                <div class=\"form-group label-floating\">\n                                  <label class=\"control-label\">Họ\n                                    <small class='text-red'>*</small>\n                                  </label>\n                                  <input  value=\"Nguyễn\"   name=\"lastname\" type=\"text\" class=\"form-control\" required>\n                                \n                               </div>\n                              </div>\n                            </div>\n\n                            <div class=\"col-sm-6\">\n                              <div class=\"input-group\">\n                                <span class=\"input-group-addon\">\n                                  <i class=\"material-icons\">face</i>\n                                </span>\n\n                                <div class=\"form-group label-floating\">\n                                  <label class=\"control-label\">Tên\n                                    <small class='text-red'>*</small>\n                                  </label>\n                                  <input formControlName=\"ten\" value=\"{{candidate.Name}}\"  name=\"firstname\" type=\"text\" class=\"form-control\" required>\n                                \n                                </div>\n\n                              </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                              <div class=\"input-group\">\n                                <span class=\"input-group-addon\">\n                                  <i class=\"material-icons\">subtitles</i>\n                                </span>\n\n                                <div class=\"form-group label-floating\">\n                                  <label class=\"control-label\">Kinh nghiệm\n                                    <small class='text-red'>*</small>\n                                  </label>\n                                  <input value=\"{{candidate.kinhNghiem}}\"ormControlName=\"chucDanh\" id=\"keywordPosition\" name=\"position\" type=\"text\" class=\"form-control\" required>\n                                </div>\n\n                              </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n\n                              <div class=\"select-wrapper\">\n                                <label class=\"control-label select-label\">Chuyên ngành\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <!-- <select formControlName=\"capBac\" class=\"form-control\" title=\"Single Select\" name=\"current_job_level\" required>\n                                  <option value=\"\">Vui lòng chọn...</option>\n                                  <option value=\"Kỹ thuật phần mềm\">Kỹ thuật phần mềm</option>\n                                  <option value=\"Khoa học máy tính\">Khoa học máy tính</option>\n                                  <option value=\"Công nghệ thông tin\">Công nghệ thông tin</option>\n                                  <option value=\"Hệ thống thông tin\">Hệ thống thông tin</option>\n                                </select> -->\n                                <input value=\"{{candidate.Faculty}}\" formControlName=\"chucDanh\" id=\"keywordPosition\" name=\"position\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                            \n                            \n                            <div class=\"col-sm-12\">\n\n                              <div class=\"input-group input-year col-sm-6\">\n                                <span class=\"input-group-addon\">\n                                  <i class=\"material-icons\">explore</i>\n                                </span>\n                                <div class=\"form-group label-floating\">\n                                    <label class=\"control-label select-label\">Năm học\n                                        <small class='text-red'>*</small>\n                                      </label>\n\n                                  \n                                  <input value=\"{{candidate.YearGraduation}}\"   formControlName=\"soNamKinhNghiem\" name=\"years_of_exp\" type=\"number\" min=\"1\" max=\"127\" maxlength=\"2\"\n                                  class=\"form-control\" required>\n                                </div>\n                              </div>\n\n                            \n                              \n                              \n                                \n                               \n\n                            </div>\n                            <div class=\"col-sm-12\">\n                              <div class=\"checkbox new-graduate-checkbox\">\n                                <!-- <label>\n                                  <input type=\"checkbox\" name=\"new_graduate\">\n                                  Tôi mới tốt nghiệp/chưa có kinh nghiệm làm việc\n                                </label> -->\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      \n                      \n                      <div class=\"row mt2\">\n                        <div class=\"col-sm-6\">\n\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">email</i>\n                            </span>\n                            \n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Email\n                                <small class='text-red'>*</small>\n                              </label>\n                              <input value=\"{{candidate.Email}}\" formControlName=\"email\" name=\"email\" type=\"text\"  class=\"form-control\" required>\n                            </div>\n                          </div>\n\n                        </div>\n                        <div class=\"col-sm-6\">\n\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">phone</i>\n                            </span>\n\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Điện Thoại\n                                <small class='text-red'>*</small>\n                              </label>\n                              <input style=\"width: 504px;\" value=\"{{candidate.Phone}}\" formControlName=\"soDienThoai\" name=\"phone\" type=\"text\" class=\"form-control\" required>\n                            </div>\n                            \n                          </div>\n\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <!-- <div class=\"col-sm-6\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">date_range</i>\n                            </span>\n\n                            <div class=\"form-group label-floating ui-md-4\" >\n                              <label class=\"control-label\">Ngày Sinh\n                                <small class='text-red'>*</small>\n                              </label>\n                              <p-calendar  formControlName=\"ngaySinh\"   [(ngModel)]=\"myDate\"></p-calendar>\n                            </div>\n                 \n\n\n                          </div>\n                        </div> -->\n                        <!-- <div class=\"col-sm-6\">\n                          <div class=\"select-wrapper\">\n                            <label class=\"control-label select-label\">Quốc Tịch\n                              <small class='text-red'>*</small>\n                            </label>\n                            <select formControlName=\"quocTich\"  class=\" form-control\" title=\"Single Select\" name=\"nationality\" required>\n                              <option value=\"VietNam\">VietNam</option>\n                              <option value=\"English\">English</option>\n                              <option value=\"Spaint\">Spaint</option>\n                              <option value=\"China\">China</option>\n                            </select>\n                          </div>\n                        </div> -->\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-sm-6\">\n\n                          <div class=\"radio-wrapper\">\n                            <label class=\"control-label select-label\">Giới Tính\n                              <small class='text-red'>*</small>\n                            </label>\n                            <div class=\"\">\n                              <select  [(ngModel)]='nrSelect' formControlName=\"gioiTinh\"  class=\" form-control\" title=\"Single Select\" name=\"nationality\" required>\n                                <option value=\"Nam\">Nam</option>\n                                <option value=\"Nữ\">Nữ</option>\n                           \n                              </select>\n                            </div>\n                         \n                          </div>\n\n\n                        </div>\n                        <div class=\"col-sm-6\">\n\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\">\n                                  <i class=\"material-icons\">date_range</i>\n                                </span>\n    \n                                <div class=\"form-group label-floating ui-md-4\" >\n                                  <label class=\"control-label\">Ngày Sinh\n                                    <small class='text-red'>*</small>\n                                  </label>\n                                  \n                                  <input value=\"{{myDate | date: 'dd/MM/yyyy'}}\" style=\"width: 504px;\"  formControlName=\"soDienThoai\" name=\"phone\" type=\"text\" class=\"form-control\" required>\n                                </div>\n                     \n    \n    \n                              </div>\n                       \n\n                        </div> \n                      </div>\n                      <!-- <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                          <div class=\"select-wrapper\">\n                            <label class=\"control-label select-label\">Quốc Gia\n                              <small class='text-red'>*</small>\n                            </label>\n                            <select formControlName=\"quocGia\"  class=\" form-control selectpicker select2 country\" title=\"Single Select\" name=\"country\" required>\n                              <option value=\"VietNamses\">VietNamses</option>\n                              <option value=\"Chinaes\">Chinaes</option>\n                            </select>\n                          </div>\n                        </div>\n                      </div> -->\n                      <div class=\"row\">\n                        <div class=\"col-sm-6\">\n\n                          <div class=\"select-wrapper\">\n                            <label class=\"control-label select-label\">Tỉnh/Thành Phố\n                              <small class='text-red'>*</small>\n                            </label>\n                            <select style=\"width: 561px;\"  [(ngModel)]='nrSelect3' formControlName=\"tinh\"   class=\"form-control selectpicker select2 city\" title=\"Single Select\" name=\"city\" required>\n                              <option value=\"Tây Ninh\">Tây Ninh</option>\n                              <option value=\"Sài Gòn\">Sài Gòn</option>\n                              <option value=\"Bình Dương\">Bình Dương</option>\n                            </select>\n                          </div>\n\n                        </div>\n                        <!-- <div class=\"col-sm-6\">\n                          <div class=\"select-wrapper\">\n                            <label class=\"control-label select-label\">Quận/Huyện\n                              <small class='text-red'>*</small>\n                            </label>\n                            <select class=\"form-control selectpicker select2 district\" title=\"Single Select\" name=\"district\">\n                              <option value=\"a\">Châu Thành</option>\n                              <option value=\"a\">Dươn</option>\n                              <option value=\"a\">Châu Thành</option>\n                            </select>\n                          </div>\n                        </div> -->\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-sm-12\">\n\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">location_on</i>\n                            </span>\n\n\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Địa Chỉ\n                                <small class='text-red'>*</small>\n                              </label>\n                              <input  formControlName=\"diaChi\" name=\"address\" type=\"text\" class=\"form-control\" required>\n                            </div>\n\n\n                          </div>\n\n                        </div>\n                      </div>\n                    \n                    <!-- Modal -->\n                    <div id=\"dropAvatarModal\" class=\"modal fade\" role=\"dialog\">\n                      <div class=\"modal-dialog\">\n                        <!-- Modal content-->\n                        <div class=\"modal-content\">\n                          <div class=\"modal-header\">\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                            <h4 class=\"modal-title\">Chọn ảnh</h4>\n                          </div>\n                          <div class=\"modal-body\">\n                            <div id=\"upload-demo\" class=\"\">\n                              <img src=\"\" class=\"img-responsive\" alt=\"crop-avatar\" id=\"cropImg\">\n                            </div>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\n                            <button type=\"button\" class=\"btn btn-drop-avt\" data-dismiss=\"modal\">Lưu</button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div id=\"tabSummary\" class=\"panel-content\">\n                    <h3>Thông Tin Chung</h3>\n                    \n                      <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">description</i>\n                            </span>\n\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Mô tả ngắn gọn thông tin hồ sơ và mục tiêu nghề nghiệp của bạn\n                                <small class='text-red'>*</small>\n                              </label>\n                              <textarea value=\"{{candidate.moTaBanThan}}\" formControlName=\"moTa1\"   name=\"summary\" data-autoresize class=\"form-control tinymce-text\" rows=\"3\" required></textarea>\n                            </div>\n\n                          </div>\n                        </div>\n                      </div>\n            \n                  </div>\n\n\n\n                  <div style=\"margin-top: 10px\" id=\"tabSkill\" class=\"panel-content\">\n                    <h3>Kỹ năng</h3>\n                    \n                    <p>5 kỹ năng được đánh giá cao nhất sẽ được hiện trong cv. Bạn nên lựa chọn những kỹ năng quan trọng nhất.</p>\n                    <div class=\"skill-sample data-row\" data-type=\"skill\">\n\n                \n    \n                    \n                      </div>\n                      <!-- <i class=\"material-icons btn-remove-row\">close</i>\n                      <form action=\"\" class=\"\" onsubmit=\"return false;\">\n                        <div class=\"row\">\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">extension</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Hãy điền thông tin về lĩnh vực chuyên môn của bạn.\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <select class=\"form-control skill-selection\" required>\n                                  <option value=\"sa\">sds</option>\n                                </select>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-6\">\n                            <select class=\"form-control skill-select\">\n                              <option value=\"1\">1</option>\n                              <option value=\"2\">2</option>\n                              <option value=\"3\">3</option>\n                              <option value=\"4\">4</option>\n                              <option value=\"5\">5</option>\n                            </select>\n                          </div>\n                        </div>\n                      </form> -->\n\n\n                    <!-- <div [style.visibility]=\"check1\" class=\"col-sm-6\" style=\"margin-top: 31px;\">\n                        <div>\n                        <rating formControlName=\"kyNang1\" [(ngModel)]=\"val1\" [readonly]=\"true\"></rating><br>\n                        <div>\n                            <rating formControlName=\"kyNang2\" [(ngModel)]=\"val2\" [readonly]=\"true\"></rating><br>\n                        </div>\n                         <div>\n                            <rating formControlName=\"kyNang3\" [(ngModel)]=\"val3\" [readonly]=\"true\"></rating><br>\n                        </div> \n                       \n                        <div>\n                            <rating formControlName=\"kyNang4\" [(ngModel)]=\"val4\" [readonly]=\"true\"></rating><br>\n                        </div>\n                        <div>\n                            <rating formControlName=\"kyNang5\" [(ngModel)]=\"val5\" [readonly]=\"true\"></rating><br>  \n                        </div>\n                      </div>\n                       <button type=\"button\" (click)=\"SUA()\" class=\"btn btn-outline-secondary\" ngbTooltip=\"Nice class!\" tooltipClass=\"my-custom-class\">\n                                Edit\n                      </button>\n                    </div> -->\n\n                    <!-- <div [style.visibility]=\"check2\" class=\"col-sm-6\" style=\"margin-top: 31px;\">\n                       <div *ngFor=\"let item of tk\">\n                        <rating [(ngModel)]=\"item\"\n                        [readonly]=\"false\">\n                        \n                        </rating>\n                         \n                         <div>\n                          <rating formControlName=\"kyNang1\" [(ngModel)]=\"val1\" [readonly]=\"false\"></rating><br>\n                          <rating formControlName=\"kyNang2\" [(ngModel)]=\"val2\" [readonly]=\"false\"></rating><br>\n                          <rating formControlName=\"kyNang3\" [(ngModel)]=\"val3\" [readonly]=\"false\"></rating><br>\n                          <rating formControlName=\"kyNang4\" [(ngModel)]=\"val4\" [readonly]=\"false\"></rating><br>\n                          <rating formControlName=\"kyNang5\" [(ngModel)]=\"val5\" [readonly]=\"false\"></rating><br>\n                          </div>\n                      <button type=\"button\" (click)=\"SUA1()\" class=\"btn btn-outline-secondary\" ngbTooltip=\"Nice class!\" tooltipClass=\"my-custom-class\">\n                                Edit\n                      </button>\n                    </div> -->\n\n                    <div class=\"ui-g\">\n                        <div class=\"ui-g-8\">\n                            <div class=\"ui-g\">\n                                <div class=\"ui-g-4\">\n                                        .Net\n                                </div>\n                                <div [style.visibility]=\"check1\"  class=\"ui-g-4\" style=\"margin-top: -14px;\">\n                                        <rating  formControlName=\"kyNang1\" [(ngModel)]=\"val1\" [readonly]=\"true\"></rating><br>\n                                </div>\n                                <div [style.visibility]=\"check2\"  class=\"ui-g-4\" style=\"margin-top: -14px;margin-left: -257px;\">\n                                    <rating  formControlName=\"kyNang1\" [(ngModel)]=\"val1\" ></rating><br>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"ui-g-8\">\n                                <div class=\"ui-g\">\n                                    <div class=\"ui-g-4\">\n                                            HTML/CSS\n                                    </div>\n                                    <div class=\"ui-g-4\" style=\"margin-top: -14px;\">\n                                            <rating [style.visibility]=\"check1\"   formControlName=\"kyNang2\" [(ngModel)]=\"val2\" [readonly]=\"true\" ></rating><br>\n                                    </div>\n                                    <div [style.visibility]=\"check2\"  class=\"ui-g-4\" style=\"margin-top: -14px;margin-left: -257px;\">\n                                        <rating  formControlName=\"kyNang2\" [(ngModel)]=\"val2\" ></rating><br>\n                                    </div>\n                                </div>\n                        </div>\n                         <div class=\"ui-g-8\">\n                                <div class=\"ui-g\">\n                                    <div class=\"ui-g-4\">\n                                            C/C++\n                                    </div>\n                                    <div class=\"ui-g-4 \" style=\"margin-top: -14px;\">\n                                            <rating [style.visibility]=\"check1\"  formControlName=\"kyNang3\" [(ngModel)]=\"val3\" [readonly]=\"true\"></rating><br>\n                                    </div>\n                                    <div [style.visibility]=\"check2\"  class=\"ui-g-4\" style=\"margin-top: -14px;margin-left: -257px;\">\n                                        <rating  formControlName=\"kyNang3\" [(ngModel)]=\"val3\" ></rating><br>\n                                    </div>\n                                </div>\n                        </div>\n                        <div class=\"ui-g-8\">\n                                <div class=\"ui-g\">\n                                    <div class=\"ui-g-4\">\n                                            Tester\n                                    </div>\n                                    <div class=\"ui-g-4\" style=\"margin-top: -14px;\">\n                                            <rating [style.visibility]=\"check1\"    formControlName=\"kyNang4\" [(ngModel)]=\"val4\" [readonly]=\"true\"></rating><br>\n                                    </div>\n                                    <div [style.visibility]=\"check2\"  class=\"ui-g-4\" style=\"margin-top: -14px;margin-left: -257px;\">\n                                        <rating  formControlName=\"kyNang4\" [(ngModel)]=\"val4\" ></rating><br>\n                                    </div>\n                                </div>\n                        </div>\n                        <div class=\"ui-g-8\">\n                                <div class=\"ui-g\">\n                                    <div class=\"ui-g-4\">\n                                            IOS/Android\n                                    </div>\n                                    <div class=\"ui-g-4\" style=\"margin-top: -14px;\">\n                                            <rating [style.visibility]=\"check1\"   formControlName=\"kyNang5\" [(ngModel)]=\"val5\" [readonly]=\"true\"></rating><br>\n                                    </div>\n                                    <div [style.visibility]=\"check2\"  class=\"ui-g-4\" style=\"margin-top: -14px;margin-left: -257px;\">\n                                        <rating  formControlName=\"kyNang5\" [(ngModel)]=\"val5\" ></rating><br>\n                                    </div>\n                                </div>\n                        </div> \n                        <div class=\"ui-g-8\">\n                            <button style=\"margin-left: 180px\" type=\"button\" (click)=\"SUA()\" class=\"btn btn-outline-secondary\" ngbTooltip=\"Nice class!\" tooltipClass=\"my-custom-class\">\n                                Edit\n                            </button>\n                        </div>\n                    </div>\n\n\n\n\n\n                  </div>\n                    <div id=\"skillSection\">\n                        <!-- <rating formControlName=\"kyNang1\"  [(ngModel)]=\"val1\" [readonly]=\"true\"></rating><br> -->\n                        <!-- <rating formControlName=\"kyNang2\"  [(ngModel)]=\"val2\" [readonly]=\"true\"></rating><br>\n                        <rating formControlName=\"kyNang3\"  [(ngModel)]=\"val3\" [readonly]=\"true\"></rating><br>\n                        <rating formControlName=\"kyNang4\"  [(ngModel)]=\"val4\" [readonly]=\"true\"></rating><br>\n                        <rating formControlName=\"kyNang5\"  [(ngModel)]=\"val5\" [readonly]=\"true\"></rating><br> -->\n              \n                    </div>\n                    <!-- <button id=\"addMoreSkill\" class=\"btn-add-more\">Add more</button> -->\n                  \n                   <div id=\"tabLanguage\" class=\"panel-content\">\n                  \n                    <h3>Ngôn Ngữ</h3>\n                    \n\n\n                    <div *ngFor=\"let item of language\">\n                     \n                       \n                      \n                      <div *ngIf=\"item==1\">\n                        \n                      <form [formGroup]=\"langugaeg1\">\n                         \n                      <div class=\"row\">\n                      <div class=\"col-sm-4\">  \n                        <div class=\"select-wrapper\" style=\"margin-top: -17px;\">\n                        \n                              <label class=\"control-label select-label\">Ngôn Ngữ\n                                <small>(required)</small>\n                              </label>\n\n                          <select  formControlName=\"ngonNgu\" class=\"form-control language-select\" title=\"Single Select\" name=\"language_id\" required>\n                            <option value=\"Spain\">Spain</option>\n                            <option value=\"China\">China</option>\n                            <option value=\"English\">English</option>\n                            <option value=\"Japan\">Japan</option>\n                          </select>\n                         </div>\n                      </div>\n                      <div class=\"col-sm-8\">\n                        <div class=\"radio-wrapper\" style=\"margin-top: -22px;\">\n                          <div class=\"radio pull-left language-radio\">\n                            <label>\n                              <p-radioButton  formControlName=\"danhGia\"  name=\"group1\" value=\"Sơ cấp\" label=\"Sơ cấp\"  inputId=\"opt1\"></p-radioButton>\n                            </label>\n                          </div>\n                          <div class=\"radio pull-left language-radio\">\n                            <label>\n                              <p-radioButton  formControlName=\"danhGia\"  name=\"group1\" value=\"Trung cấp\" label=\"Trung cấp\"  inputId=\"opt1\"></p-radioButton>\n                              \n                            </label>\n                          </div>\n                          <div class=\"radio pull-left language-radio\">\n                            <label>\n                              <p-radioButton  formControlName=\"danhGia\"  name=\"group1\" value=\"Cao cấp\" label=\"Cao cấp\"  inputId=\"opt1\"></p-radioButton>\n                             \n                            </label>\n                          </div>\n                          <div class=\"radio pull-left language-radio\">\n                            <label>\n                              <p-radioButton  formControlName=\"danhGia\"  name=\"group1\" value=\"Bản ngữ\" label=\"Bản ngữ\"  inputId=\"opt1\"></p-radioButton>\n                            \n                            </label>\n                          </div>\n                          <div>\n                              <i (click)=\"Xoalanguage(item)\"  class=\"fa fa-remove\" style=\"padding-left: 238px;;font-size:36px\"></i>\n                          </div>  \n                         \n                        </div>\n                      </div>\n                          </div>\n                      </form>\n                     \n                      </div>\n\n                      <div *ngIf=\"item==3\">\n                          <form [formGroup]=\"langugaeg3\">\n                              <div class=\"row\">\n                          <div class=\"col-sm-4\">\n                            <div class=\"select-wrapper\" style=\"margin-top: -17px;\">\n                                <label class=\"control-label select-label\">Ngôn Ngữ\n                                    <small>(required)</small>\n                                  </label>\n                              <select  formControlName=\"ngonNgu\" class=\"form-control language-select\" title=\"Single Select\" name=\"language_id\" required>\n                                <option value=\"Spain\">Spain</option>\n                                <option value=\"China\">China</option>\n                                <option value=\"English\">English</option>\n                                <option value=\"Japan\">Japan</option>\n                              </select>\n                             </div>\n                          </div>\n                          <div class=\"col-sm-8\">\n                            <div class=\"radio-wrapper\" style=\"margin-top: -22px;\">\n                              <div class=\"radio pull-left language-radio\">\n                                <label>\n                                  <p-radioButton  formControlName=\"danhGia\"  name=\"group2\" value=\"Sơ cấp\" label=\"Sơ cấp\"  inputId=\"opt3\"></p-radioButton>\n                                </label>\n                              </div>\n                              <div class=\"radio pull-left language-radio\">\n                                <label>\n                                  <p-radioButton  formControlName=\"danhGia\"  name=\"group2\" value=\"Trung cấp\" label=\"Trung cấp\"  inputId=\"opt3\"></p-radioButton>\n                                  \n                                </label>\n                              </div>\n                              <div class=\"radio pull-left language-radio\">\n                                <label>\n                                  <p-radioButton  formControlName=\"danhGia\"  name=\"group2\" value=\"Cao cấp\" label=\"Cao cấp\"  inputId=\"opt3\"></p-radioButton>\n                                 \n                                </label>\n                              </div>\n                              <div class=\"radio pull-left language-radio\">\n                                <label>\n                                  <p-radioButton  formControlName=\"danhGia\"  name=\"group2\" value=\"Bản ngữ\" label=\"Bản ngữ\"  inputId=\"opt3\"></p-radioButton>\n                                \n                                </label>\n                              </div>\n                              <div>\n                                  <i (click)=\"Xoalanguage(item)\"  class=\"fa fa-remove\" style=\"padding-left: 238px;;font-size:36px\"></i>\n                              </div>  \n                            </div>\n                          </div>\n                              </div>\n                          </form>\n                      </div>\n                      <div *ngIf=\"item==4\">\n                          <form [formGroup]=\"langugaeg4\">\n                              <div class=\"row\">\n                          <div class=\"col-sm-4\">\n                            <div class=\"select-wrapper\" style=\"margin-top: -17px;\">\n                                <label class=\"control-label select-label\">Ngôn Ngữ\n                                    <small>(required)</small>\n                                  </label>\n                              <select  formControlName=\"ngonNgu\" class=\"form-control language-select\" title=\"Single Select\" name=\"language_id\" required>\n                                <option value=\"Spain\">Spain</option>\n                                <option value=\"China\">China</option>\n                                <option value=\"English\">English</option>\n                                <option value=\"Japan\">Japan</option>\n                              </select>\n                             </div>\n                          </div>\n                          <div class=\"col-sm-8\">\n                            <div class=\"radio-wrapper\" style=\"margin-top: -22px;\">\n                              <div class=\"radio pull-left language-radio\">\n                                <label>\n                                  <p-radioButton  formControlName=\"danhGia\"  name=\"group2\" value=\"Sơ cấp\" label=\"Sơ cấp\"  inputId=\"opt4\"></p-radioButton>\n                                </label>\n                              </div>\n                              <div class=\"radio pull-left language-radio\">\n                                <label>\n                                  <p-radioButton  formControlName=\"danhGia\"  name=\"group2\" value=\"Trung cấp\" label=\"Trung cấp\"  inputId=\"opt4\"></p-radioButton>\n                                  \n                                </label>\n                              </div>\n                              <div class=\"radio pull-left language-radio\">\n                                <label>\n                                  <p-radioButton  formControlName=\"danhGia\"  name=\"group2\" value=\"Cao cấp\" label=\"Cao cấp\"  inputId=\"opt4\"></p-radioButton>\n                                 \n                                </label>\n                              </div>\n                              <div class=\"radio pull-left language-radio\">\n                                <label>\n                                  <p-radioButton  formControlName=\"danhGia\"  name=\"group2\" value=\"Bản ngữ\" label=\"Bản ngữ\"  inputId=\"opt4\"></p-radioButton>\n                                \n                                </label>\n                              </div>\n                              <div>\n                                  <i (click)=\"Xoalanguage(item)\"  class=\"fa fa-remove\" style=\"padding-left: 238px;;font-size:36px\"></i>\n                              </div>  \n                            </div>\n                          </div>\n                              </div>\n                          </form>\n                      </div>\n\n                      <div *ngIf=\"item==2\">\n                          <form [formGroup]=\"langugaeg2\">\n                              <div class=\"row\">\n                          <div class=\"col-sm-4\">\n                            <div class=\"select-wrapper\" style=\"margin-top: -17px;\">\n                                <label class=\"control-label select-label\">Ngôn Ngữ\n                                    <small>(required)</small>\n                                    \n                                  </label>\n                              <select  formControlName=\"ngonNgu2\" class=\"form-control language-select\" title=\"Single Select\" name=\"language_id\" required>\n                                <option value=\"Spain\">Spain</option>\n                                <option value=\"China\">China</option>\n                                <option value=\"English\">English</option>\n                                <option value=\"Japan\">Japan</option>\n                              </select>\n                             </div>\n                          </div>\n                          <div class=\"col-sm-8\">\n                            <div class=\"radio-wrapper\" style=\"margin-top: -22px;\">\n                              <div class=\"radio pull-left language-radio\">\n                                <label>\n                                  <p-radioButton  formControlName=\"danhGia2\"  name=\"group2\" value=\"Sơ cấp\" label=\"Sơ cấp\"  inputId=\"opt2\"></p-radioButton>\n                                </label>\n                              </div>\n                              <div class=\"radio pull-left language-radio\">\n                                <label>\n                                  <p-radioButton  formControlName=\"danhGia2\"  name=\"group2\" value=\"Trung cấp\" label=\"Trung cấp\"  inputId=\"opt2\"></p-radioButton>\n                                  \n                                </label>\n                              </div>\n                              <div class=\"radio pull-left language-radio\">\n                                <label>\n                                  <p-radioButton  formControlName=\"danhGia2\"  name=\"group2\" value=\"Cao cấp\" label=\"Cao cấp\"  inputId=\"opt2\"></p-radioButton>\n                                 \n                                </label>\n                              </div>\n                              <div class=\"radio pull-left language-radio\">\n                                <label>\n                                  <p-radioButton  formControlName=\"danhGia2\"  name=\"group2\" value=\"Bản ngữ\" label=\"Bản ngữ\"  inputId=\"opt2\"></p-radioButton>\n                                \n                                </label>\n                              </div>\n                              <div>\n                                  <i (click)=\"Xoalanguage(item)\"  class=\"fa fa-remove\" style=\"padding-left: 238px;;font-size:36px\"></i>\n                              </div>  \n                            </div>\n                          </div>\n                              </div>\n                          </form>\n                      </div>\n                    </div>\n\n\n\n                    <div class=\"language-sample data-row\" data-type=\"language\" >\n                      \n                      <!-- <div class=\"row\">\n                          <i class=\"material-icons btn-remove-row\">close</i>\n                          <div class=\"col-sm-4\">\n                            <div class=\"select-wrapper\" style=\"margin-top: -17px;\">\n                                <label class=\"control-label select-label\">Ngôn Ngữ\n                                    <small>(required)</small>\n                                  </label>\n                              <select  class=\"form-control language-select\" title=\"Single Select\" name=\"language_id\" required>\n                                <option  value=\"Spain\">Spain</option>\n                                <option value=\"China\">China</option>\n                                <option value=\"English\">English</option>\n                                <option value=\"Japan\">Japan</option>\n                              </select>\n                             </div>\n                           \n                          </div>\n                          <div class=\"col-sm-8\">\n                              <div class=\"radio-wrapper\" style=\"margin-top: -22px;\">\n                                <div class=\"radio pull-left language-radio\">\n                                  <label>\n                                    <p-radioButton    name=\"group1\" value=\"Sơ cấp\" label=\"Sơ cấp\"  inputId=\"opt2\"></p-radioButton>\n                                  </label>\n                                </div>\n                                <div class=\"radio pull-left language-radio\">\n                                  <label>\n                                    <p-radioButton    name=\"group1\" value=\"Trung cấp\" label=\"Trung cấp\"  inputId=\"opt2\"></p-radioButton>\n                                    Trung cấp\n                                  </label>\n                                </div>\n                                <div class=\"radio pull-left language-radio\">\n                                  <label>\n                                    <p-radioButton      name=\"group1\" value=\"Cao cấp\" label=\"Cao cấp\"  inputId=\"opt2\"></p-radioButton>\n                                    Cao cấp\n                                  </label>\n                                </div>\n                                <div class=\"radio pull-left language-radio\">\n                                  <label>\n                                    <p-radioButton   name=\"group1\" value=\"Bản ngữ\" label=\"Bản ngữ\" inputId=\"opt2\"></p-radioButton>\n                                    Bản ngữ\n                                  </label>\n                                </div>\n                              </div>\n                           \n                            </div>\n                            \n                        </div> -->\n                    </div>\n                    <div id=\"languageSection\">\n                    </div>\n\n                    <!-- <div *ngFor=\"let item of language\">\n                        <div *ngIf=\"item==1\">\n                          <form [formGroup]=\"langugaeg1\"    (ngSubmit)=\"onSubmit(userform.value)\">\n                          <input pInputText type=\"text\" formControlName=\"user\" placeholder=\"Required\"/>\n                          <button (click)=\"Xoalanguage(item)\">Xoa</button>\n                          \n                        </form>\n                      </div>\n                      <div *ngIf=\"item==2\">\n                          <form [formGroup]=\"langugaeg2\"    (ngSubmit)=\"onSubmit(userform.value)\">\n                          <input pInputText type=\"text\" formControlName=\"user\" placeholder=\"Required\"/>\n                          <button (click)=\"Xoalanguage(item)\">Xoa</button>\n                        </form>\n                      </div>\n                      <div *ngIf=\"item==3\">\n                          <form [formGroup]=\"langugaeg3\"    (ngSubmit)=\"onSubmit(userform.value)\">\n                          <input pInputText type=\"text\" formControlName=\"user\" placeholder=\"Required\"/>\n                          <button (click)=\"Xoalanguage(item)\">Xoa</button>\n                        </form>\n                      </div>\n                      <div *ngIf=\"item==4\">\n                          <form [formGroup]=\"langugaeg4\"    (ngSubmit)=\"onSubmit(userform.value)\">\n                          <input pInputText type=\"text\" formControlName=\"user\" placeholder=\"Required\"/>\n                          <button (click)=\"Xoalanguage(item)\">Xoa</button>\n                        </form>\n                      </div>\n                      \n                    </div> -->\n\n\n\n                    \n                    <button id=\"addMoreLanguage\" (click)=\"addNgonNgu()\" class=\"btn-add-more\">Add more</button>\n                  </div> \n                  \n                  <div id=\"tabEmploymentHistory\" class=\"panel-content\">\n                      <h3>Kinh Nghiệm Làm Việc</h3>\n                      <div *ngFor=\"let item1 of experience\">\n                        <div *ngIf=\"item1==1\">\n                              <form [formGroup]=\"experience1\">\n                                  <div>\n                                      <i (click)=\"xoaKinhNghiem(item1)\"  class=\"fa fa-remove\" style=\"margin-left: 1122px;font-size:36px\"></i>\n                                  </div>\n                              <div class=\"row\">\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">home</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Công ty\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"congTy\" name=\"company_name\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">subtitles</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Vị trí\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"viTri\" name=\"position\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                             </div>\n                             <div class=\"row\">\n                              <div class=\"col-sm-4\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">date_range</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Từ tháng\n                                </label>\n                                <p-calendar (onSelect)=\"doSomething(dateWrok)\"   [(ngModel)]=\"dateWrok\"  [minDate]=\"minDate\" [readonlyInput]=\"true\" formControlName=\"ngayBatDau\"></p-calendar>\n                                \n                              </div>\n                            </div>\n                              </div>\n                              <div class=\"col-sm-4\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">date_range</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Đến tháng\n                                </label>\n                                <p-calendar (onSelect)=\"doSomething1(dateFnish)\"  [(ngModel)]=\"dateFnish\"   [minDate]=\"minDate\" [readonlyInput]=\"true\" formControlName=\"ngayKetThuc\" ></p-calendar>\n                              </div>\n                            </div>\n                              </div>\n                             </div>\n                            <div class=\"row\">\n                          <div class=\"col-sm-12\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">event_note</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Mô tả\n                                </label>\n                                <textarea formControlName=\"moTaCongViec\" name=\"description\" data-autoresize class=\"form-control\" rows=\"3\"></textarea>\n                              </div>\n                            </div>\n                          </div>\n                            </div>\n                           </form>\n                        </div>\n\n                        <div *ngIf=\"item1==2\">\n                            <form [formGroup]=\"experience2\">\n                            <div class=\"row\">\n                                <div>\n                                    <i (click)=\"xoaKinhNghiem(item1)\"   class=\"fa fa-remove\" style=\"margin-left: 1122px;font-size:36px\"></i>\n                                </div>\n                        <div class=\"col-sm-6\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">home</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Công ty\n                                <small class='text-red'>*</small>\n                              </label>\n                              <input formControlName=\"congTy\" name=\"company_name\" type=\"text\" class=\"form-control\" required>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">subtitles</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Vị trí\n                                <small class='text-red'>*</small>\n                              </label>\n                              <input formControlName=\"viTri\" name=\"position\" type=\"text\" class=\"form-control\" required>\n                            </div>\n                          </div>\n                        </div>\n                           </div>\n                           <div class=\"row\">\n                            <div class=\"col-sm-4\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">date_range</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Từ tháng\n                              </label>\n                              <p-calendar (onSelect)=\"doSomething(dateWrok)\"   [minDate]=\"minDate\" [readonlyInput]=\"true\" formControlName=\"ngayBatDau\"></p-calendar>\n                              \n                            </div>\n                          </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">date_range</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Đến tháng\n                              </label>\n                              <p-calendar (onSelect)=\"doSomething1(dateFnish)\"   [minDate]=\"minDate\" [readonlyInput]=\"true\" formControlName=\"ngayKetThuc\" ></p-calendar>\n                            </div>\n                          </div>\n                            </div>\n                           </div>\n                          <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">event_note</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Mô tả\n                              </label>\n                              <textarea formControlName=\"moTaCongViec\" name=\"description\" data-autoresize class=\"form-control\" rows=\"3\"></textarea>\n                            </div>\n                          </div>\n                        </div>\n                          </div>\n                         </form>\n                        </div>\n\n                        <div *ngIf=\"item1==3\">\n                            <form [formGroup]=\"experience3\">\n                            <div class=\"row\">\n                                <div>\n                                    <i (click)=\"xoaKinhNghiem(item1)\"   class=\"fa fa-remove\" style=\"margin-left: 1122px;font-size:36px\"></i>\n                                </div>\n                        <div class=\"col-sm-6\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">home</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Công ty\n                                <small class='text-red'>*</small>\n                              </label>\n                              <input formControlName=\"congTy\" name=\"company_name\" type=\"text\" class=\"form-control\" required>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">subtitles</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Vị trí\n                                <small class='text-red'>*</small>\n                              </label>\n                              <input formControlName=\"viTri\" name=\"position\" type=\"text\" class=\"form-control\" required>\n                            </div>\n                          </div>\n                        </div>\n                           </div>\n                           <div class=\"row\">\n                            <div class=\"col-sm-4\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">date_range</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Từ tháng\n                              </label>\n                              <p-calendar (onSelect)=\"doSomething(dateWrok)\"   [(ngModel)]=\"dateWrok\"  [minDate]=\"minDate\" [readonlyInput]=\"true\" formControlName=\"ngayBatDau\"></p-calendar>\n                              \n                            </div>\n                          </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">date_range</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Đến tháng\n                              </label>\n                              <p-calendar (onSelect)=\"doSomething1(dateFnish)\"  [(ngModel)]=\"dateFnish\"   [minDate]=\"minDate\" [readonlyInput]=\"true\" formControlName=\"ngayKetThuc\" ></p-calendar>\n                            </div>\n                          </div>\n                            </div>\n                           </div>\n                          <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">event_note</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Mô tả\n                              </label>\n                              <textarea formControlName=\"moTaCongViec\" name=\"description\" data-autoresize class=\"form-control\" rows=\"3\"></textarea>\n                            </div>\n                          </div>\n                        </div>\n                          </div>\n                         </form>\n                        </div>\n\n                        <div *ngIf=\"item1==4\">\n                            <form [formGroup]=\"experience4\">\n                            <div class=\"row\">\n                                <div>\n                                    <i (click)=\"xoaKinhNghiem(item1)\"   class=\"fa fa-remove\" style=\"margin-left: 1122px;font-size:36px\"></i>\n                                </div>\n                        <div class=\"col-sm-6\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">home</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Công ty\n                                <small class='text-red'>*</small>\n                              </label>\n                              <input formControlName=\"congTy\" name=\"company_name\" type=\"text\" class=\"form-control\" required>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">subtitles</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Vị trí\n                                <small class='text-red'>*</small>\n                              </label>\n                              <input formControlName=\"viTri\" name=\"position\" type=\"text\" class=\"form-control\" required>\n                            </div>\n                          </div>\n                        </div>\n                           </div>\n                           <div class=\"row\">\n                            <div class=\"col-sm-4\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">date_range</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Từ tháng\n                              </label>\n                              <p-calendar (onSelect)=\"doSomething(dateWrok)\"   [(ngModel)]=\"dateWrok\"  [minDate]=\"minDate\" [readonlyInput]=\"true\" formControlName=\"ngayBatDau\"></p-calendar>\n                              \n                            </div>\n                          </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">date_range</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Đến tháng\n                              </label>\n                              <p-calendar (onSelect)=\"doSomething1(dateFnish)\"  [(ngModel)]=\"dateFnish\"   [minDate]=\"minDate\" [readonlyInput]=\"true\" formControlName=\"ngayKetThuc\" ></p-calendar>\n                            </div>\n                          </div>\n                            </div>\n                           </div>\n                          <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">event_note</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Mô tả\n                              </label>\n                              <textarea formControlName=\"moTaCongViec\" name=\"description\" data-autoresize class=\"form-control\" rows=\"3\"></textarea>\n                            </div>\n                          </div>\n                        </div>\n                          </div>\n                         </form>\n                        </div>\n\n                        <div *ngIf=\"item1==5\">\n                            <form [formGroup]=\"experience5\">\n                            <div class=\"row\">\n                                <div>\n                                    <i (click)=\"xoaKinhNghiem(item1)\"   class=\"fa fa-remove\" style=\"margin-left: 1122px;font-size:36px\"></i>\n                                </div>\n                        <div class=\"col-sm-6\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">home</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Công ty\n                                <small class='text-red'>*</small>\n                              </label>\n                              <input formControlName=\"congTy\" name=\"company_name\" type=\"text\" class=\"form-control\" required>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">subtitles</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Vị trí\n                                <small class='text-red'>*</small>\n                              </label>\n                              <input formControlName=\"viTri\" name=\"position\" type=\"text\" class=\"form-control\" required>\n                            </div>\n                          </div>\n                        </div>\n                           </div>\n                           <div class=\"row\">\n                            <div class=\"col-sm-4\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">date_range</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Từ tháng\n                              </label>\n                              <p-calendar (onSelect)=\"doSomething(dateWrok)\"   [(ngModel)]=\"dateWrok\"  [minDate]=\"minDate\" [readonlyInput]=\"true\" formControlName=\"ngayBatDau\"></p-calendar>\n                              \n                            </div>\n                          </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">date_range</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Đến tháng\n                              </label>\n                              <p-calendar (onSelect)=\"doSomething1(dateFnish)\"  [(ngModel)]=\"dateFnish\"   [minDate]=\"minDate\" [readonlyInput]=\"true\" formControlName=\"ngayKetThuc\" ></p-calendar>\n                            </div>\n                          </div>\n                            </div>\n                           </div>\n                          <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                              <i class=\"material-icons\">event_note</i>\n                            </span>\n                            <div class=\"form-group label-floating\">\n                              <label class=\"control-label\">Mô tả\n                              </label>\n                              <textarea formControlName=\"moTaCongViec\" name=\"description\" data-autoresize class=\"form-control\" rows=\"3\"></textarea>\n                            </div>\n                          </div>\n                        </div>\n                          </div>\n                         </form>\n                        </div>\n                      </div>\n                  \n\n                      <div class=\"employment-sample data-row\" data-type=\"employment\" >\n                        <i class=\"material-icons btn-remove-row\">close</i>\n\n\n<!-- \n                        <form action=\"\" class=\"\">\n                          <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                              <div class=\"input-group\">\n                                <span class=\"input-group-addon\">\n                                  <i class=\"material-icons\">home</i>\n                                </span>\n                                <div class=\"form-group label-floating\">\n                                  <label class=\"control-label\">Công ty\n                                    <small class='text-red'>*</small>\n                                  </label>\n                                  <input name=\"company_name\" type=\"text\" class=\"form-control\" required>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                              <div class=\"input-group\">\n                                <span class=\"input-group-addon\">\n                                  <i class=\"material-icons\">subtitles</i>\n                                </span>\n                                <div class=\"form-group label-floating\">\n                                  <label class=\"control-label\">Vị trí\n                                    <small class='text-red'>*</small>\n                                  </label>\n                                  <input name=\"position\" type=\"text\" class=\"form-control\" required>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-sm-4\">\n                              <div class=\"input-group\">\n                                <span class=\"input-group-addon\">\n                                  <i class=\"material-icons\">date_range</i>\n                                </span>\n                                <div class=\"form-group label-floating\">\n                                  <label class=\"control-label\">Từ tháng\n                                  </label>\n                                  <input name=\"from_date\" type=\"text\" class=\"form-control datepicker\">\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                              <div class=\"input-group\">\n                                <span class=\"input-group-addon\">\n                                  <i class=\"material-icons\">date_range</i>\n                                </span>\n                                <div class=\"form-group label-floating\">\n                                  <label class=\"control-label\">Đến tháng\n                                  </label>\n                                  <input name=\"to_date\" type=\"text\" class=\"form-control datepicker\">\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                              <div class=\"input-group\">\n                                <span class=\"input-group-addon\">\n                                  <i class=\"material-icons\">event_note</i>\n                                </span>\n                                <div class=\"form-group label-floating\">\n                                  <label class=\"control-label\">Mô tả\n                                  </label>\n                                  <textarea name=\"description\" data-autoresize class=\"form-control\" rows=\"3\"></textarea>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </form> -->\n\n\n\n                      </div>\n                      <div id=\"employmentSection\">\n          \n                      </div>\n                      <button id=\"addMoreEmployment\" (click)=\"Experience()\" class=\"btn-add-more\">Add more</button>\n               </div>\n                    \n                      \n                   \n                     \n                    \n                      <!-- <div id=\"tabEducationHistory\" class=\"panel-content\">\n                        <h3>Học Vấn và Bằng Cấp</h3>\n                        <div class=\"education-sample data-row\" data-type=\"education\">\n                          <i class=\"material-icons btn-remove-row\">close</i>\n                        \n                        </div>  \n                        \n                        <div id=\"educationSection\">\n                             \n                        </div>\n                        <button id=\"addMoreEducation\" (click)=\"Education()\" class=\"btn-add-more\">Add more</button>\n                      </div>\n                   -->\n                  \n                  \n                    <div id=\"tabEducationHistory\" class=\"panel-content\">\n                    <h3>Học Vấn và Bằng Cấp</h3>\n                  \n                    \n                        <div *ngFor=\"let item1 of education\">\n                        <div *ngIf=\"item1==1\">\n                        <form [formGroup]=\"education1\">\n                            <div>\n                                <i (click)=\"XoaHocVan(item1)\"  class=\"fa fa-remove\" style=\"margin-left: 1122px;font-size:36px\"></i>\n                            </div>  \n                            <div class=\"row\">\n                          <div class=\"col-sm-12\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">star</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Chuyên ngành\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"chuyenNganh\"  name=\"subject\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                            </div>\n                            <div class=\"row\">\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">school</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Trường\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"Truong\"  name=\"school\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-6\">\n                            <div class=\"select-wrapper\">\n                              <label class=\"control-label select-label\">Bằng cấp\n                                <small class='text-red'>*</small>\n                              </label>\n                              <select formControlName=\"bangCap\"  class=\" form-control education-select\" name=\"qualification\" title=\"Single Select\" required>\n                                <option  value=\"\">Vui lòng chọn...</option>\n                                <option   value=\"Đại học\" data-weight=\"1\">Đại học</option>\n                                <option   value=\"Cao đẳng\" data-weight=\"2\">Cao đẳng</option>\n                                <option value=\"Trung cấp\" data-weight=\"3\">Trung cấp</option>\n                              </select>\n                            </div>\n                          </div>\n                            </div>\n                            <div class=\"row\">\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">date_range</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Từ tháng\n                                </label>\n                                <p-calendar formControlName=\"start\" (onSelect)=\"doSomething1(DateEducation1)\" [(ngModel)]=\"DateEducation1\" [minDate]=\"minDateEducation\" [readonlyInput]=\"true\"></p-calendar>\n                              \n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">date_range</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Đến tháng\n                                </label>\n                                <p-calendar formControlName=\"end\" [minDate]=\"minDateEducation\" [readonlyInput]=\"true\"></p-calendar>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        \n                        </form>\n                        </div>\n                        <div *ngIf=\"item1==2\">\n                            <form [formGroup]=\"education2\">\n                              \n                                <div>\n                                    <i (click)=\"XoaHocVan(item1)\"   class=\"fa fa-remove\" style=\"margin-left: 1122px;font-size:36px\"></i>\n                                </div> \n                                <div class=\"row\">\n                              <div class=\"col-sm-12\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">star</i>\n                                  </span>\n                                  <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Chuyên ngành\n                                      <small class='text-red'>*</small>\n                                    </label>\n                                    <input formControlName=\"chuyenNganh\"  name=\"subject\" type=\"text\" class=\"form-control\" required>\n                                  </div>\n                                </div>\n                              </div>\n                                </div>\n                                <div class=\"row\">\n                              <div class=\"col-sm-6\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">school</i>\n                                  </span>\n                                  <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Trường\n                                      <small class='text-red'>*</small>\n                                    </label>\n                                    <input formControlName=\"Truong\"  name=\"school\" type=\"text\" class=\"form-control\" required>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-sm-6\">\n                                <div class=\"select-wrapper\">\n                                  <label class=\"control-label select-label\">Bằng cấp\n                                    <small class='text-red'>*</small>\n                                  </label>\n                                  <select formControlName=\"bangCap\"  class=\" form-control education-select\" name=\"qualification\" title=\"Single Select\" required>\n                                    <option  value=\"\">Vui lòng chọn...</option>\n                                    <option   value=\"Đại học\" data-weight=\"1\">Đại học</option>\n                                    <option   value=\"Cao đẳng\" data-weight=\"2\">Cao đẳng</option>\n                                    <option value=\"Trung cấp\" data-weight=\"3\">Trung cấp</option>\n                                  </select>\n                                </div>\n                              </div>\n                                </div>\n                                <div class=\"row\">\n                              <div class=\"col-sm-6\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">date_range</i>\n                                  </span>\n                                  <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Từ tháng\n                                    </label>\n                                    <p-calendar formControlName=\"start\" (onSelect)=\"doSomething1(DateEducation1)\" [minDate]=\"minDateEducation\" [readonlyInput]=\"true\"></p-calendar>\n                                  \n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-sm-6\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">date_range</i>\n                                  </span>\n                                  <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Đến tháng\n                                    </label>\n                                    <p-calendar formControlName=\"end\" [minDate]=\"minDateEducation\" [readonlyInput]=\"true\"></p-calendar>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            \n                            </form>\n                        </div>\n                        <div *ngIf=\"item1==3\">\n                            <form [formGroup]=\"education3\">\n                                <div>\n                                    <i (click)=\"XoaHocVan(item1)\"   class=\"fa fa-remove\" style=\"margin-left: 1122px;font-size:36px\"></i>\n                                </div> \n                                <div class=\"row\">\n                              <div class=\"col-sm-12\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">star</i>\n                                  </span>\n                                  <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Chuyên ngành\n                                      <small class='text-red'>*</small>\n                                    </label>\n                                    <input formControlName=\"chuyenNganh\"  name=\"subject\" type=\"text\" class=\"form-control\" required>\n                                  </div>\n                                </div>\n                              </div>\n                                </div>\n                                <div class=\"row\">\n                              <div class=\"col-sm-6\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">school</i>\n                                  </span>\n                                  <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Trường\n                                      <small class='text-red'>*</small>\n                                    </label>\n                                    <input formControlName=\"Truong\"  name=\"school\" type=\"text\" class=\"form-control\" required>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-sm-6\">\n                                <div class=\"select-wrapper\">\n                                  <label class=\"control-label select-label\">Bằng cấp\n                                    <small class='text-red'>*</small>\n                                  </label>\n                                  <select formControlName=\"bangCap\"  class=\" form-control education-select\" name=\"qualification\" title=\"Single Select\" required>\n                                    <option  value=\"\">Vui lòng chọn...</option>\n                                    <option   value=\"Đại học\" data-weight=\"1\">Đại học</option>\n                                    <option   value=\"Cao đẳng\" data-weight=\"2\">Cao đẳng</option>\n                                    <option value=\"Trung cấp\" data-weight=\"3\">Trung cấp</option>\n                                  </select>\n                                </div>\n                              </div>\n                                </div>\n                                <div class=\"row\">\n                              <div class=\"col-sm-6\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">date_range</i>\n                                  </span>\n                                  <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Từ tháng\n                                    </label>\n                                    <p-calendar formControlName=\"start\" (onSelect)=\"doSomething1(DateEducation1)\"  [minDate]=\"minDateEducation\" [readonlyInput]=\"true\"></p-calendar>\n                                  \n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-sm-6\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">date_range</i>\n                                  </span>\n                                  <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Đến tháng\n                                    </label>\n                                    <p-calendar formControlName=\"end\" [minDate]=\"minDateEducation\" [readonlyInput]=\"true\"></p-calendar>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            \n                            </form>\n                        </div>\n                        <div *ngIf=\"item1==4\">\n                            <form [formGroup]=\"education4\">\n                                <div>\n                                    <i (click)=\"XoaHocVan(item1)\"   class=\"fa fa-remove\" style=\"margin-left: 1122px;font-size:36px\"></i>\n                                </div> \n                                <div class=\"row\">\n                              <div class=\"col-sm-12\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">star</i>\n                                  </span>\n                                  <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Chuyên ngành\n                                      <small class='text-red'>*</small>\n                                    </label>\n                                    <input formControlName=\"chuyenNganh\"  name=\"subject\" type=\"text\" class=\"form-control\" required>\n                                  </div>\n                                </div>\n                              </div>\n                                </div>\n                                <div class=\"row\">\n                              <div class=\"col-sm-6\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">school</i>\n                                  </span>\n                                  <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Trường\n                                      <small class='text-red'>*</small>\n                                    </label>\n                                    <input formControlName=\"Truong\"  name=\"school\" type=\"text\" class=\"form-control\" required>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-sm-6\">\n                                <div class=\"select-wrapper\">\n                                  <label class=\"control-label select-label\">Bằng cấp\n                                    <small class='text-red'>*</small>\n                                  </label>\n                                  <select formControlName=\"bangCap\"  class=\" form-control education-select\" name=\"qualification\" title=\"Single Select\" required>\n                                    <option  value=\"\">Vui lòng chọn...</option>\n                                    <option   value=\"Đại học\" data-weight=\"1\">Đại học</option>\n                                    <option   value=\"Cao đẳng\" data-weight=\"2\">Cao đẳng</option>\n                                    <option value=\"Trung cấp\" data-weight=\"3\">Trung cấp</option>\n                                  </select>\n                                </div>\n                              </div>\n                                </div>\n                                <div class=\"row\">\n                              <div class=\"col-sm-6\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">date_range</i>\n                                  </span>\n                                  <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Từ tháng\n                                    </label>\n                                    <p-calendar formControlName=\"start\" (onSelect)=\"doSomething1(DateEducation1)\"  [minDate]=\"minDateEducation\" [readonlyInput]=\"true\"></p-calendar>\n                                  \n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-sm-6\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">date_range</i>\n                                  </span>\n                                  <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Đến tháng\n                                    </label>\n                                    <p-calendar formControlName=\"end\" [minDate]=\"minDateEducation\" [readonlyInput]=\"true\"></p-calendar>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            \n                            </form>\n                        </div>\n                        <div *ngIf=\"item1==5\">\n                            <form [formGroup]=\"education5\">\n                                <div>\n                                    <i (click)=\"XoaHocVan(item1)\"   class=\"fa fa-remove\" style=\"margin-left: 1122px;font-size:36px\"></i>\n                                </div> \n                                <div class=\"row\">\n                              <div class=\"col-sm-12\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">star</i>\n                                  </span>\n                                  <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Chuyên ngành\n                                      <small class='text-red'>*</small>\n                                    </label>\n                                    <input formControlName=\"chuyenNganh\"  name=\"subject\" type=\"text\" class=\"form-control\" required>\n                                  </div>\n                                </div>\n                              </div>\n                                </div>\n                                <div class=\"row\">\n                              <div class=\"col-sm-6\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">school</i>\n                                  </span>\n                                  <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Trường\n                                      <small class='text-red'>*</small>\n                                    </label>\n                                    <input formControlName=\"Truong\"  name=\"school\" type=\"text\" class=\"form-control\" required>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-sm-6\">\n                                <div class=\"select-wrapper\">\n                                  <label class=\"control-label select-label\">Bằng cấp\n                                    <small class='text-red'>*</small>\n                                  </label>\n                                  <select formControlName=\"bangCap\"  class=\" form-control education-select\" name=\"qualification\" title=\"Single Select\" required>\n                                    <option  value=\"\">Vui lòng chọn...</option>\n                                    <option   value=\"Đại học\" data-weight=\"1\">Đại học</option>\n                                    <option   value=\"Cao đẳng\" data-weight=\"2\">Cao đẳng</option>\n                                    <option value=\"Trung cấp\" data-weight=\"3\">Trung cấp</option>\n                                  </select>\n                                </div>\n                              </div>\n                                </div>\n                                <div class=\"row\">\n                              <div class=\"col-sm-6\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">date_range</i>\n                                  </span>\n                                  <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Từ tháng\n                                    </label>\n                                    <p-calendar formControlName=\"start\" (onSelect)=\"doSomething1(DateEducation1)\"  [minDate]=\"minDateEducation\" [readonlyInput]=\"true\"></p-calendar>\n                                  \n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-sm-6\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">date_range</i>\n                                  </span>\n                                  <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Đến tháng\n                                    </label>\n                                    <p-calendar formControlName=\"end\" [minDate]=\"minDateEducation\" [readonlyInput]=\"true\"></p-calendar>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            \n                            </form>\n                        </div>\n                        </div>\n                   \n                   \n                    <div id=\"educationSection\">\n                    </div>\n\n                    <button id=\"addMoreEducation\" (click)=\"Education()\" class=\"btn-add-more\">Add more</button>\n                  </div>  \n                   <div id=\"tabReference\" class=\"panel-content\">\n                    <h3>Thông Tin Tham Khảo</h3>\n                    \n                      \n                    <div *ngFor=\"let item of hocVan\">\n                      <div *ngIf=\"item==1\">\n                          <form [formGroup]=\"hocVan1\">\n                              <div class=\"row\">\n                                  <div>\n                                      <i (click)=\"xoaThongTin(item)\"  class=\"fa fa-remove\" style=\"margin-left: 1122px;font-size:36px\"></i>\n                                  </div>\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">face</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Họ Tên\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"hoTen\" name=\"name\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">phone</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Số điện thoại\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"soDienThoai\" name=\"phone\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                              </div>\n                              <div class=\"row\">\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">home</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Công Ty\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"congTy\" name=\"company\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">event_note</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Chức Danh\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"chucDanh\" name=\"position\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                              </div>\n                              <div class=\"row\">\n                          <div class=\"col-sm-12\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">email</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Email\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"email\" name=\"email\" type=\"email\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                             </div>\n                          </form>   \n                       </div>\n                       <div *ngIf=\"item==2\">\n                          <form [formGroup]=\"hocVan2\">\n                              <div class=\"row\">\n                                  <div>\n                                      <i (click)=\"xoaThongTin(item)\"  class=\"fa fa-remove\" style=\"margin-left: 1122px;font-size:36px\"></i>\n                                  </div>\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">face</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Họ Tên\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"hoTen\" name=\"name\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">phone</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Số điện thoại\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"soDienThoai\" name=\"phone\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                              </div>\n                              <div class=\"row\">\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">home</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Công Ty\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"congTy\" name=\"company\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">event_note</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Chức Danh\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"chucDanh\" name=\"position\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                              </div>\n                              <div class=\"row\">\n                          <div class=\"col-sm-12\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">email</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Email\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"email\" name=\"email\" type=\"email\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                             </div>\n                          </form>   \n                       </div>\n                       <div *ngIf=\"item==3\">\n                          <form [formGroup]=\"hocVan3\">\n                              <div class=\"row\">\n                                  <div>\n                                      <i (click)=\"xoaThongTin(item)\"  class=\"fa fa-remove\" style=\"margin-left: 1122px;font-size:36px\"></i>\n                                  </div>\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">face</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Họ Tên\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"hoTen\" name=\"name\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">phone</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Số điện thoại\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"soDienThoai\" name=\"phone\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                              </div>\n                              <div class=\"row\">\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">home</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Công Ty\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"congTy\" name=\"company\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">event_note</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Chức Danh\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"chucDanh\" name=\"position\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                              </div>\n                              <div class=\"row\">\n                          <div class=\"col-sm-12\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">email</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Email\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"email\" name=\"email\" type=\"email\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                             </div>\n                          </form>   \n                       </div>\n                       <div *ngIf=\"item==4\">\n                          <form [formGroup]=\"hocVan4\">\n                              <div class=\"row\">\n                                  <div>\n                                      <i (click)=\"xoaThongTin(item)\"  class=\"fa fa-remove\" style=\"margin-left: 1122px;font-size:36px\"></i>\n                                  </div>\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">face</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Họ Tên\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"hoTen\" name=\"name\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">phone</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Số điện thoại\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"soDienThoai\" name=\"phone\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                              </div>\n                              <div class=\"row\">\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">home</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Công Ty\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"congTy\" name=\"company\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-6\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">event_note</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Chức Danh\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"chucDanh\" name=\"position\" type=\"text\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                              </div>\n                              <div class=\"row\">\n                          <div class=\"col-sm-12\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">email</i>\n                              </span>\n                              <div class=\"form-group label-floating\">\n                                <label class=\"control-label\">Email\n                                  <small class='text-red'>*</small>\n                                </label>\n                                <input formControlName=\"email\" name=\"email\" type=\"email\" class=\"form-control\" required>\n                              </div>\n                            </div>\n                          </div>\n                             </div>\n                          </form>   \n                       </div>\n                  \n                    </div>\n                     \n                      \n                   \n\n                    <div id=\"referenceSection\">\n                    </div>\n                    <button (click)=\"HocVan()\" id=\"addMoreReference\" class=\"btn-add-more\">Add more</button>\n                  </div> \n                </div>\n               \n                </form>\n\n\n              </div>\n            </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n            <!-- phan 2 -->\n            <div class=\"tab-pane\" id=\"address\">\n              <div class=\"modal-content-2\">\n                \n                \n                <h1 class=\"text-center\" (click)=\"dowload()\">Dowload</h1>\n                \n               \n               \n               \n               \n               <!-- /////////////day ne -->\n                <div class=\"container\" #screen  id=\"wrapper\" >\n                  <div class=\"main-cv\">\n                    \n                    <section class=\"top-cv\">\n                      <div class=\"row\">\n                        <div class=\"col-md-8\">\n                          <h1>Nguyễn Đức Huy</h1>\n                        </div>\n                        \n                        <div class=\"col-md-4\">\n                          <div class=\"image-box ratio-1-1\">\n                            <div class=\"image img-circle\">\n                                <img style=\"margin-left: -81px; width: 350px;height: 380px;padding: 50px;\" [src]=\"imagePath\" id='content' #content >\n                               \n                            </div>\n                            <div style=\"margin-left: 50px;margin-top: 53px;\" *ngIf=\"checkEdit==true\">\n                              <img style=\"width: 100px;height: 100px;\" src=\"https://previews.123rf.com/images/carmenbobo/carmenbobo1412/carmenbobo141200183/34312397-rubber-stamp-with-word-confirm-inside-vector-illustration.jpg\">\n                           </div>\n                            \n                          </div>\n                        </div>\n                      </div>\n                    </section>\n                    <div class=\"row\">\n                      <div class=\"col-md-5\">\n                        <div class=\"box-cv\">\n                          <div class=\"heading\">\n                            <h2>Thông Tin Cơ Bản</h2>\n                          </div>\n                          <!-- bat dau box -->\n                          <div class=\"box-content\">\n                            <div class=\"row\">\n                              <div  style=\"margin-top: -2px\"  class=\"col-md-3 title\">\n                                Họ\n                              </div>\n                              <div class=\"col-md-9 \">:<strong>Nguyễn</strong></div>\n                            </div>\n                            <div class=\"row\">\n                              <div style=\"margin-top: -2px\" class=\"col-md-3 title\">\n                                Tên\n                              </div>\n                              <div style=\"margin-top: -2px\"  class=\"col-md-9 \">:<strong>{{candidate.Name}}</strong></div>\n                            </div>\n                            <div class=\"row\">\n                              <div style=\"margin-top: -2px\" class=\"col-md-3 title\">\n                                Chuyên Ngành\n                              </div>\n                              <div class=\"col-md-9 \">:<strong>{{candidate.Faculty}}</strong></div>\n                            </div>\n                            <div  class=\"row\">\n                              <div style=\"margin-top: -2px\" class=\"col-md-3 title\">\n                                Kinh Nghiệm\n                              </div>\n                              <div class=\"col-md-9 \">:<strong>{{candidate.kinhNghiem}}</strong></div>\n                            </div>\n                           \n                            <div style=\"margin-top: -2px\" class=\"row\">\n                              <div style=\"margin-top: -2px\"   class=\"col-md-3 title\">\n                               Email\n                              </div>\n                              <div class=\"col-md-9 \">:<strong>{{candidate.Email}}</strong></div>\n                            </div>\n                            <div style=\"margin-top: -2px\" class=\"row\">\n                              <div style=\"margin-top: -2px\"   class=\"col-md-3 title\">\n                               Điện thoại\n                              </div>\n                              <div class=\"col-md-9 \">:<strong>{{candidate.Phone}}</strong></div>\n                            </div>\n                            <div style=\"margin-top: -2px\" class=\"row\">\n                              <div style=\"margin-top: -2px\"   class=\"col-md-3 title\">\n                               Ngày sinh\n                              </div>\n                              <div class=\"col-md-9 \">:<strong>13/2/1997</strong></div>\n                            </div>\n                            <div style=\"margin-top: -2px\" class=\"row\">\n                              <div style=\"margin-top: -2px\"   class=\"col-md-3 title\">\n                               Quốc tịch\n                              </div>\n                              <div class=\"col-md-9 \">:<strong>Việt Nam</strong></div>\n                            </div>\n                            <div style=\"margin-top: -2px\" class=\"row\">\n                              <div style=\"margin-top: -2px\"   class=\"col-md-3 title\">\n                               Gioi tính\n                              </div>\n                              <div class=\"col-md-9 \">:<strong>Nam</strong></div>\n                            </div>\n                            <div style=\"margin-top: -2px\" class=\"row\">\n                              <div style=\"margin-top: -2px\"   class=\"col-md-3 title\">\n                               Địa chỉ\n                              </div>\n                              <div class=\"col-md-9 \">:<strong>Khu phố 2,Thị trấn Châu Thành,Tây Ninh</strong></div>\n                            </div>\n\n                          </div>\n                          <!--  end box content -->\n                        </div>\n                        <div class=\"box-cv\">\n                          <div class=\"heading\">\n                            <h2>Mô tả bản thân</h2>\n                          </div>\n                          <div>\n                            <p> {{candidate.kinhNghiem}}</p>\n                          </div>\n                        </div>\n                        <div class=\"box-cv\">\n                          <div class=\"heading\">\n                            <h2>Ngôn Ngữ</h2>\n                          </div>\n                          <!-- bat dau box -->\n                          <ul class=\"timeline\">\n                          <div class=\"box-content\">\n                            <div class=\"row\">\n                              <div class=\"col-md-3 title\" style=\"margin-top: 1px;\">\n                                {{ngonNgu}}\n                              </div>\n                              <div class=\"col-md-9 \">:<strong>   {{danhGiaNgonNgu}}</strong></div>\n                            </div>\n                           \n                            <div *ngFor=\"let item of language\">\n                             \n                                <div *ngIf=\"item==1\">\n                                    <h3>{{x1.ngonNgu}}:{{x1.danhGia}}</h3>\n                                 </div>\n                                <div *ngIf=\"item==2\">\n                                    <h3>{{x2.ngonNgu}}:{{x2.danhGia}}</h3>\n                                </div>\n                                <div *ngIf=\"item==3\">\n                                    <h3>{{x3.ngonNgu}}:{{x3.danhGia}}</h3>\n                                </div>\n                                <div *ngIf=\"item==4\">\n                                    <h3>{{x4.ngonNgu}}:{{x4.danhGia}}</h3>\n                                </div>\n                                \n\n                            </div>\n                            \n                            \n                          </div>\n                          </ul>\n                          <!--  end box content -->\n                        </div>\n                        <div class=\"box-cv\">\n                          <div class=\"heading\">\n                            <h2>Kỹ năng</h2>\n                          </div>\n\n                          <div class=\"ui-g\">\n                              <div class=\"ui-g-12\">\n                                  <div class=\"ui-g\">\n                                      <div class=\"ui-g-6\">\n                                              .Net\n                                      </div>\n                                      <div   class=\"ui-g-6\" style=\"margin-top: -14px;margin-left: -121px;\">\n                                              <rating   [(ngModel)]=\"val1\" [readonly]=\"true\"></rating><br>\n                                      </div>\n                                  \n                                  </div>\n                              </div>\n                              <div class=\"ui-g-12\">\n                                      <div class=\"ui-g\">\n                                          <div class=\"ui-g-6\">\n                                                  HTML/CSS\n                                          </div>\n                                          <div class=\"ui-g-6\"  style=\"margin-top: -14px;margin-left: -121px;\">\n                                                  <rating   [(ngModel)]=\"val2\" [readonly]=\"true\" ></rating><br>\n                                          </div>\n                                      \n                                      </div>\n                              </div>\n                               <div class=\"ui-g-12\">\n                                      <div class=\"ui-g\">\n                                          <div class=\"ui-g-6\">\n                                                  C/C++\n                                          </div>\n                                          <div class=\"ui-g-6 \" style=\"margin-top: -14px;margin-left: -121px;\">\n                                                  <rating  [(ngModel)]=\"val3\" [readonly]=\"true\"></rating><br>\n                                          </div>\n                                        \n                                      </div>\n                              </div>\n                              <div class=\"ui-g-12\">\n                                      <div class=\"ui-g\">\n                                          <div class=\"ui-g-6\">\n                                                  Tester\n                                          </div>\n                                          <div class=\"ui-g-6\"  style=\"margin-top: -14px;margin-left: -121px;\">\n                                                  <rating   [(ngModel)]=\"val4\" [readonly]=\"true\"></rating><br>\n                                          </div>\n                                       \n                                      </div>\n                              </div>\n                              <div class=\"ui-g-12\">\n                                      <div class=\"ui-g\">\n                                          <div class=\"ui-g-6\">\n                                                  IOS/Android\n                                          </div>\n                                          <div class=\"ui-g-6\"  style=\"margin-top: -14px;margin-left: -121px;\">\n                                                  <rating  [(ngModel)]=\"val5\" [readonly]=\"true\"></rating><br>\n                                          </div>\n                                         \n                                      </div>\n                              </div> \n                           \n                          </div>\n      \n                          <!-- <div class=\"row\">\n                              <div class=\"col-sm-6\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">extension</i>\n                                  </span>\n                                <div class=\"form-group label-floating\">\n                                  \n                                      <small class='text-red'>*</small>\n                                    \n                                    <select class=\"form-control skill-selection\" required>\n                                      <option value=\"sa\">.Net</option>\n                                    </select>\n                                </div>\n                                <div class=\"form-group label-floating\">\n                                  \n                                  <small class='text-red'>*</small>\n                                \n                                <select class=\"form-control skill-selection\" required>\n                                  <option value=\"sa\">HTML/CSS</option>\n                                </select>\n                                </div>\n                                \n                                <div class=\"form-group label-floating\">\n                                  \n                                  <small class='text-red'>*</small>\n                                \n                                <select class=\"form-control skill-selection\" required>\n                                  <option value=\"sa\">C/C++</option>\n                                </select>\n                                </div>\n                               \n                                <div class=\"form-group label-floating\">\n                                  \n                                  <small class='text-red'>*</small>\n                                \n                                <select class=\"form-control skill-selection\" required>\n                                  <option value=\"sa\">Tester</option>\n                                </select>\n                                </div>\n          \n                                <div class=\"form-group label-floating\">\n                                  \n                                  <small class='text-red'>*</small>\n                                \n                                <select class=\"form-control skill-selection\" required>\n                                  <option value=\"sa\">IOS/Android</option>\n                                </select>\n                                </div>\n          \n                                </div>\n                              </div>\n                              <div  class=\"col-sm-6\" style=\"margin-top: 31px;\">\n                                  <div>\n                                  <rating [(ngModel)]=\"val1\" [readonly]=\"true\"></rating><br>\n                                  <div>\n                                      <rating [(ngModel)]=\"val2\" [readonly]=\"true\"></rating><br>\n                                  </div>\n                                   <div>\n                                      <rating [(ngModel)]=\"val3\" [readonly]=\"true\"></rating><br>\n                                  </div> \n                                 \n                                  <div>\n                                      <rating [(ngModel)]=\"val4\" [readonly]=\"true\"></rating><br>\n                                  </div>\n                                  <div>\n                                      <rating [(ngModel)]=\"val5\" [readonly]=\"true\"></rating><br>  \n                                  </div>\n                                  \n                                  </div>\n                                </div>\n                            </div> -->\n                          <!-- bat dau box -->\n                          <!-- <div class=\"box-content\">\n                            <div class=\"row\">\n                              <div class=\"col-md-3 title\">\n                                HTML/CSS\n                              </div>\n                              <div class=\"col-md-9 star\">\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star-half\"></i>\n                                \n                              </div>\n                            </div>\n                            <div class=\"row\">\n                              <div class=\"col-md-3 title\">\n                                JQUERY\n                              </div>\n                              <div class=\"col-md-9 star\">\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star-half\"></i>\n                                \n                              </div>\n                            </div>\n                            <div class=\"row\">\n                              <div class=\"col-md-3 title\">\n                                ODOO\n                              </div>\n                              <div class=\"col-md-9 star\">\n                                <i class=\"fas fa-star\"></i>\n                                \n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star-half\"></i>\n                                <i class=\"far fa-star\"></i>\n                                \n                              </div>\n                            </div>\n                            <div class=\"row\">\n                              <div class=\"col-md-3 title\">\n                                LARAVEL\n                              </div>\n                              <div class=\"col-md-9 star\">\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                \n                              </div>\n                            </div>\n                          </div> -->\n                          <!--  end box content -->\n\n                        </div>\n                      </div>\n                       <div class=\"col-md-7\">\n                        <div class=\"box-cv\">\n                          <div class=\"heading\">\n                            <h2>Kinh nghiệm làm việc</h2>\n                          </div>\n                          <div *ngFor=\"let item of experience\">\n                            <div *ngIf=\"item==1\">\n                                <ul class=\"timeline\">\n                                    <li class=\"event\" data-date=\"65Million B.C.\">\n                                      <h3>Công ty:{{e1.congTy}}</h3>\n                                      <h5>Vi trị làm việc:{{e1.viTri}}</h5>\n                                      <p>Mô tả công việc:{{e1.moTaCongViec}}</p>\n                                    </li>\n                                    <li class=\"event\" data-date=\"2005\">\n                                      <h3>Ngày bắt đầu:{{e1.start | date:\"dd/MM/yyyy\"}}</h3>\n                                      <h3>Ngày kết thúc:{{e1.endDate | date:\"dd/MM/yyyy\"}}</h3>\n                                    \n                                    </li>\n                                 </ul>\n                            </div>\n                            <div *ngIf=\"item==2\">\n                                <ul class=\"timeline\">\n                                    <li class=\"event\" data-date=\"65Million B.C.\">\n                                      <h3>Công ty:{{e2.congTy}}</h3>\n                                      <h5>Vi trị làm việc:{{e2.viTri}}</h5>\n                                      <p>Mô tả công việc:{{e2.moTaCongViec}}</p>\n                                    </li>\n                                    <li class=\"event\" data-date=\"2005\">\n                                      <h3>Ngày bắt đầu:{{e2.start | date:\"dd/MM/yyyy\"}}</h3>\n                                      <h3>Ngày kết thúc:{{e2.endDate | date:\"dd/MM/yyyy\"}}</h3>\n                                    \n                                    </li>\n                                 </ul>\n                            </div>\n                            <div *ngIf=\"item==3\">\n                                <ul class=\"timeline\">\n                                    <li class=\"event\" data-date=\"65Million B.C.\">\n                                      <h3>Công ty:{{e3.congTy}}</h3>\n                                      <h5>Vi trị làm việc:{{e3.viTri}}</h5>\n                                      <p>Mô tả công việc:{{e3.moTaCongViec}}</p>\n                                    </li>\n                                    <li class=\"event\" data-date=\"2005\">\n                                      <h3>Ngày bắt đầu:{{e3.start | date:\"dd/MM/yyyy\"}}</h3>\n                                      <h3>Ngày kết thúc:{{e3.endDate | date:\"dd/MM/yyyy\"}}</h3>\n                                    \n                                    </li>\n                                 </ul>\n                            </div>\n                            <div *ngIf=\"item==4\">\n                                <ul class=\"timeline\">\n                                    <li class=\"event\" data-date=\"65Million B.C.\">\n                                      <h3>Công ty:{{e4.congTy}}</h3>\n                                      <h5>Vi trị làm việc:{{e4.viTri}}</h5>\n                                      <p>Mô tả công việc:{{e4.moTaCongViec}}</p>\n                                    </li>\n                                    <li class=\"event\" data-date=\"2005\">\n                                      <h3>Ngày bắt đầu:{{e4.start | date:\"dd/MM/yyyy\"}}</h3>\n                                      <h3>Ngày kết thúc:{{e4.endDate | date:\"dd/MM/yyyy\"}}</h3>\n                                    \n                                    </li>\n                                 </ul>\n                            </div>\n                            <div *ngIf=\"item==5\">\n                                <ul class=\"timeline\">\n                                    <li class=\"event\" data-date=\"65Million B.C.\">\n                                      <h3>Công ty:{{e5.congTy}}</h3>\n                                      <h5>Vi trị làm việc:{{e5.viTri}}</h5>\n                                      <p>Mô tả công việc:{{e5.moTaCongViec}}</p>\n                                    </li>\n                                    <li class=\"event\" data-date=\"2005\">\n                                      <h3>Ngày bắt đầu:{{e5.start | date:\"dd/MM/yyyy\"}}</h3>\n                                      <h3>Ngày kết thúc:{{e5.endDate | date:\"dd/MM/yyyy\"}}</h3>\n                                    \n                                    </li>\n                                 </ul>\n                            </div>\n                         \n                          </div>\n\n                        </div>\n                 <div class=\"box-cv\">\n                          <div class=\"heading\">\n                            <h2>hỌC VẤN</h2>\n                          </div>\n                          <div *ngFor=\"let item of education\">\n                            \n                          <div *ngIf=\"item==1\">\n                          <ul class=\"timeline\">\n                            <li class=\"event\" data-date=\"65Million B.C.\">\n                              <h3>Trường:{{bangCap1.truong}}</h3>\n                              <h5>Chuyên ngành:{{bangCap1.chuyenNganh}}</h5>\n                           </li>\n                            <li class=\"event\" data-date=\"2005\">\n                              <h3>Bằng cấp:{{bangCap1.bangCap}}</h3>\n                              <h5>Ngày bắt đầu:{{bangCap1.start  | date:\"dd/MM/yyyy\"}}</h5>\n                              <h5>Ngày kết thúc:{{bangCap1.end  | date:\"dd/MM/yyyy\"}}</h5>\n                            </li>\n                          </ul>\n                          </div>\n                          <div *ngIf=\"item==2\">\n                              <ul class=\"timeline\">\n                                <li class=\"event\" data-date=\"65Million B.C.\">\n                                  <h3>Trường:{{bangCap2.truong}}</h3>\n                                  <h5>Chuyên ngành:{{bangCap2.chuyenNganh}}</h5>\n                               </li>\n                                <li class=\"event\" data-date=\"2005\">\n                                  <h3>Bằng cấp:{{bangCap1.bangCap}}</h3>\n                                  <h5>Ngày bắt đầu:{{bangCap2.start  | date:\"dd/MM/yyyy\"}}</h5>\n                                  <h5>Ngày kết thúc:{{bangCap2.end  | date:\"dd/MM/yyyy\"}}</h5>\n                                </li>\n                              </ul>\n                          </div>\n                          <div *ngIf=\"item==3\">\n                              <ul class=\"timeline\">\n                                <li class=\"event\" data-date=\"65Million B.C.\">\n                                  <h3>Trường:{{bangCap3.truong}}</h3>\n                                  <h5>Chuyên ngành:{{bangCap3.chuyenNganh}}</h5>\n                               </li>\n                                <li class=\"event\" data-date=\"2005\">\n                                  <h3>Bằng cấp:{{bangCap3.bangCap}}</h3>\n                                  <h5>Ngày bắt đầu:{{bangCap3.start  | date:\"dd/MM/yyyy\"}}</h5>\n                                  <h5>Ngày kết thúc:{{bangCap3.end  | date:\"dd/MM/yyyy\"}}</h5>\n                                </li>\n                              </ul>\n                          </div>\n                          <div *ngIf=\"item==4\">\n                              <ul class=\"timeline\">\n                                <li class=\"event\" data-date=\"65Million B.C.\">\n                                  <h3>Trường:{{bangCap4.truong}}</h3>\n                                  <h5>Chuyên ngành:{{bangCap4.chuyenNganh}}</h5>\n                               </li>\n                                <li class=\"event\" data-date=\"2005\">\n                                  <h3>Bằng cấp:{{bangCap4.bangCap}}</h3>\n                                  <h5>Ngày bắt đầu:{{bangCap4.start  | date:\"dd/MM/yyyy\"}}</h5>\n                                  <h5>Ngày kết thúc:{{bangCap4.end  | date:\"dd/MM/yyyy\"}}</h5>\n                                </li>\n                              </ul>\n                          </div>\n                          <div *ngIf=\"item==5\">\n                              <ul class=\"timeline\">\n                                <li class=\"event\" data-date=\"65Million B.C.\">\n                                  <h3>Trường:{{bangCap5.truong}}</h3>\n                                  <h5>Chuyên ngành:{{bangCap5.chuyenNganh}}</h5>\n                               </li>\n                                <li class=\"event\" data-date=\"2005\">\n                                  <h3>Bằng cấp:{{bangCap5.bangCap}}</h3>\n                                  <h5>Ngày bắt đầu:{{bangCap5.start  | date:\"dd/MM/yyyy\"}}</h5>\n                                  <h5>Ngày kết thúc:{{bangCap5.end  | date:\"dd/MM/yyyy\"}}</h5>\n                                </li>\n                              </ul>\n                          </div>\n                          </div>\n                    \n                  </div>\n\n\n\n\n                        <div class=\"box-cv\">\n                          <div class=\"heading\">\n                            <h2>Thông tin tham khảo</h2>\n                          </div>\n                          <ul class=\"timeline\">\n                            <li class=\"event\" data-date=\"65Million B.C.\">\n                              <h3>Họ tên:{{hv1.hoTen}}</h3>\n                              <h5>Số điện thoại:{{hv1.soDienThoai}}</h5>\n                            </li>\n                            <li class=\"event\" data-date=\"2005\">\n                              <h3>Công ty:{{hv1.congTy}}</h3>\n                              <h5>Chức danh:{{hv1.chucDanh}}</h5>\n                              <p>Email:{{hv1.email}}</p>\n                            </li>\n                          </ul>\n                        </div>\n                      </div> \n                    </div>\n                  </div>\n              </div>\n\n                \n                \n\n              </div>\n              <div style=\"margin-left: 704px;\">\n                <div class=\"btn btn-primary\" (click)=\"OK()\">OK</div> \n                <button class=\"btn btn-primary\" (click)=\"Export()\">Cập nhật CV</button> \n             </div>\n            </div>\n           \n          </div>\n      \n          <!-- cap nhat CV   end tab content -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<!-- <div class=\"btn btn-primary\" (click)=\"OK()\">OK</div> \n<button (click)=\"Export()\">PDF</button>  -->\n<div [style.visibility]=\"'hidden'\">\n    <img #canvas>\n    <a #downloadLink></a>\n</div>\n<!-- <img  [style.visibility]=\"hidden\" [src]=\"imagePath\" id='content' #content > -->\n\n\n\n<script src=\"./assets/js/jquery.js\"></script>\n\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery-bar-rating/1.2.2/jquery.barrating.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/js/bootstrap-datepicker.min.js\"></script>\n\n\n\n\n\n\n\n<script type=\"text/javascript\">\n  function get_action() { // inside script tags\n   alert('abcde')\n   }\n</script>"

/***/ }),

/***/ "./src/app/test/test/test.component.scss":
/*!***********************************************!*\
  !*** ./src/app/test/test/test.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-md-3 title {\n  margin-top: -2px; }\n\n.my-custom-class .tooltip-inner {\n  background-color: darkgreen;\n  font-size: 125%; }\n\n.my-custom-class .arrow::before {\n  border-top-color: darkgreen; }\n\nbody .ui-inputtext {\n  font-size: 14px;\n  color: #333333;\n  background: #ffffff;\n  padding: 0.429em;\n  border: 1px solid #a6a6a6;\n  transition: border-color 0.2s;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  width: 496px;\n  appearance: none; }\n\n.tab {\n  width: 300px;\n  top: 110px;\n  position: fixed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC90ZXN0L0U6XFxXZWJNVkNcXEZyb250ZW5kVUlIXFxGcm9udGVuZFVJSC9zcmNcXGFwcFxcdGVzdFxcdGVzdFxcdGVzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLDJCQUEyQjtFQUMzQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBS3BCO0VBQ0UsWUFBVztFQUNYLFVBQVU7RUFDVixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90ZXN0L3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbWQtMyB0aXRsZVxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG59XHJcbi5teS1jdXN0b20tY2xhc3MgLnRvb2x0aXAtaW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xyXG4gICAgZm9udC1zaXplOiAxMjUlO1xyXG4gIH1cclxuICAubXktY3VzdG9tLWNsYXNzIC5hcnJvdzo6YmVmb3JlIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IGRhcmtncmVlbjtcclxuICB9XHJcbiAgYm9keSAudWktaW5wdXR0ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDAuNDI5ZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE2O1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnM7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB3aWR0aDogNDk2cHg7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbi50YWJ7XHJcbiAgd2lkdGg6MzAwcHg7XHJcbiAgdG9wOiAxMTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbiNteS1ub2RlLCAucGFuZWwtY29udGVudHtcclxuICAgLy9tYXJnaW4tbGVmdDogLTI1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/test/test/test.component.ts":
/*!*********************************************!*\
  !*** ./src/app/test/test/test.component.ts ***!
  \*********************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_service_point_candidate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/point-candidate.service */ "./src/app/service/point-candidate.service.ts");
/* harmony import */ var src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/candidate.service */ "./src/app/service/candidate.service.ts");
/* harmony import */ var src_app_models_infoCandidate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/infoCandidate */ "./src/app/models/infoCandidate.ts");
/* harmony import */ var src_app_service_job_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/job.service */ "./src/app/service/job.service.ts");
/* harmony import */ var src_app_models_ImageCV__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/ImageCV */ "./src/app/models/ImageCV.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_Langugae__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/models/Langugae */ "./src/app/models/Langugae.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_models_Experience__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/models/Experience */ "./src/app/models/Experience.ts");
/* harmony import */ var src_app_models_BangCap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/models/BangCap */ "./src/app/models/BangCap.ts");
/* harmony import */ var src_app_models_HocVan__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/models/HocVan */ "./src/app/models/HocVan.ts");

















var TestComponent = /** @class */ (function () {
    function TestComponent(datepipe, router, _sanitizer, jobService, candidateService, point, fb) {
        this.datepipe = datepipe;
        this.router = router;
        this._sanitizer = _sanitizer;
        this.jobService = jobService;
        this.candidateService = candidateService;
        this.point = point;
        this.fb = fb;
        this.htmlToImage = __webpack_require__(/*! html-to-image */ "./node_modules/html-to-image/lib/index.js");
        //lay dc thong tin ung vien cho vao bien CV
        this.list = [];
        this.tk = [];
        this.infoStudent1 = [];
        this.val = 3;
        this.check1 = "visible";
        this.check2 = "hidden";
        this.kiemTra = true;
        this.nrSelect = "Nữ";
        this.nrSelect1 = "Độc thân";
        this.nrSelect3 = 'Tây Ninh';
        this.myDate = new Date("1997-02-12");
        this.Image = new src_app_models_ImageCV__WEBPACK_IMPORTED_MODULE_9__["ImageCV"]();
        this.checkEdit = true;
        this.playerName = "ConCa";
        //Ngày 6/6/2019
        this.language = [];
        this.itemLanguage = 0;
        this.userformLanguage = "";
        this.x1 = new src_app_models_Langugae__WEBPACK_IMPORTED_MODULE_12__["languge"]();
        this.x2 = new src_app_models_Langugae__WEBPACK_IMPORTED_MODULE_12__["languge"]();
        this.x3 = new src_app_models_Langugae__WEBPACK_IMPORTED_MODULE_12__["languge"]();
        this.x4 = new src_app_models_Langugae__WEBPACK_IMPORTED_MODULE_12__["languge"]();
        this.x5 = new src_app_models_Langugae__WEBPACK_IMPORTED_MODULE_12__["languge"]();
        //lam kinh nghiệm làm việc
        this.minDate = new Date(2019, 5, 1);
        this.year = "";
        this.month = "";
        this.day = "";
        this.item = "";
        this.experience = [];
        this.itemExperience = 0;
        this.e1 = new src_app_models_Experience__WEBPACK_IMPORTED_MODULE_14__["expericen"]();
        this.e2 = new src_app_models_Experience__WEBPACK_IMPORTED_MODULE_14__["expericen"]();
        this.e3 = new src_app_models_Experience__WEBPACK_IMPORTED_MODULE_14__["expericen"]();
        this.e4 = new src_app_models_Experience__WEBPACK_IMPORTED_MODULE_14__["expericen"]();
        this.e5 = new src_app_models_Experience__WEBPACK_IMPORTED_MODULE_14__["expericen"]();
        //lam học vấn va bang cap
        this.education = [];
        this.itemEducation = 0;
        this.minDateEducation = new Date(2019, 5, 1);
        this.bangCap1 = new src_app_models_BangCap__WEBPACK_IMPORTED_MODULE_15__["bangCap"]();
        this.bangCap2 = new src_app_models_BangCap__WEBPACK_IMPORTED_MODULE_15__["bangCap"]();
        this.bangCap3 = new src_app_models_BangCap__WEBPACK_IMPORTED_MODULE_15__["bangCap"]();
        this.bangCap4 = new src_app_models_BangCap__WEBPACK_IMPORTED_MODULE_15__["bangCap"]();
        this.bangCap5 = new src_app_models_BangCap__WEBPACK_IMPORTED_MODULE_15__["bangCap"]();
        //thong Tin tham khảo
        this.hocVan = [];
        this.itemHocVan = 0;
        this.hv1 = new src_app_models_HocVan__WEBPACK_IMPORTED_MODULE_16__["hocVan"]();
        this.hv2 = new src_app_models_HocVan__WEBPACK_IMPORTED_MODULE_16__["hocVan"]();
        this.hv3 = new src_app_models_HocVan__WEBPACK_IMPORTED_MODULE_16__["hocVan"]();
        this.hv4 = new src_app_models_HocVan__WEBPACK_IMPORTED_MODULE_16__["hocVan"]();
        this.hv5 = new src_app_models_HocVan__WEBPACK_IMPORTED_MODULE_16__["hocVan"]();
        //
        this.checkTest = true;
        this.checkTest1 = false;
        this.check = true;
        this.selected = 0;
        this.hovered = 0;
        this.readonly = false;
        this.fileToUpload = null;
        this.userform = this.fb.group({
            'ho': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'ten': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'chucDanh': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'capBac': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'soNamKinhNghiem': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'img': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'soDienThoai': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'ngaySinh': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'quocTich': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'gioiTinh': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'tinhTrang': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'quocGia': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'tinh': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'diaChi': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Khu phố 2,Thị trấn Châu thành,Tây Ninh', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'moTa1': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'kyNang1': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'kyNang2': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'kyNang3': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'kyNang4': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'kyNang5': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'thongTin': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'ngonNgu': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'danhGiaNgonNgu': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'congTy': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'viTri': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'ngayBatDau': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'ngayKetThuc': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'moTaCongViec': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.userformkinhNgiem = this.fb.group({
            'congTy': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'chucDanh': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'startDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'endDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'moTa': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.userform2 = this.fb.group({
            'thongTin': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.userform3 = this.fb.group({
            'xx': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'yy': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        // this.userform1 = this.fb.group({
        //   'email': new FormControl('', Validators.required),
        //   'soDienThoai': new FormControl('', Validators.required),
        //   'ngaySinh': new FormControl('', Validators.required),
        //   'quocTich': new FormControl('', Validators.required),
        //   'gioiTinh': new FormControl('', Validators.required),
        //   'quocGia': new FormControl('', Validators.required),
        //   'tinh': new FormControl('', Validators.required),
        //   'diaChi': new FormControl('', Validators.required),
        // });
    }
    TestComponent.prototype.dowload = function () {
        this.ho = this.userform.value.ho;
        this.ten = this.userform.value.ten;
        this.chucDanh = this.userform.value.chucDanh;
        this.capBac = this.userform.value.capBac;
        this.kinhNghiem = this.userform.value.soNamKinhNghiem;
        this.sdt = this.userform.value.soDienThoai;
        this.ngaySinh = this.userform.value.ngaySinh;
        this.quocTich = this.userform.value.quocTich;
        this.gioiTinh = this.userform.value.gioiTinh;
        this.tinhTrang = this.userform.value.tinhTrang;
        this.quocGia = this.userform.value.quocGia;
        this.diaChi = this.userform.value.diaChi;
        this.email = this.userform.value.email;
        this.moTa1 = this.userform.value.moTa1;
        this.ngonNgu = this.userform.value.ngonNgu;
        this.danhGiaNgonNgu = this.userform.value.danhGiaNgonNgu;
        this.congTy = this.userform.value.congTy;
        this.viTriLamViec = this.userform.value.viTri;
        this.startDate = this.userform.value.ngayBatDau;
        this.endDate = this.userform.value.ngayKetThuc;
        this.moTaCongViec = this.userform.value.moTaCongViec;
        //Ngon ngũ
        for (var i = 0; i < this.language.length; i++) {
            if (this.language[i] == 1) {
                this.x1.ngonNgu = this.langugaeg1.value.ngonNgu;
                this.x1.danhGia = this.langugaeg1.value.danhGia;
            }
            if (this.language[i] == 2) {
                this.x2.ngonNgu = this.langugaeg2.value.ngonNgu2;
                this.x2.danhGia = this.langugaeg2.value.danhGia2;
            }
            if (this.language[i] == 3) {
                this.x3.ngonNgu = this.langugaeg3.value.ngonNgu;
                this.x3.danhGia = this.langugaeg3.value.danhGia;
            }
            if (this.language[i] == 4) {
                this.x4.ngonNgu = this.langugaeg4.value.ngonNgu;
                this.x4.danhGia = this.langugaeg4.value.danhGia;
            }
            if (this.language[i] == 5) {
                this.x5.ngonNgu = this.langugaeg5.value.ngonNgu;
                this.x5.danhGia = this.langugaeg5.value.danhGia;
            }
        }
        //Kinhg nhiem
        for (var i = 0; i < this.experience.length; i++) {
            if (this.experience[i] == 1) {
                this.e1.viTri = this.experience1.value.viTri;
                this.e1.congTy = this.experience1.value.congTy;
                this.e1.start = this.experience1.value.ngayBatDau;
                this.e1.endDate = this.experience1.value.ngayKetThuc;
                this.e1.moTaCongViec = this.experience1.value.moTaCongViec;
            }
            if (this.experience[i] == 2) {
                this.e2.viTri = this.experience1.value.viTri;
                this.e2.congTy = this.experience1.value.congTy;
                this.e2.start = this.experience1.value.ngayBatDau;
                this.e2.endDate = this.experience1.value.ngayKetThuc;
                this.e2.moTaCongViec = this.experience1.value.moTaCongViec;
            }
            if (this.experience[i] == 3) {
                this.e3.viTri = this.experience1.value.viTri;
                this.e3.congTy = this.experience1.value.congTy;
                this.e3.start = this.experience1.value.ngayBatDau;
                this.e3.endDate = this.experience1.value.ngayKetThuc;
                this.e3.moTaCongViec = this.experience1.value.moTaCongViec;
            }
            if (this.experience[i] == 4) {
                this.e4.viTri = this.experience1.value.viTri;
                this.e4.congTy = this.experience1.value.congTy;
                this.e4.start = this.experience1.value.ngayBatDau;
                this.e4.endDate = this.experience1.value.ngayKetThuc;
                this.e4.moTaCongViec = this.experience1.value.moTaCongViec;
            }
            if (this.experience[i] == 5) {
                this.e5.viTri = this.experience1.value.viTri;
                this.e5.congTy = this.experience1.value.congTy;
                this.e5.start = this.experience1.value.ngayBatDau;
                this.e5.endDate = this.experience1.value.ngayKetThuc;
                this.e5.moTaCongViec = this.experience1.value.moTaCongViec;
            }
        }
        //Bang cap
        for (var i = 0; i < this.education.length; i++) {
            if (this.education[i] == 1) {
                this.bangCap1.bangCap = this.education1.value.bangCap;
                this.bangCap1.truong = this.education1.value.Truong;
                this.bangCap1.chuyenNganh = this.education1.value.chuyenNganh;
                this.bangCap1.start = this.education1.value.start;
                this.bangCap1.end = this.education1.value.end;
            }
            if (this.education[i] == 2) {
                this.bangCap2.bangCap = this.education2.value.bangCap;
                this.bangCap2.truong = this.education2.value.Truong;
                this.bangCap2.chuyenNganh = this.education2.value.chuyenNganh;
                this.bangCap2.start = this.education2.value.start;
                this.bangCap2.end = this.education2.value.end;
            }
            if (this.education[i] == 3) {
                this.bangCap3.bangCap = this.education3.value.bangCap;
                this.bangCap3.truong = this.education3.value.Truong;
                this.bangCap3.chuyenNganh = this.education3.value.chuyenNganh;
                this.bangCap3.start = this.education3.value.start;
                this.bangCap3.end = this.education3.value.end;
            }
            if (this.education[i] == 4) {
                this.bangCap4.bangCap = this.education4.value.bangCap;
                this.bangCap4.truong = this.education4.value.Truong;
                this.bangCap4.chuyenNganh = this.education4.value.chuyenNganh;
                this.bangCap4.start = this.education4.value.start;
                this.bangCap4.end = this.education4.value.end;
            }
        }
        //Thông tin liên quan
        for (var i = 0; i < this.hocVan.length; i++) {
            if (i == 0) {
                this.hv1.hoTen = this.hocVan1.value.hoTen;
                this.hv1.soDienThoai = this.hocVan1.value.soDienThoai;
                this.hv1.congTy = this.hocVan1.value.congTy;
                this.hv1.chucDanh = this.hocVan1.value.chucDanh;
                this.hv1.email = this.hocVan1.value.email;
            }
        }
        //this.downloadLink.nativeElement.click();
    };
    TestComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.candidateService._isLogin == false) {
            alert('tai sao');
            this.router.navigate(['login']);
        }
        this.candidate = new src_app_models_infoCandidate__WEBPACK_IMPORTED_MODULE_7__["InforCandidate"]();
        if (this.candidateService.getId() == -1) {
            this.kiemTra = false;
        }
        //b1:Tim ra ung vien
        this.jobService.getInfoCandidate(this.candidateService.getId())
            .subscribe(function (res) {
            // this.candidate=res;
            _this.candidate.Name = res[0].name; //
            _this.candidate.Phone = res[0].phone;
            _this.candidate.Email = res[0].email;
            _this.candidate.YearGraduation = res[0].yearGraduation; //
            _this.candidate.Faculty = res[0].faculty; //
            _this.candidate.NameSchool = res[0].nameSchool;
            _this.candidate.kinhNghiem = res[0].experience; //
            _this.candidate.idUser = _this.candidateService.getId();
        });
        console.log("haha" + this.candidate);
        //b2:Gan giá trị này cho bên kia 
        //lay ra id cua ung vien do->lay ra duoc cac mon hoc->
        this.infoStudent1 = this.point.getMonHoc(this.candidateService.getId()); //cho tat ca mon hoc vao trong day
        //duyet cac ky năng ở trong các môn học
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
    TestComponent.prototype.OK = function () {
        var _this = this;
        html2canvas__WEBPACK_IMPORTED_MODULE_4__(this.screen.nativeElement).then(function (canvas) {
            _this.canvas.nativeElement.src = canvas.toDataURL();
            _this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
            _this.downloadLink.nativeElement.download = 'marble-diagram.png';
            //alert(this.downloadLink.nativeElement.href);
            var file = _this.screen.nativeElement.file;
            var myReader = new FileReader();
            _this.imagePath = canvas.toDataURL("image/png");
            // alert(this.imagePath);
            myReader.onloadend = function (e) {
                _this.image = myReader.result;
            };
            myReader.readAsDataURL(file);
            myReader.onload = function () {
                var base64String = myReader.result.match(/.+;base64,(.+)/)[1];
                _this.x = base64String;
                // alert("taisao"+base64String);
                // alert("cc"+this.img);
                //  alert(base64String);
                _this.imagePath = _this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                    + base64String);
                // this.img=base64String;
            };
            //this.downloadLink.nativeElement.click();
        });
        //   alert("tai sao ko chay vao"+this.imagePath);
        // var node = document.getElementById('my-node');
        // this.htmlToImage.toPng(node)
        // .then(function (dataUrl) {
        //   var img = new Image();
        //   img.src = dataUrl;
        // })
        // .catch(function (error) {
        //   console.error('oops, something went wrong!', error);
        // });
    };
    TestComponent.prototype.Export = function () {
        // let doc=new jsPDF();
        // let specialElemenHandlers={
        //   '#editor':function(element,redderer)
        //   {
        //     return true;
        //   }
        // }
        // let content=this.content.nativeElement;
        // doc.fromHTML(content.innerHTML,15,15,{
        //   'width':300,
        //    'height':300,
        //   'elementHandlers':specialElemenHandlers
        // });
        // doc.addImage(this.img,'JPEG',15,40,300,300);
        // doc.save('test.pdf');
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__();
        doc.setFontSize(40);
        // alert(this.imagePath);
        doc.addImage(this.imagePath, 'JPEG', 15, 40, 200, 200);
        doc.save('flowfr.pdf');
        this.Image.check = this.checkEdit;
        this.Image.UserId = this.candidateService.getId();
        this.Image.Charcode = this.imagePath;
        // alert(this.x);
        this.jobService.urlupdateCV(this.Image).subscribe(function (response) {
        }, function (err) {
        });
    };
    TestComponent.prototype.SUA = function () {
        this.check1 = "hidden";
        this.check2 = "visible";
        this.checkEdit = false;
    };
    TestComponent.prototype.SUA1 = function () {
        this.checkEdit = false;
    };
    TestComponent.prototype.Education = function () {
        this.itemEducation = this.itemEducation + 1;
        this.education.push(this.itemEducation);
        alert(this.itemEducation);
        if (this.itemEducation == 1) {
            this.education1 = this.fb.group({
                'chuyenNganh': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'Truong': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'bangCap': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'start': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'end': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            });
        }
        if (this.itemEducation == 2) {
            this.education2 = this.fb.group({
                'chuyenNganh': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'Truong': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'bangCap': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'start': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'end': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            });
        }
        if (this.itemEducation == 3) {
            this.education3 = this.fb.group({
                'chuyenNganh': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'Truong': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'bangCap': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'start': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'end': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            });
        }
        if (this.itemEducation == 4) {
            this.education4 = this.fb.group({
                'chuyenNganh': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'Truong': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'bangCap': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'start': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'end': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            });
        }
        if (this.itemEducation == 5) {
            this.education5 = this.fb.group({
                'chuyenNganh': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'Truong': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'bangCap': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'start': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'end': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            });
        }
        // addMoreEducation();
    };
    TestComponent.prototype.addNgonNgu = function () {
        this.itemLanguage = this.itemLanguage + 1;
        this.language.push(this.itemLanguage);
        if (this.itemLanguage == 1) {
            this.langugaeg1 = this.fb.group({
                'ngonNgu': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'danhGia': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            });
        }
        if (this.itemLanguage == 2) {
            this.langugaeg2 = this.fb.group({
                'ngonNgu2': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'danhGia2': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            });
        }
        if (this.itemLanguage == 3) {
            this.langugaeg3 = this.fb.group({
                'ngonNgu': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'danhGia': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            });
        }
        if (this.itemLanguage == 4) {
            this.langugaeg4 = this.fb.group({
                'ngonNgu': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'danhGia': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            });
        }
        if (this.itemLanguage == 5) {
            this.langugaeg5 = this.fb.group({
                'ngonNgu': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'danhGia': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            });
        }
    };
    TestComponent.prototype.Xoalanguage = function (x) {
        for (var i = 0; i < this.language.length; i++) {
            if (this.language[i] == x) {
                // alert(this.language[i])
                this.language.splice(i, 1);
            }
        }
    };
    TestComponent.prototype.Experience = function () {
        // addMoreEmployment();
        this.itemExperience = this.itemExperience + 1;
        this.experience.push(this.itemExperience);
        if (this.itemExperience == 1) {
            this.experience1 = this.fb.group({
                'congTy': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'viTri': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'ngayBatDau': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'ngayKetThuc': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'moTaCongViec': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            });
        }
        if (this.itemExperience == 2) {
            this.experience2 = this.fb.group({
                'congTy': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'viTri': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'ngayBatDau': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'ngayKetThuc': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'moTaCongViec': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            });
        }
        if (this.itemExperience == 3) {
            this.experience3 = this.fb.group({
                'congTy': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'viTri': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'ngayBatDau': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'ngayKetThuc': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'moTaCongViec': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            });
        }
        if (this.itemExperience == 4) {
            this.experience4 = this.fb.group({
                'congTy': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'viTri': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'ngayBatDau': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'ngayKetThuc': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'moTaCongViec': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            });
        }
        if (this.itemExperience == 5) {
            this.experience5 = this.fb.group({
                'congTy': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'viTri': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'ngayBatDau': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'ngayKetThuc': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'moTaCongViec': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            });
        }
    };
    TestComponent.prototype.myFunction = function () {
        alert("aaa");
    };
    TestComponent.prototype.chayngaydi = function (id) {
        if (id == "tabUserInfo") {
            this.checkTest = true;
        }
        else {
            this.checkTest = false;
        }
        chayngaydi(id);
        //  this.checkTest1=true;
    };
    TestComponent.prototype.handleFileInput = function (files) {
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
        };
    };
    TestComponent.prototype.doSomething = function (x) {
        this.year = "";
        this.day = "";
        this.month = "";
        //this.minDate=x;
        this.item = this.datepipe.transform(x, 'yyyy-MM-dd');
        this.year += this.item[0];
        this.year += this.item[1];
        console.log(this.year);
        this.year += this.item[2];
        this.year += this.item[3];
        this.month += this.item[5];
        this.month += this.item[6];
        this.day += this.item[8];
        this.day += this.item[9];
        this.day = parseInt(this.day);
        this.day = this.day + 1;
        //  console.log(this.month);
        //  console.log(this.day);
        //  console.log(this.year);
        this.day = parseInt(this.day);
        //  alert(this.day);
        this.minDate.setFullYear(parseInt(this.year), parseInt(this.month) - 1, this.day);
    };
    TestComponent.prototype.doSomething1 = function (x) {
        this.year = "";
        this.day = "";
        this.month = "";
        //this.minDate=x;
        this.item = this.datepipe.transform(x, 'yyyy-MM-dd');
        this.year += this.item[0];
        this.year += this.item[1];
        this.year += this.item[2];
        this.year += this.item[3];
        this.month += this.item[5];
        this.month += this.item[6];
        this.day += this.item[8];
        this.day += this.item[9];
        this.day = parseInt(this.day);
        this.day = this.day + 1;
        //  console.log(this.month);
        //  console.log(this.day);
        //  console.log(this.year);
        this.day = parseInt(this.day);
        //  alert(this.day);
        this.minDateEducation.setFullYear(parseInt(this.year), parseInt(this.month) - 1, this.day);
    };
    TestComponent.prototype.HocVan = function () {
        this.itemHocVan = this.itemHocVan + 1;
        this.hocVan.push(this.itemHocVan);
        if (this.itemHocVan == 1) {
            this.hocVan1 = this.fb.group({
                'hoTen': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'soDienThoai': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'congTy': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'chucDanh': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            });
        }
        if (this.itemHocVan == 2) {
            this.hocVan2 = this.fb.group({
                'hoTen': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'soDienThoai': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'congTy': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'chucDanh': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            });
        }
        if (this.itemHocVan == 3) {
            this.hocVan3 = this.fb.group({
                'hoTen': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'soDienThoai': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'congTy': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'chucDanh': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            });
        }
        if (this.itemHocVan == 4) {
            this.hocVan4 = this.fb.group({
                'hoTen': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'soDienThoai': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'congTy': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'chucDanh': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            });
        }
    };
    TestComponent.prototype.xoaKinhNghiem = function (x) {
        for (var i = 0; i < this.experience.length; i++) {
            if (this.experience[i] == x) {
                // alert(this.language[i])
                this.experience.splice(i, 1);
            }
        }
    };
    TestComponent.prototype.XoaHocVan = function (x) {
        for (var i = 0; i < this.education.length; i++) {
            if (this.education[i] == x) {
                // alert(this.language[i])
                this.education.splice(i, 1);
            }
        }
    };
    TestComponent.prototype.xoaThongTin = function (x) {
        for (var i = 0; i < this.hocVan.length; i++) {
            if (this.hocVan[i] == x) {
                // alert(this.language[i])
                this.hocVan.splice(i, 1);
            }
        }
    };
    TestComponent.prototype.scrollHandler = function (event) {
        // this.checkTest1=false;
        // this.checkTest=false;
        var elmnt = document.getElementById("content");
        var x = elmnt.scrollTop;
        // alert(x);
        // alert('Current scroll from the top: ' + window.pageYOffset);
        // let div_bottom = elmnt.offsetTop;
        // alert(div_bottom);
        var scrollTop = window.pageYOffset;
        if (scrollTop < 193.77777099609375) {
            this.checkTest1 = false;
        }
        else {
            this.checkTest1 = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('screen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TestComponent.prototype, "screen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TestComponent.prototype, "canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('downloadLink'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TestComponent.prototype, "downloadLink", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TestComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TestComponent.prototype, "scrollHandler", null);
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/test/test/test.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"], src_app_service_job_service__WEBPACK_IMPORTED_MODULE_8__["JobService"], src_app_service_candidate_service__WEBPACK_IMPORTED_MODULE_6__["CandidateService"], src_app_service_point_candidate_service__WEBPACK_IMPORTED_MODULE_5__["PointCandidateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ })

}]);
//# sourceMappingURL=test-test-module.js.map