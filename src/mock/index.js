/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-27 16:00:51
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-12 18:01:19
 * @FilePath: \basic\src\mock\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//mock.js 文件
import Mock from 'mockjs' // 引入mockjs
const Random = Mock.Random

Mock.mock('/api/sys/login', 'post', (params) => {
  return {
    "success": true,
    "code": 10000,
    "data": {
        "token": "Bearer d8c6ed7a-3fd4-46e4-a477-b20d1ce9cda0"
    },
    "message": "执行成功"
  }
})

Mock.mock('/api/sys/profile', 'get', (params) => {
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
                { id: "workplace", name: '工作台'},
                // { id: "businessCtr", name: '业务中心'},
                // { id: "operationCtr", name: '运营中心'},
                // { id: "settlementCtr", name: '结算中心'},
                { id: "userCtr", name: '用户中心', children: [
                  {id: 'shipperMgmt', name: "托运方管理"},
                  {id: 'carrierMgmt', name: "承运方管理"}]},
                // { id: "validityMgmt", name: '合规性管理'},
                { id: "sysMgmt", name: '系统管理', children: [
                  {id: 'organization', name: "组织架构"},
                  {id: 'roleMgmt', name: "角色管理"}
                ]},
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

Mock.mock('/api/sys/getOrganization', 'get', (params) => {
  return {
    "success": true,
    "code": 200,
    "data": {
      "id": "Modeling Methods",
      "children": [
        {
          "id": "Classification",
          "children": [
            {
              "id": "Logistic regression"
            },
            {
              "id": "Linear discriminant analysis"
            },
            {
              "id": "Rules"
            },
            {
              "id": "Decision trees"
            },
            {
              "id": "Naive Bayes"
            },
            {
              "id": "K nearest neighbor"
            },
            {
              "id": "Probabilistic neural network"
            },
            {
              "id": "Support vector machine"
            }
          ]
        },
        {
          "id": "Consensus",
          "children": [
            {
              "id": "Models diversity",
              "children": [
                {
                  "id": "Different initializations"
                },
                {
                  "id": "Different parameter choices"
                },
                {
                  "id": "Different architectures"
                },
                {
                  "id": "Different modeling methods"
                },
                {
                  "id": "Different training sets"
                },
                {
                  "id": "Different feature sets"
                }
              ]
            },
            {
              "id": "Methods",
              "children": [
                {
                  "id": "Classifier selection"
                },
                {
                  "id": "Classifier fusion"
                }
              ]
            },
            {
              "id": "Common",
              "children": [
                {
                  "id": "Bagging"
                },
                {
                  "id": "Boosting"
                },
                {
                  "id": "AdaBoost"
                }
              ]
            }
          ]
        },
        {
          "id": "Regression",
          "children": [
            {
              "id": "Multiple linear regression"
            },
            {
              "id": "Partial least squares"
            },
            {
              "id": "Multi-layer feedforward neural network"
            },
            {
              "id": "General regression neural network"
            },
            {
              "id": "Support vector regression"
            }
          ]
        }
      ]
    },
    "message": "执行成功"
  }
})