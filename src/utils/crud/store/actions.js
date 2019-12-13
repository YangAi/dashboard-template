import Vue from 'vue'
import Toast from '@plugins/noty'
import Api from '@api'

const actions = {
  // table data
  async getItems ({ commit, getters, dispatch }) {
    commit('setLoadingStatus', true)
    const res = await Api.springs.index()
    commit('setItems', res.data)
    commit('setLoadingStatus', false)
    return res
  },

  // item details
  async getItem ({ commit, getters, dispatch }, [id]) {
    commit('setDetailsLoader', true)
    const res = await Api.springs.find(id)
    commit('setItem', res.data)
    commit('setDetailsLoader', false)
    return res
  },
  // update item
  updateItem ({
    getters, dispatch
  }, [
    id,
    params,
    successText,
    errorText
  ]) {
    return new Promise((resolve, reject) => {
      Vue.http.put(`${getters.path('u')}/${id}`, params)
        .then((response) => {
          if (response.body.status === 0) {
            dispatch('openAlertBox', [
              'alertSuccess',
              successText
            ], { root: true })
            dispatch('runItemsViewRefreshing')
            resolve()
          } else if (response.body.status === -1) {
            dispatch('openAlertBox', [
              'alertError',
              response.body.msg
            ], { root: true })
          } else if (response.body.status === -2) {
            dispatch('openAlertBox', [
              'alertValidationError',
              response.body.msg
            ], { root: true })
          }
        }, (error) => {
          dispatch('openAlertBox', [
            'alertError',
            errorText
          ], { root: true })
          reject(error)
        })
    })
  },
  // store item
  async storeItem ({
    commit, state, getters, dispatch
  }, [
    params,
    successText = false
  ]) {
    const res = await Api.springs.store(params)
    Toast.success(successText || 'Create Success!')
    dispatch('runItemsViewRefreshing')
    return res.data
  },
  // delete item
  async deleteItem ({
    getters, dispatch
  }, [
    id,
    successText,
    errorText
  ]) {
    const res = await Api.springs.destroy(id)
    if (res) {
      Toast.success(successText || 'Delete Success')
      dispatch('runItemsViewRefreshing')
    }
  },
  // item elements
  getItemElements ({ commit, state }) {
    const url = state.itemElements.url.replace('{id}', state.itemElements.id)
    Vue.http.get(url)
      .then(response => commit('setItemElements', response.body))
  },
  addItemElement ({
    dispatch, state
  }, [
    params,
    successText,
    errorText
  ]) {
    Vue.http.post(state.itemElements.controller, params)
      .then(() => {
        dispatch('openAlertBox', [
          'alertSuccess',
          successText
        ], { root: true })
        dispatch('getItemElements')
      }, () => {
        dispatch('openAlertBox', [
          'alertError',
          errorText
        ], { root: true })
      })
  },
  removeItemElement ({
    dispatch, state
  }, [
    id,
    successText,
    errorText
  ]) {
    Vue.http.delete(`${state.itemElements.controller}/${id}`)
      .then(() => {
        dispatch('openAlertBox', [
          'alertSuccess',
          successText
        ], { root: true })
        dispatch('getItemElements')
      }, () => {
        dispatch('openAlertBox', [
          'alertError',
          errorText
        ], { root: true })
      })
  },

  // extented details
  async getItemDetails ({ commit, getters, dispatch }, [id]) {
    commit('setDetailsLoader', true)
    const res = await Api.springs.find(id)
    commit('itemDetails', res.data)
    commit('setDetailsLoader', false)
    return res.data
  },
  async updateItemDetail ({
    dispatch, state, getters
  }, [
    id,
    params,
    successText
  ]) {
    const res = await Api.springs.update(id, params)
    if (res) {
      Toast.success(successText || 'Success!')
    }
  },
  // child details
  updateChild ({
    dispatch, state
  }, [
    id,
    params,
    successText,
    path
  ]) {
    return new Promise((resolve, reject) => {
      Vue.http.put(`${path}/${id}`, params)
        .then((response) => {
          if (response.body.status === 0) {
            dispatch('openAlertBox', [
              'alertSuccess',
              successText
            ], { root: true })
            resolve()
          } else if (response.body.status === -1) {
            dispatch('openAlertBox', [
              'alertError',
              response.body.msg
            ], { root: true })
          } else if (response.body.status === -2) {
            dispatch('openAlertBox', [
              'alertValidationError',
              response.body.msg
            ], { root: true })
          }
          dispatch('getItemDetails', [state.item[state.itemIdColumn]])
        }, (error) => {
          dispatch('openAlertBox', [
            'alertError',
            error.statusText
          ], { root: true })
          reject(error)
        })
    })
  },
  deleteChild ({
    dispatch, state
  }, [
    id,
    successText,
    errorText,
    path
  ]) {
    Vue.http.delete(`${path}/${id}`)
      .then((response) => {
        if (response.body.status === 0) {
          dispatch('openAlertBox', [
            'alertSuccess',
            successText
          ], { root: true })
        } else if (response.body.status === -1) {
          dispatch('openAlertBox', [
            'alertError',
            response.body.msg
          ], { root: true })
        } else if (response.body.status === -2) {
          dispatch('openAlertBox', [
            'alertValidationError',
            response.body.msg
          ], { root: true })
        }
        dispatch('getItemDetails', [state.item[state.itemIdColumn]])
      }, () => {
        dispatch('openAlertBox', [
          'alertError',
          errorText
        ], { root: true })
      })
  },
  storeChild ({
    dispatch, state
  }, [
    params,
    successText,
    path
  ]) {
    return new Promise((resolve, reject) => {
      Vue.http.post(path, params)
        .then((response) => {
          if (response.body.status === 0) {
            dispatch('openAlertBox', [
              'alertSuccess',
              successText
            ], { root: true })
            resolve()
          } else if (response.body.status === -1) {
            dispatch('openAlertBox', [
              'alertError',
              response.body.msg
            ], { root: true })
          } else if (response.body.status === -2) {
            dispatch('openAlertBox', [
              'alertValidationError',
              response.body.msg
            ], { root: true })
          }
          dispatch('getItemDetails', [state.item[state.itemIdColumn]])
        }, (error) => {
          dispatch('openAlertBox', [
            'alertError',
            error.statusText
          ], { root: true })
          reject(error)
        })
    })
  },
  async getChild ({ commit, dispatch }, [
    id,
    resource,
    childItemName
  ]) {
    const res = await Api[resource].find(id)
    if (res) {
      commit('setChild', [
        res.data,
        childItemName
      ])
    }
  },
  runItemsViewRefreshing ({ commit }) {
    commit('refreshTable', true)
    setTimeout(() => {
      commit('refreshTable', false)
    }, 2000)
  }
}

export default actions
