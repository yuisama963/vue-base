/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-09 18:08:47
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-23 16:34:02
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
export const privateRoutes = [
  // {
  //   path: '/user-ctr',
  //   component: layout,
  //   name: 'userCtr',
  //   meta: {
  //     title: '用户中心',
  //     id: 'userCtr'
  //   },
  //   children: [
  //     {
  //       path: '/shipper-mgmt',
  //       component: () => 
  //         import('@/views/user-ctr/shipper-mgmt/index.vue'),
  //       meta: {
  //         title: '托运方管理',
  //         icon: 'personnel-manage',
  //         id: 'shipperMgmt'
  //       }
  //     },
  //     {
  //       path: '/carrier-mgmt',
  //       component: () => 
  //         import('@/views/user-ctr/carrier-mgmt/index.vue'),
  //       meta: {
  //         title: '承运方管理',
  //         icon: 'personnel-manage',
  //         id: 'carrierMgmt'
  //       }
  //     },
  //   ]
  // },
  // {
  //   path: '/sys-mgmt',
  //   component: layout,
  //   name: 'sysMgmt',
  //   meta: {
  //     title: '系统管理',
  //     id: 'sysMgmt'
  //   },
  //   children: [
  //     {
  //       path: '/organization',
  //       component: () => 
  //         import('@/views/sys-mgmt/organization/index.vue'),
  //       meta: {
  //         title: '组织架构',
  //         icon: 'personnel-manage',
  //         id: 'organization'
  //       }
  //     },
  //     {
  //       path: '/role-mgmt',
  //       component: () => 
  //         import('@/views/sys-mgmt/role-mgmt/index.vue'),
  //       meta: {
  //         title: '角色管理',
  //         icon: 'personnel-manage',
  //         id: 'roleMgmt'
  //       }
  //     }
  //   ]
  // }
  {
    path: 'dashboard',
    name: 'dashboard',
    component: () =>
      import('@/views/dashboard/index.vue'),
    meta: {
      title: '工作台',
      id: 'dashboard'
    }
  },
  {
    path: 'user-ctr',
    component: layout,
    name: 'userCtr',
    meta: {
      title: '用户中心',
      id: 'userCtr'
    }
  },
  {
    path: 'owner-mgmt',
    component: () => 
      import('@/views/user-ctr/owner-mgmt/index.vue'),
    name: 'ownerMgmt',
    meta: {
      title: '货主管理',
      icon: 'personnel-manage',
      id: 'ownerMgmt'
    }
  },
  {
    path: 'driver-mgmt',
    component: () => 
      import('@/views/user-ctr/driver-mgmt/index.vue'),
    name: 'driverMgmt',
    meta: {
      title: '司机管理',
      icon: 'personnel-manage',
      id: 'driverMgmt'
    }
  },
  {
    path: 'sys-mgmt',
    component: layout,
    name: 'sysMgmt',
    meta: {
      title: '系统管理',
      id: 'sysMgmt'
    },
  },
  {
    path: 'organization',
    component: () => 
      import('@/views/sys-mgmt/organization/index.vue'),
    name: 'organization',
    meta: {
      title: '组织架构',
      icon: 'personnel-manage',
      id: 'organization'
    }
  },
  {
    path: 'role-mgmt',
    component: () => 
      import('@/views/sys-mgmt/role-mgmt/index.vue'),
    name: 'roleMgmt',
    meta: {
      title: '角色管理',
      icon: 'personnel-manage',
      id: 'roleMgmt'
    }
  }
]


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
    name: 'login',
    component: () =>
      import('../views/login/index.vue')
  },{
    path: '/',
    component: layout,
    name: 'home',
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () =>
          import('@/views/dashboard/index.vue'),
        meta: {
          title: '工作台',
          id: 'dashboard'
        }
      }
    ]
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