/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-09 18:08:47
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-22 11:22:08
 * @FilePath: \basic\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'
import layout from '@/layout/index.vue'
import store from '@/store'

/**
 * 私有路由表
 */
// export const privateRoutes = [
//   UserManageRouter,
//   RoleListRouter,
//   PermissionListRouter,
//   ArticleRouter,
//   ArticleCreaterRouter
// ]


/**
 * 公开路由表
 */
export const publicRoutes = [
  {
    path: '/login',
    component: () =>
      import('../views/login/index.vue')
  },{
    path: '/',
    component: layout,
    redirect: '/workplace',
    children: [
      {
        path: '/workplace',
        name: 'workplace',
        component: () =>
          import('@/views/workplace/index.vue')
      },
      {
        path: '/dashboard',
        name: 'profile',
        component: () =>
          import('@/views/profile/index.vue')
      },
      {
        path: '/form',
        name: 'profile',
        component: () =>
          import('@/views/profile/index.vue')
      },
      {
        path: '/list',
        name: 'profile',
        component: () =>
          import('@/views/profile/index.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () =>
          import('@/views/profile/index.vue')
      },
      {
        path: '/exception',
        name: 'profile',
        component: () =>
          import('@/views/profile/index.vue')
      },
      {
        path: '/result',
        name: 'profile',
        component: () =>
          import('@/views/profile/index.vue')
      },
      {
        path: '/account',
        name: 'profile',
        component: () =>
          import('@/views/profile/index.vue')
      },
      {
        path: '/system',
        name: 'profile',
        component: () =>
          import('@/views/profile/index.vue')
      },
      {
        path: '/jump-url',
        name: 'profile',
        component: () =>
          import('@/views/profile/index.vue')
      },
      {
        path: '/examples',
        name: 'profile',
        component: () =>
          import('@/views/profile/index.vue')
      },
      {
        path: '/nested',
        name: 'profile',
        component: () =>
          import('@/views/profile/index.vue')
      },
      {
        path: '/404',
        name: '404',
        component: () =>
          import('@/views/error-page/404.vue')
      },
      {
        path: '/401',
        name: '401',
        component: () =>
          import('@/views/error-page/401.vue')
      }
    ]
  }
]

/**
 * 初始化路由表
 */
 export function resetRouter() {
  if (
    store.getters.userInfo &&
    store.getters.userInfo.permission &&
    store.getters.userInfo.permission.menus
  ) {
    const menus = store.getters.userInfo.permission.menus
    menus.forEach(menu => {
      router.removeRoute(menu)
    })
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: publicRoutes
})

export default router