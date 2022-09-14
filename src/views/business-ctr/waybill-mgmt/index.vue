<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-09 10:48:30
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-13 15:07:46
 * @FilePath: \basic\src\views\business-ctr\waybill-mgmt\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="waybill-mgmt" ref="waybillMgmtRef">
    <a-row justify="space-between" class="tool-bar">
      <a-row>
        <a-input
          v-model:value="searchRes"
          placeholder="多项内容用空格隔开"
          @search="onSearch"
          class="search-role-input mr24"
        >
          <template #prefix>
            <search-outlined />
          </template>
        </a-input>
        <a-row>
          <span class="select-label">启用状态</span>
          <a-select
          ref="statusSelect"
          v-model:value="selectedStatus"
          :options="statusOptions"
          @focus="focus"
          @change="handleChange"
          class="status-select"
        ></a-select>
        </a-row>
        
      </a-row>
        
      <a-row>
        <a-button class="mr8" type="primary">查询</a-button>
        <a-button @click="reset">重置</a-button>
      </a-row>
    </a-row>
    <a-table :columns="columns" :data-source="roleList" :pagination="false" :row-selection="rowSelection" size="middle" ref="tableRef"
    :scroll="{x: scrollX}">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'name'">
            <a-button type="link">{{record.name}}</a-button>
        </template>
        <template v-else-if="column.dataIndex === 'status'">
            <a-switch v-model:checked="record.status" @change="onChangeStatus" />
            <!-- <DbCheckSwitch :status="record.status"></DbCheckSwitch> -->
        </template>
      </template>
    </a-table>
    <a-row justify="space-between" align="middle" class="pagination-wrapper">
      <a-row>
        <a-button class="mr8">
          <template #icon><export-outlined /></template>
          导出</a-button>
        <a-button><router-link to="/create-role">创建角色</router-link></a-button>
      </a-row>
      <a-row>
        <a-pagination
          v-model:current="currentPage"
          :pageSize="10"
          :total="85"
          :show-total="total => `共 ${total} 条`"
          @change="onChange"
          :showSizeChanger="false"
        />
        <a-button class="ml16">
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
// import DbCheckSwitch from '@/components/DbCheckSwitch/index.vue'

const waybillMgmtRef = ref(null)
const scrollX = ref(0)

onMounted(async () => {
  getRoleList()
  scrollX.value = waybillMgmtRef.value.clientWidth
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
const columns = [
  // 1.基本信息
{
  title: '运单号',
  dataIndex: 'waybillNo',
  fixed: true,
  minWidth: 100
}, {
  title: '运单状态',
  dataIndex: 'waybillStatus'
}, {
  title: '开票风险',
  dataIndex: 'creator',
  align: 'center'
}, {
  title: '创建时间',
  dataIndex: 'createTime',
  sorter: {
    compare: (a, b) => a.lastUpdateTime - b.lastUpdateTime,
  }
}, {
  title: '制单人',
  dataIndex: 'lastEditor',
}, {
  title: '部门',
  dataIndex: 'count',
}, {
  title: '客户名称',
  dataIndex: 'des',
}, {
  title: '客户订单号',
  dataIndex: 'status',
}, {
  title: '业务类型',
  dataIndex: 'status',
}, {
  title: '运输类型',
  dataIndex: 'status',
}, 
//2.承接信息
{
  title: '承接时间',
  dataIndex: 'status',
}, {
  title: '承接人',
  dataIndex: 'status',
}, {
  title: '承接人电话',
  dataIndex: 'status',
}, {
  title: '司机姓名',
  dataIndex: 'status',
}, {
  title: '司机电话',
  dataIndex: 'status',
}, {
  title: '车牌号',
  dataIndex: 'status',
},
//3.收发货信息
{
  title: '发货方名称',
  dataIndex: 'status',
}, {
  title: '发货方电话',
  dataIndex: 'status',
}, {
  title: '收货方名称',
  dataIndex: 'status',
}, {
  title: '收货方电话',
  dataIndex: 'status',
}, {
  title: '发货地',
  dataIndex: 'status',
}, {
  title: '收货地',
  dataIndex: 'status',
},
//4.运输信息
{
  title: '要求提货时间',
  dataIndex: 'status',
}, {
  title: '提货时间',
  dataIndex: 'status',
}, {
  title: '签收时间',
  dataIndex: 'status',
}, {
  title: '回单时间',
  dataIndex: 'status',
}, {
  title: '确认回单时间',
  dataIndex: 'status',
}, {
  title: '回单',
  dataIndex: 'status',
}, {
  title: '运输合作协议',
  dataIndex: 'status',
},
//5.费用信息
{
  title: '运费',
  dataIndex: 'status',
}, {
  title: '油卡付',
  dataIndex: 'status',
}, {
  title: '预付状态',
  dataIndex: 'status',
}, {
  title: '预付金额',
  dataIndex: 'status',
},{
  title: '到付状态',
  dataIndex: 'status',
},{
  title: '到付金额',
  dataIndex: 'status',
},{
  title: '尾款状态',
  dataIndex: 'status',
},{
  title: '尾款金额',
  dataIndex: 'status',
},{
  title: '回款金额',
  dataIndex: 'status',
},{
  title: '服务费',
  dataIndex: 'status',
},{
  title: '保障服务费',
  dataIndex: 'status',
},{
  title: '保障服务',
  dataIndex: 'status',
},
//6.货物信息
{
  title: '货值（万元）',
  dataIndex: 'status',
},{
  title: '货物名称',
  dataIndex: 'status',
},{
  title: '货物类型',
  dataIndex: 'status',
},{
  title: '货物数量',
  dataIndex: 'status',
},{
  title: '货物重量（吨）',
  dataIndex: 'status',
},{
  title: '货物体积',
  dataIndex: 'status',
},{
  title: '备注',
  dataIndex: 'status',
}];

const tableRef = ref(null)
const roleList = ref([])
const getRoleList = async () => {
  // const { data } = await getRoleListData()
  // roleList.value = data
  console.log(tableRef.value)
}

const currentPage = ref(1)
const pageSize = ref(10)

const onShowSizeChange = (current, pageSize) => {
      console.log(current, pageSize);
    };

const onChange = pageNumber => {
      console.log('Page: ', pageNumber);
    };

const onChangeStatus = (checked, evt) => {
  console.log(checked, evt)
  if (!checked) {
    Modal.confirm({
      title: '确定要停用该角色吗？',
      icon: createVNode(ExclamationCircleOutlined),
      okText: '停用',
      cancelText: '取消',

      onOk() {
        console.log('OK');
      },

      onCancel() {
        checked = true
      }
    });
  }
}

const reset = () => {
  Modal.confirm({
      title: '确定要停用该角色吗？',
      icon: createVNode(ExclamationCircleOutlined),
      okText: '停用',
      cancelText: '取消',

      onOk() {
        console.log('OK');
      },

      onCancel() {
        
      }
    });
}

</script>

<style lang="scss" scoped>
.tool-bar {
  margin: 0 auto 16px;
}
.pagination-wrapper {
  position: fixed;
  height: 64px;
  bottom: 0;
  left: 208px;
  width: 100%;
  padding: 0 24px;
}
.search-role-input {
  width: 320px;
}
.status-select {
  width: 176px;
}
.select-label {
  width: 80px;
  height: 32px;
  border: 1px solid #D9D9D9;
  border-radius: 2px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
}
</style>