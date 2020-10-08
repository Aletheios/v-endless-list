import { EVENTS, SCROLL_TARGETS, mixin } from './commons';

export default h => ({
    mixins: [mixin],

    props: {
        itemHeight: {
            type: [Number, String],
            required: true,
            validator(value) {
                return !isNaN(+value) && +value >= 0;
            }
        }
    },

    emits: [
        EVENTS.reachedTop,
        EVENTS.reachedBottom
    ],

    data() {
        return {
            itemsStartIndex: 0,
            itemsEndIndex: 0,
            paddingTop: 0
        };
    },

    computed: {
        itemStyle() {
            return {
                style: {
                    height: this.itemHeight + 'px',
                    overflow: 'hidden'
                }
            };
        }
    },

    mounted() {
        this.$refs.container.addEventListener('scroll', this._onScroll);
        this._onScroll(true);
    },

    methods: {
        _onScroll(init) {
            const scrollTop = this.$refs.container.scrollTop;
            const containerHeight = this.$refs.container.clientHeight;

            this.itemsStartIndex = Math.floor(scrollTop / this.itemHeight);
            this.itemsEndIndex = this.itemsStartIndex + Math.ceil(containerHeight / this.itemHeight);
            this.paddingTop = this.itemsStartIndex * this.itemHeight;

            if (scrollTop === 0) {
                if (init !== true) {
                    this.$emit(EVENTS.reachedTop);
                }
            }
            else {
                const totalHeight = this.itemHeight * this.items.length;
                if (this.isAlmostEqual(totalHeight, scrollTop + containerHeight)) {
                    this.$emit(EVENTS.reachedBottom);
                }
            }
        },

        scrollTo(index) {
            if (index === SCROLL_TARGETS.top) {
                this.$refs.container.scrollTop = 0;
            }
            else if (index === SCROLL_TARGETS.bottom) {
                this.$refs.container.scrollTop = (this.items.length - 1) * this.itemHeight;
            }
            else if (!isNaN(+index) && index >= 0 && index < this.items.length) {
                this.$refs.container.scrollTop = index * this.itemHeight;
            }
        }
    },

    render() {
        let children;
        if (this.items.length === 0) {
            const renderSlot = this.$slots['empty-list'];
            children = [renderSlot()];
        }
        else {
            const renderSlot = this.$slots.default || (() => { });
            const itemsList = this.items
                .slice(this.itemsStartIndex, this.itemsEndIndex + 1)
                .map(item => h('div', this.itemStyle, [renderSlot(item)]));

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
});