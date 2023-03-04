(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("form-validate", [], factory);
	else if(typeof exports === 'object')
		exports["form-validate"] = factory();
	else
		root["form-validate"] = factory();
})(typeof self === 'undefined' ? this : self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/heplers/validationErrors/common.ts":
/*!************************************************!*\
  !*** ./src/heplers/validationErrors/common.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commonErrorMessages": () => (/* binding */ commonErrorMessages)
/* harmony export */ });
var commonErrorMessages = function commonErrorMessages() {
  var maxLength = function maxLength(value) {
    return "The maximum length must be less then ".concat(value);
  };
  var minLength = function minLength(value) {
    return "The minimum length must be more then ".concat(value);
  };
  var required = function required() {
    return "This field is require";
  };
  var lettersOnly = function lettersOnly() {
    return "This field must contain only letters";
  };
  var numbersOnly = function numbersOnly() {
    return "This field must contain only numbers";
  };
  var lettersAndNumbersOnly = function lettersAndNumbersOnly() {
    return "This field must contain letters and numbers only";
  };
  var containSpecialCharacters = function containSpecialCharacters() {
    return "This field must contain special characters";
  };
  var lowerCase = function lowerCase() {
    return "This string must be in lower case";
  };
  var upperCase = function upperCase() {
    return "This string must be in upper case";
  };
  var bothCasesRequired = function bothCasesRequired() {
    return "This string must contain both upper and lower cases";
  };
  return {
    maxLength: maxLength,
    minLength: minLength,
    required: required,
    lettersOnly: lettersOnly,
    numbersOnly: numbersOnly,
    lettersAndNumbersOnly: lettersAndNumbersOnly,
    containSpecialCharacters: containSpecialCharacters,
    lowerCase: lowerCase,
    upperCase: upperCase,
    bothCasesRequired: bothCasesRequired
  };
};

/***/ }),

/***/ "./src/heplers/validationErrors/index.ts":
/*!***********************************************!*\
  !*** ./src/heplers/validationErrors/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validationErrors": () => (/* binding */ validationErrors)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/heplers/validationErrors/common.ts");

var validationErrors = {
  common: (0,_common__WEBPACK_IMPORTED_MODULE_0__.commonErrorMessages)(),
  email: '',
  password: ''
};

/***/ }),

/***/ "./src/validationMethods/common.ts":
/*!*****************************************!*\
  !*** ./src/validationMethods/common.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateCommonString": () => (/* binding */ validateCommonString)
/* harmony export */ });
/* harmony import */ var _heplers_validationErrors_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../heplers/validationErrors/index */ "./src/heplers/validationErrors/index.ts");
/* harmony import */ var _utils_case_isOnlyLowercase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/case/isOnlyLowercase */ "./src/validationMethods/utils/case/isOnlyLowercase.ts");
/* harmony import */ var _utils_case_isOnlyUppercase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/case/isOnlyUppercase */ "./src/validationMethods/utils/case/isOnlyUppercase.ts");
/* harmony import */ var _utils_length_isLessThenMinLength__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/length/isLessThenMinLength */ "./src/validationMethods/utils/length/isLessThenMinLength.ts");
/* harmony import */ var _utils_length_isMoreThenMaxLength__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/length/isMoreThenMaxLength */ "./src/validationMethods/utils/length/isMoreThenMaxLength.ts");
/* harmony import */ var _utils_lettersAndNumbers_isContainSpecialCharacters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/lettersAndNumbers/isContainSpecialCharacters */ "./src/validationMethods/utils/lettersAndNumbers/isContainSpecialCharacters.ts");
/* harmony import */ var _utils_lettersAndNumbers_isLettersAndNumbersOnly__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/lettersAndNumbers/isLettersAndNumbersOnly */ "./src/validationMethods/utils/lettersAndNumbers/isLettersAndNumbersOnly.ts");
/* harmony import */ var _utils_lettersAndNumbers_isLettersOnly__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/lettersAndNumbers/isLettersOnly */ "./src/validationMethods/utils/lettersAndNumbers/isLettersOnly.ts");
/* harmony import */ var _utils_lettersAndNumbers_isNumbersOnly__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/lettersAndNumbers/isNumbersOnly */ "./src/validationMethods/utils/lettersAndNumbers/isNumbersOnly.ts");









