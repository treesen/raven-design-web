import MyButton from "../components/button/button.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Example/Button",
  component: MyButton,
  tags: ["autodocs"],
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MyButton },
    template: '<my-button @onClick="onClick" v-bind="$props" />',
  }),
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select" },
      options: ["tiny", "small", "medium"],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Medium = {
  args: {
    size: "medium",
    label: "Medium",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Small",
  },
};
export const Tiny = {
  args: {
    size: "tiny",
    label: "Tiny",
  },
};

// export const Accessible = () => <button>Accessible button</button>;

// export const Inaccessible = () => (
//   <button style={{ backgroundColor: 'red', color: 'darkRed' }}>Inaccessible button</button>
// );
