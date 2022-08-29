<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-26 20:09:26
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-29 11:35:30
 * @FilePath: \basic\src\components\SetRole\roleItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-row justify="space-between" class="role-item margin-bottom-8" :class="{active: isActive}">
    <span class="role-name">{{ role.name }}</span>
    <a-button type="link" @click.prevent="go">角色详情</a-button>
  </a-row>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
const props = defineProps({
  role: {
    type: Object
  },
  isActive: {
    type: Boolean
  }
})

const router = useRouter()
const emits = defineEmits(['onCloseDialog'])
const go = () => {
  emits('onCloseDialog')
  router.push('/edit-role')
}
</script>

<style lang="scss" scoped>
.role-item {
  height: 48px;
  border: 1px solid $colorNeutral5;
  align-items: center;
  padding: 0 16px;
  .role-name {
    color: #000000;
    font-size: 14px;
  }
  &.active {
    border: 2px solid $themeColor;
  }
}
</style>