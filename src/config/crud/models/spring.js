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
      label: 'Name',
      value: 'name'
    },
    {
      label: 'Alternate Name',
      value: 'alternate_name'
    },
    {
      label: 'REF',
      value: 'red'
    },
    {
      label: 'Latitude',
      value: 'latitude',
      type: 'number'
    },
    {
      label: 'Longitude',
      value: 'longitude',
      type: 'number'
    },
    {
      label: 'County',
      value: 'county'
    },
    {
      label: 'Quad',
      value: 'quad'
    },
    {
      label: 'Is Cave',
      value: 'is_cave',
      type: 'checkbox'
    },
    {
      label: 'Cave Length',
      value: 'cave_length',
      type: 'number'
    },
    {
      label: 'Is Private',
      value: 'is_private',
      type: 'checkbox'
    },
    {
      label: 'Owner Name',
      value: 'owner_name'
    },
    {
      label: 'Owner Email',
      value: 'owner_email'
    },
    {
      label: 'Owner Phone',
      value: 'owner phone'
    },
    {
      label: 'Status',
      value: 'status',
      type: 'select',
      disabled: true
    },
    _createdAt,
    _updatedAt
  ]
}
