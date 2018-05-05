const EVENTS = {
    reachedTop: 'reached-top',
    reachedBottom: 'reached-bottom',
    scrollTo: 'scroll-to'
};

export default {
    props: {
        items: {
            type: Array,
            default: () => []
        },
        itemHeight: {
            type: [Number, String],
            default: 0
        },
        height: {
            type: String,
            default: '100%'
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
        this.onScroll();

        this.$on(EVENTS.scrollTo, this.scrollTo);
    },

    methods: {
        onScroll() {
            const scrollTop = this.$refs.container.scrollTop;
            const containerHeight = this.$refs.container.clientHeight;

            this.itemsStartIndex = Math.floor(scrollTop / this.itemHeight);
            this.itemsEndIndex = this.itemsStartIndex + Math.ceil(containerHeight / this.itemHeight);
            this.paddingTop = this.itemsStartIndex * this.itemHeight;

            if (scrollTop === 0 && this.$listeners.hasOwnProperty(EVENTS.reachedTop)) {
                this.$emit(EVENTS.reachedTop);
            }
            else if (this.$listeners.hasOwnProperty(EVENTS.reachedBottom)) {
                const totalHeight = this.itemHeight * this.items.length;
                if (scrollTop + containerHeight === totalHeight) {
                    this.$emit(EVENTS.reachedBottom);
                }
            }
        },

        scrollTo(index) {
            if (index === 'top') {
                this.$refs.container.scrollTop = 0;
            }
            else if (index === 'bottom') {
                this.$refs.container.scrollTop = (this.items.length - 1) * this.itemHeight;
            }
            else if (!isNaN(+index) && index >= 0 && index < this.items.length) {
                this.$refs.container.scrollTop = index * this.itemHeight;
            }
        }
    },

    render(h) {
        const renderSlot = this.$scopedSlots.default || (() => { });

        const itemsList = this.items
            .slice(this.itemsStartIndex, this.itemsEndIndex + 1)
            .map(item => h('div', this.itemStyle, [renderSlot(item)]));
        
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