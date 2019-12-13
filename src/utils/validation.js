import dayjs from 'dayjs'
import { isNumber } from 'lodash'
import utils from '@utils/client'
import { parsePhoneNumberFromString } from 'libphonenumber-js'

export function phoneCheck (phone) {
  const phoneNumber = parsePhoneNumberFromString(phone, 'US')
  return phoneNumber.isValid()
}

export default {
  isRequired: value => !!value || 'This is a Required Field.',
  isNumber: value => isNumber(value) || 'This field must be a number.',
  isLongitude: value => utils.isLongitude(value) || 'Please enter an valid longitude.',
  isLatitude: value => utils.isLatitude(value) || 'Please enter an valid latitude.',
  isCountMatch: (value, count) => value.length === count || 'Please enter the an correct digit.',
  isDate: value => dayjs(value, utils.inputFormat.date).format(utils.inputFormat.date) === value || 'This is not a valid date.',
  isTime: value => dayjs(`2000-01-01 ${value}`, utils.inputFormat.time).format(utils.inputFormat.time) === value || 'This is not a valid time.',
  isMax: (value, max) => isNumber(value) && isNumber(max) ? (value <= max || 'The input is exceed the maximum limit.') : 'This field must be a number.',
  isMin: (value, min) => isNumber(value) && isNumber(min) ? (value >= min || 'The input is smaller the minimum limit.') : 'This field must be a number.',
  isInRange: (value, min, max) => isNumber(value) && isNumber(min) && isNumber(max) ? ((value >= min && value <= max) || 'The input is not in a valid range.') : 'This field must be a number.',
  isPhone: (value) => phoneCheck(value) || 'Please enter a valid phone number.'
}
