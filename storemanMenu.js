module.exports = {
    menus: [
        {
            name: '供应商',
            icon: 'fa-users',
            router: '/supply',
            children: [
                {
                    name: '供应商',
                    icon: '',
                    router: '/supply/supply/list',
                    children: [{
                        uri: '/ec-bapigateway/v1/supplier',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ec-bapigateway/v1/supplier',
                        name: '创建',
                        method: 'POST',
                        description: '创建'
                    }]
                }
            ]
        },
        {
            name: '仓库',
            icon: 'fa-cubes',
            router: '/store',
            children: [
                {
                    name: '仓库管理',
                    icon: '',
                    router: '/store/store/list',
                    children: [{
                        uri: '/ec-bapigateway/v1/warehouse',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ec-bapigateway/v1/warehouse',
                        name: '创建',
                        method: 'POST',
                        description: '创建'
                    }, {
                        uri: '/ec-bapigateway/v1/warehouse/id',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }, {
                        uri: '/ec-bapigateway/v1/warehouse/id/3',
                        name: '更新',
                        method: 'POST',
                        description: '更新'
                    }]
                }
            ]
        },
        {
            name: '商品',
            icon: 'fa-shopping-bag',
            router: '/product',
            children: [
                {
                    name: '商品管理',
                    icon: '',
                    router: '/product/product/list',
                    children: [{
                        uri: '/ec-bapigateway/v1/product/spu',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ec-bapigateway/v1/product/spu/id',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }, {
                        uri: '/ec-bapigateway/v1/product/spu/id.json',
                        name: '更新',
                        method: 'POST',
                        description: '更新'
                    }, {
                        uri: '/ec-bapigateway/v1/product/spu/spuStatus',
                        name: '更新',
                        method: 'POST',
                        description: '更新'
                    }, {
                        uri: '/ec-bapigateway/v1/product/spu/id',
                        name: '删除',
                        method: 'DELETE',
                        description: '删除',
                    }]
                },
                {
                    name: '分类管理',
                    icon: '',
                    router: '/product/category',
                    children: [{
                        uri: '/ec-bapigateway/v1/product/category/parentCategoryId',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ec-bapigateway/v1/product/category/parentCategoryId',
                        name: '子列表查询',
                        method: 'GET',
                        description: '子列表查询'
                    }, {
                        uri: '/ec-bapigateway/v1/product/category.json',
                        name: '创建',
                        method: 'POST',
                        description: '创建'
                    }, {
                        uri: '/ec-bapigateway/v1/product/category/id.json',
                        name: '更新',
                        method: 'POST',
                        description: '更新'
                    }, {
                        uri: '/ec-bapigateway/v1/product/category/id',
                        name: '删除',
                        method: 'DELETE',
                        description: '删除',
                    }]
                },
                {
                    name: '品牌管理',
                    icon: '',
                    router: '/product/brand',
                    children: [{
                        uri: '/ec-bapigateway/v1/product/brand/parentCategoryId',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ec-bapigateway/v1/product/brand/parentCategoryId',
                        name: '子列表查询',
                        method: 'GET',
                        description: '子列表查询'
                    }, {
                        uri: '/ec-bapigateway/v1/product/brand.json',
                        name: '创建',
                        method: 'POST',
                        description: '创建'
                    }, {
                        uri: '/ec-bapigateway/v1/product/brand/id.json',
                        name: '更新',
                        method: 'POST',
                        description: '更新'
                    }, {
                        uri: '/ec-bapigateway/v1/product/brand/id',
                        name: '删除',
                        method: 'DELETE',
                        description: '删除',
                    }]
                },
                {
                    name: '规格管理',
                    icon: '',
                    router: '/product/spec/list',
                    children: [{
                        uri: '/ec-bapigateway/v1/product/specs',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ec-bapigateway/v1/product/specs',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }, {
                        uri: '/ec-bapigateway/v1/product/specs.json',
                        name: '创建',
                        method: 'POST',
                        description: '创建'
                    }, {
                        uri: '/ec-bapigateway/v1/product/specs/id.json',
                        name: '更新',
                        method: 'POST',
                        description: '更新'
                    }]
                },
                {
                    name: '颜色管理',
                    icon: '',
                    router: '/product/color/color',
                    children: [{
                        uri: '/ec-bapigateway/v1/colors',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ec-bapigateway/v1/colors/parentId',
                        name: '子列表查询',
                        method: 'GET',
                        description: '子列表查询'
                    }, {
                        uri: '/ec-bapigateway/v1/colors.json',
                        name: '创建',
                        method: 'POST',
                        description: '创建'
                    }, {
                        uri: '/ec-bapigateway/v1/colors/id.json',
                        name: '更新',
                        method: 'POST',
                        description: '更新'
                    }, {
                        uri: '/ec-bapigateway/v1/colors/id',
                        name: '删除',
                        method: 'DELETE',
                        description: '删除',
                    }]
                },
                {
                    name: '商品组管理',
                    icon: '',
                    router: '/product/productgroup/group',
                    children: [{
                        uri: '/ec-bapigateway/group-goods/list',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询'
                    }, {
                        uri: '/ec-bapigateway/group-goods/save',
                        name: '创建',
                        method: 'POST',
                        description: '创建'
                    }, {
                        uri: '/ec-bapigateway/v1/product/spu',
                        name: '查询商品',
                        method: 'GET',
                        description: '查询商品'
                    }, {
                        uri: '/ec-bapigateway/group-goods/update',
                        name: '更新',
                        method: 'POST',
                        description: '更新'
                    }, {
                        uri: '/ec-bapigateway/group-goods/delete',
                        name: '删除',
                        method: 'DELETE',
                        description: '删除',
                    }]
                }
            ]
        },
        {
            name: '库存',
            icon: 'fa-braille',
            router: '/inventory',
            children: [
                {
                    name: '库存管理',
                    icon: '',
                    router: '/inventory/inventory/list',
                    children: [{
                        uri: '/ec-bapigateway/v1/inventory',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ec-bapigateway/v1/inventory/dispatch',
                        name: '子列表查询',
                        method: 'GET',
                        description: '子列表查询'
                    }, {
                        uri: '/ec-bapigateway/v1/inventory/recording',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }, {
                        uri: '/ec-bapigateway/v1/inventory/dispatch/increase.json',
                        name: '追加',
                        method: 'POST',
                        description: '追加'
                    }]
                }
            ]
        },
        {
            name: '订单区',
            icon: 'fa-truck',
            router: '/order',
            children: [
                {
                    name: '订单查询',
                    icon: '',
                    router: '/order/order/list',
                    children: [{
                        uri: '/ec-bapigateway/v1/orders',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ec-bapigateway/v1/order/id',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }]
                },
                {
                    name: '运单查询',
                    icon: '',
                    router: '/order/delivery/list',
                    children: [{
                        uri: '/ec-bapigateway/v1/orderDeliverys',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ec-bapigateway/v1/orderDelivery/id',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }]
                }
            ]
        },
        {
            name: '退换货区',
            icon: 'fa-thumbs-o-down',
            router: '/return',
            children: [
                {
                    name: '退换货查询',
                    icon: '',
                    router: '/return/return/list',
                    children: [{
                        uri: '/ec-bapigateway/v1/refundOrder',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ec-bapigateway/v1/refundOrder/id',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }]
                }
            ]
        },
        {
            name: '客服工单',
            icon: 'fa-truck',
            router: '/workorder',
            children: [
                {
                    name: '订单管理',
                    icon: '',
                    router: '/workorder/order/list',
                    children: [{
                        uri: '/ec-bapigateway/v1/orders',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ec-bapigateway/v1/order/id',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }, {
                        uri: '/ec-bapigateway/v1/refundOrder/apply.json',
                        name: '申请退换货',
                        method: 'POST',
                        description: '申请退换货'
                    }, {
                        uri: '/ec-bapigateway/v1/order/cancel/id',
                        name: '取消订单',
                        method: 'POST',
                        description: '取消订单'
                    }]
                },
                {
                    name: '发货管理',
                    icon: '',
                    router: '/workorder/delivery/list',
                    children: [{
                        uri: '/ec-bapigateway/v1/orderDeliverys',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ec-bapigateway/v1/orderDelivery/id',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }, {
                        uri: '/ec-bapigateway/v1/orderDelivery/sendOrder.json',
                        name: '发货',
                        method: 'POST',
                        description: '发货'
                    }]
                },
                {
                    name: '退换货管理',
                    icon: '',
                    router: '/workorder/return/list',
                    children: [{
                        uri: '/ec-bapigateway/v1/refundOrder',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ec-bapigateway/v1/refundOrder/id',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }]
                }
            ]
        },
        {
            name: '商家后台',
            icon: 'fa-shopping-bag',
            router: '/merchant',
            children: [
                {
                    name: '商品导入',
                    icon: '',
                    router: '/merchant/prdimport/list',
                    children: [{
                        uri: '/ec-bapigateway/v1/supplier/uploadList',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ec-bapigateway/v1/supplier/uploadCsv',
                        name: '上传',
                        method: 'POST',
                        description: '上传'
                    }, {
                        uri: '/ec-bapigateway/v1/supplier/donwloadFile/',
                        name: '下载',
                        method: 'GET',
                        description: '下载'
                    }]
                },
                {
                    name: '选品列表',
                    icon: '',
                    router: '/merchant/prdchoose/list',
                    children: [{
                        uri: '/ec-bapigateway/v1/supplier/spu/list',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ec-bapigateway/v1/supplier/spu/id',
                        name: '导入',
                        method: 'POST',
                        description: '导入'
                    }]
                },
                {
                    name: '待导入',
                    icon: '',
                    router: '/merchant/waitimport/list',
                    children: [{
                        uri: '/ec-bapigateway/v1/supplier/spu/waitExportList',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/ec-bapigateway/v1/supplier/spu/spuExportWoof',
                        name: '导入',
                        method: 'POST',
                        description: '导入'
                    }]
                }
            ]
        },
        {
            name: '页面管理',
            icon: 'fa-cog',
            router: '/pagemgmt',
            children: [
                {
                    name: '首页配置',
                    icon: '',
                    router: '/pagemgmt/homemgmt/list',
                    children: [{
                        uri: '/pr-server/v1/module/list',
                        name: '列表查询',
                        method: 'GET',
                        description: '列表查询',
                    }, {
                        uri: '/pr-server/v1/module/info',
                        name: '详情查询',
                        method: 'GET',
                        description: '详情查询'
                    }, {
                        uri: '/pr-server/v1/module/save',
                        name: '创建',
                        method: 'POST',
                        description: '创建'
                    }, {
                        uri: '/pr-server/v1/module/update-module',
                        name: '更新',
                        method: 'POST',
                        description: '更新'
                    }, {
                        uri: '/pr-server/v1/module/delete',
                        name: '删除',
                        method: 'DELETE',
                        description: '删除'
                    }]
                }
            ]
        }
    ]
};
