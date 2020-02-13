import VirtualList from './virtualList';
import LazyList from './lazyList';

export default {
    VEndlessVirtualList: VirtualList,
    VEndlessLazyList: LazyList,

    install(Vue) {
        Vue.component('v-endless-virtual-list', VirtualList);
        Vue.component('v-endless-lazy-list', LazyList);
    }
};