# vue-visually-hidden
[![npm](https://img.shields.io/npm/v/vue-visually-hidden.svg)](https://www.npmjs.com/package/vue-visually-hidden)

Vue.js visually hidden component (Vue 3 Only)

## What is `<VisuallyHidden>` component ?

In the case of visual content, users using assistive technologies (e.g. screen readers) may not always know what the content means.

In most cases, accessible content can be provided by semantic markup, but there is currently no markup that can provide content that is not visually visible but can be read out loud.

For example, when a button is displayed with only pictograms, the description of the button may be visually discernible, but the screen reader may not know what it means.

```html
<button type="submit">
  <span>
    📧
  </span>
</button>
```

In such cases, `<VisuallyHidden>` is a good choice.

```html
<button type="submit">
  <span aria-hidden="true">
    📧
  </span>
  <VisuallyHidden>
    Send email
  </VisuallyHidden>
</button>
```
*Use `aria-hidden="true"` to prevent screen readers from emoji.*

It used to be used in [Bootstrap](https://getbootstrap.com/) in the form of `sr-only`.

### Reference
[WebAIM: CSS in Action - Invisible Content Just for Screen Reader Users](https://webaim.org/techniques/css/invisiblecontent/)

## Demo
https://vue-visually-hidden.vercel.app/

## Installation

```bash
## npm
$ npm install vue-visually-hidden

## pnpm
$ pnpm add vue-visually-hidden

## yarn
$ yarn add vue-visually-hidden

## Bun
$ bun add vue-visually-hidden
```

## Usage

```html:App.vue
<template>
  <div>
    <VisuallyHidden>
      Visually Hidden Text
    </VisuallyHidden>
    <VisuallyHidden :isFocusable="true">
      <a href="http://example.com">example</a>
    </VisuallyHidden>
  </div>
</template>

<script setup>
import VisuallyHidden from 'vue-visually-hidden'
</script>
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

This can be used primarily for a feature called skip link.
A skip link is link that allow keyboard users to quickly access the main content, and the links are visible upon focus.

### Reference
- [Accessibility | Vue.js](https://vuejs.org/guide/best-practices/accessibility.html#skip-link)
- [vue-a11y/vue-skip-to](https://github.com/vue-a11y/vue-skip-to)
