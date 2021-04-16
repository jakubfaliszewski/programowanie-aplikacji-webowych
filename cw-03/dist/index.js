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
exports.push([module.i, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\nhtml body {\n  background: linear-gradient(to bottom, #56ccf2, #2f80ed);\n  font-family: sans-serif;\n  display: flex;\n  justify-content: flex-end;\n  font-family: \"Roboto\", sans-serif; }\n\n.bg-video {\n  position: absolute;\n  top: -10%;\n  left: -10%;\n  width: 120%;\n  height: 120%;\n  object-fit: cover;\n  z-index: -1;\n  filter: blur(15px); }\n\nmain {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: flex-start;\n  box-sizing: border-box;\n  padding: 40px; }\n  main .current {\n    width: 100%;\n    padding: 16px;\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 10px; }\n  main .main {\n    width: 100%;\n    display: flex;\n    align-items: flex-start;\n    color: white;\n    flex-direction: column; }\n    main .main-icon {\n      position: absolute;\n      width: 320px;\n      filter: blur(3px);\n      z-index: -1;\n      top: 0;\n      left: 0;\n      opacity: 0.5; }\n    main .main-temp > div {\n      display: flex;\n      gap: 24px; }\n      main .main-temp > div .main-temp-time {\n        font-size: 18px; }\n      main .main-temp > div .main-temp-label {\n        font-size: 12px;\n        margin-top: 14px;\n        display: block; }\n    main .main-temp-current {\n      font-size: 130px;\n      letter-spacing: -12px; }\n    main .main-info {\n      display: flex;\n      gap: 40px;\n      align-items: flex-end; }\n      main .main-info-city {\n        font-size: 60px;\n        margin-left: 30px; }\n      main .main-info-weather {\n        font-size: 20px;\n        margin-bottom: 6px; }\n    main .main-wind {\n      display: flex;\n      align-items: center;\n      position: relative; }\n      main .main-wind img {\n        width: 16px;\n        margin-left: 10px;\n        top: 0;\n        right: -24px; }\n      main .main-wind span {\n        font-size: 18px; }\n  main .forecast {\n    margin-top: 40px;\n    display: flex;\n    gap: 10px; }\n    main .forecast-item {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      border-radius: 8px;\n      background: rgba(0, 0, 0, 0.1);\n      padding: 10px; }\n\naside {\n  flex-shrink: 0;\n  width: 400px;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 20px;\n  color: rgba(255, 255, 255, 0.7);\n  margin: 10px;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column; }\n\n.toast {\n  position: absolute;\n  top: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #d83232;\n  color: #ffffff;\n  border-radius: 4px;\n  padding: 5px 30px;\n  opacity: 0; }\n  .toast p {\n    margin: 0; }\n  .toast.visible {\n    animation: showToast 2.5s forwards; }\n\n.inputWrapper {\n  width: 100%;\n  display: flex;\n  gap: 16px; }\n  .inputWrapper .input {\n    border: 0;\n    padding: 4px 8px;\n    background: transparent;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n    width: 100%;\n    color: white; }\n    .inputWrapper .input::placeholder {\n      color: rgba(255, 255, 255, 0.8); }\n  .inputWrapper .button {\n    border: 0;\n    padding: 4px 8px;\n    border-radius: 15px;\n    background: rgba(255, 255, 255, 0.1);\n    position: relative;\n    width: 30px;\n    height: 30px;\n    padding: 0;\n    flex-shrink: 0; }\n    .inputWrapper .button:after, .inputWrapper .button:before {\n      content: \"\";\n      display: block;\n      background-color: white;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%); }\n    .inputWrapper .button:before {\n      height: 14px;\n      width: 2px; }\n    .inputWrapper .button:after {\n      height: 2px;\n      width: 14px; }\n    .inputWrapper .button:disabled {\n      background: none; }\n      .inputWrapper .button:disabled:after, .inputWrapper .button:disabled:before {\n        background: rgba(255, 255, 255, 0.5); }\n\n.city-list {\n  list-style: none;\n  margin-top: 20px;\n  overflow: auto;\n  height: 100%; }\n  .city-list > li {\n    display: flex;\n    align-items: center;\n    gap: 4px; }\n  .city-list-item {\n    padding: 10px 8px;\n    background: none;\n    border: 0;\n    width: 100%;\n    color: inherit;\n    text-align: left;\n    cursor: pointer;\n    border-radius: 5px;\n    transition: background-color 0.2s; }\n    .city-list-item:hover {\n      background-color: rgba(255, 255, 255, 0.1); }\n    .city-list-item:focus {\n      outline: 0;\n      box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.3); }\n    .city-list-item > div {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n      .city-list-item > div > div {\n        display: flex;\n        flex-direction: column;\n        gap: 5px; }\n        .city-list-item > div > div > p {\n          font-size: 2em; }\n    .city-list-item-removeBtn {\n      border: 0;\n      padding: 4px 8px;\n      border-radius: 15px;\n      position: relative;\n      width: 20px;\n      height: 20px;\n      padding: 0;\n      flex-shrink: 0;\n      cursor: pointer;\n      background: transparent;\n      transition: background 0.2s; }\n      .city-list-item-removeBtn:hover {\n        background-color: rgba(216, 50, 50, 0.8); }\n      .city-list-item-removeBtn:after, .city-list-item-removeBtn:before {\n        content: \"\";\n        display: block;\n        background-color: white;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%) rotate(45deg); }\n      .city-list-item-removeBtn:before {\n        height: 10px;\n        width: 2px; }\n      .city-list-item-removeBtn:after {\n        height: 2px;\n        width: 10px; }\n\n@keyframes showToast {\n  0% {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-100%); }\n  20% {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0); }\n  80% {\n    opacity: 1; }\n  99% {\n    opacity: 0;\n    display: block; }\n  100% {\n    display: none; } }\n", ""]);
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

/***/ "./src/UI.ts":
/*!*******************!*\
  !*** ./src/UI.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./style.scss */ "./src/style.scss");
const apiCaller_1 = __webpack_require__(/*! ./apiCaller */ "./src/apiCaller.ts");
const date_utils_1 = __webpack_require__(/*! ./date-utils */ "./src/date-utils.ts");
var LIST_ELEMTNS;
(function (LIST_ELEMTNS) {
    LIST_ELEMTNS["name"] = "name";
    LIST_ELEMTNS["temp"] = "temp";
    LIST_ELEMTNS["pressure"] = "press";
    LIST_ELEMTNS["icon"] = "icon";
})(LIST_ELEMTNS || (LIST_ELEMTNS = {}));
var WEATHER_TYPES;
(function (WEATHER_TYPES) {
    WEATHER_TYPES["thunderstorm"] = "2";
    WEATHER_TYPES["drizzle"] = "3";
    WEATHER_TYPES["rain"] = "5";
    WEATHER_TYPES["snow"] = "6";
    WEATHER_TYPES["atmosphere"] = "7";
    WEATHER_TYPES["clear"] = "8";
})(WEATHER_TYPES || (WEATHER_TYPES = {}));
class UI {
    constructor(main) {
        this.mainContext = main;
    }
    showApiError() {
        const toastEl = document.getElementById('errorToast');
        toastEl.classList.add('visible');
        toastEl.addEventListener("animationend", function handler(e) {
            toastEl.classList.remove('visible');
            e.currentTarget.removeEventListener(e.type, handler);
        });
    }
    renderMainView(forecastData, activeCity) {
        if (forecastData) {
            this.switchTheme(activeCity.weather[0].id);
            this.renderForecast(forecastData);
            document.getElementById('mainCity').innerHTML = activeCity.name;
            document.getElementById('mainWeather').innerHTML = activeCity.weather[0].description;
            document.getElementById('mainTime').innerHTML = date_utils_1.getDay(activeCity.dt, activeCity.timezone);
            const iconEl = document.getElementById("mainIcon");
            iconEl.src = `http://openweathermap.org/img/wn/${activeCity.weather[0].icon}@2x.png`;
            iconEl.alt = activeCity.weather[0].description;
            iconEl.title = activeCity.weather[0].description;
            document.getElementById('mainTemp').innerHTML = `${activeCity.main.temp.toFixed(1)}°C`;
            document.getElementById('mainTempFeels').innerHTML = `${activeCity.main.feels_like}°C`;
            document.getElementById('mainWindSpeed').innerHTML = `${activeCity.wind.speed}m/s`;
            document.getElementById('mainWindIcon').style.transform = `rotate(${activeCity.wind.deg}deg)`;
        }
    }
    renderForecast(forecastData) {
        const dailyData = forecastData.daily.slice(1);
        const wrapper = document.getElementById('forecast');
        wrapper.innerHTML = null;
        dailyData.forEach((data, index) => {
            const item = document.createElement('li');
            item.className = "forecast-item";
            const itemDate = document.createElement('p');
            itemDate.innerText = index === 0 ? 'tomorrow' : date_utils_1.getDay(data.dt, forecastData.timezone_offset);
            const itemIcon = document.createElement('img');
            itemIcon.innerText = date_utils_1.getDay(data.dt, forecastData.timezone_offset);
            itemIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            itemIcon.alt = data.weather[0].description;
            itemIcon.title = data.weather[0].description;
            const itemTemp = document.createElement('p');
            itemTemp.innerText = `${data.temp.min.toFixed(1)}°C / ${data.temp.max.toFixed(1)}°C`;
            item.appendChild(itemDate);
            item.appendChild(itemIcon);
            item.appendChild(itemTemp);
            wrapper.appendChild(item);
        });
    }
    switchTheme(weatherId) {
        const firstNumber = String(weatherId)[0];
        const video = document.getElementById('bgVideo');
        let videoSrc;
        switch (firstNumber) {
            case WEATHER_TYPES.thunderstorm:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/044/582/original/dark-forest.mp4';
                break;
            case WEATHER_TYPES.drizzle:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/044/767/original/P1140828.mp4';
                break;
            case WEATHER_TYPES.rain:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/049/047/original/panning-and-close-up-to-rain-drop-on-the-glass-of-window.mp4';
                break;
            case WEATHER_TYPES.snow:
                videoSrc = 'https://cdn.videvo.net/videvo_files/video/free/2015-09/small_watermarked/Slow_Snow_Seg_Comp_Flakes_preview.webm';
                break;
            case WEATHER_TYPES.atmosphere:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/034/069/original/Mountain-rain5.mp4';
                break;
            case WEATHER_TYPES.clear:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/039/466/original/58_28_08_19.mp4';
                break;
            default:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/039/466/original/58_28_08_19.mp4';
                break;
        }
        if (weatherId > 800)
            videoSrc = 'https://cdn.videvo.net/videvo_files/video/free/2020-07/small_watermarked/06_1596083776_preview.webm';
        video.src = videoSrc;
    }
    removeCity(id) {
        const allCities = JSON.parse(localStorage.getItem(apiCaller_1.DATA_KEY));
        if (allCities && id) {
            const filterdCities = allCities.filter((v) => v.id !== id);
            localStorage.setItem(apiCaller_1.DATA_KEY, JSON.stringify(filterdCities));
            this.renderWeatherList(filterdCities, true);
        }
    }
    populateListElement(element, weatherData) {
        const parentId = element.id;
        const iconEl = document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.icon}`);
        iconEl.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        iconEl.alt = weatherData.weather[0].description;
        iconEl.title = weatherData.weather[0].description;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.name}`).innerHTML = weatherData.name;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.pressure}`).innerHTML = `${weatherData.main.pressure} hPA`;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.temp}`).innerHTML = `${weatherData.main.temp.toFixed(1)}°C`;
        return element;
    }
    renderWeatherElement(weatherData, elementId) {
        const wrapper = document.getElementById('cityList');
        const element = document.createElement('li');
        element.id = elementId;
        const elementBtn = document.createElement('button');
        const elementBtnContainer = document.createElement('div');
        const elementBtnContainerChild = document.createElement('div');
        elementBtn.className = "city-list-item";
        const nameEl = document.createElement('p');
        nameEl.id = `${elementId}_${LIST_ELEMTNS.name}`;
        elementBtnContainerChild.appendChild(nameEl);
        const tempEl = document.createElement('span');
        tempEl.id = `${elementId}_${LIST_ELEMTNS.temp}`;
        elementBtnContainerChild.appendChild(tempEl);
        const pressEl = document.createElement('span');
        pressEl.id = `${elementId}_${LIST_ELEMTNS.pressure}`;
        elementBtnContainerChild.appendChild(pressEl);
        const iconEl = document.createElement('img');
        iconEl.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        iconEl.id = `${elementId}_${LIST_ELEMTNS.icon}`;
        const removeBtnEl = document.createElement('button');
        removeBtnEl.className = "city-list-item-removeBtn";
        removeBtnEl.addEventListener('click', (e) => this.removeCity(weatherData.id));
        elementBtn.addEventListener('click', () => {
            this.mainContext.changeActiveCity(weatherData.id);
        });
        elementBtnContainer.appendChild(elementBtnContainerChild);
        elementBtnContainer.appendChild(iconEl);
        elementBtn.appendChild(elementBtnContainer);
        element.appendChild(elementBtn);
        element.appendChild(removeBtnEl);
        wrapper.appendChild(element);
        this.populateListElement(element, weatherData);
    }
    renderWeatherList(weatherData, force = false) {
        if (force) {
            const wrapper = document.getElementById('cityList');
            wrapper.innerHTML = null;
        }
        weatherData.forEach((data) => {
            const elementId = `listEl_${data.id}`;
            const element = document.getElementById(elementId);
            if (element)
                this.populateListElement(element, data);
            else
                this.renderWeatherElement(data, elementId);
        });
    }
}
exports.UI = UI;


