const path = require("path");

module.exports = {
  entry: "./src/javascript/index.js",
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "[name].[contenthash].js",
  },
};
