webpackHotUpdate_N_E("pages/zh/contact",{

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
              src: "/brand2.png",
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
              className: "menu_button",
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
          className: "nav_language",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_5__["default"], {
            autoDetect: false,
            showPosition: "bottom",
            showAlign: "end",
            withArrow: false,
            trigger: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
              className: "language_trigger",
              icon: ['fas', 'globe'],
              size: "lg",
              fixedWidth: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
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
                lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9sYXlvdXQvSGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsImxhbmciLCJtZXRhRGF0YSIsImxhbmdMaXN0Iiwicm91dGVMaXN0IiwidXNlU3RhdGUiLCJpc1Bvc2l0aW9uVG9wIiwidXBkYXRlUG9zaXRpb25Ub3AiLCJfaGFzaE1vdmUiLCJoYXNoIiwidGFyZ2V0Iiwid2luZG93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbFRvIiwiTWF0aCIsIm1heCIsIm9mZnNldFRvcCIsIl9zY3JvbGxQYWdlIiwicGFnZVlPZmZzZXQiLCJfcmVkaXJlY3RQYWdlIiwicGFnZSIsImxvY2F0aW9uIiwiaHJlZiIsIm9yaWdpbiIsInBhdGhuYW1lIiwiX3N3aXRjaEJhY2tncm91bmRDb2xvciIsIl9zd2l0Y2hMYW5ndWFnZSIsImxhbmdJbmRleCIsInNwbGl0Iiwiam9pbiIsInVzZUVmZmVjdCIsInNsaWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzbmFtZXMiLCJicmFuZCIsIm1hcCIsIm5hdiIsImluZGV4IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNoQkMsSUFEZ0IsR0FDZ0NELEtBRGhDLENBQ2hCQyxJQURnQjtBQUFBLE1BQ1ZDLFFBRFUsR0FDZ0NGLEtBRGhDLENBQ1ZFLFFBRFU7QUFBQSx3QkFDZ0NGLEtBRGhDLENBQ0FHLFFBREE7QUFBQSxNQUNBQSxRQURBLGdDQUNXLEVBRFg7QUFBQSx5QkFDZ0NILEtBRGhDLENBQ2VJLFNBRGY7QUFBQSxNQUNlQSxTQURmLGlDQUN5QixFQUR6Qjs7QUFBQSxrQkFFbUJDLHNEQUFRLENBQUMsSUFBRCxDQUYzQjtBQUFBLE1B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QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOENELENBdEZEOztHQUFNdkMsTTs7S0FBQUEsTTtBQXdGU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvemgvY29udGFjdC5jZDdjMTMyM2Y4MGM0Y2IwMjliNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBJbWdpeCBmcm9tICdyZWFjdC1pbWdpeCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gYXMgRkFJIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCBCVEJQb3BvdmVyIGZyb20gJ0BibGFja3Rvb2xib3gvcmVhY3QtcG9wb3Zlcic7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAYmxhY2t0b29sYm94L3JlYWN0LWJ1dHRvbic7XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGxhbmcsIG1ldGFEYXRhLCBsYW5nTGlzdCA9IFtdLCByb3V0ZUxpc3Q9W10gfSA9IHByb3BzO1xuICBjb25zdCBbaXNQb3NpdGlvblRvcCwgdXBkYXRlUG9zaXRpb25Ub3BdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgX2hhc2hNb3ZlID0gKGhhc2gpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIE1hdGgubWF4KDAsIHRhcmdldC5vZmZzZXRUb3ApKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgX3Njcm9sbFBhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gMCkge1xuICAgICAgdXBkYXRlUG9zaXRpb25Ub3AodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZVBvc2l0aW9uVG9wKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgX3JlZGlyZWN0UGFnZSA9IChwYWdlKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS8ke2xhbmd9JHtwYWdlLnBhdGhuYW1lfWA7XG4gIH1cbiAgY29uc3QgX3N3aXRjaEJhY2tncm91bmRDb2xvciA9ICgpID0+IHtcbiAgICByZXR1cm4gaXNQb3NpdGlvblRvcCA/ICduYXZiYXItZ2hvc3QnIDogJ25hdmJhci1zb2xpZCc7XG4gIH07XG5cbiAgY29uc3QgX3N3aXRjaExhbmd1YWdlID0gKGxhbmdJbmRleCkgPT4ge1xuICAgIGlmIChsYW5nICE9PSBsYW5nSW5kZXgpIHtcbiAgICAgIGNvbnN0IHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG4gICAgICBwYXRobmFtZVsxXSA9IGxhbmdJbmRleDtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke3BhdGhuYW1lLmpvaW4oJy8nKX0ke3dpbmRvdy5sb2NhdGlvbi5oYXNofWA7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xuICAgIF9oYXNoTW92ZShoYXNoKTtcbiAgICBfc2Nyb2xsUGFnZSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfc2Nyb2xsUGFnZSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbJ2xheW91dF9oZWFkJywgX3N3aXRjaEJhY2tncm91bmRDb2xvcigpXSl9PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoZWFkX25hdlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2JyYW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kX2xvZ29cIj5cbiAgICAgICAgICAgICAgPEltZ2l4IHNyYz1cIi9icmFuZDIucG5nXCIgYWx0PVwiYnJhbmRcIiB3aWR0aD17NDh9IGhlaWdodD17NDh9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJicmFuZF9uYW1lXCI+e21ldGFEYXRhLmJyYW5kfTwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbWVudVwiPlxuICAgICAgICAgICAge3JvdXRlTGlzdC5tYXAoKHBhZ2UpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1lbnVfYnV0dG9uXCIga2V5PXtwYWdlLmluZGV4fSBvbkNsaWNrPXsoKT0+X3JlZGlyZWN0UGFnZShwYWdlKX0+XG4gICAgICAgICAgICAgICAgICB7bWV0YURhdGEubmF2W3BhZ2UuaW5kZXhdfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGFuZ3VhZ2VcIj5cbiAgICAgICAgICAgIDxCVEJQb3BvdmVyXG4gICAgICAgICAgICAgIGF1dG9EZXRlY3Q9e2ZhbHNlfVxuICAgICAgICAgICAgICBzaG93UG9zaXRpb249XCJib3R0b21cIlxuICAgICAgICAgICAgICBzaG93QWxpZ249XCJlbmRcIlxuICAgICAgICAgICAgICB3aXRoQXJyb3c9e2ZhbHNlfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXs8RkFJIGNsYXNzTmFtZT1cImxhbmd1YWdlX3RyaWdnZXJcIiBpY29uPXtbJ2ZhcycsICdnbG9iZSddfSBzaXplPVwibGdcIiBmaXhlZFdpZHRoIC8+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGFuZ0xpc3QubWFwKChsYW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGFuZ3VhZ2VfYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtsYW5nLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgX3N3aXRjaExhbmd1YWdlKGxhbmcuaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bGFuZy50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9CVEJQb3BvdmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==