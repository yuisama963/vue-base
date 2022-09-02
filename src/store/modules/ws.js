/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-02 19:25:09
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-02 20:15:51
 * @FilePath: \basic\src\store\modules\ws.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { sendSocketMessage } from "@/utils/websocket";

export default {
  namespaced: true,
  state: () => ({
    connected: false,
    code: null, // 第三方授权码
    token: null, // 访问令牌
    id: null
  }),
  mutations: {
    setWsState(state, payload) {
      state.connected = payload;
      const id = new Date().getTime()
      state.id = id
      sendSocketMessage({ jsonrpc: "2.0", id, method: "AccessToken.Create" })
    },
    setWsCode(state, payload) {
      console.log('setcode')
      state.code = payload;
      
    },
    setWsToken(state, payload) {
      console.log('state', payload)
      state.token = payload;
    }
  },
  actions: {
    // setWsState(state, payload) {
    //   this.commit('user/setToken', '')
    // },
    // setWsCode(state, payload) {
    //   state.code = payload;
    // },
    // setWsToken(state, payload) {
    //   state.token = payload;
    // }
  }
}