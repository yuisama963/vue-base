/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-26 14:04:46
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-26 17:35:49
 * @FilePath: \basic\src\hooks\useDialog.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref } from 'vue'

export default function () {
  const visible = ref(false)
  const toggleDialog = async (state) => {
    visible.value = state
  }
  return {
    visible,
    toggleDialog
  }
}
