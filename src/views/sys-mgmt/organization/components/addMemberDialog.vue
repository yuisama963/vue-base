<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-23 15:49:12
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-23 18:28:26
 * @FilePath: \basic\src\views\sys-mgmt\organization\components\addMemberDialog.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-modal
    v-model:visible="visible"
    :width="1224"
    title="添加成员"
  > 
    <section class="add-member-wrapper">
      <a-row>
        <div class="member-list-wrapper">
          <a-row justify="space-between">
            <a-input-search
              v-model:value="searchRes"
              placeholder="请输入成员名称"
              style="width: 420px"
              @search="onSearchMember"
            />
          </a-row>
        </div>
        <div class="role-list-wrapper">
          <a-row justify="space-between">
            <a-input-search
              v-model:value="searchRes"
              placeholder="请输入角色名称"
              style="width: 323px"
              @search="onSearchRole"
            />
          </a-row>
        </div>
      </a-row>
    </section>
    <template #footer>
      <a-button type="primary" @click="handleCancel">添加成员</a-button>
    </template>
  </a-modal>
</template>

<script setup>
import { ref, defineExpose, onMounted, onUpdated } from 'vue'
const visible = ref(false)
const openDialog = async () => {
  visible.value = true
}
defineExpose({
	openDialog
})

onUpdated(() => {
  getMemberList()
})
// 获取没有节点的成员列表
const getMemberList = () => {

}

const onSearchMember = () => {

}

const onSearchRole = () => {
  
}
</script>

<style lang="scss" scoped>
.add-member-wrapper {
  height: 480px;
  .member-list-wrapper {
    width: 702px;
  }
  .role-list-wrapper {
    width: 473px;
  }
}
</style>