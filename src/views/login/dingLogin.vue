<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-01 19:00:59
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-01 19:08:05
 * @FilePath: \basic\src\views\login\dingLogin.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<a-button @click="openDing">登录</a-button>
</template>

<script setup>
const openDing = () => {
  window.location = 'dingtalk://dingtalkclient/action/openapp?corpid=ding5ea649d660e6e6934ac5d6980864d335&container_type=work_platform&app_id=0_1764414482&redirect_type=jump&redirect_url=/'
}
</script>