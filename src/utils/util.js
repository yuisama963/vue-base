/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-31 20:29:23
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-02 20:44:39
 * @FilePath: \basic\src\utils\util.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

export function getQueryString (queryString, name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  console.log(reg)
  var r = queryString.substr(1).match(reg);
  console.log(r)
  if (r != null) {
      return decodeURI(r[2]);
  }
  return null;
}
