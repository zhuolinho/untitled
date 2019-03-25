module.exports = {menus: [
  {
    name: '活动管理',
    icon: 'fa-bullhorn',
    router: '/market',
    children: [
      {
        name: '有药活动管理',
        icon: '',
        router: '/market/activity/list',
        children: [{
          uri: '/ipo-bapigateway/v1/marketing/ipoActivities',
          name: '列表查询',
          method: 'GET',
          description: '列表查询',
        },{
          uri: '/ipo-bapigateway/v1/marketing/ipoActivity.json',
          name: '创建',
          method: 'POST',
          description: '创建',
        },{
          uri: '/ipo-bapigateway/v1/marketing/ipoActivity/',
          name: '编辑查询',
          method: 'GET',
          description: '编辑查询',
        },{
          uri: '/ipo-bapigateway/v1/marketing/ipoActivity/change/',
          name: '设为入口',
          method: 'GET',
          description: '设为入口',
        },{
          uri: '/ipo-bapigateway/v1/marketing/ipoActivity/id/sendResult.json',
          name: '推送通知',
          method: 'POST',
          description: '推送通知',
        },{
          uri: '/ipo-bapigateway/common/v1/marketing/ipoActivity/yx/export',
          name: '导出报表',
          method: 'POST',
          description: '导出报表',
        },{
          uri: '/ipo-bapigateway/v1/marketing/ipoActivity/id/canView/true',
          name: '可见',
          method: 'POST',
          description: '可见',
        },{
          uri: '/ipo-bapigateway/v1/activity/id/stocks',
          name: '查看编辑库存',
          method: 'GET',
          description: '查看编辑库存',
        }]
      }, {
        name: 'concepts活动管理',
        icon: '',
        router: '/market/conceptactivity/list',
        children: [{
          uri: '/ipo-bapigateway/v1/marketing/ipoActivities',
          name: '列表查询',
          method: 'GET',
          description: '列表查询',
        },{
          uri: '/ipo-bapigateway/v1/marketing/conceptsIpoActivity.json',
          name: '创建',
          method: 'POST',
          description: '创建',
        },{
          uri: '/ipo-bapigateway/v1/marketing/ipoActivity/',
          name: '编辑查询',
          method: 'GET',
          description: '编辑查询',
        },{
          uri: '/ipo-bapigateway/v1/marketing/ipoActivity/id/prizeNotice.json',
          name: '推送通知',
          method: 'POST',
          description: '推送通知',
        },{
          uri: '/ipo-bapigateway/common/v1/marketing/ipoActivity/concepts/export',
          name: '导出报表',
          method: '',
          description: '导出报表',
        },{
          uri: '/ipo-bapigateway/v1/marketing/ipoActivity/id/canView/false',
          name: '不可见',
          method: 'POST',
          description: '不可见',
        }]
      }, {
        name: '预售管理',
        icon: '',
        router: '/market/presale/list',
        children: [{
          uri: '/ipo-bapigateway/v1/preSellSpu',
          name: '列表查询',
          method: 'GET',
          description: '列表查询',
        }, {
          uri: '',
          name: '插入',
          method: '',
          description: '插入',
        }, {
          uri: '/ipo-bapigateway/v1/preSellSpuAll.json',
          name: '创建',
          method: 'POST',
          description: '创建',
        }, {
          uri: '',
          name: '删除',
          method: '',
          description: '删除预售管理',
        }]
      }, {
        name: '活动图库',
        icon: '',
        router: '/market/gallery/list',
        children: [{
          uri: '/ipo-bapigateway/v1/activity/gallery.json',
          name: '创建',
          method: 'POST',
          description: '创建',
        }]
      }]
  }, {
    name: '新版活动管理',
    icon: 'fa-list-alt',
    router: '/activity',
    children: [
      {
        name: '聚合活动管理',
        icon: '',
        router: '/activity/polymer/list',
        children: [{
          uri: '/js-bapigateway/v1/activity',
          name: '列表查询',
          method: 'GET',
          description: '列表查询',
        },{
          uri: '/js-bapigateway/v1/activity.json',
          name: '创建',
          method: 'POST',
          description: '创建',
        },{
          uri: '/js-bapigateway/v1/activity/view/id/true',
          name: '可见',
          method: 'POST',
          description: '可见',
        },{
          uri: '/js-bapigateway/v1/activity/end/id',
          name: '结束活动',
          method: 'POST',
          description: '结束活动',
        }]
      }, {
        name: '活动管理',
        icon: '',
        router: '/activity/mangement/list',
        children: [{
          uri: '/js-bapigateway/v1/activity',
          name: '列表查询',
          method: 'GET',
          description: '列表查询',
        },{
          uri: '/js-bapigateway/v1/activity.json',
          name: '创建',
          method: 'POST',
          description: '创建',
        },{
          uri: '/js-bapigateway/v1/activity/view/id/true',
          name: '可见',
          method: 'POST',
          description: '可见',
        },{
          uri: '/js-bapigateway/v1/activity/end/',
          name: '结束活动',
          method: 'POST',
          description: '结束活动',
        }]
      }, {
        name: '任务管理',
        icon: '',
        router: '/activity/task/list',
        children: [{
          uri: '/woof-puzzle/v1/tasks',
          name: '列表查询',
          method: 'GET',
          description: '列表查询',
        },{
          uri: '/woof-puzzle/v1/tasks',
          name: '创建',
          method: 'POST',
          description: '创建',
        },{
          uri: 'woof-puzzle/v1/tasks/backEnd/',
          name: '激活',
          method: 'POST',
          description: '激活',
        },{
          uri: 'woof-puzzle/v1/tasks/backEnd/',
          name: '详情查询',
          method: 'GET',
          description: '详情查询',
        }]
      }, {
        name: '参与者管理',
        icon: '',
        router: '/activity/participator/list',
        children: [{
          uri: '/js-bapigateway/v1/activity-notification',
          name: '列表查询',
          method: 'GET',
          description: '列表查询',
        }]
      }, {
        name: '通知管理',
        icon: '',
        router: '/activity/notification/list',
        children: [{
          uri: '/js-bapigateway/v1/activity/fuzzy/query',
          name: '列表查询',
          method: 'GET',
          description: '列表查询',
        },{
          uri: 'js-bapigateway/v1/activity-notification.json',
          name: '创建',
          method: 'POST',
          description: '创建',
        },{
          uri: 'js-bapigateway/v1/activity-notification/',
          name: '详情查询',
          method: 'GET',
          description: '详情查询',
        }]
      }
    ]
  }]};
