module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/requests */ "./src/requests/index.js");
/* harmony import */ var _src_components_layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/layout/layout */ "./src/components/layout/layout.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const protectedRoutes = ['/profile', '/profile/settings'];
class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps({
    Component,
    router,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    try {
      const res = await Object(_src_requests__WEBPACK_IMPORTED_MODULE_3__["userInfoRequst"])(ctx.req);
      pageProps.user = res.data;
    } catch (e) {
      pageProps.err = e;
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      router
    } = this.props;
    const {
      user
    } = pageProps;
    const accessDenied = protectedRoutes.includes(router.route) && !user.isLogin;
    return __jsx(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
      crossOrigin: "anonymous"
    })), __jsx(_src_components_layout_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      user: pageProps.user
    }, accessDenied ? __jsx("div", null, "\u0414\u043E\u0441\u0442\u0443\u043F \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D") : __jsx(Component, pageProps)));
  }

}

/***/ }),

/***/ "./src/components/add-wish-dialog/index.js":
/*!*************************************************!*\
  !*** ./src/components/add-wish-dialog/index.js ***!
  \*************************************************/
/*! exports provided: AddWishDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWishDialog", function() { return AddWishDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/components/add-wish-dialog/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AddWishDialog = ({
  isOpen,
  onSubmit,
  onClose
}) => {
  if (!isOpen) {
    return null;
  }

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: true,
    onHide: onClose,
    centered: true
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_2___default.a.modal
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: onSubmit
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "name"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "name",
    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "\u0421\u0441\u044B\u043B\u043A\u0430"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    name: "link",
    placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430"
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "price"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "\u0426\u0435\u043D\u0430"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "number",
    name: "price",
    placeholder: "\u0426\u0435\u043D\u0430"
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "image"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "file",
    name: "image",
    placeholder: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    type: "submit"
  }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C")))));
};

/***/ }),

/***/ "./src/components/add-wish-dialog/styles.css":
/*!***************************************************!*\
  !*** ./src/components/add-wish-dialog/styles.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/header/components/login-dialog/components/content/index.js":
/*!***********************************************************************************!*\
  !*** ./src/components/header/components/login-dialog/components/content/index.js ***!
  \***********************************************************************************/
/*! exports provided: TabContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabContent", function() { return TabContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./src/components/header/components/login-dialog/components/content/login.js");
/* harmony import */ var _registration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration */ "./src/components/header/components/login-dialog/components/content/registration.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/components/header/components/login-dialog/components/content/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const TabContent = ({
  selectedtab,
  submitActions,
  formErorrs
}) => __jsx("div", {
  className: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.content
}, selectedtab === 'login' ? __jsx(_login__WEBPACK_IMPORTED_MODULE_1__["LoginContent"], {
  onSubmit: submitActions.onLogin
}) : __jsx(_registration__WEBPACK_IMPORTED_MODULE_2__["RegContent"], {
  onSubmit: submitActions.onRegistration,
  formErorrs: formErorrs
}));

/***/ }),

/***/ "./src/components/header/components/login-dialog/components/content/login.js":
/*!***********************************************************************************!*\
  !*** ./src/components/header/components/login-dialog/components/content/login.js ***!
  \***********************************************************************************/
/*! exports provided: LoginContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginContent", function() { return LoginContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LoginContent = ({
  onSubmit
}) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
  onSubmit: onSubmit
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  controlId: "login"
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "\u041B\u043E\u0433\u0438\u043D"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
  type: "text",
  name: "username",
  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043B\u043E\u0433\u0438\u043D"
})), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  controlId: "password"
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
  type: "password",
  name: "password",
  placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C"
})), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  variant: "primary",
  type: "submit"
}, "\u0412\u043E\u0439\u0442\u0438"));

/***/ }),

/***/ "./src/components/header/components/login-dialog/components/content/registration.js":
/*!******************************************************************************************!*\
  !*** ./src/components/header/components/login-dialog/components/content/registration.js ***!
  \******************************************************************************************/
/*! exports provided: RegContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegContent", function() { return RegContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const errorMessagesLookup = {
  UserExistsError: 'Пользователь с данным именем пользователя уже зарегистрирован',
  MissingUsernameError: 'Имя пользователя не указано'
};
const RegContent = ({
  onSubmit,
  formErorrs = {}
}) => {
  const isUsernameInvalid = formErorrs.UserExistsError || formErorrs.MissingUsernameError;
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: onSubmit
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "login"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "\u041B\u043E\u0433\u0438\u043D"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    isInvalid: isUsernameInvalid,
    type: "text",
    name: "username",
    placeholder: "\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid"
  }, errorMessagesLookup.UserExistsError || errorMessagesLookup.MissingUsernameError)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "email"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "E-mail"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "email",
    name: "email",
    placeholder: "E-mail"
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "password"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "\u041F\u0430\u0440\u043E\u043B\u044C"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "password",
    name: "password",
    placeholder: "Password"
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    type: "submit"
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"));
};

/***/ }),

