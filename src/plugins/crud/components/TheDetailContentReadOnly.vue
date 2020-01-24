<template>
  <nested-detail-info :detail="detail" :resource="resource" />
</template>

<script>
import NestedDetailInfo from './NestedDetailInfo'
import baseCrud from '../mixins/baseCrud'

export default {
  name: 'TheDetailContentReadOnly',
  mixins: [baseCrud],
  components: { NestedDetailInfo },
  props: {
    value: {
      type: Object
    }
  },
  computed: {
    detail: {
      get () {
        return this.value
      },
      set (val) {
        return this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
