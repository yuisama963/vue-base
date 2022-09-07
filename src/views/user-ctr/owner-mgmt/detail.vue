<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-06 16:45:52
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-07 20:14:54
 * @FilePath: \basic\src\views\user-ctr\owner-mgmt\detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<a-tabs
      v-model:activeKey="activeKey"
    >
      <a-tab-pane :tab="`基础信息`" :key="1">
      <div class="basic-info"></div>
        <RegisterForm />
        <a-switch></a-switch>
      </a-tab-pane>
      <a-tab-pane :tab="`参数配置`" :key="2">
      <div class="param-setting">
        <a-form>
          
        </a-form>
      </div>
      </a-tab-pane>
      <a-tab-pane :tab="`功能配置`" :key="3">
      <div class="func-setting"></div>
      </a-tab-pane>
    </a-tabs>

</template>

<script setup>
import registerForm from './components/registerForm.vue'
import { ref } from 'vue'
import RegisterForm from './components/registerForm.vue'
const activeKey = ref(1)
</script>