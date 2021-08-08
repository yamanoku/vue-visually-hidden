<template>
  <div>
    <VisuallyHidden>
      example
    </VisuallyHidden>
    <VisuallyHidden :isFocusable="true">
      <a href="http://example.com">example</a>
    </VisuallyHidden>
    <button type="button">
      <VisuallyHidden>Click Me</VisuallyHidden>
      <span aria-hidden="true">👏</span>
    </button>
  </div>
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
