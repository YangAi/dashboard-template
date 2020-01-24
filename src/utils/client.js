import _ from 'lodash'
import api from '@api'

export default {
  get isOffline () {
    return !navigator.onLine
  },
  get isWechat () {
    const ua = navigator.userAgent.toLowerCase()
    return ua.indexOf('micromessenger') !== -1
  },
  get isMobile () {
    return !!((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)))
  },
  isPhone (phone) {
    const reg = /^[1][0-9]{10}$/
    return reg.test(phone)
  },
  isEmail (email) {
    const reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i
    return reg.test(email)
  },
  isPassword (password) {
    if (
      String(password).length < 6 ||
      String(password).length > 18 ||
      String(password) === '123456'
    ) {
      return false
    } else {
      return true
    }
  },
  isVerifyCode (code) {
    if (code && code.length !== 4) {
      return false
    } else {
      return true
    }
  },
  isLatitude (lat) {
    return !_.isNull(lat) && Math.abs(lat) < 90
  },
  isLongitude (lon) {
    return !_.isNull(lon) && Math.abs(lon) < 180
  },
  async isUsCoordinates (lat, lon) {
    if (!this.isLatitude(lat) || !this.isLongitude(lon)) {
      return {
        code: -2,
        message: 'Please enter valid coordinates.'
      }
    }
    const res = await api.gps.get({ lat, lon })
    if (_.isEmpty(res.results)) {
      return {
        code: -1,
        message: 'Please enter US coordinates.'
      }
    } else {
      return {
        code: 1,
        message: 'Success.',
        data: res
      }
    }
  },
  async isIndianaCoordinates (lat, lon) {
    const res = await this.isUsCoordinates(lat, lon)
    console.log('Indiana', res.code, typeof res.code, !res.code, !!res.code)
    if (res.code < 1) return res
    if (res.data.results[0].state_name !== 'Indiana') {
      res.code = 0
      res.message = 'Please enter Indiana coordinates.'
    }
    return res
  },
  setGoIndex () {
    if (window.history.length <= 1 || document.referrer === '' || (document.referrer !== '' && !document.referrer.indexOf('lvxingshai.com'))) {
      if (location.href.indexOf('?') === -1) {
        window.location.href = location.href + '?goindex=true'
      } else if (location.href.indexOf('?') !== -1 && location.href.indexOf('goindex') === -1) {
        window.location.href = location.href + '&goindex=true'
      }
    }
  }
}
