/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-01 19:53:38
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-06 14:38:45
 * @FilePath: \basic\src\utils\websocket.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import store from '@/store'
import { cookie } from '@/api/sys'


let socket = null
let lockReconnect = false
let timer

export const connectSocket = () => {
  const wsUrl = process.env.VITE_WS_URL
  if (socket && socket.readyState == 1) {
    console.log('socket', socket)
    return socket
  } else {
    socket = new WebSocket(wsUrl)
    console.log('nosocket', socket)
  }

  socket.onopen = function() {
    console.log("connected");
    store.commit('ws/setWsState', true)
  }

  socket.onmessage = async function(msg) {
    console.log("onmessage", msg);
    // const data = JSON.parse(msg.data)
    // if (data.result) {
    //   store.commit('ws/setWsToken', JSON.parse(msg.data).result)
    // } else if (data.method === 'AccessToken.OnAccepted') {
    //   store.commit('user/setToken', JSON.parse(msg.data).params[0])
    //   await cookie()
    // }
  }

  socket.onerror = function(err) {
    console.log("error", err)
    reconnect()
  }

  socket.onclose = function() {
    console.log("close")
    reconnect()
  }

  //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
  // window.onbeforeunload = function () {
  //     socket.close()
  // }

  return socket
}

// 断线重连
const reconnect = () => {
  console.log('reconnect')
  if (lockReconnect) return
  lockReconnect = true
  clearTimeout(timer)
  timer = setTimeout(() => {
    connectSocket()
    lockReconnect = false
  }, 4000)
}

export const sendSocketMessage = (socket, msg) => {
  console.log('send state', socket.readyState)
  //alert(JSON.stringify(msg))
  if (1 === socket.readyState) {
    socket.send(JSON.stringify(msg))
  }
}