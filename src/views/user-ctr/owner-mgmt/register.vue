<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-06 16:31:14
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-13 16:00:55
 * @FilePath: \basic\src\views\user-ctr\owner-mgmt\registerOwner.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<!-- 注册货主页面 -->
  <section>
    <a-steps :current="current" class="steps-wrapper">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <a-row class="steps-content" justify="center">
      <template v-if="current === 0">
        <a-row justify="center" class="owner-type-card-wrapper" @click="chooseType">
          <a-card hoverable class="owner-type-card">
            <template #cover>
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            </template>
            <a-card-meta title="非货主企业" description="物流公司、中介公司等">
            </a-card-meta>
          </a-card>
          <a-card hoverable class="owner-type-card" @click="chooseType">
            <template #cover>
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            </template>
            <a-card-meta title="货主企业" description="直接货源，如甲方、经销商等">
            </a-card-meta>
          </a-card>
          <a-card hoverable class="owner-type-card" @click="chooseType">
            <template #cover>
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            </template>
            <a-card-meta title="个人媒介（暂未开放）" description="掌握货源的个人">
            </a-card-meta>
          </a-card>
        </a-row>
      </template>
      <template v-if="current === 1">
        <register-form/>
      </template>
      <template v-if="current === 2">
        <a-result
          status="success"
          title="注册成功"
        >
          <template #extra>
            <div class="success-list">
            <a-row justify="space-between" class="list-item"><span>账号</span><span>18900221004</span></a-row>
            <a-row justify="space-between" class="list-item"><span>密码</span><span>无，使用微信扫码登录</span></a-row>
            <a-row justify="space-between" class="list-item"><span>货主参数配置</span><right-outlined /></a-row>
            <a-row justify="space-between" class="list-item"><span>货主功能配置</span><right-outlined /></a-row>
            <a-row justify="space-between" class="list-item"><span>继续注册</span><right-outlined /></a-row>
            </div>
          </template>
        </a-result>
      </template>
    </a-row>
    <div class="steps-action">
      <a-button v-if="current < steps.length - 1" type="primary" @click="next" class="next-btn">下一步</a-button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { RightOutlined } from '@ant-design/icons-vue'
import registerForm from './components/registerForm.vue'
const current = ref(0)
const steps = [{
        title: '选择类型',
        content: '选择类型',
      }, {
        title: '提交信息',
        content: '提交信息',
      }, {
        title: '完成注册',
        content: '完成注册',
      }]
const next = () => {
  current.value++;
}

const chooseType = () => {

}
</script>

<style lang="scss" scoped>
.steps-wrapper {
  width: 856px;
  margin: 40px auto;
}
.success-list{
  width: 400px;
  margin: 0 auto;
}
.list-item {
  width: 400px;
  padding: 16px 24px;
  font-size: 14px;
  color: #000000;
  border: 1px solid #D9D9D9;
  margin-bottom: 24px;
}
.owner-type-card-wrapper {
  margin-bottom: 92px;
}
.owner-type-card {
  width: 240px;
  margin-right: 48px;
}
.next-btn {
  width: 200px;
}
</style>