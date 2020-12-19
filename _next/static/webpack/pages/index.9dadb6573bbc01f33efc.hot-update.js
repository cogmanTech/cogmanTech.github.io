webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/layout/Header.jsx":
/*!***********************************!*\
  !*** ./modules/layout/Header.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_imgix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-imgix */ "./node_modules/react-imgix/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blacktoolbox/react-popover */ "./node_modules/@blacktoolbox/react-popover/esm/index.js");
/* harmony import */ var _blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blacktoolbox/react-button */ "./node_modules/@blacktoolbox/react-button/esm/index.js");


var _jsxFileName = "E:\\Cogman\\official_page\\modules\\layout\\Header.jsx",
    _this = undefined,
    _s = $RefreshSig$();








var Header = function Header(props) {
  _s();

  var lang = props.lang,
      metaData = props.metaData,
      _props$langList = props.langList,
      langList = _props$langList === void 0 ? [] : _props$langList,
      _props$routeList = props.routeList,
      routeList = _props$routeList === void 0 ? [] : _props$routeList;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isPositionTop = _useState[0],
      updatePositionTop = _useState[1];

  var _hashMove = function _hashMove(hash) {
    var target = window.document.getElementById(hash);

    if (target) {
      window.scrollTo(0, Math.max(0, target.offsetTop));
    }
  };

  var _scrollPage = function _scrollPage() {
    if (window.pageYOffset === 0) {
      updatePositionTop(true);
    } else {
      updatePositionTop(false);
    }
  };

  var _redirectPage = function _redirectPage(page) {
    window.location.href = "".concat(window.location.origin, "/").concat(lang).concat(page.pathname);
  };

  var _switchBackgroundColor = function _switchBackgroundColor() {
    return isPositionTop ? 'navbar-ghost' : 'navbar-solid';
  };

  var _switchLanguage = function _switchLanguage(langIndex) {
    if (lang !== langIndex) {
      var pathname = window.location.pathname.split('/');
      pathname[1] = langIndex;
      window.location.href = "".concat(window.location.origin).concat(pathname.join('/')).concat(window.location.hash);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var hash = window.location.hash.slice(1);

    _hashMove(hash);

    _scrollPage();

    window.addEventListener('scroll', _scrollPage);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(['layout_head', _switchBackgroundColor()]),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        className: "head_nav",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "nav_brand",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "brand_logo",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_imgix__WEBPACK_IMPORTED_MODULE_3__["default"], {
              src: "/static/brand.png",
              alt: "brand",
              width: 48,
              height: 48
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "brand_name",
            children: metaData.brand
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "nav_menu",
          children: routeList.map(function (page) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
              className: "menu_button hidden show-md",
              onClick: function onClick() {
                return _redirectPage(page);
              },
              children: metaData.nav[page.index]
            }, page.index, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "nav_menu",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_5__["default"], {
            withArrow: false,
            trigger: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
              className: "menu_trigger",
              icon: ['fas', 'bars'],
              size: "lg",
              fixedWidth: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 24
            }, _this),
            children: routeList.map(function (page) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                className: "menu_button",
                onClick: function onClick() {
                  _redirectPage(page);
                },
                children: metaData.nav[page.index]
              }, page.index, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "nav_language",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_5__["default"], {
            withArrow: false,
            trigger: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
              className: "language_trigger",
              icon: ['fas', 'globe'],
              size: "lg",
              fixedWidth: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 24
            }, _this),
            children: langList.map(function (lang) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                className: "language_button",
                onClick: function onClick() {
                  _switchLanguage(lang.index);
                },
                children: lang.title
              }, lang.index, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, _this);
};

