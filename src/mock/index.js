/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-27 16:00:51
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-30 16:48:21
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
                { id: "dashboard", name: '工作台'},
                // { id: "businessCtr", name: '业务中心'},
                // { id: "operationCtr", name: '运营中心'},
                // { id: "settlementCtr", name: '结算中心'},
                { id: "userCtr", name: '用户中心', children: [
                  {id: 'ownerMgmt', name: "货主管理"},
                  {id: 'driverMgmt', name: "司机管理"}]},
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

Mock.mock('/api/sys/organization/list', 'get', (params) => {
  return {
    "success": true,
    "code": 200,
    "data": {
      "id": "hyy",
      "name": "货有友平台",
      "count": 100,
      "children": [
        {
          "id": "operationDept",
          "name": "运营部",
          "count": 10,
          "children": [
            {
              "id": "Logistic regression",
              "name": "运营一组",
              "count": 5,
            },
            {
              "id": "Linear discriminant analysis",
              "name": "运营二组",
              "count": 2,
            },
            {
              "id": "Rules",
              "name": "运营三组",
              "count": 2,
            },
            {
              "id": "Decision trees",
              "name": "运营四组",
              "count": 2,
            },
            {
              "id": "Naive Bayes",
              "name": "运营五组",
              "count": 2,
            },
            {
              "id": "K nearest neighbor",
              "name": "运营六组",
              "count": 2,
            },
            {
              "id": "Probabilistic neural network",
              "name": "运营七组",
              "count": 2,
            },
            {
              "id": "Support vector machine",
              "name": "运营八组",
              "count": 2,
            }
          ]
        },
        {
          "id": "techDept",
          "name": "技术部",
          "count": 20,
          "children": [
            {
              "id": "Models diversity",
              "name": "技术一组",
              "count": 2,
              "children": [
                {
                  "id": "Different initializations",
                  "name": "ios一组",
                  "count": 2,
                },
                {
                  "id": "Different parameter choices",
                  "name": "ios二组",
                  "count": 2,
                },
                {
                  "id": "Different architectures",
                  "name": "ios三组",
                  "count": 2,
                },
                {
                  "id": "Different modeling methods",
                  "name": "ios四组",
                  "count": 2,
                },
                {
                  "id": "Different training sets",
                  "name": "安卓一组",
                  "count": 2,
                },
                {
                  "id": "Different feature sets",
                  "name": "安卓二组",
                  "count": 2,
                }
              ]
            },
            {
              "id": "Methods",
              "name": "技术二组",
              "count": 20,
              "children": [
                {
                  "id": "Classifier selection",
                  "name": "前端一组",
                  "count": 70,
                },
                {
                  "id": "Classifier fusion",
                  "name": "前端二组",
                  "count": 70,
                }
              ]
            },
            {
              "id": "Common",
              "name": "技术三组",
              "count": 20,
              "children": [
                {
                  "id": "Bagging",
                  "name": "后台一组",
                  "count": 70,
                },
                {
                  "id": "Boosting",
                  "name": "后台二组",
                  "count": 70,
                },
                {
                  "id": "AdaBoost",
                  "name": "后台三组",
                  "count": 70,
                }
              ]
            }
          ]
        },
        {
          "id": "financeDept",
          "name": "财务部",
          "count": 70,
          "children": [
            {
              "id": "Multiple linear regression",
              "name": "财务一组",
              "count": 70,
            },
            {
              "id": "Partial least squares",
              "name": "财务二组",
              "count": 70,
            },
            {
              "id": "Multi-layer feedforward neural network",
              "name": "财务三组",
              "count": 70,
            },
            {
              "id": "General regression neural network",
              "name": "财务四组",
              "count": 70,
            },
            {
              "id": "Support vector regression",
              "name": "财务五组",
              "count": 70,
            }
          ]
        }
      ]
    },
    "message": "执行成功"
  }
})

Mock.mock('/api/sys/organization/add', 'post', (params) => {
  return {
    "success": true,
    "code": 200,
    "data": null,
    "message": "执行成功"
  }
})

