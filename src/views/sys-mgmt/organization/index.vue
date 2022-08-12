<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-03 18:11:25
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-12 17:59:48
 * @FilePath: \basic\src\views\sys-mgmt\organization\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div>
  <p>组织架构</p>
  <header>
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    />
  </header>
  <div id="mountNode"></div>
</div>
 
</template>

<script setup>
import G6 from '@antv/g6'
import { getOrganizationData } from '@/api/sys'

const graph = new G6.Graph({
  container: 'mountNode', // 指定挂载容器
  width: 800, // 图的宽度
  height: 500, // 图的高度
});
const getOrganization = async () => {
  await getOrganizationData()
}
</script>