const path = require("path")
const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const extractCSS = new ExtractTextPlugin("[name].bundle.dev.css")

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: [
    "./main.js",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/assets/",
    filename: "[name].bundle.dev.js",
  },
  module: {
    rules: [ // rules =  loaders in Webpack 1
      {
        test: /\.js$/, // all .js files
        exclude: /node_modules/, // except those in node_modules/
        use: "babel-loader", // use babel
      },
      {
        test: /\.css$/,
        loader: extractCSS.extract({
          use: [
            {
              loader: "css-loader",
              options: { importLoaders: 1 },
            },
            {
              loader: "postcss-loader",
              options: {
                config: {
                  path: "./src/assets/styles/postcss.config.js",
                },
              },
            },

          ],
        }),
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    extractCSS,
  ],
  resolve: {
    extensions: [".js"],
  },
  devtool: "eval-source-map",

}
