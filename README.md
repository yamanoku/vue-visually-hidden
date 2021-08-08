# vue-visually-hidden
[![npm](https://img.shields.io/npm/v/vue-visually-hidden.svg)](https://www.npmjs.com/package/vue-visually-hidden)

Vue.js visually hidden component
(Vue 3 Only)

## Demo
https://vue-visually-hidden.vercel.app/

## Installation

```bash
npm install -D vue-visually-hidden
```

```bash
yarn add -D vue-visually-hidden
```

## Usage

```html:App.vue
<template>
  <div>
    <VisuallyHidden :isFocusable="true">
      <a href="#">aaa</a>
    </VisuallyHidden>
  </div>
</template>

<script setup>
  import { VisuallyHidden } from 'vue-visually-hidden'
</script>
```

### style setting (vue-cli)

```js:main.js
import 'vue-visually-hidden/dist/style.css'
```

### style setting (vite)

```js:vite.config.js
import 'vue-visually-hidden/style'
```

## isFocusable

prop        | type      | default
----------- | --------- | ---------
isFocusable | `Boolean` | `false`

Inspired by [Bootstrap visually-hidden helper](https://getbootstrap.com/docs/5.0/helpers/visually-hidden/)

`.visually-hidden-focusable` can be show by any child element of the container receives focus.

```html:example.vue
<template>
  <VisuallyHidden :isFocusable="true">
    <a href="http://example.com">example</a>
  </VisuallyHidden>
</template>
```

## Resolve Setting

If you get the error `Invalid VNode type: Symbol(Fragment) (symbol)`, try setting `resolve` in the configuration file as follows.

See: https://github.com/vuejs/vue-next/issues/2064

### vue-cli

```js:vue.config.js
const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve('./node_modules/vue')
      }
    }
  }
}
```

### vite

```js:vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    dedupe: ['vue']
  }
})
```

