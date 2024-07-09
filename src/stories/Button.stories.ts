// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from "@storybook/vue";

import Button from "../components/button/Button.vue";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    docs: {
      controls: { exclude: ["style"] },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Radius: Story = {
  render: () => ({
    components: { Button },
    template: `
    <div class="component-wapper">
      <Button rounded label="rounded" />
      <Button label="normal" />
    </div>
    `,
  }),
};
export const Status: Story = {
  render: () => ({
    components: { Button },
    template: `
    <div class="component-wapper">
      <Button label="Normal" />
      <Button active label="Active" />
      <Button disabled label="Disabled" />
    </div>
    `,
  }),
};
export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
    <div class="component-wapper">
      <Button size="medium" label="Medium" />
      <Button size="small" label="Small" />
      <Button size="tiny" label="Tiny" />
    </div>
    `,
  }),
};
export const Variants: Story = {
  render: () => ({
    components: { Button },
    template: `
    <div class="component-wapper">
      <Button variant="clickthrough" label="clickthrough" href="javascript:void(0)" />
      <Button variant="negative" label="negative" />
      <Button variant="action" label="action" />
      <Button variant="attention" label="attention" />
      <Button variant="success" label="success" />
      <Button variant="selector" label="selector" />
      <Button variant="ghost" label="ghost" />
      <Button variant="cancel" label="cancel" />
      <Button variant="no-background" label="no-background" />
    </div>
    `,
  }),
};
