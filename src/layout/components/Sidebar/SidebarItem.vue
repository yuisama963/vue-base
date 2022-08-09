<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-09 14:44:06
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-09 15:01:22
 * @FilePath: \basic\src\layout\components\Sidebar\SidebarItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- 支持渲染多级 menu 菜单 -->
  <template v-if="route.children && route.children.length > 0">
    <a-sub-menu :key="route.id">
      <template #title>
        <span>{{ route.name }}</span>
      </template>
      <!-- 循环渲染 -->
      <sidebar-item
        v-for="item in route.children"
        :route="item"
      ></sidebar-item>
    </a-sub-menu>
  </template>
  <template v-else>
    <!-- 渲染 item 项 -->
    <a-menu-item :key="route.id">
      <!-- <span>{{ route.name }}</span> -->
      <!-- {{route}} -->
      <menu-item :route="route"></menu-item>
    </a-menu-item>
  </template>
</template>

<script setup>
import MenuItem from './MenuItem.vue'

// 定义 props
const props = defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>