/***/ "./src/components/header/components/login-dialog/components/content/styles.css":
/*!*************************************************************************************!*\
  !*** ./src/components/header/components/login-dialog/components/content/styles.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"content": "_1cDHrCa-HAL561b9DtndFS"
};

/***/ }),

/***/ "./src/components/header/components/login-dialog/index.js":
/*!****************************************************************!*\
  !*** ./src/components/header/components/login-dialog/index.js ***!
  \****************************************************************/
/*! exports provided: LoginDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDialog", function() { return LoginDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/content */ "./src/components/header/components/login-dialog/components/content/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/components/header/components/login-dialog/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const tabsLookup = [{
  key: 'login',
  title: 'Войти'
}, {
  key: 'registration',
  title: 'Зарегистрироваться'
}];
const LoginDialog = ({
  isOpen,
  onLogin,
  onRegistration,
  formErorrs,
  onClose
}) => {
  if (!isOpen) {
    return null;
  }

  const {
    0: key,
    1: changeTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('login');
  const submitActions = {
    onLogin,
    onRegistration
  };
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: true,
    onHide: onClose,
    centered: true
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.modal
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.tabs,
    defaultActiveKey: "login",
    activeKey: key,
    onSelect: k => changeTab(k)
  }, tabsLookup.map(({
    key,
    title,
    onSubmit
  }) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    key: key,
    eventKey: key,
    title: title,
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a['tab-item']
  }, __jsx(_components_content__WEBPACK_IMPORTED_MODULE_2__["TabContent"], {
    selectedtab: key,
    submitActions: submitActions,
    formErorrs: formErorrs
  })))))));
};

/***/ }),

/***/ "./src/components/header/components/login-dialog/styles.css":
/*!******************************************************************!*\
  !*** ./src/components/header/components/login-dialog/styles.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"modal": "_3MPR4lBrr1RK--sJmL4wvY",
	"tabs": "_2GBuoGCPBfE6qtMjM88TeP"
};

/***/ }),

/***/ "./src/components/header/components/user-info/index.js":
/*!*************************************************************!*\
  !*** ./src/components/header/components/user-info/index.js ***!
  \*************************************************************/
/*! exports provided: UserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils */ "./src/utils/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const UserInfo = ({
  user = {},
  onOpen,
  onAddWishPopupOpen,
  onLogout
}) => {
  const {
    isLogin,
    data: userInfo
  } = user;

  if (!isLogin) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "outline-light",
      onClick: onOpen
    }, "\u0412\u043E\u0439\u0442\u0438");
  }

  const userName = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getUserName"])(userInfo);
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"], {
    title: userName,
    id: "user-nav"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
    as: "div"
  }, __jsx("a", {
    onClick: onAddWishPopupOpen
  }, "\u041D\u043E\u0432\u043E\u0435 \u0436\u0435\u043B\u0430\u043D\u0438\u0435")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
    as: "div"
  }, __jsx("a", {
    href: "/profile"
  }, "\u041C\u043E\u0438 \u0436\u0435\u043B\u0430\u043D\u0438\u044F")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
    as: "div"
  }, __jsx("a", {
    href: "/profile/settings"
  }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Divider, null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
    onClick: onLogout
  }, "\u0412\u044B\u0439\u0442\u0438"));
};

/***/ }),

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_login_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login-dialog */ "./src/components/header/components/login-dialog/index.js");
/* harmony import */ var _add_wish_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-wish-dialog */ "./src/components/add-wish-dialog/index.js");
/* harmony import */ var _components_user_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-info */ "./src/components/header/components/user-info/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  Brand,
  Toggle,
  Collapse
} = react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"];
const {
  Item,
  Divider
} = react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"];
const {
  Link
} = react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"];
const Header = ({
  isPopupOpen,
  togglePopup,
  user,
  onLogin,
  onRegistration,
  onLogout,
  onAddWish,
  formErorrs
}) => {
  const handleClose = () => togglePopup(false);

  const handleShow = () => togglePopup(true);

  const {
    0: isAddWishPopupOpen,
    1: toggleAddWishPopup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    bg: "dark",
    variant: "dark",
    expand: "sm"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("a", {
    href: "/"
  }, __jsx(Brand, null, "My Wishlist")), __jsx(Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), __jsx(Collapse, {
    id: "basic-navbar-nav"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "mr-auto"
  }, __jsx(Link, {
    href: "#home"
  }, "Home"), __jsx(Link, {
    href: "#link"
  }, "Link"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"], {
    title: "Dropdown",
    id: "basic-nav-dropdown"
  }, __jsx(Item, {
    href: "#action/3.1"
  }, "Action"), __jsx(Item, {
    href: "#action/3.2"
  }, "Another action"), __jsx(Item, {
    href: "#action/3.3"
  }, "Something"), __jsx(Divider, null), __jsx(Item, {
    href: "#action/3.4"
  }, "Separated link"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], null, __jsx(_components_user_info__WEBPACK_IMPORTED_MODULE_4__["UserInfo"], {
    user: user,
    onOpen: handleShow,
    onAddWishPopupOpen: () => toggleAddWishPopup(true),
    onLogout: onLogout
  })))), __jsx(_components_login_dialog__WEBPACK_IMPORTED_MODULE_2__["LoginDialog"], {
    isOpen: isPopupOpen,
    onLogin: onLogin,
    onRegistration: onRegistration,
    formErorrs: formErorrs,
    onClose: handleClose
  }), __jsx(_add_wish_dialog__WEBPACK_IMPORTED_MODULE_3__["AddWishDialog"], {
    isOpen: isAddWishPopupOpen,
    onClose: () => toggleAddWishPopup(false),
    onSubmit: onAddWish
  }));
};

