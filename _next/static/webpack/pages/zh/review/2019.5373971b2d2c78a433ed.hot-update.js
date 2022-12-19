webpackHotUpdate_N_E("pages/zh/review/2019",{

/***/ "./modules/packageList/PackageList.jsx":
/*!*********************************************!*\
  !*** ./modules/packageList/PackageList.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grid */ \"./modules/grid/index.js\");\n\n\nvar _jsxFileName = \"/Users/noelchang/Documents/GitHub/cogman/official_page/modules/packageList/PackageList.jsx\",\n    _this = undefined;\n\n\n\n\n\nvar PackageList = function PackageList(props) {\n  var _props$packages = props.packages,\n      packages = _props$packages === void 0 ? [] : _props$packages;\n  console.log('props', props);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_grid__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    className: \"cogman-package-list\",\n    align: \"stretch\",\n    children: packages.map(function (item, index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_grid__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n        col: 12,\n        sm: 6,\n        lg: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"list_card\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n            className: \"card_name\",\n            children: item.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"card_url\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_grid__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n              spacing: false,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_grid__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n                spacing: false,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  className: \"service_link\",\n                  href: item.url.github,\n                  target: \"_blank\",\n                  rel: \"noreferrer\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n                    className: \"link_icon\",\n                    icon: ['fab', 'github'],\n                    fixedWidth: true\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 28,\n                    columnNumber: 25\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 22,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 21,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_grid__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n                spacing: true,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  className: \"service_link\",\n                  href: item.url.npm,\n                  target: \"_blank\",\n                  rel: \"noreferrer\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n                    className: \"link_icon\",\n                    icon: ['fab', 'npm'],\n                    fixedWidth: true\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 38,\n                    columnNumber: 25\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 32,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_grid__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n                spacing: false,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  className: \"service_link\",\n                  href: item.url.website,\n                  target: \"_blank\",\n                  rel: \"noreferrer\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n                    className: \"link_icon\",\n                    icon: ['fas', 'link'],\n                    fixedWidth: true\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 48,\n                    columnNumber: 25\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 42,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 21\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"card_version\",\n            children: item.version\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"card_description\",\n            children: item.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 15\n        }, _this)\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = PackageList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PackageList);\n\nvar _c;\n\n$RefreshReg$(_c, \"PackageList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9wYWNrYWdlTGlzdC9QYWNrYWdlTGlzdC5qc3g/ZDBjNCJdLCJuYW1lcyI6WyJQYWNrYWdlTGlzdCIsInByb3BzIiwicGFja2FnZXMiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaXRlbSIsImluZGV4IiwibmFtZSIsInVybCIsImdpdGh1YiIsIm5wbSIsIndlYnNpdGUiLCJ2ZXJzaW9uIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFBQSx3QkFDSEEsS0FERyxDQUNyQkMsUUFEcUI7QUFBQSxNQUNyQkEsUUFEcUIsZ0NBQ1YsRUFEVTtBQUU3QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkgsS0FBckI7QUFDQSxzQkFDRSxxRUFBQyx5Q0FBRDtBQUFVLGFBQVMsRUFBQyxxQkFBcEI7QUFBMEMsU0FBSyxFQUFDLFNBQWhEO0FBQUEsY0FFSUMsUUFBUSxDQUFDRyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzVCLDBCQUNFLHFFQUFDLHlDQUFEO0FBQVUsV0FBRyxFQUFFLEVBQWY7QUFBbUIsVUFBRSxFQUFFLENBQXZCO0FBQTBCLFVBQUUsRUFBRSxDQUE5QjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLFdBQWQ7QUFBQSxzQkFDR0QsSUFBSSxDQUFDRTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBLG1DQUNFLHFFQUFDLHlDQUFEO0FBQVUscUJBQU8sRUFBRSxLQUFuQjtBQUFBLHNDQUNFLHFFQUFDLHlDQUFEO0FBQVUsdUJBQU8sRUFBRSxLQUFuQjtBQUFBLHVDQUNFO0FBQ0UsMkJBQVMsRUFBQyxjQURaO0FBRUUsc0JBQUksRUFBRUYsSUFBSSxDQUFDRyxHQUFMLENBQVNDLE1BRmpCO0FBR0Usd0JBQU0sRUFBQyxRQUhUO0FBSUUscUJBQUcsRUFBQyxZQUpOO0FBQUEseUNBTUUscUVBQUMsOEVBQUQ7QUFBSyw2QkFBUyxFQUFDLFdBQWY7QUFBMkIsd0JBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxRQUFSLENBQWpDO0FBQW9ELDhCQUFVO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQVdFLHFFQUFDLHlDQUFEO0FBQVUsdUJBQU8sRUFBRSxJQUFuQjtBQUFBLHVDQUNFO0FBQ0UsMkJBQVMsRUFBQyxjQURaO0FBRUUsc0JBQUksRUFBRUosSUFBSSxDQUFDRyxHQUFMLENBQVNFLEdBRmpCO0FBR0Usd0JBQU0sRUFBQyxRQUhUO0FBSUUscUJBQUcsRUFBQyxZQUpOO0FBQUEseUNBTUUscUVBQUMsOEVBQUQ7QUFBSyw2QkFBUyxFQUFDLFdBQWY7QUFBMkIsd0JBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLENBQWpDO0FBQWlELDhCQUFVO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYRixlQXFCRSxxRUFBQyx5Q0FBRDtBQUFVLHVCQUFPLEVBQUUsS0FBbkI7QUFBQSx1Q0FDRTtBQUNFLDJCQUFTLEVBQUMsY0FEWjtBQUVFLHNCQUFJLEVBQUVMLElBQUksQ0FBQ0csR0FBTCxDQUFTRyxPQUZqQjtBQUdFLHdCQUFNLEVBQUMsUUFIVDtBQUlFLHFCQUFHLEVBQUMsWUFKTjtBQUFBLHlDQU1FLHFFQUFDLDhFQUFEO0FBQUssNkJBQVMsRUFBQyxXQUFmO0FBQTJCLHdCQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsTUFBUixDQUFqQztBQUFrRCw4QkFBVTtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFzQ0U7QUFBRyxxQkFBUyxFQUFDLGNBQWI7QUFBQSxzQkFDR04sSUFBSSxDQUFDTztBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdENGLGVBeUNFO0FBQUcscUJBQVMsRUFBQyxrQkFBYjtBQUFBLHNCQUNHUCxJQUFJLENBQUNRO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF6Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBc0NQLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWlERCxLQWxERDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlERCxDQTVERDs7S0FBTVAsVztBQThEU0EsMEVBQWYiLCJmaWxlIjoiLi9tb2R1bGVzL3BhY2thZ2VMaXN0L1BhY2thZ2VMaXN0LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gYXMgRkFJIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuaW1wb3J0ICogYXMgR3JpZCBmcm9tICcuLi9ncmlkJztcblxuY29uc3QgUGFja2FnZUxpc3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwYWNrYWdlcyA9IFtdIH0gPSBwcm9wcztcbiAgY29uc29sZS5sb2coJ3Byb3BzJywgcHJvcHMpXG4gIHJldHVybiAoXG4gICAgPEdyaWQuUm93IGNsYXNzTmFtZT1cImNvZ21hbi1wYWNrYWdlLWxpc3RcIiBhbGlnbj1cInN0cmV0Y2hcIj5cbiAgICAgIHtcbiAgICAgICAgcGFja2FnZXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZC5Db2wgY29sPXsxMn0gc209ezZ9IGxnPXs0fSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2NhcmRcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZF9uYW1lXCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRfdXJsJz5cbiAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdyBzcGFjaW5nPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbCBzcGFjaW5nPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlcnZpY2VfbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLnVybC5naXRodWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZBSSBjbGFzc05hbWU9XCJsaW5rX2ljb25cIiBpY29uPXtbJ2ZhYicsICdnaXRodWInXX0gZml4ZWRXaWR0aCAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sIHNwYWNpbmc9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXJ2aWNlX2xpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS51cmwubnBtfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGQUkgY2xhc3NOYW1lPVwibGlua19pY29uXCIgaWNvbj17WydmYWInLCAnbnBtJ119IGZpeGVkV2lkdGggLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbCBzcGFjaW5nPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlcnZpY2VfbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLnVybC53ZWJzaXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGQUkgY2xhc3NOYW1lPVwibGlua19pY29uXCIgaWNvbj17WydmYXMnLCAnbGluayddfSBmaXhlZFdpZHRoIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NhcmRfdmVyc2lvbic+XG4gICAgICAgICAgICAgICAgICB7aXRlbS52ZXJzaW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NhcmRfZGVzY3JpcHRpb24nPlxuICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvR3JpZC5Db2w+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvR3JpZC5Sb3c+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFja2FnZUxpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/packageList/PackageList.jsx\n");

/***/ })

})