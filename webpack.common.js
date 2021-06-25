const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/index.tsx"]
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
        exclude: /node_modules/
      },
      { 
        test: /\.(bmp|gif|jpeg|jpg|png)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", "tsx"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
    }),
    new CleanWebpackPlugin(),
  ],



}