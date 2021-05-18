/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\nhtml body {\n  background: #161616;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' style='enable-background:new 0 0 16 16' xml:space='preserve'%3E%3Crect width='16' fill='none' height='16'/%3E%3Crect x='0' y='0' fill='rgba(255,255,255,0.35)' width='1' height='1'/%3E%3C/svg%3E\");\n  font-family: sans-serif;\n  display: flex;\n  justify-content: flex-end;\n  background-size: 16px;\n  color: #e7e7e7;\n  font-family: \"Roboto\", sans-serif;\n  background-position: -2px -2px; }\n\nmain {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: flex-start;\n  box-sizing: border-box;\n  padding: 10px; }\n  main .main {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 8px; }\n    main .main .content {\n      height: 100%;\n      flex: 1;\n      gap: 1rem;\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      overflow: auto; }\n\n.toolbar {\n  display: flex;\n  width: 100%; }\n  .toolbar-buttons {\n    flex: 1;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1rem; }\n  .toolbar-button {\n    background: #666;\n    color: #e7e7e7;\n    border: 0;\n    padding: 0.7rem 3rem 0.7rem 0.8rem;\n    line-height: 1;\n    cursor: pointer; }\n    .toolbar-button:hover {\n      background: #4d4d4d; }\n    .toolbar-button--active {\n      background: #e49a22; }\n      .toolbar-button--active:hover {\n        background: #bc7d17; }\n  .toolbar .newNote-button {\n    background: #0f62fe;\n    display: flex;\n    align-items: center;\n    padding: 0.7rem 1rem 0.7rem 0.8rem; }\n    .toolbar .newNote-button:hover {\n      background: #0151e8; }\n    .toolbar .newNote-button img {\n      width: 1rem;\n      margin-left: 1rem; }\n\n.searchbar {\n  width: 100%;\n  position: relative;\n  display: flex; }\n  .searchbar input {\n    background: #262626;\n    flex: 1;\n    border: 2px solid transparent;\n    color: #e7e7e7;\n    transition: 0.2s;\n    height: 2.5rem;\n    padding: 1rem;\n    font-size: 0.9rem;\n    box-sizing: border-box; }\n    .searchbar input:hover, .searchbar input:focus {\n      outline: 0;\n      border: 2px solid #e7e7e7; }\n    .searchbar input:valid + .searchbar-button {\n      display: block; }\n  .searchbar-button {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 2.5rem;\n    width: 2.5rem;\n    background: none;\n    border: 0;\n    cursor: pointer; }\n    .searchbar-button:hover {\n      background: rgba(255, 255, 255, 0.05); }\n    .searchbar-button img {\n      height: 1rem; }\n\n.notes {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  width: 100%; }\n  .notes:not(:empty):not(:last-of-type) {\n    padding-bottom: 1rem;\n    padding-top: 1rem; }\n  .notes.notes--pinned .note-pin {\n    opacity: 1; }\n  .notes .note {\n    width: 256px;\n    height: 256px;\n    padding: 0.5rem;\n    background: #262626;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    cursor: pointer;\n    border: 2px solid transparent;\n    box-sizing: border-box;\n    transition: 0.2s; }\n    .notes .note-title {\n      font-size: 1.3rem;\n      padding: 4px;\n      margin-bottom: 10px; }\n    .notes .note-content {\n      font-size: 1rem;\n      overflow: auto;\n      flex: 1; }\n    .notes .note::after {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: #fff;\n      opacity: 0;\n      pointer-events: none;\n      transition: 0.1s; }\n    .notes .note:focus {\n      outline: 0;\n      border: 2px solid #e7e7e7; }\n    .notes .note:hover::after {\n      opacity: 0.05; }\n    .notes .note:hover .note-pin,\n    .notes .note:hover .note-remove {\n      opacity: 1; }\n    .notes .note-pin, .notes .note-remove {\n      opacity: 0;\n      position: absolute;\n      width: 2rem;\n      height: 2rem;\n      padding: 0;\n      display: flex;\n      align-items: center;\n      background: none;\n      border: 0;\n      padding: 4px;\n      transition: 0.1s;\n      cursor: pointer; }\n      .notes .note-pin:hover, .notes .note-remove:hover {\n        background: rgba(255, 255, 255, 0.1); }\n    .notes .note-pin {\n      top: 0;\n      right: 0; }\n    .notes .note-remove {\n      bottom: 0;\n      right: 0; }\n    .notes .note-tags {\n      display: flex;\n      flex-wrap: wrap;\n      margin-bottom: 8px;\n      gap: 4px; }\n      .notes .note-tags li {\n        border-radius: 1rem;\n        font-size: 0.6rem;\n        padding: 4px;\n        background-color: rgba(22, 22, 22, 0.5); }\n    .notes .note-notif {\n      font-size: 0.7rem;\n      margin-bottom: 0.5rem; }\n    .notes .note time {\n      font-size: 0.7rem; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #00000052;\n  align-items: center;\n  justify-content: center;\n  display: none; }\n  .modal--visible {\n    display: flex; }\n  .modal-window {\n    min-width: 400px;\n    min-height: 400px;\n    display: flex;\n    flex-direction: column;\n    background: #161616; }\n  .modal-form {\n    flex: 1;\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    align-items: flex-start; }\n    .modal-form input,\n    .modal-form textarea {\n      background: #262626;\n      color: #e7e7e7;\n      font-family: \"Roboto\", sans-serif;\n      min-height: 1.5rem;\n      border: 2px solid transparent;\n      transition: border 0.2s;\n      width: 100%; }\n      .modal-form input:focus,\n      .modal-form textarea:focus {\n        outline: 0;\n        border: 2px solid #e7e7e7; }\n    .modal-form textarea {\n      resize: none;\n      box-sizing: border-box; }\n    .modal-form-container {\n      width: 100%;\n      gap: 1rem;\n      display: flex; }\n  .modal-buttons {\n    width: 100%;\n    display: flex; }\n    .modal-buttons .modal-button {\n      background: #666;\n      color: #e7e7e7;\n      border: 0;\n      padding: 0.7rem 3rem 0.7rem 0.8rem;\n      line-height: 1;\n      cursor: pointer;\n      width: 50%;\n      text-align: left;\n      transition: 0.2s; }\n      .modal-buttons .modal-button:hover {\n        background: #4d4d4d; }\n      .modal-buttons .modal-button-save {\n        background: #0f62fe; }\n        .modal-buttons .modal-button-save:hover {\n          background: #0151e8; }\n      .modal-buttons .modal-button:disabled {\n        color: #666;\n        background: #161616; }\n  .modal-toggle {\n    display: flex;\n    align-items: center;\n    position: relative;\n    cursor: pointer;\n    user-select: none;\n    gap: 0.5rem; }\n    .modal-toggle input {\n      position: absolute;\n      opacity: 0;\n      cursor: pointer;\n      height: 0;\n      width: 0; }\n      .modal-toggle input:checked ~ .styler {\n        background-color: #0f62fe; }\n        .modal-toggle input:checked ~ .styler::before {\n          left: 1.5rem; }\n    .modal-toggle .styler {\n      width: 3rem;\n      height: 1.5rem;\n      border-radius: 1rem;\n      border: 2px solid transparent;\n      box-sizing: border-box;\n      display: block;\n      background-color: #666;\n      position: relative; }\n      .modal-toggle .styler::before {\n        content: \"\";\n        position: absolute;\n        width: 1.2rem;\n        height: 1.2rem;\n        top: 50%;\n        transform: translateY(-50%);\n        left: 1px;\n        border-radius: 1rem;\n        background-color: #e7e7e7;\n        transition: 0.1s; }\n  .modal-color-picker {\n    display: flex;\n    gap: 1rem; }\n    .modal-color-picker .color-radio {\n      position: relative;\n      cursor: pointer;\n      user-select: none; }\n      .modal-color-picker .color-radio input {\n        position: absolute;\n        opacity: 0;\n        cursor: pointer;\n        height: 0;\n        width: 0; }\n        .modal-color-picker .color-radio input:checked ~ .styler {\n          border: 2px solid white; }\n      .modal-color-picker .color-radio .styler {\n        width: 2rem;\n        height: 2rem;\n        border: 2px solid transparent;\n        border-radius: 1rem;\n        box-sizing: border-box;\n        display: block; }\n  .modal-existing-tags {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1rem; }\n    .modal-existing-tags .tag {\n      display: flex;\n      align-items: center;\n      background: #262626;\n      border: 0;\n      border-radius: 20px;\n      color: #e7e7e7;\n      height: 2rem;\n      padding: 0 8px;\n      cursor: pointer;\n      transition: 0.2s; }\n      .modal-existing-tags .tag:hover {\n        background: #404040; }\n      .modal-existing-tags .tag img {\n        width: 16px;\n        height: 16px;\n        margin-left: 0.5rem; }\n  .modal-tags {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1rem; }\n    .modal-tags .note-tag-container {\n      display: flex;\n      align-items: center; }\n  .modal .modal-small-btn {\n    width: 2rem;\n    height: 2rem;\n    width: 30px;\n    height: 30px;\n    padding: 0;\n    border: 0;\n    font-size: 1.5rem;\n    background: #666;\n    color: #e7e7e7;\n    transition: 0.2s;\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .modal .modal-small-btn:hover, .modal .modal-small-btn:focus {\n      outline: 0;\n      background: #4d4d4d; }\n    .modal .modal-small-btn img {\n      width: 20px; }\n    .modal .modal-small-btn--active {\n      background: #0f62fe; }\n      .modal .modal-small-btn--active:hover, .modal .modal-small-btn--active:focus {\n        outline: 0;\n        background: #0151e8; }\n  .modal .notification-content {\n    flex-direction: column;\n    gap: 0.5rem;\n    display: none; }\n    .modal .notification-content input {\n      box-sizing: border-box; }\n      .modal .notification-content input::-webkit-calendar-picker-indicator {\n        filter: invert(1); }\n    .modal .notification-content--visible {\n      display: flex;\n      animation: notifEntrance 0.2s;\n      transform-origin: left; }\n\n@keyframes notifEntrance {\n  from {\n    transform: scaleX(0);\n    max-width: 0; }\n  to {\n    transform: scaleX(1);\n    max-width: 100%; } }\n\n.bg-illustration {\n  position: fixed;\n  pointer-events: none;\n  bottom: -17vw;\n  right: 0;\n  width: 50%;\n  z-index: -1; }\n\n::-webkit-scrollbar {\n  width: 6px;\n  height: 6px; }\n\n::-webkit-scrollbar-track {\n  background: #161616; }\n\n::-webkit-scrollbar-thumb {\n  background: #666; }\n\n::-webkit-scrollbar-thumb:hover {\n  background: #0f62fe; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************/
/*! exports provided: v1, v3, v4, v5, NIL, version, validate, stringify, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ "./node_modules/uuid/dist/esm-browser/nil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NIL", function() { return _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ "./node_modules/uuid/dist/esm-browser/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _version_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-browser/parse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/nil.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/nil.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/parse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


function parse(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (parse);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["default"] = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/esm-browser/md5.js");


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-browser/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["default"] = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = Object(_parse_js__WEBPACK_IMPORTED_MODULE_1__["default"])(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/version.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/version.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


function version(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ __webpack_exports__["default"] = (version);

/***/ }),

