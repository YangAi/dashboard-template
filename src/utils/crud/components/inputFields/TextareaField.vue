<template>
  <v-textarea v-bind="$attrs"
              :field="field"
              v-model="innerValue" />
</template>

<script>
import BaseMixins from './BaseMixins'

export default {
  name: 'TextareaField',
  mixins: [BaseMixins]
}
</script>

<style lang="scss" scoped>

</style>
