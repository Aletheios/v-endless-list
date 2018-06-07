import virtualList from '@/virtualList';
import lazyList from '@/lazyList';

export default {
    install(Vue) {
        Vue.component('v-endless-virtual-list', virtualList);
        Vue.component('v-endless-lazy-list', lazyList);
    }
};