window["OpenStadComponents"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/poll/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/es/array/includes.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/es/array/includes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
var entryUnbind = __webpack_require__(/*! ../../internals/entry-unbind */ "./node_modules/core-js/internals/entry-unbind.js");

module.exports = entryUnbind('Array', 'includes');


/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-uses-to-length.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/entry-unbind.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/entry-unbind.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");

var call = Function.call;

module.exports = function (CONSTRUCTOR, METHOD, length) {
  return bind(call, global[CONSTRUCTOR].prototype[METHOD], length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "./node_modules/es6-promise-promise/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es6-promise-promise/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js").Promise;


/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   3.3.1
 */

(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  return typeof x === 'function' || typeof x === 'object' && x !== null;
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (!Array.isArray) {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
} else {
  _isArray = Array.isArray;
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  return function () {
    vertxNext(flush);
  };
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(/*! vertx */ 0);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  _resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
  try {
    then.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        _resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      _reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      _reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    _reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return _resolve(promise, value);
    }, function (reason) {
      return _reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$) {
  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$ === GET_THEN_ERROR) {
      _reject(promise, GET_THEN_ERROR.error);
    } else if (then$$ === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$)) {
      handleForeignThenable(promise, maybeThenable, then$$);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function _resolve(promise, value) {
  if (promise === value) {
    _reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function _reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      _reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      _resolve(promise, value);
    } else if (failed) {
      _reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      _reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      _resolve(promise, value);
    }, function rejectPromise(reason) {
      _reject(promise, reason);
    });
  } catch (e) {
    _reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this._input = input;
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate();
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    _reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
};

Enumerator.prototype._enumerate = function () {
  var length = this.length;
  var _input = this._input;

  for (var i = 0; this._state === PENDING && i < length; i++) {
    this._eachEntry(_input[i], i);
  }
};

Enumerator.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$ = c.resolve;

  if (resolve$$ === resolve) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$) {
        return resolve$$(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$(entry), i);
  }
};

Enumerator.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      _reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  _reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
  }
}

Promise.all = all;
Promise.race = race;
Promise.resolve = resolve;
Promise.reject = reject;
Promise._setScheduler = setScheduler;
Promise._setAsap = setAsap;
Promise._asap = asap;

Promise.prototype = {
  constructor: Promise,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

function polyfill() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise;
}

polyfill();
// Strange compat..
Promise.polyfill = polyfill;
Promise.Promise = Promise;

return Promise;

})));
//# sourceMappingURL=es6-promise.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/merge/merge.js":
/*!*************************************!*\
  !*** ./node_modules/merge/merge.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*!
 * @name JavaScript/NodeJS Merge v1.2.1
 * @author yeikos
 * @repository https://github.com/yeikos/js.merge

 * Copyright 2014 yeikos - MIT license
 * https://raw.github.com/yeikos/js.merge/master/LICENSE
 */

;(function(isNode) {

	/**
	 * Merge one or more objects 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	var Public = function(clone) {

		return merge(clone === true, false, arguments);

	}, publicName = 'merge';

	/**
	 * Merge two or more objects recursively 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	Public.recursive = function(clone) {

		return merge(clone === true, true, arguments);

	};

	/**
	 * Clone the input removing any reference
	 * @param mixed input
	 * @return mixed
	 */

	Public.clone = function(input) {

		var output = input,
			type = typeOf(input),
			index, size;

		if (type === 'array') {

			output = [];
			size = input.length;

			for (index=0;index<size;++index)

				output[index] = Public.clone(input[index]);

		} else if (type === 'object') {

			output = {};

			for (index in input)

				output[index] = Public.clone(input[index]);

		}

		return output;

	};

	/**
	 * Merge two objects recursively
	 * @param mixed input
	 * @param mixed extend
	 * @return mixed
	 */

	function merge_recursive(base, extend) {

		if (typeOf(base) !== 'object')

			return extend;

		for (var key in extend) {

			if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

				base[key] = merge_recursive(base[key], extend[key]);

			} else {

				base[key] = extend[key];

			}

		}

		return base;

	}

	/**
	 * Merge two or more objects
	 * @param bool clone
	 * @param bool recursive
	 * @param array argv
	 * @return object
	 */

	function merge(clone, recursive, argv) {

		var result = argv[0],
			size = argv.length;

		if (clone || typeOf(result) !== 'object')

			result = {};

		for (var index=0;index<size;++index) {

			var item = argv[index],

				type = typeOf(item);

			if (type !== 'object') continue;

			for (var key in item) {

				if (key === '__proto__') continue;

				var sitem = clone ? Public.clone(item[key]) : item[key];

				if (recursive) {

					result[key] = merge_recursive(result[key], sitem);

				} else {

					result[key] = sitem;

				}

			}

		}

		return result;

	}

	/**
	 * Get type of variable
	 * @param mixed input
	 * @return string
	 *
	 * @see http://jsperf.com/typeofvar
	 */

	function typeOf(input) {

		return ({}).toString.call(input).slice(8, -1).toLowerCase();

	}

	if (isNode) {

		module.exports = Public;

	} else {

		window[publicName] = Public;

	}

})( true && module && typeof module.exports === 'object' && module.exports);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Promise) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! es6-promise-promise */ "./node_modules/es6-promise-promise/index.js")))

/***/ }),

/***/ "./src/component/index.jsx":
/*!*********************************!*\
  !*** ./src/component/index.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponent; });
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es_array_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es/array/includes */ "./node_modules/core-js/es/array/includes.js");
/* harmony import */ var core_js_es_array_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es_array_includes__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




'use strict';

var OpenStadComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(OpenStadComponent, _React$Component);

  var _super = _createSuper(OpenStadComponent);

  function OpenStadComponent(props) {
    var _this;

    var defaultConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaultdefaultConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, OpenStadComponent);

    _this = _super.call(this, props);

    var self = _assertThisInitialized(_this);

    if (props.attributes) {
      Object.keys(props.attributes).forEach(function (key) {
        var attribute = props.attributes[key];
        self[attribute.name] = attribute.value;
      });
    } // config


    if (typeof self.config == 'string') {
      try {
        self.config = JSON.parse(self.config);
      } catch (err) {}
    }

    var propsConfig = props.config || {};
    propsConfig = removeUndefAndNull(propsConfig); // remove undefined and null

    self.config = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive({
      siteId: null,
      api: {
        url: null,
        headers: null,
        isUserLoggedIn: false
      },
      user: {}
    }, defaultConfig, defaultdefaultConfig, propsConfig);
    self.divId = self.divId || self.config && self.config.divId || props.id || "openstad-component-".concat(parseInt(100000000 * Math.random()));
    window[self.divId] = self;
    return _this;
  }

  _createClass(OpenStadComponent, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {// let event = new Event('isReady');
      // self.isReady = true;
      // self.instance.dispatchEvent(event);
    }
  }]);

  return OpenStadComponent;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



function removeUndefAndNull(obj) {
  if (_typeof(obj) != 'object') return obj;
  Object.keys(obj).forEach(function (key) {
    if (typeof obj[key] == 'undefined' || obj[key] == null) delete obj[key];
    if (_typeof(obj[key]) == 'object') obj[key] = removeUndefAndNull(obj[key]);
  });
  return obj;
}

/***/ }),

/***/ "./src/forms/component/default-input.jsx":
/*!***********************************************!*\
  !*** ./src/forms/component/default-input.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentDefaultInput; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var OpenStadComponentDefaultInput = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentDefaultInput, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentDefaultInput);

  function OpenStadComponentDefaultInput(props) {
    var _this;

    var defaultConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, OpenStadComponentDefaultInput);

    _this = _super.call(this, props, {
      choices: [],
      name: '',
      placeholder: '',
      disabled: false,
      required: false
    }, defaultConfig);

    var self = _assertThisInitialized(_this);

    self.state = {
      value: props.value,
      error: null
    };
    _this.onChange = props.onChange;
    return _this;
  }

  _createClass(OpenStadComponentDefaultInput, [{
    key: "validate",
    value: function validate(_ref) {
      var showErrors = _ref.showErrors;
      var isValid = this.config.required ? !!this.state.value : true;
      var error = '';
      if (!isValid && showErrors) error = true;
      this.setState({
        isValid: isValid,
        error: error
      });
      return isValid;
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(data) {
      var self = this;
      data = data || {};
      self.setState(data, function () {
        self.validate({});
      });

      if (typeof self.onChange == 'function') {
        self.onChange({
          name: self.config.name,
          value: data.value
        });
      }
    }
  }]);

  return OpenStadComponentDefaultInput;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/component/form-field.jsx":
/*!********************************************!*\
  !*** ./src/forms/component/form-field.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentFormField; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _hidden_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hidden.jsx */ "./src/forms/component/hidden.jsx");
/* harmony import */ var _image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-upload.jsx */ "./src/forms/component/image-upload.jsx");
/* harmony import */ var _input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-with-counter.jsx */ "./src/forms/component/input-with-counter.jsx");
/* harmony import */ var _radios_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radios.jsx */ "./src/forms/component/radios.jsx");
/* harmony import */ var _postcode_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postcode.jsx */ "./src/forms/component/postcode.jsx");
/* harmony import */ var _select_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select.jsx */ "./src/forms/component/select.jsx");
/* harmony import */ var _textinput_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./textinput.jsx */ "./src/forms/component/textinput.jsx");
/* harmony import */ var _textarea_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./textarea.jsx */ "./src/forms/component/textarea.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }











var OpenStadComponentFormField = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentFormField, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentFormField);

  function OpenStadComponentFormField(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentFormField);

    _this = _super.call(this, props, {
      inputType: null,
      validateAction: null,
      changeAction: null,
      required: false,
      title: null,
      description: null,
      choices: []
    });

    var self = _assertThisInitialized(_this);

    self.config.name = self.config.name || self.config.title.toLowerCase();
    self.state = {
      value: props.value || undefined
    };
    self.handleOnChange = self.handleOnChange.bind(self);
    self.onChange = props.onChange;
    return _this;
  }

  _createClass(OpenStadComponentFormField, [{
    key: "validate",
    value: function validate(_ref) {
      var showErrors = _ref.showErrors;
      return this.input ? this.input.validate({
        showErrors: showErrors
      }) : true;
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(data) {
      // console.log("form field change", data);
      if (typeof this.onChange == 'function') {
        this.onChange(data);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var titleHTML = null;

      if (self.config.title) {
        titleHTML = /*#__PURE__*/React.createElement("h3", {
          className: "osc-form-title"
        }, self.config.title);
      }

      var descriptionHTML = null;

      if (self.config.description) {
        descriptionHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-description",
          dangerouslySetInnerHTML: {
            __html: self.config.description
          }
        });
      }

      var fieldHTML = null;

      switch (self.config.inputType) {
        case 'hidden':
          fieldHTML = /*#__PURE__*/React.createElement(_hidden_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
            config: self.config,
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'html-with-counter':
        case 'htmlarea-with-counter':
          fieldHTML = /*#__PURE__*/React.createElement(_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            config: _objectSpread(_objectSpread({}, self.config), {}, {
              inputType: 'htmlarea'
            }),
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'image-upload':
          fieldHTML = /*#__PURE__*/React.createElement(_image_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
            config: self.config,
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'input-with-counter':
        case 'text-with-counter':
          fieldHTML = /*#__PURE__*/React.createElement(_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            config: _objectSpread({
              inputType: 'input'
            }, self.config),
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'postcode':
          fieldHTML = /*#__PURE__*/React.createElement(_postcode_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
            config: self.config,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'radios':
          fieldHTML = /*#__PURE__*/React.createElement(_radios_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
            config: self.config,
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'select':
        case 'multiple-choice':
          fieldHTML = /*#__PURE__*/React.createElement(_select_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
            config: self.config,
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'text':
          fieldHTML = /*#__PURE__*/React.createElement(_textinput_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
            config: self.config,
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'textarea':
          fieldHTML = /*#__PURE__*/React.createElement(_textarea_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
            config: self.config,
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        case 'textarea-with-counter':
          fieldHTML = /*#__PURE__*/React.createElement(_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            config: _objectSpread(_objectSpread({}, self.config), {}, {
              inputType: 'textarea'
            }),
            value: this.props.value || this.config.value,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            }
          });
          break;

        default:
      }

      return /*#__PURE__*/React.createElement("div", {
        id: self.id,
        ref: function ref(el) {
          return self.instance = el;
        },
        className: "osc-form-field"
      }, titleHTML, descriptionHTML, fieldHTML);
    }
  }]);

  return OpenStadComponentFormField;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/component/form.jsx":
/*!**************************************!*\
  !*** ./src/forms/component/form.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentForm; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _form_field_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-field.jsx */ "./src/forms/component/form-field.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var OpenStadComponentForm = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentForm, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentForm);

  function OpenStadComponentForm(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentForm);

    _this = _super.call(this, props, {
      title: null,
      intro: null,
      fields: []
    });

    var self = _assertThisInitialized(_this);

    self.state = {
      values: props.values || {}
    };
    self.handleOnChange = self.handleOnChange.bind(_assertThisInitialized(_this));
    self.fields = [];
    return _this;
  }

  _createClass(OpenStadComponentForm, [{
    key: "getValues",
    value: function getValues() {
      return this.state.values;
    }
  }, {
    key: "validate",
    value: function validate(_ref) {
      var showErrors = _ref.showErrors,
          scrollTo = _ref.scrollTo;
      var self = this;
      var isValid = true;
      var firstInvalid = null;
      self.fields.forEach(function (field) {
        if (!field.validate({
          showErrors: showErrors
        })) {
          isValid = false;
          if (!firstInvalid) firstInvalid = field;
        }
      });
      if (scrollTo && firstInvalid && firstInvalid.instance && firstInvalid.instance.scrollIntoView) firstInvalid.instance.scrollIntoView({
        behavior: 'smooth'
      });
      return isValid;
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(data) {
      // console.log("formchange", data);
      var self = this;

      var values = _objectSpread({}, this.state.values);

      values[data.name] = data.value;
      this.setState({
        values: values
      });
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var titleHTML = null;

      if (self.config.title) {
        titleHTML = /*#__PURE__*/React.createElement("h2", {
          className: "osc-form-title"
        }, self.config.title);
      }

      var introHTML = null;

      if (self.config.intro) {
        introHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-intro",
          dangerouslySetInnerHTML: {
            __html: self.config.intro
          }
        });
      }

      var fieldsHTML = null;

      if (self.config.fields && self.config.fields.length) {
        fieldsHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-fields"
        }, self.config.fields.map(function (fieldConfig, i) {
          return /*#__PURE__*/React.createElement(_form_field_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], _defineProperty({
            config: fieldConfig,
            onChange: self.handleOnChange,
            ref: function ref(el) {
              return self.input = el;
            },
            key: "osc-form-field-".concat(i)
          }, "ref", function ref(el) {
            self.fields[i] = el;
          }));
        }));
      }

      return /*#__PURE__*/React.createElement("div", {
        id: self.divId,
        className: "osc-form",
        ref: function ref(el) {
          return self.instance = el;
        }
      }, titleHTML, introHTML, fieldsHTML);
    }
  }]);

  return OpenStadComponentForm;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/component/hidden.jsx":
/*!****************************************!*\
  !*** ./src/forms/component/hidden.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentSelect; });
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var OpenStadComponentSelect = /*#__PURE__*/function (_OpenStadComponentDef) {
  _inherits(OpenStadComponentSelect, _OpenStadComponentDef);

  var _super = _createSuper(OpenStadComponentSelect);

  function OpenStadComponentSelect() {
    _classCallCheck(this, OpenStadComponentSelect);

    return _super.apply(this, arguments);
  }

  _createClass(OpenStadComponentSelect, [{
    key: "render",
    value: function render() {
      var self = this;
      return /*#__PURE__*/React.createElement("input", {
        type: "hidden",
        value: this.props.value,
        disabled: this.props.disabled,
        placeholder: this.config.placeholder,
        onChange: function onChange(e) {
          return self.handleOnChange({
            value: self.input.value
          });
        },
        ref: function ref(el) {
          return self.input = el;
        }
      });
    }
  }]);

  return OpenStadComponentSelect;
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/component/htmlarea.jsx":
/*!******************************************!*\
  !*** ./src/forms/component/htmlarea.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentHTMLArea; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // TODO: it is probably not ok to write your own html editor, but after intergrating ckeditor or react-rte the build was (more than) twice as large; a bettter solution must be possible

'use strict';

var OpenStadComponentHTMLArea = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentHTMLArea, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentHTMLArea);

  function OpenStadComponentHTMLArea(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentHTMLArea);

    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value
    };
    _this.onKeyUpx = _this.onKeyUpx.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OpenStadComponentHTMLArea, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var value = this.props.value;
      value = this.filterHTML(value);
      this.input.innerHTML = value;
    }
  }, {
    key: "filterHTML",
    value: function filterHTML(value) {
      value = value.replace(/<(\/?\s*(?:a [^>]+|a|b|i|strong|em|p|div|br|ul|li)\s*\/?)>/g, "[[[$1]]]");
      value = value.replace(/<[^>]+>/g, "");
      value = value.replace(/\[\[\[([^\]]+)\]\]\]/g, "<$1>");
      return value;
    }
  }, {
    key: "executeAction",
    value: function executeAction(e, command, args) {
      e.preventDefault();
      e.stopPropagation();
      document.execCommand(command, false, args);
      this.onKeyUp();
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }

      if (this.props.onChange) {
        this.props.onChange({
          value: this.state.value
        });
      }
    }
  }, {
    key: "onKeyUpx",
    value: function onKeyUpx() {
      var value = this.input.innerHTML;
      value = this.filterHTML(value);
      this.setState({
        value: value
      });

      if (this.props.onKeyUp) {
        this.props.onKeyUp(value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("div", {
        className: "osc-html-editor"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-html-editor-buttons"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-html-editor-button osc-html-editor-button-bold",
        onMouseDown: function onMouseDown(e) {
          return _this2.executeAction(e, 'bold');
        }
      }, "\xA0"), /*#__PURE__*/React.createElement("div", {
        className: "osc-html-editor-button osc-html-editor-button-italic",
        onMouseDown: function onMouseDown(e) {
          return _this2.executeAction(e, 'italic');
        }
      }, "\xA0"), /*#__PURE__*/React.createElement("div", {
        className: "osc-html-editor-button osc-html-editor-button-insertunorderedlist",
        onMouseDown: function onMouseDown(e) {
          return _this2.executeAction(e, 'insertunorderedlist');
        }
      }, "\xA0"), /*#__PURE__*/React.createElement("div", {
        className: "osc-html-editor-button osc-html-editor-button-createlink",
        onMouseDown: function onMouseDown(e) {
          return _this2.executeAction(e, 'createlink', prompt('Lank naar', 'http://'));
        }
      }, "\xA0")), /*#__PURE__*/React.createElement("div", {
        className: "osc-html-editor-content",
        contentEditable: true,
        onFocus: function onFocus(e) {
          return _this2.onFocus(e);
        },
        onBlur: function onBlur(e) {
          return _this2.onBlur(e);
        },
        onKeyUp: function onKeyUp(e) {
          return _this2.onKeyUpx();
        } // dangerouslySetInnerHTML={{ __html: this.state.value }}
        ,
        ref: function ref(el) {
          return _this2.input = el;
        }
      }));
    }
  }]);

  return OpenStadComponentHTMLArea;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



function EditButton(props) {
  return /*#__PURE__*/React.createElement("button", {
    key: props.cmd,
    onMouseDown: function onMouseDown(evt) {
      evt.preventDefault(); // Avoids loosing focus from the editable area

      document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
    }
  }, props.name || props.cmd);
}

/***/ }),

/***/ "./src/forms/component/image-upload.jsx":
/*!**********************************************!*\
  !*** ./src/forms/component/image-upload.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentSelect; });
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var OpenStadComponentSelect = /*#__PURE__*/function (_OpenStadComponentDef) {
  _inherits(OpenStadComponentSelect, _OpenStadComponentDef);

  var _super = _createSuper(OpenStadComponentSelect);

  function OpenStadComponentSelect(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentSelect);

    _this = _super.call(this, props, {
      allowMultiple: false,
      imageserver: {
        process: '/image',
        fetch: '/image'
      }
    });
    console.log(_this.config);
    console.log(_this.props.config);
    var uploadedFiles = [];
    var value = props.value || [];
    if (!Array.isArray(value)) value = [value];
    value.forEach(function (image) {
      var src = _typeof(image) == 'object' ? image.src : image;
      uploadedFiles.push({
        source: {
          url: src
        },
        options: {
          type: 'local',
          file: {
            name: src
          },
          metadata: {
            poster: src
          }
        }
      });
    });
    _this.state = {
      uploadedFiles: uploadedFiles
    };
    return _this;
  }

  _createClass(OpenStadComponentSelect, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      // filepond files
      this._loadedFiles = 0;
      this.files = ["https://unpkg.com/filepond/dist/filepond.js", "https://unpkg.com/filepond-polyfill/dist/filepond-polyfill.js", "https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js", "https://unpkg.com/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js", "https://unpkg.com/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.js", "https://unpkg.com/filepond-plugin-file-poster/dist/filepond-plugin-file-poster.js"];
      this.loadNextFile();
    }
  }, {
    key: "loadNextFile",
    value: function loadNextFile() {
      var self = this;
      var file = self.files[self._loadedFiles];

      if (file) {
        var element;
        element = document.createElement('script');
        element.src = file;
        element.async = true;

        if (element) {
          element.onload = function () {
            self.loadNextFile();
          };

          document.body.appendChild(element);
        }
      }

      if (self._loadedFiles == self.files.length) {
        self.fileUploaderInit();
      }

      self._loadedFiles++;
    }
  }, {
    key: "validate",
    value: function validate() {
      var isValid = true;

      if (this.imageuploader && this.imageuploader.getFiles) {
        var images = this.imageuploader.getFiles();
        images.forEach(function (image) {
          if (!image.serverId) {
            isValid = false;
          }
        });
      }

      return isValid;
    }
  }, {
    key: "fileUploaderInit",
    value: function fileUploaderInit() {
      var self = this;
      var containerElement = document.querySelector('.osc-image-upload-container');

      if (containerElement) {
        FilePond.registerPlugin(FilePondPluginImagePreview);
        FilePond.registerPlugin(FilePondPluginFileValidateSize);
        FilePond.registerPlugin(FilePondPluginFileValidateType);
        FilePond.registerPlugin(FilePondPluginFilePoster); // FilePond.setOptions({
        //   server: 'https://image-server2.openstadsdeel.nl/image/?access_token=MHhfb5U0m8vquAR81p',
        // });

        var filePondSettings = {
          // set allowed file types with mime types
          acceptedFileTypes: ['image/*'],
          allowFileSizeValidation: true,
          allowMultiple: this.config.allowMultiple,
          allowReorder: true,
          styleItemPanelAspectRatio: 1,
          maxFileSize: '8mb',
          name: 'image',
          maxFiles: 5,
          allowBrowse: true,
          files: this.state.uploadedFiles,
          server: {
            process: this.config.imageserver.process,
            fetch: this.config.imageserver.fetch
          },
          imageResizeTargetWidth: 80,
          imageResizeTargetHeight: 80,
          imageCropAspectRatio: '1:1',
          labelIdle: "Sleep afbeelding(en) naar deze plek of <span class='filepond--label-action'>KLIK HIER</span>",
          labelInvalidField: "Field contains invalid files",
          labelFileWaitingForSize: "Wachtend op grootte",
          labelFileSizeNotAvailable: "Grootte niet beschikbaar",
          labelFileCountSingular: "Bestand in lijst",
          labelFileCountPlural: "Bestanden in lijst",
          labelFileLoading: "Laden",
          labelFileAdded: "Toegevoegd",
          // assistive only
          labelFileLoadError: "Fout bij het uploaden",
          labelFileRemoved: "Verwijderd",
          // assistive only
          labelFileRemoveError: "Fout bij het verwijderen",
          labelFileProcessing: "Laden",
          labelFileProcessingComplete: "Afbeelding geladen",
          labelFileProcessingAborted: "Upload cancelled",
          labelFileProcessingError: "Error during upload",
          labelFileProcessingRevertError: "Error during revert",
          labelTapToCancel: "tap to cancel",
          labelTapToRetry: "tap to retry",
          labelTapToUndo: "tap to undo",
          labelButtonRemoveItem: "Verwijderen",
          labelButtonAbortItemLoad: "Abort",
          labelButtonRetryItemLoad: "Retry",
          labelButtonAbortItemProcessing: "Verwijder",
          labelButtonUndoItemProcessing: "Undo",
          labelButtonRetryItemProcessing: "Retry",
          labelButtonProcessItem: "Upload"
        };
        self.imageuploader = FilePond.create(containerElement, filePondSettings);
        var sortableInstance;
        var pondEl = document.querySelector('.filepond--root'); // tmp
        //self.state.value = ["https://image-server.staging.openstadsdeel.nl/image/85ef5669d9a5db2f0ec2adb6310620be"]
        //self.props.handleFieldChange(self.props.name, self.state.value )

        document.querySelector('.filepond--root').addEventListener('FilePond:processfile', function (e) {
          if (e.detail && e.detail.error) {
            console.log('Error uploding file: ', e.detail);
          }

          self.fileUploaderUpdateCurrentInput();
        });
        document.querySelector('.filepond--root').addEventListener('FilePond:removefile', function (e) {
          if (e.detail && e.detail.error) {
            console.log('Error uploding file: ', e.detail);
          }

          self.fileUploaderUpdateCurrentInput();
        });

        if (self.state.formfields) {
          self.imageuploader.addFiles(self.state.formfields.images);
        }
      }
    }
  }, {
    key: "fileUploaderUpdateCurrentInput",
    value: function fileUploaderUpdateCurrentInput() {
      var self = this;
      self.state.value = [];

      if (this.imageuploader && this.imageuploader.getFiles) {
        var images = this.imageuploader.getFiles();
        var asJson = self.config.as && self.config.as == 'json';
        images.forEach(function (image) {
          try {
            var serverId = typeof image.serverId == 'string' ? JSON.parse(image.serverId) : image.serverId;
            self.state.value.push(asJson ? {
              "src": serverId.url
            } : serverId.url);
          } catch (err) {
            console.log(err);
          }
        });
      }

      self.props.onChange({
        name: self.config.name,
        value: self.state.value
      });
    }
  }, {
    key: "fileUploaderUploaderAddImages",
    value: function fileUploaderUploaderAddImages(images) {
      var self = this;

      if (this.imageuploader) {
        this.imageuploader.addFiles(images);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var errorHTML = null;

      if (self.state.error) {
        errorHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-error"
        }, "Je hebt nog geen afbeelding geupload");
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "osc-image-upload-container"
      }, /*#__PURE__*/React.createElement("input", {
        type: "file",
        className: "imageUploader-gebiedstool filepond-gebiedstool"
      }), errorHTML);
    }
  }]);

  return OpenStadComponentSelect;
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/component/input-with-counter.jsx":
/*!****************************************************!*\
  !*** ./src/forms/component/input-with-counter.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormfieldInputWithCounter; });
/* harmony import */ var _htmlarea_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlarea.jsx */ "./src/forms/component/htmlarea.jsx");
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
 //import CKEditor from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var FormfieldInputWithCounter = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(FormfieldInputWithCounter, _OpenStadComponent);

  var _super = _createSuper(FormfieldInputWithCounter);

  function FormfieldInputWithCounter(props) {
    var _this;

    _classCallCheck(this, FormfieldInputWithCounter);

    _this = _super.call(this, props, {
      name: 'tekst',
      inputType: 'input',
      minLength: 5,
      maxLength: 1024,
      placeholder: ''
    });

    var self = _assertThisInitialized(_this);

    self.id = props.id || 'osc-formfields-plaintext-with-counter-' + parseInt(1000000 * Math.random());
    self.state = {
      focused: false,
      value: props.value || '',
      valueLength: props.value && props.value.length || 0
    };
    self.key = props.useKey || (self.id || 'osc-input-with-counter-') + parseInt(10000000 * Math.random);
    _this.onChange = props.onChange;
    self.handleOnChange = self.handleOnChange.bind(_assertThisInitialized(_this));
    self.onInputFocus = self.onInputFocus.bind(_assertThisInitialized(_this));
    self.onInputBlur = self.onInputBlur.bind(_assertThisInitialized(_this));
    self.onInputKeyUp = self.onInputKeyUp.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FormfieldInputWithCounter, [{
    key: "isValid",
    value: function isValid() {
      var state = {};
      state.isValid = true;
      state.warning = null;

      if (this.state.valueLength < this.config.minLength) {
        state.warning = "De tekst is te kort";
        state.isValid = false;
      }

      if (this.state.valueLength > this.config.maxLength) {
        state.warning = "De tekst is te lang";
        state.isValid = false;
      }

      this.setState(state);
      return state.isValid;
    }
  }, {
    key: "validate",
    value: function validate() {
      this.setState({
        showWarning: true
      });
      return this.isValid();
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(data) {
      data = data || {};
      this.setState(data);

      if (typeof this.onChange == 'function') {
        this.onChange({
          name: this.config.name,
          value: data.value
        });
      }
    }
  }, {
    key: "onInputFocus",
    value: function onInputFocus() {
      var state = {};
      state.focused = true;
      state.showWarning = false;
      this.setState(state);
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur() {
      var state = {};
      state.focused = false;
      this.setState(state);
    }
  }, {
    key: "onInputKeyUp",
    value: function onInputKeyUp(value) {
      var state = {};
      state.value = value || this.input.value;
      var valueLength = state.value.length;
      state.valueLength = valueLength;
      state.isValid = valueLength >= this.config.minLength && valueLength <= this.config.maxLength;
      this.setState(state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var self = this;
      var counter = null;
      var warning = null;

      if (self.state.focused) {
        if (self.state.valueLength < self.config.minLength) {
          counter = /*#__PURE__*/React.createElement("div", {
            className: "osc-form-counter osc-form-error"
          }, "Nog minimaal ", /*#__PURE__*/React.createElement("span", {
            className: ""
          }, self.config.minLength - self.state.valueLength), " tekens");
        } else {
          var error = self.state.valueLength > self.config.maxLength ? 'osc-form-error' : '';
          counter = /*#__PURE__*/React.createElement("div", {
            className: 'osc-form-counter ' + error
          }, "Je hebt nog ", /*#__PURE__*/React.createElement("span", {
            className: ""
          }, self.config.maxLength - self.state.valueLength), " tekens over.");
        }
      }

      if (self.state.showWarning && self.state.warning) {
        warning = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-warning",
          ref: function ref(el) {
            return _this2['form-warning'] = el;
          }
        }, self.state.warning);
      }

      var inputHTML = null;

      switch (self.config.inputType) {
        case 'htmlarea':
          inputHTML = /*#__PURE__*/React.createElement(_htmlarea_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
            value: this.state.value,
            onChange: self.handleOnChange,
            onFocus: self.onInputFocus,
            onBlur: self.onInputBlur,
            onKeyUp: self.onInputKeyUp
          }); // inputHTML = (
          //   <CKEditor
          //     editor={ ClassicEditor }
          //     config={{ toolbar: [ 'h3', 'bold', 'italic', 'link' ] }}
          //     data={this.state.value}
          //     onInit={ editor => {
          //       // TODO: betere selector
          //       document.querySelector('.ck-content').addEventListener('keyup', function(e) {
          //         self.onInputKeyUp(e, editor.getData())
          //       })
          //     }}
          //     onChange={( event, editor ) => self.handleOnChange({ value: editor.getData() })}
          //     onFocus={e => self.onInputFocus(e)}
          //     onBlur={e => self.onInputBlur(e)}
          //   />
          // );

          break;

        case 'textarea':
          inputHTML = /*#__PURE__*/React.createElement("textarea", {
            key: self.key,
            ref: function ref(el) {
              return self.input = el;
            },
            value: this.state.value,
            disabled: this.props.disabled,
            placeholder: this.config.placeholder,
            onChange: function onChange(e) {
              return self.handleOnChange({
                value: self.input.value
              });
            },
            onKeyUp: function onKeyUp(e) {
              return self.onInputKeyUp();
            },
            onFocus: function onFocus(e) {
              return self.onInputFocus(e);
            },
            onBlur: function onBlur(e) {
              return self.onInputBlur(e);
            }
          });
          break;

        case 'input':
        default:
          inputHTML = /*#__PURE__*/React.createElement("input", {
            key: self.key,
            ref: function ref(el) {
              return self.input = el;
            },
            value: this.state.value,
            disabled: this.props.disabled,
            placeholder: this.config.placeholder,
            onChange: function onChange(e) {
              return self.handleOnChange({
                value: self.input.value
              });
            },
            onKeyUp: function onKeyUp(e) {
              return self.onInputKeyUp();
            },
            onFocus: function onFocus(e) {
              return self.onInputFocus(e);
            },
            onBlur: function onBlur(e) {
              return self.onInputBlur(e);
            }
          });
      }

      return /*#__PURE__*/React.createElement("div", {
        id: self.id,
        ref: function ref(el) {
          return self.instance = el;
        },
        className: "osc-input-with-counter"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-form-feedback"
      }, inputHTML, counter, warning));
    }
  }]);

  return FormfieldInputWithCounter;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/forms/component/postcode.jsx":
