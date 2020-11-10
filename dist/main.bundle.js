/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss ***!
  \*********************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n;\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital@1&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nhtml {\\n  height: 100%;\\n}\\n\\nbody {\\n  height: inherit;\\n  background-color: #9EB3C2;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n}\\n\\nmain {\\n  display: grid;\\n  height: 60%;\\n  align-items: end;\\n}\\n\\nform {\\n  display: grid;\\n  grid-template-columns: 250px;\\n  margin: 0 auto;\\n  padding: 30px 0;\\n  justify-content: center;\\n  min-height: 350px;\\n  width: 400px;\\n  background-color: #E6EBEF;\\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\\n  border-radius: 2px;\\n  align-items: center;\\n}\\nform input {\\n  padding: 5px 7px;\\n}\\nform select {\\n  padding: 5px 7px;\\n}\\nform #subscription-result {\\n  text-align: center;\\n}\\n\\n#second-form {\\n  display: none;\\n}\\n\\n#third-form {\\n  display: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://forms/./src/css/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://forms/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss\");\n;\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://forms/./src/css/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://forms/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/js/firstForm/formHandler.js":
/*!*****************************************!*\
  !*** ./src/js/firstForm/formHandler.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _inputValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputValidator */ \"./src/js/firstForm/inputValidator.js\");\n/* harmony import */ var _switchToNextForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switchToNextForm */ \"./src/js/switchToNextForm.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n;\r\n\r\n\r\n\r\nconst validationErrors = {\r\n    first_name: 'First name must contain only letters and not to be empty',\r\n    last_name: 'Last name must contain only letters and not to be empty',\r\n    email: \"Email must be appropriate to 'email@example.com'\",\r\n    phone: \"Phone must be appropriate to '(123) 456 - 7890'\"\r\n}\r\n\r\nconst namePattern = () => {\r\n    return /^[a-zA-Z]+$/\r\n}\r\n\r\nconst emailPattern = () => {\r\n    return /^[a-zA-Z]+@[a-zA-Z]+\\.[a-zA-Z]+$/\r\n}\r\n\r\nconst phonePattern = () => {\r\n    return /^\\(\\d{3}\\)\\s\\d{3}\\s-\\s\\d{4}$/\r\n}\r\n\r\nconst firstFormHandler = () => {\r\n    const firstForm = document.querySelector('#first-form')\r\n    const secondForm = document.querySelector('#second-form')\r\n    const errorsContainer = document.querySelector('header')\r\n\r\n    firstForm.addEventListener('submit', (e) => {\r\n        e.preventDefault()\r\n        errorsContainer.innerHTML = ''\r\n        _index__WEBPACK_IMPORTED_MODULE_2__.errors.clear()\r\n\r\n        const firstNameVal = document.querySelector('#first-name').value\r\n        const lastNameVal = document.querySelector('#last-name').value\r\n        const emailVal = document.querySelector('#email').value\r\n        const phoneVal = document.querySelector('#phone').value\r\n\r\n        ;(0,_inputValidator__WEBPACK_IMPORTED_MODULE_0__.inputValidator)(firstNameVal, namePattern(), 'first-name', validationErrors.first_name)\r\n        ;(0,_inputValidator__WEBPACK_IMPORTED_MODULE_0__.inputValidator)(lastNameVal, namePattern(), 'last-name', validationErrors.last_name)\r\n        ;(0,_inputValidator__WEBPACK_IMPORTED_MODULE_0__.inputValidator)(emailVal, emailPattern(), 'email', validationErrors.email)\r\n        ;(0,_inputValidator__WEBPACK_IMPORTED_MODULE_0__.inputValidator)(phoneVal, phonePattern(), 'phone', validationErrors.phone)\r\n\r\n        ;(0,_switchToNextForm__WEBPACK_IMPORTED_MODULE_1__.default)(firstForm, secondForm, e)\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstFormHandler);\r\n\n\n//# sourceURL=webpack://forms/./src/js/firstForm/formHandler.js?");

/***/ }),

/***/ "./src/js/firstForm/inputPhoneMask.js":
/*!********************************************!*\
  !*** ./src/js/firstForm/inputPhoneMask.js ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nlet inputPhoneMask = () => {\r\n    const phoneInput = document.querySelector('#phone')\r\n\r\n    phoneInput.addEventListener('input', (e) => {\r\n        let x = e.target.value.replace(/\\D/g, '').match(/(\\d{0,3})(\\d{0,3})(\\d{0,4})/)\r\n        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? ' - ' + x[3] : '')\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputPhoneMask);\r\n\n\n//# sourceURL=webpack://forms/./src/js/firstForm/inputPhoneMask.js?");

/***/ }),