var validateCommonString = function validateCommonString(value, settings) {
  var errorsMessages = [];
  var validationParameters = Object.keys(settings);
  validationParameters.forEach(function (parameter) {
    switch (parameter) {
      case "maxLength":
        (0,_utils_length_isMoreThenMaxLength__WEBPACK_IMPORTED_MODULE_4__.isMoreThenMaxLength)(value, settings) && errorsMessages.push(_heplers_validationErrors_index__WEBPACK_IMPORTED_MODULE_0__.validationErrors.common.maxLength(settings === null || settings === void 0 ? void 0 : settings.maxLength));
        break;
      case "minLength":
        (0,_utils_length_isLessThenMinLength__WEBPACK_IMPORTED_MODULE_3__.isLessThenMinLength)(value, settings) && errorsMessages.push(_heplers_validationErrors_index__WEBPACK_IMPORTED_MODULE_0__.validationErrors.common.minLength(settings === null || settings === void 0 ? void 0 : settings.minLength));
        break;
      case "required":
        !value && errorsMessages.push(_heplers_validationErrors_index__WEBPACK_IMPORTED_MODULE_0__.validationErrors.common.required());
        break;
      case "lettersOnly":
        (0,_utils_lettersAndNumbers_isLettersOnly__WEBPACK_IMPORTED_MODULE_7__.isLettersOnly)(value, settings) && errorsMessages.push(_heplers_validationErrors_index__WEBPACK_IMPORTED_MODULE_0__.validationErrors.common.lettersOnly());
        break;
      case "numbersOnly":
        (0,_utils_lettersAndNumbers_isNumbersOnly__WEBPACK_IMPORTED_MODULE_8__.isNumbersOnly)(value, settings) && errorsMessages.push(_heplers_validationErrors_index__WEBPACK_IMPORTED_MODULE_0__.validationErrors.common.numbersOnly());
        break;
      case "lettersAndNumbersOnly":
        (0,_utils_lettersAndNumbers_isLettersAndNumbersOnly__WEBPACK_IMPORTED_MODULE_6__.isLettersAndNumbersOnly)(value, settings) && errorsMessages.push(_heplers_validationErrors_index__WEBPACK_IMPORTED_MODULE_0__.validationErrors.common.lettersAndNumbersOnly());
        break;
      case "containSpecialCharacters":
        (0,_utils_lettersAndNumbers_isContainSpecialCharacters__WEBPACK_IMPORTED_MODULE_5__.isContainSpecialCharacters)(value, settings) && errorsMessages.push(_heplers_validationErrors_index__WEBPACK_IMPORTED_MODULE_0__.validationErrors.common.containSpecialCharacters());
        break;
      case "case":
        if (settings["case"] === "upper") {
          (0,_utils_case_isOnlyUppercase__WEBPACK_IMPORTED_MODULE_2__.isOnlyUppercase)(value, settings) && errorsMessages.push(_heplers_validationErrors_index__WEBPACK_IMPORTED_MODULE_0__.validationErrors.common.upperCase());
          break;
        }
        if (settings["case"] === "lower") {
          (0,_utils_case_isOnlyLowercase__WEBPACK_IMPORTED_MODULE_1__.isOnlyLowerCase)(value, settings) && errorsMessages.push(_heplers_validationErrors_index__WEBPACK_IMPORTED_MODULE_0__.validationErrors.common.lowerCase());
          break;
        }
        if (settings["case"] === "both required") {
          var upper = /[A-Z]/.test(value);
          var lower = /[a-z]/.test(value);
          !upper && !lower && errorsMessages.push(_heplers_validationErrors_index__WEBPACK_IMPORTED_MODULE_0__.validationErrors.common.bothCasesRequired());
        }
      default:
        return {
          errors: null
        };
    }
  });
  if (errorsMessages[0]) {
    return {
      errors: errorsMessages
    };
  } else {
    return {
      errors: null
    };
  }
};

/***/ }),

/***/ "./src/validationMethods/utils/case/isOnlyLowercase.ts":
/*!*************************************************************!*\
  !*** ./src/validationMethods/utils/case/isOnlyLowercase.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isOnlyLowerCase": () => (/* binding */ isOnlyLowerCase)
/* harmony export */ });
var isOnlyLowerCase = function isOnlyLowerCase(value, settings) {
  if (value && /[a-z]+$/.test(value)) {
    return true;
  } else return false;
};

