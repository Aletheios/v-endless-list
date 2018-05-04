# v-endless-list

**Minimalistic and tiny [Vue.js 2](https://vuejs.org/) scroll list component for an endless amount of data**

Renders only items in the viewport for performance. Supports lazy loading and jumping to given items. Requires fixed item height. Tiny: 2.7KB (1KB gzipped).

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [API](#api)


## Installation

Install `v-endless-list` via npm:

```bash
npm install --save v-endless-list
```

Then import it in your project:

```javascript
import Vue from 'vue';
import vEndlessList from 'v-endless-list';
Vue.use(vEndlessList);
```

Or include the files via `<script>` tag:
```html
<script src="node_modules/vue/dist/vue.min.js"></script>
<script src="node_modules/v-endless-list/dist/vEndlessList.min.js"></script>
<script>
    Vue.use(vEndlessList);
</script>
```


## Usage

Most basic usage example (read about [Vue Scoped Slots](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots) to understand the syntax):

```html
<v-endless-list :items="items" item-height="100">
    <div slot-scope="item">
        {{ item }}
    </div>
</v-endless-list>
```

Advanced usage example:

```html
<v-endless-list :items="items"
                item-height="100"
                height="50vh"
                @reached-bottom="lazyLoadItems()">
    <my-component slot-scope="item">
        {{ item.myData }}
    </my-component>
</v-endless-list>
```

Also check the demo in the `demo` directory. You can run the demos with `npm run demo`. Open your browser at `http://127.0.0.1:1337/demo`.


## API

### Properties
* `items`: Array, required. List of items you want to display.
* `item-height`: Number, required. Height of an individual list item in pixels. Overflow will be hidden.
* `height`: String, optional, default `"100%"`. CSS height of the entire list component.

### Emitted Events
* `reached-top`: Emitted when the list is scolled to the very top.
* `reached-bottom`: Emitted when the list is scrolled to the very bottom. Can be used for lazy loading new items.

### Received Events
* `scroll-to`: Can be used to scroll the list to given items. Valid parameters are:
    * `"top"`: scroll to top
    * `"bottom"`: scroll to bottom
    * index (Number): scroll to the item with the given index