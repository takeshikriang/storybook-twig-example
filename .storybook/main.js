// Extending Storybook’s webpack config: https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/assets/tailwind.css'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.twig$/,
      use: {
        loader: 'twig-loader'
      }
    });
    return config;
  }
};
