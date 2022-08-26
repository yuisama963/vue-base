<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-26 14:55:38
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-26 15:59:12
 * @FilePath: \basic\src\views\sys-mgmt\role-mgmt\detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-form :model="formData">
    <a-row justify="space-between">
      <a-form-item
        label="角色名称"
        name="roleName"
        :rules="[{ required: true, message: 'Please input your username!' }]">
        <a-input
          placeholder="请输入角色名称"
          v-model:value="formData.roleName"
          class="role-name-input"
        ></a-input>
      </a-form-item>
      <a-form-item label="角色备注" name="roleDes">
        <a-input placeholder="请输入角色备注" v-model:value="formData.roleDes" class="role-des-input"></a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">创建</a-button>
      </a-form-item>
    </a-row>
    <!-- 菜单权限 -->
    <section>

    </section>
    <!-- 功能权限 -->
    <section>

    </section>
    <!-- 数据权限 -->
    <section>

    </section>
  </a-form>
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