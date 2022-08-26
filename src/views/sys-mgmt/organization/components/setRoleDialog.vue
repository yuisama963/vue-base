<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-26 13:48:32
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-26 20:08:34
 * @FilePath: \basic\src\views\sys-mgmt\organization\components\setRoleDialog.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-modal
    v-model:visible="visible"
    :width="520"
    title="角色配置"
  >
    <set-role :roleList="roleList" :selectedRoleList="selectedRoleList" @onReload="getAllRoleList"></set-role>
    <template #footer>
      <a-button type="primary" @click="onConfirm">确认修改</a-button>
    </template>
  </a-modal>
</template>

<script setup>
import { ref, onMounted, onUpdated, computed } from 'vue'
import useDialog from '@/hooks/useDialog'
import useGetAllRoleList from '@/hooks/useGetAllRoleList'

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
// const roleList = ref([])
// const getAllRoleList = async () => {
//   const { data } = await getRoleListData()
//   roleList.value = data
// }

const { visible, toggleDialog } = useDialog()
defineExpose({
	toggleDialog
})

const onConfirm = () => {
  
}
</script>

<style lang="scss" scoped>
</style>