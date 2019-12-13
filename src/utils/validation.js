import dayjs from 'dayjs'
import { isNumber } from 'lodash'
import utils from '@utils/client'

export default {
  isRequired: value => !!value || '此项不能为空。',
  isNumber: value => isNumber(value) || '此项必须为数字。',
  isCountMatch: (value, count) => value.length === count || '长度不相符。',
  isDate: value => dayjs(value, utils.inputFormat.date).format(utils.inputFormat.date) === value || '不是有效日期。',
  isTime: value => dayjs(`2000-01-01 ${value}`, utils.inputFormat.time).format(utils.inputFormat.time) === value || '不是有效时间',
  isMax: (value, max) => isNumber(value) && isNumber(max) ? (value <= max || 'The input is exceed the maximum limit.') : 'This field must be a number.',
  isMin: (value, min) => isNumber(value) && isNumber(min) ? (value >= min || 'The input is smaller the minimum limit.') : 'This field must be a number.',
  isInRange: (value, min, max) => isNumber(value) && isNumber(min) && isNumber(max) ? ((value >= min && value <= max) || 'The input is not in a valid range.') : 'This field must be a number.'
}
