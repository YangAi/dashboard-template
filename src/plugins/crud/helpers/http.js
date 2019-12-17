import Vue from 'vue'
import helpers from './functions'
import i18n from '@/locales'
import api from '@/services/api'
import models from '@/config/models'
export default {
  async index (resource, message = true) {
    try {
      const res = api[models[resource].id].index()
      if (message) Vue.$toast.success(i18n.t('messages.loaded.success'))
      return res.data || res
    } catch (e) {
      if (message) Vue.$toast.error(i18n.t('messages.loaded.error'))
      console.log(e)
    }
  },
  async find (resource, id, include, message = true) {
    const params = include ? { include } : {}
    try {
      const res = api[models[resource].id].find(id, params)
      if (message) Vue.$toast.success(i18n.t('messages.loaded.success'))
      return res.data || res
    } catch (e) {
      if (message) Vue.$toast.error(i18n.t('messages.loaded.error'))
      console.log(e)
    }
  },
  async store (resource, form, message = true) {
    try {
      const res = api[models[resource].id].update(form[models[resource].primaryKey], helpers.cleanFormBeforeSubmit(resource, form))
      if (message) Vue.$toast.success(i18n.t('messages.updated.success'))
      return res.data || res

    }
  },
  async update (resource, form, message = true) {
    try {
      const res = api[models[resource].id].update(form[models[resource].primaryKey], helpers.cleanFormBeforeSubmit(resource, form))
      if (message) Vue.$toast.success(i18n.t('messages.updated.success'))
      return res.data || res
    } catch (e) {
      if (message) Vue.$toast.error(i18n.t('messages.updated.error'))
      console.log(e)
    }
  },
  async destroy (resource, item, message = true) {
    try {
      const res = await api[models[resource].id].destroy(item[models[resource].primaryKey])
      if (message) Vue.$toast.success(i18n.t('messages.deleted.success'))
      return res.data || res
    } catch (e) {
      if (message) Vue.$toast.error(i18n.t('messages.deleted.error'))
      console.log(e)
    }
  }
}
