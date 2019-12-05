const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const path = require('./path')

const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: path.appIndex,
  output: {
    path: path.appBuild,
    filename: 'dist/js/[name].[hash:8].js',
  },
  optimization: {
    // minimizer: [
    //   new UglifyJsPlugin({
    //     cache: true,
    //     parallel: true,
    //     sourceMap: true
    //   })
    // ],
    splitChunks: {
      // 切割代码块，提取为独立的chunk文件
      chunks: 'all'
    }
  },
  plugins: [
    // 每次打包之前，清空上次编译的文件
    new CleanWebpackPlugin()
  ]
})