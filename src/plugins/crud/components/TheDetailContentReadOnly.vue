<template>
  <nested-detail-card :detail="detail" :resource="resource" />
</template>

<script>
import NestedDetailCard from './NestedDetailCard'
import baseCrud from '../mixins/baseCrud'

export default {
  name: 'TheDetailContentReadOnly',
  mixins: [baseCrud],
  components: { NestedDetailCard },
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
  },
  data () {
    return {
      componentType: 'detail'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
