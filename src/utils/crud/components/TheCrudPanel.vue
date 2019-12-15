<template>
  <v-card>
    <v-card-title>
      所有{{ $crud[resource].title }}
      <the-crud-panel-new-dialog :fields="fields" />
      <the-crud-panel-filter :fields="fields" :filters="filters" @updateFilters="updateFilters" />
      <v-btn icon @click="$emit('refresh')">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <v-btn icon @click="$emit('export')">
        <v-icon>mdi-file-excel-outline</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="searchInner"
        append-icon="mdi-magnify"
        :label="$t('actions.search')"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
  </v-card>
</template>

<script>
import TheCrudPanelFilter from './TheCrudPanelFilter'
import TheCrudPanelNewDialog from './TheCrudPanelNewDialog'
export default {
  name: 'TheCrudPanel',
  components: { TheCrudPanelNewDialog, TheCrudPanelFilter },
  props: {
    resource: {
      type: String,
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
    fields () {
      return this.$crud[this.resource].fields
    },
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
