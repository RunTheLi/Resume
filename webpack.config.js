// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // clean dist folder before each build
  },
  plugins: [
    // Main page (keep as template.html)
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "index.html", // changed from index.html
    }),
    // Work Experience page
    new HtmlWebpackPlugin({
      template: "./src/work_experience.html",
      filename: "work_experience.html",
    }),
    // Certificate page
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
};
