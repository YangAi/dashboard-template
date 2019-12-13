import NProgress from 'nprogress'
// import { isEmpty } from 'lodash'
import Auth from '@/plugins/auth'
import Toast from '@plugins/noty'

const beforeEach = async (to, from, next) => {
  NProgress.start()
  // access control for dashboard
  if (process.env.VUE_APP_SOURCE === 'Dashboard') {
    if (to.meta.auth === false) return next()
    await Auth.getToken()
    if (Auth.token && Auth.user) {
      const hasRole = await Auth.hasScope('is_admin')
      if (!hasRole) {
        Toast.error('没有足够权限.')
        Auth.logout()
        return next({ name: 'Auth.Login' }) // redirect to login
      }
      return next()
    } else {
      Toast.error('请登录。')
    }

    return next({ name: 'Auth.Login' }) // redirect to login
  }

  return next()
}

export default beforeEach
