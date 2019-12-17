<template>
  <v-card>
    <v-card-text>
      <v-data-table ref="table" :headers="headers" :items="list" v-bind="$attrs" :search="search" @current-items="currentItems">
        <template v-for="(field) in fields" v-slot:[`item.${field.value}`]="{ item }">
          <slot :name="`field.${field.value}`" :item="item">
            <the-crud-table-field :field="field" :resource="resource" v-model="item" />
          </slot>
        </template>
        <template v-slot:no-data>
          <slot name="table.no-data" />
        </template>
        <template v-slot:no-results>
          <slot name="table.no-results" />
        </template>
        <template v-slot:header>
          <slot name="table.header" />
        </template>
        <template v-slot:footer>
          <slot name="table.footer" />
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import TheCrudTableField from './TheCrudTableField'
import baseCrud from '../mixins/baseCrud'
import availableFields from '../mixins/availableFields'
export default {
  name: 'TheCrudTable',
  mixins: [baseCrud, availableFields],
  components: { TheCrudTableField },
  props: {
    list: {
      type: Array,
      required: true
    },
    search: {
      type: String,
      default: ''
    },
    filters: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    headers () {
      let fields = this.fields
      this._.forEach(fields, (field, index) => {
        fields[index] = {
          width: '120px',
          ...field,
          filter: (value, search, item) => {
            // return false
            return this.itemFilter(field, value, search, item)
          }
        }
      })
      return fields
    }
  },
  data () {
    return {
      componentType: 'table'
    }
  },
  methods: {
    itemFilter (field, value, search, item) {
      if (this._.isEmpty(search) && (this._.isEmpty(this.filters) || this.filters[field.value].value === '')) return true

      if (this.filters[field.value].value !== '' && !this.normalFilter(field, value)) {
        return false
      }
      if (search) {
        let output = false
        this._.forEach(this.fields, (x) => {
          if (!item[x.value]) return
          if (item[x.value].toString().toLowerCase().includes(search.toString().toLowerCase())) {
            output = true
          }
        })
        return output
      }
      return true
    },
    normalFilter (item, fieldValue) {
      const filter = this.filters[item.value].value.toString().toLowerCase()
      const field = fieldValue.toString().toLowerCase()
      switch (this.filters[item.value].mode) {
        case 'like':
          return field.includes(filter)
        case 'equal':
          return field === filter
        case 'list':
          const tmpList = filter.split(';')
          return tmpList.includes(field)
        case 'less':
          return field < filter
        case 'great':
          return field > filter
        case 'all':
          return true
      }
      return false
    },
    currentItems (val) {
      this.$emit('current-items', val)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
