<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-19 15:55:29
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-15 20:40:58
 * @FilePath: \basic\src\views\sys-mgmt\organization\components\addNodeDialog.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-modal v-model:visible="visible" title="地图拾取" :width="1024" class="map-modal" 
    :bodyStyle="{padding: 0}"
      centered @ok="handleOk">
    <map-container></map-container>
    <template #footer>
      <a-button key="submit" type="primary" :loading="loading" @click="handleOk">确定</a-button>
    </template>
  </a-modal>
</template>

<script setup>
import { ref } from 'vue'
import useDialog from '@/hooks/useDialog'
import mapContainer from '@/components/Map/index.vue'


const loading = ref(false)
const emits = defineEmits(['onAddNode'])

const name = ref('')
const handleOk = () => {
  loading.value = true
  emits('onAddNode', { name: name.value })
}

const { visible, toggleDialog } = useDialog()
// const visible = ref(false)
// const openDialog = () => {
//   visible.value = true
// }

defineExpose({
	toggleDialog
})
</script>

<style lang="scss">
.map-modal {
  width: 1024px;
}
</style>
