import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './en/index'
import zh from './zh/index'

Vue.use(VueI18n)

const messages = {
  en,
  zh
}

export default new VueI18n({
  locale: process.env.VUE_APP_LANGUAGE,
  messages
})