/***/ }),

/***/ "./src/validationMethods/utils/case/isOnlyUppercase.ts":
/*!*************************************************************!*\
  !*** ./src/validationMethods/utils/case/isOnlyUppercase.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isOnlyUppercase": () => (/* binding */ isOnlyUppercase)
/* harmony export */ });
var isOnlyUppercase = function isOnlyUppercase(value, settings) {
  if (value && /[A-Z]+$/.test(value)) {
    return true;
  } else return false;
};

/***/ }),

/***/ "./src/validationMethods/utils/length/isLessThenMinLength.ts":
/*!*******************************************************************!*\
  !*** ./src/validationMethods/utils/length/isLessThenMinLength.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isLessThenMinLength": () => (/* binding */ isLessThenMinLength)
/* harmony export */ });
var isLessThenMinLength = function isLessThenMinLength(value, settings) {
  if (value && value.length < (settings === null || settings === void 0 ? void 0 : settings.minLength)) {
    return true;
  } else return false;
};

/***/ }),

/***/ "./src/validationMethods/utils/length/isMoreThenMaxLength.ts":
/*!*******************************************************************!*\
  !*** ./src/validationMethods/utils/length/isMoreThenMaxLength.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMoreThenMaxLength": () => (/* binding */ isMoreThenMaxLength)
/* harmony export */ });
var isMoreThenMaxLength = function isMoreThenMaxLength(value, settings) {
  if (value && value.length > (settings === null || settings === void 0 ? void 0 : settings.maxLength)) {
    return true;
  } else return false;
};

/***/ }),

/***/ "./src/validationMethods/utils/lettersAndNumbers/isContainSpecialCharacters.ts":
/*!*************************************************************************************!*\
  !*** ./src/validationMethods/utils/lettersAndNumbers/isContainSpecialCharacters.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isContainSpecialCharacters": () => (/* binding */ isContainSpecialCharacters)
/* harmony export */ });
var isContainSpecialCharacters = function isContainSpecialCharacters(value, settings) {
  if (value && /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]\s/.test(value)) {
    return true;
  } else return false;
};

/***/ }),

/***/ "./src/validationMethods/utils/lettersAndNumbers/isLettersAndNumbersOnly.ts":
/*!**********************************************************************************!*\
  !*** ./src/validationMethods/utils/lettersAndNumbers/isLettersAndNumbersOnly.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isLettersAndNumbersOnly": () => (/* binding */ isLettersAndNumbersOnly)
/* harmony export */ });
var isLettersAndNumbersOnly = function isLettersAndNumbersOnly(value, settings) {
  if (value && /^[A-Za-z0-9]\s*$/.test(value)) {
    return true;
  } else return false;
};

/***/ }),

/***/ "./src/validationMethods/utils/lettersAndNumbers/isLettersOnly.ts":
/*!************************************************************************!*\
  !*** ./src/validationMethods/utils/lettersAndNumbers/isLettersOnly.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isLettersOnly": () => (/* binding */ isLettersOnly)
/* harmony export */ });
var isLettersOnly = function isLettersOnly(value, settings) {
  if (value && !/^[A-Za-z\s]*$/.test(value)) {
    return true;
  } else return false;
};

/***/ }),

/***/ "./src/validationMethods/utils/lettersAndNumbers/isNumbersOnly.ts":
/*!************************************************************************!*\
  !*** ./src/validationMethods/utils/lettersAndNumbers/isNumbersOnly.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumbersOnly": () => (/* binding */ isNumbersOnly)
/* harmony export */ });
var isNumbersOnly = function isNumbersOnly(value, settings) {
  if (value && /^\d\s+$/.test(value)) {
    return true;
  } else return false;
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/validate.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validationMethods_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validationMethods/common */ "./src/validationMethods/common.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Validate = /*#__PURE__*/function () {
  function Validate() {
    _classCallCheck(this, Validate);
  }
  _createClass(Validate, [{
    key: "common",
    value: function common(value, settings) {
      return (0,_validationMethods_common__WEBPACK_IMPORTED_MODULE_0__.validateCommonString)(value, settings);
    }
  }, {
    key: "email",
    value: function email() {}
  }, {
    key: "password",
    value: function password() {}
  }]);
  return Validate;
}();
var validate = new Validate();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});