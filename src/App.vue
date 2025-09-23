<template>
  <main>
    <h1>vue-visually-hidden Demo Page</h1>
    <p>Vue.js visually hidden component (Vue 3 Only)</p>
    <h2>Example</h2>
    <h3>VisuallyHidden - Default</h3>
    <div class="example-background">
      <VisuallyHidden>
        example text
      </VisuallyHidden>
    </div>
    <h3>VisuallyHidden - Focusable</h3>
    <div class="example-background">
      <VisuallyHidden :isFocusable="true">
        <a href="http://example.com">example</a>
      </VisuallyHidden>
    </div>
    <h3>VisuallyHidden Button Example</h3>
    <button type="button" class="example-button">
      <VisuallyHidden>Click Me</VisuallyHidden>
      <span aria-hidden="true">👏</span>
    </button>
  </main>
</template>

<script setup lang="ts">
import VisuallyHidden from "./components/VisuallyHidden.vue";
</script>

<style scoped>
.example-background {
  background-color: var(--y-white-low);
  padding: var(--y-rhythm-3);
  border-radius: 8px;
}

.example-button {
  font-size: 36px;
}
</style>
