webpackHotUpdate_N_E("pages/zh/service",{

/***/ "./languages/zh/about.json":
false,

/***/ "./languages/zh/service.json":
/*!***********************************!*\
  !*** ./languages/zh/service.json ***!
  \***********************************/
/*! exports provided: title, description, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"服務\",\"description\":[\"卡克曼提供服務包含：軟體開發、協同開發、決策智囊、職涯諮商，所有的服務都圍繞在開發相關，當您正在尋求協時，無論是以公司、團隊，抑或是個人身分，卡克曼都會依據需求提供客製化服務，讓需求能夠得到最有效的處理。\"]}");

/***/ }),

/***/ "./pages/zh/service.js":
/*!*****************************!*\
  !*** ./pages/zh/service.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var E_Cogman_official_page_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Service */ "./components/Service.jsx");
/* harmony import */ var _languages_zh_common_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../languages/zh/common.json */ "./languages/zh/common.json");
var _languages_zh_common_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../languages/zh/common.json */ "./languages/zh/common.json", 1);
/* harmony import */ var _languages_zh_service_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../languages/zh/service.json */ "./languages/zh/service.json");
var _languages_zh_service_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../languages/zh/service.json */ "./languages/zh/service.json", 1);



var _jsxFileName = "E:\\Cogman\\official_page\\pages\\zh\\service.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Cogman_official_page_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var languages = {
  meta: _objectSpread(_objectSpread({}, _languages_zh_common_json__WEBPACK_IMPORTED_MODULE_4__), {}, {
    title: "".concat(_languages_zh_service_json__WEBPACK_IMPORTED_MODULE_5__.title, " | ").concat(_languages_zh_common_json__WEBPACK_IMPORTED_MODULE_4__.brand),
    description: _languages_zh_service_json__WEBPACK_IMPORTED_MODULE_5__.description
  }),
  basic: _languages_zh_service_json__WEBPACK_IMPORTED_MODULE_5__
};

var service = function service() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Service__WEBPACK_IMPORTED_MODULE_3__["default"], {
    languages: languages,
    lang: "zh"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 10
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (service);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvemgvc2VydmljZS5qcyJdLCJuYW1lcyI6WyJsYW5ndWFnZXMiLCJtZXRhIiwiQ09NTU9OIiwidGl0bGUiLCJTRVJWSUNFIiwiYnJhbmQiLCJkZXNjcmlwdGlvbiIsImJhc2ljIiwic2VydmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLE1BQUksa0NBQ0NDLHNEQUREO0FBRUZDLFNBQUssWUFBS0MsdURBQU8sQ0FBQ0QsS0FBYixnQkFBd0JELHNEQUFNLENBQUNHLEtBQS9CLENBRkg7QUFHRkMsZUFBVyxFQUFFRix1REFBTyxDQUFDRTtBQUhuQixJQURZO0FBTWhCQyxPQUFLLEVBQUVILHVEQUFPQTtBQU5FLENBQWxCOztBQVNBLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsc0JBQU8scUVBQUMsMkRBQUQ7QUFBUyxhQUFTLEVBQUVSLFNBQXBCO0FBQStCLFFBQUksRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUZEOztBQUllUSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy96aC9zZXJ2aWNlLjUyNDg4NjExMzMxMzFiY2JjMDBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU2VydmljZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlcnZpY2UnO1xuXG5pbXBvcnQgQ09NTU9OIGZyb20gJy4uLy4uL2xhbmd1YWdlcy96aC9jb21tb24uanNvbic7XG5pbXBvcnQgU0VSVklDRSBmcm9tICcuLi8uLi9sYW5ndWFnZXMvemgvc2VydmljZS5qc29uJztcblxuY29uc3QgbGFuZ3VhZ2VzID0ge1xuICBtZXRhOiB7XG4gICAgLi4uQ09NTU9OLFxuICAgIHRpdGxlOiBgJHtTRVJWSUNFLnRpdGxlfSB8ICR7Q09NTU9OLmJyYW5kfWAsXG4gICAgZGVzY3JpcHRpb246IFNFUlZJQ0UuZGVzY3JpcHRpb24sXG4gIH0sXG4gIGJhc2ljOiBTRVJWSUNFLFxufTtcblxuY29uc3Qgc2VydmljZSA9ICgpID0+IHtcbiAgcmV0dXJuIDxTZXJ2aWNlIGxhbmd1YWdlcz17bGFuZ3VhZ2VzfSBsYW5nPVwiemhcIiAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9