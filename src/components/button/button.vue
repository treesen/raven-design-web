<template>
  <div class="raven-btn" @click="onClick">{{ label }}</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "raven-button",
  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value: string) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
});
</script>
