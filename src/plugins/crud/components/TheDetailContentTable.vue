<template>
  <the-crud-table
          :resource="singularedResource"
          :list="value">
    <template v-slot:field.action="{ item }">
      <v-btn icon @click="$emit('view', item)">
        <v-icon small color="blue">mdi-file-document-box-outline</v-icon>
      </v-btn>
      <slot :name="`detail.${resource}.field.action`" :item="item" />
    </template>
  </the-crud-table>
</template>

<script>
import baseCrud from '../mixins/baseCrud'
import TheCrudTable from './TheCrudTable'

export default {
  name: 'TheDetailContentTable',
  components: { TheCrudTable },
  mixins: [baseCrud],
  props: {
    value: {
      type: Array
    }
  },
  computed: {
    singularedResource () {
      const pluralize = require('pluralize')
      return pluralize.singular(this.resource)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
