// 下面这行用于 vscode 中智能化自动提示 webpack 配置项
/**
 * @type {import('webpack').Configuration}
 * */
const config = {
  mode: 'development',
  devServer: {
    port: 8888
  },
  devtool: 'inline-source-map'
}
// 直接导出，智能提示不生效，es导出方式可以生效
// module.exports = {}

module.exports = config
