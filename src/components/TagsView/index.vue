<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-10 11:32:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-26 10:48:35
 * @FilePath: \basic\src\components\TagsView\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="tags-view-container">
        <a-tabs v-model:activeKey="activeKey" type="card" class="tags-view-wrapper">
            <a-tab-pane v-for="(tag, index) in tagsViewList"
                :key="tag.fullPath"
            >
                <template #tab>
                    <reload-outlined class="reload-btn" v-if="isActive(tag)"/>
                    <router-link :to="tag.path">{{tag.meta.title}}</router-link>
                    <close-outlined
                        v-show="tag.path != '/dashboard'"
                        class="close-btn"
                        :class="{active: isActive(tag)}"
                        @click.prevent.stop="onCloseClick(index)"
                    />
                </template>
            </a-tab-pane>
        </a-tabs>
        <a-row class="right-extra" justify="center">
            <!-- <a-dropdown class="context-menu">
                <a class="ant-dropdown-link" @click.prevent>
                    <ellipsis-outlined :rotate="180"/>
                </a>
                <template #overlay>
                    <a-menu>
                        <a-menu-item>
                            <a href="javascript:;">关闭其他</a>
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown> -->
            <cloud-avatar></cloud-avatar>
        </a-row>
    </div>
</template>

<script setup>
import { ReloadOutlined, CloseOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref, watch } from 'vue'
import CloudAvatar from '@/layout/components/Avatar/index.vue';

const route = useRoute()

const activeKey = ref(route.fullPath)
const getActiveKey = () => {
  activeKey.value = route.fullPath
}
watch(
  route,
  () => {
    getActiveKey()
  },
  {
    immediate: true
  }
)

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
        //getActiveKey()
        //activeKey.value = tagsViewList[index-1].path
    }
    
}


</script>

<style lang="scss" scoped>
.tags-view-container {
    display: flex;
    .tags-view-wrapper {
        flex: 1;
        padding: 16px 0px 0 24px; 
    }
    .right-extra {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
        width: 80px;
        height: 56px;
    }
    .context-menu {
        width: 46px;
        height: 56px;
    }
    .reload-btn {
        color: $themeColor;
        margin-right: 8px;
    }
    .close-btn {
        color: #8C8C8C;
        margin-right: 0;
        margin-left: 8px;
        &.active {
            color: $themeColor
        }
    }
}
:v-deep(.ant-tabs-nav-operations) {
    display: none;
}
:v-deep(.ant-tabs-tab .anticon) {
    margin-right: 0;
}
</style>