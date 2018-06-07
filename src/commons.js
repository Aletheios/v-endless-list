export const EVENTS = {
    reachedTop: 'reached-top',
    reachedBottom: 'reached-bottom',
    scrollTo: 'scroll-to'
};

export function isAlmostEqual(value1, value2, threshold = 1) {
    return Math.abs(value1 - value2) < threshold;
}

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
    }
};