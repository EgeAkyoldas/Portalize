"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/editor";
exports.ids = ["pages/editor"];
exports.modules = {

/***/ "./pages/editor.tsx":
/*!**************************!*\
  !*** ./pages/editor.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_unity_webgl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-unity-webgl */ \"react-unity-webgl\");\n/* harmony import */ var react_unity_webgl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_unity_webgl__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App() {\n    const { unityProvider , loadingProgression , isLoaded  } = (0,react_unity_webgl__WEBPACK_IMPORTED_MODULE_2__.useUnityContext)({\n        loaderUrl: \"build/test.loader.js\",\n        dataUrl: \"build/test.data\",\n        frameworkUrl: \"build/test.framework.js\",\n        codeUrl: \"build/test.wasm\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            !isLoaded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"w-[100vh] h-[100vh] text-center\",\n                children: [\n                    \"Loading Application... \",\n                    Math.round(loadingProgression * 100),\n                    \"%\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projects\\\\Portalize\\\\pages\\\\editor.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_unity_webgl__WEBPACK_IMPORTED_MODULE_2__.Unity, {\n                unityProvider: unityProvider,\n                style: {\n                    visibility: isLoaded ? \"visible\" : \"hidden\",\n                    \"width\": \"100%\",\n                    \"height\": \"100vh\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Portalize\\\\pages\\\\editor.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projects\\\\Portalize\\\\pages\\\\editor.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lZGl0b3IudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ21CO0FBRTNELFNBQVNJLE1BQU07SUFDYixNQUFNLEVBQUVDLGNBQWEsRUFBRUMsbUJBQWtCLEVBQUVDLFNBQVEsRUFBRSxHQUFHSixrRUFBZUEsQ0FBQztRQUN0RUssV0FBVztRQUNYQyxTQUFTO1FBQ1RDLGNBQWM7UUFDZEMsU0FBUztJQUNYO0lBRUEscUJBQ0UsOERBQUNWLDJDQUFRQTs7WUFDTixDQUFDTSwwQkFDQSw4REFBQ0s7Z0JBQUVDLFdBQVU7O29CQUFrQztvQkFBd0JDLEtBQUtDLEtBQUssQ0FBQ1QscUJBQXFCO29CQUFLOzs7Ozs7OzBCQUU5Ryw4REFBQ0osb0RBQUtBO2dCQUNKRyxlQUFlQTtnQkFDZlcsT0FBTztvQkFBRUMsWUFBWVYsV0FBVyxZQUFZLFFBQVE7b0JBQUUsU0FBUztvQkFBUSxVQUFVO2dCQUFROzs7Ozs7Ozs7Ozs7QUFJakc7QUFFQSxpRUFBZUgsR0FBR0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRhbGl6ZS8uL3BhZ2VzL2VkaXRvci50c3g/YTRjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVW5pdHksIHVzZVVuaXR5Q29udGV4dCB9IGZyb20gXCJyZWFjdC11bml0eS13ZWJnbFwiO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IHsgdW5pdHlQcm92aWRlciwgbG9hZGluZ1Byb2dyZXNzaW9uLCBpc0xvYWRlZCB9ID0gdXNlVW5pdHlDb250ZXh0KHtcclxuICAgIGxvYWRlclVybDogXCJidWlsZC90ZXN0LmxvYWRlci5qc1wiLFxyXG4gICAgZGF0YVVybDogXCJidWlsZC90ZXN0LmRhdGFcIixcclxuICAgIGZyYW1ld29ya1VybDogXCJidWlsZC90ZXN0LmZyYW1ld29yay5qc1wiLFxyXG4gICAgY29kZVVybDogXCJidWlsZC90ZXN0Lndhc21cIixcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgeyFpc0xvYWRlZCAmJiAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidy1bMTAwdmhdIGgtWzEwMHZoXSB0ZXh0LWNlbnRlclwiPkxvYWRpbmcgQXBwbGljYXRpb24uLi4ge01hdGgucm91bmQobG9hZGluZ1Byb2dyZXNzaW9uICogMTAwKX0lPC9wPlxyXG4gICAgICApfVxyXG4gICAgICA8VW5pdHlcclxuICAgICAgICB1bml0eVByb3ZpZGVyPXt1bml0eVByb3ZpZGVyfVxyXG4gICAgICAgIHN0eWxlPXt7IHZpc2liaWxpdHk6IGlzTG9hZGVkID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiLCBcIndpZHRoXCI6IFwiMTAwJVwiLCBcImhlaWdodFwiOiBcIjEwMHZoXCIgfX1cclxuICAgICAgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwIl0sIm5hbWVzIjpbIlJlYWN0IiwiRnJhZ21lbnQiLCJVbml0eSIsInVzZVVuaXR5Q29udGV4dCIsIkFwcCIsInVuaXR5UHJvdmlkZXIiLCJsb2FkaW5nUHJvZ3Jlc3Npb24iLCJpc0xvYWRlZCIsImxvYWRlclVybCIsImRhdGFVcmwiLCJmcmFtZXdvcmtVcmwiLCJjb2RlVXJsIiwicCIsImNsYXNzTmFtZSIsIk1hdGgiLCJyb3VuZCIsInN0eWxlIiwidmlzaWJpbGl0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/editor.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-unity-webgl":
/*!************************************!*\
  !*** external "react-unity-webgl" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react-unity-webgl");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/editor.tsx"));
module.exports = __webpack_exports__;

})();