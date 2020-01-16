export default {
  id: 'order',
  url: '/backend/order',
  primaryKey: 'id',
  title: '订单',
  relatedModel: 'order',
  fields: [
    {
      label: 'ID',
      value: 'id',
      type: 'number',
      disabled: true
    },
    {
      label: '行动',
      value: 'action',
      disabled: true
    },
    {
      label: '描述',
      value: 'type'
    },
    {
      label: '用户ID',
      value: 'user_id'
    }
  ]
}
