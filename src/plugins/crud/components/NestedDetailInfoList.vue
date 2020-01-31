<template>
    <section>
        <v-row>
            <template v-for="(item, key) in items">
                <v-col v-if="!_.isObject(item)" :cols="6" :md="4" lg="3" :key="key">
                    <h3 class="subtitle-2 tw-text-gray-500">{{ _.capitalize(_.lowerCase(key)) }}:</h3>
                    <div class="body-1 text-black">
                        <the-crud-table-field-normal :resource="resource" :value="item" :field="getField(key)" />
                    </div>
                </v-col>
            </template>
        </v-row>
    </section>
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
        if (field && field.text) {
          name = field.text
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
