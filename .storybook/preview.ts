import type { Preview } from "@storybook/vue";
import { themes } from '@storybook/theming';
import "../src/style/index.scss";

const preview: Preview = {
  parameters: {
    darkMode: {
      current: 'light',
      dark: { ...themes.dark, appBg: '#1B1C1D' },
      light: { ...themes.normal, appBg: '#fff' },
      darkClass: 'lights-out',
      lightClass: 'lights-on',
      stylePreview: true,
      classTarget: 'html'
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
  },
};

export default preview;


// mute the defaultProps warning
const error = console.error;
console.error = (...args: any) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};
