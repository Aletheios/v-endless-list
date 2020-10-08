# v-endless-list

**Minimalistic and tiny [Vue.js](https://vuejs.org/) scroll list components for an endless amount of data**

**Note: Version 3.x of v-endless-list is compatible with Vue 3 only. Install version 2.x if you use Vue 2.**

Provides two components:
* `v-endless-virtual-list`: Renders only items in the viewport for performance. Supports lazy loading and jumping to given items. Requires fixed item height. Recommended for extremely large data sets.

* `v-endless-lazy-list`: Simple list with lazy loading. Supports variable height items but is less efficient for large data sets (slower when scrolling far down). Recommended for small to medium data sets.


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [API](#api)


## Installation

Install `v-endless-list`:

```bash
npm install --save v-endless-list
```

Then import it in your project:

```javascript
import { createApp, h } from 'vue';

const app = Vue.createApp(App);
app.use(vEndlessList, { h });
app.mount('#app');
```

Or include the files via `<script>` tag:
```html
<script src="https://unpkg.com/vue@3.0.0/dist/vue.global.prod.js"></script>
<script src="https://unpkg.com/v-endless-list/dist/vEndlessList.min.js"></script>
<script>
    const app = Vue.createApp(App);
    app.use(vEndlessList, { h: Vue.h });
    app.mount('#app');
</script>
```


## Usage

Most basic usage example for both components (read about [Vue Scoped Slots](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots) to understand the syntax):

```html
<v-endless-virtual-list :items="items" item-height="100">
    <template #default="item">
        <div>{{ item }}</div>
    </template>
</v-endless-virtual-list>
```

```html
<v-endless-lazy-list :items="items">
    <template #default="item">
        <div>{{ item }}</div>
    </template>
</v-endless-lazy-list>
```

Advanced usage example for both components:

```html
<v-endless-virtual-list
    :items="items"
    height="50vh"
    item-height="100"
    @reached-bottom="lazyLoadItems()"
>
    <template #empty-list>
        <b>No items in this list.</b>
    </template>
    <template #default="item">
        <my-component :my-data="item.myData"></my-component>
    </template>
</v-endless-virtual-list>
```

```html
<v-endless-lazy-list
    :items="items"
    height="50vh"
    increment="100"
    loading-threshold="42"
    list-change-behavior="keep"
    @reached-top="onReachedTop()"
>
    <template #empty-list>
        <b>No items in this list.</b>
    </template>
    <template #default="item">
        <my-component :my-data="item.myData"></my-component>
    </template>
</v-endless-lazy-list>
```

Also check the demo in the `demo` directory. You can run the demos with `npm run demo`. Open your browser at `http://127.0.0.1:1337/demo`.


## API

### `v-endless-virtual-list`

#### Properties
* `items`: Array, required. List of items you want to display.
* `item-height`: Number, required. Height of an individual list item in pixels. Overflow will be hidden.
* `height`: String, optional, default `"100%"`. CSS height of the entire list component.

#### Slots
* `default` (scoped slot, required): Component to render for each list item, receives the list item in the slot scope.
* `empty-list` (optional): Text or content to show when there are no items in the list.

#### Emitted Events
* `reached-top`: Emitted when the list is scrolled to the very top.
* `reached-bottom`: Emitted when the list is scrolled to the very bottom. Can be used for lazy loading new items.

#### Methods
* `scrollTo`: Can be used to scroll the list to a given item. Valid parameters are:
    * `"top"`: scroll to top
    * `"bottom"`: scroll to bottom
    * index (Number): scroll to the item with the given index

### `v-endless-lazy-list`

#### Properties
* `items`: Array, required. List of items you want to display.
* `height`: String, optional, default `"100%"`. CSS height of the entire list component.
* `increment`: Number, optional, default `10`. Number of items to add to the end of the list on lazy loading.
* `loadingThreshold`: Number, optional, default `10`. Threshold after which lazy loading is triggered, i.e. number of pixels before reaching the end of the list when scrolling.
* `listChangeBehavior`: Either `"reset"` or `"keep"`, optional, default `"reset"`. Behavior of the list when the data set length changes.
    * `"reset"`: Reset the number of items to `increment` and scroll to the top.
    * `"keep"`: Keep the number of currently shown items as well as scroll state.

#### Slots
* `default` (scoped slot, required): Component to render for each list item, receives the list item in the slot scope.
* `empty-list` (optional): Text or content to show when there are no items in the list.

#### Emitted Events
* `reached-top`: Emitted when the list is scrolled to the very top.
* `reached-bottom`: Emitted when the list is scrolled to the very bottom.

#### Methods
* `scrollTo`: Can be used to scroll the list to a given item. Valid parameters are:
    * `"top"`: scroll to top
    * `"bottom"`: scroll to bottom. Forces loading of all items. Note that this can have a huge performance impact and might freeze the browser temporarily. Use with caution.
    * index (Number): scroll to the item with the given index. See note on performance above.