<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-09 14:43:20
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 16:24:57
 * @FilePath: \basic\src\layout\components\Sidebar\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <a-layout-sider
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0, background: '#fff' }">
      <div class="logo">
        这里是logo
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="1">
          <dashboard-outlined />
          <span>工作台</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <verified-outlined />
              <span>会员认证</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <desktop-outlined />
              <span>业务中心</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
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
        <a-sub-menu key="sub4">
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
        <a-sub-menu key="sub5">
          <template #title>
            <span>
              <pie-chart-outlined />
              <span>报表中心</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub6">
          <template #title>
            <span>
              <cloud-upload-outlined />
              <span>资源中心</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub7">
          <template #title>
            <span>
              <wallet-outlined />
              <span>钱包后台</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub8">
          <template #title>
            <span>
              <bell-outlined />
              <span>效期管理</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub9">
          <template #title>
            <span>
              <warning-outlined />
              <span>合规性管理</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub10">
          <template #title>
            <span>
              <trophy-outlined />
              <span>友院学堂</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub11">
          <template #title>
            <span>
              <setting-outlined />
              <span>系统管理</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
</template>

<script setup>
import { DashboardOutlined, VerifiedOutlined, DesktopOutlined, TransactionOutlined, CustomerServiceOutlined, PieChartOutlined, CloudUploadOutlined, WalletOutlined,
 BellOutlined, WarningOutlined, TrophyOutlined, SettingOutlined } from '@ant-design/icons-vue'
const props = defineProps({
  selectedKeys: {
    type: String
  }
})
</script>