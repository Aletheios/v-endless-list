import { EVENTS, SCROLL_TARGETS, mixin } from '@/commons';

export default {
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
        this.$refs.container.addEventListener('scroll', this.onScroll);
        this.onScroll(true);

        this.$on(EVENTS.scrollTo, this.scrollTo);
    },

    methods: {
        onScroll(init) {
            const scrollTop = this.$refs.container.scrollTop;
            const containerHeight = this.$refs.container.clientHeight;

            this.itemsStartIndex = Math.floor(scrollTop / this.itemHeight);
            this.itemsEndIndex = this.itemsStartIndex + Math.ceil(containerHeight / this.itemHeight);
            this.paddingTop = this.itemsStartIndex * this.itemHeight;

            if (scrollTop === 0 && this.$listeners.hasOwnProperty(EVENTS.reachedTop)) {
                if (init !== true) {
                    this.$emit(EVENTS.reachedTop);
                }
            }
            else if (this.$listeners.hasOwnProperty(EVENTS.reachedBottom)) {
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

    render(h) {
        let children;
        if (this.items.length === 0) {
            children = [this.$slots.emptyList];
        }
        else {
            const renderSlot = this.$scopedSlots.default || (() => { });
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
};