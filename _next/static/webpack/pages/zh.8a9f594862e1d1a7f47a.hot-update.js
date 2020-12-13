webpackHotUpdate_N_E("pages/zh",{

/***/ "./modules/grid/Col.jsx":
/*!******************************!*\
  !*** ./modules/grid/Col.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var E_Cogman_official_page_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_Cogman_official_page_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "E:\\Cogman\\official_page\\modules\\grid\\Col.jsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Cogman_official_page_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/**
 * The module for clickable element.
 *
 * props = {
 *  children,
 *  className,
 *
 *  // value: 1-12
 *  col,
 *  xs,
 *  sm,
 *  md,
 *  lg,
 *  xl,
 *  xxl,
 *  colOffset,
 *  xsOffset,
 *  smOffset,
 *  mdOffset,
 *  lgOffset,
 *  xlOffset,
 *  xxlOffset,
 *
 *  // value: [true, false]
 *  colWrap,
 *  xsWrap,
 *  smWrap,
 *  mdWrap,
 *  lgWrap,
 *  xlWrap,
 *  spacing,
 * }
 *
 * default = {
 *  spacing: true
 * }
 *
 * @param {*} props
 */

var Col = function Col(props) {
  var children = props.children,
      className = props.className,
      col = props.col,
      xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl,
      colOffset = props.colOffset,
      xsOffset = props.xsOffset,
      smOffset = props.smOffset,
      mdOffset = props.mdOffset,
      lgOffset = props.lgOffset,
      xlOffset = props.xlOffset,
      colWrap = props.colWrap,
      xsWrap = props.xsWrap,
      smWrap = props.smWrap,
      mdWrap = props.mdWrap,
      lgWrap = props.lgWrap,
      xlWrap = props.xlWrap,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? true : _props$spacing,
      ColProps = Object(E_Cogman_official_page_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "col", "xs", "sm", "md", "lg", "xl", "colOffset", "xsOffset", "smOffset", "mdOffset", "lgOffset", "xlOffset", "colWrap", "xsWrap", "smWrap", "mdWrap", "lgWrap", "xlWrap", "spacing"]);

  var classNameList = [typeof col !== 'undefined' ? "col-".concat(col) : '', typeof colOffset !== 'undefined' ? "col-offset-".concat(colOffset) : '', colWrap === true ? 'col-wrap' : '', colWrap === false ? 'col-no-wrap' : '', typeof xs !== 'undefined' ? "col-xs-".concat(xs) : '', typeof xsOffset !== 'undefined' ? "col-xs-offset-".concat(xsOffset) : '', xsWrap === true ? 'col-xs-wrap' : '', xsWrap === false ? 'col-xs-no-wrap' : '', typeof sm !== 'undefined' ? "col-sm-".concat(sm) : '', typeof smOffset !== 'undefined' ? "col-sm-offset-".concat(smOffset) : '', smWrap === true ? 'col-sm-wrap' : '', smWrap === false ? 'col-sm-no-wrap' : '', typeof md !== 'undefined' ? "col-md-".concat(md) : '', typeof mdOffset !== 'undefined' ? "col-md-offset-".concat(mdOffset) : '', mdWrap === true ? 'col-md-wrap' : '', mdWrap === false ? 'col-md-no-wrap' : '', typeof lg !== 'undefined' ? "col-lg-".concat(lg) : '', typeof lgOffset !== 'undefined' ? "col-lg-offset-".concat(lgOffset) : '', lgWrap === true ? 'col-lg-wrap' : '', lgWrap === false ? 'col-lg-no-wrap' : '', typeof xl !== 'undefined' ? "col-xl-".concat(xl) : '', typeof xlOffset !== 'undefined' ? "col-xl-offset-".concat(xlOffset) : '', xlWrap === true ? 'col-xl-wrap' : '', xlWrap === false ? 'col-xl-no-wrap' : '', typeof spacing !== 'undefined' && spacing ? "col-spacing" : ''];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('cogman-grid_col', 'row_col', className, classNameList)
  }, ColProps), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 5
  }, _this);
};

_c = Col;
/* harmony default export */ __webpack_exports__["default"] = (Col);

var _c;

