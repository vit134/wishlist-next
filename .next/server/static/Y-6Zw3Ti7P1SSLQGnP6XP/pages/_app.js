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

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/requests/index.js + 1 modules
var requests = __webpack_require__("V5r7");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// CONCATENATED MODULE: ./src/components/header/components/login-dialog/components/content/login.js
var __jsx = external_react_default.a.createElement;


const LoginContent = ({
  onSubmit
}) => __jsx(external_react_bootstrap_["Form"], {
  onSubmit: onSubmit
}, __jsx(external_react_bootstrap_["Form"].Group, {
  controlId: "login"
}, __jsx(external_react_bootstrap_["Form"].Label, null, "\u041B\u043E\u0433\u0438\u043D"), __jsx(external_react_bootstrap_["Form"].Control, {
  type: "text",
  name: "username",
  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043B\u043E\u0433\u0438\u043D"
})), __jsx(external_react_bootstrap_["Form"].Group, {
  controlId: "password"
}, __jsx(external_react_bootstrap_["Form"].Label, null, "Password"), __jsx(external_react_bootstrap_["Form"].Control, {
  type: "password",
  name: "password",
  placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C"
})), __jsx(external_react_bootstrap_["Button"], {
  variant: "primary",
  type: "submit"
}, "\u0412\u043E\u0439\u0442\u0438"));
// CONCATENATED MODULE: ./src/components/header/components/login-dialog/components/content/registration.js
var registration_jsx = external_react_default.a.createElement;


