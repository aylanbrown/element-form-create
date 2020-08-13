(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(3);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.form-create.form-full-width .el-select,\n.form-create.form-full-width .el-cascader,\n.form-create.form-full-width .el-date-editor {\n\twidth: 100%;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utils/is.js
var is = {
  type: function type(data) {
    return Object.prototype.toString.call(data).replace(/\[object (\w+)\]/, '$1');
  },
  fit: function fit(data, type) {
    var str = is.type(data).toLowerCase();

    if (is.array(type)) {
      type = type.map(function (i) {
        return i.toLowerCase();
      });
      return type.indexOf(str) > -1;
    }

    return str === type.toLowerCase();
  },
  same: function same(data, copy) {
    return is.type(data) === is.type(copy);
  },
  vNode: function vNode(data) {
    return is.fit(data, 'object') && is.fit(data.tag, 'string');
  },
  valid: function valid(data) {
    return data !== '' || !isNaN(data) || data !== null || data !== undefined;
  },
  string: function string(data) {
    return Object.prototype.toString.call(data) === '[object String]';
  },
  number: function number(data) {
    return Object.prototype.toString.call(data) === '[object Number]' && isFinite(data);
  },
  boolean: function boolean(data) {
    return Object.prototype.toString.call(data) === '[object Boolean]';
  },
  null: function _null(data) {
    return Object.prototype.toString.call(data) === '[object Null]';
  },
  undefined: function undefined(data) {
    return Object.prototype.toString.call(data) === '[object Undefined]';
  },
  symbol: function symbol(data) {
    return Object.prototype.toString.call(data) === '[object Symbol]';
  },
  array: function array(data) {
    return Object.prototype.toString.call(data) === '[object Array]';
  },
  object: function object(data) {
    return Object.prototype.toString.call(data) === '[object Object]';
  },
  function: function _function(data) {
    return Object.prototype.toString.call(data) === '[object Function]';
  },
  date: function date(data) {
    return Object.prototype.toString.call(data) === '[object Date]';
  }
};
/* harmony default export */ var utils_is = (is);
// CONCATENATED MODULE: ./src/utils/copy.js


function deepCopy(data) {
  var freeze = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!utils_is.object(data) && !utils_is.array(data)) {
    return data;
  }

  var copy = utils_is.array(data) ? [] : {};
  Object.keys(data).forEach(function (key) {
    return copy[key] = deepCopy(data[key]);
  });
  return freeze ? Object.freeze(copy) : copy;
}

/* harmony default export */ var utils_copy = (deepCopy);
// CONCATENATED MODULE: ./src/form/form-button.js



function submitButton(h, self) {
  var mode = self.mode,
      node = (self.$ELEMENTJSONFORM || {}).button || 'el-button',
      options = {
    attrs: {
      type: 'primary',
      loading: self.loading,
      disabled: self.disabled
    },
    on: {
      click: function click() {
        self.$refs.form.validate(function (valid) {
          if (valid) {
            var form = utils_copy(self.form);
            self.$emit('submit', form);
          }
        });
      }
    }
  };

  if (self.showIcon === true) {
    options.attrs.icon = mode === 'search' ? self.searchIcon : self.submitIcon;
  }

  return h(node, options, mode === 'search' ? self.searchText : self.submitText);
}

function resetButton(h, self) {
  var node = (self.$ELEMENTJSONFORM || {}).button || 'el-button',
      options = {
    attrs: {
      type: 'default',
      icon: self.resetIcon,
      loading: self.loading,
      disabled: self.disabled
    },
    on: {
      click: function click() {
        self.$refs.form.resetFields();
        self.$emit('reset');
      }
    }
  };

  if (self.showIcon === true) {
    options.attrs.icon = self.resetIcon;
  }

  return h(node, options, self.resetText);
}

function renderButton(h, self, children) {
  var list = [],
      button = self.$slots.button || [],
      node = (self.$ELEMENTJSONFORM || {}).formItem || 'el-form-item'; // 确定按钮

  list.push(submitButton(h, self)); // 是否渲染重置按钮

  if (self.showResetButton === true) {
    list.push(resetButton(h, self));
  } // 插入名为button的具名插槽


  if (utils_is.array(button) && button.length > 0) {
    list = list.concat(button);
  }

  children.push(h(node, {}, list));
}

/* harmony default export */ var form_button = (renderButton);
// CONCATENATED MODULE: ./src/utils/factory.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function createFactory(self) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var valueOrFunction = arguments.length > 2 ? arguments[2] : undefined;
  var initialValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var dataType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'null';
  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

  if (utils_is.function(valueOrFunction)) {
    return valueOrFunction(_objectSpread({
      h: self.$createElement,
      form: utils_copy(self.form, true),
      name: name
    }, options));
  }

  if (dataType !== 'any' && utils_is.fit(valueOrFunction, dataType)) {
    return valueOrFunction;
  }

  return valueOrFunction || initialValue;
}

