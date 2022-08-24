<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-09 14:43:20
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-24 15:27:32
 * @FilePath: \basic\src\layout\components\Sidebar\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <a-layout
      class="sider-wrapper">
      <div class="logo-wrapper">
        <img src="" alt="">
        <h5 class="title">平台管理后台</h5>
      </div>
      <sidebar-menu></sidebar-menu>
    </a-layout>
</template>

<script setup>
import SidebarMenu from './SidebarMenu.vue'
</script>

<style lang="scss" scoped>
// 固定侧边栏
.sider-wrapper {
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  z-index: 1;
  width: 208px!important;
}
.logo-wrapper {
  display: flex;
  padding: 16px 32px 16px 24px;
  .title {
    font-family: 'Roboto';
    font-size: 18px;
    color: #1890FF;
    font-weight: 700;
  }
}
</style>