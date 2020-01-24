<template>
  <div class="nested-detail">
    <section class="tw-mb-4">
      <h1 class="title">{{ model.title }}</h1>
      <nested-detail-info-list :items="detail" :resource="resource" />
    </section>
    <template v-for="(item, key) in detail">
      <section v-if="_.isObject(item)" :key="key" class="tw-mb-4">
        <h1 class="title">{{ key }}</h1>
        <!--        TODO 列表数据还没有开工，递归渲染数据 -->
        <nested-detail-info-list v-if="!_.every(item, _.isObject)" :items="item" :resource="setResource(key)" />
      </section>
    </template>
  </div>
</template>

<script>
import baseCrud from '../mixins/baseCrud'
import NestedDetailInfoList from './NestedDetailInfoList'

export default {
  name: 'NestedDetailCard',
  components: { NestedDetailInfoList },
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
