webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/layout/Header.jsx":
/*!***********************************!*\
  !*** ./modules/layout/Header.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_imgix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-imgix */ \"./node_modules/react-imgix/es/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blacktoolbox/react-popover */ \"./node_modules/@blacktoolbox/react-popover/esm/index.js\");\n/* harmony import */ var _blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blacktoolbox/react-button */ \"./node_modules/@blacktoolbox/react-button/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/noelchang/Documents/GitHub/cogman/official_page/modules/layout/Header.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Header = function Header(props) {\n  _s();\n\n  var lang = props.lang,\n      common = props.common,\n      _props$langList = props.langList,\n      langList = _props$langList === void 0 ? [] : _props$langList,\n      _props$routeList = props.routeList,\n      routeList = _props$routeList === void 0 ? [] : _props$routeList;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isPositionTop = _useState[0],\n      updatePositionTop = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      location = _useState2[0],\n      updateLocation = _useState2[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _hashMove = function _hashMove(hash) {\n    var target = window.document.getElementById(hash);\n\n    if (target) {\n      window.scrollTo(0, Math.max(0, target.offsetTop));\n    }\n  };\n\n  var _scrollPage = function _scrollPage() {\n    updatePositionTop(window.pageYOffset === 0);\n  };\n\n  var _switchBackgroundColor = function _switchBackgroundColor() {\n    return isPositionTop ? 'navbar-ghost' : 'navbar-solid';\n  };\n\n  var _getLanguageUrl = function _getLanguageUrl(langIndex) {\n    if (lang !== langIndex) {\n      var _pathname = location.pathname.split('/');\n\n      _pathname[1] = langIndex;\n      location.href = \"\".concat(origin).concat(_pathname.join('/')).concat(location.hash);\n    } else {\n      location.href = \"\".concat(origin).concat(pathname).concat(location.hash);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    updateLocation(window.location);\n  }, [router]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var hash = window.location.hash.slice(1);\n\n    _hashMove(hash);\n\n    _scrollPage();\n\n    window.addEventListener('scroll', _scrollPage);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(['layout_head', _switchBackgroundColor()]),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        className: \"head_nav\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"nav_brand\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"brand_logo\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_imgix__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              src: \"/static/brand.png\",\n              alt: \"brand\",\n              width: 48,\n              height: 48\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"\".concat(location.origin, \"/\").concat(lang, \"/\"),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              className: \"brand_name\",\n              children: common.brand\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"nav_menu\",\n          children: routeList.map(function (page) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"\".concat(location.origin, \"/\").concat(lang).concat(page.pathname),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n                className: \"menu_button\",\n                children: common.nav[page.index]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 19\n              }, _this)\n            }, page.index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"nav_bars\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            id: \"bars\",\n            withArrow: false,\n            trigger: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n              className: \"bars_trigger\",\n              icon: ['fas', 'bars'],\n              size: \"lg\",\n              fixedWidth: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 24\n            }, _this),\n            children: routeList.map(function (page) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                href: \"\".concat(location.origin, \"/\").concat(lang).concat(page.pathname),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n                  className: \"bars_button\",\n                  children: common.nav[page.index]\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 84,\n                  columnNumber: 21\n                }, _this)\n              }, page.index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 83,\n                columnNumber: 19\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"nav_language\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            id: \"language\",\n            withArrow: false,\n            trigger: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n              className: \"language_trigger\",\n              icon: ['fas', 'globe'],\n              size: \"lg\",\n              fixedWidth: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 24\n            }, _this),\n            children: langList.map(function (lang) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                href: _getLanguageUrl(lang.index),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n                  className: \"language_button\",\n                  children: lang.title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 101,\n                  columnNumber: 21\n                }, _this)\n              }, page.index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 100,\n                columnNumber: 19\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"jiFbOk3Cddxg8mqBFWBYWlpITBE=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9sYXlvdXQvSGVhZGVyLmpzeD8wYmRlIl0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwibGFuZyIsImNvbW1vbiIsImxhbmdMaXN0Iiwicm91dGVMaXN0IiwidXNlU3RhdGUiLCJpc1Bvc2l0aW9uVG9wIiwidXBkYXRlUG9zaXRpb25Ub3AiLCJsb2NhdGlvbiIsInVwZGF0ZUxvY2F0aW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwiX2hhc2hNb3ZlIiwiaGFzaCIsInRhcmdldCIsIndpbmRvdyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxUbyIsIk1hdGgiLCJtYXgiLCJvZmZzZXRUb3AiLCJfc2Nyb2xsUGFnZSIsInBhZ2VZT2Zmc2V0IiwiX3N3aXRjaEJhY2tncm91bmRDb2xvciIsIl9nZXRMYW5ndWFnZVVybCIsImxhbmdJbmRleCIsInBhdGhuYW1lIiwic3BsaXQiLCJocmVmIiwib3JpZ2luIiwiam9pbiIsInVzZUVmZmVjdCIsInNsaWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzbmFtZXMiLCJicmFuZCIsIm1hcCIsInBhZ2UiLCJuYXYiLCJpbmRleCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDaEJDLElBRGdCLEdBQ2dDRCxLQURoQyxDQUNoQkMsSUFEZ0I7QUFBQSxNQUNWQyxNQURVLEdBQ2dDRixLQURoQyxDQUNWRSxNQURVO0FBQUEsd0JBQ2dDRixLQURoQyxDQUNGRyxRQURFO0FBQUEsTUFDRkEsUUFERSxnQ0FDUyxFQURUO0FBQUEseUJBQ2dDSCxLQURoQyxDQUNhSSxTQURiO0FBQUEsTUFDYUEsU0FEYixpQ0FDeUIsRUFEekI7O0FBQUEsa0JBRW1CQyxzREFBUSxD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cUQ7OztLQUpYWixNO0FBMEdTQSxxRUFBZiIsImZpbGUiOiIuL21vZHVsZXMvbGF5b3V0L0hlYWRlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEltZ2l4IGZyb20gJ3JlYWN0LWltZ2l4JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiBhcyBGQUkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IEJUQlBvcG92ZXIgZnJvbSAnQGJsYWNrdG9vbGJveC9yZWFjdC1wb3BvdmVyJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BibGFja3Rvb2xib3gvcmVhY3QtYnV0dG9uJztcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbGFuZywgY29tbW9uLCBsYW5nTGlzdCA9IFtdLCByb3V0ZUxpc3QgPSBbXSB9ID0gcHJvcHM7XG4gIGNvbnN0IFtpc1Bvc2l0aW9uVG9wLCB1cGRhdGVQb3NpdGlvblRvcF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvY2F0aW9uLCB1cGRhdGVMb2NhdGlvbl0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IF9oYXNoTW92ZSA9IChoYXNoKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBNYXRoLm1heCgwLCB0YXJnZXQub2Zmc2V0VG9wKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IF9zY3JvbGxQYWdlID0gKCkgPT4ge1xuICAgIHVwZGF0ZVBvc2l0aW9uVG9wKHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gMCk7XG4gIH07XG5cbiAgY29uc3QgX3N3aXRjaEJhY2tncm91bmRDb2xvciA9ICgpID0+IHtcbiAgICByZXR1cm4gaXNQb3NpdGlvblRvcCA/ICduYXZiYXItZ2hvc3QnIDogJ25hdmJhci1zb2xpZCc7XG4gIH07XG5cbiAgY29uc3QgX2dldExhbmd1YWdlVXJsID0gKGxhbmdJbmRleCkgPT4ge1xuICAgIGlmIChsYW5nICE9PSBsYW5nSW5kZXgpIHtcbiAgICAgIGNvbnN0IHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcbiAgICAgIHBhdGhuYW1lWzFdID0gbGFuZ0luZGV4O1xuICAgICAgbG9jYXRpb24uaHJlZiA9IGAke29yaWdpbn0ke3BhdGhuYW1lLmpvaW4oJy8nKX0ke2xvY2F0aW9uLmhhc2h9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uaHJlZiA9IGAke29yaWdpbn0ke3BhdGhuYW1lfSR7bG9jYXRpb24uaGFzaH1gO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZUxvY2F0aW9uKHdpbmRvdy5sb2NhdGlvbilcbiAgfSwgW3JvdXRlcl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XG4gICAgX2hhc2hNb3ZlKGhhc2gpO1xuICAgIF9zY3JvbGxQYWdlKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIF9zY3JvbGxQYWdlKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsnbGF5b3V0X2hlYWQnLCBfc3dpdGNoQmFja2dyb3VuZENvbG9yKCldKX0+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhlYWRfbmF2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfYnJhbmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRfbG9nb1wiPlxuICAgICAgICAgICAgICA8SW1naXggc3JjPVwiL3N0YXRpYy9icmFuZC5wbmdcIiBhbHQ9XCJicmFuZFwiIHdpZHRoPXs0OH0gaGVpZ2h0PXs0OH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj17YCR7bG9jYXRpb24ub3JpZ2lufS8ke2xhbmd9L2B9PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYnJhbmRfbmFtZVwiPlxuICAgICAgICAgICAgICAgIHtjb21tb24uYnJhbmR9XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbWVudVwiPlxuICAgICAgICAgICAge3JvdXRlTGlzdC5tYXAoKHBhZ2UpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtgJHtsb2NhdGlvbi5vcmlnaW59LyR7bGFuZ30ke3BhZ2UucGF0aG5hbWV9YH0ga2V5PXtwYWdlLmluZGV4fT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibWVudV9idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAge2NvbW1vbi5uYXZbcGFnZS5pbmRleF19XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9iYXJzXCI+XG4gICAgICAgICAgICA8QlRCUG9wb3ZlclxuICAgICAgICAgICAgICBpZD1cImJhcnNcIlxuICAgICAgICAgICAgICB3aXRoQXJyb3c9e2ZhbHNlfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXs8RkFJIGNsYXNzTmFtZT1cImJhcnNfdHJpZ2dlclwiIGljb249e1snZmFzJywgJ2JhcnMnXX0gc2l6ZT1cImxnXCIgZml4ZWRXaWR0aCAvPn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3JvdXRlTGlzdC5tYXAoKHBhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7bG9jYXRpb24ub3JpZ2lufS8ke2xhbmd9JHtwYWdlLnBhdGhuYW1lfWB9IGtleT17cGFnZS5pbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYmFyc19idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Y29tbW9uLm5hdltwYWdlLmluZGV4XX1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0JUQlBvcG92ZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGFuZ3VhZ2VcIj5cbiAgICAgICAgICAgIDxCVEJQb3BvdmVyXG4gICAgICAgICAgICAgIGlkPVwibGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICB3aXRoQXJyb3c9e2ZhbHNlfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXs8RkFJIGNsYXNzTmFtZT1cImxhbmd1YWdlX3RyaWdnZXJcIiBpY29uPXtbJ2ZhcycsICdnbG9iZSddfSBzaXplPVwibGdcIiBmaXhlZFdpZHRoIC8+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGFuZ0xpc3QubWFwKChsYW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e19nZXRMYW5ndWFnZVVybChsYW5nLmluZGV4KX0ga2V5PXtwYWdlLmluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJsYW5ndWFnZV9idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICB7bGFuZy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0JUQlBvcG92ZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./modules/layout/Header.jsx\n");

/***/ })

})