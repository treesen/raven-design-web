import type { Meta, StoryObj } from "@storybook/vue";

import Button from "../components/button/button.vue";
import ButtonGroup from "../components/button/button-group.vue";
import IconStar from "../components/icon/icon-star-outline.vue";
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
    components: { Button, IconStar },
    template: `
    <div class="component-wapper">
      <Button size="medium" label="Medium" >
                          <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button size="small" label="Small" >
                          <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button size="tiny" label="Tiny" >
                    <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
    </div>
    `,
  }),
};
export const Variants: Story = {
  render: () => ({
    components: { Button, IconStar },
    template: `
    <div class="component-wapper">
      <Button variant="clickthrough" label="clickthrough" href="javascript:void(0)">
        <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button variant="negative" label="negative" >
        <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button variant="action" label="action" >
              <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button variant="attention" label="attention" >
              <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button variant="success" label="success" >
              <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button variant="selector" label="selector" >
              <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button variant="ghost" label="ghost" >
              <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button variant="cancel" label="cancel" >
              <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button variant="no-background" label="no-background">
              <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
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
        <Button size="small" rounded label="<" />
        <Button size="small" label="1" />
        <Button size="small" label="2" />
        <Button size="small" rounded label=">" />
      </ButtonGroup>
    </div>
    `,
  }),
};
