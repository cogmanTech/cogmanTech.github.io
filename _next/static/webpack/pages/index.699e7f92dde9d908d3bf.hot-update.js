webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/zh/index.js":
/*!***************************!*\
  !*** ./pages/zh/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var E_Cogman_official_page_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Home */ "./components/Home.jsx");
/* harmony import */ var _languages_zh_common_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../languages/zh/common.json */ "./languages/zh/common.json");
var _languages_zh_common_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../languages/zh/common.json */ "./languages/zh/common.json", 1);
/* harmony import */ var _languages_zh_index_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../languages/zh/index.json */ "./languages/zh/index.json");
var _languages_zh_index_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../languages/zh/index.json */ "./languages/zh/index.json", 1);



var _jsxFileName = "E:\\Cogman\\official_page\\pages\\zh\\index.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Cogman_official_page_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var languages = {
  meta: _objectSpread(_objectSpread({}, _languages_zh_common_json__WEBPACK_IMPORTED_MODULE_4__), {}, {
    title: "".concat(_languages_zh_index_json__WEBPACK_IMPORTED_MODULE_5__.title, " | ").concat(_languages_zh_common_json__WEBPACK_IMPORTED_MODULE_4__.brand),
    description: _languages_zh_index_json__WEBPACK_IMPORTED_MODULE_5__.description
  }),
  basic: _languages_zh_index_json__WEBPACK_IMPORTED_MODULE_5__
};

var Index = function Index() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {
    languages: languages
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 10
  }, _this);
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvemgvaW5kZXguanMiXSwibmFtZXMiOlsibGFuZ3VhZ2VzIiwibWV0YSIsIkNPTU1PTiIsInRpdGxlIiwiSU5ERVgiLCJicmFuZCIsImRlc2NyaXB0aW9uIiwiYmFzaWMiLCJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxNQUFJLGtDQUNDQyxzREFERDtBQUVGQyxTQUFLLFlBQUtDLHFEQUFLLENBQUNELEtBQVgsZ0JBQXNCRCxzREFBTSxDQUFDRyxLQUE3QixDQUZIO0FBR0ZDLGVBQVcsRUFBRUYscURBQUssQ0FBQ0U7QUFIakIsSUFEWTtBQU1oQkMsT0FBSyxFQUFFSCxxREFBS0E7QUFOSSxDQUFsQjs7QUFTQSxJQUFNSSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCLHNCQUFPLHFFQUFDLHdEQUFEO0FBQU0sYUFBUyxFQUFFUjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUZEOztLQUFNUSxLO0FBSVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY5OWU3ZjkyZGRlOWQ5MDhkM2JmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hvbWUnO1xuXG5pbXBvcnQgQ09NTU9OIGZyb20gJy4uLy4uL2xhbmd1YWdlcy96aC9jb21tb24uanNvbic7XG5pbXBvcnQgSU5ERVggZnJvbSAnLi4vLi4vbGFuZ3VhZ2VzL3poL2luZGV4Lmpzb24nO1xuXG5jb25zdCBsYW5ndWFnZXMgPSB7XG4gIG1ldGE6IHtcbiAgICAuLi5DT01NT04sXG4gICAgdGl0bGU6IGAke0lOREVYLnRpdGxlfSB8ICR7Q09NTU9OLmJyYW5kfWAsXG4gICAgZGVzY3JpcHRpb246IElOREVYLmRlc2NyaXB0aW9uLFxuICB9LFxuICBiYXNpYzogSU5ERVgsXG59O1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgcmV0dXJuIDxIb21lIGxhbmd1YWdlcz17bGFuZ3VhZ2VzfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==