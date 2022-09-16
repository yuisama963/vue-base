<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-09 10:46:08
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-16 20:27:36
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
        <template v-if="column.dataIndex === 'location'">
            {{`${record.location[0]}${record.location[1]}${record.location[2]}`}}
        </template>
        <template v-else-if="column.dataIndex === 'coordinates'">
            {{`${record.coordinates.location.lng}, ${record.coordinates.location.lat}`}}
        </template>
        <template v-else-if="column.dataIndex === 'operation'">
            <a-button type="link" @click="openEditAddressDrawer(record)">编辑</a-button>
            <a-button type="text" danger>操作</a-button>
        </template>
      </template>
    </a-table>
    <a-row justify="space-between" align="middle" class="pagination-wrapper">
      <a-row>
        <a-button class="mr8">
          <template #icon><export-outlined /></template>
          导出</a-button>
        <a-button @click="openAddAddressDrawer">新增地址</a-button>
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
    <add-address-drawer ref="addAddressDrawerRef" @addAddress="onAddAddress" :edit="isEditAddress" :address="editAddress"></add-address-drawer>
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
  fixed: 'right'
}];
const list = ref([])
const getList = async () => {
  //const { data } = await getRoleListData()
  const data = [
    {name: '客户1号', location: ['福建省','厦门市','思明区'], detail: '虎园路1号', coordinates: {adcode: "350206", location: {lng: 23.40303, lat:112.223455}}, contact: '哇哈哈', phone: 18888888888, addBy: '颜晓峰', addTime: '2022-05-06 14:17:35'},
    {name: '客户2号', location: ['福建省','厦门市','湖里区'], detail: '东渡路258号', coordinates: {name: '云仓配供应链管理有限公司', adcode: "350206", location: {lng: 118.087827, lat:24.50039}}, contact: '云仓配', phone: 18888888888, addBy: '颜晓峰', addTime: '2022-05-06 14:17:35'},
    {name: '客户3号', location: ['福建省','厦门市','同安区'], detail: '虎园路1号', coordinates: {adcode: "350206", location: {lng: 23.40303, lat:112.223455}}, contact: '哇哈哈', phone: 18888888888, addBy: '颜晓峰', addTime: '2022-05-06 14:17:35'},
    {name: '客户4号', location: ['福建省','厦门市','翔安区'], detail: '虎园路1号', coordinates: {adcode: "350206", location: {lng: 23.40303, lat:112.223455}}, contact: '哇哈哈', phone: 18888888888, addBy: '颜晓峰', addTime: '2022-05-06 14:17:35'},
    {name: '客户5号', location: ['福建省','厦门市','集美区'], detail: '虎园路1号', coordinates: {adcode: "350206", location: {lng: 23.40303, lat:112.223455}}, contact: '哇哈哈', phone: 18888888888, addBy: '颜晓峰', addTime: '2022-05-06 14:17:35'},
    {name: '客户6号', location: ['福建省','厦门市','思明区'], detail: '虎园路1号', coordinates: {adcode: "350206", location: {lng: 23.40303, lat:112.223455}}, contact: '哇哈哈', phone: 18888888888, addBy: '颜晓峰', addTime: '2022-05-06 14:17:35'},
    {name: '客户7号', location: ['福建省','厦门市','思明区'], detail: '虎园路1号', coordinates: {adcode: "350206", location: {lng: 23.40303, lat:112.223455}}, contact: '哇哈哈', phone: 18888888888, addBy: '颜晓峰', addTime: '2022-05-06 14:17:35'},
    {name: '客户8号', location: ['福建省','厦门市','思明区'], detail: '虎园路1号', coordinates: {adcode: "350206", location: {lng: 23.40303, lat:112.223455}}, contact: '哇哈哈', phone: 18888888888, addBy: '颜晓峰', addTime: '2022-05-06 14:17:35'},]
  list.value = data
}

const currentPage = ref(1)

const onChange = pageNumber => {
      console.log('Page: ', pageNumber);
    };

const addAddressDrawerRef = ref(null)
const isEditAddress = ref(false)
const openAddAddressDrawer = () => {
  isEditAddress.value = false
  addAddressDrawerRef.value.toggleDrawer(true)
}

const editAddress = ref()
const openEditAddressDrawer = (address) => {
  editAddress.value = address
  isEditAddress.value = true
  addAddressDrawerRef.value.toggleDrawer(true)
}

const onAddAddress = (data) => {
  if (data.edit) {
    //编辑
  } else {
    //新增
    list.value.push(data)
  }
  
  //请求添加车辆接口
  addAddressDrawerRef.value.toggleDrawer(false)
}

const reset = () => {
  
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