<template>
  <component v-if="icon" :is="icon" />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Icon",
  props: {
    icon: String,
  },
});
</script>
