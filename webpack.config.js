const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.tsx",
  },
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true,
              },
            },
          },
        },
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "Minimal Typescript Starter",
      template: "./src/index.html",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
};
