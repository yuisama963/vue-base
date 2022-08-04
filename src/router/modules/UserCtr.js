/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-03 16:43:48
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-03 17:39:29
 * @FilePath: \basic\src\router\modules\UserCtr.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import layout from '@/layout'

export default {
  path: '/user-ctr',
  component: layout,
  name: 'userCtr',
  meta: {
    title: '用户中心'
  },
  children: [
    {
      path: '/user-ctr/carrier-mgmt',
      component: () => 
        import('@/views/user-ctr/carrier-mgmt/index.vue'),
      meta: {
        title: '承运方管理',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/user-ctr/carrier-mgmt',
      component: () => 
        import('@/views/user-manage/index'),
      meta: {
        title: '托运人管理',
        icon: 'personnel-manage'
      }
    }
  ]
}