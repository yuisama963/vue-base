<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-02 10:50:59
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-15 17:21:01
 * @FilePath: \basic\src\views\login\dingdingLogin.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-spin tip="Loading..." v-if="!code">
    <section class="dd-loading-container"></section>
  </a-spin>
  <section class="dd-login-success" v-else>
    <img src="@/assets/login/unlock.png" alt="" class="logo">
    <p class="title">欢迎回来</p>
    <p class="des">已解除屏幕保护，祝你度过美好的一天</p>
    <p>{{token}}</p>
    <p>{{code}}</p>
  </section>
  
  <!-- {{error}} -->
  <!-- {{window.location}} -->
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as dd from 'dingtalk-jsapi'
import { getQueryString } from '@/utils/util'
import { inject } from 'vue'
const socket = inject('ws')

// const wsUrl = process.env.VITE_WS_URL
// let socket = null
// socket = new WebSocket(wsUrl)
socket.onopen = function() {
    //alert("connected");
}
socket.onmessage = function(msg) {
  console.log(msg)
  let str = JSON.stringify(msg.data)
  //alert(JSON.stringify(str))
}

socket.onerror = function(err) {
  //alert('dd error: ' + JSON.stringify(err));
}
// 企业id
const corpId = process.env.VITE_CORPID
// 第三方授权码
const code = ref(null)
const error = ref(null)
// 未确认的令牌
const token = ref(null)

onMounted(() => {
  dd.ready(function() {
    dd.runtime.permission.requestAuthCode({
      corpId: corpId,
      onSuccess(res) {
        //alert(window.location.search)
        //alert('dd success: ' + JSON.stringify(res))
        setTimeout(() => {
          code.value = res.code
          token.value = getQueryString(window.location.search, 'token')
          const data = JSON.stringify({
            params: [
              token.value, // 访问令牌
              res.code, // 第三方授权码
              1 // 平台类型
            ],
            jsonrpc: "2.0",
            method: "AccessToken.Accept",
          })
          //alert(data)
          socket.send(data)
        }, 1000)
        
      },
      onFail(err) {
        //alert('dd error: ' + JSON.stringify(err))
        error.value = err
        code.value = null
      }
    })
  })
})

</script>

<style lang="scss" scoped>
  .dd-loading-container {
    width: 500px;
    height: 500px;
  }
  .logo {
    margin: 200px auto 32px;
    width: 55px;
  }
  .title {
    font-family: 'Roboto';
    font-size: 32px;
    font-weight: 600;
    line-height: 46px;
    margin-bottom: 16px;
    color: #434343;
  }
  .dd-login-success {
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .des {
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    margin-bottom: 16px;
    color: #434343;
  }
</style>