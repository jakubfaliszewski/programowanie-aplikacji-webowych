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
        this.tags = ['today', 'work'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25pbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3BhcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zaGExLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92My5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VJLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBTdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJmYWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbm90ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbm90aWZpY2F0aW9uU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovLy8uL3NyYy90b29sYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFD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UUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0M7QUFDQTtBQUNBO0FBQ0E7QUFDRTtBQUNRO0FBQ0U7QUFDRTs7Ozs7Ozs7Ozs7OztBQ1B0RDtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEOztBQUVsRDs7QUFFQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsa0VBQUcsRTs7Ozs7Ozs7Ozs7O0FDdE5sQjtBQUFlLHFHQUFzQyxFOzs7Ozs7Ozs7Ozs7QUNBckQ7QUFBQTtBQUFxQzs7QUFFckM7QUFDQSxPQUFPLDREQUFRO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9COztBQUVwQjtBQUNBLG9CQUFvQjs7QUFFcEI7QUFDQSxvQkFBb0I7O0FBRXBCO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsb0VBQUssRTs7Ozs7Ozs7Ozs7O0FDbENwQjtBQUFlLDZFQUFjLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUcseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0FwSTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDs7QUFFbEQ7O0FBRUEsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQjs7QUFFQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixTQUFTO0FBQzVCOztBQUVBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixVQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWUsbUVBQUksRTs7Ozs7Ozs7Ozs7O0FDL0ZuQjtBQUFBO0FBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGVBQWUsU0FBUztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseWdCQUF5Z0I7QUFDemdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sNERBQVE7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRWUsd0VBQVMsRTs7Ozs7Ozs7Ozs7O0FDN0J4QjtBQUFBO0FBQUE7QUFBMkI7QUFDWTtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsY0FBYzs7O0FBR2Q7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0U7QUFDL0U7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRCwrQ0FBRzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQSx1RUFBdUU7QUFDdkU7O0FBRUEsMkVBQTJFOztBQUUzRSw2REFBNkQ7O0FBRTdEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkIsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBLHNCQUFzQjs7QUFFdEIsbUNBQW1DOztBQUVuQyw2QkFBNkI7O0FBRTdCLGlDQUFpQzs7QUFFakMsMkJBQTJCOztBQUUzQixpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBLGdCQUFnQiw2REFBUztBQUN6Qjs7QUFFZSxpRUFBRSxFOzs7Ozs7Ozs7Ozs7QUM5RmpCO0FBQUE7QUFBQTtBQUEyQjtBQUNBO0FBQzNCLFNBQVMsdURBQUcsYUFBYSwrQ0FBRztBQUNiLGlFQUFFLEU7Ozs7Ozs7Ozs7OztBQ0hqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ1I7O0FBRS9CO0FBQ0EsMENBQTBDOztBQUUxQzs7QUFFQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNBO0FBQ1E7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix5REFBSztBQUN2Qjs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxXQUFXLDZEQUFTO0FBQ3BCLEdBQUc7OztBQUdIO0FBQ0EsNkJBQTZCO0FBQzdCLEdBQUcsZUFBZTs7O0FBR2xCO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFBMkI7QUFDWTs7QUFFdkM7QUFDQTtBQUNBLCtDQUErQywrQ0FBRyxJQUFJOztBQUV0RDtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTs7QUFFQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUyw2REFBUztBQUNsQjs7QUFFZSxpRUFBRSxFOzs7Ozs7Ozs7Ozs7QUN2QmpCO0FBQUE7QUFBQTtBQUEyQjtBQUNFO0FBQzdCLFNBQVMsdURBQUcsYUFBYSxnREFBSTtBQUNkLGlFQUFFLEU7Ozs7Ozs7Ozs7OztBQ0hqQjtBQUFBO0FBQStCOztBQUUvQjtBQUNBLHFDQUFxQyxpREFBSztBQUMxQzs7QUFFZSx1RUFBUSxFOzs7Ozs7Ozs7Ozs7QUNOdkI7QUFBQTtBQUFxQzs7QUFFckM7QUFDQSxPQUFPLDREQUFRO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVlLHNFQUFPLEU7Ozs7Ozs7Ozs7Ozs7O0FDVnRCLG9GQUErQztBQUcvQyxxRUFBZ0M7QUFDaEMsa0VBQThCO0FBQzlCLDJFQUFvQztBQUdwQyxNQUFhLEVBQUU7SUFHWDtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELFVBQVU7UUFDTixRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2hFLElBQUksYUFBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVc7UUFDYixNQUFNLEtBQUssR0FBRyxNQUFNLDRCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN4RSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkQsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUVwRCxLQUFLO2FBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzthQUMvRixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUNWLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3pELENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FDNUU7YUFDQSxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNkLElBQUksV0FBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDdEIsQ0FBQyxDQUFDLFFBQVE7Z0JBQ1YsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0NBQ0o7QUFuQ0QsZ0JBbUNDOzs7Ozs7Ozs7Ozs7Ozs7QUMzQ0QsK0dBQXlEO0FBV3pELE1BQWEsZUFBZTtJQUV4QixnQkFBd0IsQ0FBQztJQUVsQixNQUFNLENBQUMsV0FBVztRQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRTtZQUMzQixlQUFlLENBQUMsUUFBUSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7U0FDcEQ7UUFFRCxPQUFPLGVBQWUsQ0FBQyxRQUFRLENBQUM7SUFDcEMsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxPQUFjOztRQUNuQyxNQUFNLEtBQUssU0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQVksbUNBQUksRUFBRSxDQUFDO1FBQzlFLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoRSxJQUFJLGFBQWEsS0FBSyxDQUFDLENBQUM7WUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsT0FBTyxDQUFDOztZQUNwRCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXpCLElBQUksT0FBTyxDQUFDLFlBQVk7WUFDcEIsc0NBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVELFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUUxRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxFQUFlO1FBQ3hDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBWSxDQUFDO1FBQ3hFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFMUQsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxLQUFLLENBQUMsbUJBQW1COztRQUNyQixNQUFNLEtBQUssU0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQVksbUNBQUksRUFBRSxDQUFDO1FBRTlFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsS0FBSyxDQUFDLHFCQUFxQjs7UUFDdkIsTUFBTSxLQUFLLFNBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFZLG1DQUFJLEVBQUUsQ0FBQztRQUM5RSxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNKO0FBL0NELDBDQStDQzs7Ozs7Ozs7Ozs7Ozs7O0FDMURELDREQUFzQjtBQUl0Qiw0REFBMEI7QUFFMUIsTUFBYSxJQUFJO0lBR2I7UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksT0FBRSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBRUo7QUFSRCxvQkFRQztBQUdELElBQUksSUFBSSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pCWCxnR0FBMEI7QUFFYixrQkFBVSxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUU3RixNQUFhLFFBQVE7SUFBckI7UUFFSSxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixVQUFLLEdBQVcsU0FBUyxDQUFDO1FBRTFCLFNBQUksR0FBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQUE7QUFSRCw0QkFRQztBQUVELE1BQWEsS0FBTSxTQUFRLFFBQVE7SUFJL0IsWUFBWSxPQUFpQixJQUFJOztRQUM3QixLQUFLLEVBQUUsQ0FBQztRQUhaLFNBQUksR0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFJdEIsSUFBSSxDQUFDLEVBQUUsU0FBRyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsRUFBRSxtQ0FBSSxTQUFFLEVBQUUsQ0FBQztRQUUzQixJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN6QztJQUNMLENBQUM7Q0FDSjtBQWpCRCxzQkFpQkM7Ozs7Ozs7Ozs7Ozs7OztBQy9CRCxpRkFBZ0Q7QUFFaEQsb0ZBQStDO0FBRy9DLE1BQWEsS0FBSztJQW1CZCxZQUFZLE9BQWMsSUFBSSxFQUFFLFVBQWM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFzQixDQUFDO1FBQ2hGLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBc0IsQ0FBQztRQUM5RSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFzQixDQUFDO1FBQ3pFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXNCLENBQUM7UUFDMUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUc7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBcUI7WUFDcEUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBd0I7WUFDM0UsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBcUI7WUFDdEUsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBbUI7WUFDcEUsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBcUI7WUFDdEUsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFxQjtZQUM3RSxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQXFCO1NBQ2hGO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLGlCQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25ELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM3QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxlQUFlLENBQUMsQ0FBYTtRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFFLENBQUMsQ0FBQyxNQUEyQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDM0UsQ0FBQztJQUVELGlCQUFpQjtRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxTQUFTLENBQUMsQ0FBYTs7UUFDbkIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQUssQ0FBQztZQUN0QixFQUFFLFFBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLG1DQUFJLElBQUk7WUFDNUIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDcEMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDeEMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU87WUFDeEMsS0FBSyxFQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQXNCLENBQUMsS0FBSztZQUNwRixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO1lBQ3hCLFlBQVksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDL0QsQ0FBQyxDQUFDO1FBQ0gsNEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFhO1FBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxXQUFXLENBQUMsQ0FBYTtRQUNyQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDM0MsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELDBCQUEwQjtRQUN0QixNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDdkUsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyRTthQUFNO1lBQ0gsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUM3RDtJQUNMLENBQUM7SUFFRCxVQUFVO1FBQ04sTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVsSCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsTUFBTSxDQUFDLENBQWE7UUFDaEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELGlCQUFpQjtRQUNiLHNCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDckIsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2RCxjQUFjLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztZQUN6QyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzVCLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ3JCLEtBQUssQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO1lBQzFCLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLGNBQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLO2dCQUNuQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUV6QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsYUFBYTtRQUNULE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekQsUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDN0IsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN6QixNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNyQixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pELFVBQVUsQ0FBQyxHQUFHLEdBQUcscUJBQXFCLENBQUM7WUFDdkMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25DLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNqRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1lBQ3JDLENBQUMsQ0FBQztZQUNGLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsS0FBSyxDQUFDLHlCQUF5QjtRQUMzQixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hELFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRTFCLE1BQU0sSUFBSSxHQUFHLE1BQU0sNEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3pFLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3ZCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDakIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsWUFBWTtRQUNSLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNwRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDeEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3hELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBQ0o7QUExTEQsc0JBMExDOzs7Ozs7Ozs7Ozs7Ozs7QUMvTEQsb0ZBQStDO0FBRy9DLHFFQUFnQztBQUVoQyxxRUFBaUM7QUFFakMsTUFBYSxJQUFJO0lBRWIsWUFBWSxJQUFXLEVBQUUsTUFBbUIsRUFBRSxVQUFjO1FBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztRQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsaUJBQWlCLENBQUMsSUFBVztRQUN6QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDMUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxVQUFVLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNoQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBYSxFQUFFLEVBQUU7WUFDL0MsSUFBSSxhQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU3QixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFnQixFQUFFLEVBQUU7WUFDbEQsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDMUMsSUFBSSxhQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM1QjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFXO1FBQ3BCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEQsWUFBWSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDcEMsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELGdCQUFnQixDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUM7UUFDcEYsWUFBWSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTNDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFhLEVBQUUsRUFBRTtZQUNyRCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0IsNEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzdGLENBQUMsQ0FBQztRQUVGLE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBVztRQUN2QixNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELGVBQWUsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1FBQzFDLE1BQU0sbUJBQW1CLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxtQkFBbUIsQ0FBQyxHQUFHLEdBQUcscUJBQXFCLENBQUM7UUFDaEQsZUFBZSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRWpELGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFhLEVBQUUsRUFBRTtZQUN4RCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDcEIsNEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNwRyxDQUFDLENBQUM7UUFFRixPQUFPLGVBQWUsQ0FBQztJQUMzQixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVcsRUFBRSxNQUFtQjtRQUNuQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxXQUFXLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztRQUNyQyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFbkMsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxhQUFhLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUN6QyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFdkMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QyxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5ELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsVUFBVSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNwQixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELFVBQVUsQ0FBQyxTQUFTLEdBQUcsY0FBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QyxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELFdBQVcsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ3JDLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNyRCxXQUFXLENBQUMsU0FBUyxHQUFHLG1CQUFtQixjQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7U0FDMUU7UUFHRCxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzlHLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNKO0FBN0ZELG9CQTZGQzs7Ozs7Ozs7Ozs7Ozs7O0FDNUZELE1BQWEsZ0JBQWdCO0lBTXpCO1FBSkEseUJBQW9CLEdBR2QsRUFBRSxDQUFDO0lBQ2UsQ0FBQztJQUVsQixNQUFNLENBQUMsV0FBVztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO1lBQzVCLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7U0FDdEQ7UUFFRCxPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUQsS0FBSyxDQUFDLGdCQUFnQjtRQUNsQixJQUFJLENBQUMsQ0FBQyxjQUFjLElBQUksTUFBTSxDQUFDLEVBQUU7WUFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1lBQzlELE9BQU8sS0FBSyxDQUFDO1NBQ2hCO2FBQU07WUFDSCxJQUFJLFlBQVksQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO2dCQUN2QyxPQUFPLElBQUksQ0FBQzthQUNmO2lCQUFNO2dCQUNILE9BQU8sWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ2pELE9BQU8sR0FBRyxLQUFLLFNBQVMsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLENBQUM7YUFDTjtTQUNKO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBVztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNyQyxJQUFJLE9BQU8sRUFBRTtnQkFDVCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFFL0MsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZGLElBQUcsYUFBYSxJQUFJLENBQUMsRUFBRTtvQkFDbkIsWUFBWSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDMUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3REO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBRXZDLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ2pDLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNaLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7b0JBQzNCLEVBQUUsRUFBRSxZQUFZO29CQUNoQixNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUU7aUJBQ2xCLENBQUMsQ0FBQzthQUVOO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBRUo7QUF2REQsNENBdURDOzs7Ozs7Ozs7Ozs7QUMvREQsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxtTUFBK0Y7O0FBRWpJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCOzs7Ozs7Ozs7Ozs7OztBQ3BCQSxvRkFBK0M7QUFHL0MsTUFBYSxPQUFPO0lBS2hCLFlBQVksVUFBYztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsZ0JBQWdCO1FBQ1osTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXFCLENBQUM7UUFDdkUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3JDLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUEwQixDQUFDO1lBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNwRCxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQXNCLENBQUM7UUFDakYsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3hDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsS0FBSyxDQUFDLGlCQUFpQjtRQUNuQixNQUFNLElBQUksR0FBRyxNQUFNLDRCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUN6RSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hELFFBQVEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRXhCLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLElBQUksd0JBQXdCLEVBQUUsQ0FBQztRQUN4RixHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN0QixRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNmLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLElBQUksd0JBQXdCLEVBQUUsQ0FBQztZQUNyRixHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNsQixRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBb0IsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5RCxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsWUFBWSxDQUFDLEVBQXFCLEVBQUUsS0FBYTtRQUU3QyxJQUFJLEtBQUssS0FBSyxDQUFDO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7O1lBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUVuQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFCLENBQUM7Q0FDSjtBQXpERCwwQkF5REM7Ozs7Ozs7Ozs7Ozs7OztBQzVERCxTQUFTLE1BQU0sQ0FBQyxFQUFVLEVBQUUsaUJBQXlCLENBQUM7SUFDbEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM3QyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekMsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQztBQUlHLHdCQUFNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7IH1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lOyB9XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuaHRtbCBib2R5IHtcXG4gIGJhY2tncm91bmQ6ICMxNjE2MTY7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4PScwcHgnIHk9JzBweCcgdmlld0JveD0nMCAwIDE2IDE2JyBzdHlsZT0nZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNiAxNicgeG1sOnNwYWNlPSdwcmVzZXJ2ZSclM0UlM0NyZWN0IHdpZHRoPScxNicgZmlsbD0nbm9uZScgaGVpZ2h0PScxNicvJTNFJTNDcmVjdCB4PScwJyB5PScwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LDAuMzUpJyB3aWR0aD0nMScgaGVpZ2h0PScxJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICNlN2U3ZTc7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMnB4IC0ycHg7IH1cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDEwcHg7IH1cXG4gIG1haW4gLm1haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7IH1cXG4gICAgbWFpbiAubWFpbiAuY29udGVudCB7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGZsZXg6IDE7XFxuICAgICAgZ2FwOiAxcmVtO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi50b29sYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLnRvb2xiYXItYnV0dG9ucyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxcmVtOyB9XFxuICAudG9vbGJhci1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiAjNjY2O1xcbiAgICBjb2xvcjogI2U3ZTdlNztcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwLjdyZW0gM3JlbSAwLjdyZW0gMC44cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC50b29sYmFyLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogIzRkNGQ0ZDsgfVxcbiAgICAudG9vbGJhci1idXR0b24tLWFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZDogI2U0OWEyMjsgfVxcbiAgICAgIC50b29sYmFyLWJ1dHRvbi0tYWN0aXZlOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNiYzdkMTc7IH1cXG4gIC50b29sYmFyIC5uZXdOb3RlLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6ICMwZjYyZmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtIDAuN3JlbSAwLjhyZW07IH1cXG4gICAgLnRvb2xiYXIgLm5ld05vdGUtYnV0dG9uOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjMDE1MWU4OyB9XFxuICAgIC50b29sYmFyIC5uZXdOb3RlLWJ1dHRvbiBpbWcge1xcbiAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtOyB9XFxuXFxuLnNlYXJjaGJhciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG4gIC5zZWFyY2hiYXIgaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kOiAjMjYyNjI2O1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICNlN2U3ZTc7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbiAgICAuc2VhcmNoYmFyIGlucHV0OmhvdmVyLCAuc2VhcmNoYmFyIGlucHV0OmZvY3VzIHtcXG4gICAgICBvdXRsaW5lOiAwO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlN2U3ZTc7IH1cXG4gICAgLnNlYXJjaGJhciBpbnB1dDp2YWxpZCArIC5zZWFyY2hiYXItYnV0dG9uIHtcXG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLnNlYXJjaGJhci1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB3aWR0aDogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuc2VhcmNoYmFyLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTsgfVxcbiAgICAuc2VhcmNoYmFyLWJ1dHRvbiBpbWcge1xcbiAgICAgIGhlaWdodDogMXJlbTsgfVxcblxcbi5ub3RlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxLjVyZW07XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLm5vdGVzOm5vdCg6ZW1wdHkpOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTsgfVxcbiAgLm5vdGVzLm5vdGVzLS1waW5uZWQgLm5vdGUtcGluIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgLm5vdGVzIC5ub3RlIHtcXG4gICAgd2lkdGg6IDI1NnB4O1xcbiAgICBoZWlnaHQ6IDI1NnB4O1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQ6ICMyNjI2MjY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgdHJhbnNpdGlvbjogMC4yczsgfVxcbiAgICAubm90ZXMgLm5vdGUtdGl0bGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgIHBhZGRpbmc6IDRweDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAgIC5ub3RlcyAubm90ZS1jb250ZW50IHtcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgZmxleDogMTsgfVxcbiAgICAubm90ZXMgLm5vdGU6OmFmdGVyIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjFzOyB9XFxuICAgIC5ub3RlcyAubm90ZTpmb2N1cyB7XFxuICAgICAgb3V0bGluZTogMDtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTdlN2U3OyB9XFxuICAgIC5ub3RlcyAubm90ZTpob3Zlcjo6YWZ0ZXIge1xcbiAgICAgIG9wYWNpdHk6IDAuMDU7IH1cXG4gICAgLm5vdGVzIC5ub3RlOmhvdmVyIC5ub3RlLXBpbixcXG4gICAgLm5vdGVzIC5ub3RlOmhvdmVyIC5ub3RlLXJlbW92ZSB7XFxuICAgICAgb3BhY2l0eTogMTsgfVxcbiAgICAubm90ZXMgLm5vdGUtcGluLCAubm90ZXMgLm5vdGUtcmVtb3ZlIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMnJlbTtcXG4gICAgICBoZWlnaHQ6IDJyZW07XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgcGFkZGluZzogNHB4O1xcbiAgICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICAgLm5vdGVzIC5ub3RlLXBpbjpob3ZlciwgLm5vdGVzIC5ub3RlLXJlbW92ZTpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IH1cXG4gICAgLm5vdGVzIC5ub3RlLXBpbiB7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIHJpZ2h0OiAwOyB9XFxuICAgIC5ub3RlcyAubm90ZS1yZW1vdmUge1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICByaWdodDogMDsgfVxcbiAgICAubm90ZXMgLm5vdGUtdGFncyB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICAgIGdhcDogNHB4OyB9XFxuICAgICAgLm5vdGVzIC5ub3RlLXRhZ3MgbGkge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgICAgICAgcGFkZGluZzogNHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjIsIDIyLCAwLjUpOyB9XFxuICAgIC5ub3RlcyAubm90ZS1ub3RpZiB7XFxuICAgICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtOyB9XFxuICAgIC5ub3RlcyAubm90ZSB0aW1lIHtcXG4gICAgICBmb250LXNpemU6IDAuN3JlbTsgfVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwNTI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuICAubW9kYWwtLXZpc2libGUge1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAubW9kYWwtd2luZG93IHtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgbWluLWhlaWdodDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQ6ICMxNjE2MTY7IH1cXG4gIC5tb2RhbC1mb3JtIHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XFxuICAgIC5tb2RhbC1mb3JtIGlucHV0LFxcbiAgICAubW9kYWwtZm9ybSB0ZXh0YXJlYSB7XFxuICAgICAgYmFja2dyb3VuZDogIzI2MjYyNjtcXG4gICAgICBjb2xvcjogI2U3ZTdlNztcXG4gICAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgbWluLWhlaWdodDogMS41cmVtO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjJzO1xcbiAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgICAgLm1vZGFsLWZvcm0gaW5wdXQ6Zm9jdXMsXFxuICAgICAgLm1vZGFsLWZvcm0gdGV4dGFyZWE6Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogMDtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlN2U3ZTc7IH1cXG4gICAgLm1vZGFsLWZvcm0gdGV4dGFyZWEge1xcbiAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAgIC5tb2RhbC1mb3JtLWNvbnRhaW5lciB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgZ2FwOiAxcmVtO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gIC5tb2RhbC1idXR0b25zIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgLm1vZGFsLWJ1dHRvbnMgLm1vZGFsLWJ1dHRvbiB7XFxuICAgICAgYmFja2dyb3VuZDogIzY2NjtcXG4gICAgICBjb2xvcjogI2U3ZTdlNztcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgcGFkZGluZzogMC43cmVtIDNyZW0gMC43cmVtIDAuOHJlbTtcXG4gICAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgIHRyYW5zaXRpb246IDAuMnM7IH1cXG4gICAgICAubW9kYWwtYnV0dG9ucyAubW9kYWwtYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7IH1cXG4gICAgICAubW9kYWwtYnV0dG9ucyAubW9kYWwtYnV0dG9uLXNhdmUge1xcbiAgICAgICAgYmFja2dyb3VuZDogIzBmNjJmZTsgfVxcbiAgICAgICAgLm1vZGFsLWJ1dHRvbnMgLm1vZGFsLWJ1dHRvbi1zYXZlOmhvdmVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZDogIzAxNTFlODsgfVxcbiAgICAgIC5tb2RhbC1idXR0b25zIC5tb2RhbC1idXR0b246ZGlzYWJsZWQge1xcbiAgICAgICAgY29sb3I6ICM2NjY7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTYxNjE2OyB9XFxuICAubW9kYWwtdG9nZ2xlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBnYXA6IDAuNXJlbTsgfVxcbiAgICAubW9kYWwtdG9nZ2xlIGlucHV0IHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgIHdpZHRoOiAwOyB9XFxuICAgICAgLm1vZGFsLXRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gLnN0eWxlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGY2MmZlOyB9XFxuICAgICAgICAubW9kYWwtdG9nZ2xlIGlucHV0OmNoZWNrZWQgfiAuc3R5bGVyOjpiZWZvcmUge1xcbiAgICAgICAgICBsZWZ0OiAxLjVyZW07IH1cXG4gICAgLm1vZGFsLXRvZ2dsZSAuc3R5bGVyIHtcXG4gICAgICB3aWR0aDogM3JlbTtcXG4gICAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgICAubW9kYWwtdG9nZ2xlIC5zdHlsZXI6OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiAxLjJyZW07XFxuICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgICAgbGVmdDogMXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjFzOyB9XFxuICAubW9kYWwtY29sb3ItcGlja2VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtOyB9XFxuICAgIC5tb2RhbC1jb2xvci1waWNrZXIgLmNvbG9yLXJhZGlvIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAgICAgLm1vZGFsLWNvbG9yLXBpY2tlciAuY29sb3ItcmFkaW8gaW5wdXQge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIHdpZHRoOiAwOyB9XFxuICAgICAgICAubW9kYWwtY29sb3ItcGlja2VyIC5jb2xvci1yYWRpbyBpbnB1dDpjaGVja2VkIH4gLnN0eWxlciB7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlOyB9XFxuICAgICAgLm1vZGFsLWNvbG9yLXBpY2tlciAuY29sb3ItcmFkaW8gLnN0eWxlciB7XFxuICAgICAgICB3aWR0aDogMnJlbTtcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLm1vZGFsLWV4aXN0aW5nLXRhZ3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMXJlbTsgfVxcbiAgICAubW9kYWwtZXhpc3RpbmctdGFncyAudGFnIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZDogIzI2MjYyNjtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgICBjb2xvcjogI2U3ZTdlNztcXG4gICAgICBoZWlnaHQ6IDJyZW07XFxuICAgICAgcGFkZGluZzogMCA4cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHRyYW5zaXRpb246IDAuMnM7IH1cXG4gICAgICAubW9kYWwtZXhpc3RpbmctdGFncyAudGFnOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICM0MDQwNDA7IH1cXG4gICAgICAubW9kYWwtZXhpc3RpbmctdGFncyAudGFnIGltZyB7XFxuICAgICAgICB3aWR0aDogMTZweDtcXG4gICAgICAgIGhlaWdodDogMTZweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07IH1cXG4gIC5tb2RhbC10YWdzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDFyZW07IH1cXG4gICAgLm1vZGFsLXRhZ3MgLm5vdGUtdGFnLWNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAubW9kYWwgLm1vZGFsLXNtYWxsLWJ0biB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQ6ICM2NjY7XFxuICAgIGNvbG9yOiAjZTdlN2U3O1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gICAgLm1vZGFsIC5tb2RhbC1zbWFsbC1idG46aG92ZXIsIC5tb2RhbCAubW9kYWwtc21hbGwtYnRuOmZvY3VzIHtcXG4gICAgICBvdXRsaW5lOiAwO1xcbiAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7IH1cXG4gICAgLm1vZGFsIC5tb2RhbC1zbWFsbC1idG4gaW1nIHtcXG4gICAgICB3aWR0aDogMjBweDsgfVxcbiAgICAubW9kYWwgLm1vZGFsLXNtYWxsLWJ0bi0tYWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjMGY2MmZlOyB9XFxuICAgICAgLm1vZGFsIC5tb2RhbC1zbWFsbC1idG4tLWFjdGl2ZTpob3ZlciwgLm1vZGFsIC5tb2RhbC1zbWFsbC1idG4tLWFjdGl2ZTpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiAwO1xcbiAgICAgICAgYmFja2dyb3VuZDogIzAxNTFlODsgfVxcbiAgLm1vZGFsIC5ub3RpZmljYXRpb24tY29udGVudCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgIC5tb2RhbCAubm90aWZpY2F0aW9uLWNvbnRlbnQgaW5wdXQge1xcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gICAgICAubW9kYWwgLm5vdGlmaWNhdGlvbi1jb250ZW50IGlucHV0Ojotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoMSk7IH1cXG4gICAgLm1vZGFsIC5ub3RpZmljYXRpb24tY29udGVudC0tdmlzaWJsZSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbmltYXRpb246IG5vdGlmRW50cmFuY2UgMC4ycztcXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0OyB9XFxuXFxuQGtleWZyYW1lcyBub3RpZkVudHJhbmNlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgbWF4LXdpZHRoOiAwOyB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH0gfVxcblxcbi5iZy1pbGx1c3RyYXRpb24ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBib3R0b206IC0xN3Z3O1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogNTAlO1xcbiAgei1pbmRleDogLTE7IH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBoZWlnaHQ6IDZweDsgfVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogIzE2MTYxNjsgfVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogIzY2NjsgfVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzBmNjJmZTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIHYxIH0gZnJvbSAnLi92MS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHYzIH0gZnJvbSAnLi92My5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHY0IH0gZnJvbSAnLi92NC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHY1IH0gZnJvbSAnLi92NS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5JTCB9IGZyb20gJy4vbmlsLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmVyc2lvbiB9IGZyb20gJy4vdmVyc2lvbi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHZhbGlkYXRlIH0gZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFyc2UgfSBmcm9tICcuL3BhcnNlLmpzJzsiLCIvKlxuICogQnJvd3Nlci1jb21wYXRpYmxlIEphdmFTY3JpcHQgTUQ1XG4gKlxuICogTW9kaWZpY2F0aW9uIG9mIEphdmFTY3JpcHQgTUQ1XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9KYXZhU2NyaXB0LU1ENVxuICpcbiAqIENvcHlyaWdodCAyMDExLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBodHRwczovL2JsdWVpbXAubmV0XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqXG4gKiBCYXNlZCBvblxuICogQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBSU0EgRGF0YSBTZWN1cml0eSwgSW5jLiBNRDUgTWVzc2FnZVxuICogRGlnZXN0IEFsZ29yaXRobSwgYXMgZGVmaW5lZCBpbiBSRkMgMTMyMS5cbiAqIFZlcnNpb24gMi4yIENvcHlyaWdodCAoQykgUGF1bCBKb2huc3RvbiAxOTk5IC0gMjAwOVxuICogT3RoZXIgY29udHJpYnV0b3JzOiBHcmVnIEhvbHQsIEFuZHJldyBLZXBlcnQsIFlkbmFyLCBMb3N0aW5ldFxuICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlXG4gKiBTZWUgaHR0cDovL3BhamhvbWUub3JnLnVrL2NyeXB0L21kNSBmb3IgbW9yZSBpbmZvLlxuICovXG5mdW5jdGlvbiBtZDUoYnl0ZXMpIHtcbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KG1zZy5sZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1kNVRvSGV4RW5jb2RlZEFycmF5KHdvcmRzVG9NZDUoYnl0ZXNUb1dvcmRzKGJ5dGVzKSwgYnl0ZXMubGVuZ3RoICogOCkpO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhbiBhcnJheSBvZiBieXRlc1xuICovXG5cblxuZnVuY3Rpb24gbWQ1VG9IZXhFbmNvZGVkQXJyYXkoaW5wdXQpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICB2YXIgbGVuZ3RoMzIgPSBpbnB1dC5sZW5ndGggKiAzMjtcbiAgdmFyIGhleFRhYiA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHtcbiAgICB2YXIgeCA9IGlucHV0W2kgPj4gNV0gPj4+IGkgJSAzMiAmIDB4ZmY7XG4gICAgdmFyIGhleCA9IHBhcnNlSW50KGhleFRhYi5jaGFyQXQoeCA+Pj4gNCAmIDB4MGYpICsgaGV4VGFiLmNoYXJBdCh4ICYgMHgwZiksIDE2KTtcbiAgICBvdXRwdXQucHVzaChoZXgpO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qKlxuICogQ2FsY3VsYXRlIG91dHB1dCBsZW5ndGggd2l0aCBwYWRkaW5nIGFuZCBiaXQgbGVuZ3RoXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRPdXRwdXRMZW5ndGgoaW5wdXRMZW5ndGg4KSB7XG4gIHJldHVybiAoaW5wdXRMZW5ndGg4ICsgNjQgPj4+IDkgPDwgNCkgKyAxNCArIDE7XG59XG4vKlxuICogQ2FsY3VsYXRlIHRoZSBNRDUgb2YgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcywgYW5kIGEgYml0IGxlbmd0aC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHdvcmRzVG9NZDUoeCwgbGVuKSB7XG4gIC8qIGFwcGVuZCBwYWRkaW5nICovXG4gIHhbbGVuID4+IDVdIHw9IDB4ODAgPDwgbGVuICUgMzI7XG4gIHhbZ2V0T3V0cHV0TGVuZ3RoKGxlbikgLSAxXSA9IGxlbjtcbiAgdmFyIGEgPSAxNzMyNTg0MTkzO1xuICB2YXIgYiA9IC0yNzE3MzM4Nzk7XG4gIHZhciBjID0gLTE3MzI1ODQxOTQ7XG4gIHZhciBkID0gMjcxNzMzODc4O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICB2YXIgb2xkYSA9IGE7XG4gICAgdmFyIG9sZGIgPSBiO1xuICAgIHZhciBvbGRjID0gYztcbiAgICB2YXIgb2xkZCA9IGQ7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICB9XG5cbiAgcmV0dXJuIFthLCBiLCBjLCBkXTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IGJ5dGVzIHRvIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHNcbiAqIENoYXJhY3RlcnMgPjI1NSBoYXZlIHRoZWlyIGhpZ2gtYnl0ZSBzaWxlbnRseSBpZ25vcmVkLlxuICovXG5cblxuZnVuY3Rpb24gYnl0ZXNUb1dvcmRzKGlucHV0KSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgbGVuZ3RoOCA9IGlucHV0Lmxlbmd0aCAqIDg7XG4gIHZhciBvdXRwdXQgPSBuZXcgVWludDMyQXJyYXkoZ2V0T3V0cHV0TGVuZ3RoKGxlbmd0aDgpKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDg7IGkgKz0gOCkge1xuICAgIG91dHB1dFtpID4+IDVdIHw9IChpbnB1dFtpIC8gOF0gJiAweGZmKSA8PCBpICUgMzI7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLypcbiAqIEFkZCBpbnRlZ2Vycywgd3JhcHBpbmcgYXQgMl4zMi4gVGhpcyB1c2VzIDE2LWJpdCBvcGVyYXRpb25zIGludGVybmFsbHlcbiAqIHRvIHdvcmsgYXJvdW5kIGJ1Z3MgaW4gc29tZSBKUyBpbnRlcnByZXRlcnMuXG4gKi9cblxuXG5mdW5jdGlvbiBzYWZlQWRkKHgsIHkpIHtcbiAgdmFyIGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgdmFyIG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICByZXR1cm4gbXN3IDw8IDE2IHwgbHN3ICYgMHhmZmZmO1xufVxuLypcbiAqIEJpdHdpc2Ugcm90YXRlIGEgMzItYml0IG51bWJlciB0byB0aGUgbGVmdC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpdFJvdGF0ZUxlZnQobnVtLCBjbnQpIHtcbiAgcmV0dXJuIG51bSA8PCBjbnQgfCBudW0gPj4+IDMyIC0gY250O1xufVxuLypcbiAqIFRoZXNlIGZ1bmN0aW9ucyBpbXBsZW1lbnQgdGhlIGZvdXIgYmFzaWMgb3BlcmF0aW9ucyB0aGUgYWxnb3JpdGhtIHVzZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVjbW4ocSwgYSwgYiwgeCwgcywgdCkge1xuICByZXR1cm4gc2FmZUFkZChiaXRSb3RhdGVMZWZ0KHNhZmVBZGQoc2FmZUFkZChhLCBxKSwgc2FmZUFkZCh4LCB0KSksIHMpLCBiKTtcbn1cblxuZnVuY3Rpb24gbWQ1ZmYoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBjIHwgfmIgJiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1Z2coYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBkIHwgYyAmIH5kLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aGgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWlpKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihjIF4gKGIgfCB+ZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZDU7IiwiZXhwb3J0IGRlZmF1bHQgJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCc7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuXG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgdmFyIHY7XG4gIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxNik7IC8vIFBhcnNlICMjIyMjIyMjLS4uLi4tLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFyclswXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgwLCA4KSwgMTYpKSA+Pj4gMjQ7XG4gIGFyclsxXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzJdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclszXSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0jIyMjLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbNF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoOSwgMTMpLCAxNikpID4+PiA4O1xuICBhcnJbNV0gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0jIyMjLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzZdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxOCksIDE2KSkgPj4+IDg7XG4gIGFycls3XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tIyMjIy0uLi4uLi4uLi4uLi5cblxuICBhcnJbOF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTksIDIzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzldID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0uLi4uLSMjIyMjIyMjIyMjI1xuICAvLyAoVXNlIFwiL1wiIHRvIGF2b2lkIDMyLWJpdCB0cnVuY2F0aW9uIHdoZW4gYml0LXNoaWZ0aW5nIGhpZ2gtb3JkZXIgYnl0ZXMpXG5cbiAgYXJyWzEwXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgyNCwgMzYpLCAxNikpIC8gMHgxMDAwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMV0gPSB2IC8gMHgxMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTJdID0gdiA+Pj4gMjQgJiAweGZmO1xuICBhcnJbMTNdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMTRdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclsxNV0gPSB2ICYgMHhmZjtcbiAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFyc2U7IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCIvLyBBZGFwdGVkIGZyb20gQ2hyaXMgVmVuZXNzJyBTSEExIGNvZGUgYXRcbi8vIGh0dHA6Ly93d3cubW92YWJsZS10eXBlLmNvLnVrL3NjcmlwdHMvc2hhMS5odG1sXG5mdW5jdGlvbiBmKHMsIHgsIHksIHopIHtcbiAgc3dpdGNoIChzKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIHggJiB5IF4gfnggJiB6O1xuXG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcblxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiB4ICYgeSBeIHggJiB6IF4geSAmIHo7XG5cbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuICB9XG59XG5cbmZ1bmN0aW9uIFJPVEwoeCwgbikge1xuICByZXR1cm4geCA8PCBuIHwgeCA+Pj4gMzIgLSBuO1xufVxuXG5mdW5jdGlvbiBzaGExKGJ5dGVzKSB7XG4gIHZhciBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICB2YXIgSCA9IFsweDY3NDUyMzAxLCAweGVmY2RhYjg5LCAweDk4YmFkY2ZlLCAweDEwMzI1NDc2LCAweGMzZDJlMWYwXTtcblxuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIHZhciBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXMucHVzaChtc2cuY2hhckNvZGVBdChpKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGJ5dGVzKSkge1xuICAgIC8vIENvbnZlcnQgQXJyYXktbGlrZSB0byBBcnJheVxuICAgIGJ5dGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYnl0ZXMpO1xuICB9XG5cbiAgYnl0ZXMucHVzaCgweDgwKTtcbiAgdmFyIGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgdmFyIE4gPSBNYXRoLmNlaWwobCAvIDE2KTtcbiAgdmFyIE0gPSBuZXcgQXJyYXkoTik7XG5cbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IE47ICsrX2kpIHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgYXJyW2pdID0gYnl0ZXNbX2kgKiA2NCArIGogKiA0XSA8PCAyNCB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDFdIDw8IDE2IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDNdO1xuICAgIH1cblxuICAgIE1bX2ldID0gYXJyO1xuICB9XG5cbiAgTVtOIC0gMV1bMTRdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAvIE1hdGgucG93KDIsIDMyKTtcbiAgTVtOIC0gMV1bMTRdID0gTWF0aC5mbG9vcihNW04gLSAxXVsxNF0pO1xuICBNW04gLSAxXVsxNV0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4ICYgMHhmZmZmZmZmZjtcblxuICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBOOyArK19pMikge1xuICAgIHZhciBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcblxuICAgIGZvciAodmFyIHQgPSAwOyB0IDwgMTY7ICsrdCkge1xuICAgICAgV1t0XSA9IE1bX2kyXVt0XTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfdCA9IDE2OyBfdCA8IDgwOyArK190KSB7XG4gICAgICBXW190XSA9IFJPVEwoV1tfdCAtIDNdIF4gV1tfdCAtIDhdIF4gV1tfdCAtIDE0XSBeIFdbX3QgLSAxNl0sIDEpO1xuICAgIH1cblxuICAgIHZhciBhID0gSFswXTtcbiAgICB2YXIgYiA9IEhbMV07XG4gICAgdmFyIGMgPSBIWzJdO1xuICAgIHZhciBkID0gSFszXTtcbiAgICB2YXIgZSA9IEhbNF07XG5cbiAgICBmb3IgKHZhciBfdDIgPSAwOyBfdDIgPCA4MDsgKytfdDIpIHtcbiAgICAgIHZhciBzID0gTWF0aC5mbG9vcihfdDIgLyAyMCk7XG4gICAgICB2YXIgVCA9IFJPVEwoYSwgNSkgKyBmKHMsIGIsIGMsIGQpICsgZSArIEtbc10gKyBXW190Ml0gPj4+IDA7XG4gICAgICBlID0gZDtcbiAgICAgIGQgPSBjO1xuICAgICAgYyA9IFJPVEwoYiwgMzApID4+PiAwO1xuICAgICAgYiA9IGE7XG4gICAgICBhID0gVDtcbiAgICB9XG5cbiAgICBIWzBdID0gSFswXSArIGEgPj4+IDA7XG4gICAgSFsxXSA9IEhbMV0gKyBiID4+PiAwO1xuICAgIEhbMl0gPSBIWzJdICsgYyA+Pj4gMDtcbiAgICBIWzNdID0gSFszXSArIGQgPj4+IDA7XG4gICAgSFs0XSA9IEhbNF0gKyBlID4+PiAwO1xuICB9XG5cbiAgcmV0dXJuIFtIWzBdID4+IDI0ICYgMHhmZiwgSFswXSA+PiAxNiAmIDB4ZmYsIEhbMF0gPj4gOCAmIDB4ZmYsIEhbMF0gJiAweGZmLCBIWzFdID4+IDI0ICYgMHhmZiwgSFsxXSA+PiAxNiAmIDB4ZmYsIEhbMV0gPj4gOCAmIDB4ZmYsIEhbMV0gJiAweGZmLCBIWzJdID4+IDI0ICYgMHhmZiwgSFsyXSA+PiAxNiAmIDB4ZmYsIEhbMl0gPj4gOCAmIDB4ZmYsIEhbMl0gJiAweGZmLCBIWzNdID4+IDI0ICYgMHhmZiwgSFszXSA+PiAxNiAmIDB4ZmYsIEhbM10gPj4gOCAmIDB4ZmYsIEhbM10gJiAweGZmLCBIWzRdID4+IDI0ICYgMHhmZiwgSFs0XSA+PiAxNiAmIDB4ZmYsIEhbNF0gPj4gOCAmIDB4ZmYsIEhbNF0gJiAweGZmXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hhMTsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnOyAvLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xuXG52YXIgX2Nsb2Nrc2VxOyAvLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcblxuXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7IC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQgZm9yIEFQSSBkZXRhaWxzXG5cbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBuZXcgQXJyYXkoMTYpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTsgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG5cbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW3NlZWRCeXRlc1swXSB8IDB4MDEsIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXTtcbiAgICB9XG5cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH0gLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG5cblxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogRGF0ZS5ub3coKTsgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTsgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuXG4gIHZhciBkdCA9IG1zZWNzIC0gX2xhc3RNU2VjcyArIChuc2VjcyAtIF9sYXN0TlNlY3MpIC8gMTAwMDA7IC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9IC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcblxuXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9IC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcblxuXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInV1aWQudjEoKTogQ2FuJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjXCIpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxOyAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcblxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDsgLy8gYHRpbWVfbG93YFxuXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7IC8vIGB0aW1lX21pZGBcblxuICB2YXIgdG1oID0gbXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmOyAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjsgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG5cbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwOyAvLyBgY2xvY2tfc2VxX2xvd2BcblxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7IC8vIGBub2RlYFxuXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCBzdHJpbmdpZnkoYik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHYxOyIsImltcG9ydCB2MzUgZnJvbSAnLi92MzUuanMnO1xuaW1wb3J0IG1kNSBmcm9tICcuL21kNS5qcyc7XG52YXIgdjMgPSB2MzUoJ3YzJywgMHgzMCwgbWQ1KTtcbmV4cG9ydCBkZWZhdWx0IHYzOyIsImltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuaW1wb3J0IHBhcnNlIGZyb20gJy4vcGFyc2UuanMnO1xuXG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgdmFyIGJ5dGVzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuZXhwb3J0IHZhciBETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydCB2YXIgVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmFtZSwgdmVyc2lvbiwgaGFzaGZ1bmMpIHtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVVVUlEKHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSBwYXJzZShuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGlmIChuYW1lc3BhY2UubGVuZ3RoICE9PSAxNikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfSAvLyBDb21wdXRlIGhhc2ggb2YgbmFtZXNwYWNlIGFuZCB2YWx1ZSwgUGVyIDQuM1xuICAgIC8vIEZ1dHVyZTogVXNlIHNwcmVhZCBzeW50YXggd2hlbiBzdXBwb3J0ZWQgb24gYWxsIHBsYXRmb3JtcywgZS5nLiBgYnl0ZXMgPVxuICAgIC8vIGhhc2hmdW5jKFsuLi5uYW1lc3BhY2UsIC4uLiB2YWx1ZV0pYFxuXG5cbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZSk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlLCBuYW1lc3BhY2UubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2hmdW5jKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gICAgaWYgKGJ1Zikge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5naWZ5KGJ5dGVzKTtcbiAgfSAvLyBGdW5jdGlvbiNuYW1lIGlzIG5vdCBzZXR0YWJsZSBvbiBzb21lIHBsYXRmb3JtcyAoIzI3MClcblxuXG4gIHRyeSB7XG4gICAgZ2VuZXJhdGVVVUlELm5hbWUgPSBuYW1lOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgfSBjYXRjaCAoZXJyKSB7fSAvLyBGb3IgQ29tbW9uSlMgZGVmYXVsdCBleHBvcnQgc3VwcG9ydFxuXG5cbiAgZ2VuZXJhdGVVVUlELkROUyA9IEROUztcbiAgZ2VuZXJhdGVVVUlELlVSTCA9IFVSTDtcbiAgcmV0dXJuIGdlbmVyYXRlVVVJRDtcbn0iLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgdjM1IGZyb20gJy4vdjM1LmpzJztcbmltcG9ydCBzaGExIGZyb20gJy4vc2hhMS5qcyc7XG52YXIgdjUgPSB2MzUoJ3Y1JywgMHg1MCwgc2hhMSk7XG5leHBvcnQgZGVmYXVsdCB2NTsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5cbmZ1bmN0aW9uIHZlcnNpb24odXVpZCkge1xuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZUludCh1dWlkLnN1YnN0cigxNCwgMSksIDE2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmVyc2lvbjsiLCJpbXBvcnQgeyBBcHBMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2FwcFN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBJTm90ZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTWFpbiB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xyXG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi9ub3RlJztcclxuaW1wb3J0IHsgVG9vbGJhciB9IGZyb20gJy4vdG9vbGJhcic7XHJcblxyXG4vLyBha2EgTm90ZXNcclxuZXhwb3J0IGNsYXNzIFVJIHtcclxuICAgIHRvb2xiYXI6IFRvb2xiYXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy50b29sYmFyID0gbmV3IFRvb2xiYXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy50b29sYmFyLnJlbmRlclRvb2xiYXJUYWdzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW5vdGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBNb2RhbChudWxsLCB0aGlzKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlbmRlck5vdGVzKCkge1xyXG4gICAgICAgIGNvbnN0IG5vdGVzID0gYXdhaXQgQXBwTG9jYWxTdG9yYWdlLmdldEluc3RhbmNlKCkuZ2V0RnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIGNvbnN0IG5vdGVzRWxQID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLXBpbm5lZCcpO1xyXG4gICAgICAgIGNvbnN0IG5vdGVzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtb3RoZXInKTtcclxuICAgICAgICBub3Rlc0VsLmlubmVyVGV4dCA9IG51bGw7IG5vdGVzRWxQLmlubmVyVGV4dCA9IG51bGw7XHJcblxyXG4gICAgICAgIG5vdGVzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHYpID0+IHRoaXMudG9vbGJhci5hY3RpdmVUYWcgIT09IG51bGwgPyB2LnRhZ3MuaW5jbHVkZXModGhpcy50b29sYmFyLmFjdGl2ZVRhZykgOiB0cnVlKVxyXG4gICAgICAgICAgICAuZmlsdGVyKCh2KSA9PlxyXG4gICAgICAgICAgICAgICAgdi50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMudG9vbGJhci5zZWFyY2hUZXJtKSB8fFxyXG4gICAgICAgICAgICAgICAgdi5jb250ZW50LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy50b29sYmFyLnNlYXJjaFRlcm0pIHx8XHJcbiAgICAgICAgICAgICAgICB2LnRhZ3Muc29tZSgodGFnKSA9PiB0YWcudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnRvb2xiYXIuc2VhcmNoVGVybSkpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmZvckVhY2goKG5vdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIG5ldyBOb3RlKG5vdGUsIG5vdGUucGlubmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBub3Rlc0VsUFxyXG4gICAgICAgICAgICAgICAgICAgIDogbm90ZXNFbCwgdGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5yZW5kZXJUb29sYmFyVGFncygpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXBwTm90aWZpY2F0aW9ucyB9IGZyb20gXCIuL25vdGlmaWNhdGlvblNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSU5vdGUgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcclxuXHJcbmludGVyZmFjZSBJQXBwU3RvcmFnZSB7XHJcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2U6IChuZXdOb3RlOiBJTm90ZSkgPT4gUHJvbWlzZTxJTm90ZVtdPixcclxuICAgIHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2U6IChpZDogSU5vdGVbJ2lkJ10pID0+IFByb21pc2U8SU5vdGVbXT4sXHJcbiAgICBnZXRGcm9tTG9jYWxTdG9yYWdlOiAoKSA9PiBQcm9taXNlPElOb3RlW10+LFxyXG4gICAgZ2V0QWxsVGFnc0Zyb21TdG9yYWdlOiAoKSA9PiBQcm9taXNlPHN0cmluZ1tdPixcclxufVxyXG5cclxuLy8gU2luZ2xldG9uIGFwcCBzdG9yYWdlXHJcbmV4cG9ydCBjbGFzcyBBcHBMb2NhbFN0b3JhZ2UgaW1wbGVtZW50cyBJQXBwU3RvcmFnZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogSUFwcFN0b3JhZ2U7XHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBJQXBwU3RvcmFnZSB7XHJcbiAgICAgICAgaWYgKCFBcHBMb2NhbFN0b3JhZ2UuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgQXBwTG9jYWxTdG9yYWdlLmluc3RhbmNlID0gbmV3IEFwcExvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIEFwcExvY2FsU3RvcmFnZS5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzYXZlVG9Mb2NhbFN0b3JhZ2UobmV3Tm90ZTogSU5vdGUpIHtcclxuICAgICAgICBjb25zdCBub3RlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0NXMDRfTm90ZXMnKSkgYXMgSU5vdGVbXSA/PyBbXTtcclxuICAgICAgICBjb25zdCBleGlzdGluZ0luZGV4ID0gbm90ZXMuZmluZEluZGV4KHYgPT4gdi5pZCA9PT0gbmV3Tm90ZS5pZCk7XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nSW5kZXggIT09IC0xKSBub3Rlc1tleGlzdGluZ0luZGV4XSA9IG5ld05vdGU7XHJcbiAgICAgICAgZWxzZSBub3Rlcy5wdXNoKG5ld05vdGUpO1xyXG5cclxuICAgICAgICBpZiAobmV3Tm90ZS5ub3RpZmljYXRpb24pXHJcbiAgICAgICAgICAgIEFwcE5vdGlmaWNhdGlvbnMuZ2V0SW5zdGFuY2UoKS5hZGROb3RpZmljYXRpb24obmV3Tm90ZSk7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdDVzA0X05vdGVzJywgSlNPTi5zdHJpbmdpZnkobm90ZXMpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub3Rlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShpZDogSU5vdGVbJ2lkJ10pIHtcclxuICAgICAgICBjb25zdCBub3RlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0NXMDRfTm90ZXMnKSkgYXMgSU5vdGVbXTtcclxuICAgICAgICBub3Rlcy5zcGxpY2Uobm90ZXMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBpZCksIDEpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdDVzA0X05vdGVzJywgSlNPTi5zdHJpbmdpZnkobm90ZXMpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub3Rlcyk7XHJcbiAgICAgICAgcmV0dXJuIG5vdGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdDVzA0X05vdGVzJykpIGFzIElOb3RlW10gPz8gW107XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobm90ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEFsbFRhZ3NGcm9tU3RvcmFnZSgpIHtcclxuICAgICAgICBjb25zdCBub3RlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0NXMDRfTm90ZXMnKSkgYXMgSU5vdGVbXSA/PyBbXTtcclxuICAgICAgICBjb25zdCB0YWdzID0gbm90ZXMuZmxhdE1hcCgodikgPT4gdi50YWdzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbLi4uIG5ldyBTZXQodGFncyldKTtcclxuICAgIH1cclxufSIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuaW1wb3J0IHsgQXBwTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9hcHBTdG9yYWdlJztcbmltcG9ydCB7IElOb3RlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVUkgfSBmcm9tICcuL1VJJztcblxuZXhwb3J0IGNsYXNzIE1haW4ge1xuICAgIFVJOiBVSTtcbiAgICBub3RlczogSU5vdGVbXTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5VSSA9IG5ldyBVSSgpO1xuICAgICAgICB0aGlzLlVJLnJlbmRlck5vdGVzKCk7XG4gICAgfVxuXG59XG5cblxubmV3IE1haW4oKTsiLCJpbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGVDb2xvcnMgPSBbXCIjMjYyNjI2XCIsIFwiIzY2MjQyNFwiLCBcIiM3YjRmMDBcIiwgXCIjMDA3YjNkXCIsIFwiIzAwNGU3YlwiLCBcIiMzMTA5NGZcIl07XHJcblxyXG5leHBvcnQgY2xhc3MgSU5vdGVHZW4ge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmcgPSAnJztcclxuICAgIGNvbnRlbnQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcGlubmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjb2xvcjogc3RyaW5nID0gXCIjMjYyNjI2XCI7XHJcbiAgICBub3RpZmljYXRpb246IG51bWJlcjtcclxuICAgIHRhZ3M6IHN0cmluZ1tdID0gWyd0b2RheScsICd3b3JrJ107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJTm90ZSBleHRlbmRzIElOb3RlR2VuIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBkYXRlOiBudW1iZXIgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IElOb3RlR2VuID0gbnVsbCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGRhdGE/LmlkID8/IHY0KCk7XHJcbiAgICAgICAgLy8gVE9ETyBkbyB0aGlzIGJldHRlciA6Q1xyXG4gICAgICAgIGlmIChkYXRhICYmIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gZGF0YS5jb250ZW50O1xyXG4gICAgICAgICAgICB0aGlzLnBpbm5lZCA9IGRhdGEucGlubmVkO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gZGF0YS5jb2xvcjtcclxuICAgICAgICAgICAgdGhpcy50YWdzID0gZGF0YS50YWdzO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbiA9IGRhdGEubm90aWZpY2F0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgSU5vdGUsIE5vdGVDb2xvcnMgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2FwcFN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vVUknO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsIHtcclxuICAgIGNsb3NlQnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIHNhdmVCdG46IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgYWRkVGFnQnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIG5vdGlmQnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIG1vZGFsRWw6IEhUTUxFbGVtZW50O1xyXG4gICAgbm90ZUZvcm06IElOb3RlO1xyXG4gICAgVUk6IFVJO1xyXG4gICAgaXNOb3RpZmljYXRpb246IGJvb2xlYW47XHJcbiAgICBmb3JtRWxlbWVudHM6IHtcclxuICAgICAgICB0aXRsZTogSFRNTElucHV0RWxlbWVudCxcclxuICAgICAgICBjb250ZW50OiBIVE1MVGV4dEFyZWFFbGVtZW50LFxyXG4gICAgICAgIHBpbm5lZDogSFRNTElucHV0RWxlbWVudCxcclxuICAgICAgICBjb2xvcjogSFRNTERpdkVsZW1lbnQsXHJcbiAgICAgICAgbmV3VGFnOiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgICAgIG5vdGlmRGF0ZTogSFRNTElucHV0RWxlbWVudCxcclxuICAgICAgICBub3RpZlRpbWU6IEhUTUxJbnB1dEVsZW1lbnRcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3Iobm90ZTogSU5vdGUgPSBudWxsLCBVSUluc3RhbmNlOiBVSSkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtbW9kYWwtYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zYXZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtbW9kYWwtYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5hZGRUYWdCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhZycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgIHRoaXMubm90aWZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90aWYtYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5tb2RhbEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XHJcbiAgICAgICAgdGhpcy5VSSA9IFVJSW5zdGFuY2U7XHJcbiAgICAgICAgdGhpcy5mb3JtRWxlbWVudHMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLm1vZGFsRWwucXVlcnlTZWxlY3RvcignI25vdGUtdGl0bGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLm1vZGFsRWwucXVlcnlTZWxlY3RvcignI25vdGUtY29udGVudCcpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQsXHJcbiAgICAgICAgICAgIHBpbm5lZDogdGhpcy5tb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJyNub3RlLXBpbm5lZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLm1vZGFsRWwucXVlcnlTZWxlY3RvcignI2NvbG9yLXBpY2tlcicpIGFzIEhUTUxEaXZFbGVtZW50LFxyXG4gICAgICAgICAgICBuZXdUYWc6IHRoaXMubW9kYWxFbC5xdWVyeVNlbGVjdG9yKCcjbm90ZS1uZXdUYWcnKSBhcyBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgICAgICAgICBub3RpZkRhdGU6IHRoaXMubW9kYWxFbC5xdWVyeVNlbGVjdG9yKCcjbm90ZS1ub3RpZi1kYXRlJykgYXMgSFRNTElucHV0RWxlbWVudCxcclxuICAgICAgICAgICAgbm90aWZUaW1lOiB0aGlzLm1vZGFsRWwucXVlcnlTZWxlY3RvcignI25vdGUtbm90aWYtdGltZScpIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub3RlRm9ybSA9IG5vdGUgPT09IG51bGwgPyBuZXcgSU5vdGUoKSA6IG5vdGU7XHJcbiAgICAgICAgdGhpcy5pc05vdGlmaWNhdGlvbiA9IHRoaXMubm90ZUZvcm0ubm90aWZpY2F0aW9uID4gRGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLmNoYW5nZU5vdGlmUGFuZWxWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsID0gdGhpcy5jbG9zZU1vZGFsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zYXZlTW9kYWwgPSB0aGlzLnNhdmVNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkVGFnID0gdGhpcy5hZGRUYWcuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnR1cm5Pbk5vdGlmID0gdGhpcy50dXJuT25Ob3RpZi5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnNhdmVCdG4uZGlzYWJsZWQgPSAhdGhpcy5ub3RlRm9ybS50aXRsZTtcclxuICAgICAgICB0aGlzLmNoZWNrVmFsaWRhdGlvbiA9IHRoaXMuY2hlY2tWYWxpZGF0aW9uLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVmFsaWRhdGlvbihlOiBJbnB1dEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zYXZlQnRuLmRpc2FibGVkID0gIShlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWxpZGl0eS52YWxpZDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1vZGFsKTtcclxuICAgICAgICB0aGlzLnNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNhdmVNb2RhbCk7XHJcbiAgICAgICAgdGhpcy5hZGRUYWdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZFRhZyk7XHJcbiAgICAgICAgdGhpcy5ub3RpZkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudHVybk9uTm90aWYpO1xyXG4gICAgICAgIHRoaXMuZm9ybUVsZW1lbnRzLnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5jaGVja1ZhbGlkYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVNb2RhbChlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IG5ld05vdGUgPSBuZXcgSU5vdGUoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5ub3RlRm9ybS5pZCA/PyBudWxsLFxyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy5mb3JtRWxlbWVudHMudGl0bGUudmFsdWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuZm9ybUVsZW1lbnRzLmNvbnRlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIHBpbm5lZDogdGhpcy5mb3JtRWxlbWVudHMucGlubmVkLmNoZWNrZWQsXHJcbiAgICAgICAgICAgIGNvbG9yOiAodGhpcy5mb3JtRWxlbWVudHMuY29sb3IucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICAgICAgdGFnczogdGhpcy5ub3RlRm9ybS50YWdzLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb246IHRoaXMuaXNOb3RpZmljYXRpb24gPyB0aGlzLmZvcm1hdERhdGUoKSA6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgICAgICBBcHBMb2NhbFN0b3JhZ2UuZ2V0SW5zdGFuY2UoKS5zYXZlVG9Mb2NhbFN0b3JhZ2UobmV3Tm90ZSkudGhlbigoKSA9PiB0aGlzLlVJLnJlbmRlck5vdGVzKCkpO1xyXG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbChlKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1vZGFsKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZUJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNb2RhbCk7XHJcbiAgICAgICAgdGhpcy5zYXZlQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zYXZlTW9kYWwpO1xyXG4gICAgICAgIHRoaXMuYWRkVGFnQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRUYWcpO1xyXG4gICAgICAgIHRoaXMubW9kYWxFbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tdmlzaWJsZScpO1xyXG4gICAgICAgIHRoaXMuZm9ybUVsZW1lbnRzLmNvbG9yLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHR1cm5Pbk5vdGlmKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5pc05vdGlmaWNhdGlvbiA9ICF0aGlzLmlzTm90aWZpY2F0aW9uO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlTm90aWZQYW5lbFZpc2liaWxpdHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VOb3RpZlBhbmVsVmlzaWJpbGl0eSgpIHtcclxuICAgICAgICBjb25zdCBub3RpZkNvbnRlbnRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb24tY29udGVudCcpO1xyXG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNOb3RpZmljYXRpb24pIHtcclxuICAgICAgICAgICAgbm90aWZDb250ZW50RWwuY2xhc3NMaXN0LmFkZCgnbm90aWZpY2F0aW9uLWNvbnRlbnQtLXZpc2libGUnKTtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZkJ0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1zbWFsbC1idG4tLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50cy5ub3RpZkRhdGUubWluID0gbm93LnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdGlmQ29udGVudEVsLmNsYXNzTGlzdC5yZW1vdmUoJ25vdGlmaWNhdGlvbi1jb250ZW50LS12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtc21hbGwtYnRuLS1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0RGF0ZSgpIHtcclxuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZShgJHt0aGlzLmZvcm1FbGVtZW50cy5ub3RpZkRhdGUudmFsdWV9ICR7dGhpcy5mb3JtRWxlbWVudHMubm90aWZUaW1lLnZhbHVlfWApLmdldFRpbWUoKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGltZXN0YW1wO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhZyhlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IG5ld1RhZyA9IHRoaXMuZm9ybUVsZW1lbnRzLm5ld1RhZy52YWx1ZTtcclxuICAgICAgICB0aGlzLmZvcm1FbGVtZW50cy5uZXdUYWcudmFsdWUgPSAnJztcclxuICAgICAgICBpZiAodGhpcy5ub3RlRm9ybS50YWdzLmluZGV4T2YobmV3VGFnKSA9PT0gLTEpIHRoaXMubm90ZUZvcm0udGFncy5wdXNoKG5ld1RhZyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVUYWdMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVEYXRhbGlzdE9wdGlvbnNMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ29sb3JQaWNrZXIoKSB7XHJcbiAgICAgICAgTm90ZUNvbG9ycy5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NOYW1lID0gXCJjb2xvci1yYWRpb1wiO1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgc3R5bGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHY7XHJcbiAgICAgICAgICAgIHN0eWxlci5jbGFzc05hbWUgPSBcInN0eWxlclwiO1xyXG4gICAgICAgICAgICBpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xyXG4gICAgICAgICAgICBpbnB1dC5uYW1lID0gXCJub3RlLWNvbG9yXCI7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdjtcclxuICAgICAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChzdHlsZXIpO1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUgPT09IHRoaXMubm90ZUZvcm0uY29sb3IpXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybUVsZW1lbnRzLmNvbG9yLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUYWdMaXN0KCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXRhZ3NcIik7XHJcbiAgICAgICAgcGFyZW50RWwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5ub3RlRm9ybS50YWdzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFnQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHRhZ0J0bi5jbGFzc05hbWUgPSBcInRhZ1wiO1xyXG4gICAgICAgICAgICB0YWdCdG4uaW5uZXJUZXh0ID0gdjtcclxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICByZW1vdmVJY29uLnNyYyA9ICcuL2Fzc2V0cy9yZW1vdmUuc3ZnJztcclxuICAgICAgICAgICAgdGFnQnRuLmFwcGVuZENoaWxkKHJlbW92ZUljb24pO1xyXG4gICAgICAgICAgICB0YWdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RlRm9ybS50YWdzID0gdGhpcy5ub3RlRm9ybS50YWdzLmZpbHRlcih0YWcgPT4gdGFnICE9PSB2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVGFnTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVEYXRhbGlzdE9wdGlvbnNMaXN0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKHRhZ0J0bik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY3JlYXRlRGF0YWxpc3RPcHRpb25zTGlzdCgpIHtcclxuICAgICAgICBjb25zdCBjb21ib0JveERMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlLXRhZ3NcIik7XHJcbiAgICAgICAgY29tYm9Cb3hETC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgY29uc3QgdGFncyA9IGF3YWl0IEFwcExvY2FsU3RvcmFnZS5nZXRJbnN0YW5jZSgpLmdldEFsbFRhZ3NGcm9tU3RvcmFnZSgpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkVGFncyA9IHRhZ3MuZmlsdGVyKCh2KSA9PiAhdGhpcy5ub3RlRm9ybS50YWdzLmluY2x1ZGVzKHYpKTtcclxuICAgICAgICBmaWx0ZXJlZFRhZ3MuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gdjtcclxuICAgICAgICAgICAgY29tYm9Cb3hETC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcG9wdWxhdGVGb3JtKCkge1xyXG4gICAgICAgIHRoaXMuZm9ybUVsZW1lbnRzLnRpdGxlLnZhbHVlID0gdGhpcy5ub3RlRm9ybS50aXRsZTtcclxuICAgICAgICB0aGlzLmZvcm1FbGVtZW50cy5jb250ZW50LnZhbHVlID0gdGhpcy5ub3RlRm9ybS5jb250ZW50O1xyXG4gICAgICAgIHRoaXMuZm9ybUVsZW1lbnRzLnBpbm5lZC5jaGVja2VkID0gdGhpcy5ub3RlRm9ybS5waW5uZWQ7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb2xvclBpY2tlcigpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVGFnTGlzdCgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRGF0YWxpc3RPcHRpb25zTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLm1vZGFsRWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtLXZpc2libGUnKTtcclxuICAgICAgICB0aGlzLnBvcHVsYXRlRm9ybSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXBwTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9hcHBTdG9yYWdlJztcclxuaW1wb3J0IHsgQXBwTm90aWZpY2F0aW9ucyB9IGZyb20gJy4vbm90aWZpY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IElOb3RlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vVUknO1xyXG5pbXBvcnQgeyBnZXREYXkgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RlIHtcclxuICAgIFVJOiBVSTtcclxuICAgIGNvbnN0cnVjdG9yKG5vdGU6IElOb3RlLCBwYXJlbnQ6IEhUTUxFbGVtZW50LCBVSUluc3RhbmNlOiBVSSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyKG5vdGUsIHBhcmVudClcclxuICAgICAgICB0aGlzLlVJID0gVUlJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVOb3RlRWxlbWVudChub3RlOiBJTm90ZSkge1xyXG4gICAgICAgIGNvbnN0IG5vdGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5vdGVFbC5jbGFzc05hbWUgPSAnbm90ZSc7XHJcbiAgICAgICAgbm90ZUVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG5vdGUuY29sb3I7XHJcbiAgICAgICAgbm90ZUVsLmlkID0gYG5vdGVFbF8ke25vdGUuaWR9YDtcclxuICAgICAgICBub3RlRWwudGFiSW5kZXggPSAwO1xyXG4gICAgICAgIG5vdGVFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBNb2RhbChub3RlLCB0aGlzLlVJKTtcclxuICAgICAgICAgICAgLy8gQXBwTm90aWZpY2F0aW9ucy5nZXRJbnN0YW5jZSgpLmFkZE5vdGlmaWNhdGlvbihub3RlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBub3RlRWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnRW50ZXInIHx8IGUuY29kZSA9PT0gJ1NwYWNlJykge1xyXG4gICAgICAgICAgICAgICAgbmV3IE1vZGFsKG5vdGUsIHRoaXMuVUkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBub3RlRWw7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUGluQnRuKG5vdGU6IElOb3RlKSB7XHJcbiAgICAgICAgY29uc3Qgbm90ZUVsUGluQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbm90ZUVsUGluQnRuLmNsYXNzTmFtZSA9ICdub3RlLXBpbic7XHJcbiAgICAgICAgY29uc3Qgbm90ZUVsUGluQnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIG5vdGVFbFBpbkJ0bkljb24uc3JjID0gbm90ZS5waW5uZWQgPyAnLi9hc3NldHMvcGluLWZpbGxlZC5zdmcnIDogJy4vYXNzZXRzL3Bpbi5zdmcnO1xyXG4gICAgICAgIG5vdGVFbFBpbkJ0bi5hcHBlbmRDaGlsZChub3RlRWxQaW5CdG5JY29uKTtcclxuICAgICAgICAvLyAtLS0tLS0tXHJcbiAgICAgICAgbm90ZUVsUGluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgbm90ZS5waW5uZWQgPSAhbm90ZS5waW5uZWQ7XHJcbiAgICAgICAgICAgIEFwcExvY2FsU3RvcmFnZS5nZXRJbnN0YW5jZSgpLnNhdmVUb0xvY2FsU3RvcmFnZShub3RlKS50aGVuKCgpID0+IHRoaXMuVUkucmVuZGVyTm90ZXMoKSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIG5vdGVFbFBpbkJ0bjtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVSZW1vdmVCdG4obm90ZTogSU5vdGUpIHtcclxuICAgICAgICBjb25zdCBub3RlRWxSZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBub3RlRWxSZW1vdmVCdG4uY2xhc3NOYW1lID0gJ25vdGUtcmVtb3ZlJztcclxuICAgICAgICBjb25zdCBub3RlRWxSZW1vdmVCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgbm90ZUVsUmVtb3ZlQnRuSWNvbi5zcmMgPSAnLi9hc3NldHMvcmVtb3ZlLnN2Zyc7XHJcbiAgICAgICAgbm90ZUVsUmVtb3ZlQnRuLmFwcGVuZENoaWxkKG5vdGVFbFJlbW92ZUJ0bkljb24pO1xyXG4gICAgICAgIC8vIC0tLS0tLS1cclxuICAgICAgICBub3RlRWxSZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBBcHBMb2NhbFN0b3JhZ2UuZ2V0SW5zdGFuY2UoKS5yZW1vdmVGcm9tTG9jYWxTdG9yYWdlKG5vdGUuaWQpLnRoZW4oKCkgPT4gdGhpcy5VSS5yZW5kZXJOb3RlcygpKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gbm90ZUVsUmVtb3ZlQnRuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihub3RlOiBJTm90ZSwgcGFyZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IG5vdGVFbCA9IHRoaXMuY3JlYXRlTm90ZUVsZW1lbnQobm90ZSk7XHJcbiAgICAgICAgLy8gdGl0bGVcclxuICAgICAgICBjb25zdCBub3RlRWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBub3RlRWxUaXRsZS5jbGFzc05hbWUgPSAnbm90ZS10aXRsZSc7XHJcbiAgICAgICAgbm90ZUVsVGl0bGUuaW5uZXJUZXh0ID0gbm90ZS50aXRsZTtcclxuICAgICAgICAvLyBjb250ZW50IFxyXG4gICAgICAgIGNvbnN0IG5vdGVFbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbm90ZUVsQ29udGVudC5jbGFzc05hbWUgPSAnbm90ZS1jb250ZW50JztcclxuICAgICAgICBub3RlRWxDb250ZW50LmlubmVyVGV4dCA9IG5vdGUuY29udGVudDtcclxuICAgICAgICAvLyBwaW4gYnV0dG9uXHJcbiAgICAgICAgY29uc3Qgbm90ZUVsUGluQnRuID0gdGhpcy5jcmVhdGVQaW5CdG4obm90ZSk7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGJ0blxyXG4gICAgICAgIGNvbnN0IG5vdGVFbFJlbW92ZUJ0biA9IHRoaXMuY3JlYXRlUmVtb3ZlQnRuKG5vdGUpO1xyXG4gICAgICAgIC8vIHRhZ3MgXHJcbiAgICAgICAgY29uc3Qgbm90ZVRhZ3NFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgbm90ZVRhZ3NFbC5jbGFzc05hbWUgPSBcIm5vdGUtdGFnc1wiO1xyXG4gICAgICAgIG5vdGUudGFncy5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIHRhZy5pbm5lclRleHQgPSB2O1xyXG4gICAgICAgICAgICBub3RlVGFnc0VsLmFwcGVuZENoaWxkKHRhZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gZGF0ZVxyXG4gICAgICAgIGNvbnN0IG5vdGVEYXRlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aW1lJyk7XHJcbiAgICAgICAgbm90ZURhdGVFbC5pbm5lclRleHQgPSBnZXREYXkobm90ZS5kYXRlKTtcclxuICAgICAgICAvLyBub3RpZmljYXRpb24gdGltZVxyXG4gICAgICAgIGNvbnN0IG5vdGVOb3RpZkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIG5vdGVOb3RpZkVsLmNsYXNzTmFtZSA9IFwibm90ZS1ub3RpZlwiO1xyXG4gICAgICAgIGlmIChub3RlLm5vdGlmaWNhdGlvbiAmJiBub3RlLm5vdGlmaWNhdGlvbiA+IERhdGUubm93KCkpIHtcclxuICAgICAgICAgICAgbm90ZU5vdGlmRWwuaW5uZXJUZXh0ID0gYE5vdGlmaWNhdGlvbiBvbiAke2dldERheShub3RlLm5vdGlmaWNhdGlvbil9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFwcGVuZGluZ1xyXG4gICAgICAgIG5vdGVFbC5hcHBlbmQobm90ZUVsVGl0bGUsIG5vdGVFbENvbnRlbnQsIG5vdGVFbFBpbkJ0biwgbm90ZU5vdGlmRWwsIG5vdGVUYWdzRWwsIG5vdGVEYXRlRWwsIG5vdGVFbFJlbW92ZUJ0bik7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vdGVFbCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJTm90ZSB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xyXG5cclxuaW50ZXJmYWNlIElBcHBOb3RpZmljYXRpb25zIHtcclxuICAgIGFkZE5vdGlmaWNhdGlvbjogKG5ld05vdGU6IElOb3RlKSA9PiB2b2lkLFxyXG4gICAgY2hlY2tQZXJtaXNzaW9uczogKCkgPT4gUHJvbWlzZTxCb29sZWFuPlxyXG59XHJcblxyXG4vLyBTaW5nbGV0b24gYXBwIG5vdGlmaWNhdGlvbnNcclxuZXhwb3J0IGNsYXNzIEFwcE5vdGlmaWNhdGlvbnMgaW1wbGVtZW50cyBJQXBwTm90aWZpY2F0aW9ucyB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogSUFwcE5vdGlmaWNhdGlvbnM7XHJcbiAgICBwZW5kaW5nTm90aWZpY2F0aW9uczoge1xyXG4gICAgICAgIGlkOiBOb2RlSlMuVGltZW91dCxcclxuICAgICAgICBub3RlSWQ6IHN0cmluZ1xyXG4gICAgfVtdID0gW107XHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBJQXBwTm90aWZpY2F0aW9ucyB7XHJcbiAgICAgICAgaWYgKCFBcHBOb3RpZmljYXRpb25zLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIEFwcE5vdGlmaWNhdGlvbnMuaW5zdGFuY2UgPSBuZXcgQXBwTm90aWZpY2F0aW9ucygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIEFwcE5vdGlmaWNhdGlvbnMuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY2hlY2tQZXJtaXNzaW9ucygpOiBQcm9taXNlPEJvb2xlYW4+IHtcclxuICAgICAgICBpZiAoISgnTm90aWZpY2F0aW9uJyBpbiB3aW5kb3cpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBub3RpZmljYXRpb25zLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gXCJncmFudGVkXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwgPT09ICdncmFudGVkJztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhc3luYyBhZGROb3RpZmljYXRpb24obm90ZTogSU5vdGUpIHtcclxuICAgICAgICB0aGlzLmNoZWNrUGVybWlzc2lvbnMoKS50aGVuKChncmFudGVkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChncmFudGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lb3V0ID0gbm90ZS5ub3RpZmljYXRpb24gLSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2FuY2VsIGlmIGFscmVhZHkgZXhpc3RzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ0luZGV4ID0gdGhpcy5wZW5kaW5nTm90aWZpY2F0aW9ucy5maW5kSW5kZXgoKHYpID0+IHYubm90ZUlkID09PSBub3RlLmlkKTtcclxuICAgICAgICAgICAgICAgIGlmKGV4aXN0aW5nSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBlbmRpbmdOb3RpZmljYXRpb25zW2V4aXN0aW5nSW5kZXhdLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdOb3RpZmljYXRpb25zLnNwbGljZShleGlzdGluZ0luZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGVuZGluZ05vdGlmaWNhdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgLy8gb2ZjIG9ubHkgZnJvbnQtZW5kIGFuZCBhcHAgbGlmZSB0aW1lIGltcGxlbWVudGF0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3RpZlRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWZpY2F0aW9uKG5vdGUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgfSwgdGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdOb3RpZmljYXRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBub3RpZlRpbWVvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZUlkOiBub3RlLmlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IHsgQXBwTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9hcHBTdG9yYWdlJztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuL1VJJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFyIHtcclxuICAgIGFjdGl2ZVRhZzogc3RyaW5nO1xyXG4gICAgc2VhcmNoVGVybTogc3RyaW5nO1xyXG4gICAgVUk6IFVJO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihVSUluc3RhbmNlOiBVSSkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVGFnID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNlYXJjaFRlcm0gPSAnJztcclxuICAgICAgICB0aGlzLlVJID0gVUlJbnN0YW5jZTtcclxuICAgICAgICB0aGlzLmJpbmRTZWFyY2hFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kU2VhcmNoRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7IFxyXG4gICAgICAgIHNlYXJjaEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXJtID0gdGFyZ2V0LnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB0aGlzLlVJLnJlbmRlck5vdGVzKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlYXJjaEJ0bkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1jbGVhcicpIGFzIEhUTUxCdXR0b25FbGVtZW50OyBcclxuICAgICAgICBzZWFyY2hCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHNlYXJjaEVsLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoVGVybSA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLlVJLnJlbmRlck5vdGVzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcmVuZGVyVG9vbGJhclRhZ3MoKSB7XHJcbiAgICAgICAgY29uc3QgdGFncyA9IGF3YWl0IEFwcExvY2FsU3RvcmFnZS5nZXRJbnN0YW5jZSgpLmdldEFsbFRhZ3NGcm9tU3RvcmFnZSgpO1xyXG4gICAgICAgIGNvbnN0IHBhcmVudEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rvb2xiYXJUYWdzJyk7XHJcbiAgICAgICAgcGFyZW50RWwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgLy8gcmVuZGVyIGBBbGxgIGJ0blxyXG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0bi5jbGFzc05hbWUgPSBgdG9vbGJhci1idXR0b24gJHt0aGlzLmFjdGl2ZVRhZyA9PT0gbnVsbCAmJiAndG9vbGJhci1idXR0b24tLWFjdGl2ZSd9YDtcclxuICAgICAgICBidG4uaW5uZXJUZXh0ID0gJ0FsbCc7XHJcbiAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHJcbiAgICAgICAgdGFncy5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBidG4uY2xhc3NOYW1lID0gYHRvb2xiYXItYnV0dG9uICR7dGhpcy5hY3RpdmVUYWcgPT09IHYgJiYgJ3Rvb2xiYXItYnV0dG9uLS1hY3RpdmUnfWA7XHJcbiAgICAgICAgICAgIGJ0bi5pbm5lclRleHQgPSB2O1xyXG4gICAgICAgICAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBBcnJheS5mcm9tKHBhcmVudEVsLmNoaWxkcmVuKS5mb3JFYWNoKCh2OiBIVE1MQnV0dG9uRWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICB2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zZXRBY3RpdmVUYWcuYmluZCh0aGlzLCB2LCBpKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3RpdmVUYWcoZWw6IEhUTUxCdXR0b25FbGVtZW50LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gZHVtbXkgd2F5IHRvIGdldCBgQWxsYCBidG5cclxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHRoaXMuYWN0aXZlVGFnID0gbnVsbDtcclxuICAgICAgICBlbHNlIHRoaXMuYWN0aXZlVGFnID0gZWwuaW5uZXJUZXh0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuVUkucmVuZGVyTm90ZXMoKTtcclxuICAgIH1cclxufVxyXG4iLCJmdW5jdGlvbiBnZXREYXkoZHQ6IG51bWJlciwgdGltZXpvbmVPZmZzZXQ6IG51bWJlciA9IDApOiBzdHJpbmcge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKChkdCArIHRpbWV6b25lT2Zmc2V0KSk7XHJcbiAgICBjb25zdCBzdHJpbmdEYXRlID0gZGF0ZS50b0xvY2FsZVN0cmluZygpO1xyXG4gICAgcmV0dXJuIHN0cmluZ0RhdGU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgZ2V0RGF5XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==