<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-29 16:49:21
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-01 15:00:51
 * @FilePath: \basic\src\views\sys-mgmt\organization\components\addMemberDrawer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-drawer
    v-model:visible="visible"
    class="auto-width-drawer"
    placement="right"
  >
    <template #title>
      <a-row justify="space-between" align="middle">
        <p>角色配置</p>
        <a-button type="primary" @click="handleCancel">添加成员</a-button>
      </a-row>
    </template>
    <section class="add-member-wrapper">
      <a-row justify="space-between">
        <div class="member-list-wrapper">
          <a-row justify="space-between">
            <a-input-search
              v-model:value="searchRes"
              placeholder="请输入成员名称"
              @search="onSearchMember"
              class="search-member-input mb8"
            />
          </a-row>
          <div class="to-be-added-area">
            {{selectedMembers}}
          </div>
          <a-divider v-if="searchRes">搜索结果</a-divider>
          <div class="all-member-list">
            <a-row class="member-item mb8" v-for="member in memberList" justify="space-between"
              :class="{'active': isSelectedMember(member)}"
              @click="selectMember(member)">
              
              <a-row type="flex" align="middle">
                <span class="member-avatar">{{member.name}}</span>
                <div>
                  <p class="member-name">{{member.name}}</p>
                  <p class="member-phone">{{member.phone}}</p>
                </div>
              </a-row>
              <a-row>
                <a-tag v-for="(role, index) in member.role" :color="Tags_Subject_Colors[index]" v-show="index < 3">{{role}}</a-tag>
                <a-tag v-show="member.role.length > 3">...</a-tag>
              </a-row>
              
            </a-row>
          </div>
        </div>
        <div class="role-list-wrapper">
          <set-role :roleList="roleList" :selectedRoleList="selectedRoleList" @onReload="getAllRoleList" @onCreateRole="onCreateRole"></set-role>
        </div>
      </a-row>
    </section>
  </a-drawer>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import { getRoleListData, getDingDingMemberListData } from '@/api/sys'
import SetRole from '@/components/SetRole/index.vue'
import { Tags_Subject_Colors } from '@/constant'
import useGetAllRoleList from '@/hooks/useGetAllRoleList'
import useDrawer from '@/hooks/useDrawer'

const { visible, toggleDrawer } = useDrawer()
defineExpose({
	toggleDrawer
})

const { roleList, getAllRoleList } = useGetAllRoleList()

onUpdated(() => {
  getMemberList()
  getAllRoleList()
})
const memberList = ref([])
// 获取没有节点的成员列表
const getMemberList = async () => {
  const { data } = await getDingDingMemberListData()
  memberList.value = data
}

const selectedMembers = ref([])
const selectMember = (member) => {
  const ind = selectedMembers.value.findIndex(item => item.id === member.id)
  if (ind < 0) {
    selectedMembers.value.push(member)
  } else {
    selectedMembers.value.splice(ind, 1)
  }
}

const isSelectedMember = (member) => {
  let ret = false
  if (selectedMembers.value.length < 1) {
    ret = false
  } else {
    ret = selectedMembers.value.findIndex(item => item.id === member.id) > -1 ? true : false
  }
  console.log(ret)
  return ret
}
const selectedRoleList = ref([])

const searchRes = ref('')
const onSearchMember = () => {
}

const onSearchRole = () => {
  
}
</script>

<style lang="scss" scoped>
.add-member-wrapper {
  overflow: hidden;
  .member-list-wrapper {
    width: 480px;
    margin-right: 48px;
    .search-member-input {
      width: 480px;
    }
    .all-member-list {
      
      .member-item {
        height: 64px;
        border: 1px solid $colorNeutral5;
        align-items: center;
        padding: 0 16px;
        &.active {
          border: 2px solid $themeColor;
        }
        .member-avatar {
          width: 40px;
          height: 40px;
          background: $themeColor;
          font-size: 16px;
          border-radius: 4px;
          color: #ffffff;
          margin-right: 16px;
        }
        .member-name {
          font-size: 16px;
          color: #000000;
        }
        .member-phone {
          font-size: 12px;
        }
      }
    }
  }
  .role-list-wrapper {
    width: 432px;
  }
}
</style>