/***/ }),

/***/ "./src/apiCaller.ts":
/*!**************************!*\
  !*** ./src/apiCaller.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATA_KEY = "weather_data";
const API_KEY = "cbeeb4917456a9dc5bef570967628521";
class ApiCaller {
    constructor() {
        this.callData();
    }
    callData(city) {
        return __awaiter(this, void 0, void 0, function* () {
            if (city) {
                const weather = yield this.getWeatherData(city);
                if (weather && weather.cod === 200) {
                    this.saveData(weather);
                }
                return weather.cod;
            }
        });
    }
    refreshData() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const currentCities = ((_a = JSON.parse(localStorage.getItem(exports.DATA_KEY))) === null || _a === void 0 ? void 0 : _a.map(v => v.name)) || [];
            const newCities = Promise.all(currentCities.map((city) => __awaiter(this, void 0, void 0, function* () {
                const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
                const weatherResp = yield fetch(apiURL);
                const weatherData = yield weatherResp.json();
                this.saveData(weatherData);
                return weatherData;
            })));
            return newCities;
        });
    }
    getWeatherData(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
            const weatherResp = yield fetch(apiURL);
            const weatherData = yield weatherResp.json();
            return weatherData;
        });
    }
    getForecastData(lat, long) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=${API_KEY}&units=metric`;
            const forecastResp = yield fetch(apiURL);
            const forecastData = yield forecastResp.json();
            forecastData.daily = forecastData.daily.slice(0, 6);
            return forecastData;
        });
    }
    saveData(data) {
        const currentData = this.getData();
        const indexInLS = currentData.findIndex((val) => val.id === data.id);
        if (indexInLS !== -1) {
            currentData[indexInLS] = data;
            localStorage.setItem(exports.DATA_KEY, JSON.stringify(currentData));
            return;
        }
        localStorage.setItem(exports.DATA_KEY, JSON.stringify([...currentData, data]));
    }
    getData() {
        const data = localStorage.getItem(exports.DATA_KEY);
        if (data)
            return JSON.parse(data);
        return [];
    }
}
exports.ApiCaller = ApiCaller;


/***/ }),