/*!******************************************!*\
  !*** ./src/forms/component/postcode.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentPostcode; });
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var OpenStadComponentPostcode = /*#__PURE__*/function (_OpenStadComponentDef) {
  _inherits(OpenStadComponentPostcode, _OpenStadComponentDef);

  var _super = _createSuper(OpenStadComponentPostcode);

  function OpenStadComponentPostcode() {
    _classCallCheck(this, OpenStadComponentPostcode);

    return _super.apply(this, arguments);
  }

  _createClass(OpenStadComponentPostcode, [{
    key: "validate",
    value: function validate(_ref) {
      var showErrors = _ref.showErrors;
      var isValid = true;
      var error = '';

      if (!this.state.value || !this.state.value.match(/^\s*\d{4}\s*[a-zA-Z][a-zA-Z]\s*$/)) {
        isValid = false;
        if (showErrors) error = 'Dit is geen postcode';
      }

      if (this.config.required && !this.state.value) {
        isValid = false;
        if (showErrors) error = 'Je hebt nog niets ingevuld';
      }

      this.setState({
        isValid: isValid,
        error: error
      });
      return isValid;
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var errorHTML = null;

      if (self.state.error) {
        errorHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-error"
        }, self.state.error);
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "osc-textinput"
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: this.props.value,
        disabled: this.props.disabled,
        placeholder: this.config.placeholder,
        onChange: function onChange(e) {
          return self.handleOnChange({
            value: self.input.value
          });
        },
        ref: function ref(el) {
          return self.input = el;
        }
      }), errorHTML);
    }
  }]);

  return OpenStadComponentPostcode;
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/component/radios.jsx":
/*!****************************************!*\
  !*** ./src/forms/component/radios.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentRadios; });
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var OpenStadComponentRadios = /*#__PURE__*/function (_OpenStadComponentDef) {
  _inherits(OpenStadComponentRadios, _OpenStadComponentDef);

  var _super = _createSuper(OpenStadComponentRadios);

  function OpenStadComponentRadios() {
    _classCallCheck(this, OpenStadComponentRadios);

    return _super.apply(this, arguments);
  }

  _createClass(OpenStadComponentRadios, [{
    key: "render",
    value: function render() {
      var self = this;
      var errorHTML = null;

      if (self.state.error) {
        errorHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-error"
        }, "Je hebt nog geen keuze gemaakt");
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "osc-radios"
      }, self.config.choices.map(function (choice) {
        if (choice.dangerousDescription) {
          return /*#__PURE__*/React.createElement("div", {
            className: "osc-radio-container",
            key: choice.value
          }, /*#__PURE__*/React.createElement("div", {
            className: "osc-radio-input".concat(self.state.value == choice.value ? ' osc-radio-input-checked' : '')
          }, /*#__PURE__*/React.createElement("input", {
            type: "radio",
            name: self.divId,
            value: choice.value,
            onChange: function onChange(e) {
              return self.handleOnChange({
                value: choice.value
              });
            }
          })), /*#__PURE__*/React.createElement("div", {
            className: "osc-radio-text",
            dangerouslySetInnerHTML: {
              __html: choice.dangerousDescription
            }
          }));
        } else {
          return /*#__PURE__*/React.createElement("div", {
            className: "osc-radio-container",
            key: choice.value
          }, /*#__PURE__*/React.createElement("div", {
            className: "osc-radio-input".concat(self.state.value == choice.value ? ' osc-radio-input-checked' : '')
          }, /*#__PURE__*/React.createElement("input", {
            type: "radio",
            name: self.divId,
            value: choice.value,
            onChange: function onChange(e) {
              return self.handleOnChange({
                value: choice.value
              });
            }
          })), /*#__PURE__*/React.createElement("div", {
            className: "osc-radio-text"
          }, choice.dangerousDescription ? null : choice.description || choice.title || choice.value));
        }
      }), errorHTML);
    }
  }]);

  return OpenStadComponentRadios;
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/component/select.jsx":
/*!****************************************!*\
  !*** ./src/forms/component/select.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentSelect; });
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var OpenStadComponentSelect = /*#__PURE__*/function (_OpenStadComponentDef) {
  _inherits(OpenStadComponentSelect, _OpenStadComponentDef);

  var _super = _createSuper(OpenStadComponentSelect);

  function OpenStadComponentSelect() {
    _classCallCheck(this, OpenStadComponentSelect);

    return _super.apply(this, arguments);
  }

  _createClass(OpenStadComponentSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // init value
      var value = this.state.value || this.config.choices[0] && this.config.choices[0].value;
      this.handleOnChange({
        value: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var errorHTML = null;

      if (self.state.error) {
        errorHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-error"
        }, "Je hebt nog geen keuze gemaakt");
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "osc-select"
      }, /*#__PURE__*/React.createElement("select", {
        value: this.state.value || '',
        disabled: this.props.disabled,
        placeholder: this.config.placeholder,
        onChange: function onChange(e) {
          return self.handleOnChange({
            value: self.input.value
          });
        },
        ref: function ref(el) {
          return self.input = el;
        }
      }, self.config.choices.map(function (choice) {
        return /*#__PURE__*/React.createElement("option", {
          value: choice.value || '',
          key: choice.value
        }, choice.description || choice.title || choice.value);
      })), errorHTML);
    }
  }]);

  return OpenStadComponentSelect;
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/component/slider.jsx":
/*!****************************************!*\
  !*** ./src/forms/component/slider.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Slider = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(Slider, _OpenStadComponent);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value,
      touched: _this.props.touched || false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Slider, [{
    key: "handleChange",
    value: function handleChange(event) {
      var value = event.target.value;

      if (typeof this.props.onChange === 'function') {
        this.props.onChange(value);
      }

      this.setState({
        value: value,
        touched: true
      });
    }
  }, {
    key: "doTouch",
    value: function doTouch() {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(50);
      }

      this.setState({
        touched: true
      });
    }
  }, {
    key: "calcProgress",
    value: function calcProgress(min, max, value) {
      var range = max - min;
      var progInRange = value - min;
      return progInRange * 2 / range - 1;
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var _self$state = self.state,
          value = _self$state.value,
          touched = _self$state.touched;
      var _self$props = self.props,
          min = _self$props.min,
          max = _self$props.max,
          step = _self$props.step;
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(self.props.className, " osc-slider")
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-slider-track-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-slider-track"
      }), /*#__PURE__*/React.createElement("div", {
        className: "osc-slider-track-progress-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "osc-slider-track-progress",
        style: {
          transform: 'scaleX(' + self.calcProgress(min, max, value) + ')'
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "osc-slider-track-dot-end osc-slider-track-dot-left"
      }), /*#__PURE__*/React.createElement("div", {
        className: "osc-slider-track-dot-start osc-slider-track-dot-center"
      }), /*#__PURE__*/React.createElement("div", {
        className: "osc-slider-track-dot-end osc-slider-track-dot-right"
      })), /*#__PURE__*/React.createElement("input", {
        type: "range",
        min: min,
        max: max,
        step: step,
        value: value,
        onClick: function onClick() {
          if (!touched) self.doTouch();
        },
        onChange: self.handleChange,
        className: touched ? 'osc-slider-input-range' : 'osc-slider-input-range osc-slider-untouched',
        ref: function ref(el) {
          return self.input = el;
        }
      }));
    }
  }]);

  return Slider;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./src/forms/component/textarea.jsx":
