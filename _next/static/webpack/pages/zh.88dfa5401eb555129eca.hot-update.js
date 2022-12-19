webpackHotUpdate_N_E("pages/zh",{

/***/ "./modules/layout/Header.jsx":
/*!***********************************!*\
  !*** ./modules/layout/Header.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_imgix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-imgix */ \"./node_modules/react-imgix/es/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blacktoolbox/react-popover */ \"./node_modules/@blacktoolbox/react-popover/esm/index.js\");\n/* harmony import */ var _blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blacktoolbox/react-button */ \"./node_modules/@blacktoolbox/react-button/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/noelchang/Documents/GitHub/cogman/official_page/modules/layout/Header.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Header = function Header(props) {\n  _s();\n\n  var lang = props.lang,\n      common = props.common,\n      _props$langList = props.langList,\n      langList = _props$langList === void 0 ? [] : _props$langList,\n      _props$routeList = props.routeList,\n      routeList = _props$routeList === void 0 ? [] : _props$routeList;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isPositionTop = _useState[0],\n      updatePositionTop = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      location = _useState2[0],\n      updateLocation = _useState2[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _hashMove = function _hashMove(hash) {\n    var target = window.document.getElementById(hash);\n\n    if (target) {\n      window.scrollTo(0, Math.max(0, target.offsetTop));\n    }\n  };\n\n  var _scrollPage = function _scrollPage() {\n    updatePositionTop(window.pageYOffset === 0);\n  };\n\n  var _switchBackgroundColor = function _switchBackgroundColor() {\n    return isPositionTop ? 'navbar-ghost' : 'navbar-solid';\n  };\n\n  var _getLanguageUrl = function _getLanguageUrl(langIndex) {\n    if (lang !== langIndex) {\n      var _location$pathname;\n\n      var pathname = (_location$pathname = location.pathname) === null || _location$pathname === void 0 ? void 0 : _location$pathname.split('/');\n      pathname[1] = langIndex;\n      return \"\".concat(location.origin).concat(pathname.join('/')).concat(location.hash);\n    } else {\n      return \"\".concat(location.origin).concat(location.location).concat(location.hash);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    updateLocation(window.location);\n  }, [router]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var hash = window.location.hash.slice(1);\n\n    _hashMove(hash);\n\n    _scrollPage();\n\n    window.addEventListener('scroll', _scrollPage);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(['layout_head', _switchBackgroundColor()]),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        className: \"head_nav\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"nav_brand\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"brand_logo\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_imgix__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              src: \"/static/brand.png\",\n              alt: \"brand\",\n              width: 48,\n              height: 48\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"\".concat(location.origin, \"/\").concat(lang, \"/\"),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              className: \"brand_name\",\n              children: common.brand\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"nav_menu\",\n          children: routeList.map(function (page) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"\".concat(location.origin, \"/\").concat(lang).concat(page.pathname),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n                className: \"menu_button\",\n                children: common.nav[page.index]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 19\n              }, _this)\n            }, page.index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"nav_bars\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            id: \"bars\",\n            withArrow: false,\n            trigger: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n              className: \"bars_trigger\",\n              icon: ['fas', 'bars'],\n              size: \"lg\",\n              fixedWidth: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 24\n            }, _this),\n            children: routeList.map(function (page) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                href: \"\".concat(location.origin, \"/\").concat(lang).concat(page.pathname),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n                  className: \"bars_button\",\n                  children: common.nav[page.index]\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 84,\n                  columnNumber: 21\n                }, _this)\n              }, page.index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 83,\n                columnNumber: 19\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"nav_language\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            id: \"language\",\n            withArrow: false,\n            trigger: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n              className: \"language_trigger\",\n              icon: ['fas', 'globe'],\n              size: \"lg\",\n              fixedWidth: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 24\n            }, _this),\n            children: langList.map(function (lang) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                href: _getLanguageUrl(lang.index),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n                  className: \"language_button\",\n                  children: lang.title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 101,\n                  columnNumber: 21\n                }, _this)\n              }, lang.index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 100,\n                columnNumber: 19\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"jiFbOk3Cddxg8mqBFWBYWlpITBE=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9sYXlvdXQvSGVhZGVyLmpzeD8wYmRlIl0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwibGFuZyIsImNvbW1vbiIsImxhbmdMaXN0Iiwicm91dGVMaXN0IiwidXNlU3RhdGUiLCJpc1Bvc2l0aW9uVG9wIiwidXBkYXRlUG9zaXRpb25Ub3AiLCJsb2NhdGlvbiIsInVwZGF0ZUxvY2F0aW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwiX2hhc2hNb3ZlIiwiaGFzaCIsInRhcmdldCIsIndpbmRvdyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxUbyIsIk1hdGgiLCJtYXgiLCJvZmZzZXRUb3AiLCJfc2Nyb2xsUGFnZSIsInBhZ2VZT2Zmc2V0IiwiX3N3aXRjaEJhY2tncm91bmRDb2xvciIsIl9nZXRMYW5ndWFnZVVybCIsImxhbmdJbmRleCIsInBhdGhuYW1lIiwic3BsaXQiLCJvcmlnaW4iLCJqb2luIiwidXNlRWZmZWN0Iiwic2xpY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NuYW1lcyIsImJyYW5kIiwibWFwIiwicGFnZSIsIm5hdiIsImluZGV4IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNoQkMsSUFEZ0IsR0FDZ0NELEtBRGhDLENBQ2hCQyxJQURnQjtBQUFBLE1BQ1ZDLE1BRFUsR0FDZ0NGLEtBRGhDLENBQ1ZFLE1BRFU7QUFBQSx3QkFDZ0NGLEtBRGhDLENBQ0ZHLFFBREU7QUFBQSxNQUNGQSxRQURFLGdDQUNTLEVBRFQ7QUFBQSx5QkFDZ0NILEtBRGhDLENBQ2FJLFNBRGI7QUFBQSxNQUNhQSxTQURiLGlDQUN5QixFQUR6Qjs7QUFBQSxrQkFFbUJDLHNEQUFRLENBQUMsSUFB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O1VBSVdZLHFEOzs7S0FKWFosTTtBQTBHU0EscUVBQWYiLCJmaWxlIjoiLi9tb2R1bGVzL2xheW91dC9IZWFkZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBJbWdpeCBmcm9tICdyZWFjdC1pbWdpeCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gYXMgRkFJIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCBCVEJQb3BvdmVyIGZyb20gJ0BibGFja3Rvb2xib3gvcmVhY3QtcG9wb3Zlcic7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAYmxhY2t0b29sYm94L3JlYWN0LWJ1dHRvbic7XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGxhbmcsIGNvbW1vbiwgbGFuZ0xpc3QgPSBbXSwgcm91dGVMaXN0ID0gW10gfSA9IHByb3BzO1xuICBjb25zdCBbaXNQb3NpdGlvblRvcCwgdXBkYXRlUG9zaXRpb25Ub3BdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtsb2NhdGlvbiwgdXBkYXRlTG9jYXRpb25dID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBfaGFzaE1vdmUgPSAoaGFzaCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgTWF0aC5tYXgoMCwgdGFyZ2V0Lm9mZnNldFRvcCkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBfc2Nyb2xsUGFnZSA9ICgpID0+IHtcbiAgICB1cGRhdGVQb3NpdGlvblRvcCh3aW5kb3cucGFnZVlPZmZzZXQgPT09IDApO1xuICB9O1xuXG4gIGNvbnN0IF9zd2l0Y2hCYWNrZ3JvdW5kQ29sb3IgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGlzUG9zaXRpb25Ub3AgPyAnbmF2YmFyLWdob3N0JyA6ICduYXZiYXItc29saWQnO1xuICB9O1xuXG4gIGNvbnN0IF9nZXRMYW5ndWFnZVVybCA9IChsYW5nSW5kZXgpID0+IHtcbiAgICBpZiAobGFuZyAhPT0gbGFuZ0luZGV4KSB7XG4gICAgICBjb25zdCBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lPy5zcGxpdCgnLycpO1xuICAgICAgcGF0aG5hbWVbMV0gPSBsYW5nSW5kZXg7XG4gICAgICByZXR1cm4gYCR7bG9jYXRpb24ub3JpZ2lufSR7cGF0aG5hbWUuam9pbignLycpfSR7bG9jYXRpb24uaGFzaH1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYCR7bG9jYXRpb24ub3JpZ2lufSR7bG9jYXRpb24ubG9jYXRpb259JHtsb2NhdGlvbi5oYXNofWA7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXBkYXRlTG9jYXRpb24od2luZG93LmxvY2F0aW9uKVxuICB9LCBbcm91dGVyXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKTtcbiAgICBfaGFzaE1vdmUoaGFzaCk7XG4gICAgX3Njcm9sbFBhZ2UoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgX3Njcm9sbFBhZ2UpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWydsYXlvdXRfaGVhZCcsIF9zd2l0Y2hCYWNrZ3JvdW5kQ29sb3IoKV0pfT5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGVhZF9uYXZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9icmFuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZF9sb2dvXCI+XG4gICAgICAgICAgICAgIDxJbWdpeCBzcmM9XCIvc3RhdGljL2JyYW5kLnBuZ1wiIGFsdD1cImJyYW5kXCIgd2lkdGg9ezQ4fSBoZWlnaHQ9ezQ4fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YSBocmVmPXtgJHtsb2NhdGlvbi5vcmlnaW59LyR7bGFuZ30vYH0+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJicmFuZF9uYW1lXCI+XG4gICAgICAgICAgICAgICAge2NvbW1vbi5icmFuZH1cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9tZW51XCI+XG4gICAgICAgICAgICB7cm91dGVMaXN0Lm1hcCgocGFnZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Ake2xvY2F0aW9uLm9yaWdpbn0vJHtsYW5nfSR7cGFnZS5wYXRobmFtZX1gfSBrZXk9e3BhZ2UuaW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtZW51X2J1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICB7Y29tbW9uLm5hdltwYWdlLmluZGV4XX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2JhcnNcIj5cbiAgICAgICAgICAgIDxCVEJQb3BvdmVyXG4gICAgICAgICAgICAgIGlkPVwiYmFyc1wiXG4gICAgICAgICAgICAgIHdpdGhBcnJvdz17ZmFsc2V9XG4gICAgICAgICAgICAgIHRyaWdnZXI9ezxGQUkgY2xhc3NOYW1lPVwiYmFyc190cmlnZ2VyXCIgaWNvbj17WydmYXMnLCAnYmFycyddfSBzaXplPVwibGdcIiBmaXhlZFdpZHRoIC8+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cm91dGVMaXN0Lm1hcCgocGFnZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtgJHtsb2NhdGlvbi5vcmlnaW59LyR7bGFuZ30ke3BhZ2UucGF0aG5hbWV9YH0ga2V5PXtwYWdlLmluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJiYXJzX2J1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtjb21tb24ubmF2W3BhZ2UuaW5kZXhdfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvQlRCUG9wb3Zlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9sYW5ndWFnZVwiPlxuICAgICAgICAgICAgPEJUQlBvcG92ZXJcbiAgICAgICAgICAgICAgaWQ9XCJsYW5ndWFnZVwiXG4gICAgICAgICAgICAgIHdpdGhBcnJvdz17ZmFsc2V9XG4gICAgICAgICAgICAgIHRyaWdnZXI9ezxGQUkgY2xhc3NOYW1lPVwibGFuZ3VhZ2VfdHJpZ2dlclwiIGljb249e1snZmFzJywgJ2dsb2JlJ119IHNpemU9XCJsZ1wiIGZpeGVkV2lkdGggLz59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsYW5nTGlzdC5tYXAoKGxhbmcpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17X2dldExhbmd1YWdlVXJsKGxhbmcuaW5kZXgpfSBrZXk9e2xhbmcuaW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImxhbmd1YWdlX2J1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtsYW5nLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvQlRCUG9wb3Zlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/layout/Header.jsx\n");

/***/ })

})