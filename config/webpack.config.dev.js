const webpack = require('webpack')
const merge = require('webpack-merge')

const path = require('./path')
const baseConfig = require('./webpack.config.base')

module.exports = merge.smart(baseConfig, {
  mode: 'development',
  entry: path.appIndex,
  output: {
    filename: 'dist/js/[name].[hash:8].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    // historyApiFallback: true, // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
    disableHostCheck: true,
    host: 'localhost',
    port: '8000',
    inline: true,
    hot: true,
    proxy: {
      '/api': {
        // 这里改为项目后端 API 接口 Host
        target: 'http://backend.api.host',
        // 支持跨域调用
        changeOrigin: true,
      }
    }
  }
})