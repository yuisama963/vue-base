<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-01 15:07:16
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-01 17:02:22
 * @FilePath: \basic\src\components\DbCheckSwitch\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-switch v-model:checked="status" @change="onChangeStatus" />
  {{props.status}}
</template>

<script setup>
import { ref, watch, toRefs, reactive, createVNode } from 'vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'


const props = defineProps({
  status: {
    type: Boolean
  }
})
console.log(props.status)

const onChangeStatus = (val) => {
  if (!val) {
    
  }
}
</script>