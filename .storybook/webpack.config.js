const path = require('path');
const merge = require('webpack-merge');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = (baseConfig, env, defaultConfig) => {
  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: require.resolve('awesome-typescript-loader'),
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx'],
    },
    plugins: [new TSDocgenPlugin()],
  });
};
