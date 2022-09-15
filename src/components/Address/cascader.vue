<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-15 19:16:13
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-15 20:45:49
 * @FilePath: \basic\src\components\Address\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-cascader
    v-model:value="value"
    placeholder="请选择所在地"
    :options="options"
    style="width: 100%"
    @change="onChange"
  >
  </a-cascader>

</template>
<script setup>
import REGION_DATA from 'china-area-data'
import { ref, onMounted } from 'vue'
const value = ref(null)

const options = ref(null)

const initData = () => {
  options.value = getProvince()
}

const getProvince = () => {
  let arr = []
  const province = REGION_DATA[86]
  Object.keys(province).map(key => {
    
    arr.push({
      id: key,
      value: province[key],
      label: province[key],
      children: getCity(key)
    })
  })
  return arr
}
const getCity = (province) => {
  let arr = []
  const city = REGION_DATA[province]
  if (city) {
    Object.keys(city).map(key => {
      arr.push({
        id: key,
        value: city[key],
        label: city[key],
        children: getArea(key)
      });
    })
  }
  return arr;
}
const getArea = (city) => {
  let arr = []
  const area = REGION_DATA[city]
  if (area) {
    Object.keys(area).map(key => {
      arr.push({
        id: key,
        value: key,
        label: area[key],
      });
    })
  }
  
  return arr;
}
onMounted(() => {
  initData()
})

const emits = defineEmits(['onChange'])

const onChange = (val) => {
  emits('onChange', val)
}

</script>