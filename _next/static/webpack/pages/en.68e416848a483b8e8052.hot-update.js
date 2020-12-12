webpackHotUpdate_N_E("pages/en",{

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







var MENU_LIST = [{
  index: 'home',
  pathname: '/'
}, {
  index: 'about',
  pathname: '/about'
}, {
  index: 'service',
  pathname: '/servicc'
}, {
  index: 'contact',
  pathname: '/contact'
}];

var Header = function Header(props) {
  _s();

  var lang = props.lang,
      metaData = props.metaData,
      _props$langList = props.langList,
      langList = _props$langList === void 0 ? [] : _props$langList;

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
    window.location.href = "".concat(window.location.origin, "/").concat(lang, "/").concat(page.pathname);
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
              lineNumber: 61,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "brand_name",
            children: metaData.brand
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "nav_menu",
          children: MENU_LIST.map(function (page) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blacktoolbox_react_button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
              className: "menu_button",
              onClick: function onClick() {
                return _redirectPage(page);
              },
              children: metaData.nav[page.index]
            }, page.index, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
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
              lineNumber: 80,
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
                lineNumber: 84,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9sYXlvdXQvSGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJNRU5VX0xJU1QiLCJpbmRleCIsInBhdGhuYW1lIiwiSGVhZGVyIiwicHJvcHMiLCJsYW5nIiwibWV0YURhdGEiLCJsYW5nTGlzdCIsInVzZVN0YXRlIiwiaXNQb3NpdGlvblRvcCIsInVwZGF0ZVBvc2l0aW9uVG9wIiwiX2hhc2hNb3ZlIiwiaGFzaCIsInRhcmdldCIsIndpbmRvdyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxUbyIsIk1hdGgiLCJtYXgiLCJvZmZzZXRUb3AiLCJfc2Nyb2xsUGFnZSIsInBhZ2VZT2Zmc2V0IiwiX3JlZGlyZWN0UGFnZSIsInBhZ2UiLCJsb2NhdGlvbiIsImhyZWYiLCJvcmlnaW4iLCJfc3dpdGNoQmFja2dyb3VuZENvbG9yIiwiX3N3aXRjaExhbmd1YWdlIiwibGFuZ0luZGV4Iiwic3BsaXQiLCJqb2luIiwidXNlRWZmZWN0Iiwic2xpY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NuYW1lcyIsImJyYW5kIiwibWFwIiwibmF2IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUNoQjtBQUFFQyxPQUFLLEVBQUUsTUFBVDtBQUFpQkMsVUFBUSxFQUFFO0FBQTNCLENBRGdCLEVBRWhCO0FBQUVELE9BQUssRUFBRSxPQUFUO0FBQWtCQyxVQUFRLEVBQUU7QUFBNUIsQ0FGZ0IsRUFHaEI7QUFBRUQsT0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFVBQVEsRUFBRTtBQUE5QixDQUhnQixFQUloQjtBQUFFRCxPQUFLLEVBQUUsU0FBVDtBQUFvQkMsVUFBUSxFQUFFO0FBQTlCLENBSmdCLENBQWxCOztBQU9BLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFB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LGlCQURaO0FBR0UsdUJBQU8sRUFBRSxtQkFBTTtBQUNid0IsaUNBQWUsQ0FBQ3hCLElBQUksQ0FBQ0osS0FBTixDQUFmO0FBQ0QsaUJBTEg7QUFBQSwwQkFPR0ksSUFBSSxDQUFDbUM7QUFQUixpQkFFT25DLElBQUksQ0FBQ0osS0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBV0QsYUFaQTtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOENELENBdEZEOztHQUFNRSxNOztLQUFBQSxNO0FBd0ZTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbi42OGU0MTY4NDhhNDgzYjhlODA1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBJbWdpeCBmcm9tICdyZWFjdC1pbWdpeCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gYXMgRkFJIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCBCVEJQb3BvdmVyIGZyb20gJ0BibGFja3Rvb2xib3gvcmVhY3QtcG9wb3Zlcic7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAYmxhY2t0b29sYm94L3JlYWN0LWJ1dHRvbic7XG5cbmNvbnN0IE1FTlVfTElTVCA9IFtcbiAgeyBpbmRleDogJ2hvbWUnLCBwYXRobmFtZTogJy8nIH0sXG4gIHsgaW5kZXg6ICdhYm91dCcsIHBhdGhuYW1lOiAnL2Fib3V0JyB9LFxuICB7IGluZGV4OiAnc2VydmljZScsIHBhdGhuYW1lOiAnL3NlcnZpY2MnIH0sXG4gIHsgaW5kZXg6ICdjb250YWN0JywgcGF0aG5hbWU6ICcvY29udGFjdCcgfSxcbl07XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGxhbmcsIG1ldGFEYXRhLCBsYW5nTGlzdCA9IFtdIH0gPSBwcm9wcztcbiAgY29uc3QgW2lzUG9zaXRpb25Ub3AsIHVwZGF0ZVBvc2l0aW9uVG9wXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IF9oYXNoTW92ZSA9IChoYXNoKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBNYXRoLm1heCgwLCB0YXJnZXQub2Zmc2V0VG9wKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IF9zY3JvbGxQYWdlID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPT09IDApIHtcbiAgICAgIHVwZGF0ZVBvc2l0aW9uVG9wKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVQb3NpdGlvblRvcChmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IF9yZWRpcmVjdFBhZ2UgPSAocGFnZSkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vJHtsYW5nfS8ke3BhZ2UucGF0aG5hbWV9YDtcbiAgfVxuICBjb25zdCBfc3dpdGNoQmFja2dyb3VuZENvbG9yID0gKCkgPT4ge1xuICAgIHJldHVybiBpc1Bvc2l0aW9uVG9wID8gJ25hdmJhci1naG9zdCcgOiAnbmF2YmFyLXNvbGlkJztcbiAgfTtcblxuICBjb25zdCBfc3dpdGNoTGFuZ3VhZ2UgPSAobGFuZ0luZGV4KSA9PiB7XG4gICAgaWYgKGxhbmcgIT09IGxhbmdJbmRleCkge1xuICAgICAgY29uc3QgcGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcbiAgICAgIHBhdGhuYW1lWzFdID0gbGFuZ0luZGV4O1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7cGF0aG5hbWUuam9pbignLycpfSR7d2luZG93LmxvY2F0aW9uLmhhc2h9YDtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XG4gICAgX2hhc2hNb3ZlKGhhc2gpO1xuICAgIF9zY3JvbGxQYWdlKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIF9zY3JvbGxQYWdlKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsnbGF5b3V0X2hlYWQnLCBfc3dpdGNoQmFja2dyb3VuZENvbG9yKCldKX0+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhlYWRfbmF2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfYnJhbmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRfbG9nb1wiPlxuICAgICAgICAgICAgICA8SW1naXggc3JjPVwiL2JyYW5kMi5wbmdcIiBhbHQ9XCJicmFuZFwiIHdpZHRoPXs0OH0gaGVpZ2h0PXs0OH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImJyYW5kX25hbWVcIj57bWV0YURhdGEuYnJhbmR9PC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9tZW51XCI+XG4gICAgICAgICAgICB7TUVOVV9MSVNULm1hcCgocGFnZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibWVudV9idXR0b25cIiBrZXk9e3BhZ2UuaW5kZXh9IG9uQ2xpY2s9eygpPT5fcmVkaXJlY3RQYWdlKHBhZ2UpfT5cbiAgICAgICAgICAgICAgICAgIHttZXRhRGF0YS5uYXZbcGFnZS5pbmRleF19XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9sYW5ndWFnZVwiPlxuICAgICAgICAgICAgPEJUQlBvcG92ZXJcbiAgICAgICAgICAgICAgYXV0b0RldGVjdD17ZmFsc2V9XG4gICAgICAgICAgICAgIHNob3dQb3NpdGlvbj1cImJvdHRvbVwiXG4gICAgICAgICAgICAgIHNob3dBbGlnbj1cImVuZFwiXG4gICAgICAgICAgICAgIHdpdGhBcnJvdz17ZmFsc2V9XG4gICAgICAgICAgICAgIHRyaWdnZXI9ezxGQUkgY2xhc3NOYW1lPVwibGFuZ3VhZ2VfdHJpZ2dlclwiIGljb249e1snZmFzJywgJ2dsb2JlJ119IHNpemU9XCJsZ1wiIGZpeGVkV2lkdGggLz59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsYW5nTGlzdC5tYXAoKGxhbmcpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYW5ndWFnZV9idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2xhbmcuaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBfc3dpdGNoTGFuZ3VhZ2UobGFuZy5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsYW5nLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0JUQlBvcG92ZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9