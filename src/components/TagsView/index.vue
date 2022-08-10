<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-10 11:32:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-10 19:11:39
 * @FilePath: \basic\src\components\TagsView\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="tags-view-container">
        <a-tabs v-model:activeKey="activeKey" type="card">
            <a-tab-pane v-for="(tag, index) in tagsViewList"
                :key="tag.fullPath"
            >
            <template #tab>
                <span>
                    <router-link :to="tag.path">{{tag.meta.title}}</router-link>
                    <reload-outlined :style="{color: '#8C8C8C'}" v-if="isActive(tag)"/>
                    <close-outlined
                        v-show="tag.path != '/workplace'"
                        :style="{color: '#8C8C8C'}"
                        @click.prevent.stop="onCloseClick(index)"
                    />
                </span>
            </template>
            </a-tab-pane>
            <template #rightExtra>
                <a-button>Right Extra Action</a-button>
            </template>
        </a-tabs>
    </div>
</template>

<script setup>
import { ReloadOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref } from 'vue'

const route = useRoute()

const activeKey = ref(route.fullPath)

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
const router = useRouter()
const tagsViewList = store.getters.tagsViewList
const onCloseClick = index => {
    store.commit('app/removeTagsView', {
        type: 'index',
        index: index
    })
    if (isActive) {
        router.push(tagsViewList[index-1].path)
        activeKey.value = tagsViewList[index-1].path
    } else {
        console.log(tagsViewList)
    }
    
}


</script>

<style lang="scss" scoped>
.tags-view-container {
    flex: 1;
    padding: 12px 0 12px 24px;
    display: flex;
}
</style>