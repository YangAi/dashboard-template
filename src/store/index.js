import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

import crud from '@/utils/crud/store'

const modules = { crud }

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules
})
