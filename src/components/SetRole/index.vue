<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-25 10:46:15
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-25 19:06:49
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
      <a-row>
        
          <span ><reload-outlined /></span>
       
        
          <span ><plus-outlined /></span>
        
      </a-row>
    </a-row>
    <div class="selected-role-area">
      <a-tag v-for="role in selectedRoleList" closable @close.prevent="handleClose(role)">Prevent Default</a-tag>
    </div>
    <section class="role-list">
      <a-row justify="space-between" v-for="role in roleList" class="role-item margin-bottom-8">
        <span class="role-name">{{ role.name }}</span>
        <a-button type="link" @click.prevent="go">角色详情</a-button>
      </a-row>
    </section>
  </div>
</template>

<script setup>
import { ReloadOutlined, PlusOutlined } from '@ant-design/icons-vue'
import { ref, watch } from "vue"
const props = defineProps({
  roleList: {
    type: Array
  },
  selectedRoleList: {
    type: Array
  }
})

// watch(
//   () => props.roleList,
//   (newVal, oldVal) => {
//     console.log('监听引用类型数据dataList')
//     console.log('set-role', newVal, oldVal)
//   },
//   {
//     immediate: true
//   })
const go = () => {
  
}

const searchRes = ref('')
const onSearchRole = () => {

}

</script>

<style lang="scss" scoped>
.search-role-input {
  width: 323px;
}
.selected-role-area {
  margin-top: 16px;
}
.role-item {
  height: 48px;
  border: 1px solid $colorNeutral5;
  align-items: center;
  padding: 0 16px;
  .role-name {
    color: #000000;
    font-size: 14px;
  }
}
</style>