<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-03 17:52:39
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-16 18:43:55
 * @FilePath: \basic\src\views\sys-mgmt\role-mgmt\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <a-row justify="space-between">
        <a-input-search
          v-model:value="searchRes"
          placeholder="请输入角色名称"
          style="width: 200px"
          @search="onSearch"
        />
        <a-button type="primary"> <template #icon><PlusOutlined /></template>新建角色</a-button>
    </a-row>
    <a-table :columns="columns" :data-source="data"></a-table>
  </div>
</template>

<script setup>
import { PlusOutlined } from '@ant-design/icons-vue';
import { ref, watch, onMounted } from 'vue'
// 搜索框数据
const searchRes = ref('')
const onSearch = () => {

}
const columns = [{
  name: '角色名称',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '备注',
  dataIndex: 'des',
  key: 'des',
}, {
  title: '启用状态',
  dataIndex: 'status',
  key: 'status',
}, {
  title: '操作',
  key: 'operation',
  dataIndex: 'operation',
  fixed: 'right',
  width: 104
}];
const data = []
</script>