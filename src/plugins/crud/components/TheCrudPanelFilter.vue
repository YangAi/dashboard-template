<template>
  <v-menu :close-on-content-click="false" max-height="50vh" offset-y>
    <template v-slot:activator="{ on }">
      <v-btn fab dark small color="red lighten-1" v-on="on">
        <v-icon>mdi-filter</v-icon>
      </v-btn>
    </template>
    <v-list class="tw-pb-4">
      <v-list-item>
        <v-list-item-title class="title">Filter</v-list-item-title>
        <v-spacer />
        <v-btn text small color="primary" @click="$emit('resetFilters')">Reset</v-btn>
      </v-list-item>
      <v-list-item v-for="(item, index) in fieldsAvailable" :key="index">
        <v-row no-gutters>
          <v-col v-if="['boolean', 'checkbox'].includes(item.type)" :col="12">
            <v-select v-model="filters[item.value].mode" :items="filterModes.checkbox" item-text="text" item-value="value" hide-details />
          </v-col>
          <v-col v-else :col="6">
            <v-select v-model="filters[item.value].mode" :items="numberType.includes(item.type) ? filterModes.number : filterModes.normal" item-text="text" item-value="value" hide-details />
          </v-col>
          <v-col :col="6">
            <crud-input-field original v-model="filters[item.value].value" :field="item" :disabled="false" for-filter hide-details />
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import CrudInputField from './CrudInputField'
import baseCrud from '../mixins/baseCrud'
import availableFields from '../mixins/availableFields'
export default {
  name: 'TheCrudPanelFilter',
  mixins: [baseCrud, availableFields],
  components: { CrudInputField },
  props: {
    filters: {
      type: Object
    }
  },
  computed: {
    fieldsAvailable () {
      return this._.filter(this.getAvailableFields('table'), (item) => {
        return item.value !== 'action'
      })
    },
    filterModes () {
      return {
        checkbox: [
          {
            value: 'equal',
            text: this.$t('datatable.filter.equal')
          },
          {
            value: 'all',
            text: this.$t('datatable.filter.all')
          }
        ],
        number: [
          {
            value: 'less',
            text: this.$t('datatable.filter.less')
          },
          {
            value: 'great',
            text: this.$t('datatable.filter.great')
          },
          {
            value: 'equal',
            text: this.$t('datatable.filter.equal')
          },
          {
            value: 'like',
            text: this.$t('datatable.filter.like')
          }
        ],
        normal: [
          {
            value: 'like',
            text: this.$t('datatable.filter.like')
          },
          {
            value: 'equal',
            text: this.$t('datatable.filter.equal')
          },
          {
            value: 'list',
            text: this.$t('datatable.filter.list')
          }
        ]
      }
    }
  },
  data () {
    return {
      numberType: ['number', 'decimal', 'integer', 'time', 'date', 'datetime', 'checkbox', 'boolean', 'slider']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
