/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-24 17:45:35
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-05 18:01:21
 * @FilePath: \basic\src\utils\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { message as AndMessage } from 'ant-design-vue'
import { isCheckTimeout } from '@/utils/auth'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    console.log(config)
    // 在这个位置需要统一的去注入token
    if (store.getters.token) {
      // if (isCheckTimeout()) {
      //   //登出操作
      //   router.push('/login')
      //   return Promise.reject(new Error('token 失效'))
      // }
      // 如果token存在 注入token
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config // 必须返回配置
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    console.log(response)
    if (response.status === 204) {
      return 'success'
    }
    const { success, message, data } = response.data
    //   要根据success的成功与否决定下面的操作
    if (success) {
      return response.data
    } else {
      // 业务错误
      AndMessage.error(message) // 提示错误消息
      return Promise.reject(new Error(message))
    }
  },
  error => {
    //console.error(error)
    // 403 跳转登录页面
    if (
      error.response &&
      error.response.status === 403
    ) {
      // token超时
      //store.dispatch('user/logout')
      router.push('/login')
    }
    AndMessage.error(error.message) // 提示错误消息
    return Promise.reject(error)
  }
)

export default service