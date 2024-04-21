const { merge } = require('webpack-merge')
const baseConfig = require('./config/base.config')
const devConfig = require('./config/dev.config')
const buildConfig = require('./config/build.config')
const path = require('path')

// 加载.env配置
module.exports = ({ development, ...rest }) => {
  // webpack.config.js是运行在node的,所以这里的环境变量需要通过命令行来设置
  // eg: cross-env NODE_ENV=production 或者  --node-env production
  console.log(process.env.NODE_ENV, rest)
  return merge(baseConfig, development ? devConfig : buildConfig)
}
