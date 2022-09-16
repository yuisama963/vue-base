<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-29 17:42:06
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-16 20:14:42
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
        <span>{{ props.edit ? '编辑地址': '新增地址'}}</span>
        <a-button type="primary" @click="onConfirm">{{ props.edit ? '编辑': '新增'}}</a-button>
      </a-row>
    </template>
    <a-form layout="vertical" :model="formData" ref="formRef">
      <a-form-item label="地址简称" name="name" :rules="[{ required: true, message: '请输入地址名称' }]">
        <a-input v-model:value="formData.name" placeholder="请输入地址名称" />
      </a-form-item>
      <a-form-item label="所在地" name="location" :rules="[{ required: true, message: '请选择所在地' }]">
        <addressCascader @onChange="addLocation" :location="formData.location"></addressCascader>
      </a-form-item>
      <a-form-item label="详细地址" name="detail" :rules="[{ required: true, message: '请输入详细地址' }]">
        <a-input v-model:value="formData.detail" placeholder="请输入详细地址" />
      </a-form-item>
      <a-form-item label="经纬度坐标" name="coordinates" :rules="[{ required: true, message: '请获取经纬度坐标' }]">
        <a-row>
          <div class="ant-input ant-input-disabled coordinates-input">{{ formData.coordinates ? `${formData.coordinates.location.lng}, ${formData.coordinates.location.lat}`: '输入详细地址获取坐标' }}</div>
          <a-button class="open-map-btn" @click="openMapDialog">
            <environment-outlined />
            地图拾取
          </a-button>
        </a-row>
      </a-form-item>
      <a-form-item label="联系人" name="contact">
        <a-input v-model:value="formData.contact" placeholder="请输入联系人" />
      </a-form-item>
      <a-form-item label="联系电话" name="phone">
        <a-input v-model:value="formData.phone" placeholder="请输入联系人电话" />
      </a-form-item>
    </a-form>
    <map-dialog ref="mapDialogRef" @addCoordinates="onAddCoordinates" :coordinates="formData.coordinates"></map-dialog>
  </a-drawer>
</template>

<script setup>
import { ref, watch } from 'vue'
import useDrawer from '@/hooks/useDrawer'
import mapDialog from './mapDialog.vue'
import addressCascader from '@/components/Location/cascader.vue'
import { EnvironmentOutlined } from '@ant-design/icons-vue'

const { visible, toggleDrawer } = useDrawer()
defineExpose({
	toggleDrawer
})

const props = defineProps({
  edit: {
    type: Boolean
  },
  address: {
    type: Object
  }
})

const formData = ref({
  name: '',
  location: '',
  detail: '',
  coordinates: null,
  phone: '',
  contact: ''
})

watch(
  () => [props.edit, props.address],
  (newVal, oldVal) => {
    console.log(newVal, oldVal)
    if(props.edit) {
      const { name, location, detail, coordinates, phone, contact } = props.address
      formData.value = {
        name,
        location,
        detail,
        coordinates,
        phone,
        contact
      }
    }
  }
)


const emits = defineEmits(['onCloseAllDrawer', 'addAddress'])

const onCloseDrawer = () => {
  visible.value = false
}
const onCloseAllDrawer = () => {
  toggleDrawer(false)
  emits('onCloseAllDrawer')
}

const formRef = ref(null)
const onConfirm = async () => {
  try {
    //校验表单
    await formRef.value.validateFields()
    emits('addAddress', {data: formData.value, edit: props.edit})
  } catch (errorInfo) {
    console.log('Failed:', errorInfo);
  }
}

const addLocation = (val) => {
  formData.value.location = val
}

const onAddCoordinates = (val) => {
  formData.value.coordinates = val
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
.coordinates-input {
  flex: 1;
  border-right: 0;
}
.open-map-btn {
  width: 111px;
}
</style>