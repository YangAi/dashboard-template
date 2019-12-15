<template>
  <v-checkbox v-bind="$attrs"
              :field="field"
              v-model="innerValue" />
</template>

<script>
import BaseMixins from './BaseMixins'

export default {
  name: 'CheckboxField',
  mixins: [BaseMixins]
}
</script>

<style lang="scss" scoped>

</style>
