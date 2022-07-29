<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-22 09:59:09
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-26 16:56:45
 * @FilePath: \basic\src\layout\components\AppMain.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="$route.path"></component>
        </keep-alive>
      </transition>

    </router-view>
    
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()

/**
 * 生成 title
 */

const getTit = route => {
  let tit = ''
  if (!route.meta) {
    // 处理无 meta 的路由
    const pathArr = route.path.split('/')
    tit = pathArr[pathArr.length - 1]
  } else {
    tit = generateTit(route.meta.title)
  }
  return tit
}

/**
 * 监听路由变化
 */
const store = useStore()



</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px - 43px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 104px 20px 20px 20px;
  box-sizing: border-box;
}
</style>