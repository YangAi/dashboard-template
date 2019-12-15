import Vue from 'vue'

import BetterTime from './time/Time.vue'
import BaseDatetimePicker from '../components/base/BaseDatetimePicker'
import BaseInputField from '../components/base/BaseInputField'
import BaseTextField from '../components/base/BaseTextField'

Vue.component('BetterTime', BetterTime)
Vue.component('VDatetimePicker', BaseDatetimePicker)
Vue.component('BaseInputField', BaseInputField)
Vue.component('BaseTextField', BaseTextField)
