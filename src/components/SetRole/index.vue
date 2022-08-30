<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-25 10:46:15
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-30 18:21:26
 * @FilePath: \basic\src\components\SetRole\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <a-row justify="space-between">
      <a-input-search
        v-model:value="searchRes"
        placeholder="请输入角色名称"
        @search="onSearchRole"
        class="search-role-input"
      />
      <a-row align="middle">
        <a-tooltip placement="top">
          <template #title>
            <span>刷新</span>
          </template>
          <reload-outlined class="reload-btn" @click="onReload"/>
        </a-tooltip>
        <a-tooltip placement="top">
          <template #title>
            <span>创建角色</span>
          </template>
          <plus-outlined class="plus-btn"/>
        </a-tooltip>  
      </a-row>
    </a-row>
    <div class="selected-role-area">
      <a-tag
        v-for="(role, index) in selectedRoleList"
        :color="Tags_Subject_Colors[index]"
        closable
        @close.prevent="removeSelected(role)"
        class="role-tag"
      >
        {{role}}
      </a-tag>
    </div>
    <section class="role-list-outer">
      <div class="role-list-inner">       
        <role-item v-for="role in roleList" :role="role" @onCloseDialog="onCloseDialog" :isActive="isActive(role)"></role-item>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ReloadOutlined, PlusOutlined } from '@ant-design/icons-vue'
import { ref, watch } from "vue"
import { Tags_Subject_Colors } from '@/constant'
import RoleItem from './roleItem.vue'

const props = defineProps({
  roleList: {
    type: Array
  },
  selectedRoleList: {
    type: Array
  }
})
// 当前
const selected = ref([])

const searchRes = ref('')
const onSearchRole = () => {

}

const emits = defineEmits(['onReload', 'onCloseDialog'])
//刷新角色列表
const onReload = () => {
  emits('onReload')
}
const onCloseDialog = () => {
  emits('onCloseDialog')
}

/**
 * 角色是否被选中
 */
const isActive = tag => {
  console.log(props.selectedRoleList.findIndex((role) => {
    console.log(role, tag)
    return role === tag
    }))
  return props.selectedRoleList.findIndex(role => role === tag.name) > -1 ? true : false
}


const removeSelected = tag => {
  selected.value = props.selectedRoleList.filter(role => role !== tag )
}
</script>

<style lang="scss" scoped>
.search-role-input {
  width: 332px;
}
.selected-role-area {
  margin-top: 16px;
}

.role-list-outer {
  height: calc(100vh - 264px);
  position: relative;
  overflow: hidden;
  //width: 423px;
  width: 100%;
  min-width: 432px;
  .role-list-inner {
    //width: 423px;
    width: 100%;
    height: calc(100vh - 264px);
    position: absolute;
    left: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
.reload-btn {
  margin-right: 26px;
}
.role-tag {
  margin-bottom: 16px;
}
</style>