/***/ "./src/date-utils.ts":
/*!***************************!*\
  !*** ./src/date-utils.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getDay(dt, timezoneOffset) {
    const date = new Date((dt + timezoneOffset) * 1000);
    const stringDate = date.toLocaleDateString();
    return stringDate;
}
exports.getDay = getDay;


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
const apiCaller_1 = __webpack_require__(/*! ./apiCaller */ "./src/apiCaller.ts");
const UI_1 = __webpack_require__(/*! ./UI */ "./src/UI.ts");
const ACTIVE_CITY_KEY = "active_city";
class Main {
    constructor() {
        this.activeCity = Number(localStorage.getItem(ACTIVE_CITY_KEY));
        this.apiCaller = new apiCaller_1.ApiCaller();
        this.UI = new UI_1.UI(this);
        this.weatherData = this.apiCaller.getData();
        this.setActiveCity();
        this.initRefresher();
        this.bindInputEvents();
        this.UI.renderWeatherList(this.weatherData);
    }
    initRefresher() {
        setInterval(() => {
            this.apiCaller.refreshData().then(currentData => {
                this.weatherData = currentData;
                this.UI.renderWeatherList(this.weatherData);
            });
            if (this.activeCity) {
                this.setActiveCity();
            }
        }, 60000);
    }
    bindInputEvents() {
        const weatherForm = document.getElementById('weatherForm');
        const cityButton = document.getElementById('cityButton');
        const cityInput = document.getElementById('cityInput');
        weatherForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.apiCaller.callData(cityInput.value).then((code) => {
                if (Number(code) !== 200) {
                    this.UI.showApiError();
                }
                this.weatherData = this.apiCaller.getData();
                this.UI.renderWeatherList(this.weatherData);
            });
            cityInput.value = '';
            cityButton.disabled = true;
        });
        cityInput.addEventListener('input', (event) => {
            if (event.target.value.length > 0)
                cityButton.disabled = false;
            else
                cityButton.disabled = true;
        });
    }
    setActiveCity() {
        const activeCity = this.weatherData.find(city => city.id === this.activeCity);
        if (activeCity) {
            this.apiCaller.getForecastData(activeCity.coord.lat, activeCity.coord.lon).then(activeForecast => {
                this.activeCityData = activeForecast;
                this.UI.renderMainView(this.activeCityData, activeCity);
            });
        }
    }
    changeActiveCity(index) {
        this.activeCity = index;
        localStorage.setItem(ACTIVE_CITY_KEY, String(index));
        this.setActiveCity();
    }
}
exports.Main = Main;
new Main();


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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VJLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlDYWxsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGUtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FB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LEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5RSxJQUFHLFVBQVUsRUFBRTtZQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUM3RixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUM1RCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQXlCO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBRUo7QUFuRUQsb0JBbUVDO0FBR0QsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7O0FDL0VYLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsbU1BQStGOztBQUVqSTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxOyB9XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTsgfVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbmh0bWwgYm9keSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNTZjY2YyLCAjMmY4MGVkKTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7IH1cXG5cXG4uYmctdmlkZW8ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTAlO1xcbiAgbGVmdDogLTEwJTtcXG4gIHdpZHRoOiAxMjAlO1xcbiAgaGVpZ2h0OiAxMjAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB6LWluZGV4OiAtMTtcXG4gIGZpbHRlcjogYmx1cigxNXB4KTsgfVxcblxcbm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogNDBweDsgfVxcbiAgbWFpbiAuY3VycmVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cXG4gIG1haW4gLm1haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICBtYWluIC5tYWluLWljb24ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMzIwcHg7XFxuICAgICAgZmlsdGVyOiBibHVyKDNweCk7XFxuICAgICAgei1pbmRleDogLTE7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgb3BhY2l0eTogMC41OyB9XFxuICAgIG1haW4gLm1haW4tdGVtcCA+IGRpdiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IDI0cHg7IH1cXG4gICAgICBtYWluIC5tYWluLXRlbXAgPiBkaXYgLm1haW4tdGVtcC10aW1lIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDsgfVxcbiAgICAgIG1haW4gLm1haW4tdGVtcCA+IGRpdiAubWFpbi10ZW1wLWxhYmVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XFxuICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgICBtYWluIC5tYWluLXRlbXAtY3VycmVudCB7XFxuICAgICAgZm9udC1zaXplOiAxMzBweDtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTEycHg7IH1cXG4gICAgbWFpbiAubWFpbi1pbmZvIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGdhcDogNDBweDtcXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IH1cXG4gICAgICBtYWluIC5tYWluLWluZm8tY2l0eSB7XFxuICAgICAgICBmb250LXNpemU6IDYwcHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDsgfVxcbiAgICAgIG1haW4gLm1haW4taW5mby13ZWF0aGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDsgfVxcbiAgICBtYWluIC5tYWluLXdpbmQge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgICBtYWluIC5tYWluLXdpbmQgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICByaWdodDogLTI0cHg7IH1cXG4gICAgICBtYWluIC5tYWluLXdpbmQgc3BhbiB7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7IH1cXG4gIG1haW4gLmZvcmVjYXN0IHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4OyB9XFxuICAgIG1haW4gLmZvcmVjYXN0LWl0ZW0ge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgcGFkZGluZzogMTBweDsgfVxcblxcbmFzaWRlIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4udG9hc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgYmFja2dyb3VuZDogI2Q4MzIzMjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgcGFkZGluZzogNXB4IDMwcHg7XFxuICBvcGFjaXR5OiAwOyB9XFxuICAudG9hc3QgcCB7XFxuICAgIG1hcmdpbjogMDsgfVxcbiAgLnRvYXN0LnZpc2libGUge1xcbiAgICBhbmltYXRpb246IHNob3dUb2FzdCAyLjVzIGZvcndhcmRzOyB9XFxuXFxuLmlucHV0V3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7IH1cXG4gIC5pbnB1dFdyYXBwZXIgLmlucHV0IHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgICAuaW5wdXRXcmFwcGVyIC5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7IH1cXG4gIC5pbnB1dFdyYXBwZXIgLmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZsZXgtc2hyaW5rOiAwOyB9XFxuICAgIC5pbnB1dFdyYXBwZXIgLmJ1dHRvbjphZnRlciwgLmlucHV0V3JhcHBlciAuYnV0dG9uOmJlZm9yZSB7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxcbiAgICAuaW5wdXRXcmFwcGVyIC5idXR0b246YmVmb3JlIHtcXG4gICAgICBoZWlnaHQ6IDE0cHg7XFxuICAgICAgd2lkdGg6IDJweDsgfVxcbiAgICAuaW5wdXRXcmFwcGVyIC5idXR0b246YWZ0ZXIge1xcbiAgICAgIGhlaWdodDogMnB4O1xcbiAgICAgIHdpZHRoOiAxNHB4OyB9XFxuICAgIC5pbnB1dFdyYXBwZXIgLmJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgICAgYmFja2dyb3VuZDogbm9uZTsgfVxcbiAgICAgIC5pbnB1dFdyYXBwZXIgLmJ1dHRvbjpkaXNhYmxlZDphZnRlciwgLmlucHV0V3JhcHBlciAuYnV0dG9uOmRpc2FibGVkOmJlZm9yZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4uY2l0eS1saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG4gIC5jaXR5LWxpc3QgPiBsaSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4OyB9XFxuICAuY2l0eS1saXN0LWl0ZW0ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDhweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7IH1cXG4gICAgLmNpdHktbGlzdC1pdGVtOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IH1cXG4gICAgLmNpdHktbGlzdC1pdGVtOmZvY3VzIHtcXG4gICAgICBvdXRsaW5lOiAwO1xcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTsgfVxcbiAgICAuY2l0eS1saXN0LWl0ZW0gPiBkaXYge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgICAuY2l0eS1saXN0LWl0ZW0gPiBkaXYgPiBkaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDVweDsgfVxcbiAgICAgICAgLmNpdHktbGlzdC1pdGVtID4gZGl2ID4gZGl2ID4gcCB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMmVtOyB9XFxuICAgIC5jaXR5LWxpc3QtaXRlbS1yZW1vdmVCdG4ge1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7IH1cXG4gICAgICAuY2l0eS1saXN0LWl0ZW0tcmVtb3ZlQnRuOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE2LCA1MCwgNTAsIDAuOCk7IH1cXG4gICAgICAuY2l0eS1saXN0LWl0ZW0tcmVtb3ZlQnRuOmFmdGVyLCAuY2l0eS1saXN0LWl0ZW0tcmVtb3ZlQnRuOmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7IH1cXG4gICAgICAuY2l0eS1saXN0LWl0ZW0tcmVtb3ZlQnRuOmJlZm9yZSB7XFxuICAgICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgICB3aWR0aDogMnB4OyB9XFxuICAgICAgLmNpdHktbGlzdC1pdGVtLXJlbW92ZUJ0bjphZnRlciB7XFxuICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgIHdpZHRoOiAxMHB4OyB9XFxuXFxuQGtleWZyYW1lcyBzaG93VG9hc3Qge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtMTAwJSk7IH1cXG4gIDIwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDApOyB9XFxuICA4MCUge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICA5OSUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgMTAwJSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcblxyXG5pbXBvcnQgeyBJRm9yZWNhc3REYXRhLCBJV2VhdGhlckRhdGEgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5pbXBvcnQgeyBEQVRBX0tFWSB9IGZyb20gJy4vYXBpQ2FsbGVyJztcclxuaW1wb3J0IHsgTWFpbiB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBnZXREYXkgfSBmcm9tICcuL2RhdGUtdXRpbHMnO1xyXG5cclxuZW51bSBMSVNUX0VMRU1UTlMge1xyXG4gICAgbmFtZSA9ICduYW1lJyxcclxuICAgIHRlbXAgPSAndGVtcCcsXHJcbiAgICBwcmVzc3VyZSA9ICdwcmVzcycsXHJcbiAgICBpY29uID0gJ2ljb24nXHJcbn1cclxuXHJcbmVudW0gV0VBVEhFUl9UWVBFUyB7XHJcbiAgICB0aHVuZGVyc3Rvcm0gPSAnMicsXHJcbiAgICBkcml6emxlID0gJzMnLFxyXG4gICAgcmFpbiA9ICc1JyxcclxuICAgIHNub3cgPSAnNicsXHJcbiAgICBhdG1vc3BoZXJlID0gJzcnLFxyXG4gICAgY2xlYXIgPSAnOCdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVJIHtcclxuICAgIG1haW5Db250ZXh0OiBNYWluO1xyXG4gICAgY29uc3RydWN0b3IobWFpbjogTWFpbikge1xyXG4gICAgICAgIHRoaXMubWFpbkNvbnRleHQgPSBtYWluO1xyXG4gICAgfVxyXG4gICAgc2hvd0FwaUVycm9yKCkge1xyXG4gICAgICAgIGNvbnN0IHRvYXN0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JUb2FzdCcpO1xyXG4gICAgICAgIC8vIGFkZCBjbGFzcyB0aGF0IGFuaW1hdGVzIHRoZSB0b2FzdFxyXG4gICAgICAgIHRvYXN0RWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgICAgIHRvYXN0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiBoYW5kbGVyKGUpIHtcclxuICAgICAgICAgICAgdG9hc3RFbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBgYW5pbWF0aW9uZW5kYCBldmVudCBhZnRlciBleGVjdXRpb24gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcclxuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZS50eXBlLCBoYW5kbGVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gbWFpbiBVSVxyXG4gICAgcmVuZGVyTWFpblZpZXcoZm9yZWNhc3REYXRhOiBJRm9yZWNhc3REYXRhLCBhY3RpdmVDaXR5OiBJV2VhdGhlckRhdGEpIHtcclxuICAgICAgICBpZiAoZm9yZWNhc3REYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVGhlbWUoYWN0aXZlQ2l0eS53ZWF0aGVyWzBdLmlkKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJGb3JlY2FzdChmb3JlY2FzdERhdGEpO1xyXG4gICAgICAgICAgICAvLyBnZW5lcmFsXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ2l0eScpLmlubmVySFRNTCA9IGFjdGl2ZUNpdHkubmFtZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5XZWF0aGVyJykuaW5uZXJIVE1MID0gYWN0aXZlQ2l0eS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblRpbWUnKS5pbm5lckhUTUwgPSBnZXREYXkoYWN0aXZlQ2l0eS5kdCwgYWN0aXZlQ2l0eS50aW1lem9uZSk7XHJcbiAgICAgICAgICAgIC8vIGljb25cclxuICAgICAgICAgICAgY29uc3QgaWNvbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluSWNvblwiKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgICAgICBpY29uRWwuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7YWN0aXZlQ2l0eS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XHJcbiAgICAgICAgICAgIGljb25FbC5hbHQgPSBhY3RpdmVDaXR5LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIGljb25FbC50aXRsZSA9IGFjdGl2ZUNpdHkud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgLy8gdGVtcFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblRlbXAnKS5pbm5lckhUTUwgPSBgJHthY3RpdmVDaXR5Lm1haW4udGVtcC50b0ZpeGVkKDEpfcKwQ2A7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluVGVtcEZlZWxzJykuaW5uZXJIVE1MID0gYCR7YWN0aXZlQ2l0eS5tYWluLmZlZWxzX2xpa2V9wrBDYDtcclxuICAgICAgICAgICAgLy8gd2luZFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbldpbmRTcGVlZCcpLmlubmVySFRNTCA9IGAke2FjdGl2ZUNpdHkud2luZC5zcGVlZH1tL3NgO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbldpbmRJY29uJykuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke2FjdGl2ZUNpdHkud2luZC5kZWd9ZGVnKWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZvcmVjYXN0KGZvcmVjYXN0RGF0YTogSUZvcmVjYXN0RGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGRhaWx5RGF0YSA9IGZvcmVjYXN0RGF0YS5kYWlseS5zbGljZSgxKTtcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvcmVjYXN0Jyk7XHJcbiAgICAgICAgd3JhcHBlci5pbm5lckhUTUwgPSBudWxsO1xyXG4gICAgICAgIGRhaWx5RGF0YS5mb3JFYWNoKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc05hbWUgPSBcImZvcmVjYXN0LWl0ZW1cIjtcclxuICAgICAgICAgICAgLy8gY2hpbGQgaXRlbXNcclxuICAgICAgICAgICAgY29uc3QgaXRlbURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGl0ZW1EYXRlLmlubmVyVGV4dCA9IGluZGV4ID09PSAwID8gJ3RvbW9ycm93JyA6IGdldERheShkYXRhLmR0LCBmb3JlY2FzdERhdGEudGltZXpvbmVfb2Zmc2V0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIGl0ZW1JY29uLmlubmVyVGV4dCA9IGdldERheShkYXRhLmR0LCBmb3JlY2FzdERhdGEudGltZXpvbmVfb2Zmc2V0KTtcclxuICAgICAgICAgICAgaXRlbUljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XHJcbiAgICAgICAgICAgIGl0ZW1JY29uLmFsdCA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgaXRlbUljb24udGl0bGUgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgaXRlbVRlbXAuaW5uZXJUZXh0ID0gYCR7ZGF0YS50ZW1wLm1pbi50b0ZpeGVkKDEpfcKwQyAvICR7ZGF0YS50ZW1wLm1heC50b0ZpeGVkKDEpfcKwQ2BcclxuXHJcbiAgICAgICAgICAgIC8vIGFwcGVuZGluZ1xyXG4gICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1EYXRlKTtcclxuICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtSWNvbik7XHJcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRlbXApO1xyXG5cclxuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2hUaGVtZSh3ZWF0aGVySWQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0TnVtYmVyID0gU3RyaW5nKHdlYXRoZXJJZClbMF07XHJcbiAgICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmdWaWRlbycpIGFzIEhUTUxWaWRlb0VsZW1lbnQ7XHJcbiAgICAgICAgbGV0IHZpZGVvU3JjO1xyXG4gICAgICAgIHN3aXRjaCAoZmlyc3ROdW1iZXIpIHtcclxuICAgICAgICAgICAgY2FzZSBXRUFUSEVSX1RZUEVTLnRodW5kZXJzdG9ybTogdmlkZW9TcmMgPSAnaHR0cHM6Ly9zdGF0aWMudmlkZWV6eS5jb20vc3lzdGVtL3Jlc291cmNlcy9wcmV2aWV3cy8wMDAvMDQ0LzU4Mi9vcmlnaW5hbC9kYXJrLWZvcmVzdC5tcDQnOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBXRUFUSEVSX1RZUEVTLmRyaXp6bGU6IHZpZGVvU3JjID0gJ2h0dHBzOi8vc3RhdGljLnZpZGVlenkuY29tL3N5c3RlbS9yZXNvdXJjZXMvcHJldmlld3MvMDAwLzA0NC83Njcvb3JpZ2luYWwvUDExNDA4MjgubXA0JzsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgV0VBVEhFUl9UWVBFUy5yYWluOiB2aWRlb1NyYyA9ICdodHRwczovL3N0YXRpYy52aWRlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3ByZXZpZXdzLzAwMC8wNDkvMDQ3L29yaWdpbmFsL3Bhbm5pbmctYW5kLWNsb3NlLXVwLXRvLXJhaW4tZHJvcC1vbi10aGUtZ2xhc3Mtb2Ytd2luZG93Lm1wNCc7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFdFQVRIRVJfVFlQRVMuc25vdzogdmlkZW9TcmMgPSAnaHR0cHM6Ly9jZG4udmlkZXZvLm5ldC92aWRldm9fZmlsZXMvdmlkZW8vZnJlZS8yMDE1LTA5L3NtYWxsX3dhdGVybWFya2VkL1Nsb3dfU25vd19TZWdfQ29tcF9GbGFrZXNfcHJldmlldy53ZWJtJzsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgV0VBVEhFUl9UWVBFUy5hdG1vc3BoZXJlOiB2aWRlb1NyYyA9ICdodHRwczovL3N0YXRpYy52aWRlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3ByZXZpZXdzLzAwMC8wMzQvMDY5L29yaWdpbmFsL01vdW50YWluLXJhaW41Lm1wNCc7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFdFQVRIRVJfVFlQRVMuY2xlYXI6IHZpZGVvU3JjID0gJ2h0dHBzOi8vc3RhdGljLnZpZGVlenkuY29tL3N5c3RlbS9yZXNvdXJjZXMvcHJldmlld3MvMDAwLzAzOS80NjYvb3JpZ2luYWwvNThfMjhfMDhfMTkubXA0JzsgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICB2aWRlb1NyYyA9ICdodHRwczovL3N0YXRpYy52aWRlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3ByZXZpZXdzLzAwMC8wMzkvNDY2L29yaWdpbmFsLzU4XzI4XzA4XzE5Lm1wNCc7IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB3aHkgdHdvIGdyb3VwcyBoYXZlIHRoZSBzYW1lIGtleSBjb2RlIGdyb3VwIHd0ZiAvLyBjbG91ZHlcclxuICAgICAgICBpZih3ZWF0aGVySWQgPiA4MDApIHZpZGVvU3JjID0gJ2h0dHBzOi8vY2RuLnZpZGV2by5uZXQvdmlkZXZvX2ZpbGVzL3ZpZGVvL2ZyZWUvMjAyMC0wNy9zbWFsbF93YXRlcm1hcmtlZC8wNl8xNTk2MDgzNzc2X3ByZXZpZXcud2VibSc7XHJcbiAgICAgICAgdmlkZW8uc3JjID0gdmlkZW9TcmM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXNpZGUgVUlcclxuICAgIHJlbW92ZUNpdHkoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGFsbENpdGllczogSVdlYXRoZXJEYXRhW10gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKERBVEFfS0VZKSk7XHJcbiAgICAgICAgaWYgKGFsbENpdGllcyAmJiBpZCkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJkQ2l0aWVzID0gYWxsQ2l0aWVzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gaWQpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShEQVRBX0tFWSwgSlNPTi5zdHJpbmdpZnkoZmlsdGVyZENpdGllcykpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcldlYXRoZXJMaXN0KGZpbHRlcmRDaXRpZXMsIHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBvcHVsYXRlTGlzdEVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQsIHdlYXRoZXJEYXRhOiBJV2VhdGhlckRhdGEpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnRJZCA9IGVsZW1lbnQuaWQ7XHJcbiAgICAgICAgY29uc3QgaWNvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cGFyZW50SWR9ICMke3BhcmVudElkfV8ke0xJU1RfRUxFTVROUy5pY29ufWApIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgaWNvbkVsLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcclxuICAgICAgICBpY29uRWwuYWx0ID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICBpY29uRWwudGl0bGUgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3BhcmVudElkfSAjJHtwYXJlbnRJZH1fJHtMSVNUX0VMRU1UTlMubmFtZX1gKS5pbm5lckhUTUwgPSB3ZWF0aGVyRGF0YS5uYW1lO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3BhcmVudElkfSAjJHtwYXJlbnRJZH1fJHtMSVNUX0VMRU1UTlMucHJlc3N1cmV9YCkuaW5uZXJIVE1MID0gYCR7d2VhdGhlckRhdGEubWFpbi5wcmVzc3VyZX0gaFBBYDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwYXJlbnRJZH0gIyR7cGFyZW50SWR9XyR7TElTVF9FTEVNVE5TLnRlbXB9YCkuaW5uZXJIVE1MID0gYCR7d2VhdGhlckRhdGEubWFpbi50ZW1wLnRvRml4ZWQoMSl9wrBDYDtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJXZWF0aGVyRWxlbWVudCh3ZWF0aGVyRGF0YTogSVdlYXRoZXJEYXRhLCBlbGVtZW50SWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eUxpc3QnKTtcclxuICAgICAgICAvLyBtYWluIGVsZW1lbnRcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBlbGVtZW50LmlkID0gZWxlbWVudElkO1xyXG4gICAgICAgIC8vIG90aGVyIGVsZW1lbnRzXHJcbiAgICAgICAgY29uc3QgZWxlbWVudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBlbGVtZW50QnRuQ29udGFpbmVyQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBlbGVtZW50QnRuLmNsYXNzTmFtZSA9IFwiY2l0eS1saXN0LWl0ZW1cIjtcclxuICAgICAgICAvLyBuYW1lXHJcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIG5hbWVFbC5pZCA9IGAke2VsZW1lbnRJZH1fJHtMSVNUX0VMRU1UTlMubmFtZX1gO1xyXG4gICAgICAgIGVsZW1lbnRCdG5Db250YWluZXJDaGlsZC5hcHBlbmRDaGlsZChuYW1lRWwpO1xyXG4gICAgICAgIC8vIHRlbXBlcmF0dXJlXHJcbiAgICAgICAgY29uc3QgdGVtcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHRlbXBFbC5pZCA9IGAke2VsZW1lbnRJZH1fJHtMSVNUX0VMRU1UTlMudGVtcH1gO1xyXG4gICAgICAgIGVsZW1lbnRCdG5Db250YWluZXJDaGlsZC5hcHBlbmRDaGlsZCh0ZW1wRWwpO1xyXG4gICAgICAgIC8vIHByZXNzdXJlXHJcbiAgICAgICAgY29uc3QgcHJlc3NFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBwcmVzc0VsLmlkID0gYCR7ZWxlbWVudElkfV8ke0xJU1RfRUxFTVROUy5wcmVzc3VyZX1gO1xyXG4gICAgICAgIGVsZW1lbnRCdG5Db250YWluZXJDaGlsZC5hcHBlbmRDaGlsZChwcmVzc0VsKTtcclxuICAgICAgICAvL2ljb24gXHJcbiAgICAgICAgY29uc3QgaWNvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaWNvbkVsLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcclxuICAgICAgICBpY29uRWwuaWQgPSBgJHtlbGVtZW50SWR9XyR7TElTVF9FTEVNVE5TLmljb259YDtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIGJ1dHRvblxyXG4gICAgICAgIGNvbnN0IHJlbW92ZUJ0bkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgcmVtb3ZlQnRuRWwuY2xhc3NOYW1lID0gXCJjaXR5LWxpc3QtaXRlbS1yZW1vdmVCdG5cIjtcclxuICAgICAgICByZW1vdmVCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLnJlbW92ZUNpdHkod2VhdGhlckRhdGEuaWQpKTtcclxuXHJcbiAgICAgICAgLy8gYWN0aXZhdGlvblxyXG4gICAgICAgIGVsZW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbkNvbnRleHQuY2hhbmdlQWN0aXZlQ2l0eSh3ZWF0aGVyRGF0YS5pZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGFwcGVuZGluZ1xyXG4gICAgICAgIGVsZW1lbnRCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudEJ0bkNvbnRhaW5lckNoaWxkKTtcclxuICAgICAgICBlbGVtZW50QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb25FbCk7XHJcbiAgICAgICAgZWxlbWVudEJ0bi5hcHBlbmRDaGlsZChlbGVtZW50QnRuQ29udGFpbmVyKTtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnRCdG4pO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuRWwpO1xyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIHRoaXMucG9wdWxhdGVMaXN0RWxlbWVudChlbGVtZW50LCB3ZWF0aGVyRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyV2VhdGhlckxpc3Qod2VhdGhlckRhdGE6IElXZWF0aGVyRGF0YVtdLCBmb3JjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKGZvcmNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eUxpc3QnKTtcclxuICAgICAgICAgICAgd3JhcHBlci5pbm5lckhUTUwgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3ZWF0aGVyRGF0YS5mb3JFYWNoKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRJZCA9IGBsaXN0RWxfJHtkYXRhLmlkfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICAvLyB0byBhdm9pZCB1bm5lY2Vzc2FhcnkgcmUtcmVuZGVyaW5nIG9mIGFsbCBsaXN0LCBqdXN0IHJlZnJlc2ggbmV3IGNvbnRlbnRcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHRoaXMucG9wdWxhdGVMaXN0RWxlbWVudChlbGVtZW50LCBkYXRhKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLnJlbmRlcldlYXRoZXJFbGVtZW50KGRhdGEsIGVsZW1lbnRJZCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUZvcmVjYXN0RGF0YSwgSVdlYXRoZXJEYXRhIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERBVEFfS0VZID0gXCJ3ZWF0aGVyX2RhdGFcIlxyXG5jb25zdCBBUElfS0VZID0gXCJjYmVlYjQ5MTc0NTZhOWRjNWJlZjU3MDk2NzYyODUyMVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwaUNhbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbGxEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY2FsbERhdGEoY2l0eT86IHN0cmluZykge1xyXG4gICAgICAgIGlmKGNpdHkpIHtcclxuICAgICAgICAgICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHRoaXMuZ2V0V2VhdGhlckRhdGEoY2l0eSk7XHJcbiAgICAgICAgICAgIGlmKHdlYXRoZXIgJiYgd2VhdGhlci5jb2QgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlRGF0YSh3ZWF0aGVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHdlYXRoZXIuY29kO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcmVmcmVzaERhdGEoKTogUHJvbWlzZTxJV2VhdGhlckRhdGFbXT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDaXRpZXMgPSAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShEQVRBX0tFWSkpIGFzIElXZWF0aGVyRGF0YVtdKVxyXG4gICAgICAgICAgICA/Lm1hcCh2ID0+IHYubmFtZSkgfHwgW107XHJcbiAgICAgICAgY29uc3QgbmV3Q2l0aWVzID0gUHJvbWlzZS5hbGwoY3VycmVudENpdGllcy5tYXAoYXN5bmMgKGNpdHkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYXBpVVJMID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPSR7QVBJX0tFWX0mdW5pdHM9bWV0cmljYDtcclxuICAgICAgICAgICAgY29uc3Qgd2VhdGhlclJlc3AgPSBhd2FpdCBmZXRjaChhcGlVUkwpO1xyXG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YTogSVdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlclJlc3AuanNvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVEYXRhKHdlYXRoZXJEYXRhKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0NpdGllcztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRXZWF0aGVyRGF0YShjaXR5OiBzdHJpbmcpOiBQcm9taXNlPElXZWF0aGVyRGF0YT4ge1xyXG4gICAgICAgIGNvbnN0IGFwaVVSTCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0ke0FQSV9LRVl9JnVuaXRzPW1ldHJpY2A7XHJcbiAgICAgICAgY29uc3Qgd2VhdGhlclJlc3AgPSBhd2FpdCBmZXRjaChhcGlVUkwpO1xyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhOiBJV2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyUmVzcC5qc29uKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRGb3JlY2FzdERhdGEobGF0OiBudW1iZXIsIGxvbmc6IG51bWJlcik6IFByb21pc2U8SUZvcmVjYXN0RGF0YT4ge1xyXG4gICAgICAgIGNvbnN0IGFwaVVSTCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbmd9JmV4Y2x1ZGU9bWludXRlbHksaG91cmx5JmFwcGlkPSR7QVBJX0tFWX0mdW5pdHM9bWV0cmljYDtcclxuICAgICAgICBjb25zdCBmb3JlY2FzdFJlc3AgPSBhd2FpdCBmZXRjaChhcGlVUkwpO1xyXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF0YTogSUZvcmVjYXN0RGF0YSA9IGF3YWl0IGZvcmVjYXN0UmVzcC5qc29uKCk7XHJcbiAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCBtb3JlIGRhaWx5IGRhdGFcclxuICAgICAgICBmb3JlY2FzdERhdGEuZGFpbHkgPSBmb3JlY2FzdERhdGEuZGFpbHkuc2xpY2UoMCwgNik7XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JlY2FzdERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZURhdGEoZGF0YTogSVdlYXRoZXJEYXRhKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudERhdGEgPSB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICBjb25zdCBpbmRleEluTFMgPSBjdXJyZW50RGF0YS5maW5kSW5kZXgoKHZhbCkgPT4gdmFsLmlkID09PSBkYXRhLmlkKTtcclxuICAgICAgICBpZihpbmRleEluTFMgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIGRhdGEgYWxyZWFkeSBzYXZlZCwgcmVmcmVzaCBvbmUgaXRlbVxyXG4gICAgICAgICAgICBjdXJyZW50RGF0YVtpbmRleEluTFNdID0gZGF0YTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oREFUQV9LRVksIEpTT04uc3RyaW5naWZ5KGN1cnJlbnREYXRhKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKERBVEFfS0VZLCBKU09OLnN0cmluZ2lmeShbLi4uY3VycmVudERhdGEsIGRhdGFdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YSgpOiBJV2VhdGhlckRhdGFbXSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKERBVEFfS0VZKTtcclxuICAgICAgICBpZiAoZGF0YSlcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcbiIsImZ1bmN0aW9uIGdldERheShkdDogbnVtYmVyLCB0aW1lem9uZU9mZnNldDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgoZHQgKyB0aW1lem9uZU9mZnNldCkgKiAxMDAwKTtcclxuICAgIGNvbnN0IHN0cmluZ0RhdGUgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xyXG4gICAgcmV0dXJuIHN0cmluZ0RhdGU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgZ2V0RGF5XHJcbn07IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5pbXBvcnQgeyBJRm9yZWNhc3REYXRhLCBJV2VhdGhlckRhdGEgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmltcG9ydCB7IEFwaUNhbGxlciB9IGZyb20gJy4vYXBpQ2FsbGVyJztcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi9VSSc7XG5cbmNvbnN0IEFDVElWRV9DSVRZX0tFWSA9IFwiYWN0aXZlX2NpdHlcIlxuXG5leHBvcnQgY2xhc3MgTWFpbiB7XG4gICAgYXBpQ2FsbGVyOiBBcGlDYWxsZXI7XG4gICAgVUk6IFVJO1xuICAgIHdlYXRoZXJEYXRhOiBJV2VhdGhlckRhdGFbXTtcbiAgICBhY3RpdmVDaXR5OiBJV2VhdGhlckRhdGFbJ2lkJ10gPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oQUNUSVZFX0NJVFlfS0VZKSk7XG4gICAgYWN0aXZlQ2l0eURhdGE6IElGb3JlY2FzdERhdGE7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXBpQ2FsbGVyID0gbmV3IEFwaUNhbGxlcigpO1xuICAgICAgICB0aGlzLlVJID0gbmV3IFVJKHRoaXMpO1xuICAgICAgICB0aGlzLndlYXRoZXJEYXRhID0gdGhpcy5hcGlDYWxsZXIuZ2V0RGF0YSgpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZUNpdHkoKTtcbiAgICAgICAgdGhpcy5pbml0UmVmcmVzaGVyKCk7XG4gICAgICAgIHRoaXMuYmluZElucHV0RXZlbnRzKCk7XG4gICAgICAgIHRoaXMuVUkucmVuZGVyV2VhdGhlckxpc3QodGhpcy53ZWF0aGVyRGF0YSk7XG4gICAgfVxuICAgIFxuICAgIGluaXRSZWZyZXNoZXIoKXtcbiAgICAgICAgLy8gcmVmcmVzaCBkYXRhIGV2ZXJ5IG1pbnV0ZVxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFwaUNhbGxlci5yZWZyZXNoRGF0YSgpLnRoZW4oY3VycmVudERhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlckRhdGEgPSBjdXJyZW50RGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLlVJLnJlbmRlcldlYXRoZXJMaXN0KHRoaXMud2VhdGhlckRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZih0aGlzLmFjdGl2ZUNpdHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZUNpdHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNjAwMDApO1xuICAgIH1cblxuICAgIGJpbmRJbnB1dEV2ZW50cygpIHtcbiAgICAgICAgY29uc3Qgd2VhdGhlckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlckZvcm0nKTtcbiAgICAgICAgY29uc3QgY2l0eUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5QnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5SW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICB3ZWF0aGVyRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmFwaUNhbGxlci5jYWxsRGF0YShjaXR5SW5wdXQudmFsdWUpLnRoZW4oKGNvZGU6IElXZWF0aGVyRGF0YVsnY29kJ10pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGNvZGUpICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5VSS5zaG93QXBpRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyRGF0YSA9IHRoaXMuYXBpQ2FsbGVyLmdldERhdGEoKTtcbiAgICAgICAgICAgICAgICB0aGlzLlVJLnJlbmRlcldlYXRoZXJMaXN0KHRoaXMud2VhdGhlckRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjaXR5SW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGNpdHlCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY2l0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZS5sZW5ndGggPiAwKSBjaXR5QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBlbHNlIGNpdHlCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVDaXR5KCkge1xuICAgICAgICBjb25zdCBhY3RpdmVDaXR5ID0gdGhpcy53ZWF0aGVyRGF0YS5maW5kKGNpdHkgPT4gY2l0eS5pZCA9PT0gdGhpcy5hY3RpdmVDaXR5KTtcbiAgICAgICAgaWYoYWN0aXZlQ2l0eSkge1xuICAgICAgICAgICAgdGhpcy5hcGlDYWxsZXIuZ2V0Rm9yZWNhc3REYXRhKGFjdGl2ZUNpdHkuY29vcmQubGF0LCBhY3RpdmVDaXR5LmNvb3JkLmxvbikudGhlbihhY3RpdmVGb3JlY2FzdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDaXR5RGF0YSA9IGFjdGl2ZUZvcmVjYXN0O1xuICAgICAgICAgICAgICAgIHRoaXMuVUkucmVuZGVyTWFpblZpZXcodGhpcy5hY3RpdmVDaXR5RGF0YSwgYWN0aXZlQ2l0eSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZUFjdGl2ZUNpdHkoaW5kZXg6IElXZWF0aGVyRGF0YVsnaWQnXSkge1xuICAgICAgICB0aGlzLmFjdGl2ZUNpdHkgPSBpbmRleDtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQUNUSVZFX0NJVFlfS0VZLCBTdHJpbmcoaW5kZXgpKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVDaXR5KCk7XG4gICAgfVxuXG59XG5cblxubmV3IE1haW4oKTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==