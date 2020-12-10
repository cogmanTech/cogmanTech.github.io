webpackHotUpdate_N_E("pages/en",{

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
          className: "section_container text-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_imgix__WEBPACK_IMPORTED_MODULE_2__["default"], {
            src: "/textBrand-".concat(lang, ".png"),
            alt: "brand",
            height: 96
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "landing_text",
            children: languages.basic.landing
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "container_title",
            children: languages.basic.introduction.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, _this), languages.basic.description.map(function (text) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "container_descrption",
              children: text
            }, text, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 17
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lLmpzeCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJsYW5nIiwibGFuZ3VhZ2VzIiwiYmFzaWMiLCJsYW5kaW5nIiwiaW50cm9kdWN0aW9uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1hcCIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDZEMsSUFEYyxHQUNNRCxLQUROLENBQ2RDLElBRGM7QUFBQSxNQUNSQyxTQURRLEdBQ01GLEtBRE4sQ0FDUkUsU0FEUTtBQUV0QixzQkFDRSxxRUFBQyx3REFBRDtBQUFRLFFBQUksRUFBRUQsSUFBZDtBQUFvQixhQUFTLEVBQUVDLFNBQS9CO0FBQUEsMkJBQ0U7QUFBSyxRQUFFLEVBQUMsTUFBUjtBQUFlLGVBQVMsRUFBQyxNQUF6QjtBQUFBLDhCQUNFO0FBQVMsaUJBQVMsRUFBQyw4QkFBbkI7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsK0JBQWY7QUFBQSxrQ0FDRSxxRUFBQyxtREFBRDtBQUFPLGVBQUcsdUJBQWdCRCxJQUFoQixTQUFWO0FBQXNDLGVBQUcsRUFBQyxPQUExQztBQUFrRCxrQkFBTSxFQUFFO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFHLHFCQUFTLEVBQUMsY0FBYjtBQUFBLHNCQUE2QkMsU0FBUyxDQUFDQyxLQUFWLENBQWdCQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FO0FBQVMsaUJBQVMsRUFBQyxtQ0FBbkI7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsbUJBQWY7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUMsaUJBQWQ7QUFBQSxzQkFBaUNGLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQkUsWUFBaEIsQ0FBNkJDO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFR0osU0FBUyxDQUFDQyxLQUFWLENBQWdCSSxXQUFoQixDQUE0QkMsR0FBNUIsQ0FBZ0MsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pDLGdDQUNFO0FBQUcsdUJBQVMsRUFBQyxzQkFBYjtBQUFBLHdCQUNHQTtBQURILGVBQXlDQSxJQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBS0QsV0FOQSxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3QkQsQ0ExQkQ7O0tBQU1WLEk7QUE0QlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VuLjI2NjdkN2RkNmVmYmVjYmViM2U1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltZ2l4IGZyb20gJ3JlYWN0LWltZ2l4JztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9tb2R1bGVzL2xheW91dC8nO1xuXG5jb25zdCBIb21lID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbGFuZywgbGFuZ3VhZ2VzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGxhbmc9e2xhbmd9IGxhbmd1YWdlcz17bGFuZ3VhZ2VzfT5cbiAgICAgIDxkaXYgaWQ9XCJob21lXCIgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdlX3NlY3Rpb24gc2VjdGlvbi1sYW5kaW5nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX2NvbnRhaW5lciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPEltZ2l4IHNyYz17YC90ZXh0QnJhbmQtJHtsYW5nfS5wbmdgfSBhbHQ9XCJicmFuZFwiIGhlaWdodD17OTZ9IC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYW5kaW5nX3RleHRcIj57bGFuZ3VhZ2VzLmJhc2ljLmxhbmRpbmd9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2Vfc2VjdGlvbiBzZWN0aW9uLWludHJvZHVjdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb250YWluZXJfdGl0bGVcIj57bGFuZ3VhZ2VzLmJhc2ljLmludHJvZHVjdGlvbi50aXRsZX08L2gxPlxuICAgICAgICAgICAge2xhbmd1YWdlcy5iYXNpYy5kZXNjcmlwdGlvbi5tYXAoKHRleHQpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250YWluZXJfZGVzY3JwdGlvblwiIGtleT17dGV4dH0+XG4gICAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==