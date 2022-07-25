/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-09 11:29:12
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-09 11:48:40
 * @FilePath: \basic\src\utils\auth.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from "@/constant"
import { setItem } from "@/utils/storage"
/**
 * 获取时间戳
 */
export function setTimeStamp() {
    setItem(TIME_STAMP, Date.now())
}
/**
 * 是否超时
 */
export function isCheckTimeout() {
    // 当前时间戳
    var currentTime = Date.now()
    // 缓存时间戳
    var timeStamp = getTimeStamp()
    return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}