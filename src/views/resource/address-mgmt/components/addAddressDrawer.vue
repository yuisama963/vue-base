<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-29 17:42:06
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-14 17:31:53
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
        <span>新增地址</span>
        <a-button type="primary" @click="onConfirm">新增</a-button>
      </a-row>
    </template>
    <a-form layout="vertical" :model="formData">
      <a-form-item label="地址简称">
        <a-input v-model:value="formData.carNo" placeholder="请输入地址名称" />
      </a-form-item>
      <a-form-item label="所在地">
        <a-input v-model:value="formData.carNo" placeholder="请选择所在地" />
      </a-form-item>
      <a-form-item label="详细地址">
        <a-input v-model:value="formData.carNo" placeholder="请输入详细地址" />
      </a-form-item>
      <a-form-item label="经纬度坐标">
        <a-input-search v-model:value="formData.carNo" placeholder="输入详细地址获取坐标" @search="openMapDialog" disabled>
        <template #enterButton>
          <a-button>地图拾取</a-button>
        </template>
        </a-input-search>
      </a-form-item>
      <a-form-item label="联系人">
        <a-input v-model:value="formData.contact" placeholder="请输入联系人" />
      </a-form-item>
      <a-form-item label="联系电话">
        <a-input v-model:value="formData.phone" placeholder="请输入联系人电话" />
      </a-form-item>
    </a-form>
    <map-dialog ref="mapDialogRef"></map-dialog>
  </a-drawer>
</template>

<script setup>
import { ref } from 'vue'
import useDrawer from '@/hooks/useDrawer'
import mapDialog from './mapDialog.vue'

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

const mapDialogRef = ref(null)
const openMapDialog = () => {
  mapDialogRef.value.toggleDialog(true)
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