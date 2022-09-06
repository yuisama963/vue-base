/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-09 18:08:47
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-06 16:45:37
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
  // {
  //   path: 'user-ctr',
  //   component: layout,
  //   name: 'userCtr',
  //   meta: {
  //     title: '用户中心',
  //     id: 'userCtr'
  //   }
  // },
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
      id: 'driverMgmt'
    }
  },
  // {
  //   path: 'sys-mgmt',
  //   component: layout,
  //   name: 'sysMgmt',
  //   meta: {
  //     title: '系统管理',
  //     id: 'sysMgmt'
  //   },
  // },
  {
    path: 'organization',
    component: () => 
      import('@/views/sys-mgmt/organization/index.vue'),
    name: 'organization',
    meta: {
      title: '组织架构',
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
      id: 'roleMgmt'
    }
  }
]


/**
 * 公开路由表
 */
export const publicRoutes = [
  {
    path: '/old-login',
    name: 'Oldlogin',
    component: () =>
      import('../views/login/index.vue')
  },{
    path: '/dd-login',
    name: 'ddLogin',
    component: () =>
      import('../views/login/ddLogin.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import('../views/login/dingLogin.vue')
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
      },
      {
        path: 'create-role',
        name: 'createRole',
        component: () =>
          import('@/views/sys-mgmt/role-mgmt/detail.vue'),
        meta: {
          title: '角色主页',
          id: 'createRole'
        }
      },
      {
        path: 'edit-role',
        name: 'editRole',
        component: () =>
          import('@/views/sys-mgmt/role-mgmt/detail.vue'),
        meta: {
          title: '角色主页',
          id: 'editRole'
        }
      },
      {
        path: 'owner-mgmt',
        name: 'ownerMgmt',
        component: () =>
          import('@/views/user-ctr/owner-mgmt/index.vue'),
        meta: {
          title: '货主管理',
          id: 'ownerMgmt'
        }
      },
      {
        path: 'register-owner',
        name: 'registerOwner',
        component: () =>
          import('@/views/user-ctr/owner-mgmt/register.vue'),
        meta: {
          title: '注册货主',
          id: 'registerOwner'
        }
      },
      {
        path: 'owner-detail',
        name: 'owner-detail',
        component: () =>
          import('@/views/user-ctr/owner-mgmt/detail.vue'),
        meta: {
          title: '注册货主',
          id: 'registerOwner'
        }
      },
      {
        path: 'driver-mgmt',
        name: 'driverMgmt',
        component: () =>
          import('@/views/user-ctr/driver-mgmt/index.vue'),
        meta: {
          title: '司机管理',
          id: 'driverMgmt'
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