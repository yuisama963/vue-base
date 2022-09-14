/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-29 15:05:41
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-13 20:26:43
 * @FilePath: \basic\src\hooks\useDrawer.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref } from 'vue'

export default function () {
  const visible = ref(false)
  const toggleDrawer = async (state) => {
    visible.value = state
  }
  return {
    visible,
    toggleDrawer
  }
}