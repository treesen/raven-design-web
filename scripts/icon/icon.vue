<template>
  <svg fill="currentColor">
    <slot />
  </svg>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Icon",
});
</script>