Mock.mock('/api/sys/organization/list2', 'get', (params) => {
  return {
    "success": true,
    "code": 200,
    "data": {
      "id": "hyy",
      "name": "货有友平台",
      "count": 100,
      "children": [
        {
          "id": "marketDept",
          "name": "市场部",
          "count": 10,
          "children": []
        },
        {
          "id": "operationDept",
          "name": "运营部",
          "count": 10,
          "children": [
            {
              "id": "Logistic regression",
              "name": "运营一组",
              "count": 5,
            },
            {
              "id": "Linear discriminant analysis",
              "name": "运营二组",
              "count": 2,
            },
            {
              "id": "Rules",
              "name": "运营三组",
              "count": 2,
            },
            {
              "id": "Decision trees",
              "name": "运营四组",
              "count": 2,
            },
            {
              "id": "Naive Bayes",
              "name": "运营五组",
              "count": 2,
            },
            {
              "id": "K nearest neighbor",
              "name": "运营六组",
              "count": 2,
            },
            {
              "id": "Probabilistic neural network",
              "name": "运营七组",
              "count": 2,
            },
            {
              "id": "Support vector machine",
              "name": "运营八组",
              "count": 2,
            }
          ]
        },
        {
          "id": "techDept",
          "name": "技术部",
          "count": 20,
          "children": [
            {
              "id": "Models diversity",
              "name": "技术一组",
              "count": 2,
              "children": [
                {
                  "id": "Different initializations",
                  "name": "ios一组",
                  "count": 2,
                },
                {
                  "id": "Different parameter choices",
                  "name": "ios二组",
                  "count": 2,
                },
                {
                  "id": "Different architectures",
                  "name": "ios三组",
                  "count": 2,
                },
                {
                  "id": "Different modeling methods",
                  "name": "ios四组",
                  "count": 2,
                },
                {
                  "id": "Different training sets",
                  "name": "安卓一组",
                  "count": 2,
                },
                {
                  "id": "Different feature sets",
                  "name": "安卓二组",
                  "count": 2,
                }
              ]
            },
            {
              "id": "Methods",
              "name": "技术二组",
              "count": 20,
              "children": [
                {
                  "id": "Classifier selection",
                  "name": "前端一组",
                  "count": 70,
                },
                {
                  "id": "Classifier fusion",
                  "name": "前端二组",
                  "count": 70,
                }
              ]
            },
            {
              "id": "Common",
              "name": "技术三组",
              "count": 20,
              "children": [
                {
                  "id": "Bagging",
                  "name": "后台一组",
                  "count": 70,
                },
                {
                  "id": "Boosting",
                  "name": "后台二组",
                  "count": 70,
                },
                {
                  "id": "AdaBoost",
                  "name": "后台三组",
                  "count": 70,
                }
              ]
            }
          ]
        },
        {
          "id": "financeDept",
          "name": "财务部",
          "count": 70,
          "children": [
            {
              "id": "Multiple linear regression",
              "name": "财务一组",
              "count": 70,
            },
            {
              "id": "Partial least squares",
              "name": "财务二组",
              "count": 70,
            },
            {
              "id": "Multi-layer feedforward neural network",
              "name": "财务三组",
              "count": 70,
            },
            {
              "id": "General regression neural network",
              "name": "财务四组",
              "count": 70,
            },
            {
              "id": "Support vector regression",
              "name": "财务五组",
              "count": 70,
            }
          ]
        }
      ]
    },
    "message": "执行成功"
  }
})

