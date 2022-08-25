<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-23 15:49:12
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-25 18:49:23
 * @FilePath: \basic\src\views\sys-mgmt\organization\components\addMemberDialog.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-modal
    v-model:visible="visible"
    :width="1024"
    title="添加成员"
    dialogClass="dialog"
    wrapClassName="wrap"
    class="ccc"
  > 
    <section class="add-member-wrapper">
      <a-row justify="space-between">
        <div class="member-list-wrapper">
          <a-row justify="space-between">
            <a-input-search
              v-model:value="searchRes"
              placeholder="请输入成员名称"
              @search="onSearchMember"
              class="search-member-input margin-bottom-8"
            />
          </a-row>
          <div class="to-be-added-area"></div>
          <div class="search-member-list" v-if="searchRes">
            <a-divider>搜索结果</a-divider>
          </div>
          <div class="all-member-list">
            <a-row class="member-item margin-bottom-8" v-for="member in memberList" justify="space-between">
              
              <a-row type="flex" align="middle">
                <span>{{member.name}}</span>
                <dl>
                  <dt class="member-name">{{member.name}}</dt>
                  <dd class="member-phone">{{member.phone}}</dd>
                </dl>
              </a-row>
              <a-row>
                <a-tag v-for="(role, index) in member.role" :color="Tags_Subject_Colors[index]" v-show="index < 3">{{role}}</a-tag>
                <a-tag v-show="member.role.length > 3">...</a-tag>
              </a-row>
              
            </a-row>
          </div>
        </div>
        <div class="role-list-wrapper">
          <set-role :roleList="roleList" :selectedRoleList="selectedRoleList"></set-role>
        </div>
      </a-row>
    </section>
    <template #footer>
      <a-button type="primary" @click="handleCancel">添加成员</a-button>
    </template>
  </a-modal>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import { getRoleListData, getDingDingMemberListData } from '@/api/sys'
import SetRole from '@/components/SetRole/index.vue'
import { Tags_Subject_Colors } from '@/constant'

const visible = ref(false)
const openDialog = async () => {
  visible.value = true
}
defineExpose({
	openDialog
})

onUpdated(() => {
  getMemberList()
  getRoleList()
})
const memberList = ref([])
// 获取没有节点的成员列表
const getMemberList = async () => {
  memberList.value = await getDingDingMemberListData()
}
const selectedRoleList = ref([])
const roleList = ref([])
const getRoleList = async () => {
  roleList.value = await getRoleListData()
  console.log('roleList', roleList.value)
}
const searchRes = ref('')
const onSearchMember = () => {

}

const onSearchRole = () => {
  
}
</script>

<style lang="scss" scoped>
.add-member-wrapper {
  height: 480px;
  overflow: hidden;
  .member-list-wrapper {
    .search-member-input {
      width: 520px;
    }
    .all-member-list {
      .member-item {
        height: 64px;
        border: 1px solid $colorNeutral5;
        align-items: center;
        padding: 0 16px;
        .member-name {
          font-size: 16px;
          color: #000000;
        }
        .member-name {
          font-size: 12px;
        }
      }
    }
  }
  .role-list-wrapper {
    width: 423px;
  }
}
:deep(.ant-modal-body) {
  height: 528px;
}
</style>