export default [
  {
    path: '/audits',
    component: () => import('@layouts/DefaultLayout'),
    meta: {
      title: 'Audits'
    },
    children: [
      {
        path: 'list',
        component: () => import('./Index.vue'),
        name: 'Audits.Index',
        meta: {
          title: 'All Audits'
        }
      },
      {
        path: 'new',
        component: () => import('./New.vue'),
        name: 'Audits.New',
        meta: {
          title: 'New Record'
        }
      },
      {
        path: ':id',
        component: () => import('./_Id.vue'),
        name: 'Audits.ById',
        meta: {
          title: 'Audit Detail'
        }
      }
    ]
  }
]
