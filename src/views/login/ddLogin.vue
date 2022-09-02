<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-02 10:50:59
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-02 16:44:18
 * @FilePath: \basic\src\views\login\dingdingLogin.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- <section v-if="!state">
  </section> -->
  <a-spin tip="Loading..." v-if="!code">
    <section class="dd-loading-container"></section>
  </a-spin>
  <section class="dd-login-success" v-else>
    <img src="@/assets/login/unlock.png" alt="" class="logo">
    <p class="title">欢迎回来</p>
    <p class="des">已解除屏幕保护，祝你度过美好的一天</p>
  </section>
  <!-- {{code}}
  {{error}} -->
</template>

<script setup>
import { ref } from 'vue'
import * as dd from 'dingtalk-jsapi'
const corpId = import.meta.env.VITE_CORPID
const state = ref(false)
const code = ref(null)
const error = ref(null)

dd.ready(function() {
  dd.runtime.permission.requestAuthCode({
    corpId: corpId,
    onSuccess(res) {
      //alert('dd success: ' + JSON.stringify(res))
      setTimeout(() => {
        state.value = true
        code.value = res.code
      }, 1000)
      
    },
    onFail(err) {
      //alert('dd error: ' + JSON.stringify(err))
      state.value = false
      error.value = err
      code.value = null
    }
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