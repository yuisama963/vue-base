<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-10 11:32:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-09 16:36:08
 * @FilePath: \basic\src\components\TagsView\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="tags-view-container">
        <div class="tags-view-wrapper">
            <router-link
                class="tags-view-item"
                :class="isActive(tag) ? 'active' : ''"
            >
                
            </router-link>
        </div>

    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
const route = useRoute()

/**
 * 是否被选中
 */
const isActive = tag => {
  return tag.path === route.path
}

/**
 * 关闭 tag 的点击事件
 */
const store = useStore()
const onCloseClick = index => {
    store.commit('app/removeTagsView', {
        type: 'index',
        index: index
    })
}

</script>

<style lang="scss" scoped>
.tags-view-container {
    height: 64px;
    padding: 24px 12px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    background: #FFFFFF;
}
</style>