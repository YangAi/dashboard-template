import _id from './fields/_id'
import _action from './fields/_action'
import _createdAt from './fields/_createdAt'
import _updatedAt from './fields/_updatedAt'
export default {
  id: 'spring',
  url: '/springs',
  primaryKey: 'id',
  title: 'Springs',
  relatedModel: ['records'],
  guarded: ['id', 'user_id', 'created_at', 'updated_at', 'status', 'records_count'],
  table: {
    show: ['id', 'action', 'name', 'county', 'quad', 'is_cave', 'is_private', 'created_at', 'updated_at'],
    hide: ['img'],
    liveEdit: ['name', 'is_private']
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
      text: 'Name',
      value: 'name'
    },
    {
      text: 'Alternate Name',
      value: 'alternate_name'
    },
    {
      text: 'REF',
      value: 'red'
    },
    {
      text: 'Latitude',
      value: 'latitude',
      type: 'number'
    },
    {
      text: 'Longitude',
      value: 'longitude',
      type: 'number'
    },
    {
      text: 'County',
      value: 'county'
    },
    {
      text: 'Quad',
      value: 'quad'
    },
    {
      text: 'Is Cave',
      value: 'is_cave',
      type: 'checkbox'
    },
    {
      text: 'Cave Length',
      value: 'cave_length',
      type: 'number'
    },
    {
      text: 'Is Private',
      value: 'is_private',
      type: 'checkbox'
    },
    {
      text: 'Owner Name',
      value: 'owner_name'
    },
    {
      text: 'Owner Email',
      value: 'owner_email'
    },
    {
      text: 'Owner Phone',
      value: 'owner phone'
    },
    {
      text: 'Status',
      value: 'status',
      type: 'select',
      disabled: true
    },
    _createdAt,
    _updatedAt
  ]
}
