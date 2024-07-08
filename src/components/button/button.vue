<template>
  <div :class="['raven-btn', `raven-btn-size-${size}`]" @click="onClick">
    {{ label }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "button",
  props: {
    label: {
      type: String,
      required: true,
    },
    // type: {
    //   type: String,
    //   default: 'Clickthrough',
    //   validator: function (value: string) {
    //     return ["Clickthrough", "Negative", "Action", "Attention", "Success", "Disabled", "Selector", "Ghost", "Cancel", "No Background"].indexOf(value) !== -1;
    //   },
    // },
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
