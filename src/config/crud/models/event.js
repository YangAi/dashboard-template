export default {
  id: 'event',
  url: '/events',
  primaryKey: 'id',
  title: '活动',
  relatedModel: ['content', 'user'],
  guarded: ['id', 'user_id', 'click_count', 'head_count', 'created_at', 'updated_at', 'signed_in_head_count'],
  table: {
    show: [],
    hide: ['img'],
    liveEdit: ['title', 'location']
  },
  form: {
    show: [],
    hide: [],
    disabled: []
  },
  detail: {
    show: [],
    hide: [],
    editableModel: ['content']
  },
  fields: [
    {
      label: 'ID',
      value: 'id',
      type: 'number',
      width: '90px',
      disabled: true
    },
    {
      label: '行动',
      value: 'action',
      disabled: true,
      width: '140px'
    },
    {
      label: '标题',
      value: 'title',
      type: 'string',
      width: '200px'
    },
    {
      label: '活动地点',
      value: 'location'
    },
    {
      label: '开始时间',
      value: 'start_at',
      type: 'datetime'
    },
    {
      label: '结束时间',
      value: 'end_at',
      type: 'datetime'
    },
    {
      label: '创建时间',
      value: 'created_at',
      type: 'datetime'
    },
    {
      label: '内容',
      value: 'checkbox',
      type: 'checkbox'
    },
    {
      label: '内容',
      value: 'slider',
      type: 'slider'
    }
  ]
}