const errorMessagesLookup = {
  UserExistsError: 'Пользователь с данным именем пользователя уже зарегистрирован',
  MissingUsernameError: 'Имя пользователя не указано'
};
const RegContent = ({
  onSubmit,
  formErorrs = {}
}) => {
  const isUsernameInvalid = formErorrs.UserExistsError || formErorrs.MissingUsernameError;
  return registration_jsx(external_react_bootstrap_["Form"], {
    onSubmit: onSubmit
  }, registration_jsx(external_react_bootstrap_["Form"].Group, {
    controlId: "login"
  }, registration_jsx(external_react_bootstrap_["Form"].Label, null, "\u041B\u043E\u0433\u0438\u043D"), registration_jsx(external_react_bootstrap_["Form"].Control, {
    isInvalid: isUsernameInvalid,
    type: "text",
    name: "username",
    placeholder: "\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
  }), registration_jsx(external_react_bootstrap_["Form"].Control.Feedback, {
    type: "invalid"
  }, errorMessagesLookup.UserExistsError || errorMessagesLookup.MissingUsernameError)), registration_jsx(external_react_bootstrap_["Form"].Group, {
    controlId: "email"
  }, registration_jsx(external_react_bootstrap_["Form"].Label, null, "E-mail"), registration_jsx(external_react_bootstrap_["Form"].Control, {
    type: "email",
    name: "email",
    placeholder: "E-mail"
  })), registration_jsx(external_react_bootstrap_["Form"].Group, {
    controlId: "password"
  }, registration_jsx(external_react_bootstrap_["Form"].Label, null, "\u041F\u0430\u0440\u043E\u043B\u044C"), registration_jsx(external_react_bootstrap_["Form"].Control, {
    type: "password",
    name: "password",
    placeholder: "Password"
  })), registration_jsx(external_react_bootstrap_["Button"], {
    variant: "primary",
    type: "submit"
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"));
};
// EXTERNAL MODULE: ./src/components/header/components/login-dialog/components/content/styles.css
var styles = __webpack_require__("MOet");
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// CONCATENATED MODULE: ./src/components/header/components/login-dialog/components/content/index.js
var content_jsx = external_react_default.a.createElement;




const TabContent = ({
  selectedtab,
  submitActions,
  formErorrs
}) => content_jsx("div", {
  className: styles_default.a.content
}, selectedtab === 'login' ? content_jsx(LoginContent, {
  onSubmit: submitActions.onLogin
}) : content_jsx(RegContent, {
  onSubmit: submitActions.onRegistration,
  formErorrs: formErorrs
}));
// EXTERNAL MODULE: ./src/components/header/components/login-dialog/styles.css
var login_dialog_styles = __webpack_require__("m9vd");
var login_dialog_styles_default = /*#__PURE__*/__webpack_require__.n(login_dialog_styles);

// CONCATENATED MODULE: ./src/components/header/components/login-dialog/index.js
var login_dialog_jsx = external_react_default.a.createElement;




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
  } = Object(external_react_["useState"])('login');
  const submitActions = {
    onLogin,
    onRegistration
  };
  return login_dialog_jsx(external_react_bootstrap_["Modal"], {
    show: true,
    onHide: onClose,
    centered: true
  }, login_dialog_jsx(external_react_bootstrap_["Modal"].Body, null, login_dialog_jsx("div", {
    className: login_dialog_styles_default.a.modal
  }, login_dialog_jsx(external_react_bootstrap_["Tabs"], {
    className: login_dialog_styles_default.a.tabs,
    defaultActiveKey: "login",
    activeKey: key,
    onSelect: k => changeTab(k)
  }, tabsLookup.map(({
    key,
    title,
    onSubmit
  }) => login_dialog_jsx(external_react_bootstrap_["Tab"], {
    key: key,
    eventKey: key,
    title: title,
    className: login_dialog_styles_default.a['tab-item']
  }, login_dialog_jsx(TabContent, {
    selectedtab: key,
    submitActions: submitActions,
    formErorrs: formErorrs
  })))))));
};
// EXTERNAL MODULE: ./src/components/add-wish-dialog/styles.css
var add_wish_dialog_styles = __webpack_require__("Tguk");
var add_wish_dialog_styles_default = /*#__PURE__*/__webpack_require__.n(add_wish_dialog_styles);

// CONCATENATED MODULE: ./src/components/add-wish-dialog/index.js
var add_wish_dialog_jsx = external_react_default.a.createElement;



const AddWishDialog = ({
  isOpen,
  onSubmit,
  onClose
}) => {
  if (!isOpen) {
    return null;
  }

  return add_wish_dialog_jsx(external_react_bootstrap_["Modal"], {
    show: true,
    onHide: onClose,
    centered: true
  }, add_wish_dialog_jsx(external_react_bootstrap_["Modal"].Body, null, add_wish_dialog_jsx("div", {
    className: add_wish_dialog_styles_default.a.modal
  }, add_wish_dialog_jsx(external_react_bootstrap_["Form"], {
    onSubmit: onSubmit
  }, add_wish_dialog_jsx(external_react_bootstrap_["Form"].Group, {
    controlId: "name"
  }, add_wish_dialog_jsx(external_react_bootstrap_["Form"].Label, null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"), add_wish_dialog_jsx(external_react_bootstrap_["Form"].Control, {
    type: "text",
    name: "name",
    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
  })), add_wish_dialog_jsx(external_react_bootstrap_["Form"].Group, {
    controlId: "link"
  }, add_wish_dialog_jsx(external_react_bootstrap_["Form"].Label, null, "\u0421\u0441\u044B\u043B\u043A\u0430"), add_wish_dialog_jsx(external_react_bootstrap_["Form"].Control, {
    type: "text",
    name: "link",
    placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430"
  })), add_wish_dialog_jsx(external_react_bootstrap_["Form"].Group, {
    controlId: "price"
  }, add_wish_dialog_jsx(external_react_bootstrap_["Form"].Label, null, "\u0426\u0435\u043D\u0430"), add_wish_dialog_jsx(external_react_bootstrap_["Form"].Control, {
    type: "number",
    name: "price",
    placeholder: "\u0426\u0435\u043D\u0430"
  })), add_wish_dialog_jsx(external_react_bootstrap_["Form"].Group, {
    controlId: "image"
  }, add_wish_dialog_jsx(external_react_bootstrap_["Form"].Label, null, "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"), add_wish_dialog_jsx(external_react_bootstrap_["Form"].Control, {
    type: "file",
    name: "image",
    placeholder: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"
  })), add_wish_dialog_jsx(external_react_bootstrap_["Button"], {
    variant: "primary",
    type: "submit"
  }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C")))));
};
// CONCATENATED MODULE: ./src/utils/index.js
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
// CONCATENATED MODULE: ./src/components/header/components/user-info/index.js
var user_info_jsx = external_react_default.a.createElement;



const UserInfo = ({
  user,
  onOpen,
  onAddWishPopupOpen,
  onLogout
}) => {
  const {
    isLogin,
    data: userInfo
  } = user;

  if (!isLogin) {
    return user_info_jsx(external_react_bootstrap_["Button"], {
      variant: "outline-light",
      onClick: onOpen
    }, "\u0412\u043E\u0439\u0442\u0438");
  }

  const userName = getUserName(userInfo);
  return user_info_jsx(external_react_bootstrap_["NavDropdown"], {
    title: userName,
    id: "user-nav"
  }, user_info_jsx(external_react_bootstrap_["NavDropdown"].Item, {
    as: "div"
  }, user_info_jsx("a", {
    onClick: onAddWishPopupOpen
  }, "\u041D\u043E\u0432\u043E\u0435 \u0436\u0435\u043B\u0430\u043D\u0438\u0435")), user_info_jsx(external_react_bootstrap_["NavDropdown"].Item, {
    as: "div"
  }, user_info_jsx("a", {
    href: "/profile"
  }, "\u041C\u043E\u0438 \u0436\u0435\u043B\u0430\u043D\u0438\u044F")), user_info_jsx(external_react_bootstrap_["NavDropdown"].Item, {
    as: "div"
  }, user_info_jsx("a", {
    href: "/profile/settings"
  }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438")), user_info_jsx(external_react_bootstrap_["NavDropdown"].Divider, null), user_info_jsx(external_react_bootstrap_["NavDropdown"].Item, {
    onClick: onLogout
  }, "\u0412\u044B\u0439\u0442\u0438"));
};
// CONCATENATED MODULE: ./src/components/header/index.js
var header_jsx = external_react_default.a.createElement;





const {
  Brand,
  Toggle,
  Collapse
} = external_react_bootstrap_["Navbar"];
const {
  Item,
  Divider
} = external_react_bootstrap_["NavDropdown"];
const {
  Link
} = external_react_bootstrap_["Nav"];
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
  } = Object(external_react_["useState"])(false);
  return header_jsx(external_react_bootstrap_["Navbar"], {
    bg: "dark",
    variant: "dark",
    expand: "sm"
  }, header_jsx(external_react_bootstrap_["Container"], null, header_jsx("a", {
    href: "/"
  }, header_jsx(Brand, null, "My Wishlist")), header_jsx(Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), header_jsx(Collapse, {
    id: "basic-navbar-nav"
  }, header_jsx(external_react_bootstrap_["Nav"], {
    className: "mr-auto"
  }, header_jsx(Link, {
    href: "#home"
  }, "Home"), header_jsx(Link, {
    href: "#link"
  }, "Link"), header_jsx(external_react_bootstrap_["NavDropdown"], {
    title: "Dropdown",
    id: "basic-nav-dropdown"
  }, header_jsx(Item, {
    href: "#action/3.1"
  }, "Action"), header_jsx(Item, {
    href: "#action/3.2"
  }, "Another action"), header_jsx(Item, {
    href: "#action/3.3"
  }, "Something"), header_jsx(Divider, null), header_jsx(Item, {
    href: "#action/3.4"
  }, "Separated link"))), header_jsx(external_react_bootstrap_["Nav"], null, header_jsx(UserInfo, {
    user: user,
    onOpen: handleShow,
    onAddWishPopupOpen: () => toggleAddWishPopup(true),
    onLogout: onLogout
  })))), header_jsx(LoginDialog, {
    isOpen: isPopupOpen,
    onLogin: onLogin,
    onRegistration: onRegistration,
    formErorrs: formErorrs,
    onClose: handleClose
  }), header_jsx(AddWishDialog, {
    isOpen: isAddWishPopupOpen,
    onClose: () => toggleAddWishPopup(false),
    onSubmit: onAddWish
  }));
};
// EXTERNAL MODULE: ./src/components/layout/styles.css
var layout_styles = __webpack_require__("nJi3");
var layout_styles_default = /*#__PURE__*/__webpack_require__.n(layout_styles);

// CONCATENATED MODULE: ./src/components/layout/layout.js


var layout_jsx = external_react_default.a.createElement;






const getFormFields = form => {
  return from_default()(form).reduce((acc, node) => {
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
  } = Object(external_react_["useState"])(user);
  const {
    0: isPopupOpen,
    1: togglePopup
  } = Object(external_react_["useState"])(false);
  const {
    0: formErorrs,
    1: setFormErrors
  } = Object(external_react_["useState"])({});

  const handleLogin = e => {
    e.preventDefault();
    const data = getFormFields(e.target);
    Object(requests["b" /* loginRequest */])(stringify_default()(data)).then(({
      data
    }) => {
      setUser(data);
      togglePopup(false);
    }).catch(e => console.warn(e));
  };

  const handleLogout = () => Object(requests["c" /* logoutRequest */])().then(() => {
    setUser({
      isLogin: false,
      data: null
    });
  });

  const handleRegistration = e => {
    e.preventDefault();
    const data = getFormFields(e.target);
    Object(requests["d" /* registrationRequest */])(data).then(({
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
    Object(requests["a" /* addWishRequest */])(data).then(response => console.log(response));
  };

  return layout_jsx(external_react_["Fragment"], null, layout_jsx(Header, {
    isPopupOpen: isPopupOpen,
    togglePopup: togglePopup,
    user: userInfo,
    onLogin: handleLogin,
    onRegistration: handleRegistration,
    onLogout: handleLogout,
    onAddWish: handleAddWish,
    formErorrs: formErorrs
  }), layout_jsx(external_react_bootstrap_["Container"], null, layout_jsx("div", {
    className: layout_styles_default.a['root-container']
  }, children)));
};

/* harmony default export */ var layout = (Layout);
// CONCATENATED MODULE: ./pages/_app.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _app_MyApp; });
var _app_jsx = external_react_default.a.createElement;





const protectedRoutes = ['/profile', '/profile/settings'];
class _app_MyApp extends app_default.a {
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
      const res = await Object(requests["e" /* userInfoRequst */])(ctx.req);
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
    return _app_jsx(app["Container"], null, _app_jsx(head_default.a, null, _app_jsx("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
      crossOrigin: "anonymous"
    })), _app_jsx(layout, {
      user: pageProps.user
    }, accessDenied ? _app_jsx("div", null, "\u0414\u043E\u0441\u0442\u0443\u043F \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D") : _app_jsx(Component, pageProps)));
  }

}

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

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

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
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
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "MOet":
/***/ (function(module, exports) {

module.exports = {
	"content": "_1cDHrCa-HAL561b9DtndFS"
};

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tguk":
/***/ (function(module, exports) {



/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "V5r7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
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
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./src/requests/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return userInfoRequst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return registrationRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return wishesRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return wishByIdRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addWishRequest; });








function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(source).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }


const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};
const userInfoRequst = req => {
  return external_axios_default.a.get('http://localhost:3000/api/login', {
    headers: _objectSpread({}, headers, {
      cookie: req.headers.cookie
    }),
    withCredentials: 'include'
  });
};
const loginRequest = data => {
  return external_axios_default.a.post('/api/login', data, {
    headers
  });
};
const logoutRequest = data => {
  return external_axios_default.a.get('/api/logout', {
    headers,
    withCredentials: 'include'
  });
};
const registrationRequest = data => {
  return external_axios_default.a.post('/api/registration', data, {
    headers
  });
};
const wishesRequest = userId => {
  return external_axios_default.a.get(`http://localhost:3000/api/wishes?user=${userId}`, {
    headers
  });
};
const wishByIdRequest = id => {
  return external_axios_default.a.get(`http://localhost:3000/api/wishes/${id}`, {
    headers
  });
};
const addWishRequest = data => {
  return external_axios_default.a.post('/api/wishes', data, {
    Accept: 'multipart/form-data',
    'Content-Type': 'multipart/form-data'
  });
};

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
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
  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

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

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "m9vd":
/***/ (function(module, exports) {

module.exports = {
	"modal": "_3MPR4lBrr1RK--sJmL4wvY",
	"tabs": "_2GBuoGCPBfE6qtMjM88TeP"
};

/***/ }),

/***/ "nJi3":
/***/ (function(module, exports) {

module.exports = {
	"root-container": "_1SKzhY_wWe_BzvPehO_Rkx"
};

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });