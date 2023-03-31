const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = ({ development }) => ({
  entry: "./src/validate.ts",
  devtool: development ? "inline-source-map" : false,
  mode: development ? "development" : "production",
  output: {
    filename: "validate.js",
    path: path.resolve(__dirname, "dist"),
    library: "form-validate",
    libraryExport: "default",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "typeof self === 'undefined' ? this : self",
  },
  resolve: {
    extensions: [".ts"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "package.json"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
    ],
  },
});