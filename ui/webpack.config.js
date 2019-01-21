const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'] },
      { test: /\.html$/,
        use: [{ loader: 'html-loader', options: { minimize: true } }] },
      { test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'] }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/build',
    publicPath: '',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
     template: "./src/index.html",
     filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './src',
    hot: true
  }
};