/***/ "./src/js/firstForm/inputValidator.js":
/*!********************************************!*\
  !*** ./src/js/firstForm/inputValidator.js ***!
  \********************************************/
/*! namespace exports */
/*! export inputValidator [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isInputNotValid [provided] [no usage info] [missing usage info prevents renaming] */
/*! export saveErrorInStorage [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isInputNotValid\": () => /* binding */ isInputNotValid,\n/* harmony export */   \"saveErrorInStorage\": () => /* binding */ saveErrorInStorage,\n/* harmony export */   \"inputValidator\": () => /* binding */ inputValidator\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/js/index.js\");\n;\r\nconst isInputNotValid = (validator, inputText) => {\r\n    return !validator.test(inputText)\r\n}\r\n\r\nconst saveErrorInStorage = (validator, inputText, inputName, errorText) => {\r\n    const inputError = document.querySelector(`.form__${inputName}-error`)\r\n    const input = document.querySelector(`#${inputName}`)\r\n    if(isInputNotValid(validator, inputText)) {\r\n        _index_js__WEBPACK_IMPORTED_MODULE_0__.errors.set(inputName, errorText)\r\n\r\n        input.style.marginBottom = '5px'\r\n        // if input is not valid, render an error\r\n        inputError.innerText = errorText\r\n        inputError.style.marginBottom = '20px'\r\n    } else {\r\n        //if input is valid, remove error\r\n        inputError.innerText = ''\r\n    }\r\n}\r\nconst inputValidator = (inputText, rePattern, inputName, errorText) => {\r\n    const validator = new RegExp(rePattern)\r\n    saveErrorInStorage(validator, inputText, inputName, errorText)\r\n}\r\n\n\n//# sourceURL=webpack://forms/./src/js/firstForm/inputValidator.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! namespace exports */
/*! export errors [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errors\": () => /* binding */ errors\n/* harmony export */ });\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.scss */ \"./src/css/index.scss\");\n/* harmony import */ var _firstForm_inputPhoneMask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firstForm/inputPhoneMask */ \"./src/js/firstForm/inputPhoneMask.js\");\n/* harmony import */ var _firstForm_formHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firstForm/formHandler */ \"./src/js/firstForm/formHandler.js\");\n/* harmony import */ var _secondForm_formHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./secondForm/formHandler */ \"./src/js/secondForm/formHandler.js\");\n/* harmony import */ var _secondForm_showAppropriateSubscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./secondForm/showAppropriateSubscription */ \"./src/js/secondForm/showAppropriateSubscription.js\");\n/* harmony import */ var _thirdForm_formHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thirdForm/formHandler */ \"./src/js/thirdForm/formHandler.js\");\n/* harmony import */ var _thirdForm_inputCardMask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thirdForm/inputCardMask */ \"./src/js/thirdForm/inputCardMask.js\");\n/* harmony import */ var _thirdForm_expiryDayMask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./thirdForm/expiryDayMask */ \"./src/js/thirdForm/expiryDayMask.js\");\n;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet errors = new Map()\r\n\r\n;(0,_firstForm_inputPhoneMask__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n;(0,_firstForm_formHandler__WEBPACK_IMPORTED_MODULE_2__.default)()\r\n\r\n;(0,_secondForm_formHandler__WEBPACK_IMPORTED_MODULE_3__.default)()\r\n;(0,_secondForm_showAppropriateSubscription__WEBPACK_IMPORTED_MODULE_4__.showAppropriateSubscription)()\r\n\r\n;(0,_thirdForm_formHandler__WEBPACK_IMPORTED_MODULE_5__.thirdFormHandler)()\r\n;(0,_thirdForm_inputCardMask__WEBPACK_IMPORTED_MODULE_6__.default)()\r\n;(0,_thirdForm_expiryDayMask__WEBPACK_IMPORTED_MODULE_7__.default)()\r\n\n\n//# sourceURL=webpack://forms/./src/js/index.js?");

/***/ }),

/***/ "./src/js/secondForm/formHandler.js":
/*!******************************************!*\
  !*** ./src/js/secondForm/formHandler.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _switchToNextForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../switchToNextForm */ \"./src/js/switchToNextForm.js\");\n;\r\n\r\nconst secondFormHandler = () => {\r\n    const secondForm = document.querySelector('#second-form')\r\n    const thirdForm = document.querySelector('#third-form')\r\n    secondForm.addEventListener('submit', (e) => {\r\n        e.preventDefault()\r\n\r\n        ;(0,_switchToNextForm__WEBPACK_IMPORTED_MODULE_0__.default)(secondForm, thirdForm, e)\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (secondFormHandler);\r\n\n\n//# sourceURL=webpack://forms/./src/js/secondForm/formHandler.js?");

