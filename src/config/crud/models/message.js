import _id from './fields/_id'
import _action from './fields/_action'
import _userId from './fields/_userId'
import _createdAt from './fields/_createdAt'
import _updatedAt from './fields/_updatedAt'
export default {
  id: 'message',
  url: '/messages',
  primaryKey: 'id',
  title: 'Messages',
  relatedModel: [],
  guarded: ['id', 'user_id', 'created_at', 'updated_at'],
  table: {
    show: [],
    hide: [],
    liveEdit: []
  },
  form: {
    show: [],
    hide: [],
    disabled: []
  },
  detail: {
    show: [],
    hide: [],
    editableModel: []
  },
  fields: [
    _id,
    _action,
    {
      text: 'Title',
      value: 'title',
      disabled: true
    },
    _userId,
    // {
    //   text: 'Data Amount',
    //   value: 'data_count',
    //   type: 'number',
    //   disabled: false
    // },
    {
      text: 'Is Read',
      value: 'is_read',
      type: 'boolean',
      disabled: true
    },
    _createdAt,
    _updatedAt
  ]
}
