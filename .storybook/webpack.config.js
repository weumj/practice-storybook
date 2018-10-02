const path = require("path");
const merge = require("webpack-merge");

module.exports = (baseConfig, env, defaultConfig) => {
  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: require.resolve("awesome-typescript-loader")
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx"]
    }
  });
};