/***/ }),

/***/ "./src/js/secondForm/showAppropriateSubscription.js":
/*!**********************************************************!*\
  !*** ./src/js/secondForm/showAppropriateSubscription.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export listener [provided] [no usage info] [missing usage info prevents renaming] */
/*! export showAppropriateSubscription [provided] [no usage info] [missing usage info prevents renaming] */
/*! export subscriptions [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"subscriptions\": () => /* binding */ subscriptions,\n/* harmony export */   \"listener\": () => /* binding */ listener,\n/* harmony export */   \"showAppropriateSubscription\": () => /* binding */ showAppropriateSubscription\n/* harmony export */ });\nconst subscriptions = {\r\n    us: {\r\n        free: '0$',\r\n        basic: '20$',\r\n        premium: '60$'\r\n    },\r\n    ua: {\r\n        free: '0₴',\r\n        // imagine that price of each plan got from some resource\r\n        basic: `${20 * 28}₴`,\r\n        premium: `${60 * 28}₴`\r\n    }\r\n}\r\n\r\nconst listener = (country, plan, result) => {\r\n    result.textContent = subscriptions[country.value][plan.value]\r\n}\r\n\r\nconst showAppropriateSubscription = () => {\r\n    const subscriptionCountry = document.querySelector('#subscription-country')\r\n    const subscriptionPlan = document.querySelector('#subscription-plan')\r\n    const subscriptionResult = document.querySelector('#subscription-result')\r\n\r\n    subscriptionCountry.addEventListener('change', () => listener(\r\n        subscriptionCountry,\r\n        subscriptionPlan,\r\n        subscriptionResult\r\n    ))\r\n\r\n    subscriptionPlan.addEventListener('change', () => listener(\r\n        subscriptionCountry,\r\n        subscriptionPlan,\r\n        subscriptionResult\r\n    ))\r\n\r\n    // render default subscription plan\r\n    subscriptionPlan.value = 'free'\r\n    subscriptionPlan.dispatchEvent(new Event('change'))\r\n\r\n}\r\n\n\n//# sourceURL=webpack://forms/./src/js/secondForm/showAppropriateSubscription.js?");

/***/ }),

/***/ "./src/js/switchToNextForm.js":
/*!************************************!*\
  !*** ./src/js/switchToNextForm.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/index */ \"./src/js/index.js\");\n;\r\n\r\nconst switchToNextForm = (fromForm, toForm, formEvent, lastForm) => {\r\n    const errorsContainer = document.querySelector('header')\r\n\r\n    // if there are no errors, show next form\r\n    if(_js_index__WEBPACK_IMPORTED_MODULE_0__.errors.size) {\r\n        formEvent.preventDefault()\r\n\r\n        Object.values(_js_index__WEBPACK_IMPORTED_MODULE_0__.errors).forEach((error) => {\r\n            errorsContainer.innerText += error\r\n        })\r\n        // otherwise, show next form\r\n    } else {\r\n        if(lastForm) {\r\n            alert('success')\r\n            return\r\n        }\r\n        formEvent.preventDefault()\r\n        // clean up errors\r\n        errorsContainer.innerText = ''\r\n        // hide first form\r\n        fromForm.style.display = 'none'\r\n\r\n        // show next form\r\n        toForm.style.display = 'grid'\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (switchToNextForm);\r\n\n\n//# sourceURL=webpack://forms/./src/js/switchToNextForm.js?");

/***/ }),

/***/ "./src/js/thirdForm/expiryDayMask.js":
/*!*******************************************!*\
  !*** ./src/js/thirdForm/expiryDayMask.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst expiryDayMask = () => {\r\n    const expiryDay = document.querySelector('#expiration-date')\r\n\r\n    expiryDay.addEventListener('input', (e) => {\r\n        let x = e.target.value.replace(/\\D/g, '').match(/(\\d{0,2})(\\d{0,4})/)\r\n        e.target.value = !x[2] ? x[1] : x[1] + '/' + x[2]\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (expiryDayMask);\r\n\n\n//# sourceURL=webpack://forms/./src/js/thirdForm/expiryDayMask.js?");

/***/ }),

