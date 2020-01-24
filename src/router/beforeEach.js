import Vue from 'vue'
import NProgress from 'nprogress'
// import { isEmpty } from 'lodash'
import Auth from '@/plugins/auth'
import i18n from '@/locales'

const beforeEach = async (to, from, next) => {
  NProgress.start()

  if (to.matched.some(m => m.meta.auth === false)) return next()

  await Auth.getToken()

  // access control for dashboard
  if (process.env.VUE_APP_SOURCE === 'Dashboard') {
    if (to.meta.auth === false) return next()

    await Auth.getToken()
    let hasRole
    if (Auth.token && Auth.user) {
      try {
        hasRole = await Auth.hasRole(['super admin'])
      } catch (e) {
        hasRole = false
      }
      if (!hasRole) {
        console.log('has role false')
        Vue.$toast.error(i18n.t('messages.router.noPermission'))
        await Auth.logout()
        return next({ name: 'Auth.Login', query: { message: 1 } }) // redirect to login
      }
      return next()
    } else {
      Vue.$toast.error(i18n.t('messages.router.loginFirst'))
    }

    return next({ name: 'Auth.Login', query: { message: 1 } }) // redirect to login
  } else {
    if (!to.meta.auth) return next()
    if (Auth.token && Auth.user) {
      return next()
    } else {
      return next({ name: 'Auth.Login', query: { message: 1 } }) // redirect to login
    }
  }
}

export default beforeEach
