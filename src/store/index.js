/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-09 18:09:25
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-09 10:54:24
 * @FilePath: \basic\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore } from 'vuex'
import getters from './getters'
import user from './modules/user'
import permission from './modules/permission'
import app from './modules/app'

export default createStore({
  getters,
  modules: {
    user,
    permission,
    app
  }
})