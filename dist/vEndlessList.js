(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vEndlessList", [], factory);
	else if(typeof exports === 'object')
		exports["vEndlessList"] = factory();
	else
		root["vEndlessList"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _component = __webpack_require__(2);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    install: function install(Vue) {
        Vue.component('v-endless-list', _component2.default);
    }
};
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var EVENTS = {
    reachedTop: 'reached-top',
    reachedBottom: 'reached-bottom',
    scrollTo: 'scroll-to'
};

exports.default = {
    props: {
        items: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        itemHeight: {
            type: Number,
            default: 0
        },
        height: {
            type: String,
            default: '100%'
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
        this.onScroll();

        this.$on(EVENTS.scrollTo, this.scrollTo);
    },


    methods: {
        onScroll: function onScroll() {
            var scrollTop = this.$refs.container.scrollTop;
            var containerHeight = this.$refs.container.clientHeight;

            this.itemsStartIndex = Math.floor(scrollTop / this.itemHeight);
            this.itemsEndIndex = this.itemsStartIndex + Math.ceil(containerHeight / this.itemHeight);
            this.paddingTop = this.itemsStartIndex * this.itemHeight;

            if (scrollTop === 0 && this.$listeners.hasOwnProperty(EVENTS.reachedTop)) {
                this.$emit(EVENTS.reachedTop);
            } else if (this.$listeners.hasOwnProperty(EVENTS.reachedBottom)) {
                var totalHeight = this.itemHeight * this.items.length;
                if (scrollTop + containerHeight === totalHeight) {
                    this.$emit(EVENTS.reachedBottom);
                }
            }
        },
        scrollTo: function scrollTo(index) {
            if (index === 'top') {
                this.$refs.container.scrollTop = 0;
            } else if (index === 'bottom') {
                this.$refs.container.scrollTop = (this.items.length - 1) * this.itemHeight;
            } else if (!isNaN(+index) && index >= 0 && index < this.items.length) {
                this.$refs.container.scrollTop = index * this.itemHeight;
            }
        }
    },

    render: function render(h) {
        var _this = this;

        var renderSlot = this.$scopedSlots.default || function () {};

        var itemsList = this.items.slice(this.itemsStartIndex, this.itemsEndIndex + 1).map(function (item) {
            return h('div', _this.itemStyle, [renderSlot(item)]);
        });

        return h('div', {
            ref: 'container',
            style: {
                height: this.height,
                overflowY: 'scroll'
            }
        }, [h('div', {
            style: {
                boxSizing: 'border-box',
                paddingTop: this.paddingTop + 'px',
                height: this.itemHeight * this.items.length + 'px'
            }
        }, itemsList)]);
    }
};
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=vEndlessList.js.map