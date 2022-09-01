<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-26 14:55:38
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-01 18:39:06
 * @FilePath: \basic\src\views\sys-mgmt\role-mgmt\detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="基础信息">
          <p>基础信息</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="功能权限">
          <p>功能权限</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="数据权限">
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>
    <footer>
      <a-button type="primary" html-type="submit">创建</a-button>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const formData = ref({
  roleName: '',
  roleDes: ''
})
</script>

<style lang="scss" scoped>
.role-name-input {
  width: 400px;
}
.role-des-input {
  width: 506px;
}
</style>