<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-01 19:00:59
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-13 15:15:06
 * @FilePath: \basic\src\views\login\dingLogin.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { sendSocketMessage } from "@/utils/websocket"
import { cookie } from '@/api/sys'
import { inject } from 'vue'

const router = useRouter()

const ws = inject('ws')
ws.onopen = function () {
  console.log('onopen')
}
ws.onmessage = async function (msg) {
  console.log("onmessage", msg);
  const data = JSON.parse(msg.data)
  if (data.result) {
    store.commit('ws/setWsToken', JSON.parse(msg.data).result)
    openDing()
  } else if (data.method === 'AccessToken.OnAccepted') {
    store.commit('user/setToken', JSON.parse(msg.data).params[0])
    const res = await cookie()
    if (res === 'success') {
      router.push('/dashboard')
    }
  }
}


 // step1 连接ws
//connectSocket()
const store = useStore()
const corpId = process.env.VITE_CORPID

const getToken = () => {
  const id = new Date().getTime()
  ws.send(JSON.stringify({ jsonrpc: "2.0", id, method: "AccessToken.Create" }))
  //sendSocketMessage(ws, { jsonrpc: "2.0", id, method: "AccessToken.Create" })
}
const openDing = () => {
  // sendSocketMessage({ jsonrpc: "2.0", id: 1, method: "AccessToken.Create" })
  const url = encodeURIComponent(`http://192.168.1.119:6003/dd-login?token=${store.getters.wsToken}`)
  window.location = `dingtalk://dingtalkclient/action/openapp?corpid=${corpId}&container_type=work_platform&app_id=0_1764414482&redirect_type=jump&redirect_url=${url}`
}

const login = () => {
  getToken()
  
}
</script>

<template>
  <div class="login-wrapper">
    <div class="des">
      <img src="@/assets/login/logo.png" alt="" class="logo">
      <p class="title">HOLD-YOU 货有友</p>
      <p class="mark">以货为友·生态共享</p>
    </div>
    <div class="login-button-wrapper">
      <img src="@/assets/login/login-btn.png" alt="" @click="login" class="login-btn">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-wrapper {
  margin: auto;
  display: flex;
  width: 800px;
  padding-top: 220px;
}
.des {
  color: #000000;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  margin-right: 280px;
  .logo {
    width: 106px;
  }
  .title {
    font-size: 38px;
  }
  .mark {
    font-size: 22px;
  }
}
.login-btn {
  width: 280px;
  cursor: pointer;
}
</style>