/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-17 11:18:40
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-17 11:19:01
 * @FilePath: \basic\src\utils\tree.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function arrayFlagLevel(array, level) {
  if (!array || !array.length) return;
  array.forEach(item => {
     item.level = level;
     if (item.children && item.children.length) {
         arrayFlagLevel(item.children, level + 1);
     }
  })
}