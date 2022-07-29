<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-09 13:50:55
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-26 16:55:23
 * @FilePath: \basic\src\layout\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <a-layout has-sider>
        <!-- 左侧 menu -->
        <sidebar :selectedKeys="selectedKeys"></sidebar>
        <a-layout :style="{ marginLeft: '200px' }">
            <a-layout-header style="background: #fff; padding: 0;">
                <cloud-avatar></cloud-avatar>       
            </a-layout-header>

            <a-layout-content
                :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
            >
               <app-main />
            </a-layout-content>

            <a-layout-footer style="text-align: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>
    </a-layout>

</template>

<script setup>

import Sidebar from './components/Sidebar/index.vue'
import CloudAvatar from './components/Avatar/index.vue';
import AppMain from './components/AppMain.vue'
import { ref } from 'vue'
const selectedKeys = ref(['1'])
</script>

<style lang="scss" scoped>
</style>