Mock.mock('/api/sys/organization/memberlist', 'get', (params) => {
  return {
    "success":true,
    "code":200,
    "data":[
      {
        id: 1,
        name: '汤跃鹏',
        phone: '18900221004',
        status: true,
        role: ['运营主管', '调度']
      },
      {
        id: 2,
        name: '欧凯怡',
        phone: '18900221004',
        status: true,
        role: ['运营']
      },
      {
        id: 3,
        name: 'xx3',
        phone: '18900221004',
        status: true,
        role: ['1','2', '3', 4, 5, 6, 7, 8]
      },
      {
        id: 4,
        name: 'xx4',
        phone: '18900221004',
        status: true,
        role: ['green','beekblue', 'red']
      },
      {
        id: 5,
        name: 'xx5',
        phone: '18900221004',
        status: true,
        role: ['green','beekblue', 'red']
      },
      {
        id: 6,
        name: 'xx6',
        phone: '18900221004',
        status: true,
        role: ['green','beekblue', 'red']
      },
      {
        id: 7,
        name: 'xx7',
        phone: '18900221004',
        status: true,
        role: ['green','beekblue', 'red']
      },
      {
        id: 8,
        name: 'xx8',
        phone: '18900221004',
        status: true,
        role: ['green','beekblue', 'red']
      },
      {
        id: 9,
        name: 'xx9',
        phone: '18900221004',
        status: true,
        role: ['green','beekblue', 'red']
      },
      {
        id: 10,
        name: 'x10',
        phone: '18900221004',
        status: true,
        role: ['green','beekblue', 'red']
      },
      {
        id: 11,
        name: 'x11',
        phone: '18900221004',
        status: true,
        role: ['green','beekblue', 'red']
      },
      {
        id: 12,
        name: 'x12',
        phone: '18900221004',
        status: true,
        role: ['green','beekblue', 'red']
      },
      {
        id: 13,
        name: 'x13',
        phone: '18900221004',
        status: true,
        role: ['green','beekblue', 'red']
      },
      {
        id: 14,
        name: 'x14',
        phone: '18900221004',
        status: true,
        role: ['green','beekblue', 'red']
      },
      {
        id: 15,
        name: 'x15',
        phone: '18900221004',
        status: true,
        role: ['green','beekblue', 'red']
      },
      {
        id: 16,
        name: 'x16',
        phone: '18900221004',
        status: true,
        role: ['green','beekblue', 'red']
      },
      {
        id: 17,
        name: 'x17',
        phone: '18900221004',
        status: true,
        role: ['green','beekblue', 'red']
      },
      {
        id: 18,
        name: 'x18',
        phone: '18900221004',
        status: true,
        role: ['green','beekblue', 'red']
      },
      {
        id: 19,
        name: 'x19',
        phone: '18900221004',
        status: true,
        role: ['green','beekblue', 'red']
      },
      {
        id: 20,
        name: 'x20',
        phone: '18900221004',
        status: true,
        role: ['green','beekblue', 'red']
      }
    ],
    "message":"获取资料成功"
  }
})

Mock.mock('/api/sys/role/list', 'get', (params) => {
  return {
    "success":true,
    "code":200,
    "data":[
      {
        id: 1,
        name: '运营主管',
        createTime: '2022-05-20 12:02:40',
        creator: '颜晓峰',
        lastUpdateTime: '2022-05-20 12:02:40',
        lastEditor: '颜晓峰',
        count: 1,
        des: '备注备注备注',
        status: true
      },
      {
        id: 2,
        name: '技术主管',
        createTime: '2022-05-20 12:02:40',
        creator: '颜晓峰',
        lastUpdateTime: '2022-05-20 12:02:40',
        lastEditor: '颜晓峰',
        count: 1,
        des: '备注备注备注',
        status: false
      },
      {
        id: 3,
        name: '天地人管理员',
        createTime: '2022-05-20 12:02:40',
        creator: '颜晓峰',
        lastUpdateTime: '2022-05-20 12:02:40',
        lastEditor: '颜晓峰',
        count: 1,
        des: '备注备注备注',
        status: true
      },
      {
        id: 4,
        name: '货有友开发',
        createTime: '2022-05-20 12:02:40',
        creator: '颜晓峰',
        lastUpdateTime: '2022-05-20 12:02:40',
        lastEditor: '颜晓峰',
        count: 1,
        des: '备注备注备注',
        status: true
      },
      {
        id: 5,
        name: '产品经理',
        createTime: '2022-05-20 12:02:40',
        creator: '颜晓峰',
        lastUpdateTime: '2022-05-20 12:02:40',
        lastEditor: '颜晓峰',
        count: 1,
        des: '备注备注备注',
        status: true
      },
      {
        id: 6,
        name: '千隼运维',
        createTime: '2022-05-20 12:02:40',
        creator: '颜晓峰',
        lastUpdateTime: '2022-05-20 12:02:40',
        lastEditor: '颜晓峰',
        count: 1,
        des: '备注备注备注',
        status: true
      },
      {
        id: 7,
        name: '管理员7',
        createTime: '2022-05-20 12:02:40',
        creator: '颜晓峰',
        lastUpdateTime: '2022-05-20 12:02:40',
        lastEditor: '颜晓峰',
        count: 1,
        des: '备注备注备注',
        status: true
      },
      {
        id: 8,
        name: '运维',
        createTime: '2022-05-20 12:02:40',
        creator: '颜晓峰',
        lastUpdateTime: '2022-05-20 12:02:40',
        lastEditor: '颜晓峰',
        count: 1,
        des: '备注备注备注',
        status: true
      },
      {
        id: 9,
        name: '调度',
        createTime: '2022-05-20 12:02:40',
        creator: '颜晓峰',
        lastUpdateTime: '2022-05-20 12:02:40',
        lastEditor: '颜晓峰',
        count: 1,
        des: '备注备注备注',
        status: true
      },
      {
        id: 10,
        name: '角色名10',
        createTime: '2022-05-20 12:02:40',
        creator: '颜晓峰',
        lastUpdateTime: '2022-05-20 12:02:40',
        lastEditor: '颜晓峰',
        count: 1,
        des: '备注备注备注',
        status: true
      },
      {
        id: 11,
        name: '角色名11',
        createTime: '2022-05-20 12:02:40',
        creator: '颜晓峰',
        lastUpdateTime: '2022-05-20 12:02:40',
        lastEditor: '颜晓峰',
        count: 1,
        des: '备注备注备注',
        status: true
      },
      {
        id: 12,
        name: '角色名12',
        createTime: '2022-05-20 12:02:40',
        creator: '颜晓峰',
        lastUpdateTime: '2022-05-20 12:02:40',
        lastEditor: '颜晓峰',
        count: 1,
        des: '备注备注备注',
        status: true
      },
      {
        id: 13,
        name: '角色名13',
        createTime: '2022-05-20 12:02:40',
        creator: '颜晓峰',
        lastUpdateTime: '2022-05-20 12:02:40',
        lastEditor: '颜晓峰',
        count: 1,
        des: '备注备注备注',
        status: true
      },
      {
        id: 14,
        name: '角色名14',
        createTime: '2022-05-20 12:02:40',
        creator: '颜晓峰',
        lastUpdateTime: '2022-05-20 12:02:40',
        lastEditor: '颜晓峰',
        count: 1,
        des: '备注备注备注',
        status: true
      },
      {
        id: 15,
        name: '角色名15',
        createTime: '2022-05-20 12:02:40',
        creator: '颜晓峰',
        lastUpdateTime: '2022-05-20 12:02:40',
        lastEditor: '颜晓峰',
        count: 1,
        des: '备注备注备注',
        status: true
      }
    ],
    "message":"获取资料成功"
  }
})

