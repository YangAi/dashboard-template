import Resource from './resource'
import config from '@/config'
import crud from '@/config/crud'
import { forEach } from 'lodash'
import http from '@plugins/http'

let resource = {
  gps: {
    async get (params = {}) {
      return http.get('https://geo.fcc.gov/api/census/area', { params })
    }
  },
  me: new Resource('/me')
  // events: new Resource('/events')
}

forEach(crud, (item) => {
  if (!item.subModel) {
    resource[item.id] = new Resource(item.url)
  }
})

resource[config.authResource] = new Resource('/' + config.authResource)

export default resource
