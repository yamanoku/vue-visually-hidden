<template>
  <main>
    <h1>Vue Visually Hidden Demo Page</h1>
    <h2>VisuallyHidden - Default</h2>
    <div class="example-background">
      <VisuallyHidden>
        example text
      </VisuallyHidden>
    </div>
    <h2>VisuallyHidden - Focusable</h2>
    <div class="example-background">
      <VisuallyHidden :isFocusable="true">
        <a href="http://example.com">example</a>
      </VisuallyHidden>
    </div>
    <h2>VisuallyHidden Button Example</h2>
    <button type="button" class="example-button">
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
