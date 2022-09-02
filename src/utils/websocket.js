/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-01 19:53:38
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-02 20:39:07
 * @FilePath: \basic\src\utils\websocket.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import store from '../store'

const wsUrl = import.meta.env.VITE_WS_URL

let socket = null

export const connectSocket = () => {
  socket = new WebSocket(wsUrl);

  socket.onopen = function() {
    console.log("connected");
    store.commit('ws/setWsState', true)
  }

  socket.onmessage = function(msg) {
    console.log("onmessage", msg);
    store.commit('ws/setWsToken', JSON.parse(msg.data).result)
  }

  socket.onerror = function(err) {
    console.log("error", err);
  }
}

export const sendSocketMessage = msg => {
  console.log(socket.readyState)
  //alert(JSON.stringify(msg))
  if (1 === socket.readyState) {
    socket.send(JSON.stringify(msg))
  }
}