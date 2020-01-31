import _id from './fields/_id'
import _action from './fields/_action'
import _userId from './fields/_userId'
import _createdAt from './fields/_createdAt'
import _updatedAt from './fields/_updatedAt'
export default {
  id: 'audit',
  url: '/audits',
  primaryKey: 'id',
  title: 'Audits',
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
    _userId,
    {
      text: 'Event',
      value: 'event'
    },
    {
      text: 'Resource',
      value: 'model'
    },
    {
      text: 'Resource ID',
      value: 'auditable_id'
    },
    _createdAt,
    _updatedAt
  ]
}
