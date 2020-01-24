export default {
  inputFormat: {
    date: 'YYYY-MM-DD',
    time: 'HH:mm'
  },
  url: process.env.VUE_APP_URL,
  apiUri: process.env.VUE_APP_API_URL,
  authResource: process.env.VUE_APP_AUTH_RESOURCE,
  hasPermissions: process.env.VUE_APP_HAS_PERMISSIONS === 'true',
  verifyCodeLength: process.env.VUE_APP_VERIFY_CODE_LENGTH,
  source: process.env.VUE_APP_SOURCE,
  language: process.env.VUE_APP_LANGUAGE,
  appName: 'IGS Springs',
  appUrl: process.env.VUE_APP_URL,
  imageUploadUrl: process.env.VUE_APP_API_URL + '/tools/upload-file',
  transition: {
    dialog: 'dialog-bottom-transition'
  }
}
