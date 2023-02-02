const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // CSS를 자바스크립트 번들에 포함하지 않고 별도의 파일로 분리
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // CSS 최적화, 최소화
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // output.path 속 파일들 제거 (이전 번들 결과 제거용)

module.exports = {
  entry: "./src/javascript/index.js",
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
      // new CssMinimizerPlugin(),
    ],
  },
};
