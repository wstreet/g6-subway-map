const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./path');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': paths.appSrc
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: "pre"
      },
      {
        test: /\.(tsx|ts)/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React app',
      template: paths.appHtml,
      // inject: true,
    })
  ]
}