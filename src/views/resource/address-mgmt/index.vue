<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-09 10:46:08
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-14 17:48:14
 * @FilePath: \basic\src\views\resource\address-mgmt\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-03 17:52:39
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-13 20:20:00
 * @FilePath: \basic\src\views\sys-mgmt\role-mgmt\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="address-mgmt">
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
        
      </a-row>
        
      <a-row>
        <a-button class="mr8" type="primary">查询</a-button>
        <a-button @click="reset">重置</a-button>
      </a-row>
    </a-row>
    <a-table :columns="columns" :data-source="list" :pagination="false" :row-selection="rowSelection" size="middle">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'operation'">
            <a-button type="link">编辑</a-button>
            <a-button type="text" danger>操作</a-button>
        </template>
      </template>
    </a-table>
    <a-row justify="space-between" align="middle" class="pagination-wrapper">
      <a-row>
        <a-button class="mr8">
          <template #icon><export-outlined /></template>
          导出</a-button>
        <a-button @click="addCar">新增地址</a-button>
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
    <add-address-drawer ref="addCarDrawerRef" @onAddCar="onAddCar"></add-address-drawer>
  </div>
</template>

<script setup>
import { SearchOutlined, ExportOutlined, SettingOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { createVNode, ref, watch, onMounted } from 'vue'
import { Modal } from 'ant-design-vue'
// import DbCheckSwitch from '@/components/DbCheckSwitch/index.vue'
import addAddressDrawer from './components/addAddressDrawer.vue'

onMounted(async () => {
  getList()
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
  title: '地址简称',
  dataIndex: 'name',
}, {
  title: '所在地',
  dataIndex: 'location',
}, {
  title: '详细地址',
  dataIndex: 'detail',
}, {
  title: '经纬度坐标',
  dataIndex: 'coordinates',
}, {
  title: '联系人',
  dataIndex: 'contact'
}, {
  title: '电话',
  dataIndex: 'phone',
}, {
  title: '添加人',
  dataIndex: 'addBy',
}, {
  title: '添加时间',
  dataIndex: 'addTime',
}, {
  title: '操作',
  dataIndex: 'operation',
  fixed: true
}];
const list = ref([])
const getList = async () => {
  //const { data } = await getRoleListData()
  const data = [
    {name: '客户1号', location: '福建省厦门市思明区', detail: '虎园路1号', coordinates: {lng: 23.40303, lat:112.223455}, contact: '哇哈哈', phone: '研发部', addBy: '颜晓峰', addTime: '2022-05-06 14:17:35'},
    {name: '客户1号', location: '福建省厦门市思明区', detail: '虎园路1号', coordinates: {lng: 23.40303, lat:112.223455}, contact: '哇哈哈', phone: '研发部', addBy: '颜晓峰', addTime: '2022-05-06 14:17:35'},
    {name: '客户1号', location: '福建省厦门市思明区', detail: '虎园路1号', coordinates: {lng: 23.40303, lat:112.223455}, contact: '哇哈哈', phone: '研发部', addBy: '颜晓峰', addTime: '2022-05-06 14:17:35'},
    {name: '客户1号', location: '福建省厦门市思明区', detail: '虎园路1号', coordinates: {lng: 23.40303, lat:112.223455}, contact: '哇哈哈', phone: '研发部', addBy: '颜晓峰', addTime: '2022-05-06 14:17:35'},
    {name: '客户1号', location: '福建省厦门市思明区', detail: '虎园路1号', coordinates: {lng: 23.40303, lat:112.223455}, contact: '哇哈哈', phone: '研发部', addBy: '颜晓峰', addTime: '2022-05-06 14:17:35'},
    {name: '客户1号', location: '福建省厦门市思明区', detail: '虎园路1号', coordinates: {lng: 23.40303, lat:112.223455}, contact: '哇哈哈', phone: '研发部', addBy: '颜晓峰', addTime: '2022-05-06 14:17:35'},
    {name: '客户1号', location: '福建省厦门市思明区', detail: '虎园路1号', coordinates: {lng: 23.40303, lat:112.223455}, contact: '哇哈哈', phone: '研发部', addBy: '颜晓峰', addTime: '2022-05-06 14:17:35'},
    {name: '客户1号', location: '福建省厦门市思明区', detail: '虎园路1号', coordinates: {lng: 23.40303, lat:112.223455}, contact: '哇哈哈', phone: '研发部', addBy: '颜晓峰', addTime: '2022-05-06 14:17:35'},]
  list.value = data
}

const currentPage = ref(1)

const onChange = pageNumber => {
      console.log('Page: ', pageNumber);
    };

const addCarDrawerRef = ref(null)
const addCar = () => {
  addCarDrawerRef.value.toggleDrawer(true)
}

const onAddCar = (data) => {
  //请求添加车辆接口
  addCarDrawerRef.value.toggleDrawer(false)
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