import Vue from 'vue'
import NProgress from 'nprogress'
// import { isEmpty } from 'lodash'
import Auth from '@/plugins/auth'
import config from '@/config'

const beforeEach = async (to, from, next) => {
  NProgress.start()

  if (to.matched.some(m => m.meta.auth === false)) return next()

  await Auth.getToken()

  // access control for dashboard
  if (process.env.VUE_APP_SOURCE === 'Dashboard') {
    console.log(Auth.token)
    if (Auth.token && Auth.user) {
      // const hasRole = true
      const hasRole = await Auth.hasScope('is_admin')
      if (!hasRole) {
        Vue.$toast.error(config.messages.router.noPermission)
        Auth.logout()
        return next({ name: 'Auth.Login' }) // redirect to login
      }
      return next()
    } else {
      Vue.$toast.error(config.messages.router.loginFirst)
      return next({ name: 'Auth.Login' }) // redirect to login
    }
  }

  return next()
}

export default beforeEach
