<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-09 13:50:55
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-12 16:44:10
 * @FilePath: \basic\src\layout\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <a-layout has-sider>
        <!-- 左侧 menu -->
        <sidebar></sidebar>
        <a-layout :style="{ marginLeft: '208px' }">
            <a-layout-header style="background: #fff; padding: 0;height: 64px">
                <!-- tags -->
                <tags-view id="guide-tags"></tags-view>
                       
            </a-layout-header>

            <a-layout-content
                :style="{ margin: '24px', padding: '24px', background: '#fff', minHeight: '280px' }"
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

import AppMain from './components/AppMain.vue'
import TagsView from '@/components/TagsView/index.vue'


</script>

<style lang="scss" scoped>
</style>