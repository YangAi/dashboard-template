<template>
  <section class="crud-panel">
    <v-card-title>
<!--      {{ $t('datatable.all') }} {{ model.title }}-->
      <v-text-field
          v-model="searchInner"
          prepend-icon="mdi-magnify"
          :label="$t('actions.search')"
          single-line
          clearable
          hide-details
          dense
          class="tw-my-2"
          style="max-width: 300px" />
      <v-spacer />
      <div class="actions">
        <slot name="panel.actions" />
        <the-crud-panel-new-dialog :resource="resource">
          <template v-slot:new.dialog.title>
            <slot name="new.dialog.title" />
          </template>
          <template v-for="field in getAvailableFields('form')" v-slot:[`new.form.${field.value}`]="{ field }">
            <slot :name="`new.form.${field.value}`" :field="field" />
          </template>
        </the-crud-panel-new-dialog>
        <the-crud-panel-filter :resource="resource" :filters="filters" @updateFilters="updateFilters" @resetFilters="$emit('resetFilters')" />
        <v-btn fab small dark color="blue-grey" @click="$emit('refresh')">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
        <v-btn fab small dark color="green" @click="$emit('export')">
          <v-icon>mdi-file-excel-outline</v-icon>
        </v-btn>
      </div>
    </v-card-title>
  </section>
</template>

<script>
import TheCrudPanelFilter from './TheCrudPanelFilter'
import TheCrudPanelNewDialog from './TheNewDialog'
import baseCrud from '../mixins/baseCrud'
import availableFields from '../mixins/availableFields'
export default {
  name: 'TheCrudPanel',
  mixins: [baseCrud, availableFields],
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
