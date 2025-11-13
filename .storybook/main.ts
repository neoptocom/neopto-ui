import reactDocgenTypescript from "@joshwooding/vite-plugin-react-docgen-typescript";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: [
    "../src/components/**/*.stories.@(ts|tsx|mdx)",
    "../src/stories/**/*.stories.@(ts|tsx|mdx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-interactions"
  ],
  docs: { autodocs: true },
  async viteFinal(baseConfig) {
    baseConfig.plugins = baseConfig.plugins ?? [];
    baseConfig.plugins.push(
      reactDocgenTypescript({
        tsconfigPath: "tsconfig.json",
        include: ["src/components/**/*.tsx"],
        shouldExtractLiteralValuesFromEnum: true,
        shouldRemoveUndefinedFromOptional: true,
        propFilter: (prop) =>
          prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
      })
    );

    return baseConfig;
  }
};

export default config;
