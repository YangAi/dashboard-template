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
            <better-time v-if="['created_at', 'updated_at', 'deleted_at'].indexOf(key) >= 0"
                         :time="item" />
            <span v-else>{{ item }}</span>
          </td>
        </tr>
      </template>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import baseCrud from '../mixins/baseCrud'

export default {
  name: 'NestedDetailCardValueTable',
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
        if (field && field.text) {
          name = field.text
        }
      }
      return name || this._.capitalize(this._.lowerCase(key))
    },
    getType (key) {
      let name = false
      if (this.model) {
        const field = this._.find(this.model.fields, { value: key })
        if (field) {
          name = field.text
        }
      }
      return name || this._.capitalize(this._.lowerCase(key))
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
