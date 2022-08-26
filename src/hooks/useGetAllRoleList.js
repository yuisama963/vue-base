/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-26 14:41:24
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-26 19:18:46
 * @FilePath: \basic\src\hooks\useGetRoleList.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref } from 'vue'
import { getRoleListData } from '@/api/sys'

export default function () {
  const roleList = ref([])
  const getAllRoleList = async () => {
    const { data } = await getRoleListData()
    roleList.value = data
  }
  return {
    roleList,
    getAllRoleList
  }
}