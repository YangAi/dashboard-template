import Resource from './resource'
import config from '@/config'

let resource = {
  me: new Resource('/me')
}

resource[config.authResource] = new Resource('/' + config.authResource)

export default resource
