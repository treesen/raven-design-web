import type { StorybookConfig } from "@storybook/vue-webpack5";

const config: StorybookConfig = {
  staticDirs: [
    { from: "../src/fonts", to: "/fonts" },
    { from: "../src/stories/assets", to: "/assets" },
  ],
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    // "@storybook/addon-interactions",
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
        actions: false,
      },
    },
    "storybook-dark-mode",
    // "@storybook/addon-storysource",
  ],
  framework: {
    name: "@storybook/vue-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal(config) {
    config.module?.rules?.push({
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: { implementation: require.resolve("sass") },
        },
      ],
    });
    return config;
  },
};

export default config;