/*!******************************************!*\
  !*** ./src/forms/component/textarea.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentSelect; });
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var OpenStadComponentSelect = /*#__PURE__*/function (_OpenStadComponentDef) {
  _inherits(OpenStadComponentSelect, _OpenStadComponentDef);

  var _super = _createSuper(OpenStadComponentSelect);

  function OpenStadComponentSelect() {
    _classCallCheck(this, OpenStadComponentSelect);

    return _super.apply(this, arguments);
  }

  _createClass(OpenStadComponentSelect, [{
    key: "render",
    value: function render() {
      var self = this;
      var errorHTML = null;

      if (self.state.error) {
        errorHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-error"
        }, "Je hebt nog niets ingevuld");
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "osc-textarea"
      }, /*#__PURE__*/React.createElement("textarea", {
        value: this.props.value,
        disabled: this.props.disabled,
        placeholder: this.config.placeholder,
        onChange: function onChange(e) {
          return self.handleOnChange({
            value: self.input.value
          });
        },
        ref: function ref(el) {
          return self.input = el;
        }
      }, this.state.value), errorHTML);
    }
  }]);

  return OpenStadComponentSelect;
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/component/textinput.jsx":
/*!*******************************************!*\
  !*** ./src/forms/component/textinput.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentText; });
/* harmony import */ var _default_input_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-input.jsx */ "./src/forms/component/default-input.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var OpenStadComponentText = /*#__PURE__*/function (_OpenStadComponentDef) {
  _inherits(OpenStadComponentText, _OpenStadComponentDef);

  var _super = _createSuper(OpenStadComponentText);

  function OpenStadComponentText() {
    _classCallCheck(this, OpenStadComponentText);

    return _super.apply(this, arguments);
  }

  _createClass(OpenStadComponentText, [{
    key: "render",
    value: function render() {
      var self = this;
      var errorHTML = null;

      if (self.state.error) {
        errorHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-form-error"
        }, "Je hebt nog niets ingevuld");
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "osc-textinput"
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: this.props.value,
        disabled: this.props.disabled,
        placeholder: this.config.placeholder,
        onChange: function onChange(e) {
          return self.handleOnChange({
            value: self.input.value
          });
        },
        ref: function ref(el) {
          return self.input = el;
        }
      }), errorHTML);
    }
  }]);

  return OpenStadComponentText;
}(_default_input_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/forms/css/default.less":
/*!************************************!*\
  !*** ./src/forms/css/default.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/forms/index.jsx":
/*!*****************************!*\
  !*** ./src/forms/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/default.less */ "./src/forms/css/default.less");
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_default_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_form_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/form.jsx */ "./src/forms/component/form.jsx");
/* harmony import */ var _component_form_field_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/form-field.jsx */ "./src/forms/component/form-field.jsx");
/* harmony import */ var _component_hidden_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/hidden.jsx */ "./src/forms/component/hidden.jsx");
/* harmony import */ var _component_image_upload_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/image-upload.jsx */ "./src/forms/component/image-upload.jsx");
/* harmony import */ var _component_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/input-with-counter.jsx */ "./src/forms/component/input-with-counter.jsx");
/* harmony import */ var _component_postcode_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/postcode.jsx */ "./src/forms/component/postcode.jsx");
/* harmony import */ var _component_radios_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/radios.jsx */ "./src/forms/component/radios.jsx");
/* harmony import */ var _component_select_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/select.jsx */ "./src/forms/component/select.jsx");
/* harmony import */ var _component_textinput_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/textinput.jsx */ "./src/forms/component/textinput.jsx");
/* harmony import */ var _component_textarea_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/textarea.jsx */ "./src/forms/component/textarea.jsx");
/* harmony import */ var _component_slider_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/slider.jsx */ "./src/forms/component/slider.jsx");
// polyfills
//import 'core-js/es/map';
//import 'core-js/es/set';
 // react


 // import css to make sure it is generated in the result

 // the module












/* harmony default export */ __webpack_exports__["default"] = ({
  Form: _component_form_jsx__WEBPACK_IMPORTED_MODULE_4__["default"],
  FormField: _component_form_field_jsx__WEBPACK_IMPORTED_MODULE_5__["default"],
  Hidden: _component_hidden_jsx__WEBPACK_IMPORTED_MODULE_6__["default"],
  ImageUpload: _component_image_upload_jsx__WEBPACK_IMPORTED_MODULE_7__["default"],
  InputWithCounter: _component_input_with_counter_jsx__WEBPACK_IMPORTED_MODULE_8__["default"],
  Postcode: _component_postcode_jsx__WEBPACK_IMPORTED_MODULE_9__["default"],
  Radios: _component_radios_jsx__WEBPACK_IMPORTED_MODULE_10__["default"],
  Select: _component_select_jsx__WEBPACK_IMPORTED_MODULE_11__["default"],
  Text: _component_textinput_jsx__WEBPACK_IMPORTED_MODULE_12__["default"],
  Textarea: _component_textarea_jsx__WEBPACK_IMPORTED_MODULE_13__["default"],
  Slider: _component_slider_jsx__WEBPACK_IMPORTED_MODULE_14__["default"]
}); // render the base element
// function renderElement( elem, config ) {
//   let attributes = elem.attributes;
//   ReactDOM.render( <OpenStadComponentReactions attributes={attributes} config={config}/>, elem)
// }
// export {renderElement}

/***/ }),

/***/ "./src/libs/css/default.less":
/*!***********************************!*\
  !*** ./src/libs/css/default.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/libs/index.jsx":
/*!****************************!*\
  !*** ./src/libs/index.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/default.less */ "./src/libs/css/default.less");
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_default_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_api_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/api/index.js */ "./src/libs/lib/api/index.js");
/* harmony import */ var _lib_user_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/user/index.js */ "./src/libs/lib/user/index.js");
/* harmony import */ var _lib_ideas_sort_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/ideas-sort.js */ "./src/libs/lib/ideas-sort.js");
/* harmony import */ var _lib_local_storage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/local-storage.js */ "./src/libs/lib/local-storage.js");
/* harmony import */ var _lib_session_storage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/session-storage.js */ "./src/libs/lib/session-storage.js");
/* harmony import */ var _lib_react_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/react-template.js */ "./src/libs/lib/react-template.js");
// polyfills
//import 'core-js/es/map';
//import 'core-js/es/set';
 // react


 // import css to make sure it is generated in the result

 // the module







var OpenStadComponentLibs = {
  api: _lib_api_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  user: _lib_user_index_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  ideasSort: _lib_ideas_sort_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  localStorage: _lib_local_storage_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  sessionStorage: _lib_session_storage_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  reactTemplate: _lib_react_template_js__WEBPACK_IMPORTED_MODULE_9__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (OpenStadComponentLibs);

/***/ }),

/***/ "./src/libs/lib/api/get-headers.js":
/*!*****************************************!*\
  !*** ./src/libs/lib/api/get-headers.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_get_jwt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/get-jwt.js */ "./src/libs/lib/user/get-jwt.js");


/* harmony default export */ __webpack_exports__["default"] = (function (config) {
  var headers = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive({
    'Content-type': 'application/json'
  }, config && config.api && config.api.headers);
  var jwt = Object(_user_get_jwt_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  if (jwt) {
    headers = merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive({
      "X-Authorization": "Bearer " + jwt
    }, headers);
  }

  return headers;
});

/***/ }),

/***/ "./src/libs/lib/api/index.js":
/*!***********************************!*\
  !*** ./src/libs/lib/api/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_headers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-headers.js */ "./src/libs/lib/api/get-headers.js");

var OpenStadComponentAPI = {
  getHeaders: _get_headers_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (OpenStadComponentAPI);

/***/ }),

/***/ "./src/libs/lib/ideas-sort.js":
/*!************************************!*\
  !*** ./src/libs/lib/ideas-sort.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ideasSort; });


function ideasSort(_ref) {
  var ideas = _ref.ideas,
      sortOrder = _ref.sortOrder,
      center = _ref.center;
  sortOrder = sortOrder || 'random';

  switch (sortOrder) {
    case 'title':
      ideas = ideas.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }

        if (b.title.toLowerCase() < a.title.toLowerCase()) {
          return 1;
        }

        return 0;
      });
      break;

    case 'ranking,asc':
      ideas = ideas.sort(function (a, b) {
        return a.ranking - b.ranking;
      });
      break;

    case 'likes,asc':
      ideas = ideas.sort(function (a, b) {
        return a.yes - b.yes;
      });
      break;

    case 'likes,desc':
      ideas = ideas.sort(function (a, b) {
        return b.yes - a.yes;
      });
      break;

    case 'createdtime,desc':
      ideas = ideas.sort(function (a, b) {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
      break;

    case 'createdtime,asc':
      ideas = ideas.sort(function (a, b) {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      });
      break;

    case 'distance':
      center = center || {
        lat: 52.37104644463586,
        lng: 900402911007405
      };

      if (center.coordinates) {
        center.lat = center.coordinates[0];
        center.lng = center.coordinates[1];
      }

      ideas = ideas.map(function (idea) {
        idea._distance = Math.sqrt(Math.pow(idea.location.coordinates[0] - center.lat, 2) + Math.pow(idea.location.coordinates[1] - center.lng, 2));
        return idea;
      }).sort(function (a, b) {
        return a._distance - b._distance;
      });
      break;

    case 'args,desc':
      ideas = ideas.sort(function (a, b) {
        return b.argCount - a.argCount;
      });
      break;

    case 'args,asc':
      ideas = ideas.sort(function (a, b) {
        return a.argCount - b.argCount;
      });
      break;

    case 'random':
    default:
      ideas = ideas.sort(function (a, b) {
        return Math.random() - 0.5;
      });
      break;
  }

  return ideas;
}

/***/ }),

/***/ "./src/libs/lib/local-storage.js":
/*!***************************************!*\
  !*** ./src/libs/lib/local-storage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var oscLocalStorage = {};

oscLocalStorage.get = function (name) {
  var value = localStorage.getItem(name);

  try {
    value = JSON.parse(value);
  } catch (err) {}

  return value;
};

oscLocalStorage.set = function (name, value) {
  if (typeof name != 'string') return;
  if (typeof value == 'undefined') value = "";

  if (_typeof(value) == 'object') {
    try {
      value = JSON.stringify(value);
    } catch (err) {}
  }

  ;
  localStorage.setItem(name, value);
};

oscLocalStorage.remove = function (name) {
  localStorage.removeItem(name);
};

/* harmony default export */ __webpack_exports__["default"] = (oscLocalStorage);

