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

  var classNameList = [typeof col !== 'undefined' ? "col-".concat(col) : '', typeof colOffset !== 'undefined' ? "col-offset-".concat(colOffset) : '', typeof colWrap !== 'undefined' && colWrap ? 'col-wrap' : 'col-no-wrap', typeof xs !== 'undefined' ? "col-xs-".concat(xs) : '', typeof xsOffset !== 'undefined' ? "col-xs-offset-".concat(xsOffset) : '', typeof xsWrap !== 'undefined' && xsWrap ? 'col-xs-wrap' : 'col-xs-no-wrap', typeof sm !== 'undefined' ? "col-sm-".concat(sm) : '', typeof smOffset !== 'undefined' ? "col-sm-offset-".concat(smOffset) : '', typeof smWrap !== 'undefined' && smWrap ? 'col-sm-wrap' : 'col-sm-no-wrap', typeof md !== 'undefined' ? "col-md-".concat(md) : '', typeof mdOffset !== 'undefined' ? "col-md-offset-".concat(mdOffset) : '', typeof mdWrap !== 'undefined' && mdWrap ? 'col-md-wrap' : 'col-md-no-wrap', typeof lg !== 'undefined' ? "col-lg-".concat(lg) : '', typeof lgOffset !== 'undefined' ? "col-lg-offset-".concat(lgOffset) : '', typeof lgWrap !== 'undefined' && lgWrap ? 'col-lg-wrap' : 'col-lg-no-wrap', typeof xl !== 'undefined' ? "col-xl-".concat(xl) : '', typeof xlOffset !== 'undefined' ? "col-xl-offset-".concat(xlOffset) : '', typeof xlWrap !== 'undefined' && xlWrap ? 'col-xl-wrap' : 'col-xl-no-wrap', typeof spacing !== 'undefined' && spacing ? "col-spacing" : ''];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('cogman-grid_col', 'row_col', className, classNameList)
  }, ColProps), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9ncmlkL0NvbC5qc3giXSwibmFtZXMiOlsiQ29sIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNvbCIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJjb2xPZmZzZXQiLCJ4c09mZnNldCIsInNtT2Zmc2V0IiwibWRPZmZzZXQiLCJsZ09mZnNldCIsInhsT2Zmc2V0IiwiY29sV3JhcCIsInhzV3JhcCIsInNtV3JhcCIsIm1kV3JhcCIsImxnV3JhcCIsInhsV3JhcCIsInNwYWNpbmciLCJDb2xQcm9wcyIsImNsYXNzTmFtZUxpc3QiLCJjbGFzc25hbWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BRW5CQyxRQUZtQixHQXdCakJELEtBeEJpQixDQUVuQkMsUUFGbUI7QUFBQSxNQUduQkMsU0FIbUIsR0F3QmpCRixLQXhCaUIsQ0FHbkJFLFNBSG1CO0FBQUEsTUFJbkJDLEdBSm1CLEdBd0JqQkgsS0F4QmlCLENBSW5CRyxHQUptQjtBQUFBLE1BS25CQyxFQUxtQixHQXdCakJKLEtBeEJpQixDQUtuQkksRUFMbUI7QUFBQSxNQU1uQkMsRUFObUIsR0F3QmpCTCxLQXhCaUIsQ0FNbkJLLEVBTm1CO0FBQUEsTUFPbkJDLEVBUG1CLEdBd0JqQk4sS0F4QmlCLENBT25CTSxFQVBtQjtBQUFBLE1BUW5CQyxF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QVAsS0FBa0IsV0FBbEIsSUFBaUNBLE1BQWpDLEdBQTBDLGFBQTFDLEdBQTBELGdCQWxCdEMsRUFtQnBCLE9BQU9DLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0NBLE9BQWxDLG1CQUE0RCxFQW5CeEMsQ0FBdEI7QUFzQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVHLGlEQUFVLENBQUMsaUJBQUQsRUFBb0IsU0FBcEIsRUFBK0J0QixTQUEvQixFQUEwQ3FCLGFBQTFDO0FBQTFCLEtBQXdGRCxRQUF4RjtBQUFBLGNBQ0dyQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBcEREOztLQUFNRixHO0FBc0RTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy96aC4xNGFhOTFjYjk3MGZhMjc0OGUwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vKipcbiAqIFRoZSBtb2R1bGUgZm9yIGNsaWNrYWJsZSBlbGVtZW50LlxuICpcbiAqIHByb3BzID0ge1xuICogIGNoaWxkcmVuLFxuICogIGNsYXNzTmFtZSxcbiAqXG4gKiAgLy8gdmFsdWU6IDEtMTJcbiAqICBjb2wsXG4gKiAgeHMsXG4gKiAgc20sXG4gKiAgbWQsXG4gKiAgbGcsXG4gKiAgeGwsXG4gKiAgeHhsLFxuICogIGNvbE9mZnNldCxcbiAqICB4c09mZnNldCxcbiAqICBzbU9mZnNldCxcbiAqICBtZE9mZnNldCxcbiAqICBsZ09mZnNldCxcbiAqICB4bE9mZnNldCxcbiAqICB4eGxPZmZzZXQsXG4gKlxuICogIC8vIHZhbHVlOiBbdHJ1ZSwgZmFsc2VdXG4gKiAgY29sV3JhcCxcbiAqICB4c1dyYXAsXG4gKiAgc21XcmFwLFxuICogIG1kV3JhcCxcbiAqICBsZ1dyYXAsXG4gKiAgeGxXcmFwLFxuICogIHNwYWNpbmcsXG4gKiB9XG4gKlxuICogZGVmYXVsdCA9IHtcbiAqICBzcGFjaW5nOiB0cnVlXG4gKiB9XG4gKlxuICogQHBhcmFtIHsqfSBwcm9wc1xuICovXG5cbmNvbnN0IENvbCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sXG4gICAgY2xhc3NOYW1lLFxuICAgIGNvbCxcbiAgICB4cyxcbiAgICBzbSxcbiAgICBtZCxcbiAgICBsZyxcbiAgICB4bCxcbiAgICBjb2xPZmZzZXQsXG4gICAgeHNPZmZzZXQsXG4gICAgc21PZmZzZXQsXG4gICAgbWRPZmZzZXQsXG4gICAgbGdPZmZzZXQsXG4gICAgeGxPZmZzZXQsXG4gICAgY29sV3JhcCxcbiAgICB4c1dyYXAsXG4gICAgc21XcmFwLFxuICAgIG1kV3JhcCxcbiAgICBsZ1dyYXAsXG4gICAgeGxXcmFwLFxuICAgIHNwYWNpbmcgPSB0cnVlLFxuICAgIC4uLkNvbFByb3BzXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgY2xhc3NOYW1lTGlzdCA9IFtcbiAgICB0eXBlb2YgY29sICE9PSAndW5kZWZpbmVkJyA/IGBjb2wtJHtjb2x9YCA6ICcnLFxuICAgIHR5cGVvZiBjb2xPZmZzZXQgIT09ICd1bmRlZmluZWQnID8gYGNvbC1vZmZzZXQtJHtjb2xPZmZzZXR9YCA6ICcnLFxuICAgIHR5cGVvZiBjb2xXcmFwICE9PSAndW5kZWZpbmVkJyAmJiBjb2xXcmFwID8gJ2NvbC13cmFwJyA6ICdjb2wtbm8td3JhcCcsXG4gICAgdHlwZW9mIHhzICE9PSAndW5kZWZpbmVkJyA/IGBjb2wteHMtJHt4c31gIDogJycsXG4gICAgdHlwZW9mIHhzT2Zmc2V0ICE9PSAndW5kZWZpbmVkJyA/IGBjb2wteHMtb2Zmc2V0LSR7eHNPZmZzZXR9YCA6ICcnLFxuICAgIHR5cGVvZiB4c1dyYXAgIT09ICd1bmRlZmluZWQnICYmIHhzV3JhcCA/ICdjb2wteHMtd3JhcCcgOiAnY29sLXhzLW5vLXdyYXAnLFxuICAgIHR5cGVvZiBzbSAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLXNtLSR7c219YCA6ICcnLFxuICAgIHR5cGVvZiBzbU9mZnNldCAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLXNtLW9mZnNldC0ke3NtT2Zmc2V0fWAgOiAnJyxcbiAgICB0eXBlb2Ygc21XcmFwICE9PSAndW5kZWZpbmVkJyAmJiBzbVdyYXAgPyAnY29sLXNtLXdyYXAnIDogJ2NvbC1zbS1uby13cmFwJyxcbiAgICB0eXBlb2YgbWQgIT09ICd1bmRlZmluZWQnID8gYGNvbC1tZC0ke21kfWAgOiAnJyxcbiAgICB0eXBlb2YgbWRPZmZzZXQgIT09ICd1bmRlZmluZWQnID8gYGNvbC1tZC1vZmZzZXQtJHttZE9mZnNldH1gIDogJycsXG4gICAgdHlwZW9mIG1kV3JhcCAhPT0gJ3VuZGVmaW5lZCcgJiYgbWRXcmFwID8gJ2NvbC1tZC13cmFwJyA6ICdjb2wtbWQtbm8td3JhcCcsXG4gICAgdHlwZW9mIGxnICE9PSAndW5kZWZpbmVkJyA/IGBjb2wtbGctJHtsZ31gIDogJycsXG4gICAgdHlwZW9mIGxnT2Zmc2V0ICE9PSAndW5kZWZpbmVkJyA/IGBjb2wtbGctb2Zmc2V0LSR7bGdPZmZzZXR9YCA6ICcnLFxuICAgIHR5cGVvZiBsZ1dyYXAgIT09ICd1bmRlZmluZWQnICYmIGxnV3JhcCA/ICdjb2wtbGctd3JhcCcgOiAnY29sLWxnLW5vLXdyYXAnLFxuICAgIHR5cGVvZiB4bCAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLXhsLSR7eGx9YCA6ICcnLFxuICAgIHR5cGVvZiB4bE9mZnNldCAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLXhsLW9mZnNldC0ke3hsT2Zmc2V0fWAgOiAnJyxcbiAgICB0eXBlb2YgeGxXcmFwICE9PSAndW5kZWZpbmVkJyAmJiB4bFdyYXAgPyAnY29sLXhsLXdyYXAnIDogJ2NvbC14bC1uby13cmFwJyxcbiAgICB0eXBlb2Ygc3BhY2luZyAhPT0gJ3VuZGVmaW5lZCcgJiYgc3BhY2luZyA/IGBjb2wtc3BhY2luZ2AgOiAnJyxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdjb2dtYW4tZ3JpZF9jb2wnLCAncm93X2NvbCcsIGNsYXNzTmFtZSwgY2xhc3NOYW1lTGlzdCl9IHsuLi5Db2xQcm9wc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2w7XG4iXSwic291cmNlUm9vdCI6IiJ9