<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-19 15:55:29
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-25 14:40:25
 * @FilePath: \basic\src\views\sys-mgmt\organization\components\addNodeDialog.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-modal v-model:visible="visible" title="新增子节点" :width="365"
      centered @ok="handleOk">
    <a-input
      v-model:value="name"
      placeholder="请输入节点名称，最多20个字"
      style="width: 317px"
      :maxlength="20"
      
    />
    <template #footer>
      <a-button key="submit" type="primary" :loading="loading" @click="handleOk">确定</a-button>
    </template>
  </a-modal>
</template>

<script setup>
import { ref } from 'vue'

const emits = defineEmits(['onAddNode'])
const visible = ref(false)
const name = ref('')
const handleOk = () => {
  emits('onAddNode', { name: name.value })
}
const openDialog = () => {
  visible.value = true
}

defineExpose({
	openDialog
})
</script>
