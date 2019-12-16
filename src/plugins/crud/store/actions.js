// import Vue from 'vue'
// import Api from '@api'

const actions = {
  crudInitialize ({ commit }, payload) {
    if (payload.resource) commit('setResource', payload.resource)
  }
}

export default actions
