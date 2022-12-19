webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/layout/Header.jsx":
/*!***********************************!*\
  !*** ./modules/layout/Header.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_imgix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-imgix */ \"./node_modules/react-imgix/es/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blacktoolbox/react-popover */ \"./node_modules/@blacktoolbox/react-popover/esm/index.js\");\n/* harmony import */ var _blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blacktoolbox/react-button */ \"./node_modules/@blacktoolbox/react-button/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/noelchang/Documents/GitHub/cogman/official_page/modules/layout/Header.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Header = function Header(props) {\n  _s();\n\n  var lang = props.lang,\n      common = props.common,\n      _props$langList = props.langList,\n      langList = _props$langList === void 0 ? [] : _props$langList,\n      _props$routeList = props.routeList,\n      routeList = _props$routeList === void 0 ? [] : _props$routeList;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isPositionTop = _useState[0],\n      updatePositionTop = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      location = _useState2[0],\n      updateLocation = _useState2[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _hashMove = function _hashMove(hash) {\n    var target = window.document.getElementById(hash);\n\n    if (target) {\n      window.scrollTo(0, Math.max(0, target.offsetTop));\n    }\n  };\n\n  var _scrollPage = function _scrollPage() {\n    updatePositionTop(window.pageYOffset === 0);\n  };\n\n  var _switchBackgroundColor = function _switchBackgroundColor() {\n    return isPositionTop ? 'navbar-ghost' : 'navbar-solid';\n  };\n\n  var _getLanguageUrl = function _getLanguageUrl(langIndex) {\n    if (lang !== langIndex) {\n      var _location$pathname;\n\n      var pathname = (_location$pathname = location.pathname) === null || _location$pathname === void 0 ? void 0 : _location$pathname.split('/');\n\n      if (pathname) {\n        pathname[1] = langIndex;\n        return \"\".concat(location.origin).concat(pathname.join('/')).concat(location.hash);\n      }\n    } else {\n      return \"\".concat(location.origin).concat(location.pathname).concat(location.hash);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    updateLocation(window.location);\n  }, [router]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var hash = window.location.hash.slice(1);\n\n    _hashMove(hash);\n\n    _scrollPage();\n\n    window.addEventListener('scroll', _scrollPage);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(['layout_head', _switchBackgroundColor()]),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        className: \"head_nav\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"nav_brand\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"brand_logo\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_imgix__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              src: \"/static/brand.png\",\n              alt: \"brand\",\n              width: 48,\n              height: 48\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            class: \"button-link\",\n            href: \"\".concat(location.origin, \"/\").concat(lang, \"/\"),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              className: \"brand_name\",\n              children: common.brand\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"nav_menu\",\n          children: routeList.map(function (page) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"\".concat(location.origin, \"/\").concat(lang).concat(page.pathname),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n                className: \"menu_button\",\n                children: common.nav[page.index]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 19\n              }, _this)\n            }, page.index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"nav_bars\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            id: \"bars\",\n            withArrow: false,\n            trigger: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n              className: \"bars_trigger\",\n              icon: ['fas', 'bars'],\n              size: \"lg\",\n              fixedWidth: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 24\n            }, _this),\n            children: routeList.map(function (page) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                class: \"button-link\",\n                href: \"\".concat(location.origin, \"/\").concat(lang).concat(page.pathname),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n                  className: \"bars_button\",\n                  children: common.nav[page.index]\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 86,\n                  columnNumber: 21\n                }, _this)\n              }, page.index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 19\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"nav_language\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            id: \"language\",\n            withArrow: false,\n            trigger: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n              className: \"language_trigger\",\n              icon: ['fas', 'globe'],\n              size: \"lg\",\n              fixedWidth: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 24\n            }, _this),\n            children: langList.map(function (lang) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                class: \"button-link\",\n                href: _getLanguageUrl(lang.index),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n                  className: \"language_button\",\n                  children: lang.title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 103,\n                  columnNumber: 21\n                }, _this)\n              }, lang.index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 102,\n                columnNumber: 19\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"jiFbOk3Cddxg8mqBFWBYWlpITBE=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9sYXlvdXQvSGVhZGVyLmpzeD8wYmRlIl0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwibGFuZyIsImNvbW1vbiIsImxhbmdMaXN0Iiwicm91dGVMaXN0IiwidXNlU3RhdGUiLCJpc1Bvc2l0aW9uVG9wIiwidXBkYXRlUG9zaXRpb25Ub3AiLCJsb2NhdGlvbiIsInVwZGF0ZUxvY2F0aW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwiX2hhc2hNb3ZlIiwiaGFzaCIsInRhcmdldCIsIndpbmRvdyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxUbyIsIk1hdGgiLCJtYXgiLCJvZmZzZXRUb3AiLCJfc2Nyb2xsUGFnZSIsInBhZ2VZT2Zmc2V0IiwiX3N3aXRjaEJhY2tncm91bmRDb2xvciIsIl9nZXRMYW5ndWFnZVVybCIsImxhbmdJbmRleCIsInBhdGhuYW1lIiwic3BsaXQiLCJvcmlnaW4iLCJqb2luIiwidXNlRWZmZWN0Iiwic2xpY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NuYW1lcyIsImJyYW5kIiwibWFwIiwicGFnZSIsIm5hdiIsImluZGV4IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNoQkMsSUFEZ0IsR0FDZ0NELEtBRGhDLENBQ2hCQyxJQURnQjtBQUFBLE1BQ1ZDLE1BRFUsR0FDZ0NGLEtBRGhDLENBQ1ZFLE1BRFU7QUFBQSx3QkFDZ0NGLEtBRGhDLENBQ0ZHLFFBREU7QUFBQSxNQUNGQSxRQURFLGdDQUNTLEVBRFQ7QUFBQSx5QkFDZ0NILEtBRGhDLENBQ2FJLFNBRGI7QUFBQSxNQUNhQSxTQURiLGlDQUN5QixFQUR6Qjs7QUFBQSxrQkFFbUJDLHNEQUFRLENBQUMsSUFBRCxDQUYzQjtBQUFBLE1BRWpCQyxhQUZpQjtBQUFBLE1BRUZDLGlCQUZFOztBQUFBLG1CQUdXRixzREFBUSxDQUFDLEVBQUQsQ0FIbkI7QUFBQSxNQUdqQkcsUUFIaUI7QUFBQSxNQUdQQyxjQUhPOztBQUl4QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBVTtBQUMxQixRQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsY0FBaEIsQ0FBK0JKLElBQS9CLENBQWY7O0FBQ0EsUUFBSUMsTUFBSixFQUFZO0FBQ1ZDLFlBQU0sQ0FBQ0csUUFBUCxDQUFnQixDQUFoQixFQUFtQkMsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBVCxFQUFZTixNQUFNLENBQUNPLFNBQW5CLENBQW5CO0FBQ0Q7QUFDRixHQUxEOztBQU9BLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJmLHFCQUFpQixDQUFDUSxNQUFNLENBQUNRLFdBQVAsS0FBdUIsQ0FBeEIsQ0FBakI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsR0FBTTtBQUNuQyxXQUFPbEIsYUFBYSxHQUFHLGNBQUgsR0FBb0IsY0FBeEM7QUFDRCxHQUZEOztBQUlBLE1BQU1tQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLFNBQUQsRUFBZTtBQUNyQyxRQUFJekIsSUFBSSxLQUFLeUIsU0FBYixFQUF3QjtBQUFBOztBQUN0QixVQUFNQyxRQUFRLHlCQUFHbkIsUUFBUSxDQUFDbUIsUUFBWix1REFBRyxtQkFBbUJDLEtBQW5CLENBQXlCLEdBQXpCLENBQWpCOztBQUNBLFVBQUdELFFBQUgsRUFBYTtBQUNYQSxnQkFBUSxDQUFDLENBQUQsQ0FBUixHQUFjRCxTQUFkO0FBQ0EseUJBQVVsQixRQUFRLENBQUNxQixNQUFuQixTQUE0QkYsUUFBUSxDQUFDRyxJQUFULENBQWMsR0FBZCxDQUE1QixTQUFpRHRCLFFBQVEsQ0FBQ0ssSUFBMUQ7QUFDRDtBQUNGLEtBTkQsTUFNTztBQUNMLHVCQUFVTCxRQUFRLENBQUNxQixNQUFuQixTQUE0QnJCLFFBQVEsQ0FBQ21CLFFBQXJDLFNBQWdEbkIsUUFBUSxDQUFDSyxJQUF6RDtBQUNEO0FBQ0YsR0FWRDs7QUFZQWtCLHlEQUFTLENBQUMsWUFBTTtBQUNkdEIsa0JBQWMsQ0FBQ00sTUFBTSxDQUFDUCxRQUFSLENBQWQ7QUFDRCxHQUZRLEVBRU4sQ0FBQ0UsTUFBRCxDQUZNLENBQVQ7QUFJQXFCLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1sQixJQUFJLEdBQUdFLE1BQU0sQ0FBQ1AsUUFBUCxDQUFnQkssSUFBaEIsQ0FBcUJtQixLQUFyQixDQUEyQixDQUEzQixDQUFiOztBQUNBcEIsYUFBUyxDQUFDQyxJQUFELENBQVQ7O0FBQ0FTLGVBQVc7O0FBQ1hQLFVBQU0sQ0FBQ2tCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDWCxXQUFsQztBQUNELEdBTFEsRUFLTixFQUxNLENBQVQ7QUFNQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVksaURBQVUsQ0FBQyxDQUFDLGFBQUQsRUFBZ0JWLHNCQUFzQixFQUF0QyxDQUFELENBQTFCO0FBQUEsMkJBQ0U7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxtQ0FDRSxxRUFBQyxtREFBRDtBQUFPLGlCQUFHLEVBQUMsbUJBQVg7QUFBK0IsaUJBQUcsRUFBQyxPQUFuQztBQUEyQyxtQkFBSyxFQUFFLEVBQWxEO0FBQXNELG9CQUFNLEVBQUU7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFHLGlCQUFLLEVBQUMsYUFBVDtBQUF1QixnQkFBSSxZQUFLaEIsUUFBUSxDQUFDcUIsTUFBZCxjQUF3QjVCLElBQXhCLE1BQTNCO0FBQUEsbUNBQ0U7QUFBSSx1QkFBUyxFQUFDLFlBQWQ7QUFBQSx3QkFDR0MsTUFBTSxDQUFDaUM7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFXRTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLG9CQUNHL0IsU0FBUyxDQUFDZ0MsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBVTtBQUN2QixnQ0FDRTtBQUFHLGtCQUFJLFlBQUs3QixRQUFRLENBQUNxQixNQUFkLGNBQXdCNUIsSUFBeEIsU0FBK0JvQyxJQUFJLENBQUNWLFFBQXBDLENBQVA7QUFBQSxxQ0FDRSxxRUFBQyxpRUFBRDtBQUFRLHlCQUFTLEVBQUMsYUFBbEI7QUFBQSwwQkFDR3pCLE1BQU0sQ0FBQ29DLEdBQVAsQ0FBV0QsSUFBSSxDQUFDRSxLQUFoQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUE0REYsSUFBSSxDQUFDRSxLQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBT0QsV0FSQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsZUFzQkU7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FDRSxxRUFBQyxtRUFBRDtBQUNFLGNBQUUsRUFBQyxNQURMO0FBRUUscUJBQVMsRUFBRSxLQUZiO0FBR0UsbUJBQU8sZUFBRSxxRUFBQyw4RUFBRDtBQUFLLHVCQUFTLEVBQUMsY0FBZjtBQUE4QixrQkFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLE1BQVIsQ0FBcEM7QUFBcUQsa0JBQUksRUFBQyxJQUExRDtBQUErRCx3QkFBVTtBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhYO0FBQUEsc0JBS0duQyxTQUFTLENBQUNnQyxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFVO0FBQ3ZCLGtDQUNFO0FBQUcscUJBQUssRUFBQyxhQUFUO0FBQXVCLG9CQUFJLFlBQUs3QixRQUFRLENBQUNxQixNQUFkLGNBQXdCNUIsSUFBeEIsU0FBK0JvQyxJQUFJLENBQUNWLFFBQXBDLENBQTNCO0FBQUEsdUNBQ0UscUVBQUMsaUVBQUQ7QUFBUSwyQkFBUyxFQUFDLGFBQWxCO0FBQUEsNEJBQ0d6QixNQUFNLENBQUNvQyxHQUFQLENBQVdELElBQUksQ0FBQ0UsS0FBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBQWdGRixJQUFJLENBQUNFLEtBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFPRCxhQVJBO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEJGLGVBdUNFO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsaUNBQ0UscUVBQUMsbUVBQUQ7QUFDRSxjQUFFLEVBQUMsVUFETDtBQUVFLHFCQUFTLEVBQUUsS0FGYjtBQUdFLG1CQUFPLGVBQUUscUVBQUMsOEVBQUQ7QUFBSyx1QkFBUyxFQUFDLGtCQUFmO0FBQWtDLGtCQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsT0FBUixDQUF4QztBQUEwRCxrQkFBSSxFQUFDLElBQS9EO0FBQW9FLHdCQUFVO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSFg7QUFBQSxzQkFLR3BDLFFBQVEsQ0FBQ2lDLEdBQVQsQ0FBYSxVQUFDbkMsSUFBRCxFQUFVO0FBQ3RCLGtDQUNFO0FBQUcscUJBQUssRUFBQyxhQUFUO0FBQXVCLG9CQUFJLEVBQUV3QixlQUFlLENBQUN4QixJQUFJLENBQUNzQyxLQUFOLENBQTVDO0FBQUEsdUNBQ0UscUVBQUMsaUVBQUQ7QUFBUSwyQkFBUyxFQUFDLGlCQUFsQjtBQUFBLDRCQUNHdEMsSUFBSSxDQUFDdUM7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBQStEdkMsSUFBSSxDQUFDc0MsS0FBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQU9ELGFBUkE7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStERCxDQTFHRDs7R0FBTXhDLE07VUFJV1kscUQ7OztLQUpYWixNO0FBNEdTQSxxRUFBZiIsImZpbGUiOiIuL21vZHVsZXMvbGF5b3V0L0hlYWRlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEltZ2l4IGZyb20gJ3JlYWN0LWltZ2l4JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiBhcyBGQUkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IEJUQlBvcG92ZXIgZnJvbSAnQGJsYWNrdG9vbGJveC9yZWFjdC1wb3BvdmVyJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BibGFja3Rvb2xib3gvcmVhY3QtYnV0dG9uJztcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbGFuZywgY29tbW9uLCBsYW5nTGlzdCA9IFtdLCByb3V0ZUxpc3QgPSBbXSB9ID0gcHJvcHM7XG4gIGNvbnN0IFtpc1Bvc2l0aW9uVG9wLCB1cGRhdGVQb3NpdGlvblRvcF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvY2F0aW9uLCB1cGRhdGVMb2NhdGlvbl0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IF9oYXNoTW92ZSA9IChoYXNoKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBNYXRoLm1heCgwLCB0YXJnZXQub2Zmc2V0VG9wKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IF9zY3JvbGxQYWdlID0gKCkgPT4ge1xuICAgIHVwZGF0ZVBvc2l0aW9uVG9wKHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gMCk7XG4gIH07XG5cbiAgY29uc3QgX3N3aXRjaEJhY2tncm91bmRDb2xvciA9ICgpID0+IHtcbiAgICByZXR1cm4gaXNQb3NpdGlvblRvcCA/ICduYXZiYXItZ2hvc3QnIDogJ25hdmJhci1zb2xpZCc7XG4gIH07XG5cbiAgY29uc3QgX2dldExhbmd1YWdlVXJsID0gKGxhbmdJbmRleCkgPT4ge1xuICAgIGlmIChsYW5nICE9PSBsYW5nSW5kZXgpIHtcbiAgICAgIGNvbnN0IHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU/LnNwbGl0KCcvJyk7XG4gICAgICBpZihwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZVsxXSA9IGxhbmdJbmRleDtcbiAgICAgICAgcmV0dXJuIGAke2xvY2F0aW9uLm9yaWdpbn0ke3BhdGhuYW1lLmpvaW4oJy8nKX0ke2xvY2F0aW9uLmhhc2h9YDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAke2xvY2F0aW9uLm9yaWdpbn0ke2xvY2F0aW9uLnBhdGhuYW1lfSR7bG9jYXRpb24uaGFzaH1gO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZUxvY2F0aW9uKHdpbmRvdy5sb2NhdGlvbilcbiAgfSwgW3JvdXRlcl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XG4gICAgX2hhc2hNb3ZlKGhhc2gpO1xuICAgIF9zY3JvbGxQYWdlKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIF9zY3JvbGxQYWdlKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsnbGF5b3V0X2hlYWQnLCBfc3dpdGNoQmFja2dyb3VuZENvbG9yKCldKX0+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhlYWRfbmF2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfYnJhbmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRfbG9nb1wiPlxuICAgICAgICAgICAgICA8SW1naXggc3JjPVwiL3N0YXRpYy9icmFuZC5wbmdcIiBhbHQ9XCJicmFuZFwiIHdpZHRoPXs0OH0gaGVpZ2h0PXs0OH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24tbGlua1wiIGhyZWY9e2Ake2xvY2F0aW9uLm9yaWdpbn0vJHtsYW5nfS9gfT5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImJyYW5kX25hbWVcIj5cbiAgICAgICAgICAgICAgICB7Y29tbW9uLmJyYW5kfVxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X21lbnVcIj5cbiAgICAgICAgICAgIHtyb3V0ZUxpc3QubWFwKChwYWdlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7bG9jYXRpb24ub3JpZ2lufS8ke2xhbmd9JHtwYWdlLnBhdGhuYW1lfWB9IGtleT17cGFnZS5pbmRleH0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1lbnVfYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjb21tb24ubmF2W3BhZ2UuaW5kZXhdfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfYmFyc1wiPlxuICAgICAgICAgICAgPEJUQlBvcG92ZXJcbiAgICAgICAgICAgICAgaWQ9XCJiYXJzXCJcbiAgICAgICAgICAgICAgd2l0aEFycm93PXtmYWxzZX1cbiAgICAgICAgICAgICAgdHJpZ2dlcj17PEZBSSBjbGFzc05hbWU9XCJiYXJzX3RyaWdnZXJcIiBpY29uPXtbJ2ZhcycsICdiYXJzJ119IHNpemU9XCJsZ1wiIGZpeGVkV2lkdGggLz59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtyb3V0ZUxpc3QubWFwKChwYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnV0dG9uLWxpbmtcIiBocmVmPXtgJHtsb2NhdGlvbi5vcmlnaW59LyR7bGFuZ30ke3BhZ2UucGF0aG5hbWV9YH0ga2V5PXtwYWdlLmluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJiYXJzX2J1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtjb21tb24ubmF2W3BhZ2UuaW5kZXhdfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvQlRCUG9wb3Zlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9sYW5ndWFnZVwiPlxuICAgICAgICAgICAgPEJUQlBvcG92ZXJcbiAgICAgICAgICAgICAgaWQ9XCJsYW5ndWFnZVwiXG4gICAgICAgICAgICAgIHdpdGhBcnJvdz17ZmFsc2V9XG4gICAgICAgICAgICAgIHRyaWdnZXI9ezxGQUkgY2xhc3NOYW1lPVwibGFuZ3VhZ2VfdHJpZ2dlclwiIGljb249e1snZmFzJywgJ2dsb2JlJ119IHNpemU9XCJsZ1wiIGZpeGVkV2lkdGggLz59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsYW5nTGlzdC5tYXAoKGxhbmcpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24tbGlua1wiIGhyZWY9e19nZXRMYW5ndWFnZVVybChsYW5nLmluZGV4KX0ga2V5PXtsYW5nLmluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJsYW5ndWFnZV9idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICB7bGFuZy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0JUQlBvcG92ZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./modules/layout/Header.jsx\n");

/***/ })

})