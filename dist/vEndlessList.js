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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var EVENTS = exports.EVENTS = {
    reachedTop: 'reached-top',
    reachedBottom: 'reached-bottom',
    scrollTo: 'scroll-to'
};

var SCROLL_TARGETS = exports.SCROLL_TARGETS = {
    top: 'top',
    bottom: 'bottom'
};

var mixin = exports.mixin = {
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _virtualList = __webpack_require__(3);

var _virtualList2 = _interopRequireDefault(_virtualList);

var _lazyList = __webpack_require__(4);

var _lazyList2 = _interopRequireDefault(_lazyList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    install: function install(Vue) {
        Vue.component('v-endless-virtual-list', _virtualList2.default);
        Vue.component('v-endless-lazy-list', _lazyList2.default);
    }
};
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commons = __webpack_require__(0);

exports.default = {
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

        var children = void 0;
        if (this.items.length === 0) {
            children = [this.$slots.emptyList];
        } else {
            var renderSlot = this.$scopedSlots.default || function () {};
            var itemsList = this.items.slice(this.itemsStartIndex, this.itemsEndIndex + 1).map(function (item) {
                return h('div', _this.itemStyle, [renderSlot(item)]);
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
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commons = __webpack_require__(0);

exports.default = {
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
        var children = void 0;
        if (this.items.length === 0) {
            children = [this.$slots.emptyList];
        } else {
            var renderSlot = this.$scopedSlots.default || function () {};
            children = this.items.slice(0, this.limitIndex).map(function (item) {
                return h('div', {}, [renderSlot(item)]);
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
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=vEndlessList.js.map