/***/ }),

/***/ "./src/libs/lib/react-template.js":
/*!****************************************!*\
  !*** ./src/libs/lib/react-template.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
 // TODO: dit werkt alleen als het er 1 is

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$html = _ref.html,
      html = _ref$html === void 0 ? '' : _ref$html;
  var args = arguments[0];
  delete args.html;
  var matches = 0;
  Object.keys(args).forEach(function (key) {
    var regEx = new RegExp("^((?:.|\n|\r)*)\\{".concat(key, "\\}((?:.|\n|\r)*)$"), 'g');
    var match = regEx.exec(html);

    if (match) {
      matches++;
      html = /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: match[1]
        }
      }), args[key], /*#__PURE__*/React.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: match[2]
        }
      }));
    }
  });
  if (matches == 0) html = /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
  return html;
});

/***/ }),

/***/ "./src/libs/lib/session-storage.js":
/*!*****************************************!*\
  !*** ./src/libs/lib/session-storage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var oscSessionStorage = {};

oscSessionStorage.get = function (name) {
  var value = sessionStorage.getItem(name);

  try {
    value = JSON.parse(value);
  } catch (err) {}

  return value;
};

oscSessionStorage.set = function (name, value) {
  if (typeof name != 'string') return;
  if (typeof value == 'undefined') value = "";

  if (_typeof(value) == 'object') {
    try {
      value = JSON.stringify(value);
    } catch (err) {}
  }

  ;
  sessionStorage.setItem(name, value);
};

oscSessionStorage.remove = function (name) {
  sessionStorage.removeItem(name);
};

/* harmony default export */ __webpack_exports__["default"] = (oscSessionStorage);

/***/ }),

/***/ "./src/libs/lib/user/get-jwt.js":
/*!**************************************!*\
  !*** ./src/libs/lib/user/get-jwt.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _session_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../session-storage.js */ "./src/libs/lib/session-storage.js");

/* harmony default export */ __webpack_exports__["default"] = (function (config) {
  var jwt; // jwt in url

  var match = window.location.search.match(/(?:\?|&)jwt=([A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*)(?:&|$)/);

  if (match) {
    jwt = match[1];
    _session_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].set('osc-jwt', jwt);
    var search = document.location.search.replace('jwt=' + jwt, '');
    if (search == '?') search = '';
    document.location.search = search;
  }

  jwt = _session_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('osc-jwt');

  if (config && config.jwt) {
    jwt = config.jwt;
    _session_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].set('osc-jwt', jwt);
  }

  return jwt;
});

/***/ }),

/***/ "./src/libs/lib/user/get-user.js":
/*!***************************************!*\
  !*** ./src/libs/lib/user/get-user.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _session_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../session-storage.js */ "./src/libs/lib/session-storage.js");
/* harmony import */ var _get_jwt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-jwt.js */ "./src/libs/lib/user/get-jwt.js");


/* harmony default export */ __webpack_exports__["default"] = (function (config, next) {
  next = next || function (user) {
    console.log('getUser: next not defined.');
    console.log(user);
  };

  var user = config.user || _session_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('osc-user');

  if (user) {
    // return user
    return next(null, user);
  } // jwt


  var jwt = Object(_get_jwt_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config);

  if (!jwt) {
    // return no user
    return next(null, {});
  } // fetch user


  var url = "".concat(config.api.url, "/oauth/site/").concat(config.siteId, "/me");
  var headers = {
    'X-Authorization': "Bearer ".concat(jwt),
    'Content-Type': 'application/json'
  };
  fetch(url, {
    headers: headers
  }).then(function (response) {
    if (!response.ok) throw new Error('Error on fetch');
    return response.json();
  }).then(function (json) {
    _session_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].set('osc-user', json);
    next(null, json);
  })["catch"](function (err) {
    next(err);
  });
});

/***/ }),

/***/ "./src/libs/lib/user/has-role.js":
/*!***************************************!*\
  !*** ./src/libs/lib/user/has-role.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _session_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../session-storage.js */ "./src/libs/lib/session-storage.js");
/* harmony import */ var _get_jwt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-jwt.js */ "./src/libs/lib/user/get-jwt.js");


var roles = {
  admin: ['admin', 'moderator', 'editor', 'member', 'anonymous', 'all'],
  moderator: ['moderator', 'editor', 'member', 'anonymous', 'all'],
  editor: ['editor', 'member', 'anonymous', 'all'],
  member: ['member', 'anonymous', 'all'],
  anonymous: ['anonymous', 'all'],
  all: ['all'],
  // special
  owner: null // special

};
/* harmony default export */ __webpack_exports__["default"] = (function (user, requiredRole) {
  var userRole = user.role;
  if (!Object.keys(roles).includes(userRole)) userRole = 'all';
  return roles[userRole].includes(requiredRole);
});

/***/ }),

/***/ "./src/libs/lib/user/index.js":
/*!************************************!*\
  !*** ./src/libs/lib/user/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-user.js */ "./src/libs/lib/user/get-user.js");
/* harmony import */ var _get_jwt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-jwt.js */ "./src/libs/lib/user/get-jwt.js");
/* harmony import */ var _logout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout.js */ "./src/libs/lib/user/logout.js");
/* harmony import */ var _has_role_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./has-role.js */ "./src/libs/lib/user/has-role.js");




var OpenStadComponentUser = {
  getUser: _get_user_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  getJWT: _get_jwt_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  logout: _logout_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  hasRole: _has_role_js__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (OpenStadComponentUser);

/***/ }),

/***/ "./src/libs/lib/user/logout.js":
/*!*************************************!*\
  !*** ./src/libs/lib/user/logout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _session_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../session-storage.js */ "./src/libs/lib/session-storage.js");
/* harmony import */ var _get_jwt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-jwt.js */ "./src/libs/lib/user/get-jwt.js");


/* harmony default export */ __webpack_exports__["default"] = (function (config, next) {
  next = next || function (user) {
    console.log('logout: next not defined.');
  };

  var user = config.user || _session_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('osc-user');

  if (user) {
    // return user
    return next(null, user);
  } // jwt


  var jwt = Object(_get_jwt_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config);

  if (!jwt) {
    // return no user
    return next(null, {});
  } // fetch user


  var url = config.api.url + '/oauth/site/' + config.siteId + '/me';
  var headers = {
    'X-Authorization': 'Bearer ' + jwt,
    'Content-Type': 'application/json'
  };
  fetch(url, {
    headers: headers
  }).then(function (response) {
    if (!response.ok) throw new Error('Error on fetch');
    return response.json();
  }).then(function (json) {
    _session_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].set('osc-user', json);
    next(null, json);
  })["catch"](function (err) {
    next(err);
  });
});

/***/ }),

