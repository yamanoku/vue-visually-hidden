<template>
  <div>
    <VisuallyHidden>
      example
    </VisuallyHidden>
    <VisuallyHidden :isFocusable="true">
      <a href="http://example.com">example</a>
    </VisuallyHidden>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VisuallyHidden from "./VisuallyHidden.vue";
export default defineComponent({
  name: "App",
  components: {
    VisuallyHidden
  }
});
</script>
