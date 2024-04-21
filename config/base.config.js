const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { DefinePlugin } = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin');
// 方式一：内部调用DefinePlugin
const DotenvWebpack = require('dotenv-webpack')
// 方式二：结合dotenv、DefinePlugin注册全局环境变量
const dotenv = require('dotenv')
const envPath = path.resolve(__dirname, '../.env.' + process.env.NODE_ENV)
const env = Object.assign(
  // 读取公共环境变量文件
  dotenv.config({ path: path.resolve(__dirname, '../.env') }).parsed,
  // 读取当前NODE_ENV环境变量
  dotenv.config({ path: envPath }).parsed
)
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})

// 下面这行用于 vscode 中智能化自动提示 webpack 配置项
/**
 * @type {import('webpack').Configuration}
 * */
const config = {
  entry: {
    main: path.resolve(__dirname, '../src/main.ts')
    // shared: ['lodash', path.resolve(__dirname, '../src/obj.js')], // 分离共享模块
    // main: {
    //   import: path.resolve(__dirname, '../src/main.js'),
    //   dependOn: ['shared']
    // },
    // index: {
    //   import: path.resolve(__dirname, '../src/index.js'),
    //   dependOn: 'shared'
    // }
  },
  output: {
    path: path.resolve(__dirname, '../dist'), //打包输出目录
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].js',
    clean: true // 打包前清除dist 目录（webpack内置clean-webpack-plugin插件功能）
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      title: 'DEMO',
      favicon: path.resolve(__dirname, '../public//favicon.ico'),
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      minify: false // 是否压缩打包后的html
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new CssMinimizerPlugin(),
    new DefinePlugin({
      // webpack内部根据mode设置process.env.NODE_ENV的值
      'process.env.node_env': '"api"',
      ...envKeys
    }),
    // 自动读取环境变量文件再注册
    new DotenvWebpack({
      path: envPath
    }),
    new ESLintPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(?:js|mjs|cjs|ts)$/,
        //确保 JS 的转译应用到 node_modules 的 Vue 单文件组件
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  optimization: {
    // moduleIds:"",
    minimize: false, //阻止代码压缩
    // 分割webpack运行时代码
    // runtime：webpack的运行环境（具体作用就是模块解析，加载）和模块信息清单（每次有模块变更就会更新），单独打包后有利于缓存
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // 抽取第三方模块
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}
// 直接导出，智能提示不生效，es导出方式可以生效
// module.exports = {}

module.exports = config