/* harmony default export */ var factory = (createFactory);
// CONCATENATED MODULE: ./src/utils/config.js
var renameProps = {
  class: 'staticClass',
  scope: 'scopeSlots'
};
var showPlaceholderNode = ['el-input', 'el-autocomplete', 'el-select', 'el-cascader', 'el-time-select', 'el-time-picker', 'el-date-picker'];
// CONCATENATED MODULE: ./src/form/form-node.js
function form_node_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function form_node_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { form_node_ownKeys(Object(source), true).forEach(function (key) { form_node_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { form_node_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function form_node_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function showPlaceholder(self, attrs, item) {
  var label = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var trigger = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'blur';
  var node = item.node || null,
      show = (self.$ELEMENTJSONFORM || {}).showDefaultPlaceholder,
      // 获取全局是否展示placeholder的配置
  list = (self.$ELEMENTJSONFORM || {}).showPlaceholderNode || showPlaceholderNode; // 展示placeholder的节点
  // 不添加placeholder的情况

  if (show === false || node === null || item.placeholder === false) {
    return;
  }
  /* 
  ** node节点有两种情况，字符串和VNode
  **
  ** 字符串: 主要体现为el-input、el-select等，但是如果是其他命名的形式无法进行匹配，比如a-input
  ** VNode: 主要是按需引入的ElementUI组件，比如Input、Tree等，需要通过组件上的name进行判断 
  **
  ** 两种情况均为存在误判的情况，可以通过props或placeholder单独设置
  */


  if (utils_is.string(node) && /^el-[a-z\-]+$/.test(node) && list.indexOf(node) > -1 || utils_is.vNode(node) && node.name && /^El[A-Za-z]+$/.test(node.name)) {
    attrs.placeholder = "\u8BF7".concat(trigger === 'blur' ? '输入' : '选择').concat(label);
  }
}

function nodeChildren(h, self, item) {
  var next = null,
      children = factory(self, item.name, item.children, [], ['string', 'number', 'boolean', 'null', 'symbol']); // 如果是数组，则进行递归操作

  if (utils_is.array(children)) {
    // 设置为子节点
    next = children.map(function (child) {
      return renderNode(h, self, child);
    });
  } else {
    // 由于Vue.js的createElement(node, options, children)对children的要求是null | array
    // 为了防止非null时出现数据叠加的情况，因此将children直接声明长度为1的数组
    next = [children];
  }

  return next;
}

function nodeOptions(self, item) {
  var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var validate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var options = {
    refInFor: true,
    attrs: {},
    on: {}
  },
      rename = form_node_objectSpread(form_node_objectSpread({}, (self.$ELEMENTJSONFORM || {}).renameProps), renameProps) // 推入顶层属性
  ;

  ['ref', 'key', 'slot', 'class', 'style', 'scope', 'directives'].forEach(function (key) {
    if (utils_is.valid(item[key])) {
      options[rename[key] || key] = item[key];
    }
  }); // name是组件与form实现双向数据绑定的要素，可以通过bind取消

  if (utils_is.string(item.name) && utils_is.valid(item.name) && item.bind !== false) {
    var value = self.form[item.name] || null; // 如form中无对应的键值，则优先检查对象中是否有value属性，如无传入null

    if (utils_is.undefined(value)) {
      self.form[item.name] = item.value || null;
    } // 为组件添加双向数据绑定的逻辑


    options.model = {
      expression: item.name,
      value: self.form[item.name],
      callback: function callback(e) {
        // 赋值
        self.form[item.name] = e; // 触发Input事件

        self.$emit('input', self.form); // 触发change事件

        self.$emit('change', {
          form: self.form,
          name: item.name,
          value: e
        }); // 更新视图

        self.$forceUpdate();
      }
    };
  } // 判断是否给组件添加placeholder，可通过showDefaultPlaceholder进行控制，仅支持ElementUI的组件


  if (label && validate) {
    showPlaceholder(self, options.attrs, item, label, (validate || {}).trigger || 'blur');
  } // 合并属性


  options.attrs = form_node_objectSpread(form_node_objectSpread({}, options.attrs), factory(self, item.name, item.props, {}, 'object')); // 重写组件的方法，使其可以提供form、name等相关属性

  if (utils_is.object(item.methods)) {
    Object.keys(item.methods).forEach(function (key) {
      // 禁止写入input事件，防止出现数据覆盖的操作
      if (key !== 'input') {
        options.on[key] = function (e) {
          return item.methods[key]({
            form: self.form,
            name: item.name || null,
            value: e
          });
        };
      }
    });
  }

  return options;
}

function renderNode(h, self, item, label, validate) {
  // 如果本身是VNode节点，直接返回
  if (utils_is.vNode(item)) return item; // 自定义渲染函数

  if (utils_is.function(item.render)) {
    // 允许自定义渲染函数更新form，但item不允许进行更改（可能导致节点重复刷新）
    return item.render({
      h: h,
      form: self.form,
      name: item.name || null,
      item: utils_copy(item, true)
    });
  } // 渲染函数


  return h(item.node || null, nodeOptions(self, item, label, validate), nodeChildren(h, self, item));
}

/* harmony default export */ var form_node = (renderNode);
// CONCATENATED MODULE: ./src/form/form-item.js
function form_item_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function form_item_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { form_item_ownKeys(Object(source), true).forEach(function (key) { form_item_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { form_item_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function form_item_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function renderRules(self) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var label = arguments.length > 2 ? arguments[2] : undefined;
  var validate = arguments.length > 3 ? arguments[3] : undefined;
  var message = arguments.length > 4 ? arguments[4] : undefined;
  var rules = [],
      trigger = validate.trigger || 'blur'; // 默认触发事件为blur，同时placeholder会根据trigger判断提示语为输入还是选择
  // async-validator通过range属性实现数值范围的验证
  // 因此当min和max同时存在时，直接合并两者

  if (utils_is.number(validate.min) && utils_is.number(validate.max)) {
    validate.range = [validate.min, validate.max];
    delete validate.min;
    delete validate.max;
  } // 遍历validate中的属性以生成对应的验证规则


  Object.keys(validate).forEach(function (key) {
    // trigger为触发时机，不存在单独的验证规则
    // 由于validator本身为函数，同时涉及到表单联动机制，需要单独配置
    if (['trigger', 'validator'].indexOf(key) === -1) {
      var _rules$push;

      rules.push((_rules$push = {
        trigger: trigger
      }, form_item_defineProperty(_rules$push, key, validate[key]), form_item_defineProperty(_rules$push, "message", message[key] || "\u8BF7".concat(trigger === 'blur' ? '输入' : '选择').concat(label)), _rules$push));
    }
  }); // 对validator的参数进行改写，使其可以额外获取到form集合

  if (utils_is.function(validate.validator)) {
    rules.push({
      trigger: trigger,
      validator: function validator(r, v, cb) {
        return validate.validator({
          form: utils_copy(self.form, true),
          name: name,
          value: v,
          callback: cb
        });
      }
    });
  }

  return rules;
}

function formItemOptions(self, item, label, validate, message) {
  var attrs = {},
      options = {
    refInFor: true
  },
      itemOptions = factory(self, name, item.itemOptions, {}, 'object'),
      rename = form_item_objectSpread(form_item_objectSpread({}, (self.$ELEMENTJSONFORM || {}).renameProps), renameProps) // 推入顶层属性
  ;

  ['ref', 'key', 'slot', 'class', 'style', 'directives'].forEach(function (key) {
    if (utils_is.valid(itemOptions[key])) {
      options[rename[key] || key] = itemOptions[key];
    }
  }); // 推入label

  if (utils_is.valid(label)) {
    attrs.label = label;
  } // 如name值存在，说明与form存在双向数据绑定，同时也是表单验证的前提


  if (utils_is.string(item.name) && utils_is.valid(item.name)) {
    attrs.prop = item.name;
    attrs.rules = renderRules(self, item.name, label, validate, message);
  } // 合并属性


  options.attrs = Object.assign(attrs, factory(self, name, item.itemProps, {}, 'object'));
  return options;
}

function formItemChildren(h, self, item, label, validate) {
  var next = null; // 开启多子节点嵌套

  if (item.multiple === true) {
    // 多子节点嵌套时，直接遍历children属性
    var children = factory(self, item.name, item.children, [], 'array'); // 设置为子节点

    next = children.map(function (child) {
      return form_node(h, self, child, factory(self, child.name, child.label, '', 'string'), validate);
    });
  } else {
    // 由于Vue.js的createElement(node, options, children)对children的要求是null | array
    // 为了防止非null时出现数据叠加的情况，因此将children直接声明长度为1的数组
    // 声明VNode节点则进入下一个流程
    if (utils_is.valid(item.node) || utils_is.function(item.render)) {
      next = [form_node(h, self, item, label, validate)];
    } else {
      // 未声明VNode节点时，按照form -> children -> value的顺序尝试对节点填充内容
      // 如name存在时，尝试从form中提取有效的对应键值
      if (utils_is.string(item.name) && item.name && utils_is.valid(self.form[item.name])) {
        next = [self.form[item.name]];
      } // children为基本数据类型(除了undefined)和工厂函数时时可直接使用


      if (utils_is.fit(item.children, ['string', 'number', 'boolean', 'null', 'symbol', 'function'])) {
        next = [factory(self, item.name, item.children, null, ['string', 'number', 'boolean', 'null', 'symbol'])];
      } // value权重最高


      if (utils_is.fit(item.value, ['string', 'number', 'boolean', 'null', 'symbol'])) {
        next = [item.value || null];
      }
    }
  }

  return next;
}

function renderFormItem(h, self, item) {
  // 如果本身是VNode节点，直接返回
  if (utils_is.vNode(item)) return item; // 自定义渲染函数

  if (utils_is.function(item.itemRender)) {
    // 允许自定义渲染函数更新form，但item不允许进行更改（可能导致节点重复刷新）
    return item.itemRender({
      h: h,
      form: self.form,
      name: item.name || null,
      item: utils_copy(item, true)
    });
  }

  var next = null; // 默认VNode节点为el-form-item

  var node = (self.$ELEMENTJSONFORM || {}).formItem || 'el-form-item'; // 工厂方法封装

  var func = function func(key, initialValue, type) {
    return factory(self, name, item[key], initialValue, type);
  }; // FormItem与表单节点都需要使用到label和validate属性，因此先进行处理 


  var label = func('label', '', 'string'),
      message = func('message', {}, 'object'),
      validate = func('validate', {}, 'object'); // 如itemMultiple为true，则直接渲染children内的节点，用以实现嵌套表单

  if (item.itemMultiple === true) {
    var children = factory(self, item.name, item.children, [], 'array'); // 渲染子节点

    next = children.map(function (child) {
      return renderFormItem(h, self, child);
    });
  } else {
    // 非嵌套表单渲染逻辑
    next = formItemChildren(h, self, item, label, validate);
  } // 默认渲染函数


  return h(node, formItemOptions(self, item, label, validate, message), next);
}

/* harmony default export */ var form_item = (renderFormItem);
// CONCATENATED MODULE: ./src/form/form.js




function formOptions(self) {
  var options = {
    ref: 'form',
    staticClass: 'form-create',
    on: {
      // 移除input事件，防止报错
      input: function input() {
        return null;
      },
      // 触发validate事件
      validate: function validate(e) {
        return self.$emit('validate', e);
      }
    }
  }; // 是否让特定组件的宽度铺满容器

  if ((self.$ELEMENTJSONFORM || {}).fullWidth !== false) {
    options.staticClass += ' form-full-width';
  } // 合并属性


  options.attrs = Object.assign({
    model: self.form,
    labelSuffix: '：',
    inline: self.mode === 'search',
    labelWidth: self.mode === 'search' ? '' : '100px',
    size: (self.$ELEMENTJSONFORM || {}).size || 'small'
  }, self.options);
  return options;
}

function formChildren(h, self) {
  var list = [],
      schema = self.schema,
      slots = self.$slots.default || []; // 遍历表单项以生成表单结构

  schema.forEach(function (item) {
    // 是否展示表单项，效果同v-if
    var show = factory(self, item.name, item.show, true, 'boolean');
    list.push(show ? form_item(h, self, item) : h());
  }); // 默认插槽

  if (slots.length > 0) {
    list = list.concat(slots);
  } // 如mode为preview时，不加载按钮项


  if (self.mode !== 'preview') {
    form_button(h, self, list);
  }

  return list;
}

function renderForm(h, self) {
  // 默认VNode节点为el-form
  var node = (self.$ELEMENTJSONFORM || {}).form || 'el-form'; // 渲染函数

  return h(node, formOptions(self), formChildren(h, self));
}

/* harmony default export */ var form_form = (renderForm);
// CONCATENATED MODULE: ./src/utils/recursive.js


function recursive(form, schema) {
  schema.forEach(function (item) {
    if (utils_is.string(item.name)) {
      form[item.name] = item.value || null;
    }

    if (utils_is.array(item.children)) {
      recursive(form, item.children);
    }
  });
}

/* harmony default export */ var utils_recursive = (recursive);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/form/index.vue?vue&type=script&lang=js&




/* harmony default export */ var formvue_type_script_lang_js_ = ({
  name: 'FormCreate',
  version: "0.2.0",
  data: function data() {
    return {
      form: {},
      copy: {}
    };
  },
  props: {
    value: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    mode: {
      type: String,
      default: 'submit',
      validator: function validator(type) {
        return ['submit', 'search', 'preview'].indexOf(type) > -1;
      }
    },
    schema: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    submitText: {
      type: String,
      default: '确定'
    },
    submitIcon: {
      type: String,
      default: 'el-icon-finished'
    },
    resetText: {
      type: String,
      default: '重置'
    },
    resetIcon: {
      type: String,
      default: 'el-icon-refresh-right'
    },
    showResetButton: {
      type: Boolean,
      default: true
    },
    searchText: {
      type: String,
      default: '搜索'
    },
    searchIcon: {
      type: String,
      default: 'el-icon-search'
    }
  },
  created: function created() {
    var form = {},
        value = this.value,
        schema = this.schema;
    utils_recursive(form, schema);
    this.copy = utils_copy(value);
    this.form = Object.assign(form, value);
    this.$emit('input', this.form);
  },
  watch: {
    'schema': {
      handler: function handler() {
        var form = {},
            schema = this.schema;
        utils_recursive(form, schema);
        this.form = Object.assign(form, this.copy);
        this.$emit('input', this.form);
      },
      deep: true
    }
  },
  methods: {
    ref: function ref(str) {
      return this.$refs[str];
    },
    submit: function submit(cb) {
      var form = utils_copy(this.form),
          validate = this.$refs.form.validate; // 如果有回调则执行回调函数

      if (utils_is.function(cb)) {
        return validate(function (valid) {
          return valid ? cb(form) : false;
        });
      } // 无回调执行Promise


      return new Promise(function (resolve, reject) {
        return validate(function (valid, error) {
          return valid ? resolve(form) : reject(error);
        });
      });
    },
    reset: function reset() {
      this.$refs.form.resetFields();
    },
    get: function get(key) {
      var form = this.form,
          data = {};

      if (utils_is.string(key)) {
        data[key] = form[key];
      }

      if (utils_is.array(key)) {
        key.forEach(function (i) {
          return data[i] = form[i];
        });
      }

      return data;
    },
    set: function set(keys, value) {
      var form = utils_copy(this.form);

      if (utils_is.string(keys)) {
        form[keys] = value;
      }

      if (utils_is.array(keys)) {
        keys.forEach(function (item) {
          return form[item.key] = item.value;
        });
      }

      if (utils_is.object(keys)) {
        Object.keys(keys).forEach(function (item) {
          return form[item] = keys[item];
        });
      }

      this.form = form;
      this.$emit('input', form);
    }
  },
  render: function render(h) {
    return form_form(h, this);
  }
});
// CONCATENATED MODULE: ./src/form/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_formvue_type_script_lang_js_ = (formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/form/index.vue?vue&type=style&index=0&lang=css&
var formvue_type_style_index_0_lang_css_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/form/index.vue
var form_render, staticRenderFns





/* normalize component */

var component = normalizeComponent(
  src_formvue_type_script_lang_js_,
  form_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/form/index.vue"
/* harmony default export */ var src_form = (component.exports);
// CONCATENATED MODULE: ./src/index.js
function src_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function src_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { src_ownKeys(Object(source), true).forEach(function (key) { src_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { src_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function src_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




src_form.install = function (Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Vue.prototype.$ELEMENTJSONFORM = {
    // 表单节点
    form: options.form || 'el-form',
    button: options.button || 'el-button',
    formItem: options.formItem || 'el-form-item',
    // 表单外观
    size: options.size || 'small',
    fullWidth: options.fullWidth !== false,
    labelSuffix: options.labelSuffix || ':',
    labelWidth: options.labelWidth || '100px',
    // 组件属性
    renameProps: src_objectSpread(src_objectSpread({}, options.renameProps), renameProps),
    showDefaultPlaceholder: options.showDefaultPlaceholder !== false,
    showPlaceholderNode: options.showPlaceholderNode || showPlaceholderNode
  };
  Vue.component(src_form.name, src_form);
};

/* harmony default export */ var src = __webpack_exports__["default"] = (src_form);

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map