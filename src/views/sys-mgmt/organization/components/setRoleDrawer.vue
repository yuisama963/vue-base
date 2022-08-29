<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-29 17:42:06
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-29 20:59:56
 * @FilePath: \basic\src\views\sys-mgmt\organization\components\setRoleDrawer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-drawer
    v-model:visible="visible"
    class="auto-width-drawer"
    placement="right"
  >
    <template #title>
      <a-row justify="start">
        <span>角色配置</span>
        <a-button type="primary" @click="onConfirm">提交修改</a-button>
      </a-row>
    </template>
    <set-role :roleList="roleList" :selectedRoleList="selectedRoleList" @onReload="getAllRoleList" @onCloseDialog="toggleDialog(false)"></set-role>
  </a-drawer>
</template>

<script setup>
import { ref, onMounted, onUpdated, computed } from 'vue'
import useGetAllRoleList from '@/hooks/useGetAllRoleList'
import useDrawer from '@/hooks/useDrawer'

const { visible, toggleDrawer } = useDrawer()
defineExpose({
	toggleDrawer
})

const props = defineProps({
  memberInfo: {
    type: Object
  }
})
const { roleList, getAllRoleList } = useGetAllRoleList()
onUpdated(() => {
  getAllRoleList()
})

const selectedRoleList = computed(() => props.memberInfo.role)


const onConfirm = () => {
  
}
</script>

<style lang="scss" scoped></style>