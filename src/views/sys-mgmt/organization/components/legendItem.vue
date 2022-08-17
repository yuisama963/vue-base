<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-17 15:53:54
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-17 19:05:06
 * @FilePath: \basic\src\views\sys-mgmt\organization\components\legend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="legend-item"  :style="{border: `2px solid ${color}`}" @click="onClick">
    <span class="legend-item-fill" :style="{background: `${color}`}" v-show="checked"></span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  color: {
    type: String,
    required: true
  },
  ind: {
    type: Number,
    required: true
  }
})
const emits = defineEmits(['onCollapse'])

let checked = ref(false)
//选中后折叠该颜色
const onClick = () => {
  checked.value = !checked.value
  emits('onCollapse', { checked: checked.value, ind: props.ind})
}


</script>

<style lang="scss" scoped>
.legend-item {
  cursor: pointer;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  .legend-item-fill {
    width: 8px;
    height: 8px;
  }
}

</style>