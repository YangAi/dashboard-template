<template>
  <v-data-table :headers="headers" :items="list" v-bind="$attrs" :search="search">
    <template v-for="(field) in fields" v-slot:[`item.${field.value}`]="{ item }">
      <slot :name="`field.${field.value}`" :item="item">
        <the-crud-table-field :field="field" v-model="item" />
      </slot>
    </template>
  </v-data-table>
</template>

<script>
import TheCrudTableField from './TheCrudTableField'
export default {
  name: 'TheCrudTable',
  components: { TheCrudTableField },
  props: {
    list: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    search: {
      type: String
    },
    filters: {
      type: Object
    }
  },
  computed: {
    headers () {
      let fields = this.fields
      this._.forEach(fields, (field, index) => {
        fields[index] = {
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
  methods: {
    itemFilter (field, value, search, item) {
      if (this._.isEmpty(search) && this._.isEmpty(this.filters[field.value].value)) return true
      if (!this._.isEmpty(this.filters[field.value].value) && !this.normalFilter(field, value)) {
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
      const filter = this.filters[item.value]
      if (this._.isEmpty(filter.value)) return true
      const field = fieldValue.toString().toLowerCase()
      switch (filter.mode) {
        case 'like':
          return field.includes(filter.value)
        case 'equal':
          return field === filter.value
        case 'list':
          const tmpList = filter.value.split(';')
          return tmpList.includes(field)
        case 'small':
          return field < filter.value
        case 'large':
          return field > filter.value
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
