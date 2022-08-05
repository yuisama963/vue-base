/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-09 18:08:47
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-04 17:46:04
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
    path: '/g6',
    component: () =>
      import('../views/g6/index.vue')
  },
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
  },
  {
    path: '/user-ctr',
    component: layout,
    name: 'userCtr',
    meta: {
      title: '用户中心'
    },
    children: [
      {
        path: '/carrier-mgmt',
        component: () => 
          import('@/views/user-ctr/carrier-mgmt/index.vue'),
        meta: {
          title: '承运方管理',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/shipper-mgmt',
        component: () => 
          import('@/views/user-ctr/shipper-mgmt/index.vue'),
        meta: {
          title: '托运方管理',
          icon: 'personnel-manage'
        }
      }
    ]
  },
  {
    path: '/sys-mgmt',
    component: layout,
    name: 'sysMgmt',
    meta: {
      title: '系统管理'
    },
    children: [
      {
        path: '/role-mgmt',
        component: () => 
          import('@/views/sys-mgmt/role-mgmt/index.vue'),
        meta: {
          title: '角色管理',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/organization',
        component: () => 
          import('@/views/sys-mgmt/organization/index.vue'),
        meta: {
          title: '组织架构',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/menu-mgmt',
        component: () => 
          import('@/views/sys-mgmt/menu-mgmt/index.vue'),
        meta: {
          title: '菜单管理',
          icon: 'personnel-manage'
        }
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