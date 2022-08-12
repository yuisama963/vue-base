<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-25 15:42:22
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-12 15:39:42
 * @FilePath: \basic\src\layout\components\Avatar\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      <a-avatar shape="square" :size="30" style="background: #1890FF;border-radius: 4px;">
        名字字
      </a-avatar>
    </a>
    
    <template #overlay>
      <a-menu>
        <a-menu-item key="0">
          <a href="http://www.alipay.com/">个人资料</a>
        </a-menu-item>
        <a-menu-item key="1">
          <a href="http://www.taobao.com/">退出系统</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script setup>
import { UserOutlined } from '@ant-design/icons-vue';
</script>