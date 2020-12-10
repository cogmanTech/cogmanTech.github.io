webpackHotUpdate_N_E("pages/en",{

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

  var classNameList = [typeof col !== 'undefined' ? "col-".concat(col) : '', typeof colOffset !== 'undefined' ? "col-offset-".concat(colOffset) : '', typeof colWrap !== 'undefined' && colWrap ? 'col-wrap' : '', typeof xs !== 'undefined' ? "col-xs-".concat(xs) : '', typeof xsOffset !== 'undefined' ? "col-xs-offset-".concat(xsOffset) : '', typeof xsWrap !== 'undefined' && xsWrap ? 'col-xs-wrap' : '', typeof sm !== 'undefined' ? "col-sm-".concat(sm) : '', typeof smOffset !== 'undefined' ? "col-sm-offset-".concat(smOffset) : '', typeof smWrap !== 'undefined' && smWrap ? 'col-sm-wrap' : '', typeof md !== 'undefined' ? "col-md-".concat(md) : '', typeof mdOffset !== 'undefined' ? "col-md-offset-".concat(mdOffset) : '', typeof mdWrap !== 'undefined' && mdWrap ? 'col-md-wrap' : '', typeof lg !== 'undefined' ? "col-lg-".concat(lg) : '', typeof lgOffset !== 'undefined' ? "col-lg-offset-".concat(lgOffset) : '', typeof lgWrap !== 'undefined' && lgWrap ? 'col-lg-wrap' : '', typeof xl !== 'undefined' ? "col-xl-".concat(xl) : '', typeof xlOffset !== 'undefined' ? "col-xl-offset-".concat(xlOffset) : '', typeof xlWrap !== 'undefined' && xlWrap ? 'col-xl-wrap' : '', typeof spacing !== 'undefined' && spacing ? "col-spacing" : ''];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9ncmlkL0NvbC5qc3giXSwibmFtZXMiOlsiQ29sIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNvbCIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJjb2xPZmZzZXQiLCJ4c09mZnNldCIsInNtT2Zmc2V0IiwibWRPZmZzZXQiLCJsZ09mZnNldCIsInhsT2Zmc2V0IiwiY29sV3JhcCIsInhzV3JhcCIsInNtV3JhcCIsIm1kV3JhcCIsImxnV3JhcCIsInhsV3JhcCIsInNwYWNpbmciLCJDb2xQcm9wcyIsImNsYXNzTmFtZUxpc3QiLCJjbGFzc25hbWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BRW5CQyxRQUZtQixHQXdCakJELEtBeEJpQixDQUVuQkMsUUFGbUI7QUFBQSxNQUduQkMsU0FIbUIsR0F3QmpCRixLQXhCaUIsQ0FHbkJFLFNBSG1CO0FBQUEsTUFJbkJDLEdBSm1CLEdBd0JqQkgsS0F4QmlCLENBSW5CRyxHQUptQjtBQUFBLE1BS25CQyxFQUxtQixHQXdCakJKLEtBeEJpQixDQUtuQkksRUFMbUI7QUFBQSxNQU1uQkMsRUFObUIsR0F3QmpCTCxLQXhCaUIsQ0FNbkJLLEVBTm1CO0FBQUEsTUFPbkJDLEVBUG1CLEdBd0JqQk4sS0F4QmlCLENBT25CTSxFQVBtQjtBQUFBLE1BUW5CQyxF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QUFrQixXQUFsQixJQUFpQ0EsTUFBakMsR0FBMEMsYUFBMUMsR0FBMEQsRUFsQnRDLEVBbUJwQixPQUFPQyxPQUFQLEtBQW1CLFdBQW5CLElBQWtDQSxPQUFsQyxtQkFBNEQsRUFuQnhDLENBQXRCO0FBc0JBLHNCQUNFO0FBQUssYUFBUyxFQUFFRyxpREFBVSxDQUFDLGlCQUFELEVBQW9CLFNBQXBCLEVBQStCdEIsU0FBL0IsRUFBMENxQixhQUExQztBQUExQixLQUF3RkQsUUFBeEY7QUFBQSxjQUNHckI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQXBERDs7S0FBTUYsRztBQXNEU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW4uMWEzOWM4M2Q5NzMzMDVhOWQ3MWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuLyoqXG4gKiBUaGUgbW9kdWxlIGZvciBjbGlja2FibGUgZWxlbWVudC5cbiAqXG4gKiBwcm9wcyA9IHtcbiAqICBjaGlsZHJlbixcbiAqICBjbGFzc05hbWUsXG4gKlxuICogIC8vIHZhbHVlOiAxLTEyXG4gKiAgY29sLFxuICogIHhzLFxuICogIHNtLFxuICogIG1kLFxuICogIGxnLFxuICogIHhsLFxuICogIHh4bCxcbiAqICBjb2xPZmZzZXQsXG4gKiAgeHNPZmZzZXQsXG4gKiAgc21PZmZzZXQsXG4gKiAgbWRPZmZzZXQsXG4gKiAgbGdPZmZzZXQsXG4gKiAgeGxPZmZzZXQsXG4gKiAgeHhsT2Zmc2V0LFxuICpcbiAqICAvLyB2YWx1ZTogW3RydWUsIGZhbHNlXVxuICogIGNvbFdyYXAsXG4gKiAgeHNXcmFwLFxuICogIHNtV3JhcCxcbiAqICBtZFdyYXAsXG4gKiAgbGdXcmFwLFxuICogIHhsV3JhcCxcbiAqICBzcGFjaW5nLFxuICogfVxuICpcbiAqIGRlZmF1bHQgPSB7XG4gKiAgc3BhY2luZzogdHJ1ZVxuICogfVxuICpcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqL1xuXG5jb25zdCBDb2wgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIGNsYXNzTmFtZSxcbiAgICBjb2wsXG4gICAgeHMsXG4gICAgc20sXG4gICAgbWQsXG4gICAgbGcsXG4gICAgeGwsXG4gICAgY29sT2Zmc2V0LFxuICAgIHhzT2Zmc2V0LFxuICAgIHNtT2Zmc2V0LFxuICAgIG1kT2Zmc2V0LFxuICAgIGxnT2Zmc2V0LFxuICAgIHhsT2Zmc2V0LFxuICAgIGNvbFdyYXAsXG4gICAgeHNXcmFwLFxuICAgIHNtV3JhcCxcbiAgICBtZFdyYXAsXG4gICAgbGdXcmFwLFxuICAgIHhsV3JhcCxcbiAgICBzcGFjaW5nID0gdHJ1ZSxcbiAgICAuLi5Db2xQcm9wc1xuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGNsYXNzTmFtZUxpc3QgPSBbXG4gICAgdHlwZW9mIGNvbCAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLSR7Y29sfWAgOiAnJyxcbiAgICB0eXBlb2YgY29sT2Zmc2V0ICE9PSAndW5kZWZpbmVkJyA/IGBjb2wtb2Zmc2V0LSR7Y29sT2Zmc2V0fWAgOiAnJyxcbiAgICB0eXBlb2YgY29sV3JhcCAhPT0gJ3VuZGVmaW5lZCcgJiYgY29sV3JhcD8gJ2NvbC13cmFwJyA6ICcnLFxuICAgIHR5cGVvZiB4cyAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLXhzLSR7eHN9YCA6ICcnLFxuICAgIHR5cGVvZiB4c09mZnNldCAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLXhzLW9mZnNldC0ke3hzT2Zmc2V0fWAgOiAnJyxcbiAgICB0eXBlb2YgeHNXcmFwICE9PSAndW5kZWZpbmVkJyAmJiB4c1dyYXA/ICdjb2wteHMtd3JhcCcgOiAnJyxcbiAgICB0eXBlb2Ygc20gIT09ICd1bmRlZmluZWQnID8gYGNvbC1zbS0ke3NtfWAgOiAnJyxcbiAgICB0eXBlb2Ygc21PZmZzZXQgIT09ICd1bmRlZmluZWQnID8gYGNvbC1zbS1vZmZzZXQtJHtzbU9mZnNldH1gIDogJycsXG4gICAgdHlwZW9mIHNtV3JhcCAhPT0gJ3VuZGVmaW5lZCcgJiYgc21XcmFwPyAnY29sLXNtLXdyYXAnIDogJycsXG4gICAgdHlwZW9mIG1kICE9PSAndW5kZWZpbmVkJyA/IGBjb2wtbWQtJHttZH1gIDogJycsXG4gICAgdHlwZW9mIG1kT2Zmc2V0ICE9PSAndW5kZWZpbmVkJyA/IGBjb2wtbWQtb2Zmc2V0LSR7bWRPZmZzZXR9YCA6ICcnLFxuICAgIHR5cGVvZiBtZFdyYXAgIT09ICd1bmRlZmluZWQnICYmIG1kV3JhcCA/ICdjb2wtbWQtd3JhcCcgOiAnJyxcbiAgICB0eXBlb2YgbGcgIT09ICd1bmRlZmluZWQnID8gYGNvbC1sZy0ke2xnfWAgOiAnJyxcbiAgICB0eXBlb2YgbGdPZmZzZXQgIT09ICd1bmRlZmluZWQnID8gYGNvbC1sZy1vZmZzZXQtJHtsZ09mZnNldH1gIDogJycsXG4gICAgdHlwZW9mIGxnV3JhcCAhPT0gJ3VuZGVmaW5lZCcgJiYgbGdXcmFwID8gJ2NvbC1sZy13cmFwJyA6ICcnLFxuICAgIHR5cGVvZiB4bCAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLXhsLSR7eGx9YCA6ICcnLFxuICAgIHR5cGVvZiB4bE9mZnNldCAhPT0gJ3VuZGVmaW5lZCcgPyBgY29sLXhsLW9mZnNldC0ke3hsT2Zmc2V0fWAgOiAnJyxcbiAgICB0eXBlb2YgeGxXcmFwICE9PSAndW5kZWZpbmVkJyAmJiB4bFdyYXAgPyAnY29sLXhsLXdyYXAnIDogJycsXG4gICAgdHlwZW9mIHNwYWNpbmcgIT09ICd1bmRlZmluZWQnICYmIHNwYWNpbmcgPyBgY29sLXNwYWNpbmdgIDogJycsXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnY29nbWFuLWdyaWRfY29sJywgJ3Jvd19jb2wnLCBjbGFzc05hbWUsIGNsYXNzTmFtZUxpc3QpfSB7Li4uQ29sUHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==