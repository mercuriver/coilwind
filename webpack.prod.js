const path = require("path");
const Dotenv = require("dotenv-webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    chunkFilename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial"
      // cacheGroups: {
      //   commons: {
      //     test: /[\\/]node_modules[\\/]/,
      //     name: "vendors",
      //     chunks: "all",
      //     minSize: 10000,
      //     maxSize: 250000,
      //   },
      // },
    }, 
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "./.env.production"),
    }),
  ],
});