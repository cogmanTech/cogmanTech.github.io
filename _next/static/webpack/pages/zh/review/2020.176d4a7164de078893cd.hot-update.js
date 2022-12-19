webpackHotUpdate_N_E("pages/zh/review/2020",{

/***/ "./modules/layout/Header.jsx":
/*!***********************************!*\
  !*** ./modules/layout/Header.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_imgix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-imgix */ \"./node_modules/react-imgix/es/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blacktoolbox/react-popover */ \"./node_modules/@blacktoolbox/react-popover/esm/index.js\");\n/* harmony import */ var _blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blacktoolbox/react-button */ \"./node_modules/@blacktoolbox/react-button/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/noelchang/Documents/GitHub/cogman/official_page/modules/layout/Header.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Header = function Header(props) {\n  _s();\n\n  var lang = props.lang,\n      common = props.common,\n      _props$langList = props.langList,\n      langList = _props$langList === void 0 ? [] : _props$langList,\n      _props$routeList = props.routeList,\n      routeList = _props$routeList === void 0 ? [] : _props$routeList;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isPositionTop = _useState[0],\n      updatePositionTop = _useState[1];\n\n  var _hashMove = function _hashMove(hash) {\n    var target = window.document.getElementById(hash);\n\n    if (target) {\n      window.scrollTo(0, Math.max(0, target.offsetTop));\n    }\n  };\n\n  var _scrollPage = function _scrollPage() {\n    updatePositionTop(window.pageYOffset === 0);\n  };\n\n  var _redirectPage = function _redirectPage(page) {\n    window.location.href = \"\".concat(window.location.origin, \"/\").concat(lang).concat(page.pathname);\n  };\n\n  var _switchBackgroundColor = function _switchBackgroundColor() {\n    return isPositionTop ? 'navbar-ghost' : 'navbar-solid';\n  };\n\n  var _switchLanguage = function _switchLanguage(langIndex) {\n    if (lang !== langIndex) {\n      var pathname = window.location.pathname.split('/');\n      pathname[1] = langIndex;\n      window.location.href = \"\".concat(window.location.origin).concat(pathname.join('/')).concat(window.location.hash);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var hash = window.location.hash.slice(1);\n\n    _hashMove(hash);\n\n    _scrollPage();\n\n    window.addEventListener('scroll', _scrollPage);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(['layout_head', _switchBackgroundColor()]),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        className: \"head_nav\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"nav_brand\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"brand_logo\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_imgix__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              src: \"/static/brand.png\",\n              alt: \"brand\",\n              width: 48,\n              height: 48\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            href: \"/\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              className: \"brand_name\",\n              children: common.brand\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"nav_menu\",\n          children: routeList.map(function (page) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n              className: \"menu_button\",\n              onClick: function onClick() {\n                return _redirectPage(page);\n              },\n              children: common.nav[page.index]\n            }, page.index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"nav_bars\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            id: \"bars\",\n            withArrow: false,\n            trigger: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n              className: \"bars_trigger\",\n              icon: ['fas', 'bars'],\n              size: \"lg\",\n              fixedWidth: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 24\n            }, _this),\n            children: routeList.map(function (page) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n                className: \"bars_button\",\n                onClick: function onClick() {\n                  _redirectPage(page);\n                },\n                children: common.nav[page.index]\n              }, page.index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 19\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"nav_language\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            id: \"language\",\n            withArrow: false,\n            trigger: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n              className: \"language_trigger\",\n              icon: ['fas', 'globe'],\n              size: \"lg\",\n              fixedWidth: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 93,\n              columnNumber: 24\n            }, _this),\n            children: langList.map(function (lang) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n                className: \"language_button\",\n                onClick: function onClick() {\n                  _switchLanguage(lang.index);\n                },\n                children: lang.title\n              }, lang.index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 97,\n                columnNumber: 19\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"9zRw3Z/86RkgxEiWjiO0JXBshOg=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9sYXlvdXQvSGVhZGVyLmpzeD8wYmRlIl0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwibGFuZyIsImNvbW1vbiIsImxhbmdMaXN0Iiwicm91dGVMaXN0IiwidXNlU3RhdGUiLCJpc1Bvc2l0aW9uVG9wIiwidXBkYXRlUG9zaXRpb25Ub3AiLCJfaGFzaE1vdmUiLCJoYXNoIiwidGFyZ2V0Iiwid2luZG93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbFRvIiwiTWF0aCIsIm1heCIsIm9mZnNldFRvcCIsIl9zY3JvbGxQYWdlIiwicGFnZVlPZmZzZXQiLCJfcmVkaXJlY3RQYWdlIiwicGFnZSIsImxvY2F0aW9uIiwiaHJlZiIsIm9yaWdpbiIsInBhdGhuYW1lIiwiX3N3aXRjaEJhY2tncm91bmRDb2xvciIsIl9zd2l0Y2hMYW5ndWFnZSIsImxhbmdJbmRleCIsInNwbGl0Iiwiam9pbiIsInVzZUVmZmVjdCIsInNsaWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzbmFtZXMiLCJicmFuZCIsIm1hcCIsIm5hdiIsImluZGV4IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNoQkMsSUFEZ0IsR0FDZ0NELEtBRGhDLENBQ2hCQyxJQURnQjtBQUFBLE1BQ1ZDLE1BRFUsR0FDZ0NGLEtBRGhDLENBQ1ZFLE1BRFU7QUFBQSx3QkFDZ0NGLEtBRGhDLENBQ0ZHLFFBREU7QUFBQSxNQUNGQSxRQURFLGdDQUNTLEVBRFQ7QUFBQSx5QkFDZ0NILEtBRGhDLENBQ2FJLFNBRGI7QUFBQSxNQUNhQSxTQURiLGlDQUN5QixFQUR6Qjs7QUFBQSxrQkFFbUJDLHNEQUFRLENBQUMsSUFBRCxDQUYzQjtBQUFBLE1B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QXlDRTtBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUFBLGlDQUNFLHFFQUFDLG1FQUFEO0FBQ0UsY0FBRSxFQUFDLFVBREw7QUFFRSxxQkFBUyxFQUFFLEtBRmI7QUFHRSxtQkFBTyxlQUFFLHFFQUFDLDhFQUFEO0FBQUssdUJBQVMsRUFBQyxrQkFBZjtBQUFrQyxrQkFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLE9BQVIsQ0FBeEM7QUFBMEQsa0JBQUksRUFBQyxJQUEvRDtBQUFvRSx3QkFBVTtBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhYO0FBQUEsc0JBS0duQyxRQUFRLENBQUNpQyxHQUFULENBQWEsVUFBQ25DLElBQUQsRUFBVTtBQUN0QixrQ0FDRSxxRUFBQyxpRUFBRDtBQUNFLHlCQUFTLEVBQUMsaUJBRFo7QUFHRSx1QkFBTyxFQUFFLG1CQUFNO0FBQ2IwQixpQ0FBZSxDQUFDMUIsSUFBSSxDQUFDcUMsS0FBTixDQUFmO0FBQ0QsaUJBTEg7QUFBQSwwQkFPR3JDLElBQUksQ0FBQ3NDO0FBUFIsaUJBRU90QyxJQUFJLENBQUNxQyxLQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFXRCxhQVpBO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxRUQsQ0F6R0Q7O0dBQU12QyxNOztLQUFBQSxNO0FBMkdTQSxxRUFBZiIsImZpbGUiOiIuL21vZHVsZXMvbGF5b3V0L0hlYWRlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBJbWdpeCBmcm9tICdyZWFjdC1pbWdpeCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gYXMgRkFJIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCBCVEJQb3BvdmVyIGZyb20gJ0BibGFja3Rvb2xib3gvcmVhY3QtcG9wb3Zlcic7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAYmxhY2t0b29sYm94L3JlYWN0LWJ1dHRvbic7XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGxhbmcsIGNvbW1vbiwgbGFuZ0xpc3QgPSBbXSwgcm91dGVMaXN0ID0gW10gfSA9IHByb3BzO1xuICBjb25zdCBbaXNQb3NpdGlvblRvcCwgdXBkYXRlUG9zaXRpb25Ub3BdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgX2hhc2hNb3ZlID0gKGhhc2gpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIE1hdGgubWF4KDAsIHRhcmdldC5vZmZzZXRUb3ApKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgX3Njcm9sbFBhZ2UgPSAoKSA9PiB7XG4gICAgdXBkYXRlUG9zaXRpb25Ub3Aod2luZG93LnBhZ2VZT2Zmc2V0ID09PSAwKTtcbiAgfTtcblxuICBjb25zdCBfcmVkaXJlY3RQYWdlID0gKHBhZ2UpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59LyR7bGFuZ30ke3BhZ2UucGF0aG5hbWV9YDtcbiAgfTtcbiAgY29uc3QgX3N3aXRjaEJhY2tncm91bmRDb2xvciA9ICgpID0+IHtcbiAgICByZXR1cm4gaXNQb3NpdGlvblRvcCA/ICduYXZiYXItZ2hvc3QnIDogJ25hdmJhci1zb2xpZCc7XG4gIH07XG5cbiAgY29uc3QgX3N3aXRjaExhbmd1YWdlID0gKGxhbmdJbmRleCkgPT4ge1xuICAgIGlmIChsYW5nICE9PSBsYW5nSW5kZXgpIHtcbiAgICAgIGNvbnN0IHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG4gICAgICBwYXRobmFtZVsxXSA9IGxhbmdJbmRleDtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke3BhdGhuYW1lLmpvaW4oJy8nKX0ke3dpbmRvdy5sb2NhdGlvbi5oYXNofWA7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xuICAgIF9oYXNoTW92ZShoYXNoKTtcbiAgICBfc2Nyb2xsUGFnZSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfc2Nyb2xsUGFnZSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbJ2xheW91dF9oZWFkJywgX3N3aXRjaEJhY2tncm91bmRDb2xvcigpXSl9PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoZWFkX25hdlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2JyYW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kX2xvZ29cIj5cbiAgICAgICAgICAgICAgPEltZ2l4IHNyYz1cIi9zdGF0aWMvYnJhbmQucG5nXCIgYWx0PVwiYnJhbmRcIiB3aWR0aD17NDh9IGhlaWdodD17NDh9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJicmFuZF9uYW1lXCI+XG4gICAgICAgICAgICAgICAge2NvbW1vbi5icmFuZH1cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9tZW51XCI+XG4gICAgICAgICAgICB7cm91dGVMaXN0Lm1hcCgocGFnZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibWVudV9idXR0b25cIiBrZXk9e3BhZ2UuaW5kZXh9IG9uQ2xpY2s9eygpID0+IF9yZWRpcmVjdFBhZ2UocGFnZSl9PlxuICAgICAgICAgICAgICAgICAge2NvbW1vbi5uYXZbcGFnZS5pbmRleF19XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9iYXJzXCI+XG4gICAgICAgICAgICA8QlRCUG9wb3ZlclxuICAgICAgICAgICAgICBpZD1cImJhcnNcIlxuICAgICAgICAgICAgICB3aXRoQXJyb3c9e2ZhbHNlfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXs8RkFJIGNsYXNzTmFtZT1cImJhcnNfdHJpZ2dlclwiIGljb249e1snZmFzJywgJ2JhcnMnXX0gc2l6ZT1cImxnXCIgZml4ZWRXaWR0aCAvPn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3JvdXRlTGlzdC5tYXAoKHBhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYXJzX2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGtleT17cGFnZS5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIF9yZWRpcmVjdFBhZ2UocGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjb21tb24ubmF2W3BhZ2UuaW5kZXhdfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0JUQlBvcG92ZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGFuZ3VhZ2VcIj5cbiAgICAgICAgICAgIDxCVEJQb3BvdmVyXG4gICAgICAgICAgICAgIGlkPVwibGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICB3aXRoQXJyb3c9e2ZhbHNlfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXs8RkFJIGNsYXNzTmFtZT1cImxhbmd1YWdlX3RyaWdnZXJcIiBpY29uPXtbJ2ZhcycsICdnbG9iZSddfSBzaXplPVwibGdcIiBmaXhlZFdpZHRoIC8+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGFuZ0xpc3QubWFwKChsYW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGFuZ3VhZ2VfYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtsYW5nLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgX3N3aXRjaExhbmd1YWdlKGxhbmcuaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bGFuZy50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9CVEJQb3BvdmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/layout/Header.jsx\n");

/***/ })

})