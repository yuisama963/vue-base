<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-09 14:43:20
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-26 16:54:35
 * @FilePath: \basic\src\layout\components\Sidebar\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <a-layout-sider
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0, background: '#fff' }">
      <div class="logo">
        这里是logo
      </div>
      <sidebar-menu></sidebar-menu>
    </a-layout-sider>
</template>

<script setup>
import SidebarMenu from './SidebarMenu.vue'
</script>