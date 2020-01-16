export default {
  id: 'paymentLogs',
  url: '/backend/payment-logs',
  primaryKey: 'id',
  title: '支付日志',
  relatedModel: ['order'],
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
