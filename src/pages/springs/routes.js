export default [
  {
    path: '/springs',
    component: () => import('@layouts/DefaultLayout'),
    meta: {
      title: 'Springs'
    },
    children: [
      {
        path: 'list',
        component: () => import('./Index.vue'),
        name: 'Springs.Index',
        meta: {
          title: 'All Springs'
        }
      },
      {
        path: 'new',
        component: () => import('./New.vue'),
        name: 'Springs.New',
        meta: {
          title: 'New Spring'
        }
      },
      {
        path: ':id',
        component: () => import('./_Id.vue'),
        name: 'Springs.ById',
        meta: {
          title: 'Spring Detail'
        }
      }
    ]
  }
]
