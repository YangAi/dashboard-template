<template>
  <v-text-field :filled="!original" :dense="!original"
                v-bind="$attrs"
                :field="field"
                :type="['number', 'decimal', 'integer'].includes(field.type) ? 'number' : 'text'"
                :step="field.type === 'decimal' ? 0.01 : 1"
                v-model="innerValue" />
</template>

<script>
import baseMixins from './baseMixins'
export default {
  name: 'TextField',
  mixins: [baseMixins],
  props: {
    original: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
