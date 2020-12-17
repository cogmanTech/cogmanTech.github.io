webpackHotUpdate_N_E("pages/zh/about",{

/***/ "./components/About.jsx":
/*!******************************!*\
  !*** ./components/About.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blacktoolbox_react_timeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blacktoolbox/react-timeline */ "./node_modules/@blacktoolbox/react-timeline/esm/index.js");
/* harmony import */ var react_imgix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-imgix */ "./node_modules/react-imgix/es/index.js");
/* harmony import */ var _assets_definitions_breakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/definitions/breakpoints */ "./assets/definitions/breakpoints.js");
/* harmony import */ var _assets_definitions_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/definitions/events */ "./assets/definitions/events.js");
/* harmony import */ var _modules_layout___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/layout/ */ "./modules/layout/index.js");
/* harmony import */ var _modules_divider___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/divider/ */ "./modules/divider/index.js");
/* harmony import */ var _modules_grid___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/grid/ */ "./modules/grid/index.js");


var _jsxFileName = "E:\\Cogman\\official_page\\components\\About.jsx",
    _this = undefined,
    _s = $RefreshSig$();










var About = function About(props) {
  _s();

  var lang = props.lang,
      languages = props.languages;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      isSmaller = _useState[0],
      updateWindowSize = _useState[1];

  var typeObj = {
    event: function event(data) {
      var context = languages.basic.events[data.dateTag][data.content];
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "timeline_event",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "event_head",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "context_img",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_imgix__WEBPACK_IMPORTED_MODULE_3__["default"], {
              src: "/static/".concat(context.img),
              alt: "",
              height: 64
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "event_topic",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "context_title",
              children: context.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "context_date",
              children: data.dateTag
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_divider___WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: "context_divider"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "context_description",
          children: context.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this);
    }
  };

  var _resize = function _resize() {
    console.log('window.innerWidth', window.innerWidth);
    console.log('BREAKPOINTS.SM', _assets_definitions_breakpoints__WEBPACK_IMPORTED_MODULE_4__["default"].SM);

    if (window.innerWidth <= _assets_definitions_breakpoints__WEBPACK_IMPORTED_MODULE_4__["default"].SM) {
      if (!isSmaller) {
        updateWindowSize(true);
      }
    } else {
      if (isSmaller) {
        updateWindowSize(false);
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    _resize();

    window.addEventListener('resize', _resize);
    return function cleanup() {
      window.removeEventListener('resize', _resize);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_layout___WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: lang,
    languages: languages,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "about",
      className: "page",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        id: "/",
        className: "page_section section-about",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "section_container text-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_grid___WEBPACK_IMPORTED_MODULE_8__["Row"], {
            spacing: false,
            justify: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_grid___WEBPACK_IMPORTED_MODULE_8__["Col"], {
              col: 12,
              md: 8,
              className: "text-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "container_title",
                children: languages.basic.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        id: "description",
        className: "page_section section-description",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "section_container text-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_grid___WEBPACK_IMPORTED_MODULE_8__["Row"], {
            justify: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_grid___WEBPACK_IMPORTED_MODULE_8__["Col"], {
              col: 12,
              md: 8,
              className: "text-center",
              children: languages.basic.description.map(function (text) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "container_description",
                  children: text
                }, text, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_grid___WEBPACK_IMPORTED_MODULE_8__["Row"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_grid___WEBPACK_IMPORTED_MODULE_8__["Col"], {
              col: 12,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blacktoolbox_react_timeline__WEBPACK_IMPORTED_MODULE_2__["default"], {
                nodeList: _assets_definitions_events__WEBPACK_IMPORTED_MODULE_5__["default"],
                typeObj: typeObj,
                align: isSmaller ? "left" : "center",
                position: "x"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, _this);
};

_s(About, "7ZK/eAgqvtcXWqlBVzqhVOZanh4=");

_c = About;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c;

$RefreshReg$(_c, "About");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BYm91dC5qc3giXSwibmFtZXMiOlsiQWJvdXQiLCJwcm9wcyIsImxhbmciLCJsYW5ndWFnZXMiLCJ1c2VTdGF0ZSIsImlzU21hbGxlciIsInVwZGF0ZVdpbmRvd1NpemUiLCJ0eXBlT2JqIiwiZXZlbnQiLCJkYXRhIiwiY29udGV4dCIsImJhc2ljIiwiZXZlbnRzIiwiZGF0ZVRhZyIsImNvbnRlbnQiLCJpbWciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiX3Jlc2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiQlJFQUtQT0lOVFMiLCJTTSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGVhbnVwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsInRleHQiLCJFVkVOVFMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BQ2ZDLElBRGUsR0FDS0QsS0FETCxDQUNmQyxJQURlO0FBQUEsTUFDVEMsU0FEUyxHQUNLRixLQURMLENBQ1RFLFNBRFM7O0FBQUEsa0JBRWVDLHNEQUFRLEVBRnZCO0FBQUEsTUFFaEJDLFNBRmdCO0FBQUEsTUFFTEMsZ0JBRks7O0FBSXZCLE1BQU1DLE9BQU8sR0FBRztBQUNkQyxTQURjLGlCQUNSQyxJQURRLEVBQ0Y7QUFDVixVQUFNQyxPQUFPLEdBQUdQLFNBQVMsQ0FBQ1EsS0FBVixDQUFnQkMsTUFBaEIsQ0FBdUJILElBQUksQ0FBQ0ksT0FBNUIsRUFBcUNKLElBQUksQ0FBQ0ssT0FBMUMsQ0FBaEI7QUFDQSwwQkFDRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFB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ODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gJ0BibGFja3Rvb2xib3gvcmVhY3QtdGltZWxpbmUnO1xuaW1wb3J0IEltZ2l4IGZyb20gJ3JlYWN0LWltZ2l4JztcblxuaW1wb3J0IEJSRUFLUE9JTlRTIGZyb20gJy4uL2Fzc2V0cy9kZWZpbml0aW9ucy9icmVha3BvaW50cyc7XG5pbXBvcnQgRVZFTlRTIGZyb20gJy4uL2Fzc2V0cy9kZWZpbml0aW9ucy9ldmVudHMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9tb2R1bGVzL2xheW91dC8nO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnLi4vbW9kdWxlcy9kaXZpZGVyLyc7XG5pbXBvcnQgKiBhcyBHcmlkIGZyb20gJy4uL21vZHVsZXMvZ3JpZC8nO1xuXG5jb25zdCBBYm91dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGxhbmcsIGxhbmd1YWdlcyB9ID0gcHJvcHM7XG4gIGNvbnN0IFtpc1NtYWxsZXIsIHVwZGF0ZVdpbmRvd1NpemVdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCB0eXBlT2JqID0ge1xuICAgIGV2ZW50KGRhdGEpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBsYW5ndWFnZXMuYmFzaWMuZXZlbnRzW2RhdGEuZGF0ZVRhZ11bZGF0YS5jb250ZW50XTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmVfZXZlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50X2hlYWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV4dF9pbWdcIj5cbiAgICAgICAgICAgICAgPEltZ2l4IHNyYz17YC9zdGF0aWMvJHtjb250ZXh0LmltZ31gfSBhbHQ9XCJcIiBoZWlnaHQ9ezY0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50X3RvcGljXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb250ZXh0X3RpdGxlXCI+e2NvbnRleHQudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGV4dF9kYXRlXCI+e2RhdGEuZGF0ZVRhZ308L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJjb250ZXh0X2RpdmlkZXJcIiAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRleHRfZGVzY3JpcHRpb25cIj57Y29udGV4dC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IF9yZXNpemUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3dpbmRvdy5pbm5lcldpZHRoJywgd2luZG93LmlubmVyV2lkdGgpO1xuICAgIGNvbnNvbGUubG9nKCdCUkVBS1BPSU5UUy5TTScsIEJSRUFLUE9JTlRTLlNNKTtcblxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSBCUkVBS1BPSU5UUy5TTSkge1xuICAgICAgaWYoIWlzU21hbGxlcikge1xuICAgICAgICB1cGRhdGVXaW5kb3dTaXplKHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZihpc1NtYWxsZXIpIHtcbiAgICAgICAgdXBkYXRlV2luZG93U2l6ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBfcmVzaXplKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIF9yZXNpemUpO1xuICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIF9yZXNpemUpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGxhbmc9e2xhbmd9IGxhbmd1YWdlcz17bGFuZ3VhZ2VzfT5cbiAgICAgIDxkaXYgaWQ9XCJhYm91dFwiIGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCIvXCIgY2xhc3NOYW1lPVwicGFnZV9zZWN0aW9uIHNlY3Rpb24tYWJvdXRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fY29udGFpbmVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8R3JpZC5Sb3cgc3BhY2luZz17ZmFsc2V9IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEdyaWQuQ29sIGNvbD17MTJ9IG1kPXs4fSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb250YWluZXJfdGl0bGVcIj57bGFuZ3VhZ2VzLmJhc2ljLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDwvR3JpZC5Db2w+XG4gICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9XCJwYWdlX3NlY3Rpb24gc2VjdGlvbi1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9jb250YWluZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxHcmlkLlJvdyBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxHcmlkLkNvbCBjb2w9ezEyfSBtZD17OH0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7bGFuZ3VhZ2VzLmJhc2ljLmRlc2NyaXB0aW9uLm1hcCgodGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGFpbmVyX2Rlc2NyaXB0aW9uXCIga2V5PXt0ZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9HcmlkLkNvbD5cbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgIDxHcmlkLkNvbCBjb2w9ezEyfT5cbiAgICAgICAgICAgICAgICA8VGltZWxpbmUgbm9kZUxpc3Q9e0VWRU5UU30gdHlwZU9iaj17dHlwZU9ian0gYWxpZ249e2lzU21hbGxlcj8gXCJsZWZ0XCIgOiBcImNlbnRlclwifSBwb3NpdGlvbj1cInhcIiAvPlxuICAgICAgICAgICAgICA8L0dyaWQuQ29sPlxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=