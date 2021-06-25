module.exports = {
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
    }
  }
}