export default [
  {
    path: '/logs',
    component: () => import('@layouts/DefaultLayout'),
    children: [
      {
        path: 'spider',
        component: () => import('./Spider.vue'),
        name: 'Logs.Spider',
        meta: {
          title: '爬虫日志'
        }
      },
      {
        path: 'credit',
        component: () => import('./Credit.vue'),
        name: 'Logs.Credit',
        meta: {
          title: '积分日志'
        }
      },
      {
        path: 'wallet',
        component: () => import('./Wallet.vue'),
        name: 'Logs.Wallet',
        meta: {
          title: '钱包日志'
        }
      },
      {
        path: 'notice',
        component: () => import('./Notice.vue'),
        name: 'Logs.Notice',
        meta: {
          title: '通知日志'
        }
      },
      {
        path: 'wepay',
        component: () => import('./Wepay.vue'),
        name: 'Logs.WePay',
        meta: {
          title: '微信支付日志'
        }
      }
    ]
  }
]
