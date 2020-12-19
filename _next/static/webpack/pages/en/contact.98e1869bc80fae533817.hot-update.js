webpackHotUpdate_N_E("pages/en/contact",{

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
          className: "nav_bars",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blacktoolbox_react_popover__WEBPACK_IMPORTED_MODULE_5__["default"], {
            withArrow: false,
            trigger: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
              className: "bars_trigger",
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
                className: "bars_button",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9sYXlvdXQvSGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsImxhbmciLCJtZXRhRGF0YSIsImxhbmdMaXN0Iiwicm91dGVMaXN0IiwidXNlU3RhdGUiLCJpc1Bvc2l0aW9uVG9wIiwidXBkYXRlUG9zaXRpb25Ub3AiLCJfaGFzaE1vdmUiLCJoYXNoIiwidGFyZ2V0Iiwid2luZG93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbFRvIiwiTWF0aCIsIm1heCIsIm9mZnNldFRvcCIsIl9zY3JvbGxQYWdlIiwicGFnZVlPZmZzZXQiLCJfcmVkaXJlY3RQYWdlIiwicGFnZSIsImxvY2F0aW9uIiwiaHJlZiIsIm9yaWdpbiIsInBhdGhuYW1lIiwiX3N3aXRjaEJhY2tncm91bmRDb2xvciIsIl9zd2l0Y2hMYW5ndWFnZSIsImxhbmdJbmRleCIsInNwbGl0Iiwiam9pbiIsInVzZUVmZmVjdCIsInNsaWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzbmFtZXMiLCJicmFuZCIsIm1hcCIsIm5hdiIsImluZGV4IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNoQkMsSUFEZ0IsR0FDa0NELEtBRGxDLENBQ2hCQyxJQURnQjtBQUFBLE1BQ1ZDLFFBRFUsR0FDa0NGLEtBRGxDLENBQ1ZFLFFBRFU7QUFBQSx3QkFDa0NGLEtBRGxDLENBQ0FHLFFBREE7QUFBQSxNQUNBQSxRQURBLGdDQUNXLEVBRFg7QUFBQSx5QkFDa0NILEtBRGxDLENBQ2VJLFNBRGY7QUFBQSxNQUNlQSxTQURmLGlDQUMyQixFQUQzQjs7QUFBQSxrQkFFbUJDLHNEQUFRLENBQUMsSUFBRCxDQUYzQjtBQUFBLE1B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RUFBQyxjQUFmO0FBQUEsaUNBQ0UscUVBQUMsbUVBQUQ7QUFDRSxxQkFBUyxFQUFFLEtBRGI7QUFFRSxtQkFBTyxlQUFFLHFFQUFDLDhFQUFEO0FBQUssdUJBQVMsRUFBQyxrQkFBZjtBQUFrQyxrQkFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLE9BQVIsQ0FBeEM7QUFBMEQsa0JBQUksRUFBQyxJQUEvRDtBQUFvRSx3QkFBVTtBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZYO0FBQUEsc0JBSUduQyxRQUFRLENBQUNpQyxHQUFULENBQWEsVUFBQ25DLElBQUQsRUFBVTtBQUN0QixrQ0FDRSxxRUFBQyxpRUFBRDtBQUNFLHlCQUFTLEVBQUMsaUJBRFo7QUFHRSx1QkFBTyxFQUFFLG1CQUFNO0FBQ2IwQixpQ0FBZSxDQUFDMUIsSUFBSSxDQUFDcUMsS0FBTixDQUFmO0FBQ0QsaUJBTEg7QUFBQSwwQkFPR3JDLElBQUksQ0FBQ3NDO0FBUFIsaUJBRU90QyxJQUFJLENBQUNxQyxLQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFXRCxhQVpBO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErREQsQ0F2R0Q7O0dBQU12QyxNOztLQUFBQSxNO0FBeUdTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbi9jb250YWN0Ljk4ZTE4NjliYzgwZmFlNTMzODE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEltZ2l4IGZyb20gJ3JlYWN0LWltZ2l4JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiBhcyBGQUkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IEJUQlBvcG92ZXIgZnJvbSAnQGJsYWNrdG9vbGJveC9yZWFjdC1wb3BvdmVyJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BibGFja3Rvb2xib3gvcmVhY3QtYnV0dG9uJztcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbGFuZywgbWV0YURhdGEsIGxhbmdMaXN0ID0gW10sIHJvdXRlTGlzdCA9IFtdIH0gPSBwcm9wcztcbiAgY29uc3QgW2lzUG9zaXRpb25Ub3AsIHVwZGF0ZVBvc2l0aW9uVG9wXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IF9oYXNoTW92ZSA9IChoYXNoKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBNYXRoLm1heCgwLCB0YXJnZXQub2Zmc2V0VG9wKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IF9zY3JvbGxQYWdlID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPT09IDApIHtcbiAgICAgIHVwZGF0ZVBvc2l0aW9uVG9wKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVQb3NpdGlvblRvcChmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IF9yZWRpcmVjdFBhZ2UgPSAocGFnZSkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vJHtsYW5nfSR7cGFnZS5wYXRobmFtZX1gO1xuICB9O1xuICBjb25zdCBfc3dpdGNoQmFja2dyb3VuZENvbG9yID0gKCkgPT4ge1xuICAgIHJldHVybiBpc1Bvc2l0aW9uVG9wID8gJ25hdmJhci1naG9zdCcgOiAnbmF2YmFyLXNvbGlkJztcbiAgfTtcblxuICBjb25zdCBfc3dpdGNoTGFuZ3VhZ2UgPSAobGFuZ0luZGV4KSA9PiB7XG4gICAgaWYgKGxhbmcgIT09IGxhbmdJbmRleCkge1xuICAgICAgY29uc3QgcGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcbiAgICAgIHBhdGhuYW1lWzFdID0gbGFuZ0luZGV4O1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7cGF0aG5hbWUuam9pbignLycpfSR7d2luZG93LmxvY2F0aW9uLmhhc2h9YDtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XG4gICAgX2hhc2hNb3ZlKGhhc2gpO1xuICAgIF9zY3JvbGxQYWdlKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIF9zY3JvbGxQYWdlKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsnbGF5b3V0X2hlYWQnLCBfc3dpdGNoQmFja2dyb3VuZENvbG9yKCldKX0+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhlYWRfbmF2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfYnJhbmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRfbG9nb1wiPlxuICAgICAgICAgICAgICA8SW1naXggc3JjPVwiL3N0YXRpYy9icmFuZC5wbmdcIiBhbHQ9XCJicmFuZFwiIHdpZHRoPXs0OH0gaGVpZ2h0PXs0OH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImJyYW5kX25hbWVcIj57bWV0YURhdGEuYnJhbmR9PC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9tZW51XCI+XG4gICAgICAgICAgICB7cm91dGVMaXN0Lm1hcCgocGFnZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibWVudV9idXR0b25cIiBrZXk9e3BhZ2UuaW5kZXh9IG9uQ2xpY2s9eygpID0+IF9yZWRpcmVjdFBhZ2UocGFnZSl9PlxuICAgICAgICAgICAgICAgICAge21ldGFEYXRhLm5hdltwYWdlLmluZGV4XX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2JhcnNcIj5cbiAgICAgICAgICAgIDxCVEJQb3BvdmVyXG4gICAgICAgICAgICAgIHdpdGhBcnJvdz17ZmFsc2V9XG4gICAgICAgICAgICAgIHRyaWdnZXI9ezxGQUkgY2xhc3NOYW1lPVwiYmFyc190cmlnZ2VyXCIgaWNvbj17WydmYXMnLCAnYmFycyddfSBzaXplPVwibGdcIiBmaXhlZFdpZHRoIC8+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cm91dGVMaXN0Lm1hcCgocGFnZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhcnNfYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwYWdlLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgX3JlZGlyZWN0UGFnZShwYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge21ldGFEYXRhLm5hdltwYWdlLmluZGV4XX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9CVEJQb3BvdmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xhbmd1YWdlXCI+XG4gICAgICAgICAgICA8QlRCUG9wb3ZlclxuICAgICAgICAgICAgICB3aXRoQXJyb3c9e2ZhbHNlfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXs8RkFJIGNsYXNzTmFtZT1cImxhbmd1YWdlX3RyaWdnZXJcIiBpY29uPXtbJ2ZhcycsICdnbG9iZSddfSBzaXplPVwibGdcIiBmaXhlZFdpZHRoIC8+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGFuZ0xpc3QubWFwKChsYW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGFuZ3VhZ2VfYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtsYW5nLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgX3N3aXRjaExhbmd1YWdlKGxhbmcuaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bGFuZy50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9CVEJQb3BvdmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==