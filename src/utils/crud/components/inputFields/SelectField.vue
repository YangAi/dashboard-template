<template>
  <v-autocomplete v-bind="$attrs"
                  :field="field"
                  v-model="innerValue" />
</template>

<script>
import BaseMixins from './BaseMixins'

export default {
  name: 'SelectField',
  mixins: [BaseMixins]
}
</script>

<style lang="scss" scoped>

</style>
