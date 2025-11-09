// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    // Main page
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "index.html",
    }),
    // Work Experience page
    new HtmlWebpackPlugin({
      template: "./src/work_experience.html",
      filename: "work_experience.html",
    }),
    // ✅ Add Certificate page
    new HtmlWebpackPlugin({
      template: "./src/certificate.html",
      filename: "certificate.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    port: 8081,
    hot: true,
    open: true,
  },
};
