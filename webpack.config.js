"use strict";

const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/app.js"],
  output: {
    chunkFilename: "assets/js/[name].[hash].js",
    filename: "assets/js/[name].[hash].js"
  },
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.js$/,
        use: "babel-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
      inject: true
    })
  ]
};
