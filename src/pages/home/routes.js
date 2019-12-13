export default [
  {
    path: '/',
    component: () => import('@layouts/DefaultLayout'),
    children: [
      {
        path: '',
        component: () => import('./Index.vue'),
        name: 'Home.Index',
        meta: {
          title: '后台首页'
        }
      }
    ]
  }
]
