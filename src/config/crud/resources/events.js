export default {
  id: 'events',
  url: '/events',
  primaryKey: 'id',
  title: '活动',
  relatedModel: ['content'],
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
      text: '标题',
      value: 'title',
      liveEdit: true,
      type: 'string'
    },
    {
      text: '时间',
      value: 'created_at',
      liveEdit: true,
      type: 'datetime'
    },
    {
      text: '内容',
      value: 'content',
      type: 'richText'
    },
    {
      text: '内容',
      value: 'checkbox',
      type: 'checkbox'
    },
    {
      text: '内容',
      value: 'slider',
      type: 'slider'
    }
  ]

}
