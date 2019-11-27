const path = require('path')
const fs = require('fs')

const appDir = fs.realpathSync(process.cwd())
const resolve = relativePath => path.resolve(appDir, relativePath)

module.exports = {
  appBuild: resolve('dist'),
  appPublic: resolve('public'),
  appIndex: resolve('src/index.tsx'),
  appHtml: resolve('public/index.html'),
  appSrc: resolve('src'),
}