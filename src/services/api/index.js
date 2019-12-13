import Resource from './resource'

export default {
  auth: new Resource('/auth'),
  backend: new Resource('/backend'),
  me: new Resource('/me')
}
