export default {
  id: 'order',
  url: '/backend/order',
  primaryKey: 'id',
  title: '订单',
  relatedModel: 'order',
  fields: [
    {
      text: 'ID',
      value: 'id',
      type: 'number',
      disabled: true
    },
    {
      text: '行动',
      value: 'action',
      disabled: true
    },
    {
      text: '描述',
      value: 'type'
    },
    {
      text: '用户ID',
      value: 'user_id'
    }
  ]
}