Mock.mock('/api/sys/dingding/list', 'get', (params) => {
  return {
    "success":true,
    "code":200,
    "data":[
      {
        id: 1,
        name: '汤岳鹏',
        phone: '18900221004',
        role: ['运营主管'],

      },
      {
        id: 2,
        name: '李剑',
        phone: '18900221004',
        role: ['运营主管', '产品经理', '千隼运维', 'xxx'],
      },
      {
        id: 3,
        name: '曾燕辉',
        phone: '18900221004',
        role: [],
      },
      {
        id: 4,
        name: '曾国梁',
        phone: '18900221004',
        role: ['天地人管理员', '货有友开发'],
      },
      {
        id: 5,
        name: '曾俊杰',
        phone: '18900221004',
        role: ['天地人管理员', '货有友开发'],
      },
      {
        id: 6,
        name: '曾某某',
        phone: '18900221004',
        role: [],
      },
      {
        id: 7,
        name: '曾某某',
        phone: '18900221004',
        role: [],
      },
      {
        id: 8,
        name: '曾某某',
        phone: '18900221004',
        role: [],
      },
      {
        id: 9,
        name: '曾某某',
        phone: '18900221004',
        role: [],
      },
      {
        id: 10,
        name: '曾某某',
        phone: '18900221004',
        role: [],
      }
    ],
    "message":"获取资料成功"
  }
})

Mock.mock('/api/user/owner/list', 'get', (params) => {
  return {
    "success":true,
    "code":200,
    "data":[
      {
        id: 1,
        name: '汤岳鹏',
        phone: '18900221004',
        role: ['运营主管'],

      },
      {
        id: 2,
        name: '李剑',
        phone: '18900221004',
        role: ['运营主管', '产品经理', '千隼运维', 'xxx'],
      },
      {
        id: 3,
        name: '曾燕辉',
        phone: '18900221004',
        role: [],
      },
      {
        id: 4,
        name: '曾国梁',
        phone: '18900221004',
        role: ['天地人管理员', '货有友开发'],
      },
      {
        id: 5,
        name: '曾俊杰',
        phone: '18900221004',
        role: ['天地人管理员', '货有友开发'],
      },
      {
        id: 6,
        name: '曾某某',
        phone: '18900221004',
        role: [],
      },
      {
        id: 7,
        name: '曾某某',
        phone: '18900221004',
        role: [],
      },
      {
        id: 8,
        name: '曾某某',
        phone: '18900221004',
        role: [],
      },
      {
        id: 9,
        name: '曾某某',
        phone: '18900221004',
        role: [],
      },
      {
        id: 10,
        name: '曾某某',
        phone: '18900221004',
        role: [],
      }
    ],
    "message":"获取资料成功"
  }
})