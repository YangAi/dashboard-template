import dayjs from 'dayjs'
import { isNumber, isEmpty } from 'lodash'
import utils from '@utils/client'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import i18n from '@/locales'

export function phoneCheck (phone) {
  if (isEmpty(phone)) return true
  console.log(phone)
  const phoneNumber = parsePhoneNumberFromString(phone, 'US')
  return phoneNumber.isValid()
}

export default {
  isLongitude: value => utils.isLongitude(value) || 'Please enter an valid longitude.',
  isLatitude: value => utils.isLatitude(value) || 'Please enter an valid latitude.',
  isPhone: (value) => phoneCheck(value) || 'Please enter a valid phone number.',
  isRequired: value => (value !== '' && value !== undefined) || i18n.t('validation.isRequired'),
  isNumber: value => isNumber(parseFloat(value)) || i18n.t('validation.isNumber'),
  isCountMatch: (value, count) => value.length === count || i18n.t('validation.isCountMatch'),
  isEmail: value => utils.isEmail(value) || i18n.t('validation.isEmail'),
  isPassword: value => utils.isPassword(value) || i18n.t('validation.isPassword'),
  isDate: value => dayjs(value, utils.inputFormat.date).format(utils.inputFormat.date) === value || i18n.t('validation.isDate'),
  isTime: value => dayjs(`2000-01-01 ${value}`, utils.inputFormat.time).format(utils.inputFormat.time) === value || i18n.t('validation.isTime'),
  isMax: (value, max) => isNumber(value) && isNumber(max) ? (value <= max || i18n.t('validation.isMax')) : i18n.t('validation.isNumber'),
  isMin: (value, min) => isNumber(value) && isNumber(min) ? (value >= min || i18n.t('validation.isMin')) : i18n.t('validation.isNumber'),
  isInRange: (value, min, max) => isNumber(value) && isNumber(min) && isNumber(max) ? ((value >= min && value <= max) || i18n.t('validation.isInRange')) : i18n.t('validation.isNumber')

}
