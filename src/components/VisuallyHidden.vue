<template>
  <div :class="focusedClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
const { isFocusable = false } = defineProps<{ isFocusable?: boolean }>();
const focusedClass = isFocusable ? "visually-hidden-focusable" : "visually-hidden";
</script>

<style scoped>
/* https://github.com/ampproject/amphtml/blob/2e9a940e78df8de38a6c06a0772aeaa4839a24d1/css/ampshared.css#L164-L194 */
.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 4px;
  height: 4px;
  opacity: 0;
  overflow: hidden;
  border: none;
  margin: 0;
  padding: 0;
  display: block;
  visibility: visible;
}
</style>
