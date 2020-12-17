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
                lineNumber: 62,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
                  lineNumber: 73,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_grid___WEBPACK_IMPORTED_MODULE_8__["Row"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_grid___WEBPACK_IMPORTED_MODULE_8__["Col"], {
              col: 12,
              md: 8,
              className: "text-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blacktoolbox_react_timeline__WEBPACK_IMPORTED_MODULE_2__["default"], {
                nodeList: _assets_definitions_events__WEBPACK_IMPORTED_MODULE_5__["default"],
                typeObj: typeObj,
                align: "center",
                position: isSmaller ? "left" : "x"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BYm91dC5qc3giXSwibmFtZXMiOlsiQWJvdXQiLCJwcm9wcyIsImxhbmciLCJsYW5ndWFnZXMiLCJ1c2VTdGF0ZSIsImlzU21hbGxlciIsInVwZGF0ZVdpbmRvd1NpemUiLCJ0eXBlT2JqIiwiZXZlbnQiLCJkYXRhIiwiY29udGV4dCIsImJhc2ljIiwiZXZlbnRzIiwiZGF0ZVRhZyIsImNvbnRlbnQiLCJpbWciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiX3Jlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJCUkVBS1BPSU5UUyIsIlNNIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFudXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwidGV4dCIsIkVWRU5UUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDZkMsSUFEZSxHQUNLRCxLQURMLENBQ2ZDLElBRGU7QUFBQSxNQUNUQyxTQURTLEdBQ0tGLEtBREwsQ0FDVEUsU0FEUzs7QUFBQSxrQkFFZUMsc0RBQVEsRUFGdkI7QUFBQSxNQUVoQkMsU0FGZ0I7QUFBQSxNQUVMQyxnQkFGSzs7QUFJdkIsTUFBTUMsT0FBTyxHQUFHO0FBQ2RDLFNBRGMsaUJBQ1JDLElBRFEsRUFDRjtBQUNWLFVBQU1DLE9BQU8sR0FBR1AsU0FBUyxDQUFDUSxLQUFWLENBQWdCQyxNQUFoQixDQUF1QkgsSUFBSSxDQUFDSSxPQUE1QixFQUFxQ0osSUFBSSxDQUFDSyxPQUExQyxDQUFoQjtBQUNBLDBCQUNFO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLGFBQWY7QUFBQSxtQ0FDRSxxRUFBQyxtREFBRDtBQUFPLGlCQUFHLG9CQUFhSixPQUFPLENBQUNLLEdBQXJCLENBQVY7QUFBc0MsaUJBQUcsRUFBQyxFQUExQztBQUE2QyxvQkFBTSxFQUFFO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUU7QUFBSyxxQkFBUyxFQUFDLGFBQWY7QUFBQSxvQ0FDRTtBQUFJLHVCQUFTLEVBQUMsZUFBZDtBQUFBLHdCQUErQkwsT0FBTyxDQUFDTTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBRyx1QkFBUyxFQUFDLGNBQWI7QUFBQSx3QkFBNkJQLElBQUksQ0FBQ0k7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBVUUscUVBQUMseURBQUQ7QUFBUyxtQkFBUyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsZUFXRTtBQUFHLG1CQUFTLEVBQUMscUJBQWI7QUFBQSxvQkFBb0NILE9BQU8sQ0FBQ087QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQWVEO0FBbEJhLEdBQWhCOztBQXFCQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCLFFBQUlDLE1BQU0sQ0FBQ0MsVUFBUCxJQUFxQkMsdUVBQVcsQ0FBQ0MsRUFBckMsRUFBeUM7QUFDdkMsVUFBRyxDQUFDakIsU0FBSixFQUFlO0FBQ2JDLHdCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDRDtBQUNGLEtBSkQsTUFJTztBQUNMLFVBQUdELFNBQUgsRUFBYztBQUNaQyx3QkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0Q7QUFDRjtBQUNGLEdBVkQ7O0FBWUFpQix5REFBUyxDQUFDLFlBQU07QUFDZEwsV0FBTzs7QUFDUEMsVUFBTSxDQUFDSyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ04sT0FBbEM7QUFDQSxXQUFPLFNBQVNPLE9BQVQsR0FBbUI7QUFDeEJOLFlBQU0sQ0FBQ08sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNSLE9BQXJDO0FBQ0QsS0FGRDtBQUdELEdBTlEsRUFNTixFQU5NLENBQVQ7QUFPQSxzQkFDRSxxRUFBQyx3REFBRDtBQUFRLFFBQUksRUFBRWhCLElBQWQ7QUFBb0IsYUFBUyxFQUFFQyxTQUEvQjtBQUFBLDJCQUNFO0FBQUssUUFBRSxFQUFDLE9BQVI7QUFBZ0IsZUFBUyxFQUFDLE1BQTFCO0FBQUEsOEJBQ0U7QUFBUyxVQUFFLEVBQUMsR0FBWjtBQUFnQixpQkFBUyxFQUFDLDRCQUExQjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQywrQkFBZjtBQUFBLGlDQUNFLHFFQUFDLGtEQUFEO0FBQVUsbUJBQU8sRUFBRSxLQUFuQjtBQUEwQixtQkFBTyxFQUFDLFFBQWxDO0FBQUEsbUNBQ0UscUVBQUMsa0RBQUQ7QUFBVSxpQkFBRyxFQUFFLEVBQWY7QUFBbUIsZ0JBQUUsRUFBRSxDQUF2QjtBQUEwQix1QkFBUyxFQUFDLGFBQXBDO0FBQUEscUNBQ0U7QUFBSSx5QkFBUyxFQUFDLGlCQUFkO0FBQUEsMEJBQWlDQSxTQUFTLENBQUNRLEtBQVYsQ0FBZ0JLO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFVRTtBQUFTLFVBQUUsRUFBQyxhQUFaO0FBQTBCLGlCQUFTLEVBQUMsa0NBQXBDO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLCtCQUFmO0FBQUEsa0NBQ0UscUVBQUMsa0RBQUQ7QUFBVSxtQkFBTyxFQUFDLFFBQWxCO0FBQUEsbUNBQ0UscUVBQUMsa0RBQUQ7QUFBVSxpQkFBRyxFQUFFLEVBQWY7QUFBbUIsZ0JBQUUsRUFBRSxDQUF2QjtBQUEwQix1QkFBUyxFQUFDLGFBQXBDO0FBQUEsd0JBQ0diLFNBQVMsQ0FBQ1EsS0FBVixDQUFnQk0sV0FBaEIsQ0FBNEJVLEdBQTVCLENBQWdDLFVBQUNDLElBQUQsRUFBVTtBQUN6QyxvQ0FDRTtBQUFHLDJCQUFTLEVBQUMsdUJBQWI7QUFBQSw0QkFDR0E7QUFESCxtQkFBMENBLElBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREY7QUFLRCxlQU5BO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFZRSxxRUFBQyxrREFBRDtBQUFBLG1DQUNFLHFFQUFDLGtEQUFEO0FBQVUsaUJBQUcsRUFBRSxFQUFmO0FBQW1CLGdCQUFFLEVBQUUsQ0FBdkI7QUFBMEIsdUJBQVMsRUFBQyxhQUFwQztBQUFBLHFDQUNFLHFFQUFDLG9FQUFEO0FBQVUsd0JBQVEsRUFBRUMsa0VBQXBCO0FBQTRCLHVCQUFPLEVBQUV0QixPQUFyQztBQUE4QyxxQkFBSyxFQUFDLFFBQXBEO0FBQTZELHdCQUFRLEVBQUVGLFNBQVMsR0FBRSxNQUFGLEdBQVc7QUFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQ0QsQ0EvRUQ7O0dBQU1MLEs7O0tBQUFBLEs7QUFpRlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3poL2Fib3V0LjEwN2Y3NWI1ZTViYzhkYWM3Y2E0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lbGluZSBmcm9tICdAYmxhY2t0b29sYm94L3JlYWN0LXRpbWVsaW5lJztcbmltcG9ydCBJbWdpeCBmcm9tICdyZWFjdC1pbWdpeCc7XG5cbmltcG9ydCBCUkVBS1BPSU5UUyBmcm9tICcuLi9hc3NldHMvZGVmaW5pdGlvbnMvYnJlYWtwb2ludHMnO1xuaW1wb3J0IEVWRU5UUyBmcm9tICcuLi9hc3NldHMvZGVmaW5pdGlvbnMvZXZlbnRzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbW9kdWxlcy9sYXlvdXQvJztcbmltcG9ydCBEaXZpZGVyIGZyb20gJy4uL21vZHVsZXMvZGl2aWRlci8nO1xuaW1wb3J0ICogYXMgR3JpZCBmcm9tICcuLi9tb2R1bGVzL2dyaWQvJztcblxuY29uc3QgQWJvdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBsYW5nLCBsYW5ndWFnZXMgfSA9IHByb3BzO1xuICBjb25zdCBbaXNTbWFsbGVyLCB1cGRhdGVXaW5kb3dTaXplXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgdHlwZU9iaiA9IHtcbiAgICBldmVudChkYXRhKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gbGFuZ3VhZ2VzLmJhc2ljLmV2ZW50c1tkYXRhLmRhdGVUYWddW2RhdGEuY29udGVudF07XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lX2V2ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudF9oZWFkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRleHRfaW1nXCI+XG4gICAgICAgICAgICAgIDxJbWdpeCBzcmM9e2Avc3RhdGljLyR7Y29udGV4dC5pbWd9YH0gYWx0PVwiXCIgaGVpZ2h0PXs2NH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudF90b3BpY1wiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29udGV4dF90aXRsZVwiPntjb250ZXh0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRleHRfZGF0ZVwiPntkYXRhLmRhdGVUYWd9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPERpdmlkZXIgY2xhc3NOYW1lPVwiY29udGV4dF9kaXZpZGVyXCIgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250ZXh0X2Rlc2NyaXB0aW9uXCI+e2NvbnRleHQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBfcmVzaXplID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSBCUkVBS1BPSU5UUy5TTSkge1xuICAgICAgaWYoIWlzU21hbGxlcikge1xuICAgICAgICB1cGRhdGVXaW5kb3dTaXplKHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZihpc1NtYWxsZXIpIHtcbiAgICAgICAgdXBkYXRlV2luZG93U2l6ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBfcmVzaXplKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIF9yZXNpemUpO1xuICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIF9yZXNpemUpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGxhbmc9e2xhbmd9IGxhbmd1YWdlcz17bGFuZ3VhZ2VzfT5cbiAgICAgIDxkaXYgaWQ9XCJhYm91dFwiIGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCIvXCIgY2xhc3NOYW1lPVwicGFnZV9zZWN0aW9uIHNlY3Rpb24tYWJvdXRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fY29udGFpbmVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8R3JpZC5Sb3cgc3BhY2luZz17ZmFsc2V9IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEdyaWQuQ29sIGNvbD17MTJ9IG1kPXs4fSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb250YWluZXJfdGl0bGVcIj57bGFuZ3VhZ2VzLmJhc2ljLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDwvR3JpZC5Db2w+XG4gICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9XCJwYWdlX3NlY3Rpb24gc2VjdGlvbi1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9jb250YWluZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxHcmlkLlJvdyBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxHcmlkLkNvbCBjb2w9ezEyfSBtZD17OH0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7bGFuZ3VhZ2VzLmJhc2ljLmRlc2NyaXB0aW9uLm1hcCgodGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGFpbmVyX2Rlc2NyaXB0aW9uXCIga2V5PXt0ZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9HcmlkLkNvbD5cbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgIDxHcmlkLkNvbCBjb2w9ezEyfSBtZD17OH0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8VGltZWxpbmUgbm9kZUxpc3Q9e0VWRU5UU30gdHlwZU9iaj17dHlwZU9ian0gYWxpZ249XCJjZW50ZXJcIiBwb3NpdGlvbj17aXNTbWFsbGVyPyBcImxlZnRcIiA6IFwieFwifSAvPlxuICAgICAgICAgICAgICA8L0dyaWQuQ29sPlxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=