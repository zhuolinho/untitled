module.exports = {
    menus: [
        {
            name: '欢迎',
            icon: 'fa-dashboard',
            router: '/welcome',
            children: [
                {
                    name: 'dashboard',
                    icon: '',
                    router: '/welcome/dashboard',
                    children: [{
                        uri: '/ipo-bapigateway/v1/dashboard/index',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }]
                },
                {
                    name: '流程定义',
                    icon: '',
                    router: '/welcome/flowdef',
                    children: [{
                        uri: '/ipo-bapigateway/v1/process/order',
                        name: '自由交易订单流程定义',
                        method: 'GET',
                        description: '自由交易订单流程定义',
                    }, {
                        uri: '/ipo-bapigateway/v1/process/fakeProduct',
                        name: '假货处理流程定义',
                        method: 'GET',
                        description: '假货处理流程定义',
                    }, {
                        uri: '/ipo-bapigateway/v1/process/returnProduct',
                        name: '退货流程定义',
                        method: 'GET',
                        description: '退货流程定义',
                    }, {
                        uri: '/ipo-bapigateway/v1/process/buyTicket',
                        name: '挂买单处理流程定义',
                        method: 'GET',
                        description: '挂买单处理流程定义',
                    }, {
                        uri: '/ipo-bapigateway/v1/process/sellTicket',
                        name: '挂卖单处理流程定义',
                        method: 'GET',
                        description: '挂卖单处理流程定义',
                    }],
                },
            ],
        }, {
            name: '商品管理',
            icon: 'fa-shopping-bag',
            router: '/product',
            children: [
                {
                    name: '商品列表',
                    icon: '',
                    router: '/product/list',
                    children: [{
                        uri: '/ipo-bapigateway/v1/spu/query',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/es/spu/',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/sneaker/spu.json',
                        name: '创建',
                        method: 'POST',
                        description: '创建',
                    }, {
                        uri: '/ipo-bapigateway/v1/es/spu/id/index',
                        name: '手动索引',
                        method: 'POST',
                        description: '手动索引',
                    }, {
                        uri: '/ipo-bapigateway/v1/spu/sneaker/id.json',
                        name: '更新',
                        method: 'POST',
                        description: '更新',
                    }, {
                        uri: '/ipo-bapigateway/v1/trade/sneaker/popular.json',
                        name: '热门推荐',
                        method: 'POST',
                        description: '热门推荐',
                    }, {
                        uri: '/ipo-bapigateway/v1/trade/sneaker/popular/',
                        name: '取消推荐',
                        method: 'POST',
                        description: '取消推荐',
                    }, {
                        uri: '/ipo-bapigateway/v1/sneaker/batchTicketsForBigSeller.json',
                        name: '批量挂售',
                        method: 'POST',
                        description: '批量挂售',
                    }]
                },
                {
                    name: '热门商品',
                    icon: '',
                    router: '/product/hot',
                    children: [{
                        uri: '/ipo-bapigateway/v1/es/spu/',
                        name: '查看编辑',
                        method: 'GET',
                        description: '查看编辑'
                    }, {
                        uri: '/ipo-bapigateway/v1/trade/sneaker/popular.json',
                        name: '编辑推荐',
                        method: 'POST',
                        description: '编辑推荐'
                    }, {
                        uri: '/ipo-bapigateway/v1/trade/sneaker/popular/',
                        name: '取消推荐',
                        method: 'DELETE',
                        description: '取消推荐'
                    }]
                },
                {
                    name: '发售日历',//待
                    icon: '',
                    router: '/product/calendar',
                    children: [{
                        uri: '/ipo-bapigateway/v1/config/clientReleaseCalendarDays',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/spu/releaseCalendar/query',
                        name: '列表查询2',
                        method: 'GET',
                        description: '列表查询2',
                    }, {
                        uri: '/ipo-bapigateway/v1/spu/releaseCalendar/query',
                        name: '列表查询3',
                        method: 'GET',
                        description: '列表查询3',
                    }]
                },
                {
                    name: '全局搜索',
                    icon: '',
                    router: '/product/search',
                    children: [{
                        uri: '/ipo-bapigateway/v1/es/spu/search',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/es/spu/',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询',
                    }]
                },
            ],
        }, {
            name: '鉴定区',
            icon: 'fa-diamond',
            router: '/evaluate',
            children: [
                {
                    name: '鉴定查询',
                    icon: '',
                    router: '/evaluate/search',
                    children: [{
                        uri: '/ipo-bapigateway/v1/evaluations',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }]
                },
            ],
        }, {
            name: '订单区',
            icon: 'fa-truck',
            router: '/order',
            children: [
                {
                    name: '订单查询',
                    icon: '',
                    router: '/order/search',
                    children: [{
                        uri: '/ipo-bapigateway/v1/orders',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/order/id/detail',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询',
                    }, {
                        uri: '/ipo-bapigateway/common/v1/orders/export',
                        name: '导出报表',
                        method: 'GET',
                        description: '导出报表',
                    }]
                },
                {
                    name: '平台待收货',
                    icon: '',
                    router: '/order/order/receiving',
                    children: [{
                        uri: '/ipo-bapigateway/v1/order/receiveWaitList',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/order/',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询',
                    }]
                },
                {
                    name: '瑕疵待确定',
                    icon: '',
                    router: '/order/order/flawconfirming',
                    children: [{
                        uri: '/ipo-bapigateway/v1/order/',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询',
                    }]
                },
                {
                    name: '实物待鉴定',
                    icon: '',
                    router: '/order/order/evaluating',
                    children: [{
                        uri: '/ipo-bapigateway/v1/order/itemEvaluationWaitList',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/evaluation/',
                        name: '图鉴结果',
                        method: 'GET',
                        description: '图鉴结果',
                    }, {
                        uri: '/ipo-bapigateway/v1/order//detail',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/spu/',
                        name: '实物鉴定',
                        method: 'GET',
                        description: '实物鉴定',
                    },]
                },
                {
                    name: '平台待发货',
                    icon: '',
                    router: '/order/order/shipping',
                    children: [{
                        uri: '/ipo-bapigateway/v1/order/sendWaitList',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }]
                },
            ],
        }, {
            name: '假货区',
            icon: 'fa-thumbs-down',
            router: '/fake',
            children: [
                {
                    name: '假货查询',
                    icon: '',
                    router: '/fake/search',
                    children: [{
                        uri: '/ipo-bapigateway/v1/fake/list',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/fake/',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询',
                    }]
                },
                {
                    name: '假货待处理',
                    icon: '',
                    router: '/fake/fake/processing',
                    children: [{
                        uri: '/ipo-bapigateway/v1/fake/waitList',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/fake/',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询',
                    },]
                },
                {
                    name: '假货待销毁',
                    icon: '',
                    router: '/fake/fake/destroying',
                    children: [{
                        uri: '/ipo-bapigateway/v1/destroy/waitList',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/destroy/',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询',
                    }]
                },
            ],
        }, {
            name: '退货区',
            icon: 'fa-thumbs-o-down',
            router: '/return',
            children: [
                {
                    name: '退货查询',
                    icon: '',
                    router: '/return/return/returned',
                    children: [{
                        uri: '/ipo-bapigateway/v1/returnp/list',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/returnp/',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询',
                    }]
                },
                {
                    name: '假货待退货',
                    icon: '',
                    router: '/return/return/returning',
                    children: [{
                        uri: '/ipo-bapigateway/v1/returnp/waitList',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/returnp/',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询',
                    }]
                },
            ],
        }, {
            name: '大客户',
            icon: 'fa-handshake-o',
            router: '/keyclient',
            children: [
                {
                    name: '挂售查询',
                    icon: '',
                    router: '/keyclient/search',
                    children: [{
                        uri: '/ipo-bapigateway/v1/sneaker/ticketsForBigSeller',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/sneaker/bigSell/id.json`',
                        name: '编辑挂售',
                        method: 'POST',
                        description: '编辑挂售',
                    }, {
                        uri: '/ipo-bapigateway/v1/sneaker/bigSell//cancel',
                        name: '取消挂售',
                        method: 'POST',
                        description: '取消挂售',
                    }]
                },
            ],
        }, {
            name: '运营区',
            icon: 'fa-bullhorn',
            router: '/market',
            children: [
                {
                    name: '横幅管理',
                    icon: '',
                    router: '/market/banner/list',
                    children: [{
                        uri: '/ipo-bapigateway/v1/banner/id.json',
                        name: '更新',
                        method: 'POST',
                        description: '更新',
                    }, {
                        uri: '/ipo-bapigateway/v1/banner/',
                        name: '删除',
                        method: 'DELETE',
                        description: '删除',
                    }, {
                        uri: '/ipo-bapigateway/v1/banner.json',
                        name: '创建',
                        method: 'POST',
                        description: '创建',
                    }]
                },
                {
                    name: '有药活动管理',
                    icon: '',
                    router: '/market/activity/list',
                    children: [{
                        uri: '/ipo-bapigateway/v1/marketing/ipoActivities',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/marketing/ipoActivity/',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/marketing/ipoActivity/id.json',
                        name: '更新',
                        method: 'POST',
                        description: '更新',
                    }, {
                        uri: '/ipo-bapigateway/v1/marketing/ipoActivity/change/',
                        name: '设为入口',
                        method: 'GET',
                        description: '设为入口',
                    }, {
                        uri: '/ipo-bapigateway/v1/marketing/ipoActivity/id/sendResult.json',
                        name: '推送通知',
                        method: 'POST',
                        description: '推送通知',
                    }, {
                        uri: '/ipo-bapigateway/common/v1/marketing/ipoActivity/yx/export',
                        name: '导出报表',
                        method: 'GET',
                        description: '导出报表',
                    }, {
                        uri: '/ipo-bapigateway/v1/activity/id/stocks',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/marketing/ipoActivity.json',
                        name: '创建',
                        method: 'POST',
                        description: '创建',
                    }, {
                        uri: '/ipo-bapigateway/v1/marketing/ipoActivity/id/canView/true',
                        name: '可见',
                        method: 'POST',
                        description: '可见',
                    }, {
                        uri: '/ipo-bapigateway/v1/marketing/winnerPublish/id.json',
                        name: '颁布中奖',
                        method: 'GET',
                        description: '颁布中奖',
                    }]
                },
                {
                    name: 'concepts活动管理',
                    icon: '',
                    router: '/market/conceptactivity/list',
                    children: [{
                        uri: '/ipo-bapigateway/v1/marketing/ipoActivities',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/marketing/conceptsIpoActivity.json',
                        name: '创建',
                        method: 'POST',
                        description: '创建',
                    }, {
                        uri: '/ipo-bapigateway/v1/marketing/ipoActivity/',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/marketing/ipoActivity/id/prizeNotice.json',
                        name: '推送通知',
                        method: 'POST',
                        description: '推送通知',
                    }, {
                        uri: '/ipo-bapigateway/v1/marketing/ipoActivity/id/canView/',
                        name: '可见',
                        method: 'POST',
                        description: '可见',
                    }, {
                        uri: '/ipo-bapigateway/v1/marketing/winnerPublish/id.json',
                        name: '颁布中奖',
                        method: 'GET',
                        description: '颁布中奖',
                    }, {
                        uri: '/ipo-bapigateway/common/v1/marketing/ipoActivity/concepts/export',
                        name: '导出报表',
                        method: 'GET',
                        description: '导出报表',
                    }]
                },
                {
                    name: '原价购券',
                    icon: '',
                    router: '/market/origticket/list',
                    children: [{
                        uri: '/ipo-bapigateway/v1/yjgCoupon',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/yjgCoupon.json',
                        name: '创建',
                        method: 'POST',
                        description: '创建',
                    }, {
                        uri: '',
                        name: '删除',
                        method: '',
                        description: '删除',
                    }, {
                        uri: '',
                        name: '插入',
                        method: '',
                        description: '插入',
                    }]
                },
                {
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
                },
                {
                    name: '消息推送',
                    icon: '',
                    router: '/market/notification',
                    children: [{
                        uri: '/ipo-bapigateway/v1/notification/list',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/notification/push/people.json',
                        name: '发送给指定用户',
                        method: 'POST',
                        description: '发送给指定用户',
                    }, {
                        uri: '',
                        name: '群发给所有人',
                        method: '',
                        description: '群发给所有人',
                    }]
                },
                {
                    name: '帐号管理',
                    icon: '',
                    router: '/market/account',
                    children: [{
                        uri: '/ipo-bapigateway/v1/caccounts',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/caccount/id/',
                        name: '启用',
                        method: 'POST',
                        description: '启用',
                    }]
                },
                {
                    name: '情报局',
                    icon: '',
                    router: '/market/intelligence/intelligence',
                    children: [{
                        uri: '/ipo-bapigateway/v1/intelligence/send',
                        name: '推送消息',
                        method: 'GET',
                        description: '推送消息',
                    }]
                },
            ],
        }, {
            name: '优惠券',
            icon: 'fa-gift',
            router: '/coupon',
            children: [
                {
                    name: '优惠券管理',
                    icon: '',
                    router: '/coupon/coupon/list',
                    children: [{
                        uri: '/ipo-bapigateway/v1/couponInfo',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/couponInfo.json',
                        name: '创建',
                        method: 'POST',
                        description: '创建',
                    }, {
                        uri: '/ipo-bapigateway/v1/couponInfo/',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询',
                    }, {
                        uri: '/ipo-bapigateway/v1/couponInfo/updateStatusByBatchNo.json',
                        name: '冻结',
                        method: 'POST',
                        description: '冻结',
                    }]
                },
                {
                    name: '用户使用查询',
                    icon: '',
                    router: '/coupon/usage/list',
                    children: [{
                        uri: '/ipo-bapigateway/v1/couponUser',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询',
                    }]
                },
            ],
        },
        {
            name: '首页区',
            icon: 'fa-film',
            router: '/frontpage',
            children: [
                {
                    name: '标签管理',
                    icon: '',
                    router: '/frontpage/tags/list',
                    children: [{
                        uri: '/ipo-bapigateway/v1/spuTag',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/spuTag/',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/spuTagWithSpu',
                        name: '商品列表查询',
                        method: 'GET',
                        description: '商品列表查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/spuTag/',
                        name: '删除',
                        method: 'DELETE',
                        description: '删除'
                    }, {
                        uri: '/ipo-bapigateway/v1/spuTag.json',
                        name: '创建',
                        method: 'POST',
                        description: '创建'
                    }, {
                        uri: '/ipo-bapigateway/v1/spuTag.json',
                        name: '更新',
                        method: 'POST',
                        description: '更新'
                    }, {
                        uri: '/ipo-bapigateway/v1/spuTagWithSpu.json',
                        name: '添加商品',
                        method: 'POST',
                        description: '添加商品'
                    }, {
                        uri: '/ipo-bapigateway/v1/spuTagWithSpu/',
                        name: '取消关联',
                        method: 'DELETE',
                        description: '取消关联'
                    }]
                },
                {
                    name: '卡片管理',
                    icon: '',
                    router: '/frontpage/card/list',
                    children: [{
                        uri: '/ipo-bapigateway/v1/homeCards',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/homeCard/',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/homeCard/',
                        name: '删除',
                        method: 'DELETE',
                        description: '删除'
                    }, {
                        uri: '/ipo-bapigateway/v1/homeCard/id.json',
                        name: '更新',
                        method: 'POST',
                        description: '更新'
                    }, {
                        uri: '/ipo-bapigateway/v1/homeCard.json',
                        name: '创建',
                        method: 'POST',
                        description: '创建'
                    }]
                }, {
                    name: '栏目管理',
                    icon: '',
                    router: '/frontpage/columns/list',
                    children: [{
                        uri: '/ipo-bapigateway/v1/columnList',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/getColumn/',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/homeCard/',
                        name: '删除',
                        method: 'DELETE',
                        description: '删除'
                    }, {
                        uri: '/ipo-bapigateway/v1/columnUpdate/id.json',
                        name: '更新',
                        method: 'POST',
                        description: '更新'
                    }, {
                        uri: '/ipo-bapigateway/v1/columnCreate.json',
                        name: '创建',
                        method: 'POST',
                        description: '创建'
                    }, {
                        uri: '/ipo-bapigateway/v1/columnUpdate/id.json',
                        name: '添加卡片',
                        method: 'POST',
                        description: '添加卡片'
                    }, {
                        uri: '/ipo-bapigateway/v1/columnUpdate/id.json',
                        name: '编辑权重',
                        method: 'POST',
                        description: '编辑权重'
                    }, {
                        uri: '/ipo-bapigateway/v1/columnUpdate/id.json',
                        name: '取消关联',
                        method: 'POST',
                        description: '取消关联'
                    }]
                },
                {
                    name: '炸物管理',
                    icon: '',
                    router: '/frontpage/boom',
                    children: [{
                        uri: '/ipo-bapigateway/v1/spu/query',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/spu/sneaker/id.json',
                        name: '删除',
                        method: 'POST',
                        description: '删除'
                    }, {
                        uri: '/ipo-bapigateway/v1/spu/sneaker/id.json',
                        name: '添加商品',
                        method: 'POST',
                        description: '添加商品'
                    }, {
                        uri: '/ipo-bapigateway/v1/spu/id/kind/sort',
                        name: '权重编辑',
                        method: 'POST',
                        description: '权重编辑'
                    }]
                },
            ],
        }, {
            name: '交易区',
            icon: 'fa-exchange',
            router: '/transaction',
            children: [
                {
                    name: '交易振幅',
                    icon: '',
                    router: '/transaction/pricechange',
                    children: [{
                        uri: '/ipo-bapigateway/v1/sneaker/priceChange/list',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/sneaker/priceChange/',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/order/id/detail',
                        name: '订单详情',
                        method: 'GET',
                        description: '订单详情'
                    }]
                },
                {
                    name: '实时行情',
                    icon: '',
                    router: '/transaction/realtime',
                    children: [{
                        uri: '/ipo-bapigateway/v1/spu/query',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/sneaker/ticketReport',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }]
                },
                {
                    name: '用户订单',
                    icon: '',
                    router: '/transaction/orders',
                    children: [{
                        uri: '/ipo-bapigateway/v1/sneaker/myBuyTickets',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/sneaker/mySellTickets',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/myOrders',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }]
                },
                {
                    name: '用户资金',
                    icon: '',
                    router: '/transaction/fund',
                    children: [{
                        uri: '/ipo-bapigateway/v1/moneyaccount/query',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/moneyaccount/detail',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }]
                },
                {
                    name: '提现预警',
                    icon: '',
                    router: '/transaction/withdrawalert',
                    children: [{
                        uri: '/ipo-bapigateway/v1/moneyaccount/withDrawList.json',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/moneyaccount/detail',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/moneyaccount/afreshWithdraw.json',
                        name: '重新提现',
                        method: 'POST',
                        description: '重新提现'
                    }]
                },
                {
                    name: '批量导入',
                    icon: '',
                    router: '/transaction/importing',
                    children: [{
                        uri: '/ipo-bapigateway/v1/sneaker/feedTrades.json',
                        name: '创建',
                        method: 'POST',
                        description: '创建'
                    }]
                },
            ],
        }, {
            name: '系统设置',
            icon: 'fa-wrench',
            router: '/system',
            children: [
                {
                    name: '分类管理',
                    icon: '',
                    router: '/system/brand',
                    children: [{
                        uri: '/ipo-bapigateway/v1/category/sbr/subs',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/category/id/subs',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/category.json',
                        name: '创建',
                        method: 'POST',
                        description: '创建'
                    }, {
                        uri: '/ipo-bapigateway/v1/category/id.json',
                        name: '更新',
                        method: 'POST',
                        description: '更新'
                    }, {
                        uri: '/ipo-bapigateway/v1/category/sbr010233.json',
                        name: '删除',
                        method: 'POST',
                        description: '删除'
                    }]
                },
                {
                    name: '字典管理',
                    icon: '',
                    router: '/system/dict',
                    children: [{
                        uri: '/ipo-bapigateway/v1/dictionaries',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/dictionary/string.json',
                        name: '更新',
                        method: 'POST',
                        description: '更新'
                    }, {
                        uri: '/ipo-bapigateway/v1/dictionary/string.json',
                        name: '创建',
                        method: 'POST',
                        description: '创建'
                    }]
                },
                {
                    name: '搜索词汇管理',
                    icon: '',
                    router: '/system/vocabulary',
                    children: [{
                        uri: '/ipo-bapigateway/v1/vocabulary',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/vocabulary.json',
                        name: '更新',
                        method: 'POST',
                        description: '更新'
                    }, {
                        uri: '/ipo-bapigateway/v1/vocabulary.json',
                        name: '创建',
                        method: 'POST',
                        description: '创建'
                    }]
                },
                {
                    name: '参数设置',
                    icon: '',
                    router: '/system/config',
                    children: [{
                        uri: '/ipo-bapigateway/v1/trade/configs',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/trade/config/',
                        name: '更新',
                        method: 'POST',
                        description: '更新'
                    }]
                },
            ],
        }, {
            name: '访问统计',
            icon: 'fa-line-chart',
            router: '/analytics',
            children: [
                {
                    name: '日活统计',
                    icon: '',
                    router: '/analytics/daily',
                    children: [{
                        uri: '/ipo-bapigateway/v1/statistics/list',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/statistics/query',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }]
                },
            ],
        }, {
            name: '财务区',
            icon: 'fa-bar-chart',
            router: '/finance',
            children: [
                {
                    name: '财务报表',
                    icon: '',
                    router: '/finance/analytic',
                    children: [{
                        uri: '/ipo-bapigateway/v1/financialReconciliation/count',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/financialReconciliation/incomeAndExpensesDetail',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }]
                },
            ],
        }, {
            name: '用户区',
            icon: 'fa-user-o',
            router: '/user',
            children: [
                {
                    name: '运营用户管理',
                    icon: '',
                    router: '/user/info',
                    children: [{
                        uri: '/ipo-bapigateway/v1/users',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ipo-bapigateway/v1/user/id/disable',
                        name: '更新',
                        method: 'POST',
                        description: '更新'
                    }]
                },
            ],
        },
    ]
};