/***/ "./src/UI.ts":
/*!*******************!*\
  !*** ./src/UI.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const appStorage_1 = __webpack_require__(/*! ./appStorage */ "./src/appStorage.ts");
const modal_1 = __webpack_require__(/*! ./modal */ "./src/modal.ts");
const note_1 = __webpack_require__(/*! ./note */ "./src/note.ts");
const toolbar_1 = __webpack_require__(/*! ./toolbar */ "./src/toolbar.ts");
class UI {
    constructor() {
        this.bindEvents();
        this.toolbar = new toolbar_1.Toolbar(this);
        this.toolbar.renderToolbarTags();
    }
    bindEvents() {
        document.getElementById('add-note').addEventListener('click', (e) => {
            new modal_1.Modal(null, this);
        });
    }
    async renderNotes() {
        const notes = await appStorage_1.AppLocalStorage.getInstance().getFromLocalStorage();
        const notesElP = document.getElementById('notes-pinned');
        const notesEl = document.getElementById('notes-other');
        notesEl.innerText = null;
        notesElP.innerText = null;
        notes
            .filter((v) => this.toolbar.activeTag !== null ? v.tags.includes(this.toolbar.activeTag) : true)
            .filter((v) => v.title.toLowerCase().includes(this.toolbar.searchTerm) ||
            v.content.toLowerCase().includes(this.toolbar.searchTerm) ||
            v.tags.some((tag) => tag.toLowerCase().includes(this.toolbar.searchTerm)))
            .forEach((note) => {
            new note_1.Note(note, note.pinned
                ? notesElP
                : notesEl, this);
        });
        this.toolbar.renderToolbarTags();
    }
}
exports.UI = UI;


/***/ }),

/***/ "./src/appStorage.ts":
/*!***************************!*\
  !*** ./src/appStorage.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const notificationService_1 = __webpack_require__(/*! ./notificationService */ "./src/notificationService.ts");
class AppLocalStorage {
    constructor() { }
    static getInstance() {
        if (!AppLocalStorage.instance) {
            AppLocalStorage.instance = new AppLocalStorage();
        }
        return AppLocalStorage.instance;
    }
    async saveToLocalStorage(newNote) {
        var _a;
        const notes = (_a = JSON.parse(localStorage.getItem('CW04_Notes'))) !== null && _a !== void 0 ? _a : [];
        const existingIndex = notes.findIndex(v => v.id === newNote.id);
        if (existingIndex !== -1)
            notes[existingIndex] = newNote;
        else
            notes.push(newNote);
        if (newNote.notification)
            notificationService_1.AppNotifications.getInstance().addNotification(newNote);
        localStorage.setItem('CW04_Notes', JSON.stringify(notes));
        return Promise.resolve(notes);
    }
    async removeFromLocalStorage(id) {
        const notes = JSON.parse(localStorage.getItem('CW04_Notes'));
        notes.splice(notes.findIndex((v) => v.id === id), 1);
        localStorage.setItem('CW04_Notes', JSON.stringify(notes));
        return Promise.resolve(notes);
        return notes;
    }
    async getFromLocalStorage() {
        var _a;
        const notes = (_a = JSON.parse(localStorage.getItem('CW04_Notes'))) !== null && _a !== void 0 ? _a : [];
        return Promise.resolve(notes);
    }
    async getAllTagsFromStorage() {
        var _a;
        const notes = (_a = JSON.parse(localStorage.getItem('CW04_Notes'))) !== null && _a !== void 0 ? _a : [];
        const tags = notes.flatMap((v) => v.tags);
        return Promise.resolve([...new Set(tags)]);
    }
}
exports.AppLocalStorage = AppLocalStorage;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./style.scss */ "./src/style.scss");
const UI_1 = __webpack_require__(/*! ./UI */ "./src/UI.ts");
class Main {
    constructor() {
        this.UI = new UI_1.UI();
        this.UI.renderNotes();
    }
}
exports.Main = Main;
new Main();


/***/ }),

/***/ "./src/interface.ts":
/*!**************************!*\
  !*** ./src/interface.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
exports.NoteColors = ["#262626", "#662424", "#7b4f00", "#007b3d", "#004e7b", "#31094f"];
class INoteGen {
    constructor() {
        this.title = '';
        this.content = '';
        this.pinned = false;
        this.color = "#262626";
        this.tags = [];
    }
}
exports.INoteGen = INoteGen;
class INote extends INoteGen {
    constructor(data = null) {
        var _a;
        super();
        this.date = Date.now();
        this.id = (_a = data === null || data === void 0 ? void 0 : data.id) !== null && _a !== void 0 ? _a : uuid_1.v4();
        if (data && Object.keys(data).length) {
            this.title = data.title;
            this.content = data.content;
            this.pinned = data.pinned;
            this.color = data.color;
            this.tags = data.tags;
            this.notification = data.notification;
        }
    }
}
exports.INote = INote;


/***/ }),

/***/ "./src/modal.ts":
/*!**********************!*\
  !*** ./src/modal.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = __webpack_require__(/*! ./interface */ "./src/interface.ts");
const appStorage_1 = __webpack_require__(/*! ./appStorage */ "./src/appStorage.ts");
class Modal {
    constructor(note = null, UIInstance) {
        this.closeBtn = document.getElementById('close-modal-btn');
        this.saveBtn = document.getElementById('save-modal-btn');
        this.addTagBtn = document.getElementById('add-tag');
        this.notifBtn = document.getElementById('notif-btn');
        this.modalEl = document.getElementById('modal');
        this.UI = UIInstance;
        this.formElements = {
            title: this.modalEl.querySelector('#note-title'),
            content: this.modalEl.querySelector('#note-content'),
            pinned: this.modalEl.querySelector('#note-pinned'),
            color: this.modalEl.querySelector('#color-picker'),
            newTag: this.modalEl.querySelector('#note-newTag'),
            notifDate: this.modalEl.querySelector('#note-notif-date'),
            notifTime: this.modalEl.querySelector('#note-notif-time')
        };
        this.noteForm = note === null ? new interface_1.INote() : note;
        this.isNotification = this.noteForm.notification > Date.now();
        this.changeNotifPanelVisibility();
        this.closeModal = this.closeModal.bind(this);
        this.saveModal = this.saveModal.bind(this);
        this.addTag = this.addTag.bind(this);
        this.turnOnNotif = this.turnOnNotif.bind(this);
        this.saveBtn.disabled = !this.noteForm.title;
        this.checkValidation = this.checkValidation.bind(this);
        this.render();
        this.addEventListeners();
    }
    checkValidation(e) {
        this.saveBtn.disabled = !e.target.validity.valid;
    }
    addEventListeners() {
        this.closeBtn.addEventListener('click', this.closeModal);
        this.saveBtn.addEventListener('click', this.saveModal);
        this.addTagBtn.addEventListener('click', this.addTag);
        this.notifBtn.addEventListener('click', this.turnOnNotif);
        this.formElements.title.addEventListener('input', this.checkValidation);
    }
    saveModal(e) {
        var _a;
        e.preventDefault();
        const newNote = new interface_1.INote({
            id: (_a = this.noteForm.id) !== null && _a !== void 0 ? _a : null,
            title: this.formElements.title.value,
            content: this.formElements.content.value,
            pinned: this.formElements.pinned.checked,
            color: this.formElements.color.querySelector(':checked').value,
            tags: this.noteForm.tags,
            notification: this.isNotification ? this.formatDate() : null
        });
        appStorage_1.AppLocalStorage.getInstance().saveToLocalStorage(newNote).then(() => this.UI.renderNotes());
        this.closeModal(e);
    }
    closeModal(e) {
        e.preventDefault();
        this.closeBtn.removeEventListener('click', this.closeModal);
        this.saveBtn.removeEventListener('click', this.saveModal);
        this.addTagBtn.removeEventListener('click', this.addTag);
        this.modalEl.classList.remove('modal--visible');
        this.formElements.color.innerText = '';
    }
    turnOnNotif(e) {
        e.preventDefault();
        this.isNotification = !this.isNotification;
        this.changeNotifPanelVisibility();
    }
    changeNotifPanelVisibility() {
        const notifContentEl = document.getElementById('notification-content');
        const now = new Date();
        if (this.isNotification) {
            notifContentEl.classList.add('notification-content--visible');
            this.notifBtn.classList.add('modal-small-btn--active');
            this.formElements.notifDate.min = now.toISOString().split("T")[0];
        }
        else {
            notifContentEl.classList.remove('notification-content--visible');
            this.notifBtn.classList.remove('modal-small-btn--active');
        }
    }
    formatDate() {
        const timestamp = new Date(`${this.formElements.notifDate.value} ${this.formElements.notifTime.value}`).getTime();
        return timestamp;
    }
    addTag(e) {
        e.preventDefault();
        const newTag = this.formElements.newTag.value;
        this.formElements.newTag.value = '';
        if (this.noteForm.tags.indexOf(newTag) === -1)
            this.noteForm.tags.push(newTag);
        this.createTagList();
        this.createDatalistOptionsList();
    }
    createColorPicker() {
        interface_1.NoteColors.forEach((v) => {
            const inputContainer = document.createElement('label');
            inputContainer.className = "color-radio";
            const input = document.createElement('input');
            const styler = document.createElement('span');
            styler.style.backgroundColor = v;
            styler.className = "styler";
            input.type = "radio";
            input.name = "note-color";
            input.value = v;
            inputContainer.appendChild(input);
            inputContainer.appendChild(styler);
            if (input.value === this.noteForm.color)
                input.checked = true;
            this.formElements.color.appendChild(inputContainer);
        });
    }
    createTagList() {
        const parentEl = document.getElementById("current-tags");
        parentEl.innerHTML = '';
        this.noteForm.tags.forEach((v) => {
            const tagBtn = document.createElement('button');
            tagBtn.className = "tag";
            tagBtn.innerText = v;
            const removeIcon = document.createElement('img');
            removeIcon.src = './assets/remove.svg';
            tagBtn.appendChild(removeIcon);
            tagBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.noteForm.tags = this.noteForm.tags.filter(tag => tag !== v);
                this.createTagList();
                this.createDatalistOptionsList();
            });
            parentEl.appendChild(tagBtn);
        });
    }
    async createDatalistOptionsList() {
        const comboBoxDL = document.getElementById("note-tags");
        comboBoxDL.innerHTML = '';
        const tags = await appStorage_1.AppLocalStorage.getInstance().getAllTagsFromStorage();
        const filteredTags = tags.filter((v) => !this.noteForm.tags.includes(v));
        filteredTags.forEach((v) => {
            const option = document.createElement('option');
            option.value = v;
            comboBoxDL.appendChild(option);
        });
    }
    populateForm() {
        this.formElements.title.value = this.noteForm.title;
        this.formElements.content.value = this.noteForm.content;
        this.formElements.pinned.checked = this.noteForm.pinned;
        this.createColorPicker();
        this.createTagList();
        this.createDatalistOptionsList();
    }
    render() {
        this.modalEl.classList.add('modal--visible');
        this.populateForm();
    }
}
exports.Modal = Modal;


/***/ }),