/***/ "./src/poll/component/poll-form.jsx":
/*!******************************************!*\
  !*** ./src/poll/component/poll-form.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentPollForm; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forms/index.jsx */ "./src/forms/index.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var OpenStadComponentPollForm = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentPollForm, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentPollForm);

  function OpenStadComponentPollForm(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentPollForm);

    _this = _super.call(this, props, {
      user: {},
      questionMinLength: 30,
      questionMaxLength: 500,
      titleMinLength: 30,
      titleMaxLength: 500,
      descriptionMinLength: 30,
      descriptionMaxLength: 500,
      allowChoiceTitles: true
    });
    _this.state = {
      user: props.user,
      pollId: props.pollId,
      poll: props.poll,
      isBusy: false
    };
    return _this;
  }

  _createClass(OpenStadComponentPollForm, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this; // user

      if (!(self.state.user && self.state.user.role)) {
        _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].user.getUser({
          user: self.config.user,
          jwt: self.config.jwt,
          siteId: self.config.siteId,
          api: self.config.api
        }, function (err, user) {
          self.setState({
            user: user
          }, function () {
            if (!self.state.poll) self.fetchData();
          });
        });
      } else {
        if (!self.state.poll) self.fetchData();
      }
    }
  }, {
    key: "fetchData",
    value: function fetchData(next) {
      var self = this;

      if (!self.state.pollId) {
        return self.setState({
          poll: {
            question: '',
            choices: {
              "1": {},
              "2": {}
            }
          }
        });
      }

      var url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea/").concat(self.config.ideaId, "/poll/").concat(self.config.pollId, "?withUser=1&withVotes=1");
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config);
      fetch(url, {
        headers: headers
      }).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        throw response.text();
      }).then(function (json) {
        var state = _objectSpread({}, self.state);

        state.poll = json;
        self.setState(state, function () {
          if (next) return next();
        });
      })["catch"](function (error) {
        console.log(error);
        error.then(function (messages) {
          return console.log(messages);
        });
      });
    }
  }, {
    key: "validatedResult",
    value: function validatedResult() {
      var self = this;
      var poll = self.state.poll;
      var questionInput = self['question-input'];
      var isValid = questionInput.validate();
      var result = {
        question: questionInput.state.value,
        choices: {}
      };
      Object.keys(poll.choices).forEach(function (key) {
        var titleInput = self["title-input-".concat(key)];
        var descriptionInput = self["description-input-".concat(key)];
        if (!(titleInput && titleInput.state.value) && !descriptionInput.state.value) return;
        result.choices[key] = {};

        if (self.config.allowChoiceTitles && titleInput.state.value) {
          result.choices[key].title = titleInput.state.value;
          if (!titleInput.validate()) isValid = false;
        }

        if (descriptionInput.state.value) {
          result.choices[key].description = descriptionInput.state.value;
          if (!descriptionInput.validate()) isValid = false;
        }
      });
      if (!isValid) return null;
      if (Object.keys(result.choices).length < 2) return null;
      return result;
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(data) {
      var self = this;

      var poll = _objectSpread({}, self.state.poll);

      if (data.choice) {
        poll.choices[data.choice.id] = {
          title: self.config.allowChoiceTitles && data.choice.title,
          description: data.choice.description
        };
      }

      if (data.question) {
        poll.question = data.question;
      }

      this.setState({
        poll: poll
      }, function () {});
    }
  }, {
    key: "addChoice",
    value: function addChoice() {
      var self = this;

      var poll = _objectSpread({}, self.state.poll);

      var keys = Object.keys(poll.choices).sort();
      var key = parseInt(keys[keys.length - 1]) + 1;
      poll.choices[key] = {};
      self.setState({
        poll: poll
      });
    }
  }, {
    key: "canSubmit",
    value: function canSubmit() {
      if (this.state.poll && this.state.poll.can) {
        return this.state.poll.can.edit;
      } else {
        var requiredUserRole = this.config.requiredUserRole;
        var userRole = 'moderator' || false; // todo: owner; dus dit moet anders

        return requiredUserRole == 'anonymous' && userRole || requiredUserRole == 'member' && (userRole == 'member' || userRole == 'editor' || userRole == 'moderator' || userRole == 'admin') || requiredUserRole == 'editor' && (userRole == 'editor' || userRole == 'moderator' || userRole == 'admin') || requiredUserRole == 'moderator' && (userRole == 'moderator' || userRole == 'admin') || requiredUserRole == 'admin' && userRole == 'admin';
      }
    }
  }, {
    key: "submitForm",
    value: function submitForm() {
      var self = this;
      self.setState({
        isBusy: true
      }, function () {
        var validatedResult = self.validatedResult();

        if (!validatedResult) {
          self.setState({
            isBusy: false
          });
          return;
        }

        if (!self.canSubmit()) return alert('Je bent niet ingelogd');
        var isNew = true;
        var url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea/").concat(self.config.ideaId, "/poll");
        var method = 'POST';

        if (self.state.poll && self.state.poll.id) {
          url += "/".concat(self.state.poll.id);
          method = 'PUT';
          isNew = false;
        }

        var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config);
        var body = validatedResult;
        fetch(url, {
          method: method,
          headers: headers,
          body: JSON.stringify(body)
        }).then(function (response) {
          if (response.ok) {
            return response.json();
          }

          throw response.text();
        }).then(function (json) {
          var event = new CustomEvent('osc-new-poll-stored', {
            detail: json
          });
          if (!isNew) event = new CustomEvent('osc-poll-edited', {
            detail: json
          });
          document.dispatchEvent(event);

          if (typeof self.config.onFinished == 'function') {
            self.config.onFinished(validatedResult);
          }
        })["catch"](function (error) {
          console.log(error);
          error.then(function (messages) {
            alert(messages);
            return console.log(messages);
          });
          self.setState({
            isBusy: false
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var self = this;
      var poll = self.state.poll || {};
      var formIntro = null;

      if (self.config.formIntro) {
        formIntro = /*#__PURE__*/React.createElement("div", {
          className: "osc-intro"
        }, self.config.formIntro);
      }

      var submitButtonHTML = null;

      if (self.canSubmit()) {
        submitButtonHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-align-right-container"
        }, /*#__PURE__*/React.createElement("button", {
          className: "osc-button-blue",
          onClick: function onClick() {
            if (self.config.onFinished) self.config.onFinished();
          }
        }, "Terug"), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick(e) {
            if (!self.state.isBusy) self.submitForm();
          },
          className: "osc-button-blue osc-margin-left".concat(self.state.isBusy ? ' osc-disabled' : '')
        }, "Verzenden"));
      } else {
        submitButtonHTML = /*#__PURE__*/React.createElement("div", {
          className: "osc-align-right-container"
        }, /*#__PURE__*/React.createElement("button", {
          className: "osc-button-blue",
          onClick: function onClick() {
            if (self.config.onFinished) self.config.onFinished();
          }
        }, "Terug"), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].localStorage.set('osc-reactions-login-pending', true);
            document.location.href = self.config.loginUrl;
          },
          className: "osc-button-blue osc-not-logged-in-button osc-margin-left"
        }, "Inloggen"));
      }

      return /*#__PURE__*/React.createElement("div", {
        id: self.divId,
        className: "osc-form",
        ref: function ref(el) {
          return self.instance = el;
        }
      }, formIntro, /*#__PURE__*/React.createElement("h4", null, "Vraag"), /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].InputWithCounter, {
        config: {
          inputType: 'text',
          minLength: self.config.questionMinLength,
          maxLength: self.config.questionMaxLength,
          placeholder: 'Vraag'
        },
        value: poll.question,
        onChange: function onChange(data) {
          return self.handleOnChange({
            question: data.value
          });
        },
        ref: function ref(el) {
          return self["question-input"] = el;
        }
      }), /*#__PURE__*/React.createElement("h4", null, "Keuzemogelijkheden"), /*#__PURE__*/React.createElement("ol", {
        className: "osc-poll-form-choices"
      }, poll && poll.choices && Object.keys(poll.choices).sort().map(function (key) {
        var choice = poll.choices[key];
        var titleInputHTML = null;
        if (self.config.allowChoiceTitles) titleInputHTML = /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].InputWithCounter, {
          config: {
            inputType: 'text',
            minLength: self.config.titleMinLength,
            maxLength: self.config.titleMaxLength,
            placeholder: 'Titel'
          },
          value: choice.title,
          onChange: function onChange(data) {
            return self.handleOnChange({
              choice: {
                id: key,
                title: data.value
              }
            });
          },
          ref: function ref(el) {
            return self["title-input-".concat(key)] = el;
          }
        });
        return /*#__PURE__*/React.createElement("li", {
          className: "osc-poll-form-choice",
          key: "osc-key-".concat(key)
        }, titleInputHTML, /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].InputWithCounter, {
          config: {
            inputType: 'text',
            minLength: self.config.descriptionMinLength,
            maxLength: self.config.descriptionMaxLength,
            placeholder: 'Beschrijving'
          },
          value: choice.description,
          onChange: function onChange(data) {
            return self.handleOnChange({
              choice: {
                id: key,
                description: data.value
              }
            });
          },
          ref: function ref(el) {
            return self["description-input-".concat(key)] = el;
          }
        }));
      })), /*#__PURE__*/React.createElement("a", {
        className: "osc-add-choice-button",
        onClick: function onClick(e) {
          return _this2.addChoice();
        }
      }, "Nog een keuzemogelijkheid toevoegen"), submitButtonHTML);
    }
  }]);

  return OpenStadComponentPollForm;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/poll/component/poll.jsx":
