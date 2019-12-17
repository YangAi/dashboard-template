export default [
  {
    path: '/auth/login',
    component: () => import('./Login.vue'),
    name: 'Auth.Login',
    auth: false,
    meta: {
      title: 'Login'
    }
  }
]
