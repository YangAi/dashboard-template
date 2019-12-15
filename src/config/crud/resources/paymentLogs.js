export default {
  id: 'paymentLogs',
  url: '/backend/payment-logs',
  primaryKey: 'id',
  title: '支付日志',
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
