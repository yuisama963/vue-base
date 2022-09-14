<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-29 17:42:06
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-13 20:17:42
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
        <span>添加车辆</span>
        <a-button type="primary" @click="onConfirm">添加</a-button>
      </a-row>
    </template>
    <div class="info mb24">
      <p>添加后，在任何需要指派司机的场景都能
快速地将运单指派给他们</p>
    </div>
    <a-input
      v-model:value="formData.carNo"
      placeholder="请输入车牌号"
      class="mb16"
    />
    <a-textarea
      v-model:value="formData.des"
      placeholder="请输入备注"
    />
  </a-drawer>
</template>

<script setup>
import { ref } from 'vue'
import useDrawer from '@/hooks/useDrawer'

const { visible, toggleDrawer } = useDrawer()
defineExpose({
	toggleDrawer
})

const formData = ref({
  carNo: null,
  des: null
})

const emits = defineEmits(['onCloseAllDrawer', 'onAddCar'])
const onCloseAllDrawer = () => {
  toggleDrawer(false)
  emits('onCloseAllDrawer')
}

// 
const onConfirm = () => {
  emits('onAddCar', {data: formData.value})
}

</script>

<style lang="scss" scoped>
.info {
  width: 100%;
  background: $themeColor;
  color: #fff;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  padding: 16px;
}
</style>