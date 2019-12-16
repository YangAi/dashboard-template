export default {
  id: 'user',
  url: '/backend/payment-logs',
  primaryKey: 'id',
  title: '用户',
  relatedModel: ['order'],
  fields: [
    {
      text: '用户昵称',
      value: 'nick_name'
    },
    {
      text: '管理员',
      value: 'is_admin',
      type: 'boolean'
    }
  ]
}
