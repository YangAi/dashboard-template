import _id from './fields/_id'
import _action from './fields/_action'
import _userId from './fields/_userId'
import _createdAt from './fields/_createdAt'
import _updatedAt from './fields/_updatedAt'
export default {
  id: '',
  url: '/',
  primaryKey: 'id',
  title: '',
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
