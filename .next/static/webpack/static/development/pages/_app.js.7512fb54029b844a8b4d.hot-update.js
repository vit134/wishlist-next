webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/header/components/user-info/index.js":
/*!*************************************************************!*\
  !*** ./src/components/header/components/user-info/index.js ***!
  \*************************************************************/
/*! exports provided: UserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils */ "./src/utils/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var UserInfo = function UserInfo(_ref) {
  var _ref$user = _ref.user,
      user = _ref$user === void 0 ? {} : _ref$user,
      onOpen = _ref.onOpen,
      onAddWishPopupOpen = _ref.onAddWishPopupOpen,
      onLogout = _ref.onLogout;
  var isLogin = user.isLogin,
      userInfo = user.data;

  if (!isLogin) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "outline-light",
      onClick: onOpen
    }, "\u0412\u043E\u0439\u0442\u0438");
  }

  var userName = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getUserName"])(userInfo);
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"], {
    title: userName,
    id: "user-nav"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
    as: "div"
  }, __jsx("a", {
    onClick: onAddWishPopupOpen
  }, "\u041D\u043E\u0432\u043E\u0435 \u0436\u0435\u043B\u0430\u043D\u0438\u0435")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
    as: "div"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("a", {
    href: "/profile"
  }, "\u041C\u043E\u0438 \u0436\u0435\u043B\u0430\u043D\u0438\u044F"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
    as: "div"
  }, __jsx("a", {
    href: "/profile/settings"
  }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Divider, null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
    onClick: onLogout
  }, "\u0412\u044B\u0439\u0442\u0438"));
};

/***/ })

})
//# sourceMappingURL=_app.js.7512fb54029b844a8b4d.hot-update.js.map