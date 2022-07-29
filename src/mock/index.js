/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-27 16:00:51
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-28 15:46:27
 * @FilePath: \basic\src\mock\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//mock.js 文件
const Random = Mock.Random

Mock.mock('/api/login', 'post', (params) => {
  return {
    "success": true,
    "code": 10000,
    "data": {
        "token": "Bearer d8c6ed7a-3fd4-46e4-a477-b20d1ce9cda0"
    },
    "message": "执行成功"
  }
})

Mock.mock('/sys/profile', 'get', (params) => {
  return {
    "success":true,
    "code":200,
    "data":{
        "role":[
            {
                "id":"1",
                "title":"超级管理员"


                
            }
        ],
        "_id":"612710a0ec87aa543c9c341d",
        "id":"0",
        "username":"super-admin",
        "title":"超级管理员",
        "avatar":"https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png",
        "permission":{
            "menus":[
                "userManage",
                "roleList",
                "permissionList",
                "articleRanking",
                "articleCreate"
            ],
            "points":[
                "distributeRole",
                "importUser",
                "removeUser",
                "distributePermission"
            ]
        }
    },
    "message":"获取资料成功"
  }
})