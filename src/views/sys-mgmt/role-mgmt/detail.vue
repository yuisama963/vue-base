<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-26 14:55:38
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-13 17:22:26
 * @FilePath: \basic\src\views\sys-mgmt\role-mgmt\detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="6">
        <a-card title="基础信息">
          <label for="">角色名称</label>
          <a-input v-model:value="value"></a-input>
          <label for="">备注</label>
          <a-textarea
      v-model:value="value2"
      placeholder="请输入备注"
      :auto-size="{ minRows: 2, maxRows: 5 }"
    />
        </a-card>
      </a-col>
      <a-col :span="9">
        <a-card title="功能权限">
          <a-tree
            v-model:expandedKeys="expandedKeys"
            v-model:selectedKeys="selectedKeys"
            v-model:checkedKeys="checkedKeys"
            checkable
            :tree-data="treeData"
          >
            <template #title="{ title, key }">
              <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{ title }}</span>
              <template v-else>{{ title }}</template>
            </template>
          </a-tree>
        </a-card>
      </a-col>
      <a-col :span="9">
        <a-card title="数据权限">
          <a-tree
            v-model:expandedKeys="expandedKeys"
            v-model:selectedKeys="selectedKeys"
            v-model:checkedKeys="checkedKeys"
            checkable
            :tree-data="treeData"
          >
            <template #title="{ title, key }">
              <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{ title }}</span>
              <template v-else>{{ title }}</template>
            </template>
          </a-tree>
        </a-card>
      </a-col>
    </a-row>
    <footer class="footer">
      <a-button type="primary" html-type="submit">创建角色</a-button>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const formData = ref({
  roleName: '',
  roleDes: ''
})
const treeData = [{
  title: 'parent 1',
  key: '0-0',
  children: [{
    title: 'parent 1-0',
    key: '0-0-0',
    disabled: true,
    children: [{
      title: 'leaf',
      key: '0-0-0-0',
      disableCheckbox: true,
    }, {
      title: 'leaf',
      key: '0-0-0-1',
    }],
  }, {
    title: 'parent 1-1',
    key: '0-0-1',
    children: [{
      key: '0-0-1-0',
      title: 'sss',
    }],
  }],
}];
const expandedKeys = ref(['0-0-0', '0-0-1']);
    const selectedKeys = ref(['0-0-0', '0-0-1']);
    const checkedKeys = ref(['0-0-0', '0-0-1']);
</script>

<style lang="scss" scoped>
.role-name-input {
  width: 400px;
}
.role-des-input {
  width: 506px;
}
.footer {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 24px;
}
</style>