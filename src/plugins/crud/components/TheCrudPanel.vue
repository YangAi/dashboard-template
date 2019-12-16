<template>
  <v-card>
    <v-card-title>
      {{ $t('datatable.all') }} {{ model.title }}
      <the-crud-panel-new-dialog :resource="resource" />
      <the-crud-panel-filter :resource="resource" :filters="filters" @updateFilters="updateFilters" />
      <v-btn fab small dark color="blue-grey" @click="$emit('refresh')" class="tw-mx-2">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <v-btn fab small dark color="green" @click="$emit('export')" class="tw-mx-2">
        <v-icon>mdi-file-excel-outline</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="searchInner"
        append-icon="mdi-magnify"
        :label="$t('actions.search')"
        single-line
        hide-details
        style="max-width: 300px"
      ></v-text-field>
    </v-card-title>
  </v-card>
</template>

<script>
import TheCrudPanelFilter from './TheCrudPanelFilter'
import TheCrudPanelNewDialog from './TheCrudPanelNewDialog'
import baseCrud from '../mixins/baseCrud'
export default {
  name: 'TheCrudPanel',
  mixins: [baseCrud],
  components: { TheCrudPanelNewDialog, TheCrudPanelFilter },
  props: {
    search: {
      type: String
    },
    filters: {
      type: Object
    }
  },
  computed: {
    searchInner: {
      get () {
        return this.search
      },
      set (val) {
        this.$emit('updateSearch', val)
      }
    }
  },
  methods: {
    updateFilters (val) {
      this.$emit('updateFilters', val)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
