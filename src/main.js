/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-08 15:38:45
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-05 21:02:47
 * @FilePath: \basic\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入全局样式
import './styles/index.scss'
// 导入权限控制模块
//import './mock'
// import 'amfe-flexible'
//import { connectSocket } from './utils/websocket'

import './permission'

const app = createApp(App)
app
  .use(router)
  .use(store)
  .mount('#app')

//app.provide('socket', connectSocket)

