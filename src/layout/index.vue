<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-09 13:50:55
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-29 16:02:38
 * @FilePath: \basic\src\layout\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    
        <a-layout class="page-wrapper">
            <!-- 左侧 menu -->
            <sidebar></sidebar>
            <a-layout class="main-wrapper">
                <a-layout-header class="header-wrapper">
                    <!-- tags -->
                    <tags-view id="guide-tags"></tags-view>
                        
                </a-layout-header>

                <a-layout-content
                    class="content-wrapper"
                >
                <app-main />
                </a-layout-content>
            </a-layout>
        </a-layout>

</template>

<script setup>

import Sidebar from './components/Sidebar/index.vue'

import AppMain from './components/AppMain.vue'
import TagsView from '@/components/TagsView/index.vue'


</script>

<style lang="scss" scoped>
.page-wrapper {
    min-width: 1440px;
    .main-wrapper {
        margin-left: 208px;
        background: #fff;
        .header-wrapper {
            background: #fff;
            padding: 0;
            height: 56px;
        }
        .content-wrapper {
            padding: 24px;
            background: #fff;
            min-height: 280px;
            min-width: 1232px;
        }
    }
}
</style>