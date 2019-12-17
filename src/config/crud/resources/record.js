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
  relatedModel: [],
  guarded: ['id', 'user_id', 'created_at', 'updated_at'],
  table: {
    show: [],
    hide: ['img'],
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
      value: 'spring.name'
    },
    _userId,
    {
      text: '',
      value: '',
      type: '',
      width: '',
      disabled: false
    },

    _createdAt,
    _updatedAt
  ]
}
