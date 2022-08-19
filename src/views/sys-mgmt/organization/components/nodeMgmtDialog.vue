<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-16 18:26:46
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-19 18:46:53
 * @FilePath: \basic\src\views\sys-mgmt\organization\components\nodeMgmt.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<a-modal
    v-model:visible="visible"
    width="100%"
    wrap-class-name="full-modal"
    :footer="null"
  > 
    <template #title>
      <div>
        <template v-if="!editState"><h5>运营部</h5></template>
        <template v-else>
          <a-input v-model:value="nodeName" placeholder="请输入节点名称" style="width: 200px"/>
        </template>
        <edit-outlined @click="editTit"/></div>
    </template>
    <section>
      <a-row justify="space-between">
        <a-input-search
          v-model:value="searchRes"
          placeholder="请输入成员名称"
          style="width: 264px"
          @search="onSearch"
        />
        <a-button type="primary"> <template #icon><PlusOutlined /></template>添加成员</a-button>
      </a-row>
      <a-table :columns="columns" :data-source="data"></a-table>
    </section>
</a-modal>
</template>

<script setup>
import { ref, defineExpose } from 'vue'
import { EditOutlined } from '@ant-design/icons-vue';
const nodeName = ref("技术部")
const editState = ref(false)
const editTit = () => {
  editState.value = true
}

const columns = [{
  name: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '联系方式',
  dataIndex: 'des',
  key: 'des',
}, {
  title: '启用状态',
  dataIndex: 'status',
  key: 'status',
}, {
  title: '角色',
  dataIndex: 'status',
  key: 'status',
},{
  title: '操作',
  key: 'operation',
  dataIndex: 'operation',
  fixed: 'right',
  width: 104
}];
const data = []
const searchRes = ref('')
const onSearch = () => {
  
}
const visible = ref(false)
const openDialog = () => {
  visible.value = true
}
defineExpose({
	openDialog
})
</script>