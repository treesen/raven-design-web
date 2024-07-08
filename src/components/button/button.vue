<template>
  <div :class="['raven-btn', `raven-btn-size-${size}`]" @click="onClick">
    {{ label }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Button",
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "clickthrough",
      validator: function (value: string) {
        return (
          [
            "clickthrough",
            "negative",
            "action",
            "attention",
            "success",
            "disabled",
            "selector",
            "ghost",
            "cancel",
            "no-background",
          ].indexOf(value) !== -1
        );
      },
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value: string) {
        return ["tiny", "small", "medium"].indexOf(value) !== -1;
      },
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
});
</script>
