const path = require("path");
const commonConfig = require("./webpack.common");
const merge = require("webpack-merge");
const mainConfig = {
  entry: "./src/client/client.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};

module.exports = merge(commonConfig, mainConfig);
