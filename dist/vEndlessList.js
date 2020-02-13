(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vEndlessList", [], factory);
	else if(typeof exports === 'object')
		exports["vEndlessList"] = factory();
	else
		root["vEndlessList"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/commons.js":
/*!************************!*\
  !*** ./src/commons.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.mixin = _exports.SCROLL_TARGETS = _exports.EVENTS = void 0;
  var EVENTS = {
    reachedTop: 'reached-top',
    reachedBottom: 'reached-bottom',
    scrollTo: 'scroll-to'
  };
  _exports.EVENTS = EVENTS;
  var SCROLL_TARGETS = {
    top: 'top',
    bottom: 'bottom'
  };
  _exports.SCROLL_TARGETS = SCROLL_TARGETS;
  var mixin = {
    props: {
      items: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      height: {
        type: String,
        default: '100%'
      }
    },
    methods: {
      isAlmostEqual: function isAlmostEqual(value1, value2) {
        var threshold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        return Math.abs(value1 - value2) < threshold;
      }
    }
  };
  _exports.mixin = mixin;
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./virtualList */ "./src/virtualList.js"), __webpack_require__(/*! ./lazyList */ "./src/lazyList.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _virtualList, _lazyList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _virtualList = _interopRequireDefault(_virtualList);
  _lazyList = _interopRequireDefault(_lazyList);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = {
    VEndlessVirtualList: _virtualList.default,
    VEndlessLazyList: _lazyList.default,
    install: function install(Vue) {
      Vue.component('v-endless-virtual-list', _virtualList.default);
      Vue.component('v-endless-lazy-list', _lazyList.default);
    }
  };
  _exports.default = _default;
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/lazyList.js":
/*!*************************!*\
  !*** ./src/lazyList.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./commons */ "./src/commons.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _commons) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    mixins: [_commons.mixin],
    props: {
      increment: {
        type: [Number, String],
        default: 10,
        validator: function validator(value) {
          return !isNaN(+value) && +value >= 0;
        }
      },
      loadingThreshold: {
        type: [Number, String],
        default: 10,
        validator: function validator(value) {
          return !isNaN(+value) && +value >= 0;
        }
      },
      listChangeBehavior: {
        type: String,
        default: 'reset',
        validator: function validator(value) {
          return ['reset', 'keep'].includes(value);
        }
      }
    },
    data: function data() {
      return {
        limitIndex: +this.increment
      };
    },
    computed: {
      numberOfItems: function numberOfItems() {
        return this.items.length;
      }
    },
    watch: {
      numberOfItems: function numberOfItems(newValue) {
        if (this.listChangeBehavior === 'reset') {
          this.limitIndex = Math.min(newValue, +this.increment);
          this.$refs.container.scrollTop = 0;
        } else {
          this.limitIndex = Math.max(+this.increment, Math.min(newValue, this.limitIndex));
        }
      }
    },
    mounted: function mounted() {
      this.$refs.container.addEventListener('scroll', this.onScroll);
      this.$on(_commons.EVENTS.scrollTo, this.scrollTo);
    },
    methods: {
      onScroll: function onScroll() {
        var container = this.$refs.container;

        if (this.isAlmostEqual(container.scrollTop, container.scrollHeight - container.offsetHeight, +this.loadingThreshold)) {
          this.limitIndex = Math.min(this.numberOfItems, +this.increment + this.limitIndex);

          if (this.$listeners.hasOwnProperty(_commons.EVENTS.reachedBottom)) {
            this.$emit(_commons.EVENTS.reachedBottom);
          }
        } else if (container.scrollTop === 0 && this.$listeners.hasOwnProperty(_commons.EVENTS.reachedTop)) {
          this.$emit(_commons.EVENTS.reachedTop);
        }
      },
      scrollTo: function scrollTo(index) {
        var container = this.$refs.container;

        if (index === _commons.SCROLL_TARGETS.top) {
          container.scrollTop = 0;
        } else if (index === _commons.SCROLL_TARGETS.bottom) {
          this.limitIndex = this.items.length;
          this.$nextTick(function () {
            return container.scrollTop = container.scrollHeight;
          });
        } else if (!isNaN(+index) && index >= 0 && index < this.items.length) {
          if (index >= this.limitIndex - this.increment) {
            this.limitIndex = Math.min(this.numberOfItems, +this.increment + index);
          }

          this.$nextTick(function () {
            return container.children[index].scrollIntoView();
          });
        }
      }
    },
    render: function render(h) {
      var children;

      if (this.items.length === 0) {
        var renderSlot = this.$scopedSlots['empty-list'];
        children = [renderSlot()];
      } else {
        var _renderSlot = this.$scopedSlots.default || function () {};

        children = this.items.slice(0, this.limitIndex).map(function (item) {
          return h('div', {}, [_renderSlot(item)]);
        });
      }

      return h('div', {
        ref: 'container',
        style: {
          height: this.height,
          overflowY: 'scroll'
        }
      }, children);
    }
  };
  _exports.default = _default;
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/virtualList.js":
/*!****************************!*\
  !*** ./src/virtualList.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./commons */ "./src/commons.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _commons) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    mixins: [_commons.mixin],
    props: {
      itemHeight: {
        type: [Number, String],
        required: true,
        validator: function validator(value) {
          return !isNaN(+value) && +value >= 0;
        }
      }
    },
    data: function data() {
      return {
        itemsStartIndex: 0,
        itemsEndIndex: 0,
        paddingTop: 0
      };
    },
    computed: {
      itemStyle: function itemStyle() {
        return {
          style: {
            height: this.itemHeight + 'px',
            overflow: 'hidden'
          }
        };
      }
    },
    mounted: function mounted() {
      this.$refs.container.addEventListener('scroll', this.onScroll);
      this.onScroll(true);
      this.$on(_commons.EVENTS.scrollTo, this.scrollTo);
    },
    methods: {
      onScroll: function onScroll(init) {
        var scrollTop = this.$refs.container.scrollTop;
        var containerHeight = this.$refs.container.clientHeight;
        this.itemsStartIndex = Math.floor(scrollTop / this.itemHeight);
        this.itemsEndIndex = this.itemsStartIndex + Math.ceil(containerHeight / this.itemHeight);
        this.paddingTop = this.itemsStartIndex * this.itemHeight;

        if (scrollTop === 0 && this.$listeners.hasOwnProperty(_commons.EVENTS.reachedTop)) {
          if (init !== true) {
            this.$emit(_commons.EVENTS.reachedTop);
          }
        } else if (this.$listeners.hasOwnProperty(_commons.EVENTS.reachedBottom)) {
          var totalHeight = this.itemHeight * this.items.length;

          if (this.isAlmostEqual(totalHeight, scrollTop + containerHeight)) {
            this.$emit(_commons.EVENTS.reachedBottom);
          }
        }
      },
      scrollTo: function scrollTo(index) {
        if (index === _commons.SCROLL_TARGETS.top) {
          this.$refs.container.scrollTop = 0;
        } else if (index === _commons.SCROLL_TARGETS.bottom) {
          this.$refs.container.scrollTop = (this.items.length - 1) * this.itemHeight;
        } else if (!isNaN(+index) && index >= 0 && index < this.items.length) {
          this.$refs.container.scrollTop = index * this.itemHeight;
        }
      }
    },
    render: function render(h) {
      var _this = this;

      var children;

      if (this.items.length === 0) {
        var renderSlot = this.$scopedSlots['empty-list'];
        children = [renderSlot()];
      } else {
        var _renderSlot = this.$scopedSlots.default || function () {};

        var itemsList = this.items.slice(this.itemsStartIndex, this.itemsEndIndex + 1).map(function (item) {
          return h('div', _this.itemStyle, [_renderSlot(item)]);
        });
        children = [h('div', {
          style: {
            boxSizing: 'border-box',
            paddingTop: this.paddingTop + 'px',
            height: this.itemHeight * this.items.length + 'px'
          }
        }, itemsList)];
      }

      return h('div', {
        ref: 'container',
        style: {
          height: this.height,
          overflowY: 'scroll'
        }
      }, children);
    }
  };
  _exports.default = _default;
  module.exports = exports.default;
});

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Simon\Code\_opensource\v-endless-list\src\index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=vEndlessList.js.map