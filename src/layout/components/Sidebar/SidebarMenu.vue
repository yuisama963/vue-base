<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-09 14:44:18
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-04 17:40:33
 * @FilePath: \basic\src\layout\components\Sidebar\SidebarMenu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
    <a-menu-item key="menuWorkplace">
      <dashboard-outlined />
      <span>工作台</span>
    </a-menu-item>
    <a-sub-menu key="menuBizctr">
      <template #title>
        <span>
          <desktop-outlined />
          <span>业务中心</span>
        </span>
      </template>
      <a-menu-item key="3">订单管理</a-menu-item>
      <a-menu-item key="4">货源管理</a-menu-item>
      <a-menu-item key="5">运单跟踪</a-menu-item>
      <a-menu-item key="5">运单管理</a-menu-item>
      <a-menu-item key="5">运单草稿</a-menu-item>
      <a-menu-item key="5">回单跟踪</a-menu-item>
      <a-menu-item key="5">回单管理</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="menuCtr">
      <template #title>
        <span>
          <customer-service-outlined />
          <span>运营中心</span>
        </span>
      </template>
      <a-menu-item key="3">Tom</a-menu-item>
      <a-menu-item key="4">Bill</a-menu-item>
      <a-menu-item key="5">Alex</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="menuCtr">
      <template #title>
        <span>
          <transaction-outlined />
          <span>结算中心</span>
        </span>
      </template>
      <a-menu-item key="3">Tom</a-menu-item>
      <a-menu-item key="4">Bill</a-menu-item>
      <a-menu-item key="5">Alex</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="menuUserCtr">
      <template #title>
        <span>
          <pie-chart-outlined />
          <span>用户中心</span>
        </span>
      </template>
      <a-menu-item key="6">承运方管理</a-menu-item>
      <a-menu-item key="8">托运方管理</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="menuMgmt">
      <template #title>
        <span>
          <warning-outlined />
          <span>合规性管理</span>
        </span>
      </template>
      <a-menu-item key="6">Team 1</a-menu-item>
      <a-menu-item key="8">Team 2</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="menuSysMgmt">
      <template #title>
        <span>
          <setting-outlined />
          <span>系统管理</span>
        </span>
      </template>
      <a-menu-item key="submenuOrganization">组织架构</a-menu-item>
      <a-menu-item key="submenuRoleMgmt">角色管理</a-menu-item>
      <a-menu-item key="submenuMenuMgmt">菜单管理</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script setup>
import { DashboardOutlined, DesktopOutlined, TransactionOutlined, CustomerServiceOutlined, PieChartOutlined,
 WarningOutlined, SettingOutlined } from '@ant-design/icons-vue'
 
const props = defineProps({
  selectedKeys: {
    type: String
  }
})
</script>