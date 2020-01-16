<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left">Name {{ resource }}</th>
        <th class="text-left">Value</th>
      </tr>
      </thead>
      <tbody>
      <template v-for="(item, key) in items">
        <tr v-if="!_.isObject(item)" :key="key">
          <td>{{ getName(key) }}:</td>
          <td>
            <the-crud-table-field-normal :resource="resource" :value="item" :field="getField(key)" />
          </td>
        </tr>
      </template>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import baseCrud from '../mixins/baseCrud'
import TheCrudTableFieldNormal from './TheCrudTableFieldNormal'

export default {
  name: 'NestedDetailCardValueTable',
  components: { TheCrudTableFieldNormal },
  mixins: [baseCrud],
  props: {
    items: {
      type: Object
    }
  },
  // TODO Use computed property and bind model fields with table value
  methods: {
    getName (key) {
      let name = false
      if (this.model) {
        const field = this._.find(this.model.fields, { value: key })
        if (field && field.label) {
          name = field.label
        }
      }
      return name || this._.capitalize(this._.lowerCase(key))
    },
    getField (key) {
      if (this.model) {
        const field = this._.find(this.model.fields, { value: key })
        if (field) {
          return field
        }
      }
      return { type: 'text' }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
