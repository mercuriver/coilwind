const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

console.log('## start log');
console.log(__dirname);
console.log(path.resolve(__dirname, ".env.development"));


module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 3000,
    hot: true,
    // open: true,
    publicPath: "/",
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: "development",
    //   }
    // }),
    new Dotenv(),
    // new Dotenv({
    //   path: path.resolve(__dirname, ".env.development"),
    // }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});

console.log(module.exports.plugins);


console.log('## end log');