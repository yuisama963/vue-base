<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-10 11:32:35
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-10 14:13:08
 * @FilePath: \basic\src\components\TagsView\ContextMenu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <a-dropdown :trigger="['contextmenu']">
        <div
        :style="{
            textAlign: 'center',
            background: '#f7f7f7',
            height: '200px',
            lineHeight: '200px',
            color: '#777',
        }"
        >
        Right Click on here
        </div>
        <template #overlay>
        <a-menu>
            <a-menu-item key="1">关闭其他</a-menu-item>
            <a-menu-item key="2">关闭到左侧</a-menu-item>
            <a-menu-item key="3">关闭到右侧</a-menu-item>
            <a-menu-item key="4">刷新当前页</a-menu-item>
        </a-menu>
        </template>
    </a-dropdown>
</template>