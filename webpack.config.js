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
    // Add this to generate your work_experience.html page
    new HtmlWebpackPlugin({
      template: "./src/work_experience.html",
      filename: "work_experience.html",
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
      directory: path.join(__dirname, "src"), // Serve all files in src (like CSS, images, etc.)
    },
    port: 8081,     // Keep your preferred port
    hot: true,
    open: true,     // Automatically open browser
  },
};
