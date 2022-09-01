/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-01 19:53:38
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-01 19:55:45
 * @FilePath: \basic\src\utils\websocket.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const socket = null;
export const connectSocket = () => {
  socket = new WebSocket(wsUrl);

  socket.onopen = function() {

  }

  socket.onmessage = function(msg) {

  }

  socket.onerror = function(err) {

  }
}