module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 3000,
    hot: true,
    open: true,
    publicPath: "/",
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "./.env.development"),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}