/***/ }),

/***/ "./src/components/layout/layout.js":
/*!*****************************************!*\
  !*** ./src/components/layout/layout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header */ "./src/components/header/index.js");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../requests */ "./src/requests/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./src/components/layout/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const getFormFields = form => {
  return _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(form).reduce((acc, node) => {
    if (node.name) {
      if (node.name === 'image') {
        console.log(node, node.files[0]);
      }

      acc[node.name] = node.value;
    }

    return acc;
  }, {});
};

const Layout = ({
  user,
  children
}) => {
  const {
    0: userInfo,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(user);
  const {
    0: isPopupOpen,
    1: togglePopup
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: formErorrs,
    1: setFormErrors
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({});

  const handleLogin = e => {
    e.preventDefault();
    const data = getFormFields(e.target);
    Object(_requests__WEBPACK_IMPORTED_MODULE_5__["loginRequest"])(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)).then(({
      data
    }) => {
      setUser(data);
      togglePopup(false);
    }).catch(e => console.warn(e));
  };

  const handleLogout = () => Object(_requests__WEBPACK_IMPORTED_MODULE_5__["logoutRequest"])().then(() => {
    setUser({
      isLogin: false,
      data: null
    });
  });

  const handleRegistration = e => {
    e.preventDefault();
    const data = getFormFields(e.target);
    Object(_requests__WEBPACK_IMPORTED_MODULE_5__["registrationRequest"])(data).then(({
      data
    }) => {
      const {
        status,
        user,
        error
      } = data;

      if (status === 'success') {
        setUser({
          isLogin: true,
          data: user
        });
      } else {
        setFormErrors({
          [error.name]: error.message
        });
      }
    }).catch(error => {
      console.log(error.message);
    });
  };

  const handleAddWish = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
    Object(_requests__WEBPACK_IMPORTED_MODULE_5__["addWishRequest"])(data).then(response => console.log(response));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx(_header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    isPopupOpen: isPopupOpen,
    togglePopup: togglePopup,
    user: userInfo,
    onLogin: handleLogin,
    onRegistration: handleRegistration,
    onLogout: handleLogout,
    onAddWish: handleAddWish,
    formErorrs: formErorrs
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_6___default.a['root-container']
  }, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/layout/styles.css":
/*!******************************************!*\
  !*** ./src/components/layout/styles.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root-container": "_1SKzhY_wWe_BzvPehO_Rkx"
};

/***/ }),

/***/ "./src/requests/index.js":
/*!*******************************!*\
  !*** ./src/requests/index.js ***!
  \*******************************/
/*! exports provided: userInfoRequst, loginRequest, logoutRequest, registrationRequest, wishesRequest, wishByIdRequest, addWishRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInfoRequst", function() { return userInfoRequst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequest", function() { return loginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequest", function() { return logoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registrationRequest", function() { return registrationRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishesRequest", function() { return wishesRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishByIdRequest", function() { return wishByIdRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWishRequest", function() { return addWishRequest; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};
const userInfoRequst = req => {
  return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('https://wishlist-next.herokuapp.com/api/login', {
    headers: _objectSpread({}, headers, {
      cookie: req.headers.cookie
    }),
    withCredentials: 'include'
  });
};
const loginRequest = data => {
  return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('/api/login', data, {
    headers
  });
};
const logoutRequest = data => {
  return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('/api/logout', {
    headers,
    withCredentials: 'include'
  });
};
const registrationRequest = data => {
  return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('/api/registration', data, {
    headers
  });
};
const wishesRequest = userId => {
  return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(`https://wishlist-next.herokuapp.com/api/wishes?user=${userId}`, {
    headers
  });
};
const wishByIdRequest = id => {
  return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(`https://wishlist-next.herokuapp.com/api/wishes/${id}`, {
    headers
  });
};
const addWishRequest = data => {
  return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('/api/wishes', data, {
    Accept: 'multipart/form-data',
    'Content-Type': 'multipart/form-data'
  });
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: getUserName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserName", function() { return getUserName; });
const getUserName = user => {
  const {
    firstname,
    lastname,
    username
  } = user;

  if (firstname && lastname) {
    return `${firstname} ${lastname}`;
  }

  return username;
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map