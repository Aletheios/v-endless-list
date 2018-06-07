import { EVENTS, isAlmostEqual, mixin } from '@/commons';

export default {
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
                this.limitIndex = Math.min(newValue, this.limitIndex);
            }
        }
    },

    mounted() {
        this.$refs.container.addEventListener('scroll', this.onScroll);
    },

    methods: {
        onScroll() {
            const container = this.$refs.container;
            
            if (isAlmostEqual(container.scrollTop, container.scrollHeight - container.offsetHeight, +this.loadingThreshold)) {
                this.limitIndex = Math.min(this.numberOfItems, +this.increment + this.limitIndex);

                if (this.$listeners.hasOwnProperty(EVENTS.reachedBottom)) {
                    this.$emit(EVENTS.reachedBottom);
                }
            }
            else if (container.scrollTop === 0 && this.$listeners.hasOwnProperty(EVENTS.reachedTop)) {
                this.$emit(EVENTS.reachedTop);
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
};