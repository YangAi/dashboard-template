import messages from './messages'

export default {
  apiUri: process.env.VUE_APP_API_URL,
  authResource: process.env.VUE_APP_AUTH_RESOURCE,
  source: process.env.VUE_APP_AUTH_RESOURCE,
  language: process.env.VUE_APP_LANGUAGE,
  appName: 'IGS Springs',
  messages: messages[process.env.VUE_APP_LANGUAGE]
}
