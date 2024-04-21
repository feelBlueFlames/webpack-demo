import * as _ from 'lodash'
import '@/assets/css/variables.css'
import '@/assets/css/index.css'
import '@/assets/css/index.scss'
import '@/assets/css/index.less'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
_.join([])
// import(/* webpackChunkName: "obj" */ './obj.js')
// 直接导入就可生效，与webpackPreload不同
// import(
//   /* webpackPrefetch: true */ /* webpackChunkName: "lodash" */ 'lodash'
// ).then(_ => {
//   console.log(_)
// })
console.log(process.env.NODE_ENV)
console.log(process.env.API_URL)
console.log(process.env.BASE_URL)
console.log(process.env.node_env)
// 使用webpack开发的npm demo包
import { numToWord } from 'ad-numbers'
console.log(numToWord(1))
const ab = () => {
  return new Promise((resolve, reject) => {
    if ([].includes(2)) {
      resolve(1)
    } else {
      reject(2)
    }
  })
}
ab()
