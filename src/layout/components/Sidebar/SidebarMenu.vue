<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-09 14:44:18
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-10 18:44:57
 * @FilePath: \basic\src\layout\components\Sidebar\SidebarMenu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-menu v-model:selectedKeys="activeMenu" mode="inline">
    <sidebar-item
      v-for="item in routes"
      :route="item"
    ></sidebar-item>
  </a-menu>
</template>

<script setup>
import { DashboardOutlined, DesktopOutlined, TransactionOutlined, CustomerServiceOutlined, PieChartOutlined,
 WarningOutlined, SettingOutlined } from '@ant-design/icons-vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { ref, watch } from 'vue'
import SidebarItem from './SidebarItem.vue'

const props = defineProps({
  selectedKeys: {
    type: String
  }
})

const store = useStore()
const routes = store.getters.navMenus

// 计算高亮 menu 的方法
const route = useRoute()
const activeMenu = ref([route.meta.id])
const getActiveMenu = () => {
  activeMenu.value = [route.meta.id]
}
watch(
  route,
  () => {
    getActiveMenu()
  },
  {
    immediate: true
  }
)

</script>