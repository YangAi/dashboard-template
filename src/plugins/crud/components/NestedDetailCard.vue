<template>
  <div class="nested-detail">
    <v-card class="tw-my-4">
      <!--      TODO i18n-->
      <v-card-title>{{ model.title }}数据</v-card-title>
      <v-card-text>
        <nested-detail-card-value-table :items="detail" :resource="resource" />
      </v-card-text>
    </v-card>
    <template v-for="(item, key) in detail">
      <v-card v-if="_.isObject(item)" :key="key" class="tw-my-4">
        <v-card-title>{{ key }}</v-card-title>
        <!--        TODO 列表数据还没有开工，递归渲染数据 -->
        <nested-detail-card-value-table v-if="!_.every(item, _.isObject)" :items="item" :resource="setResource(key)" />
      </v-card>
    </template>
  </div>
</template>

<script>
import baseCrud from '../mixins/baseCrud'
import NestedDetailCardValueTable from './NestedDetailCardValueTable'

export default {
  name: 'NestedDetailCard',
  components: { NestedDetailCardValueTable },
  mixins: [baseCrud],
  props: {
    detail: {
      type: Object
    }
  },
  methods: {
    setResource (key) {
      const pluralize = require('pluralize')
      return pluralize.singular(key)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
