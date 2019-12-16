import messages from './messages'

export default {
  apiUri: process.env.VUE_APP_API_URL,
  authResource: 'tokens',
  source: process.env.VUE_APP_SOURCE,
  language: process.env.VUE_APP_LANGUAGE,
  appName: '本地宝',
  messages: messages[process.env.VUE_APP_LANGUAGE]
}
