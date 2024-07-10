import type { Meta, StoryObj } from "@storybook/vue";

import Button from "../components/button/button.vue";
import ButtonGroup from "../components/button/button-group.vue";

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
    methods: {
      onClick() {
        console.log(1);
      },
    },
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

export const Group: Story = {
  render: () => ({
    components: { Button, ButtonGroup },
    template: `
    <div class="component-wapper">
      <ButtonGroup>
        <Button rounded label="<" />
        <Button label="1" />
        <Button label="2" />
        <Button rounded label=">" />
      </ButtonGroup>
    </div>
    `,
  }),
};
