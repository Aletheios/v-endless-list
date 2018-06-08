export const EVENTS = {
    reachedTop: 'reached-top',
    reachedBottom: 'reached-bottom',
    scrollTo: 'scroll-to'
};

export const SCROLL_TARGETS = {
    top: 'top',
    bottom: 'bottom'
};

export const mixin = {
    props: {
        items: {
            type: Array,
            default: () => []
        },
        height: {
            type: String,
            default: '100%'
        }
    },

    methods: {
        isAlmostEqual(value1, value2, threshold = 1) {
            return Math.abs(value1 - value2) < threshold;
        }
    }
};