/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-22 10:52:42
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-08 14:50:11
 * @FilePath: \basic\src\router\modules\BusinessCenter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 业务中心
import layout from '@/layout/index.vue'

export default {
  path: '/business-mgmt',
  component: layout,
  meta: { title: '业务中心', icon: ''},
  children: [
    {
      path: '/business-/ranking',
      component: () =>
        import(
          /* webpackChunkName: "article-ranking" */ '@/views/article-ranking/index'
        ),
      meta: {
        title: 'articleRanking',
        icon: 'article-ranking'
      }
    },
  ]
}