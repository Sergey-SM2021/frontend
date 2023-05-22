import path from "path";
import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: (config) => {
    config.resolve?.modules?.push(path.resolve("src"));
    config.module?.rules?.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        { loader: "css-loader", options: { modules: true } },
        "sass-loader",
      ],
    });
    return config;
  },
};
export default config;
