webpackHotUpdate_N_E("pages/en/contact",{

/***/ "./components/Contact.jsx":
/*!********************************!*\
  !*** ./components/Contact.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_layout___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/layout/ */ "./modules/layout/index.js");
/* harmony import */ var _modules_grid___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/grid/ */ "./modules/grid/index.js");


var _jsxFileName = "E:\\Cogman\\official_page\\components\\Contact.jsx",
    _this = undefined;

 // import Imgix from 'react-imgix';
// import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';




var Contact = function Contact(props) {
  var lang = props.lang,
      languages = props.languages;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_layout___WEBPACK_IMPORTED_MODULE_2__["default"], {
    lang: lang,
    languages: languages,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "contact",
      className: "page",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        id: "/",
        className: "page_section section-contact",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "section_container text-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_grid___WEBPACK_IMPORTED_MODULE_3__["Row"], {
            spacing: false,
            justify: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_grid___WEBPACK_IMPORTED_MODULE_3__["Col"], {
              col: 6,
              className: "text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "container_title",
                children: languages.basic.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "container_descrption",
                children: languages.basic.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

_c = Contact;
/* harmony default export */ __webpack_exports__["default"] = (Contact);

var _c;

$RefreshReg$(_c, "Contact");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0LmpzeCJdLCJuYW1lcyI6WyJDb250YWN0IiwicHJvcHMiLCJsYW5nIiwibGFuZ3VhZ2VzIiwiYmFzaWMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ2pCQyxJQURpQixHQUNHRCxLQURILENBQ2pCQyxJQURpQjtBQUFBLE1BQ1hDLFNBRFcsR0FDR0YsS0FESCxDQUNYRSxTQURXO0FBRXpCLHNCQUNFLHFFQUFDLHdEQUFEO0FBQVEsUUFBSSxFQUFFRCxJQUFkO0FBQW9CLGFBQVMsRUFBRUMsU0FBL0I7QUFBQSwyQkFDRTtBQUFLLFFBQUUsRUFBQyxTQUFSO0FBQWtCLGVBQVMsRUFBQyxNQUE1QjtBQUFBLDZCQUNFO0FBQVMsVUFBRSxFQUFDLEdBQVo7QUFBZ0IsaUJBQVMsRUFBQyw4QkFBMUI7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsK0JBQWY7QUFBQSxpQ0FDRSxxRUFBQyxrREFBRDtBQUFVLG1CQUFPLEVBQUUsS0FBbkI7QUFBMEIsbUJBQU8sRUFBQyxRQUFsQztBQUFBLG1DQUNFLHFFQUFDLGtEQUFEO0FBQVUsaUJBQUcsRUFBRSxDQUFmO0FBQWtCLHVCQUFTLEVBQUMsYUFBNUI7QUFBQSxzQ0FDRTtBQUFJLHlCQUFTLEVBQUMsaUJBQWQ7QUFBQSwwQkFBaUNBLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQkM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUcseUJBQVMsRUFBQyxzQkFBYjtBQUFBLDBCQUFxQ0YsU0FBUyxDQUFDQyxLQUFWLENBQWdCRTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQkQsQ0FsQkQ7O0tBQU1OLE87QUFvQlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VuL2NvbnRhY3QuOTNmNmMyYmNhZWQyMzFiMWFlOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgSW1naXggZnJvbSAncmVhY3QtaW1naXgnO1xuLy8gaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIGFzIEZBSSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbW9kdWxlcy9sYXlvdXQvJztcbmltcG9ydCAqIGFzIEdyaWQgZnJvbSAnLi4vbW9kdWxlcy9ncmlkLyc7XG5cbmNvbnN0IENvbnRhY3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBsYW5nLCBsYW5ndWFnZXMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgbGFuZz17bGFuZ30gbGFuZ3VhZ2VzPXtsYW5ndWFnZXN9PlxuICAgICAgPGRpdiBpZD1cImNvbnRhY3RcIiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiL1wiIGNsYXNzTmFtZT1cInBhZ2Vfc2VjdGlvbiBzZWN0aW9uLWNvbnRhY3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fY29udGFpbmVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8R3JpZC5Sb3cgc3BhY2luZz17ZmFsc2V9IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEdyaWQuQ29sIGNvbD17Nn0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29udGFpbmVyX3RpdGxlXCI+e2xhbmd1YWdlcy5iYXNpYy50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRhaW5lcl9kZXNjcnB0aW9uXCI+e2xhbmd1YWdlcy5iYXNpYy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvR3JpZC5Db2w+XG4gICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9