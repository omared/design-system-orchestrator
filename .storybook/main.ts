import type { StorybookConfig } from '@storybook/angular';
import * as path from 'path';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/angular",
    options: {}
  },

  webpackFinal: async (config) => {
    // Agregar includePaths para que Storybook resuelva @use 'tokens/variables'
    const rules = config.module?.rules as any[];
    const scssRule = rules?.find(r => r?.test?.toString().includes('scss'));

    if (scssRule?.use) {
      scssRule.use.forEach((loader: any) => {
        if (loader?.loader?.includes('sass-loader')) {
          loader.options = {
            ...loader.options,
            sassOptions: {
              ...loader.options?.sassOptions,
              includePaths: [path.resolve(__dirname, '../src/styles')],
            },
          };
        }
      });
    }

    return config;
  },
};

export default config;