/***/ "./src/note.ts":
/*!*********************!*\
  !*** ./src/note.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const appStorage_1 = __webpack_require__(/*! ./appStorage */ "./src/appStorage.ts");
const modal_1 = __webpack_require__(/*! ./modal */ "./src/modal.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
class Note {
    constructor(note, parent, UIInstance) {
        this.render(note, parent);
        this.UI = UIInstance;
    }
    createNoteElement(note) {
        const noteEl = document.createElement('div');
        noteEl.className = 'note';
        noteEl.style.backgroundColor = note.color;
        noteEl.id = `noteEl_${note.id}`;
        noteEl.tabIndex = 0;
        noteEl.addEventListener('click', (e) => {
            new modal_1.Modal(note, this.UI);
        });
        noteEl.addEventListener('keyup', (e) => {
            if (e.code === 'Enter' || e.code === 'Space') {
                new modal_1.Modal(note, this.UI);
            }
        });
        return noteEl;
    }
    createPinBtn(note) {
        const noteElPinBtn = document.createElement('button');
        noteElPinBtn.className = 'note-pin';
        const noteElPinBtnIcon = document.createElement('img');
        noteElPinBtnIcon.src = note.pinned ? './assets/pin-filled.svg' : './assets/pin.svg';
        noteElPinBtn.appendChild(noteElPinBtnIcon);
        noteElPinBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            note.pinned = !note.pinned;
            appStorage_1.AppLocalStorage.getInstance().saveToLocalStorage(note).then(() => this.UI.renderNotes());
        });
        return noteElPinBtn;
    }
    createRemoveBtn(note) {
        const noteElRemoveBtn = document.createElement('button');
        noteElRemoveBtn.className = 'note-remove';
        const noteElRemoveBtnIcon = document.createElement('img');
        noteElRemoveBtnIcon.src = './assets/remove.svg';
        noteElRemoveBtn.appendChild(noteElRemoveBtnIcon);
        noteElRemoveBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            appStorage_1.AppLocalStorage.getInstance().removeFromLocalStorage(note.id).then(() => this.UI.renderNotes());
        });
        return noteElRemoveBtn;
    }
    render(note, parent) {
        const noteEl = this.createNoteElement(note);
        const noteElTitle = document.createElement('p');
        noteElTitle.className = 'note-title';
        noteElTitle.innerText = note.title;
        const noteElContent = document.createElement('p');
        noteElContent.className = 'note-content';
        noteElContent.innerText = note.content;
        const noteElPinBtn = this.createPinBtn(note);
        const noteElRemoveBtn = this.createRemoveBtn(note);
        const noteTagsEl = document.createElement('ul');
        noteTagsEl.className = "note-tags";
        note.tags.forEach((v) => {
            const tag = document.createElement('li');
            tag.innerText = v;
            noteTagsEl.appendChild(tag);
        });
        const noteDateEl = document.createElement('time');
        noteDateEl.innerText = utils_1.getDay(note.date);
        const noteNotifEl = document.createElement('p');
        noteNotifEl.className = "note-notif";
        if (note.notification && note.notification > Date.now()) {
            noteNotifEl.innerText = `Notification on ${utils_1.getDay(note.notification)}`;
        }
        noteEl.append(noteElTitle, noteElContent, noteElPinBtn, noteNotifEl, noteTagsEl, noteDateEl, noteElRemoveBtn);
        parent.appendChild(noteEl);
    }
}
exports.Note = Note;


/***/ }),

/***/ "./src/notificationService.ts":
/*!************************************!*\
  !*** ./src/notificationService.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AppNotifications {
    constructor() {
        this.pendingNotifications = [];
    }
    static getInstance() {
        if (!AppNotifications.instance) {
            AppNotifications.instance = new AppNotifications();
        }
        return AppNotifications.instance;
    }
    async checkPermissions() {
        if (!('Notification' in window)) {
            console.error("This browser does not support notifications.");
            return false;
        }
        else {
            if (Notification.permission === "granted") {
                return true;
            }
            else {
                return Notification.requestPermission().then((val) => {
                    return val === 'granted';
                });
            }
        }
    }
    async addNotification(note) {
        this.checkPermissions().then((granted) => {
            if (granted) {
                const timeout = note.notification - Date.now();
                const existingIndex = this.pendingNotifications.findIndex((v) => v.noteId === note.id);
                if (existingIndex >= 0) {
                    clearTimeout(this.pendingNotifications[existingIndex].id);
                    this.pendingNotifications.splice(existingIndex, 1);
                }
                console.log(this.pendingNotifications);
                const notifTimeout = setTimeout(() => {
                    new Notification(note.title);
                }, timeout);
                this.pendingNotifications.push({
                    id: notifTimeout,
                    noteId: note.id
                });
            }
        });
    }
}
exports.AppNotifications = AppNotifications;


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/toolbar.ts":
/*!************************!*\
  !*** ./src/toolbar.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const appStorage_1 = __webpack_require__(/*! ./appStorage */ "./src/appStorage.ts");
