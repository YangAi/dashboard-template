<template>
  <div class="the-crud tw-relative">
    <v-scroll-x-transition hide-on-leave>
      <div class="the-crud-table" v-show="_.isNull(detail.id)" key="table">
        <!--    panel start  -->
        <the-crud-panel :resource="resource"
                        :filters="filters"
                        :search="search"
                        class="tw-mb-4"
                        @updateFilters="updateFilters"
                        @updateSearch="updateSearch"
                        @refresh="loadIndex"
                        @export="exportToExcel"/>
        <!--    panel end-->
        <!--    table start-->
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
        <!--    table end-->
      </div>
    </v-scroll-x-transition>
    <v-scroll-x-transition hide-on-leave>
      <the-detail v-if="canViewDetail"
                  v-show="detail.id"
                  :id="detail.id"
                  :resource="resource"
                  key="detail"
                  :idList="filteredId"
                  @shift="shiftDetail"
                  @close="closeDetail">
        <template v-slot:detail.actions="{ detail }">
          <slot name="detail.actions" :detail="detail" />
        </template>
        <template v-slot:[`detail.${tab}.field.action`]="{ item }" v-for="tab in model.relatedModel">
          <slot :name="`detail.${tab}.field.action`" :item="item" />
        </template>
      </the-detail>
    </v-scroll-x-transition>
    <!--    fast update dialog start-->
    <v-dialog v-if="canEdit" v-model="update.show" max-width="780">
      <v-card>
        <v-card-title class="headline">
          {{ $t('actions.update') + $crud[resource].title + ' - ' + update.form[$crud[resource].primaryKey] }}
        </v-card-title>
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
import TheCrudTable from './TheCrudTable'
import TheCrudPanel from './TheCrudPanel'
import TheCrudTableFieldAction from './TheCrudTableFieldAction'
import TheDetail from './TheDetail'
import TheCrudPanelNewForm from './TheCrudPanelNewForm'
import baseCrud from '../mixins/baseCrud'
import availableFields from '../mixins/availableFields'
import http from '../helpers/http'
export default {
  name: 'TheCurd',
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
  components: { TheCrudPanelNewForm, TheDetail, TheCrudTableFieldAction, TheCrudPanel, TheCrudTable },
  created () {
    this.initialize()
    this.loadIndex()
  },
  computed: {
    filteredId () {
      return this._.map(this.currentItems, 'id')
    }
  },
  data () {
    return {
      componentType: 'table',
      loading: true,
      search: '',
      filters: {},
      list: [],
      currentItems: [],
      activeItem: {},
      update: {
        show: false,
        item: {},
        form: {}
      },
      detail: {
        loading: false,
        id: null,
        item: {}
      }
    }
  },
  methods: {
    updateFilters (filters) {
      this.filters = filters
    },
    updateSearch (search) {
      this.search = search
    },
    exportToExcel () {
      console.log('excel')
    },
    initialize () {
      this.$store.dispatch('crudInitialize', {
        resource: this.resource
      })
      this._.forEach(this.fields, (field) => {
        this.$set(this.filters, field.value, {
          mode: 'equal',
          value: ''
        })
      })
    },
    updateHandle (item) {
      this.update.show = true
      this.update.form = this._.cloneDeep(item)
    },
    viewDetailHandle (item) {
      this.detail.show = true
      this.detail.id = item[this.model.primaryKey]
      // this.loadItem(this.detail.id)
    },
    async loadIndex () {
      this.loading = true
      const res = await http.index(this.resource)
      if (res) {
        this.list = res.data || res
      }
      this.loading = false
    },
    async updateItem () {
      const res = await http.update(this.resource, this.update.form)
      if (res) {
        const index = this._.findIndex(this.list, [this.model.primaryKey, this.update.form[this.model.primaryKey]])
        const list = this._.cloneDeep(this.list)
        list[index] = this.update.form
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
    setCurrentItems (val) {
      this.currentItems = val
    },
    closeDetail () {
      this.detail.id = null
    },
    shiftDetail (id) {
      this.detail.id = id
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
