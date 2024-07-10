<template>
  <a
    v-if="href"
    v-bind="$attrs"
    :href="computedHref"
    :disabled="disabled"
    :class="[
      'raven-btn',
      `raven-btn-size-${size}`,
      `raven-btn-variant-${variant}`,
      {
        'raven-btn-rounded': rounded,
        'raven-btn-active': active,
        'raven-btn-block': block,
      },
    ]"
    @click="onClick"
  >
    <!-- TODO: loading icon -->
    <slot name="prepend"></slot>
    <slot>{{ label }}</slot>
    <slot name="append"></slot>
  </a>
  <button
    v-else
    v-bind="$attrs"
    :disabled="disabled"
    :class="[
      'raven-btn',
      `raven-btn-size-${size}`,
      `raven-btn-variant-${variant}`,
      {
        'raven-btn-rounded': rounded,
        'raven-btn-active': active,
        'raven-btn-block': block,
      },
    ]"
    @click="onClick"
  >
    <!-- TODO: loading icon -->
    <slot name="prepend"></slot>
    <slot>{{ label }}</slot>
    <slot name="append"></slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Button",
  props: {
    label: {
      type: String,
    },
    variant: {
      type: String,
      default: "clickthrough",
      validator: function (value: string) {
        return [
          "clickthrough",
          "negative",
          "attention",
          "success",
          "ghost",
          "no-background",
          "cancel",
          "action",
          "selector",
        ].includes(value);
      },
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value: string) {
        return ["tiny", "small", "medium"].includes(value);
      },
    },
    rounded: {
      type: Boolean,
    },
    active: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
    block: {
      type: Boolean,
    },
    href: {
      type: String,
    },
  },
  computed: {
    computedHref() {
      return this.disabled || this.loading ? undefined : this.href;
    },
  },
  methods: {
    onClick(evt: MouseEvent) {
      if (this.disabled || this.loading || this.active) {
        evt.preventDefault();
        return;
      }
      this.$emit("click", evt);
    },
  },
});
</script>
