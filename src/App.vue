<template>
  <main>
    <h1>Vue Visually Hidden Demo Page</h1>
    <h2>VisuallyHidden - Default</h2>
    <VisuallyHidden>
      example
    </VisuallyHidden>
    <h2>VisuallyHidden - Focusable</h2>
    <VisuallyHidden :isFocusable="true">
      <a href="http://example.com">example</a>
    </VisuallyHidden>
    <h2>VisuallyHidden Button Example</h2>
    <button type="button">
      <VisuallyHidden>Click Me</VisuallyHidden>
      <span aria-hidden="true">👏</span>
    </button>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VisuallyHidden from "./components/VisuallyHidden.vue";
export default defineComponent({
  name: "App",
  components: {
    VisuallyHidden
  }
});
</script>
