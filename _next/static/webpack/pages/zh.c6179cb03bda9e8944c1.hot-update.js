webpackHotUpdate_N_E("pages/zh",{

/***/ "./modules/grid/Row.jsx":
/*!******************************!*\
  !*** ./modules/grid/Row.jsx ***!
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




var _jsxFileName = "E:\\Cogman\\official_page\\modules\\grid\\Row.jsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Cogman_official_page_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/**
 * The module for clickable element.
 *
 * props = {
 *  children,
 *  className,
 *  justify, ['start', 'center', 'end', 'space-between', 'space-around']
 *  align, ['top', 'middle', 'bottom, 'stretch']
 *  spacing, [true, false]
 * }
 *
 * default: {
 *  spacing: true
 * }
 *
 * @param {*} props
 */

var Row = function Row(props) {
  var children = props.children,
      className = props.className,
      justify = props.justify,
      align = props.align,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? true : _props$spacing,
      RowProps = Object(E_Cogman_official_page_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "justify", "align", "spacing"]);

  var classNameList = [typeof justify !== 'undefined' ? "row-justify-".concat(justify) : '', typeof align !== 'undefined' ? "row-align-".concat(align) : '', typeof spacing !== 'undefined' && spacing ? "row-spacing" : ''];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('cogman-grid_row', 'grid-row', className, classNameList)
  }, RowProps), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_c = Row;
/* harmony default export */ __webpack_exports__["default"] = (Row);

var _c;

$RefreshReg$(_c, "Row");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9ncmlkL1Jvdy5qc3giXSwibmFtZXMiOlsiUm93IiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImp1c3RpZnkiLCJhbGlnbiIsInNwYWNpbmciLCJSb3dQcm9wcyIsImNsYXNzTmFtZUxpc3QiLCJjbGFzc25hbWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNiQyxRQURhLEdBQ3dERCxLQUR4RCxDQUNiQyxRQURhO0FBQUEsTUFDSEMsU0FERyxHQUN3REYsS0FEeEQsQ0FDSEUsU0FERztBQUFBLE1BQ1FDLE9BRFIsR0FDd0RILEtBRHhELENBQ1FHLE9BRFI7QUFBQSxNQUNpQkMsS0FEakIsR0FDd0RKLEtBRHhELENBQ2lCSSxLQURqQjtBQUFBLHVCQUN3REosS0FEeEQsQ0FDd0JLLE9BRHhCO0FBQUEsTUFDd0JBLE9BRHhCLCtCQUNrQyxJQURsQztBQUFBLE1BQzJDQyxRQUQzQyx5SUFDd0ROLEtBRHhEOztBQUVyQixNQUFNTyxhQUFhLEdBQUcsQ0FDcEIsT0FBT0osT0FBUCxLQUFtQixXQUFuQix5QkFBZ0RBLE9BQWhELElBQTRELEVBRHhDLEVBRXBCLE9BQU9DLEtBQVAsS0FBaUIsV0FBakIsdUJBQTRDQSxLQUE1QyxJQUFzRCxFQUZsQyxFQUdwQixPQUFPQyxPQUFQLEtBQW1CLFdBQW5CLElBQWtDQSxPQUFsQyxtQkFBNEQsRUFIeEMsQ0FBdEI7QUFNQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUcsaURBQVUsQ0FBQyxpQkFBRCxFQUFvQixVQUFwQixFQUFnQ04sU0FBaEMsRUFBMkNLLGFBQTNDO0FBQTFCLEtBQXlGRCxRQUF6RjtBQUFBLGNBQ0dMO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FiRDs7S0FBTUYsRztBQWVTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy96aC5jNjE3OWNiMDNiZGE5ZTg5NDRjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vKipcbiAqIFRoZSBtb2R1bGUgZm9yIGNsaWNrYWJsZSBlbGVtZW50LlxuICpcbiAqIHByb3BzID0ge1xuICogIGNoaWxkcmVuLFxuICogIGNsYXNzTmFtZSxcbiAqICBqdXN0aWZ5LCBbJ3N0YXJ0JywgJ2NlbnRlcicsICdlbmQnLCAnc3BhY2UtYmV0d2VlbicsICdzcGFjZS1hcm91bmQnXVxuICogIGFsaWduLCBbJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tLCAnc3RyZXRjaCddXG4gKiAgc3BhY2luZywgW3RydWUsIGZhbHNlXVxuICogfVxuICpcbiAqIGRlZmF1bHQ6IHtcbiAqICBzcGFjaW5nOiB0cnVlXG4gKiB9XG4gKlxuICogQHBhcmFtIHsqfSBwcm9wc1xuICovXG5cbmNvbnN0IFJvdyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGp1c3RpZnksIGFsaWduLCBzcGFjaW5nID0gdHJ1ZSwgLi4uUm93UHJvcHMgfSA9IHByb3BzO1xuICBjb25zdCBjbGFzc05hbWVMaXN0ID0gW1xuICAgIHR5cGVvZiBqdXN0aWZ5ICE9PSAndW5kZWZpbmVkJyA/IGByb3ctanVzdGlmeS0ke2p1c3RpZnl9YCA6ICcnLFxuICAgIHR5cGVvZiBhbGlnbiAhPT0gJ3VuZGVmaW5lZCcgPyBgcm93LWFsaWduLSR7YWxpZ259YCA6ICcnLFxuICAgIHR5cGVvZiBzcGFjaW5nICE9PSAndW5kZWZpbmVkJyAmJiBzcGFjaW5nID8gYHJvdy1zcGFjaW5nYCA6ICcnLFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2NvZ21hbi1ncmlkX3JvdycsICdncmlkLXJvdycsIGNsYXNzTmFtZSwgY2xhc3NOYW1lTGlzdCl9IHsuLi5Sb3dQcm9wc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3c7XG4iXSwic291cmNlUm9vdCI6IiJ9