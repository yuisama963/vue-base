<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-29 17:42:06
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-01 14:56:34
 * @FilePath: \basic\src\views\sys-mgmt\organization\components\setRoleDrawer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-drawer
    v-model:visible="visible"
    class="auto-width-drawer"
    placement="right"
    @close="onCloseDrawer"
  >
    <template #title>
      <a-row justify="space-between" align="middle">
        <span>角色配置</span>
        <a-button type="primary" @click="onConfirm">提交修改</a-button>
      </a-row>
    </template>
    <set-role
      :roleList="roleList"
      :selectedRoleList="selectedRoleList"
      @onReload="getAllRoleList"
      @onCloseAllDrawer="onCloseAllDrawer"
      ref="setRoleRef">
    </set-role>
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
  console.log('update')
  if (visible.value) {
    getAllRoleList()
  }
})

const selectedRoleList = computed(() => props.memberInfo.role)

const emits = defineEmits(['onCloseAllDrawer'])
const onCloseAllDrawer = () => {
  toggleDrawer(false)
  emits('onCloseAllDrawer')
}
const setRoleRef = ref(null)
// 关闭抽屉时清空修改
const onCloseDrawer = () => {
  setRoleRef.value.clearData()
}
// 提交修改
const onConfirm = () => {
  console.log(setRoleRef.value.selected)
}
</script>

<style lang="scss" scoped></style>