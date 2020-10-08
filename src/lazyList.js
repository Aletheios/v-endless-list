import { EVENTS, SCROLL_TARGETS, mixin } from './commons';

export default h => ({
    mixins: [mixin],

    props: {
        increment: {
            type: [Number, String],
            default: 10,
            validator(value) {
                return !isNaN(+value) && +value >= 0;
            }
        },
        loadingThreshold: {
            type: [Number, String],
            default: 10,
            validator(value) {
                return !isNaN(+value) && +value >= 0;
            }
        },
        listChangeBehavior: {
            type: String,
            default: 'reset',
            validator(value) {
                return ['reset', 'keep'].includes(value);
            }
        }
    },

    emits: [
        EVENTS.reachedTop,
        EVENTS.reachedBottom
    ],

    data() {
        return {
            limitIndex: +this.increment
        };
    },

    computed: {
        numberOfItems() {
            return this.items.length;
        }
    },

    watch: {
        numberOfItems(newValue) {
            if (this.listChangeBehavior === 'reset') {
                this.limitIndex = Math.min(newValue, +this.increment);
                this.$refs.container.scrollTop = 0;
            }
            else {
                this.limitIndex = Math.max(+this.increment, Math.min(newValue, this.limitIndex));
            }
        }
    },

    mounted() {
        this.$refs.container.addEventListener('scroll', this._onScroll);
    },

    methods: {
        _onScroll() {
            const container = this.$refs.container;
            
            if (this.isAlmostEqual(container.scrollTop, container.scrollHeight - container.offsetHeight, +this.loadingThreshold)) {
                this.limitIndex = Math.min(this.numberOfItems, +this.increment + this.limitIndex);
                this.$emit(EVENTS.reachedBottom);
            }
            else if (container.scrollTop === 0) {
                this.$emit(EVENTS.reachedTop);
            }
        },

        scrollTo(index) {
            const container = this.$refs.container;

            if (index === SCROLL_TARGETS.top) {
                container.scrollTop = 0;
            }
            else if (index === SCROLL_TARGETS.bottom) {
                this.limitIndex = this.items.length;
                this.$nextTick(() => (container.scrollTop = container.scrollHeight));
            }
            else if (!isNaN(+index) && index >= 0 && index < this.items.length) {
                if (index >= this.limitIndex - this.increment) {
                    this.limitIndex = Math.min(this.numberOfItems, +this.increment + index);
                }
                this.$nextTick(() => container.children[index].scrollIntoView());
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
            children = this.items
                .slice(0, this.limitIndex)
                .map(item => h('div', { }, [renderSlot(item)]));
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