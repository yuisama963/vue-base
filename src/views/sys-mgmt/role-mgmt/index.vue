<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-03 17:52:39
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-26 19:31:27
 * @FilePath: \basic\src\views\sys-mgmt\role-mgmt\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="role-mgmt">
    <a-row justify="space-between" class="tool-bar">
      <a-row>
        <a-input
          v-model:value="searchRes"
          placeholder="多项内容用空格隔开"
          @search="onSearch"
          class="search-role-input margin-right-24"
        >
          <template #prefix>
            <search-outlined />
          </template>
        </a-input>

        <a-select
          ref="statusSelect"
          v-model:value="selectedStatus"
          :options="statusOptions"
          @focus="focus"
          @change="handleChange"
          class="status-select"
        ></a-select>
      </a-row>
        
      <a-row>
        <a-button class="margin-right-8" type="primary">查询</a-button>
        <a-button>重置</a-button>
      </a-row>
    </a-row>
    <a-table :columns="columns" :data-source="roleList" :pagination="false" :row-selection="rowSelection" size="middle">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'name'">
            <a-button type="link">{{record.name}}</a-button>
        </template>
        <template v-else-if="column.dataIndex === 'status'">
            <a-switch v-model:checked="record.status" @change="onChangeStatus" @click="onClick"/>
        </template>
      </template>
    </a-table>
    <a-row justify="space-between" class="pagination-wrapper">
      <a-row>
        <a-button class="margin-right-8">
          <template #icon><export-outlined /></template>
          导出</a-button>
        <a-button>创建角色</a-button>
      </a-row>
      <a-row>
        <a-pagination
          v-model:current="currentPage"
          :total="85"
          :show-total="total => `共 ${total} 条`"
          @change="onChange"
          :showSizeChanger="false"
        />
        <a-button class="margin-left-16">
          <template #icon><setting-outlined /></template>
          设置</a-button>
      </a-row>
      
    </a-row>
    
  </div>
</template>

<script setup>
import { SearchOutlined, ExportOutlined, SettingOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue'
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

const selectedStatus = ref('all')
const statusOptions = ref([{
      value: 'all',
      label: '全部',
    }, {
      value: 'true',
      label: '启用',
    }, {
      value: 'false',
      label: '停用',
    }]);
const rowSelection = ref({
  checkStrictly: false,
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
});
const columns = [{
  title: '角色名称',
  dataIndex: 'name',
}, {
  title: '创建时间',
  dataIndex: 'createTime',
}, {
  title: '创建人',
  dataIndex: 'creator',
  align: 'center'
}, {
  title: '最后编辑时间',
  dataIndex: 'lastUpdateTime',
}, {
  title: '最后编辑人',
  dataIndex: 'lastEditor',
}, {
  title: '使用人数',
  dataIndex: 'count',
}, {
  title: '备注',
  dataIndex: 'des',
}, {
  title: '启用状态',
  dataIndex: 'status',
}];
const roleList = ref([])
const getRoleList = async () => {
  const { data } = await getRoleListData()
  roleList.value = data
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
  height: 64px;
}
.search-role-input {
  width: 320px;
}
.status-select {
  width: 176px;
}
</style>