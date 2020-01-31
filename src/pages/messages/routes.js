export default [
  {
    path: '/messages',
    component: () => import('@layouts/DefaultLayout'),
    meta: {
      title: 'Messages'
    },
    children: [
      {
        path: 'list',
        component: () => import('./Index.vue'),
        name: 'Messages.Index',
        meta: {
          title: 'All Messages'
        }
      },
      {
        path: 'new',
        component: () => import('./New.vue'),
        name: 'Messages.New',
        meta: {
          title: 'New Record'
        }
      },
      {
        path: ':id',
        component: () => import('./_Id.vue'),
        name: 'Messages.ById',
        meta: {
          title: 'Message Detail'
        }
      }
    ]
  }
]
