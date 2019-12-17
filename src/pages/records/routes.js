export default [
  {
    path: '/records',
    component: () => import('@layouts/DefaultLayout'),
    meta: {
      title: 'Records'
    },
    children: [
      {
        path: 'list',
        component: () => import('./Index.vue'),
        name: 'Records.Index',
        meta: {
          title: 'All Records'
        }
      },
      {
        path: 'new',
        component: () => import('./New.vue'),
        name: 'Records.New',
        meta: {
          title: 'New Record'
        }
      },
      {
        path: ':id',
        component: () => import('./_Id.vue'),
        name: 'Records.ById',
        meta: {
          title: 'Record Detail'
        }
      }
    ]
  }
]
