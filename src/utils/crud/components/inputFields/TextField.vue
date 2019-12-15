<template>
  <v-text-field v-bind="$attrs"
                :field="field"
                :type="['number', 'decimal', 'integer'].includes(field.type) ? 'number' : 'text'"
                :step="field.type === 'decimal' ? 0.01 : 1"
                v-model="innerValue" />
</template>

<script>
import BaseMixins from './BaseMixins'
export default {
  name: 'TextField',
  mixins: [BaseMixins]
}
</script>

<style lang="scss" scoped>

</style>