class Toolbar {
    constructor(UIInstance) {
        this.activeTag = null;
        this.searchTerm = '';
        this.UI = UIInstance;
        this.bindSearchEvents();
    }
    bindSearchEvents() {
        const searchEl = document.getElementById('search');
        searchEl.addEventListener('input', (e) => {
            const target = e.target;
            this.searchTerm = target.value.trim().toLowerCase();
            this.UI.renderNotes();
        });
        const searchBtnEl = document.getElementById('search-clear');
        searchBtnEl.addEventListener('click', (e) => {
            searchEl.value = '';
            this.searchTerm = '';
            this.UI.renderNotes();
        });
    }
    async renderToolbarTags() {
        const tags = await appStorage_1.AppLocalStorage.getInstance().getAllTagsFromStorage();
        const parentEl = document.getElementById('toolbarTags');
        parentEl.innerHTML = '';
        const btn = document.createElement('button');
        btn.className = `toolbar-button ${this.activeTag === null && 'toolbar-button--active'}`;
        btn.innerText = 'All';
        parentEl.appendChild(btn);
        tags.forEach((v) => {
            const btn = document.createElement('button');
            btn.className = `toolbar-button ${this.activeTag === v && 'toolbar-button--active'}`;
            btn.innerText = v;
            parentEl.appendChild(btn);
        });
        Array.from(parentEl.children).forEach((v, i) => {
            v.addEventListener('click', this.setActiveTag.bind(this, v, i));
        });
    }
    setActiveTag(el, index) {
        if (index === 0)
            this.activeTag = null;
        else
            this.activeTag = el.innerText;
        this.UI.renderNotes();
    }
}
exports.Toolbar = Toolbar;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getDay(dt, timezoneOffset = 0) {
    const date = new Date((dt + timezoneOffset));
    const stringDate = date.toLocaleString();
    return stringDate;
}
exports.getDay = getDay;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25pbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3BhcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zaGExLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92My5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VJLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBTdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJmYWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbm90ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbm90aWZpY2F0aW9uU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovLy8uL3NyYy90b29sYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFD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UUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0M7QUFDQTtBQUNBO0FBQ0E7QUFDRTtBQUNRO0FBQ0U7QUFDRTs7Ozs7Ozs7Ozs7OztBQ1B0RDtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEOztBQUVsRDs7QUFFQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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MEJBeURDOzs7Ozs7Ozs7Ozs7Ozs7QUM1REQsU0FBUyxNQUFNLENBQUMsRUFBVSxFQUFFLGlCQUF5QixDQUFDO0lBQ2xELE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pDLE9BQU8sVUFBVSxDQUFDO0FBQ3RCLENBQUM7QUFJRyx3QkFBTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxOyB9XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTsgfVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbmh0bWwgYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjMTYxNjE2O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeD0nMHB4JyB5PScwcHgnIHZpZXdCb3g9JzAgMCAxNiAxNicgc3R5bGU9J2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYgMTYnIHhtbDpzcGFjZT0ncHJlc2VydmUnJTNFJTNDcmVjdCB3aWR0aD0nMTYnIGZpbGw9J25vbmUnIGhlaWdodD0nMTYnLyUzRSUzQ3JlY3QgeD0nMCcgeT0nMCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwwLjM1KScgd2lkdGg9JzEnIGhlaWdodD0nMScvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjZTdlN2U3O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTJweCAtMnB4OyB9XFxuXFxubWFpbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAxMHB4OyB9XFxuICBtYWluIC5tYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4OyB9XFxuICAgIG1haW4gLm1haW4gLmNvbnRlbnQge1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBmbGV4OiAxO1xcbiAgICAgIGdhcDogMXJlbTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4udG9vbGJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7IH1cXG4gIC50b29sYmFyLWJ1dHRvbnMge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMXJlbTsgfVxcbiAgLnRvb2xiYXItYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogIzY2NjtcXG4gICAgY29sb3I6ICNlN2U3ZTc7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMC43cmVtIDNyZW0gMC43cmVtIDAuOHJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAudG9vbGJhci1idXR0b246aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7IH1cXG4gICAgLnRvb2xiYXItYnV0dG9uLS1hY3RpdmUge1xcbiAgICAgIGJhY2tncm91bmQ6ICNlNDlhMjI7IH1cXG4gICAgICAudG9vbGJhci1idXR0b24tLWFjdGl2ZTpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjYmM3ZDE3OyB9XFxuICAudG9vbGJhciAubmV3Tm90ZS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiAjMGY2MmZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjdyZW0gMXJlbSAwLjdyZW0gMC44cmVtOyB9XFxuICAgIC50b29sYmFyIC5uZXdOb3RlLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogIzAxNTFlODsgfVxcbiAgICAudG9vbGJhciAubmV3Tm90ZS1idXR0b24gaW1nIHtcXG4gICAgICB3aWR0aDogMXJlbTtcXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTsgfVxcblxcbi5zZWFyY2hiYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuICAuc2VhcmNoYmFyIGlucHV0IHtcXG4gICAgYmFja2dyb3VuZDogIzI2MjYyNjtcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjZTdlN2U3O1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gICAgLnNlYXJjaGJhciBpbnB1dDpob3ZlciwgLnNlYXJjaGJhciBpbnB1dDpmb2N1cyB7XFxuICAgICAgb3V0bGluZTogMDtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTdlN2U3OyB9XFxuICAgIC5zZWFyY2hiYXIgaW5wdXQ6dmFsaWQgKyAuc2VhcmNoYmFyLWJ1dHRvbiB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5zZWFyY2hiYXItYnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLnNlYXJjaGJhci1idXR0b246aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7IH1cXG4gICAgLnNlYXJjaGJhci1idXR0b24gaW1nIHtcXG4gICAgICBoZWlnaHQ6IDFyZW07IH1cXG5cXG4ubm90ZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMS41cmVtO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG4gIC5ub3Rlczpub3QoOmVtcHR5KTpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07IH1cXG4gIC5ub3Rlcy5ub3Rlcy0tcGlubmVkIC5ub3RlLXBpbiB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIC5ub3RlcyAubm90ZSB7XFxuICAgIHdpZHRoOiAyNTZweDtcXG4gICAgaGVpZ2h0OiAyNTZweDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjYyNjI2O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7IH1cXG4gICAgLm5vdGVzIC5ub3RlLXRpdGxlIHtcXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgICBwYWRkaW5nOiA0cHg7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgICAubm90ZXMgLm5vdGUtY29udGVudCB7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgIGZsZXg6IDE7IH1cXG4gICAgLm5vdGVzIC5ub3RlOjphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgdHJhbnNpdGlvbjogMC4xczsgfVxcbiAgICAubm90ZXMgLm5vdGU6Zm9jdXMge1xcbiAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2U3ZTdlNzsgfVxcbiAgICAubm90ZXMgLm5vdGU6aG92ZXI6OmFmdGVyIHtcXG4gICAgICBvcGFjaXR5OiAwLjA1OyB9XFxuICAgIC5ub3RlcyAubm90ZTpob3ZlciAubm90ZS1waW4sXFxuICAgIC5ub3RlcyAubm90ZTpob3ZlciAubm90ZS1yZW1vdmUge1xcbiAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgLm5vdGVzIC5ub3RlLXBpbiwgLm5vdGVzIC5ub3RlLXJlbW92ZSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDJyZW07XFxuICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIHBhZGRpbmc6IDRweDtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgIC5ub3RlcyAubm90ZS1waW46aG92ZXIsIC5ub3RlcyAubm90ZS1yZW1vdmU6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9XFxuICAgIC5ub3RlcyAubm90ZS1waW4ge1xcbiAgICAgIHRvcDogMDtcXG4gICAgICByaWdodDogMDsgfVxcbiAgICAubm90ZXMgLm5vdGUtcmVtb3ZlIHtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgcmlnaHQ6IDA7IH1cXG4gICAgLm5vdGVzIC5ub3RlLXRhZ3Mge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICBnYXA6IDRweDsgfVxcbiAgICAgIC5ub3RlcyAubm90ZS10YWdzIGxpIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDRweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDIyLCAyMiwgMC41KTsgfVxcbiAgICAubm90ZXMgLm5vdGUtbm90aWYge1xcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTsgfVxcbiAgICAubm90ZXMgLm5vdGUgdGltZSB7XFxuICAgICAgZm9udC1zaXplOiAwLjdyZW07IH1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZDogIzAwMDAwMDUyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogbm9uZTsgfVxcbiAgLm1vZGFsLS12aXNpYmxlIHtcXG4gICAgZGlzcGxheTogZmxleDsgfVxcbiAgLm1vZGFsLXdpbmRvdyB7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiAjMTYxNjE2OyB9XFxuICAubW9kYWwtZm9ybSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxcbiAgICAubW9kYWwtZm9ybSBpbnB1dCxcXG4gICAgLm1vZGFsLWZvcm0gdGV4dGFyZWEge1xcbiAgICAgIGJhY2tncm91bmQ6ICMyNjI2MjY7XFxuICAgICAgY29sb3I6ICNlN2U3ZTc7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgIG1pbi1oZWlnaHQ6IDEuNXJlbTtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4ycztcXG4gICAgICB3aWR0aDogMTAwJTsgfVxcbiAgICAgIC5tb2RhbC1mb3JtIGlucHV0OmZvY3VzLFxcbiAgICAgIC5tb2RhbC1mb3JtIHRleHRhcmVhOmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTdlN2U3OyB9XFxuICAgIC5tb2RhbC1mb3JtIHRleHRhcmVhIHtcXG4gICAgICByZXNpemU6IG5vbmU7XFxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbiAgICAubW9kYWwtZm9ybS1jb250YWluZXIge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGdhcDogMXJlbTtcXG4gICAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAubW9kYWwtYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgIC5tb2RhbC1idXR0b25zIC5tb2RhbC1idXR0b24ge1xcbiAgICAgIGJhY2tncm91bmQ6ICM2NjY7XFxuICAgICAgY29sb3I6ICNlN2U3ZTc7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAuN3JlbSAzcmVtIDAuN3JlbSAwLjhyZW07XFxuICAgICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzOyB9XFxuICAgICAgLm1vZGFsLWJ1dHRvbnMgLm1vZGFsLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ0ZDRkOyB9XFxuICAgICAgLm1vZGFsLWJ1dHRvbnMgLm1vZGFsLWJ1dHRvbi1zYXZlIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICMwZjYyZmU7IH1cXG4gICAgICAgIC5tb2RhbC1idXR0b25zIC5tb2RhbC1idXR0b24tc2F2ZTpob3ZlciB7XFxuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMTUxZTg7IH1cXG4gICAgICAubW9kYWwtYnV0dG9ucyAubW9kYWwtYnV0dG9uOmRpc2FibGVkIHtcXG4gICAgICAgIGNvbG9yOiAjNjY2O1xcbiAgICAgICAgYmFja2dyb3VuZDogIzE2MTYxNjsgfVxcbiAgLm1vZGFsLXRvZ2dsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgZ2FwOiAwLjVyZW07IH1cXG4gICAgLm1vZGFsLXRvZ2dsZSBpbnB1dCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICB3aWR0aDogMDsgfVxcbiAgICAgIC5tb2RhbC10b2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IC5zdHlsZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBmNjJmZTsgfVxcbiAgICAgICAgLm1vZGFsLXRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gLnN0eWxlcjo6YmVmb3JlIHtcXG4gICAgICAgICAgbGVmdDogMS41cmVtOyB9XFxuICAgIC5tb2RhbC10b2dnbGUgLnN0eWxlciB7XFxuICAgICAgd2lkdGg6IDNyZW07XFxuICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgICAgLm1vZGFsLXRvZ2dsZSAuc3R5bGVyOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogMS4ycmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICAgIGxlZnQ6IDFweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4xczsgfVxcbiAgLm1vZGFsLWNvbG9yLXBpY2tlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTsgfVxcbiAgICAubW9kYWwtY29sb3ItcGlja2VyIC5jb2xvci1yYWRpbyB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgICAgIC5tb2RhbC1jb2xvci1waWNrZXIgLmNvbG9yLXJhZGlvIGlucHV0IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICB3aWR0aDogMDsgfVxcbiAgICAgICAgLm1vZGFsLWNvbG9yLXBpY2tlciAuY29sb3ItcmFkaW8gaW5wdXQ6Y2hlY2tlZCB+IC5zdHlsZXIge1xcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTsgfVxcbiAgICAgIC5tb2RhbC1jb2xvci1waWNrZXIgLmNvbG9yLXJhZGlvIC5zdHlsZXIge1xcbiAgICAgICAgd2lkdGg6IDJyZW07XFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5tb2RhbC1leGlzdGluZy10YWdzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDFyZW07IH1cXG4gICAgLm1vZGFsLWV4aXN0aW5nLXRhZ3MgLnRhZyB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGJhY2tncm91bmQ6ICMyNjI2MjY7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgY29sb3I6ICNlN2U3ZTc7XFxuICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgIHBhZGRpbmc6IDAgOHB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzOyB9XFxuICAgICAgLm1vZGFsLWV4aXN0aW5nLXRhZ3MgLnRhZzpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjNDA0MDQwOyB9XFxuICAgICAgLm1vZGFsLWV4aXN0aW5nLXRhZ3MgLnRhZyBpbWcge1xcbiAgICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgICBoZWlnaHQ6IDE2cHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtOyB9XFxuICAubW9kYWwtdGFncyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxcmVtOyB9XFxuICAgIC5tb2RhbC10YWdzIC5ub3RlLXRhZy1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLm1vZGFsIC5tb2RhbC1zbWFsbC1idG4ge1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjNjY2O1xcbiAgICBjb2xvcjogI2U3ZTdlNztcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAgIC5tb2RhbCAubW9kYWwtc21hbGwtYnRuOmhvdmVyLCAubW9kYWwgLm1vZGFsLXNtYWxsLWJ0bjpmb2N1cyB7XFxuICAgICAgb3V0bGluZTogMDtcXG4gICAgICBiYWNrZ3JvdW5kOiAjNGQ0ZDRkOyB9XFxuICAgIC5tb2RhbCAubW9kYWwtc21hbGwtYnRuIGltZyB7XFxuICAgICAgd2lkdGg6IDIwcHg7IH1cXG4gICAgLm1vZGFsIC5tb2RhbC1zbWFsbC1idG4tLWFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZDogIzBmNjJmZTsgfVxcbiAgICAgIC5tb2RhbCAubW9kYWwtc21hbGwtYnRuLS1hY3RpdmU6aG92ZXIsIC5tb2RhbCAubW9kYWwtc21hbGwtYnRuLS1hY3RpdmU6Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogMDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMTUxZTg7IH1cXG4gIC5tb2RhbCAubm90aWZpY2F0aW9uLWNvbnRlbnQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAubW9kYWwgLm5vdGlmaWNhdGlvbi1jb250ZW50IGlucHV0IHtcXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAgICAgLm1vZGFsIC5ub3RpZmljYXRpb24tY29udGVudCBpbnB1dDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDEpOyB9XFxuICAgIC5tb2RhbCAubm90aWZpY2F0aW9uLWNvbnRlbnQtLXZpc2libGUge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYW5pbWF0aW9uOiBub3RpZkVudHJhbmNlIDAuMnM7XFxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDsgfVxcblxcbkBrZXlmcmFtZXMgbm90aWZFbnRyYW5jZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgIG1heC13aWR0aDogMDsgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlOyB9IH1cXG5cXG4uYmctaWxsdXN0cmF0aW9uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYm90dG9tOiAtMTd2dztcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHotaW5kZXg6IC0xOyB9XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgaGVpZ2h0OiA2cHg7IH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6ICMxNjE2MTY7IH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6ICM2NjY7IH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMwZjYyZmU7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyB2MSB9IGZyb20gJy4vdjEuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2MyB9IGZyb20gJy4vdjMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2NCB9IGZyb20gJy4vdjQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2NSB9IGZyb20gJy4vdjUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOSUwgfSBmcm9tICcuL25pbC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHZlcnNpb24gfSBmcm9tICcuL3ZlcnNpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2YWxpZGF0ZSB9IGZyb20gJy4vdmFsaWRhdGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhcnNlIH0gZnJvbSAnLi9wYXJzZS5qcyc7IiwiLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShtc2cubGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlc1tpXSA9IG1zZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZDVUb0hleEVuY29kZWRBcnJheSh3b3Jkc1RvTWQ1KGJ5dGVzVG9Xb3JkcyhieXRlcyksIGJ5dGVzLmxlbmd0aCAqIDgpKTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNVRvSGV4RW5jb2RlZEFycmF5KGlucHV0KSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgdmFyIGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIHZhciBoZXhUYWIgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGgzMjsgaSArPSA4KSB7XG4gICAgdmFyIHggPSBpbnB1dFtpID4+IDVdID4+PiBpICUgMzIgJiAweGZmO1xuICAgIHZhciBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIHZhciBhID0gMTczMjU4NDE5MztcbiAgdmFyIGIgPSAtMjcxNzMzODc5O1xuICB2YXIgYyA9IC0xNzMyNTg0MTk0O1xuICB2YXIgZCA9IDI3MTczMzg3ODtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgdmFyIG9sZGEgPSBhO1xuICAgIHZhciBvbGRiID0gYjtcbiAgICB2YXIgb2xkYyA9IGM7XG4gICAgdmFyIG9sZGQgPSBkO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICBhID0gc2FmZUFkZChhLCBvbGRhKTtcbiAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICBjID0gc2FmZUFkZChjLCBvbGRjKTtcbiAgICBkID0gc2FmZUFkZChkLCBvbGRkKTtcbiAgfVxuXG4gIHJldHVybiBbYSwgYiwgYywgZF07XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBieXRlcyB0byBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzXG4gKiBDaGFyYWN0ZXJzID4yNTUgaGF2ZSB0aGVpciBoaWdoLWJ5dGUgc2lsZW50bHkgaWdub3JlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJ5dGVzVG9Xb3JkcyhpbnB1dCkge1xuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIGxlbmd0aDggPSBpbnB1dC5sZW5ndGggKiA4O1xuICB2YXIgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIHZhciBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDB4ZmZmZjtcbn1cbi8qXG4gKiBCaXR3aXNlIHJvdGF0ZSBhIDMyLWJpdCBudW1iZXIgdG8gdGhlIGxlZnQuXG4gKi9cblxuXG5mdW5jdGlvbiBiaXRSb3RhdGVMZWZ0KG51bSwgY250KSB7XG4gIHJldHVybiBudW0gPDwgY250IHwgbnVtID4+PiAzMiAtIGNudDtcbn1cbi8qXG4gKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxuICovXG5cblxuZnVuY3Rpb24gbWQ1Y21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYik7XG59XG5cbmZ1bmN0aW9uIG1kNWZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgYyB8IH5iICYgZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgZCB8IGMgJiB+ZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWQ1OyIsImV4cG9ydCBkZWZhdWx0ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcblxuZnVuY3Rpb24gcGFyc2UodXVpZCkge1xuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIHZhciB2O1xuICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlOyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICB2YXIgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgdmFyIEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG5cbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShieXRlcykpIHtcbiAgICAvLyBDb252ZXJ0IEFycmF5LWxpa2UgdG8gQXJyYXlcbiAgICBieXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ5dGVzKTtcbiAgfVxuXG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIHZhciBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gIHZhciBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gIHZhciBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBOOyArK19pKSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50MzJBcnJheSgxNik7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIGFycltqXSA9IGJ5dGVzW19pICogNjQgKyBqICogNF0gPDwgMjQgfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDJdIDw8IDggfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAzXTtcbiAgICB9XG5cbiAgICBNW19pXSA9IGFycjtcbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgTjsgKytfaTIpIHtcbiAgICB2YXIgVyA9IG5ldyBVaW50MzJBcnJheSg4MCk7XG5cbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgIFdbdF0gPSBNW19pMl1bdF07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX3QgPSAxNjsgX3QgPCA4MDsgKytfdCkge1xuICAgICAgV1tfdF0gPSBST1RMKFdbX3QgLSAzXSBeIFdbX3QgLSA4XSBeIFdbX3QgLSAxNF0gXiBXW190IC0gMTZdLCAxKTtcbiAgICB9XG5cbiAgICB2YXIgYSA9IEhbMF07XG4gICAgdmFyIGIgPSBIWzFdO1xuICAgIHZhciBjID0gSFsyXTtcbiAgICB2YXIgZCA9IEhbM107XG4gICAgdmFyIGUgPSBIWzRdO1xuXG4gICAgZm9yICh2YXIgX3QyID0gMDsgX3QyIDwgODA7ICsrX3QyKSB7XG4gICAgICB2YXIgcyA9IE1hdGguZmxvb3IoX3QyIC8gMjApO1xuICAgICAgdmFyIFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1tfdDJdID4+PiAwO1xuICAgICAgZSA9IGQ7XG4gICAgICBkID0gYztcbiAgICAgIGMgPSBST1RMKGIsIDMwKSA+Pj4gMDtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IFQ7XG4gICAgfVxuXG4gICAgSFswXSA9IEhbMF0gKyBhID4+PiAwO1xuICAgIEhbMV0gPSBIWzFdICsgYiA+Pj4gMDtcbiAgICBIWzJdID0gSFsyXSArIGMgPj4+IDA7XG4gICAgSFszXSA9IEhbM10gKyBkID4+PiAwO1xuICAgIEhbNF0gPSBIWzRdICsgZSA+Pj4gMDtcbiAgfVxuXG4gIHJldHVybiBbSFswXSA+PiAyNCAmIDB4ZmYsIEhbMF0gPj4gMTYgJiAweGZmLCBIWzBdID4+IDggJiAweGZmLCBIWzBdICYgMHhmZiwgSFsxXSA+PiAyNCAmIDB4ZmYsIEhbMV0gPj4gMTYgJiAweGZmLCBIWzFdID4+IDggJiAweGZmLCBIWzFdICYgMHhmZiwgSFsyXSA+PiAyNCAmIDB4ZmYsIEhbMl0gPj4gMTYgJiAweGZmLCBIWzJdID4+IDggJiAweGZmLCBIWzJdICYgMHhmZiwgSFszXSA+PiAyNCAmIDB4ZmYsIEhbM10gPj4gMTYgJiAweGZmLCBIWzNdID4+IDggJiAweGZmLCBIWzNdICYgMHhmZiwgSFs0XSA+PiAyNCAmIDB4ZmYsIEhbNF0gPj4gMTYgJiAweGZmLCBIWzRdID4+IDggJiAweGZmLCBIWzRdICYgMHhmZl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoYTE7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJzsgLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcblxudmFyIF9jbG9ja3NlcTsgLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG5cblxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwOyAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkIGZvciBBUEkgZGV0YWlsc1xuXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgbmV3IEFycmF5KDE2KTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7IC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuXG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtzZWVkQnl0ZXNbMF0gfCAweDAxLCBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XV07XG4gICAgfVxuXG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9IC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuXG5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IERhdGUubm93KCk7IC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcblxuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7IC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcblxuICB2YXIgZHQgPSBtc2VjcyAtIF9sYXN0TVNlY3MgKyAobnNlY3MgLSBfbGFzdE5TZWNzKSAvIDEwMDAwOyAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG5cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfSAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG5cblxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfSAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG5cblxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1dWlkLnYxKCk6IENhbid0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlY1wiKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTsgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG5cbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7IC8vIGB0aW1lX2xvd2BcblxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmOyAvLyBgdGltZV9taWRgXG5cbiAgdmFyIHRtaCA9IG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjsgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcblxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG5cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7IC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDsgLy8gYGNsb2NrX3NlcV9sb3dgXG5cbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmOyAvLyBgbm9kZWBcblxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgfHwgc3RyaW5naWZ5KGIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2MTsiLCJpbXBvcnQgdjM1IGZyb20gJy4vdjM1LmpzJztcbmltcG9ydCBtZDUgZnJvbSAnLi9tZDUuanMnO1xudmFyIHYzID0gdjM1KCd2MycsIDB4MzAsIG1kNSk7XG5leHBvcnQgZGVmYXVsdCB2MzsiLCJpbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmltcG9ydCBwYXJzZSBmcm9tICcuL3BhcnNlLmpzJztcblxuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpOyAvLyBVVEY4IGVzY2FwZVxuXG4gIHZhciBieXRlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgYnl0ZXMucHVzaChzdHIuY2hhckNvZGVBdChpKSk7XG4gIH1cblxuICByZXR1cm4gYnl0ZXM7XG59XG5cbmV4cG9ydCB2YXIgRE5TID0gJzZiYTdiODEwLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnQgdmFyIFVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IHN0cmluZ1RvQnl0ZXModmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJykge1xuICAgICAgbmFtZXNwYWNlID0gcGFyc2UobmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBpZiAobmFtZXNwYWNlLmxlbmd0aCAhPT0gMTYpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH0gLy8gQ29tcHV0ZSBoYXNoIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIFBlciA0LjNcbiAgICAvLyBGdXR1cmU6IFVzZSBzcHJlYWQgc3ludGF4IHdoZW4gc3VwcG9ydGVkIG9uIGFsbCBwbGF0Zm9ybXMsIGUuZy4gYGJ5dGVzID1cbiAgICAvLyBoYXNoZnVuYyhbLi4ubmFtZXNwYWNlLCAuLi4gdmFsdWVdKWBcblxuXG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZS5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2UpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZSwgbmFtZXNwYWNlLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoZnVuYyhieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAgIGlmIChidWYpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBidWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZ2lmeShieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IHYzNSBmcm9tICcuL3YzNS5qcyc7XG5pbXBvcnQgc2hhMSBmcm9tICcuL3NoYTEuanMnO1xudmFyIHY1ID0gdjM1KCd2NScsIDB4NTAsIHNoYTEpO1xuZXhwb3J0IGRlZmF1bHQgdjU7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuXG5mdW5jdGlvbiB2ZXJzaW9uKHV1aWQpIHtcbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VJbnQodXVpZC5zdWJzdHIoMTQsIDEpLCAxNik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZlcnNpb247IiwiaW1wb3J0IHsgQXBwTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9hcHBTdG9yYWdlJztcclxuaW1wb3J0IHsgSU5vdGUgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IE1haW4gfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL21vZGFsJztcclxuaW1wb3J0IHsgTm90ZSB9IGZyb20gJy4vbm90ZSc7XHJcbmltcG9ydCB7IFRvb2xiYXIgfSBmcm9tICcuL3Rvb2xiYXInO1xyXG5cclxuLy8gYWthIE5vdGVzXHJcbmV4cG9ydCBjbGFzcyBVSSB7XHJcbiAgICB0b29sYmFyOiBUb29sYmFyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMudG9vbGJhciA9IG5ldyBUb29sYmFyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5yZW5kZXJUb29sYmFyVGFncygpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1ub3RlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBuZXcgTW9kYWwobnVsbCwgdGhpcyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZW5kZXJOb3RlcygpIHtcclxuICAgICAgICBjb25zdCBub3RlcyA9IGF3YWl0IEFwcExvY2FsU3RvcmFnZS5nZXRJbnN0YW5jZSgpLmdldEZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICBjb25zdCBub3Rlc0VsUCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1waW5uZWQnKTtcclxuICAgICAgICBjb25zdCBub3Rlc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLW90aGVyJyk7XHJcbiAgICAgICAgbm90ZXNFbC5pbm5lclRleHQgPSBudWxsOyBub3Rlc0VsUC5pbm5lclRleHQgPSBudWxsO1xyXG5cclxuICAgICAgICBub3Rlc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh2KSA9PiB0aGlzLnRvb2xiYXIuYWN0aXZlVGFnICE9PSBudWxsID8gdi50YWdzLmluY2x1ZGVzKHRoaXMudG9vbGJhci5hY3RpdmVUYWcpIDogdHJ1ZSlcclxuICAgICAgICAgICAgLmZpbHRlcigodikgPT5cclxuICAgICAgICAgICAgICAgIHYudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnRvb2xiYXIuc2VhcmNoVGVybSkgfHxcclxuICAgICAgICAgICAgICAgIHYuY29udGVudC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMudG9vbGJhci5zZWFyY2hUZXJtKSB8fFxyXG4gICAgICAgICAgICAgICAgdi50YWdzLnNvbWUoKHRhZykgPT4gdGFnLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy50b29sYmFyLnNlYXJjaFRlcm0pKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChub3RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXcgTm90ZShub3RlLCBub3RlLnBpbm5lZFxyXG4gICAgICAgICAgICAgICAgICAgID8gbm90ZXNFbFBcclxuICAgICAgICAgICAgICAgICAgICA6IG5vdGVzRWwsIHRoaXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnRvb2xiYXIucmVuZGVyVG9vbGJhclRhZ3MoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFwcE5vdGlmaWNhdGlvbnMgfSBmcm9tIFwiLi9ub3RpZmljYXRpb25TZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElOb3RlIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XHJcblxyXG5pbnRlcmZhY2UgSUFwcFN0b3JhZ2Uge1xyXG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlOiAobmV3Tm90ZTogSU5vdGUpID0+IFByb21pc2U8SU5vdGVbXT4sXHJcbiAgICByZW1vdmVGcm9tTG9jYWxTdG9yYWdlOiAoaWQ6IElOb3RlWydpZCddKSA9PiBQcm9taXNlPElOb3RlW10+LFxyXG4gICAgZ2V0RnJvbUxvY2FsU3RvcmFnZTogKCkgPT4gUHJvbWlzZTxJTm90ZVtdPixcclxuICAgIGdldEFsbFRhZ3NGcm9tU3RvcmFnZTogKCkgPT4gUHJvbWlzZTxzdHJpbmdbXT4sXHJcbn1cclxuXHJcbi8vIFNpbmdsZXRvbiBhcHAgc3RvcmFnZVxyXG5leHBvcnQgY2xhc3MgQXBwTG9jYWxTdG9yYWdlIGltcGxlbWVudHMgSUFwcFN0b3JhZ2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IElBcHBTdG9yYWdlO1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogSUFwcFN0b3JhZ2Uge1xyXG4gICAgICAgIGlmICghQXBwTG9jYWxTdG9yYWdlLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIEFwcExvY2FsU3RvcmFnZS5pbnN0YW5jZSA9IG5ldyBBcHBMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBBcHBMb2NhbFN0b3JhZ2UuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2F2ZVRvTG9jYWxTdG9yYWdlKG5ld05vdGU6IElOb3RlKSB7XHJcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdDVzA0X05vdGVzJykpIGFzIElOb3RlW10gPz8gW107XHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdJbmRleCA9IG5vdGVzLmZpbmRJbmRleCh2ID0+IHYuaWQgPT09IG5ld05vdGUuaWQpO1xyXG4gICAgICAgIGlmIChleGlzdGluZ0luZGV4ICE9PSAtMSkgbm90ZXNbZXhpc3RpbmdJbmRleF0gPSBuZXdOb3RlO1xyXG4gICAgICAgIGVsc2Ugbm90ZXMucHVzaChuZXdOb3RlKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld05vdGUubm90aWZpY2F0aW9uKVxyXG4gICAgICAgICAgICBBcHBOb3RpZmljYXRpb25zLmdldEluc3RhbmNlKCkuYWRkTm90aWZpY2F0aW9uKG5ld05vdGUpO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQ1cwNF9Ob3RlcycsIEpTT04uc3RyaW5naWZ5KG5vdGVzKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobm90ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2UoaWQ6IElOb3RlWydpZCddKSB7XHJcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdDVzA0X05vdGVzJykpIGFzIElOb3RlW107XHJcbiAgICAgICAgbm90ZXMuc3BsaWNlKG5vdGVzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gaWQpLCAxKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQ1cwNF9Ob3RlcycsIEpTT04uc3RyaW5naWZ5KG5vdGVzKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobm90ZXMpO1xyXG4gICAgICAgIHJldHVybiBub3RlcztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IG5vdGVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQ1cwNF9Ob3RlcycpKSBhcyBJTm90ZVtdID8/IFtdO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vdGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRBbGxUYWdzRnJvbVN0b3JhZ2UoKSB7XHJcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdDVzA0X05vdGVzJykpIGFzIElOb3RlW10gPz8gW107XHJcbiAgICAgICAgY29uc3QgdGFncyA9IG5vdGVzLmZsYXRNYXAoKHYpID0+IHYudGFncyk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoWy4uLiBuZXcgU2V0KHRhZ3MpXSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmltcG9ydCB7IEFwcExvY2FsU3RvcmFnZSB9IGZyb20gJy4vYXBwU3RvcmFnZSc7XG5pbXBvcnQgeyBJTm90ZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi9VSSc7XG5cbmV4cG9ydCBjbGFzcyBNYWluIHtcbiAgICBVSTogVUk7XG4gICAgbm90ZXM6IElOb3RlW107XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuVUkgPSBuZXcgVUkoKTtcbiAgICAgICAgdGhpcy5VSS5yZW5kZXJOb3RlcygpO1xuICAgIH1cblxufVxuXG5cbm5ldyBNYWluKCk7IiwiaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmV4cG9ydCBjb25zdCBOb3RlQ29sb3JzID0gW1wiIzI2MjYyNlwiLCBcIiM2NjI0MjRcIiwgXCIjN2I0ZjAwXCIsIFwiIzAwN2IzZFwiLCBcIiMwMDRlN2JcIiwgXCIjMzEwOTRmXCJdO1xyXG5cclxuZXhwb3J0IGNsYXNzIElOb3RlR2VuIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nID0gJyc7XHJcbiAgICBjb250ZW50OiBzdHJpbmcgPSAnJztcclxuICAgIHBpbm5lZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29sb3I6IHN0cmluZyA9IFwiIzI2MjYyNlwiO1xyXG4gICAgbm90aWZpY2F0aW9uOiBudW1iZXI7XHJcbiAgICB0YWdzOiBzdHJpbmdbXSA9IFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSU5vdGUgZXh0ZW5kcyBJTm90ZUdlbiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgZGF0ZTogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBJTm90ZUdlbiA9IG51bGwpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaWQgPSBkYXRhPy5pZCA/PyB2NCgpO1xyXG4gICAgICAgIC8vIFRPRE8gZG8gdGhpcyBiZXR0ZXIgOkNcclxuICAgICAgICBpZiAoZGF0YSAmJiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGU7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9IGRhdGEuY29udGVudDtcclxuICAgICAgICAgICAgdGhpcy5waW5uZWQgPSBkYXRhLnBpbm5lZDtcclxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IGRhdGEuY29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMudGFncyA9IGRhdGEudGFncztcclxuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb24gPSBkYXRhLm5vdGlmaWNhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IElOb3RlLCBOb3RlQ29sb3JzIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuaW1wb3J0IHsgQXBwTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9hcHBTdG9yYWdlJztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuL1VJJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbCB7XHJcbiAgICBjbG9zZUJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBzYXZlQnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGFkZFRhZ0J0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBub3RpZkJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBtb2RhbEVsOiBIVE1MRWxlbWVudDtcclxuICAgIG5vdGVGb3JtOiBJTm90ZTtcclxuICAgIFVJOiBVSTtcclxuICAgIGlzTm90aWZpY2F0aW9uOiBib29sZWFuO1xyXG4gICAgZm9ybUVsZW1lbnRzOiB7XHJcbiAgICAgICAgdGl0bGU6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICAgICAgY29udGVudDogSFRNTFRleHRBcmVhRWxlbWVudCxcclxuICAgICAgICBwaW5uZWQ6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICAgICAgY29sb3I6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgICAgIG5ld1RhZzogSFRNTElucHV0RWxlbWVudCxcclxuICAgICAgICBub3RpZkRhdGU6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICAgICAgbm90aWZUaW1lOiBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5vdGU6IElOb3RlID0gbnVsbCwgVUlJbnN0YW5jZTogVUkpIHtcclxuICAgICAgICB0aGlzLmNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLW1vZGFsLWJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc2F2ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLW1vZGFsLWJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgIHRoaXMuYWRkVGFnQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YWcnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICB0aGlzLm5vdGlmQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGlmLWJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgIHRoaXMubW9kYWxFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgICAgIHRoaXMuVUkgPSBVSUluc3RhbmNlO1xyXG4gICAgICAgIHRoaXMuZm9ybUVsZW1lbnRzID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy5tb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJyNub3RlLXRpdGxlJykgYXMgSFRNTElucHV0RWxlbWVudCxcclxuICAgICAgICAgICAgY29udGVudDogdGhpcy5tb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJyNub3RlLWNvbnRlbnQnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50LFxyXG4gICAgICAgICAgICBwaW5uZWQ6IHRoaXMubW9kYWxFbC5xdWVyeVNlbGVjdG9yKCcjbm90ZS1waW5uZWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5tb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJyNjb2xvci1waWNrZXInKSBhcyBIVE1MRGl2RWxlbWVudCxcclxuICAgICAgICAgICAgbmV3VGFnOiB0aGlzLm1vZGFsRWwucXVlcnlTZWxlY3RvcignI25vdGUtbmV3VGFnJykgYXMgSFRNTElucHV0RWxlbWVudCxcclxuICAgICAgICAgICAgbm90aWZEYXRlOiB0aGlzLm1vZGFsRWwucXVlcnlTZWxlY3RvcignI25vdGUtbm90aWYtZGF0ZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICAgICAgICAgIG5vdGlmVGltZTogdGhpcy5tb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJyNub3RlLW5vdGlmLXRpbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm90ZUZvcm0gPSBub3RlID09PSBudWxsID8gbmV3IElOb3RlKCkgOiBub3RlO1xyXG4gICAgICAgIHRoaXMuaXNOb3RpZmljYXRpb24gPSB0aGlzLm5vdGVGb3JtLm5vdGlmaWNhdGlvbiA+IERhdGUubm93KCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VOb3RpZlBhbmVsVmlzaWJpbGl0eSgpO1xyXG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbCA9IHRoaXMuY2xvc2VNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2F2ZU1vZGFsID0gdGhpcy5zYXZlTW9kYWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZFRhZyA9IHRoaXMuYWRkVGFnLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy50dXJuT25Ob3RpZiA9IHRoaXMudHVybk9uTm90aWYuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zYXZlQnRuLmRpc2FibGVkID0gIXRoaXMubm90ZUZvcm0udGl0bGU7XHJcbiAgICAgICAgdGhpcy5jaGVja1ZhbGlkYXRpb24gPSB0aGlzLmNoZWNrVmFsaWRhdGlvbi5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1ZhbGlkYXRpb24oZTogSW5wdXRFdmVudCkge1xyXG4gICAgICAgIHRoaXMuc2F2ZUJ0bi5kaXNhYmxlZCA9ICEoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsaWRpdHkudmFsaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNb2RhbCk7XHJcbiAgICAgICAgdGhpcy5zYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zYXZlTW9kYWwpO1xyXG4gICAgICAgIHRoaXMuYWRkVGFnQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRUYWcpO1xyXG4gICAgICAgIHRoaXMubm90aWZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnR1cm5Pbk5vdGlmKTtcclxuICAgICAgICB0aGlzLmZvcm1FbGVtZW50cy50aXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuY2hlY2tWYWxpZGF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlTW9kYWwoZTogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBuZXdOb3RlID0gbmV3IElOb3RlKHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMubm90ZUZvcm0uaWQgPz8gbnVsbCxcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMuZm9ybUVsZW1lbnRzLnRpdGxlLnZhbHVlLFxyXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmZvcm1FbGVtZW50cy5jb250ZW50LnZhbHVlLFxyXG4gICAgICAgICAgICBwaW5uZWQ6IHRoaXMuZm9ybUVsZW1lbnRzLnBpbm5lZC5jaGVja2VkLFxyXG4gICAgICAgICAgICBjb2xvcjogKHRoaXMuZm9ybUVsZW1lbnRzLmNvbG9yLnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMubm90ZUZvcm0udGFncyxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uOiB0aGlzLmlzTm90aWZpY2F0aW9uID8gdGhpcy5mb3JtYXREYXRlKCkgOiBudWxsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgQXBwTG9jYWxTdG9yYWdlLmdldEluc3RhbmNlKCkuc2F2ZVRvTG9jYWxTdG9yYWdlKG5ld05vdGUpLnRoZW4oKCkgPT4gdGhpcy5VSS5yZW5kZXJOb3RlcygpKTtcclxuICAgICAgICB0aGlzLmNsb3NlTW9kYWwoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNb2RhbChlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuY2xvc2VCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTW9kYWwpO1xyXG4gICAgICAgIHRoaXMuc2F2ZUJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2F2ZU1vZGFsKTtcclxuICAgICAgICB0aGlzLmFkZFRhZ0J0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkVGFnKTtcclxuICAgICAgICB0aGlzLm1vZGFsRWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLXZpc2libGUnKTtcclxuICAgICAgICB0aGlzLmZvcm1FbGVtZW50cy5jb2xvci5pbm5lclRleHQgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICB0dXJuT25Ob3RpZihlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuaXNOb3RpZmljYXRpb24gPSAhdGhpcy5pc05vdGlmaWNhdGlvbjtcclxuICAgICAgICB0aGlzLmNoYW5nZU5vdGlmUGFuZWxWaXNpYmlsaXR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTm90aWZQYW5lbFZpc2liaWxpdHkoKSB7XHJcbiAgICAgICAgY29uc3Qgbm90aWZDb250ZW50RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90aWZpY2F0aW9uLWNvbnRlbnQnKTtcclxuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTm90aWZpY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIG5vdGlmQ29udGVudEVsLmNsYXNzTGlzdC5hZGQoJ25vdGlmaWNhdGlvbi1jb250ZW50LS12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwtc21hbGwtYnRuLS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtRWxlbWVudHMubm90aWZEYXRlLm1pbiA9IG5vdy50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub3RpZkNvbnRlbnRFbC5jbGFzc0xpc3QucmVtb3ZlKCdub3RpZmljYXRpb24tY29udGVudC0tdmlzaWJsZScpO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXNtYWxsLWJ0bi0tYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdERhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoYCR7dGhpcy5mb3JtRWxlbWVudHMubm90aWZEYXRlLnZhbHVlfSAke3RoaXMuZm9ybUVsZW1lbnRzLm5vdGlmVGltZS52YWx1ZX1gKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRpbWVzdGFtcDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYWcoZTogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBuZXdUYWcgPSB0aGlzLmZvcm1FbGVtZW50cy5uZXdUYWcudmFsdWU7XHJcbiAgICAgICAgdGhpcy5mb3JtRWxlbWVudHMubmV3VGFnLnZhbHVlID0gJyc7XHJcbiAgICAgICAgaWYgKHRoaXMubm90ZUZvcm0udGFncy5pbmRleE9mKG5ld1RhZykgPT09IC0xKSB0aGlzLm5vdGVGb3JtLnRhZ3MucHVzaChuZXdUYWcpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVGFnTGlzdCgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRGF0YWxpc3RPcHRpb25zTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNvbG9yUGlja2VyKCkge1xyXG4gICAgICAgIE5vdGVDb2xvcnMuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY29sb3ItcmFkaW9cIjtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIHN0eWxlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB2O1xyXG4gICAgICAgICAgICBzdHlsZXIuY2xhc3NOYW1lID0gXCJzdHlsZXJcIjtcclxuICAgICAgICAgICAgaW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICAgICAgICAgICAgaW5wdXQubmFtZSA9IFwibm90ZS1jb2xvclwiO1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHY7XHJcbiAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3R5bGVyKTtcclxuICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlID09PSB0aGlzLm5vdGVGb3JtLmNvbG9yKVxyXG4gICAgICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50cy5jb2xvci5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVGFnTGlzdCgpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC10YWdzXCIpO1xyXG4gICAgICAgIHBhcmVudEVsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMubm90ZUZvcm0udGFncy5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhZ0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICB0YWdCdG4uY2xhc3NOYW1lID0gXCJ0YWdcIjtcclxuICAgICAgICAgICAgdGFnQnRuLmlubmVyVGV4dCA9IHY7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgcmVtb3ZlSWNvbi5zcmMgPSAnLi9hc3NldHMvcmVtb3ZlLnN2Zyc7XHJcbiAgICAgICAgICAgIHRhZ0J0bi5hcHBlbmRDaGlsZChyZW1vdmVJY29uKTtcclxuICAgICAgICAgICAgdGFnQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90ZUZvcm0udGFncyA9IHRoaXMubm90ZUZvcm0udGFncy5maWx0ZXIodGFnID0+IHRhZyAhPT0gdik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVRhZ0xpc3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRGF0YWxpc3RPcHRpb25zTGlzdCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZCh0YWdCdG4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNyZWF0ZURhdGFsaXN0T3B0aW9uc0xpc3QoKSB7XHJcbiAgICAgICAgY29uc3QgY29tYm9Cb3hETCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZS10YWdzXCIpO1xyXG4gICAgICAgIGNvbWJvQm94REwuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhZ3MgPSBhd2FpdCBBcHBMb2NhbFN0b3JhZ2UuZ2V0SW5zdGFuY2UoKS5nZXRBbGxUYWdzRnJvbVN0b3JhZ2UoKTtcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZFRhZ3MgPSB0YWdzLmZpbHRlcigodikgPT4gIXRoaXMubm90ZUZvcm0udGFncy5pbmNsdWRlcyh2KSk7XHJcbiAgICAgICAgZmlsdGVyZWRUYWdzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHY7XHJcbiAgICAgICAgICAgIGNvbWJvQm94REwuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHBvcHVsYXRlRm9ybSgpIHtcclxuICAgICAgICB0aGlzLmZvcm1FbGVtZW50cy50aXRsZS52YWx1ZSA9IHRoaXMubm90ZUZvcm0udGl0bGU7XHJcbiAgICAgICAgdGhpcy5mb3JtRWxlbWVudHMuY29udGVudC52YWx1ZSA9IHRoaXMubm90ZUZvcm0uY29udGVudDtcclxuICAgICAgICB0aGlzLmZvcm1FbGVtZW50cy5waW5uZWQuY2hlY2tlZCA9IHRoaXMubm90ZUZvcm0ucGlubmVkO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ29sb3JQaWNrZXIoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVRhZ0xpc3QoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZURhdGFsaXN0T3B0aW9uc0xpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbEVsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLS12aXNpYmxlJyk7XHJcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUZvcm0oKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFwcExvY2FsU3RvcmFnZSB9IGZyb20gJy4vYXBwU3RvcmFnZSc7XHJcbmltcG9ydCB7IEFwcE5vdGlmaWNhdGlvbnMgfSBmcm9tICcuL25vdGlmaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJTm90ZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL21vZGFsJztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuL1VJJztcclxuaW1wb3J0IHsgZ2V0RGF5IH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTm90ZSB7XHJcbiAgICBVSTogVUk7XHJcbiAgICBjb25zdHJ1Y3Rvcihub3RlOiBJTm90ZSwgcGFyZW50OiBIVE1MRWxlbWVudCwgVUlJbnN0YW5jZTogVUkpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcihub3RlLCBwYXJlbnQpXHJcbiAgICAgICAgdGhpcy5VSSA9IFVJSW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTm90ZUVsZW1lbnQobm90ZTogSU5vdGUpIHtcclxuICAgICAgICBjb25zdCBub3RlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBub3RlRWwuY2xhc3NOYW1lID0gJ25vdGUnO1xyXG4gICAgICAgIG5vdGVFbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBub3RlLmNvbG9yO1xyXG4gICAgICAgIG5vdGVFbC5pZCA9IGBub3RlRWxfJHtub3RlLmlkfWA7XHJcbiAgICAgICAgbm90ZUVsLnRhYkluZGV4ID0gMDtcclxuICAgICAgICBub3RlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBuZXcgTW9kYWwobm90ZSwgdGhpcy5VSSk7XHJcbiAgICAgICAgICAgIC8vIEFwcE5vdGlmaWNhdGlvbnMuZ2V0SW5zdGFuY2UoKS5hZGROb3RpZmljYXRpb24obm90ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbm90ZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gJ0VudGVyJyB8fCBlLmNvZGUgPT09ICdTcGFjZScpIHtcclxuICAgICAgICAgICAgICAgIG5ldyBNb2RhbChub3RlLCB0aGlzLlVJKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbm90ZUVsO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBpbkJ0bihub3RlOiBJTm90ZSkge1xyXG4gICAgICAgIGNvbnN0IG5vdGVFbFBpbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIG5vdGVFbFBpbkJ0bi5jbGFzc05hbWUgPSAnbm90ZS1waW4nO1xyXG4gICAgICAgIGNvbnN0IG5vdGVFbFBpbkJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBub3RlRWxQaW5CdG5JY29uLnNyYyA9IG5vdGUucGlubmVkID8gJy4vYXNzZXRzL3Bpbi1maWxsZWQuc3ZnJyA6ICcuL2Fzc2V0cy9waW4uc3ZnJztcclxuICAgICAgICBub3RlRWxQaW5CdG4uYXBwZW5kQ2hpbGQobm90ZUVsUGluQnRuSWNvbik7XHJcbiAgICAgICAgLy8gLS0tLS0tLVxyXG4gICAgICAgIG5vdGVFbFBpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIG5vdGUucGlubmVkID0gIW5vdGUucGlubmVkO1xyXG4gICAgICAgICAgICBBcHBMb2NhbFN0b3JhZ2UuZ2V0SW5zdGFuY2UoKS5zYXZlVG9Mb2NhbFN0b3JhZ2Uobm90ZSkudGhlbigoKSA9PiB0aGlzLlVJLnJlbmRlck5vdGVzKCkpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBub3RlRWxQaW5CdG47XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUmVtb3ZlQnRuKG5vdGU6IElOb3RlKSB7XHJcbiAgICAgICAgY29uc3Qgbm90ZUVsUmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbm90ZUVsUmVtb3ZlQnRuLmNsYXNzTmFtZSA9ICdub3RlLXJlbW92ZSc7XHJcbiAgICAgICAgY29uc3Qgbm90ZUVsUmVtb3ZlQnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIG5vdGVFbFJlbW92ZUJ0bkljb24uc3JjID0gJy4vYXNzZXRzL3JlbW92ZS5zdmcnO1xyXG4gICAgICAgIG5vdGVFbFJlbW92ZUJ0bi5hcHBlbmRDaGlsZChub3RlRWxSZW1vdmVCdG5JY29uKTtcclxuICAgICAgICAvLyAtLS0tLS0tXHJcbiAgICAgICAgbm90ZUVsUmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgQXBwTG9jYWxTdG9yYWdlLmdldEluc3RhbmNlKCkucmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShub3RlLmlkKS50aGVuKCgpID0+IHRoaXMuVUkucmVuZGVyTm90ZXMoKSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIG5vdGVFbFJlbW92ZUJ0bjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIobm90ZTogSU5vdGUsIHBhcmVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBub3RlRWwgPSB0aGlzLmNyZWF0ZU5vdGVFbGVtZW50KG5vdGUpO1xyXG4gICAgICAgIC8vIHRpdGxlXHJcbiAgICAgICAgY29uc3Qgbm90ZUVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbm90ZUVsVGl0bGUuY2xhc3NOYW1lID0gJ25vdGUtdGl0bGUnO1xyXG4gICAgICAgIG5vdGVFbFRpdGxlLmlubmVyVGV4dCA9IG5vdGUudGl0bGU7XHJcbiAgICAgICAgLy8gY29udGVudCBcclxuICAgICAgICBjb25zdCBub3RlRWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIG5vdGVFbENvbnRlbnQuY2xhc3NOYW1lID0gJ25vdGUtY29udGVudCc7XHJcbiAgICAgICAgbm90ZUVsQ29udGVudC5pbm5lclRleHQgPSBub3RlLmNvbnRlbnQ7XHJcbiAgICAgICAgLy8gcGluIGJ1dHRvblxyXG4gICAgICAgIGNvbnN0IG5vdGVFbFBpbkJ0biA9IHRoaXMuY3JlYXRlUGluQnRuKG5vdGUpO1xyXG4gICAgICAgIC8vIHJlbW92ZSBidG5cclxuICAgICAgICBjb25zdCBub3RlRWxSZW1vdmVCdG4gPSB0aGlzLmNyZWF0ZVJlbW92ZUJ0bihub3RlKTtcclxuICAgICAgICAvLyB0YWdzIFxyXG4gICAgICAgIGNvbnN0IG5vdGVUYWdzRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIG5vdGVUYWdzRWwuY2xhc3NOYW1lID0gXCJub3RlLXRhZ3NcIjtcclxuICAgICAgICBub3RlLnRhZ3MuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICB0YWcuaW5uZXJUZXh0ID0gdjtcclxuICAgICAgICAgICAgbm90ZVRhZ3NFbC5hcHBlbmRDaGlsZCh0YWcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGRhdGVcclxuICAgICAgICBjb25zdCBub3RlRGF0ZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGltZScpO1xyXG4gICAgICAgIG5vdGVEYXRlRWwuaW5uZXJUZXh0ID0gZ2V0RGF5KG5vdGUuZGF0ZSk7XHJcbiAgICAgICAgLy8gbm90aWZpY2F0aW9uIHRpbWVcclxuICAgICAgICBjb25zdCBub3RlTm90aWZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBub3RlTm90aWZFbC5jbGFzc05hbWUgPSBcIm5vdGUtbm90aWZcIjtcclxuICAgICAgICBpZiAobm90ZS5ub3RpZmljYXRpb24gJiYgbm90ZS5ub3RpZmljYXRpb24gPiBEYXRlLm5vdygpKSB7XHJcbiAgICAgICAgICAgIG5vdGVOb3RpZkVsLmlubmVyVGV4dCA9IGBOb3RpZmljYXRpb24gb24gJHtnZXREYXkobm90ZS5ub3RpZmljYXRpb24pfWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhcHBlbmRpbmdcclxuICAgICAgICBub3RlRWwuYXBwZW5kKG5vdGVFbFRpdGxlLCBub3RlRWxDb250ZW50LCBub3RlRWxQaW5CdG4sIG5vdGVOb3RpZkVsLCBub3RlVGFnc0VsLCBub3RlRGF0ZUVsLCBub3RlRWxSZW1vdmVCdG4pO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChub3RlRWwpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSU5vdGUgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcclxuXHJcbmludGVyZmFjZSBJQXBwTm90aWZpY2F0aW9ucyB7XHJcbiAgICBhZGROb3RpZmljYXRpb246IChuZXdOb3RlOiBJTm90ZSkgPT4gdm9pZCxcclxuICAgIGNoZWNrUGVybWlzc2lvbnM6ICgpID0+IFByb21pc2U8Qm9vbGVhbj5cclxufVxyXG5cclxuLy8gU2luZ2xldG9uIGFwcCBub3RpZmljYXRpb25zXHJcbmV4cG9ydCBjbGFzcyBBcHBOb3RpZmljYXRpb25zIGltcGxlbWVudHMgSUFwcE5vdGlmaWNhdGlvbnMge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IElBcHBOb3RpZmljYXRpb25zO1xyXG4gICAgcGVuZGluZ05vdGlmaWNhdGlvbnM6IHtcclxuICAgICAgICBpZDogTm9kZUpTLlRpbWVvdXQsXHJcbiAgICAgICAgbm90ZUlkOiBzdHJpbmdcclxuICAgIH1bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogSUFwcE5vdGlmaWNhdGlvbnMge1xyXG4gICAgICAgIGlmICghQXBwTm90aWZpY2F0aW9ucy5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBBcHBOb3RpZmljYXRpb25zLmluc3RhbmNlID0gbmV3IEFwcE5vdGlmaWNhdGlvbnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBBcHBOb3RpZmljYXRpb25zLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNoZWNrUGVybWlzc2lvbnMoKTogUHJvbWlzZTxCb29sZWFuPiB7XHJcbiAgICAgICAgaWYgKCEoJ05vdGlmaWNhdGlvbicgaW4gd2luZG93KSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgbm90aWZpY2F0aW9ucy5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09IFwiZ3JhbnRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKS50aGVuKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsID09PSAnZ3JhbnRlZCc7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgYXN5bmMgYWRkTm90aWZpY2F0aW9uKG5vdGU6IElOb3RlKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja1Blcm1pc3Npb25zKCkudGhlbigoZ3JhbnRlZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ3JhbnRlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGltZW91dCA9IG5vdGUubm90aWZpY2F0aW9uIC0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIC8vIGNhbmNlbCBpZiBhbHJlYWR5IGV4aXN0c1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdJbmRleCA9IHRoaXMucGVuZGluZ05vdGlmaWNhdGlvbnMuZmluZEluZGV4KCh2KSA9PiB2Lm5vdGVJZCA9PT0gbm90ZS5pZCk7XHJcbiAgICAgICAgICAgICAgICBpZihleGlzdGluZ0luZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5wZW5kaW5nTm90aWZpY2F0aW9uc1tleGlzdGluZ0luZGV4XS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nTm90aWZpY2F0aW9ucy5zcGxpY2UoZXhpc3RpbmdJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBlbmRpbmdOb3RpZmljYXRpb25zKTtcclxuICAgICAgICAgICAgICAgIC8vIG9mYyBvbmx5IGZyb250LWVuZCBhbmQgYXBwIGxpZmUgdGltZSBpbXBsZW1lbnRhdGlvblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm90aWZUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGlmaWNhdGlvbihub3RlLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nTm90aWZpY2F0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogbm90aWZUaW1lb3V0LFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGVJZDogbm90ZS5pZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCB7IEFwcExvY2FsU3RvcmFnZSB9IGZyb20gJy4vYXBwU3RvcmFnZSc7XHJcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi9VSSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9vbGJhciB7XHJcbiAgICBhY3RpdmVUYWc6IHN0cmluZztcclxuICAgIHNlYXJjaFRlcm06IHN0cmluZztcclxuICAgIFVJOiBVSTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoVUlJbnN0YW5jZTogVUkpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZVRhZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hUZXJtID0gJyc7XHJcbiAgICAgICAgdGhpcy5VSSA9IFVJSW5zdGFuY2U7XHJcbiAgICAgICAgdGhpcy5iaW5kU2VhcmNoRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFNlYXJjaEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBzZWFyY2hFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKSBhcyBIVE1MSW5wdXRFbGVtZW50OyBcclxuICAgICAgICBzZWFyY2hFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoVGVybSA9IHRhcmdldC52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5VSS5yZW5kZXJOb3RlcygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBzZWFyY2hCdG5FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtY2xlYXInKSBhcyBIVE1MQnV0dG9uRWxlbWVudDsgXHJcbiAgICAgICAgc2VhcmNoQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZWFyY2hFbC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFRlcm0gPSAnJztcclxuICAgICAgICAgICAgdGhpcy5VSS5yZW5kZXJOb3RlcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlbmRlclRvb2xiYXJUYWdzKCkge1xyXG4gICAgICAgIGNvbnN0IHRhZ3MgPSBhd2FpdCBBcHBMb2NhbFN0b3JhZ2UuZ2V0SW5zdGFuY2UoKS5nZXRBbGxUYWdzRnJvbVN0b3JhZ2UoKTtcclxuICAgICAgICBjb25zdCBwYXJlbnRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b29sYmFyVGFncycpO1xyXG4gICAgICAgIHBhcmVudEVsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIC8vIHJlbmRlciBgQWxsYCBidG5cclxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG4uY2xhc3NOYW1lID0gYHRvb2xiYXItYnV0dG9uICR7dGhpcy5hY3RpdmVUYWcgPT09IG51bGwgJiYgJ3Rvb2xiYXItYnV0dG9uLS1hY3RpdmUnfWA7XHJcbiAgICAgICAgYnRuLmlubmVyVGV4dCA9ICdBbGwnO1xyXG4gICAgICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKGJ0bik7XHJcblxyXG4gICAgICAgIHRhZ3MuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgYnRuLmNsYXNzTmFtZSA9IGB0b29sYmFyLWJ1dHRvbiAke3RoaXMuYWN0aXZlVGFnID09PSB2ICYmICd0b29sYmFyLWJ1dHRvbi0tYWN0aXZlJ31gO1xyXG4gICAgICAgICAgICBidG4uaW5uZXJUZXh0ID0gdjtcclxuICAgICAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgQXJyYXkuZnJvbShwYXJlbnRFbC5jaGlsZHJlbikuZm9yRWFjaCgodjogSFRNTEJ1dHRvbkVsZW1lbnQsIGkpID0+IHtcclxuICAgICAgICAgICAgdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2V0QWN0aXZlVGFnLmJpbmQodGhpcywgdiwgaSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlVGFnKGVsOiBIVE1MQnV0dG9uRWxlbWVudCwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGR1bW15IHdheSB0byBnZXQgYEFsbGAgYnRuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB0aGlzLmFjdGl2ZVRhZyA9IG51bGw7XHJcbiAgICAgICAgZWxzZSB0aGlzLmFjdGl2ZVRhZyA9IGVsLmlubmVyVGV4dDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLlVJLnJlbmRlck5vdGVzKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZnVuY3Rpb24gZ2V0RGF5KGR0OiBudW1iZXIsIHRpbWV6b25lT2Zmc2V0OiBudW1iZXIgPSAwKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgoZHQgKyB0aW1lem9uZU9mZnNldCkpO1xyXG4gICAgY29uc3Qgc3RyaW5nRGF0ZSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgIHJldHVybiBzdHJpbmdEYXRlO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIGdldERheVxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=