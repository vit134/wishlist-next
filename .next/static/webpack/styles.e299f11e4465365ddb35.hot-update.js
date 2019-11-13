webpackHotUpdate("styles",{

/***/ "./src/components/image/styles.css":
/*!*****************************************!*\
  !*** ./src/components/image/styles.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"image":"BQO4hnkPVbjCk_oAyPspC","wrapper":"ku8CbOhTjHsXQCL8vkHbH","rounded":"_3Bz7aLP5PKEgfk_xW-bPfg"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1573631349284");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.e299f11e4465365ddb35.hot-update.js.map