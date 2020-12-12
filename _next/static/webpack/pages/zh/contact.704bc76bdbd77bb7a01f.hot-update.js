webpackHotUpdate_N_E("pages/zh/contact",{

/***/ "./assets/definitions/routes.js":
/*!**************************************!*\
  !*** ./assets/definitions/routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var ROUTES = [{
  index: 'home',
  pathname: '/'
}, {
  index: 'about',
  pathname: '/about'
}, {
  index: 'service',
  pathname: '/servicc'
}, {
  index: 'contact',
  pathname: '/contact'
}];
/* harmony default export */ __webpack_exports__["default"] = (ROUTES);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./modules/layout/Layout.jsx":
/*!***********************************!*\
  !*** ./modules/layout/Layout.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_definitions_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/definitions/languages */ "./assets/definitions/languages.js");
/* harmony import */ var _assets_definitions_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/definitions/routes */ "./assets/definitions/routes.js");
/* harmony import */ var _Helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Helmet */ "./modules/layout/Helmet.jsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ "./modules/layout/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ "./modules/layout/Footer.jsx");


var _jsxFileName = "E:\\Cogman\\official_page\\modules\\layout\\Layout.jsx",
    _this = undefined;








var Layout = function Layout(props) {
  var children = props.children,
      _props$lang = props.lang,
      lang = _props$lang === void 0 ? 'zh' : _props$lang,
      _props$languages = props.languages,
      languages = _props$languages === void 0 ? {} : _props$languages;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "cogman-layout",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Helmet__WEBPACK_IMPORTED_MODULE_4__["default"], {
      lang: lang,
      metaData: languages.meta
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
      lang: lang,
      metaData: languages.meta,
      langList: _assets_definitions_languages__WEBPACK_IMPORTED_MODULE_2__["default"],
      routeList: _assets_definitions_routes__WEBPACK_IMPORTED_MODULE_3__["default"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      copyright: languages.meta.copyright
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL2RlZmluaXRpb25zL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9sYXlvdXQvTGF5b3V0LmpzeCJdLCJuYW1lcyI6WyJST1VURVMiLCJpbmRleCIsInBhdGhuYW1lIiwiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiIsImxhbmciLCJsYW5ndWFnZXMiLCJtZXRhIiwiTEFOR1VBR0VTIiwiY29weXJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQSxrREFBTUEsTUFBTSxHQUFHLENBQ2I7QUFBRUMsT0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFVBQVEsRUFBRTtBQUEzQixDQURhLEVBRWI7QUFBRUQsT0FBSyxFQUFFLE9BQVQ7QUFBa0JDLFVBQVEsRUFBRTtBQUE1QixDQUZhLEVBR2I7QUFBRUQsT0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFVBQVEsRUFBRTtBQUE5QixDQUhhLEVBSWI7QUFBRUQsT0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFVBQVEsRUFBRTtBQUE5QixDQUphLENBQWY7QUFPZUYscUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNoQkMsUUFEZ0IsR0FDMEJELEtBRDFCLENBQ2hCQyxRQURnQjtBQUFBLG9CQUMwQkQsS0FEMUIsQ0FDTkUsSUFETTtBQUFBLE1BQ05BLElBRE0sNEJBQ0MsSUFERDtBQUFBLHlCQUMwQkYsS0FEMUIsQ0FDT0csU0FEUDtBQUFBLE1BQ09BLFNBRFAsaUNBQ21CLEVBRG5CO0FBRXhCLHNCQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQSw0QkFDRSxxRUFBQywrQ0FBRDtBQUFRLFVBQUksRUFBRUQsSUFBZDtBQUFvQixjQUFRLEVBQUVDLFNBQVMsQ0FBQ0M7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsK0NBQUQ7QUFBUSxVQUFJLEVBQUVGLElBQWQ7QUFBb0IsY0FBUSxFQUFFQyxTQUFTLENBQUNDLElBQXhDO0FBQThDLGNBQVEsRUFBRUMscUVBQXhEO0FBQW1FLGVBQVMsRUFBRVQsa0VBQU1BO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUEsZ0JBQU9LO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUUscUVBQUMsK0NBQUQ7QUFBUSxlQUFTLEVBQUVFLFNBQVMsQ0FBQ0MsSUFBVixDQUFlRTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQVZEOztLQUFNUCxNO0FBWVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3poL2NvbnRhY3QuNzA0YmM3NmJkYmQ3N2JiN2EwMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJPVVRFUyA9IFtcclxuICB7IGluZGV4OiAnaG9tZScsIHBhdGhuYW1lOiAnLycgfSxcclxuICB7IGluZGV4OiAnYWJvdXQnLCBwYXRobmFtZTogJy9hYm91dCcgfSxcclxuICB7IGluZGV4OiAnc2VydmljZScsIHBhdGhuYW1lOiAnL3NlcnZpY2MnIH0sXHJcbiAgeyBpbmRleDogJ2NvbnRhY3QnLCBwYXRobmFtZTogJy9jb250YWN0JyB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUk9VVEVTO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTEFOR1VBR0VTIGZyb20gJy4uLy4uL2Fzc2V0cy9kZWZpbml0aW9ucy9sYW5ndWFnZXMnO1xuaW1wb3J0IFJPVVRFUyBmcm9tICcuLi8uLi9hc3NldHMvZGVmaW5pdGlvbnMvcm91dGVzJztcblxuaW1wb3J0IEhlbG1ldCBmcm9tICcuL0hlbG1ldCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgbGFuZyA9ICd6aCcsIGxhbmd1YWdlcyA9IHt9IH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZ21hbi1sYXlvdXRcIj5cbiAgICAgIDxIZWxtZXQgbGFuZz17bGFuZ30gbWV0YURhdGE9e2xhbmd1YWdlcy5tZXRhfSAvPlxuICAgICAgPEhlYWRlciBsYW5nPXtsYW5nfSBtZXRhRGF0YT17bGFuZ3VhZ2VzLm1ldGF9IGxhbmdMaXN0PXtMQU5HVUFHRVN9IHJvdXRlTGlzdD17Uk9VVEVTfSAvPlxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDxGb290ZXIgY29weXJpZ2h0PXtsYW5ndWFnZXMubWV0YS5jb3B5cmlnaHR9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9