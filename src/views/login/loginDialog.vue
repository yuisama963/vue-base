<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-15 14:04:28
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-15 17:19:26
 * @FilePath: \basic\src\views\login\loginDialog.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<a-modal v-model:visible="$store.getters.loginModalShow" :footer="null" :keyboard="false" :closable="false" width="100%" wrap-class-name="full-modal">
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
</a-modal>
</template>

<script setup>
import { useStore } from 'vuex'
import { cookie } from '@/api/sys'
import { inject } from 'vue'
import router from '../../router';

const ws = inject('ws')

// const wsUrl = process.env.VITE_WS_URL
// let ws = null
// ws = new WebSocket(wsUrl)
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
      store.commit('app/triggerLoginModal', false)
      router.push('/')
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
<style lang="scss">
.full-modal {
  .ant-modal {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }
  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
  }
  .ant-modal-body {
    flex: 1;
  }
}
</style>