_s(Header, "9zRw3Z/86RkgxEiWjiO0JXBshOg=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9sYXlvdXQvSGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsImxhbmciLCJtZXRhRGF0YSIsImxhbmdMaXN0Iiwicm91dGVMaXN0IiwidXNlU3RhdGUiLCJpc1Bvc2l0aW9uVG9wIiwidXBkYXRlUG9zaXRpb25Ub3AiLCJfaGFzaE1vdmUiLCJoYXNoIiwidGFyZ2V0Iiwid2luZG93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbFRvIiwiTWF0aCIsIm1heCIsIm9mZnNldFRvcCIsIl9zY3JvbGxQYWdlIiwicGFnZVlPZmZzZXQiLCJfcmVkaXJlY3RQYWdlIiwicGFnZSIsImxvY2F0aW9uIiwiaHJlZiIsIm9yaWdpbiIsInBhdGhuYW1lIiwiX3N3aXRjaEJhY2tncm91bmRDb2xvciIsIl9zd2l0Y2hMYW5ndWFnZSIsImxhbmdJbmRleCIsInNwbGl0Iiwiam9pbiIsInVzZUVmZmVjdCIsInNsaWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzbmFtZXMiLCJicmFuZCIsIm1hcCIsIm5hdiIsImluZGV4IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNoQkMsSUFEZ0IsR0FDa0NELEtBRGxDLENBQ2hCQyxJQURnQjtBQUFBLE1BQ1ZDLFFBRFUsR0FDa0NGLEtBRGxDLENBQ1ZFLFFBRFU7QUFBQSx3QkFDa0NGLEtBRGxDLENBQ0FHLFFBREE7QUFBQSxNQUNBQSxRQURBLGdDQUNXLEVBRFg7QUFBQSx5QkFDa0NILEtBRGxDLENBQ2VJLFNBRGY7QUFBQSxNQUNlQSxTQURmLGlDQUMyQixFQUQzQjs7QUFBQSxrQkFFbUJDLHNEQUFRLENBQUMsSUFBRCxDQUYzQjtBQUFBLE1B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LEVBQUMsY0FBZjtBQUFBLGlDQUNFLHFFQUFDLG1FQUFEO0FBQ0UscUJBQVMsRUFBRSxLQURiO0FBRUUsbUJBQU8sZUFBRSxxRUFBQyw4RUFBRDtBQUFLLHVCQUFTLEVBQUMsa0JBQWY7QUFBa0Msa0JBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxPQUFSLENBQXhDO0FBQTBELGtCQUFJLEVBQUMsSUFBL0Q7QUFBb0Usd0JBQVU7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGWDtBQUFBLHNCQUlHbkMsUUFBUSxDQUFDaUMsR0FBVCxDQUFhLFVBQUNuQyxJQUFELEVBQVU7QUFDdEIsa0NBQ0UscUVBQUMsaUVBQUQ7QUFDRSx5QkFBUyxFQUFDLGlCQURaO0FBR0UsdUJBQU8sRUFBRSxtQkFBTTtBQUNiMEIsaUNBQWUsQ0FBQzFCLElBQUksQ0FBQ3FDLEtBQU4sQ0FBZjtBQUNELGlCQUxIO0FBQUEsMEJBT0dyQyxJQUFJLENBQUNzQztBQVBSLGlCQUVPdEMsSUFBSSxDQUFDcUMsS0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBV0QsYUFaQTtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0RELENBdkdEOztHQUFNdkMsTTs7S0FBQUEsTTtBQXlHU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWRhZGI2NTczYmJjMDFmMzNlZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSW1naXggZnJvbSAncmVhY3QtaW1naXgnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIGFzIEZBSSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgQlRCUG9wb3ZlciBmcm9tICdAYmxhY2t0b29sYm94L3JlYWN0LXBvcG92ZXInO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQGJsYWNrdG9vbGJveC9yZWFjdC1idXR0b24nO1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBsYW5nLCBtZXRhRGF0YSwgbGFuZ0xpc3QgPSBbXSwgcm91dGVMaXN0ID0gW10gfSA9IHByb3BzO1xuICBjb25zdCBbaXNQb3NpdGlvblRvcCwgdXBkYXRlUG9zaXRpb25Ub3BdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgX2hhc2hNb3ZlID0gKGhhc2gpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIE1hdGgubWF4KDAsIHRhcmdldC5vZmZzZXRUb3ApKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgX3Njcm9sbFBhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gMCkge1xuICAgICAgdXBkYXRlUG9zaXRpb25Ub3AodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZVBvc2l0aW9uVG9wKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgX3JlZGlyZWN0UGFnZSA9IChwYWdlKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS8ke2xhbmd9JHtwYWdlLnBhdGhuYW1lfWA7XG4gIH07XG4gIGNvbnN0IF9zd2l0Y2hCYWNrZ3JvdW5kQ29sb3IgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGlzUG9zaXRpb25Ub3AgPyAnbmF2YmFyLWdob3N0JyA6ICduYXZiYXItc29saWQnO1xuICB9O1xuXG4gIGNvbnN0IF9zd2l0Y2hMYW5ndWFnZSA9IChsYW5nSW5kZXgpID0+IHtcbiAgICBpZiAobGFuZyAhPT0gbGFuZ0luZGV4KSB7XG4gICAgICBjb25zdCBwYXRobmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpO1xuICAgICAgcGF0aG5hbWVbMV0gPSBsYW5nSW5kZXg7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHtwYXRobmFtZS5qb2luKCcvJyl9JHt3aW5kb3cubG9jYXRpb24uaGFzaH1gO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKTtcbiAgICBfaGFzaE1vdmUoaGFzaCk7XG4gICAgX3Njcm9sbFBhZ2UoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgX3Njcm9sbFBhZ2UpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWydsYXlvdXRfaGVhZCcsIF9zd2l0Y2hCYWNrZ3JvdW5kQ29sb3IoKV0pfT5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGVhZF9uYXZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9icmFuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZF9sb2dvXCI+XG4gICAgICAgICAgICAgIDxJbWdpeCBzcmM9XCIvc3RhdGljL2JyYW5kLnBuZ1wiIGFsdD1cImJyYW5kXCIgd2lkdGg9ezQ4fSBoZWlnaHQ9ezQ4fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYnJhbmRfbmFtZVwiPnttZXRhRGF0YS5icmFuZH08L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X21lbnVcIj5cbiAgICAgICAgICAgIHtyb3V0ZUxpc3QubWFwKChwYWdlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtZW51X2J1dHRvbiBoaWRkZW4gc2hvdy1tZFwiIGtleT17cGFnZS5pbmRleH0gb25DbGljaz17KCkgPT4gX3JlZGlyZWN0UGFnZShwYWdlKX0+XG4gICAgICAgICAgICAgICAgICB7bWV0YURhdGEubmF2W3BhZ2UuaW5kZXhdfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbWVudVwiPlxuICAgICAgICAgICAgPEJUQlBvcG92ZXJcbiAgICAgICAgICAgICAgd2l0aEFycm93PXtmYWxzZX1cbiAgICAgICAgICAgICAgdHJpZ2dlcj17PEZBSSBjbGFzc05hbWU9XCJtZW51X3RyaWdnZXJcIiBpY29uPXtbJ2ZhcycsICdiYXJzJ119IHNpemU9XCJsZ1wiIGZpeGVkV2lkdGggLz59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtyb3V0ZUxpc3QubWFwKChwYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudV9idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBrZXk9e3BhZ2UuaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBfcmVkaXJlY3RQYWdlKHBhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bWV0YURhdGEubmF2W3BhZ2UuaW5kZXhdfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0JUQlBvcG92ZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGFuZ3VhZ2VcIj5cbiAgICAgICAgICAgIDxCVEJQb3BvdmVyXG4gICAgICAgICAgICAgIHdpdGhBcnJvdz17ZmFsc2V9XG4gICAgICAgICAgICAgIHRyaWdnZXI9ezxGQUkgY2xhc3NOYW1lPVwibGFuZ3VhZ2VfdHJpZ2dlclwiIGljb249e1snZmFzJywgJ2dsb2JlJ119IHNpemU9XCJsZ1wiIGZpeGVkV2lkdGggLz59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsYW5nTGlzdC5tYXAoKGxhbmcpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYW5ndWFnZV9idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2xhbmcuaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBfc3dpdGNoTGFuZ3VhZ2UobGFuZy5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsYW5nLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0JUQlBvcG92ZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9