/*!*************************************!*\
  !*** ./src/poll/component/poll.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenStadComponentPoll; });
/* harmony import */ var _component_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/index.jsx */ "./src/component/index.jsx");
/* harmony import */ var _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/index.jsx */ "./src/libs/index.jsx");
/* harmony import */ var _forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forms/index.jsx */ "./src/forms/index.jsx");
/* harmony import */ var _poll_form_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poll-form.jsx */ "./src/poll/component/poll-form.jsx");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var OpenStadComponentPoll = /*#__PURE__*/function (_OpenStadComponent) {
  _inherits(OpenStadComponentPoll, _OpenStadComponent);

  var _super = _createSuper(OpenStadComponentPoll);

  function OpenStadComponentPoll(props) {
    var _this;

    _classCallCheck(this, OpenStadComponentPoll);

    _this = _super.call(this, props, {
      siteId: null,
      ideaId: null,
      title: null,
      // hoort niet hier
      titleMinLength: 30,
      titleMaxLength: 500,
      descriptionMinLength: 30,
      descriptionMaxLength: 500,
      user: null,
      loginUrl: '',
      api: {
        url: null,
        headers: null
      },
      requiredUserRole: 'member',
      withPercentage: true,
      allowChoiceTitles: true,
      allowShowResultsIfNotVoted: false
    });

    var self = _assertThisInitialized(_this);

    self.config.loginUrl = self.config.loginUrl || '/oauth/login?returnTo=' + encodeURIComponent(document.location.href);
    self.hideEditForm = self.hideEditForm.bind(self);
    self.state = {
      user: self.config.user,
      poll: props.poll,
      pollId: props.poll && props.poll.id || self.config.pollId,
      selectedChoice: null,
      showResult: false,
      showQuestion: false,
      editMode: false,
      showVoteSucceeded: false
    };

    if (self.state.poll) {
      self.parseVoteCount(self.state.poll);

      if (self.state.poll.userVote) {
        self.state.selectedChoice = self.state.poll.userVote;
      }
    }

    return _this;
  }

  _createClass(OpenStadComponentPoll, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps, prevState) {
      var self = this; // user

      if (!(self.state.user && self.state.user.role)) {
        _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].user.getUser({
          user: self.config.user,
          jwt: self.config.jwt,
          siteId: self.config.siteId,
          api: self.config.api
        }, function (err, user) {
          self.setState({
            user: user
          }, function () {
            if (!self.state.poll && self.config.ideaId) self.fetchData();
          });
        });
      } else {
        if (!self.state.poll && self.config.ideaId) self.fetchData();
      }
    }
  }, {
    key: "fetchData",
    value: function fetchData(next) {
      var self = this;

      if (!self.state.pollId) {
        // no data: show new poll form
        return self.setState({
          editMode: true
        }, function () {});
      }

      var url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea/").concat(self.config.ideaId, "/poll/").concat(self.state.pollId, "?withUser=1&withUserVote=1&withVoteCount=1&withVotes=1");
      var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config);
      fetch(url, {
        headers: headers
      }).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        throw response.text();
      }).then(function (json) {
        var state = _objectSpread(_objectSpread({}, self.state), {}, {
          showResult: false,
          showQuestion: false
        });

        state.poll = json;
        state.pollId = json.id;
        self.parseVoteCount(state.poll);

        if (state.poll.userVote) {
          state.selectedChoice = state.poll.userVote;
        }

        self.setState(state, function () {
          if (next) return next();
        });
      })["catch"](function (error) {
        console.log(error);
        error.then(function (messages) {
          return console.log(messages);
        });
      });
    }
  }, {
    key: "parseVoteCount",
    value: function parseVoteCount(poll) {
      var self = this;

      if (poll.voteCount) {
        Object.keys(poll.choices).sort().forEach(function (key) {
          var choice = poll.choices[key];
          choice.votesAbs = poll.voteCount[key];
          choice.votesPrc = parseInt(100 * (poll.voteCount[key] / poll.voteCount.total));
          choice.votesPrc = choice.votesPrc || 0;
        });
      }
    }
  }, {
    key: "showEditForm",
    value: function showEditForm() {
      this.setState({
        editMode: true
      });
    }
  }, {
    key: "hideEditForm",
    value: function hideEditForm() {
      this.setState({
        editMode: false
      }, function () {
        this.fetchData();
      });
    }
  }, {
    key: "setShowResult",
    value: function setShowResult() {
      this.setState({
        showResult: true
      });
    }
  }, {
    key: "setShowQuestion",
    value: function setShowQuestion() {
      this.setState({
        showQuestion: true
      });
    }
  }, {
    key: "selectChoice",
    value: function selectChoice(data) {
      this.setState({
        selectedChoice: data.choice
      });
    }
  }, {
    key: "onReactionEdited",
    value: function onReactionEdited(reaction) {
      this.fetchData();
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return !!this.state.selectedChoice;
    }
  }, {
    key: "canSubmit",
    value: function canSubmit() {
      var requiredUserRole = this.config.requiredUserRole;
      var userRole = this.state.user && this.state.user.role; // todo: nieuwe rollen structuur

      return requiredUserRole == 'anonymous' && userRole || requiredUserRole == 'member' && (userRole == 'member' || userRole == 'admin') || requiredUserRole == 'admin' && userRole == 'admin';
    }
  }, {
    key: "submitVote",
    value: function submitVote() {
      var self = this;
      self.setState({
        isBusy: true
      }, function () {
        if (!self.isValid()) {
          self.setState({
            isBusy: false,
            isValid: false
          });
          return;
        }

        if (!self.canSubmit()) return alert('Je bent niet ingelogd');
        var url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea/").concat(self.config.ideaId, "/poll/").concat(self.state.poll.id, "/vote");
        var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config);
        var method = 'POST';
        var body = {
          choice: self.state.selectedChoice
        };
        fetch(url, {
          method: method,
          headers: headers,
          body: JSON.stringify(body)
        }).then(function (response) {
          if (response.ok) {
            return response.json();
          }

          throw response.text();
        }).then(function (json) {
          self.fetchData(function () {
            self.setState({
              isBusy: false,
              showVoteSucceeded: true
            }, function () {
              var event = new CustomEvent('osc-poll-voted', {
                detail: json
              });
              document.dispatchEvent(event);
            });
          });

          if (typeof self.config.onSubmit == 'function') {
            self.config.onSubmit({
              description: self.state.description
            });
          }
        })["catch"](function (error) {
          error.then(function (messages) {
            alert(messages);
            return console.log(messages);
          });
          self.setState({
            isBusy: false,
            isValid: false
          });
        });
      });
    }
  }, {
    key: "deletePoll",
    value: function deletePoll() {
      var self = this;
      self.setState({
        isBusy: true
      }, function () {
        var poll = self.state.poll;
        if (!(poll && poll.can && poll.can["delete"])) return alert('U kunt deze poll niet verwijderen');
        if (!(poll && poll.id)) return alert('U kunt deze poll niet verwijderen');
        var url = "".concat(self.config.api && self.config.api.url, "/api/site/").concat(self.config.siteId, "/idea/").concat(self.config.ideaId, "/poll/").concat(self.state.poll.id);
        var method = 'DELETE';
        var headers = _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].api.getHeaders(self.config);
        fetch(url, {
          method: method,
          headers: headers
        }).then(function (response) {
          if (response.ok) {
            return response.json();
          }

          throw response.text();
        }).then(function (json) {
          var event = new CustomEvent('osc-poll-deleted', {
            detail: json
          });
          document.dispatchEvent(event);
        })["catch"](function (error) {
          console.log(error);
          error.then(function (messages) {
            alert(messages);
            return console.log(messages);
          });
          self.setState({
            isBusy: false
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var self = this;
      var poll = self.state.poll || {};

      if (self.state.editMode) {
        return /*#__PURE__*/React.createElement("div", {
          id: this.id,
          className: self.props.className || 'osc-poll',
          ref: function ref(el) {
            _this2.instance = el;
          }
        }, /*#__PURE__*/React.createElement(_poll_form_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
          config: _objectSpread(_objectSpread({}, self.config), {}, {
            onFinished: self.hideEditForm
          }),
          pollId: self.state.poll && self.state.poll.id,
          poll: self.state.poll,
          user: self.state.user
        }));
      } else {
        var questionHTML = null;

        if (poll && poll.choices && !poll.userVote || self.state.showQuestion) {
          var config = {
            name: "pollChoice",
            choices: []
          };
          Object.keys(poll.choices).sort().map(function (key) {
            var choiceHTML = self.config.allowChoiceTitles && poll.choices[key].title ? "<h4>".concat(poll.choices[key].title, "</h4>") : '';
            choiceHTML += poll.choices[key].description || '';
            config.choices.push({
              dangerousDescription: choiceHTML,
              value: key
            });
          });
          var submitButtonHTML = null;

          if (self.canSubmit()) {
            submitButtonHTML = /*#__PURE__*/React.createElement("button", {
              onClick: function onClick(e) {
                if (!self.state.isBusy) self.submitVote();
              },
              className: "osc-button-blue".concat(!self.isValid() ? ' osc-disabled' : '')
            }, "Stemmen");
          } else {
            submitButtonHTML = /*#__PURE__*/React.createElement("button", {
              onClick: function onClick() {
                _libs_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].localStorage.set('osc-poll-login-pending', true);
                document.location.href = self.config.loginUrl;
              },
              className: "osc-button-blue osc-not-logged-in-button"
            }, "Inloggen");
          }

          var showResultButtonHTML = null;
          if (self.config.allowShowResultsIfNotVoted && !(poll.userVote || self.state.showResult)) showResultButtonHTML = /*#__PURE__*/React.createElement("a", {
            className: "osc-show-result-button",
            onClick: function onClick(e) {
              return _this2.setShowResult();
            }
          }, "Resultaat bekijken");
          questionHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-poll-question osc-form"
          }, /*#__PURE__*/React.createElement(_forms_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"].Radios, {
            config: config,
            value: self.state.selectedChoice,
            onChange: function onChange(data) {
              return self.selectChoice({
                choice: data.value
              });
            },
            ref: function ref(el) {
              return self.description = el;
            }
          }), /*#__PURE__*/React.createElement("div", {
            className: "osc-poll-question-buttons"
          }, submitButtonHTML, showResultButtonHTML));
        }

        var resultHTML = null;

        if (poll && (poll.userVote || self.state.showResult)) {
          var showQuestionButtonHTML = null;
          if (!self.state.showQuestion && !(poll && poll.choices && !poll.userVote)) showQuestionButtonHTML = /*#__PURE__*/React.createElement("a", {
            className: "osc-show-question-button",
            onClick: function onClick(e) {
              return _this2.setShowQuestion();
            }
          }, "Stem aanpassen");
          var totalVotesHTML = null;

          if (poll.voteCount && poll.voteCount.total) {
            var xx = poll.voteCount.total == 1 ? 'stem' : 'stemmen';
            totalVotesHTML = /*#__PURE__*/React.createElement("div", null, "Totaal ", poll.voteCount.total, " ", xx, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null));
          }

          resultHTML = /*#__PURE__*/React.createElement("ul", {
            className: "osc-choices"
          }, Object.keys(poll.choices).sort().map(function (key) {
            var choice = poll.choices[key];
            var titleHTML = null;
            if (self.config.allowChoiceTitles && choice.title) titleHTML = /*#__PURE__*/React.createElement("h4", null, choice.title);
            var descriptionHTML = null;
            if (choice.description) descriptionHTML = /*#__PURE__*/React.createElement("div", null, choice.description);
            var percentageHTML = null;

            if (self.config.withPercentage) {
              percentageHTML = /*#__PURE__*/React.createElement("div", {
                className: "osc-percentage"
              }, choice.votesPrc, "%");
            }

            var scoreHTML = /*#__PURE__*/React.createElement("div", {
              className: "osc-choice-default"
            }, titleHTML, descriptionHTML, /*#__PURE__*/React.createElement("div", {
              className: "osc-choice-bar".concat(self.config.withPercentage ? ' osc-with-percentage' : '')
            }, /*#__PURE__*/React.createElement("div", {
              className: "osc-choice-bar-mask"
            }), /*#__PURE__*/React.createElement("div", {
              className: "osc-choice-bar-progress",
              style: {
                width: (choice.votesPrc || 0) + '%'
              }
            })), percentageHTML);
            return /*#__PURE__*/React.createElement("li", {
              className: "osc-choice",
              key: "osc-key-".concat(key)
            }, scoreHTML);
          }), totalVotesHTML, showQuestionButtonHTML);
        }

        var editButtonsHTML = null;

        if (self.state.poll && self.state.poll.can && self.state.poll.can.edit) {
          editButtonsHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-editbuttons"
          }, /*#__PURE__*/React.createElement("button", {
            className: "osc-editbutton osc-edit",
            onClick: function onClick(event) {
              return self.showEditForm();
            }
          }, "Bewerk poll"), /*#__PURE__*/React.createElement("button", {
            className: "osc-editbutton osc-delete",
            onClick: function onClick(event) {
              if (confirm('Weet u het zeker')) self.deletePoll();
            }
          }, "Verwijder poll"));
        }

        var voteSucceededHTML = null;

        if (self.state.showVoteSucceeded) {
          voteSucceededHTML = /*#__PURE__*/React.createElement("div", {
            className: "osc-vote-succeeded"
          }, "Uw stem is opgeslagen");
        }

        return /*#__PURE__*/React.createElement("div", {
          id: this.id,
          className: self.props.className || 'osc-poll',
          ref: function ref(el) {
            _this2.instance = el;
          }
        }, editButtonsHTML, voteSucceededHTML, /*#__PURE__*/React.createElement("h4", null, poll.question), questionHTML, resultHTML, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null));
      }
    }
  }]);

  return OpenStadComponentPoll;
}(_component_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/poll/css/default.less":
/*!***********************************!*\
  !*** ./src/poll/css/default.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/poll/index.jsx":
/*!****************************!*\
  !*** ./src/poll/index.jsx ***!
  \****************************/
/*! exports provided: default, Poll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/default.less */ "./src/poll/css/default.less");
/* harmony import */ var _css_default_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_default_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_poll_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/poll.jsx */ "./src/poll/component/poll.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _component_poll_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Poll", function() { return _component_poll_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]; });

// polyfills
 // react


 // import css to make sure it is generated in the result

 // the module

 // render elements

_component_poll_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].renderElement = function renderElement(elem, config) {
  var attributes = elem.attributes;
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_poll_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes,
    config: config
  }), elem);
};



/***/ }),

/***/ 0:
/*!***********************!*\
  !*** vertx (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=poll.js.map