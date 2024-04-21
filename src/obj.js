// 入口文件直接导入，webpackPreload并不能生效
import(
  /* webpackPreload: true */ /* webpackChunkName: "jquery" */ 'jquery'
).then(($) => {
  console.log($)
})
