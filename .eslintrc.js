module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    //继承Eslint中推荐的（打钩的）规则项
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  //解析.vue后缀文件，使得eslint能解析<template>标签中的内容
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    // 解析vue文件中<script>标签中的代码
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // semi: [2, 'always'], // 语句强制分号结尾
    // quotes: [2, 'double'], // 引号类型 ""
    // 'no-alert': 0, // 禁止使用alert
    // 'no-console': 2, // 禁止使用console
    'no-const-assign': 2, // 禁止修改const声明的变量
    // 'no-debugger': 2, // 禁止使用debugger
    'no-duplicate-case': 2, // switch中的case标签不能重复
    'no-extra-semi': 2, // 禁止多余的冒号
    'no-multi-spaces': 1 // 不能用多余的空格
  },
  ignorePatterns:['webpack.config.js','config/**','dist']
}
