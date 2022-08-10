/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-13 13:47:00
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-10 15:04:59
 * @FilePath: \basic\src\store\modules\permission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 专门处理权限路由的模块
import { publicRoutes, privateRoutes } from '@/router'
export default {
  namespaced: true,
  state: {
    // 路由表：初始拥有静态路由权限
    routes: [],
    navMenus: []
  },
  mutations: {
    /**
     * 增加路由
     */
    setRoutes(state, newRoutes) {
      // 永远在静态路由的基础上增加新路由
      state.routes = [...publicRoutes, ...newRoutes]
    },
    setNavMenus(state, menus) {
      state.navMenus = menus
    }
  },
  actions: {
    /**
     * 根据权限筛选路由
     */
    filterRoutes(context, menus) {
      const routes = []
      // 路由权限匹配
      menus.forEach(menu => {
        // 权限名 与 路由的 name 匹配
        // 如果有二级菜单
        if (menu.children && menu.children.length) {
          //const children = []
          menu.children.forEach(submenu => {
            //children.push(...privateRoutes.filter(item => item.meta.id === submenu.id))
            let temp = privateRoutes.filter(item => item.meta.id === submenu.id)[0]
            temp.meta.title = submenu.name
            submenu.path = `/${temp.path}`
            routes.push(temp)
          })
          // let parent = privateRoutes.filter(item => item.meta.id === menu.id)[0]
          // routes.push({...parent, children})
        } else {
          let temp = privateRoutes.filter(item => item.meta.id === menu.id)[0]
          temp.meta.title = menu.name
          menu.path = `/${temp.path}`
          routes.push(temp)
        }
      })
      // 最后添加 不匹配路由进入 404
      // routes.push({
      //   path: '/:catchAll(.*)',
      //   redirect: '/404'
      // })
      context.commit('setRoutes', routes)
      context.commit('setNavMenus', menus)
      return routes
    }
  }
}