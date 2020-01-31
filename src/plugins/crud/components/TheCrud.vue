<template>
  <div class="the-crud tw-relative">
    <v-scroll-x-transition hide-on-leave>
      <the-crud-group v-if="_.isNull(detail.id)"
                      v-bind="$attrs"
                      key="table"
                      :resource="resource"
                      :can-view-detail="canViewDetail"
                      @currentItems="setCurrentItems"
                      @detail="viewDetailHandle" />
      <the-detail  v-else-if="canViewDetail && detail.id >= 0"
                   :id="detail.id"
                   :resource="resource"
                   :idList="filteredId"
                   @shift="shiftDetail"
                   @close="closeDetail">
        <template v-slot:detail.title="{ detail }">
          <slot name="detail.title" :detail="detail" />
        </template>
        <template v-slot:detail.actions="{ detail }">
          <slot name="detail.actions" :detail="detail" />
        </template>
        <template v-slot:[`detail.${tab}.field.action`]="{ item }" v-for="tab in model.relatedModel">
          <slot :name="`detail.${tab}.field.action`" :item="item" />
        </template>
      </the-detail>
    </v-scroll-x-transition>
  </div>
</template>

<script>
import TheDetail from './TheDetail'
import baseCrud from '../mixins/baseCrud'
import TheCrudGroup from './TheCrudGroup'
export default {
  name: 'TheCurd',
  mixins: [baseCrud],
  props: {
    canViewDetail: {
      type: Boolean,
      default: true
    }
  },
  components: { TheCrudGroup, TheDetail },
  computed: {
    filteredId () {
      return this._.map(this.currentItems, 'id')
    }
  },
  data () {
    return {
      loading: true,
      list: [],
      currentItems: [],
      activeItem: {},
      detail: {
        loading: false,
        id: null,
        item: {}
      }
    }
  },
  methods: {
    viewDetailHandle (item) {
      this.detail.show = true
      this.detail.id = item[this.model.primaryKey]
      // this.loadItem(this.detail.id)
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
