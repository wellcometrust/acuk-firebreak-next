webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fwww%2Fsites%2Ffirebreak-nextjs%2Fsrc%2Fpages%2F_error.tsx!./":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fwww%2Fsites%2Ffirebreak-nextjs%2Fsrc%2Fpages%2F_error.tsx ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var mod = __webpack_require__(/*! ./src/pages/_error.tsx */ "./src/pages/_error.tsx")
      if(true) {
        module.hot.accept(/*! ./src/pages/_error.tsx */ "./src/pages/_error.tsx", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./src/pages/_error.tsx */ "./src/pages/_error.tsx")
          next.router.update("/_error", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/error.js":
/*!************************************!*\
  !*** ./node_modules/next/error.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_error */ "./node_modules/next/dist/pages/_error.js")


/***/ }),

/***/ "./src/pages/_error.tsx":
/*!******************************!*\
  !*** ./src/pages/_error.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (next_error__WEBPACK_IMPORTED_MODULE_0___default.a);

next_error__WEBPACK_IMPORTED_MODULE_0___default.a.getInitialProps = function (_ref) {
  var res = _ref.res,
      err = _ref.err,
      asPath = _ref.asPath;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  /**
   * Handle errors with trailing slash in URL.
   *
   * This generally happens if you navigate to a page with a trailing slash,
   * and then force a hard refresh on the page.
   *
   * @see https://github.com/zeit/next.js/issues/5214#issuecomment-564724632
   */

  if (statusCode && statusCode === 404) {
    if (asPath.match(/\/$/)) {
      var withoutTrailingSlash = asPath.substr(0, asPath.length - 1);

      if (res) {
        res.writeHead(302, {
          Location: withoutTrailingSlash
        });
        res.end();
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(withoutTrailingSlash);
      }
    }
  }

  return {
    statusCode: statusCode
  };
};

/***/ }),

/***/ 2:
/*!***********************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2Fwww%2Fsites%2Ffirebreak-nextjs%2Fsrc%2Fpages%2F_error.tsx ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2Fwww%2Fsites%2Ffirebreak-nextjs%2Fsrc%2Fpages%2F_error.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fwww%2Fsites%2Ffirebreak-nextjs%2Fsrc%2Fpages%2F_error.tsx!./");


/***/ })

})
//# sourceMappingURL=_error.js.7f98591b3cc86f1dd0bb.hot-update.js.map