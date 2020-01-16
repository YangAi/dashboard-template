export default {
  id: 'user',
  url: '/backend/payment-logs',
  primaryKey: 'id',
  title: '用户',
  relatedModel: ['order'],
  fields: [
    {
      label: '用户昵称',
      value: 'nick_name'
    },
    {
      label: '管理员',
      value: 'is_admin',
      type: 'boolean'
    }
  ]
}
