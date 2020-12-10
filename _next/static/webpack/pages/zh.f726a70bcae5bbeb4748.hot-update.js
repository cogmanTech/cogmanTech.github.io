webpackHotUpdate_N_E("pages/zh",{

/***/ "./components/Home.jsx":
/*!*****************************!*\
  !*** ./components/Home.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_imgix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-imgix */ "./node_modules/react-imgix/es/index.js");
/* harmony import */ var _modules_layout___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/layout/ */ "./modules/layout/index.js");


var _jsxFileName = "E:\\Cogman\\official_page\\components\\Home.jsx",
    _this = undefined;





var Home = function Home(props) {
  var lang = props.lang,
      languages = props.languages;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_layout___WEBPACK_IMPORTED_MODULE_3__["default"], {
    lang: lang,
    languages: languages,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "home",
      className: "page",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "page_section section-landing",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "section_container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_imgix__WEBPACK_IMPORTED_MODULE_2__["default"], {
            src: "/textBrand-".concat(lang, ".png"),
            alt: "brand",
            height: 96
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "landing_text",
            children: languages.basic.landing
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "page_section section-introduction",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "section_container",
          children: languages.basic.description.map(function (text) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: text
            }, text, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 20
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lLmpzeCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJsYW5nIiwibGFuZ3VhZ2VzIiwiYmFzaWMiLCJsYW5kaW5nIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ2RDLElBRGMsR0FDTUQsS0FETixDQUNkQyxJQURjO0FBQUEsTUFDUkMsU0FEUSxHQUNNRixLQUROLENBQ1JFLFNBRFE7QUFFdEIsc0JBQ0UscUVBQUMsd0RBQUQ7QUFBUSxRQUFJLEVBQUVELElBQWQ7QUFBb0IsYUFBUyxFQUFFQyxTQUEvQjtBQUFBLDJCQUNFO0FBQUssUUFBRSxFQUFDLE1BQVI7QUFBZSxlQUFTLEVBQUMsTUFBekI7QUFBQSw4QkFDRTtBQUFTLGlCQUFTLEVBQUMsOEJBQW5CO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLG1CQUFmO0FBQUEsa0NBQ0EscUVBQUMsbURBQUQ7QUFBTyxlQUFHLHVCQUFnQkQsSUFBaEIsU0FBVjtBQUFzQyxlQUFHLEVBQUMsT0FBMUM7QUFBa0Qsa0JBQU0sRUFBRTtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBRUE7QUFBRyxxQkFBUyxFQUFDLGNBQWI7QUFBQSxzQkFBNkJDLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQkM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFPRTtBQUFTLGlCQUFTLEVBQUMsbUNBQW5CO0FBQUEsK0JBQ0E7QUFBSyxtQkFBUyxFQUFDLG1CQUFmO0FBQUEsb0JBQ0dGLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQkUsV0FBaEIsQ0FBNEJDLEdBQTVCLENBQWdDLFVBQUNDLElBQUQsRUFBVTtBQUN6QyxnQ0FBTztBQUFBLHdCQUFlQTtBQUFmLGVBQVFBLElBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUNELFdBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQXJCRDs7S0FBTVIsSTtBQXVCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvemguZjcyNmE3MGJjYWU1YmJlYjQ3NDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1naXggZnJvbSAncmVhY3QtaW1naXgnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL21vZHVsZXMvbGF5b3V0Lyc7XG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBsYW5nLCBsYW5ndWFnZXMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgbGFuZz17bGFuZ30gbGFuZ3VhZ2VzPXtsYW5ndWFnZXN9PlxuICAgICAgPGRpdiBpZD1cImhvbWVcIiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2Vfc2VjdGlvbiBzZWN0aW9uLWxhbmRpbmdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fY29udGFpbmVyXCI+XG4gICAgICAgICAgPEltZ2l4IHNyYz17YC90ZXh0QnJhbmQtJHtsYW5nfS5wbmdgfSBhbHQ9XCJicmFuZFwiIGhlaWdodD17OTZ9IC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFuZGluZ190ZXh0XCI+e2xhbmd1YWdlcy5iYXNpYy5sYW5kaW5nfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdlX3NlY3Rpb24gc2VjdGlvbi1pbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX2NvbnRhaW5lclwiPlxuICAgICAgICAgIHtsYW5ndWFnZXMuYmFzaWMuZGVzY3JpcHRpb24ubWFwKCh0ZXh0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPHAga2V5PXt0ZXh0fT57dGV4dH08L3A+O1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9