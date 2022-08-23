<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-03 17:52:39
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-23 15:24:10
 * @FilePath: \basic\src\views\sys-mgmt\role-mgmt\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="role-mgmt">
    <a-row justify="space-between" class="tool-bar">
        <a-input-search
          v-model:value="searchRes"
          placeholder="请输入角色名称"
          style="width: 200px"
          @search="onSearch"
        />
        <a-button type="primary"> <template #icon><PlusOutlined /></template>新建角色</a-button>
    </a-row>
    <a-table :columns="columns" :data-source="data" :pagination="false">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
            <a-button type="link">{{record.name}}</a-button>
        </template>
        <template v-else-if="column.key === 'status'">
            <a-switch v-model:checked="record.status" @change="onChangeStatus" @click="onClick"/>
        </template>
      </template>
    </a-table>
    <a-row justify="end" class="pagination-wrapper">
      <a-pagination
        v-model:current="currentPage"
        v-model:page-size="pageSize"
        :total="85"
        :show-total="total => `共 ${total} 条`"
        @change="onChange"
        @showSizeChange="onShowSizeChange"
      />
    </a-row>
    
  </div>
</template>

<script setup>
import { PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { createVNode, ref, watch, onMounted } from 'vue'
import { getRoleListData } from '@/api/sys'
import { Modal } from 'ant-design-vue'

onMounted(async () => {
  getRoleList()
})
// 搜索框数据
const searchRes = ref('')
const onSearch = () => {

}
const columns = [{
  title: '角色名称',
  dataIndex: 'name',
  key: 'name',
  align: 'center'
}, {
  title: '备注',
  dataIndex: 'des',
  key: 'des',
  align: 'center'
}, {
  title: '启用状态',
  dataIndex: 'status',
  key: 'status',
  align: 'center'
}];
const data = ref([])
const getRoleList = async () => {
  data.value = await getRoleListData()
}

const currentPage = ref(1)
const pageSize = ref(10)

const onShowSizeChange = (current, pageSize) => {
      console.log(current, pageSize);
    };

const onChange = pageNumber => {
      console.log('Page: ', pageNumber);
    };

const showConfirm = () => {
  Modal.confirm({
    title: '确定要停用该角色吗？',
    icon: createVNode(ExclamationCircleOutlined),
    okText: '停用',
    cancelText: '取消',

    onOk() {
      console.log('OK');
    },

    onCancel() {
      console.log('Cancel');
    },

    class: 'test',
  });
};

const onChangeStatus = (checked, evt) => {
  console.log(checked, evt)
  // if (checked === false) {
  //   showConfirm()
  // }
}

const onClick = (checked, evt) => {
  console.log(checked, evt)
  showConfirm()
}

</script>

<style lang="scss" scoped>
.tool-bar {
  margin: 0 auto 16px;
}
.pagination-wrapper {
  margin-top: 16px;
}
</style>