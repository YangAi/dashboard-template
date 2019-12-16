export default [
  {
    path: '/springs',
    component: () => import('@layouts/DefaultLayout'),
    children: [
      {
        path: '',
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
          title: 'New Springs'
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
