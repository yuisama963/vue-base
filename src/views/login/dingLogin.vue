<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-01 19:00:59
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-02 16:09:09
 * @FilePath: \basic\src\views\login\dingLogin.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login-wrapper">
    <div class="des">
      <img src="@/assets/login/logo.png" alt="" class="logo">
      <p class="title">HOLD-YOU 货有友</p>
      <p class="mark">以货为友·生态共享</p>
    </div>
    <div class="login-button-wrapper">
      <img src="@/assets/login/login-btn.png" alt="" @click="openDing" class="login-btn">
    </div>
  </div>
</template>

<script setup>
const openDing = () => {
  window.location = 'dingtalk://dingtalkclient/action/openapp?corpid=ding5ea649d660e6e6934ac5d6980864d335&container_type=work_platform&app_id=0_1764414482&redirect_type=jump&redirect_url=http://192.168.1.119:6003/dd-login'
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