$RefreshReg$(_c, "Col");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9ncmlkL0NvbC5qc3giXSwibmFtZXMiOlsiQ29sIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNvbCIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJjb2xPZmZzZXQiLCJ4c09mZnNldCIsInNtT2Zmc2V0IiwibWRPZmZzZXQiLCJsZ09mZnNldCIsInhsT2Zmc2V0IiwiY29sV3JhcCIsInhzV3JhcCIsInNtV3JhcCIsIm1kV3JhcCIsImxnV3JhcCIsInhsV3JhcCIsInNwYWNpbmciLCJDb2xQcm9wcyIsImNsYXNzTmFtZUxpc3QiLCJjbGFzc25hbWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BRW5CQyxRQUZtQixHQXdCakJELEtBeEJpQixDQUVuQkMsUUFGbUI7QUFBQSxNQUduQkMsU0FIbUIsR0F3QmpCRixLQXhCaUIsQ0FHbkJFLFNBSG1CO0FBQUEsTUFJbkJDLEdBSm1CLEdBd0JqQkgsS0F4QmlCLENBSW5CRyxHQUptQjtBQUFBLE1BS25CQyxFQUxtQixHQXdCakJKLEtBeEJpQixDQUtuQkksRUFMbUI7QUFBQSxNQU1uQkMsRUFObUIsR0F3QmpCTCxLQXhCaUIsQ0FNbkJLLEVBTm1CO0FBQUEsTUFPbkJDLEVBUG1CLEdBd0JqQk4sS0F4QmlCLENBT25CTSxFQVBtQjtBQUFBLE1BUW5CQyxF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RUFwQmpCLEVBcUJwQixPQUFPWCxFQUFQLEtBQWMsV0FBZCxvQkFBc0NBLEVBQXRDLElBQTZDLEVBckJ6QixFQXNCcEIsT0FBT00sUUFBUCxLQUFvQixXQUFwQiwyQkFBbURBLFFBQW5ELElBQWdFLEVBdEI1QyxFQXVCcEJNLE1BQU0sS0FBSyxJQUFYLEdBQWtCLGFBQWxCLEdBQWtDLEVBdkJkLEVBd0JwQkEsTUFBTSxLQUFLLEtBQVgsR0FBbUIsZ0JBQW5CLEdBQXFDLEVBeEJqQixFQXlCcEIsT0FBT0MsT0FBUCxLQUFtQixXQUFuQixJQUFrQ0EsT0FBbEMsbUJBQTRELEVBekJ4QyxDQUF0QjtBQTRCQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUcsaURBQVUsQ0FBQyxpQkFBRCxFQUFvQixTQUFwQixFQUErQnRCLFNBQS9CLEVBQTBDcUIsYUFBMUM7QUFBMUIsS0FBd0ZELFFBQXhGO0FBQUEsY0FDR3JCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0ExREQ7O0tBQU1GLEc7QUE0RFNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3poLjhhOWY1OTQ4NjJlMWQxYTdmNDdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbi8qKlxuICogVGhlIG1vZHVsZSBmb3IgY2xpY2thYmxlIGVsZW1lbnQuXG4gKlxuICogcHJvcHMgPSB7XG4gKiAgY2hpbGRyZW4sXG4gKiAgY2xhc3NOYW1lLFxuICpcbiAqICAvLyB2YWx1ZTogMS0xMlxuICogIGNvbCxcbiAqICB4cyxcbiAqICBzbSxcbiAqICBtZCxcbiAqICBsZyxcbiAqICB4bCxcbiAqICB4eGwsXG4gKiAgY29sT2Zmc2V0LFxuICogIHhzT2Zmc2V0LFxuICogIHNtT2Zmc2V0LFxuICogIG1kT2Zmc2V0LFxuICogIGxnT2Zmc2V0LFxuICogIHhsT2Zmc2V0LFxuICogIHh4bE9mZnNldCxcbiAqXG4gKiAgLy8gdmFsdWU6IFt0cnVlLCBmYWxzZV1cbiAqICBjb2xXcmFwLFxuICogIHhzV3JhcCxcbiAqICBzbVdyYXAsXG4gKiAgbWRXcmFwLFxuICogIGxnV3JhcCxcbiAqICB4bFdyYXAsXG4gKiAgc3BhY2luZyxcbiAqIH1cbiAqXG4gKiBkZWZhdWx0ID0ge1xuICogIHNwYWNpbmc6IHRydWVcbiAqIH1cbiAqXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKi9cblxuY29uc3QgQ29sID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBjbGFzc05hbWUsXG4gICAgY29sLFxuICAgIHhzLFxuICAgIHNtLFxuICAgIG1kLFxuICAgIGxnLFxuICAgIHhsLFxuICAgIGNvbE9mZnNldCxcbiAgICB4c09mZnNldCxcbiAgICBzbU9mZnNldCxcbiAgICBtZE9mZnNldCxcbiAgICBsZ09mZnNldCxcbiAgICB4bE9mZnNldCxcbiAgICBjb2xXcmFwLFxuICAgIHhzV3JhcCxcbiAgICBzbVdyYXAsXG4gICAgbWRXcmFwLFxuICAgIGxnV3JhcCxcbiAgICB4bFdyYXAsXG4gICAgc3BhY2luZyA9IHRydWUsXG4gICAgLi4uQ29sUHJvcHNcbiAgfSA9IHByb3BzO1xuICBjb25zdCBjbGFzc05hbWVMaXN0ID0gW1xuICAgIHR5cGVvZiBjb2wgIT09ICd1bmRlZmluZWQnID8gYGNvbC0ke2NvbH1gIDogJycsXG4gICAgdHlwZW9mIGNvbE9mZnNldCAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLW9mZnNldC0ke2NvbE9mZnNldH1gIDogJycsXG4gICAgY29sV3JhcCA9PT0gdHJ1ZSA/ICdjb2wtd3JhcCcgOiAnJyxcbiAgICBjb2xXcmFwID09PSBmYWxzZSA/ICdjb2wtbm8td3JhcCc6ICcnLFxuICAgIHR5cGVvZiB4cyAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLXhzLSR7eHN9YCA6ICcnLFxuICAgIHR5cGVvZiB4c09mZnNldCAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLXhzLW9mZnNldC0ke3hzT2Zmc2V0fWAgOiAnJyxcbiAgICB4c1dyYXAgPT09IHRydWUgPyAnY29sLXhzLXdyYXAnIDogJycsXG4gICAgeHNXcmFwID09PSBmYWxzZSA/ICdjb2wteHMtbm8td3JhcCc6ICcnLFxuICAgIHR5cGVvZiBzbSAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLXNtLSR7c219YCA6ICcnLFxuICAgIHR5cGVvZiBzbU9mZnNldCAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLXNtLW9mZnNldC0ke3NtT2Zmc2V0fWAgOiAnJyxcbiAgICBzbVdyYXAgPT09IHRydWUgPyAnY29sLXNtLXdyYXAnIDogJycsXG4gICAgc21XcmFwID09PSBmYWxzZSA/ICdjb2wtc20tbm8td3JhcCc6ICcnLFxuICAgIHR5cGVvZiBtZCAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLW1kLSR7bWR9YCA6ICcnLFxuICAgIHR5cGVvZiBtZE9mZnNldCAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLW1kLW9mZnNldC0ke21kT2Zmc2V0fWAgOiAnJyxcbiAgICBtZFdyYXAgPT09IHRydWUgPyAnY29sLW1kLXdyYXAnIDogJycsXG4gICAgbWRXcmFwID09PSBmYWxzZSA/ICdjb2wtbWQtbm8td3JhcCc6ICcnLFxuICAgIHR5cGVvZiBsZyAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLWxnLSR7bGd9YCA6ICcnLFxuICAgIHR5cGVvZiBsZ09mZnNldCAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLWxnLW9mZnNldC0ke2xnT2Zmc2V0fWAgOiAnJyxcbiAgICBsZ1dyYXAgPT09IHRydWUgPyAnY29sLWxnLXdyYXAnIDogJycsXG4gICAgbGdXcmFwID09PSBmYWxzZSA/ICdjb2wtbGctbm8td3JhcCc6ICcnLFxuICAgIHR5cGVvZiB4bCAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLXhsLSR7eGx9YCA6ICcnLFxuICAgIHR5cGVvZiB4bE9mZnNldCAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLXhsLW9mZnNldC0ke3hsT2Zmc2V0fWAgOiAnJyxcbiAgICB4bFdyYXAgPT09IHRydWUgPyAnY29sLXhsLXdyYXAnIDogJycsXG4gICAgeGxXcmFwID09PSBmYWxzZSA/ICdjb2wteGwtbm8td3JhcCc6ICcnLFxuICAgIHR5cGVvZiBzcGFjaW5nICE9PSAndW5kZWZpbmVkJyAmJiBzcGFjaW5nID8gYGNvbC1zcGFjaW5nYCA6ICcnLFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2NvZ21hbi1ncmlkX2NvbCcsICdyb3dfY29sJywgY2xhc3NOYW1lLCBjbGFzc05hbWVMaXN0KX0gey4uLkNvbFByb3BzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=