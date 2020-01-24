import _id from './fields/_id'
import _action from './fields/_action'
import _userId from './fields/_userId'
import _createdAt from './fields/_createdAt'
import _updatedAt from './fields/_updatedAt'
export default {
  id: 'record',
  url: '/spring-records',
  primaryKey: 'id',
  title: 'Record',
  relatedModel: ['spring'],
  guarded: ['id', 'user_id', 'created_at', 'updated_at'],
  table: {
    show: ['id', 'spring.name'],
    hide: ['user_id'],
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
      text: 'Spring Name',
      value: 'spring.name',
      width: '180px',
      disabled: false
    },
    _userId,
    {
      text: 'Data Amount',
      value: 'data_count',
      type: 'number',
      disabled: false
    },

    _createdAt,
    _updatedAt
  ]
}
