<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-16 18:26:46
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-26 19:45:51
 * @FilePath: \basic\src\views\sys-mgmt\organization\components\nodeMgmt.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-modal
    v-model:visible="visible"
    :footer="null"
    :width="1024"
    :bodyStyle="{overflow: 'auto'}"
    class="node-mgmt"
  > 
    <template #title>
      <a-row justify="start">
        <template v-if="!editState"><h5>{{selectedNode.name}}</h5></template>
        <template v-else>
          <a-input v-model:value="nodeName" placeholder="请输入节点名称" style="width: 200px" @blur="onBlur"
            ref="nodeNameInputRef"/>
        </template>
        <edit-outlined :style="{ color: '#1890FF' }" @click="editTit"/>
      </a-row>
    </template>
    <section class="node-mgmt-content">
      <a-row justify="space-between" class="tool-bar">
        <a-input-search
          v-model:value="searchRes"
          placeholder="请输入成员名称"
          @search="onSearch"
          class="search-member-input"
          :loading="searchMemberLoading"
        />
        <a-button type="primary" @click="onAddMember"><template #icon><PlusOutlined /></template>添加成员</a-button>
      </a-row>
      <a-table :columns="columns" :data-source="memberList" :pagination="false" size="small">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'status'">
              <a-switch v-model:checked="record.status" />
          </template>
          <template v-else-if="column.key === 'role'">
            <span>
              <a-tag
                v-for="(tag, index) in record.role"
                :key="tag"
                :color="Tags_Subject_Colors[index]"
              >
                {{ tag }}
              </a-tag>
              <a-tag
                color="gray"
              >
               停用
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'operation'">
            <a-button type="link" @click="setRole(record)">角色配置</a-button>
          </template>
        </template>
      </a-table>
      <a-row justify="end" class="pagination-wrapper">
        <a-pagination  size="small" :total="50" :show-total="total => `共 ${total} 人`" />
      </a-row>
    </section>
  </a-modal>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import { EditOutlined, PlusOutlined } from '@ant-design/icons-vue'
import { getNodeMemberListData } from '@/api/sys'
import { Tags_Subject_Colors } from '@/constant'
import useDialog from '@/hooks/useDialog'

const props = defineProps({
  selectedNode: {
    type: Object,
    require: true
  }
})

onUpdated(() => {
  getMemberList()
})

const searchMemberLoading = ref(false)

const memberList = ref([])
const getMemberList = async () => {
  const { data } = await getNodeMemberListData()
  memberList.value = data
}

const nodeNameInputRef = ref(null)
const nodeName = ref('')
const editState = ref(false)
const editTit = () => {
  editState.value = true
  nodeName.value = props.selectedNode.name
  
  console.log(nodeNameInputRef)
  // nodeNameInputRef.value.focus()
}


const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '联系方式',
  dataIndex: 'phone',
  key: 'phone',
}, {
  title: '启用状态',
  dataIndex: 'status',
  key: 'status',
}, {
  title: '角色',
  dataIndex: 'role',
  key: 'role',
},{
  title: '操作',
  key: 'operation',
  dataIndex: 'operation',
  fixed: 'right',
  width: 74
}];

const searchRes = ref('')
const onSearch = () => {
  
}
const onBlur = () => {
  console.log('blur')
  editState.value = false
}

// const visible = ref(false)
// const openDialog = () => {
//   visible.value = true
// }

const { visible, toggleDialog } = useDialog()
defineExpose({
	toggleDialog
})
// 打开添加成员
const emits = defineEmits(['onOpenAddMemberDialog', 'onOpenSetRoleDialog'])
const onAddMember = () => {
  visible.value = false
  emits('onOpenAddMemberDialog')
}
const setRole = (data) => {
   visible.value = false
  emits('onOpenSetRoleDialog', {info: data})
}
</script>

<style lang="scss" scoped>
.tool-bar {
  margin-bottom: 16px;
}
.pagination-wrapper {
  margin-top: 16px;
}
.node-mgmt-content {
  min-width: 976px;
}
.search-member-input {
  width: 264px;
}
</style>