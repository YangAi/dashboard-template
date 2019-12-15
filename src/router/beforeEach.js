import NProgress from 'nprogress'
// import { isEmpty } from 'lodash'
import Auth from '@/plugins/auth'
import Toast from '@plugins/noty'
import config from '@/config'

const beforeEach = async (to, from, next) => {
  NProgress.start()

  if (to.meta.auth === false) return next()

  await Auth.getToken()

  // access control for dashboard
  if (process.env.VUE_APP_SOURCE === 'Dashboard') {
    if (Auth.token && Auth.user) {
      const hasRole = await Auth.hasScope('is_admin')
      if (!hasRole) {
        Toast.error(config.messages.router.noPermission)
        Auth.logout()
        return next({ name: 'Auth.Login' }) // redirect to login
      }
      return next()
    } else {
      Toast.error(config.messages.router.loginFirst)
    }

    return next({ name: 'Auth.Login' }) // redirect to login
  }

  return next()
}

export default beforeEach
