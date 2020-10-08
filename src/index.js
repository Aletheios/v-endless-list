import getVirtualList from './virtualList';
import getLazyList from './lazyList';

export default {
    install(app, { h }) {
        app.component('v-endless-virtual-list', getVirtualList(h));
        app.component('v-endless-lazy-list', getLazyList(h));
    }
};