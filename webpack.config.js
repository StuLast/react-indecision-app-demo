const path = require("path");

module.exports = {
  entry: {
    main: ["core-js/stable", "regenerator-runtime/runtime", "./src/app.js"],
  },
  output: {
    path: path.resolve(__dirname, "public_html/"),
    filename: "[name]-bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
           "style-loader",
           "css-loader",
           "sass-loader"
        ]
      }
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public_html/"),
      watch: true,
      publicPath: "/",
    },
    compress: true,
    port: 8080,
    hot: true
  },
  devtool: "eval-cheap-module-source-map",
};
