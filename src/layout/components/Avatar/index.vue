<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-25 15:42:22
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 16:04:48
 * @FilePath: \basic\src\layout\components\Avatar\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-row justify="end">
  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" @click.prevent>
      <a-avatar>
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </a>
    
    <template #overlay>
      <a-menu>
        <a-menu-item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </a-menu-item>
        <a-menu-item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">3rd menu item</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</a-row>
</template>

<script setup>
import { UserOutlined } from '@ant-design/icons-vue';
</script>