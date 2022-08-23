/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-27 16:13:42
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-22 14:22:37
 * @FilePath: \basic\src\api\sys.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

/**
 * 登录
 */
export const login = data => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

/**
 * 获取用户信息
 */
 export const getUserInfo = () => {
  return request({
    url: '/sys/profile'
  })
}

/**
 * 获取组织架构
 */
 export const getOrganizationData = () => {
  return request({
    url: '/sys/organization/list'
  })
}

/**
 * 新增子节点
 */
 export const createNode = data => {
  return request({
    url: '/sys/organization/add',
    method: 'POST',
    data
  })
}

/**
 * 获取节点下的成员列表
 */
 export const getNodeMemberListData = data => {
  return request({
    url: '/sys/organization/memberlist',
    params: data
  })
}

/**
 * 获取角色列表
 */
 export const getRoleListData = () => {
  return request({
    url: '/sys/role/list'
  })
}
