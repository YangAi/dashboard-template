<template>
  <div class="the-crud-table">
    <!--    panel start  -->
    <v-card flat>
      <the-crud-panel :resource="resource"
                      :filters="filters"
                      :search="search"
                      class="tw-mb-4"
                      @updateFilters="updateFilters"
                      @resetFilters="resetFilters"
                      @updateSearch="updateSearch"
                      @refresh="loadIndex"
                      @export="exportToExcel">
        <template v-slot:panel.actions>
          <slot name="panel.actions" />
        </template>
        <template v-slot:new.dialog.title>
          <slot name="new.dialog.title" />
        </template>
        <template v-for="field in getAvailableFields('form')" v-slot:[`new.form.${field.value}`]="{ field }">
          <slot :name="`new.form.${field.value}`" :field="field" />
        </template>
      </the-crud-panel>
    </v-card>
    <!--    panel end-->
    <!--    table start-->
    <v-card flat>
      <the-crud-table
          :resource="resource"
          :list="list"
          :loading="loading"
          v-bind="$attrs"
          :search="search"
          :filters="filters"
          @current-items="setCurrentItems">
        <!-- slots for fields -->
        <template v-for="field in fields" v-slot:[`field.${field.value}`]="{ item }">
          <the-crud-table-field-action v-if="field.value === 'action'"
                                       :key="field.value"
                                       :item="item"
                                       :canEdit="canEdit"
                                       :canDelete="canDelete"
                                       @update="updateHandle"
                                       @view="viewDetailHandle"
                                       @delete="deleteItem">
            <template v-slot:field.action.prepend>
              <slot name="field.action.prepend" :item="item" />
            </template>
            <template v-slot:field.action.append>
              <slot name="field.action.append" :item="item" />
            </template>
          </the-crud-table-field-action>
          <slot :name="`field.${field.value}`" :field="field" :item="item" />
        </template>
      </the-crud-table>
    </v-card>
    <!--    table end-->
    <!--    fast update dialog start-->
    <v-dialog v-if="canEdit" v-model="update.show" max-width="780">
      <v-card>
        <v-card-title class="headline tw-py-8">
          <slot name="edit.dialog.title" :form="update.form || {}">
            {{ $t('actions.update') + $crud[resource].title + ' - ' + update.form[$crud[resource].primaryKey] }}
          </slot>
        </v-card-title>
        <v-container class="tw-mb-4 tw-pt-0">
          <v-divider />
        </v-container>
        <v-card-text>
          <the-crud-panel-new-form v-model="update.form" :resource="resource" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="gray darken-1" text @click="update.show = false">{{ $t('actions.cancel')}}</v-btn>
          <v-btn color="green darken-1" text @click="updateItem">{{ $t('actions.submit')}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--    fast update dialog end-->
  </div>
</template>

<script>
import http from '../helpers/http'
import baseCrud from '../mixins/baseCrud'
import TheCrudPanel from './TheCrudPanel'
import TheCrudTable from './TheCrudTable'
import TheCrudTableFieldAction from './TheCrudTableFieldAction'
import availableFields from '../mixins/availableFields'
import TheCrudPanelNewForm from './TheNewForm'

export default {
  name: 'TheCrudGroup',
  components: { TheCrudPanelNewForm, TheCrudTableFieldAction, TheCrudTable, TheCrudPanel },
  mixins: [baseCrud, availableFields],
  props: {
    canEdit: {
      type: Boolean,
      default: true
    },
    canDelete: {
      type: Boolean,
      default: true
    },
    canViewDetail: {
      type: Boolean,
      default: true
    }
  },
  created () {
    this.loadIndex()
    this.resetFilters()
  },
  computed: {
    fields () {
      return this.getAvailableFields('table')
    }
  },
  data () {
    return {
      loading: false,
      list: [],
      filters: {},
      search: '',
      update: {
        show: false,
        item: {},
        form: {}
      }
    }
  },
  methods: {
    async loadIndex () {
      this.loading = true
      const res = await http.index(this.resource)
      if (res) {
        this.list = res.data || res
      }
      this.loading = false
    },
    updateFilters (filters) {
      this.filters = filters
    },
    resetFilters () {
      this._.forEach(this.model.fields, (field) => {
        this.$set(this.filters, field.value, {
          mode: 'equal',
          value: ''
        })
      })
    },
    updateSearch (search) {
      this.search = search
    },
    exportToExcel () {
      console.log('excel')
    },
    setCurrentItems (val) {
      this.currentItems = val
      this.$emit('currentItems', val)
    },
    updateHandle (item) {
      this.update.show = true
      this.update.form = this._.cloneDeep(item)
    },
    async updateItem () {
      const res = await http.update(this.resource, this.update.form)
      if (res) {
        const index = this._.findIndex(this.list, [this.model.primaryKey, this.update.form[this.model.primaryKey]])
        const list = this._.cloneDeep(this.list)
        list[index] = res.data
        console.log(list[index], list[index].updated_at)
        this.list = list
        this.update.show = false
      }
    },
    async deleteItem (item) {
      const res = await http.destroy(this.resource, item)
      if (res) {
        this.list = this._.filter(this.list, (o) => {
          return o[this.model.primaryKey] !== item[this.model.primaryKey]
        })
      }
    },
    viewDetailHandle (val) {
      this.$emit('detail', val)
    }
  }
}
</script>

<style scoped>

</style>