/***/ "./src/js/thirdForm/expiryDayValidation.js":
/*!*************************************************!*\
  !*** ./src/js/thirdForm/expiryDayValidation.js ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n;\r\n\r\nconst expiryDayValidation = (year, month, inputName, errorText) => {\r\n    const currentDay = new Date()\r\n    const expiryDay = new Date(+year, +month - 1, 1)\r\n\r\n    const inputError = document.querySelector(`.form__${inputName}-error`)\r\n    const input = document.querySelector(`#${inputName}`)\r\n\r\n    // if expiry date has arrived\r\n    if(\r\n        (month > 12 || month < 1)\r\n        ||\r\n        (currentDay > expiryDay)\r\n    ) {\r\n        _index__WEBPACK_IMPORTED_MODULE_0__.errors.set(inputName, errorText)\r\n\r\n        input.style.marginBottom = '5px'\r\n        // if input is not valid, render an error\r\n        inputError.innerText = errorText\r\n        inputError.style.marginBottom = '20px'\r\n    } else {\r\n        //if input is valid, remove error\r\n        inputError.innerText = ''\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (expiryDayValidation);\r\n\n\n//# sourceURL=webpack://forms/./src/js/thirdForm/expiryDayValidation.js?");

/***/ }),

/***/ "./src/js/thirdForm/formHandler.js":
/*!*****************************************!*\
  !*** ./src/js/thirdForm/formHandler.js ***!
  \*****************************************/
/*! namespace exports */
/*! export cardNumberPattern [provided] [no usage info] [missing usage info prevents renaming] */
/*! export cvvPattern [provided] [no usage info] [missing usage info prevents renaming] */
/*! export thirdFormHandler [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardNumberPattern\": () => /* binding */ cardNumberPattern,\n/* harmony export */   \"cvvPattern\": () => /* binding */ cvvPattern,\n/* harmony export */   \"thirdFormHandler\": () => /* binding */ thirdFormHandler\n/* harmony export */ });\n/* harmony import */ var _firstForm_inputValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firstForm/inputValidator */ \"./src/js/firstForm/inputValidator.js\");\n/* harmony import */ var _expiryDayValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expiryDayValidation */ \"./src/js/thirdForm/expiryDayValidation.js\");\n/* harmony import */ var _switchToNextForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../switchToNextForm */ \"./src/js/switchToNextForm.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n;\r\n\r\n\r\n\r\n\r\nconst validationErrors = {\r\n    card: 'Card number must contain 16 numbers, not less, not more',\r\n    expirationDate: 'Expiration date must be bigger than today',\r\n    cvv: 'CVV code must contain only 3 numbers'\r\n}\r\n\r\nconst cardNumberPattern = () => {\r\n    return /^\\d{4}\\s\\d{4}\\s\\d{4}\\s\\d{4}$/\r\n}\r\n\r\nconst cvvPattern = () => {\r\n    return /^\\d{3}$/\r\n}\r\n\r\nconst thirdFormHandler = () => {\r\n    const thirdForm = document.querySelector('#third-form')\r\n    const successPayment = document.querySelector('#success-payment')\r\n    const errorsContainer = document.querySelector('header')\r\n\r\n    thirdForm.addEventListener('submit', (e) => {\r\n        e.preventDefault()\r\n        errorsContainer.innerHTML = ''\r\n        _index__WEBPACK_IMPORTED_MODULE_3__.errors.clear()\r\n\r\n        const card = document.querySelector('#card').value\r\n        const expirationDate =document.querySelector('#expiration-date').value\r\n        const cvv = document.querySelector('#cvv').value\r\n\r\n        const expiryYear = expirationDate.replace(/\\d+\\//, '')\r\n        const expiryMonth = expirationDate.replace(/\\/\\d+/, '')\r\n\r\n        ;(0,_firstForm_inputValidator__WEBPACK_IMPORTED_MODULE_0__.inputValidator)(card, cardNumberPattern(), 'card', validationErrors.card)\r\n        ;(0,_expiryDayValidation__WEBPACK_IMPORTED_MODULE_1__.default)(expiryYear, expiryMonth, 'expiration-date', validationErrors.expirationDate)\r\n        ;(0,_firstForm_inputValidator__WEBPACK_IMPORTED_MODULE_0__.inputValidator)(cvv, cvvPattern(), 'cvv', validationErrors.cvv)\r\n\r\n        ;(0,_switchToNextForm__WEBPACK_IMPORTED_MODULE_2__.default)(thirdForm, successPayment, e, true)\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://forms/./src/js/thirdForm/formHandler.js?");

/***/ }),

/***/ "./src/js/thirdForm/inputCardMask.js":
/*!*******************************************!*\
  !*** ./src/js/thirdForm/inputCardMask.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst inputCardMask = () => {\r\n    const cardInputValue = document.querySelector('#card')\r\n\r\n    cardInputValue.addEventListener('input', (e) => {\r\n        let x = e.target.value.replace(/\\D/g, '').match(/(\\d{0,4})(\\d{0,4})(\\d{0,4})(\\d{0,4})/)\r\n        e.target.value = !x[2] ? x[1] : x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : '')\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputCardMask);\r\n\n\n//# sourceURL=webpack://forms/./src/js/thirdForm/inputCardMask.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/js/index.js");
/******/ })()
;