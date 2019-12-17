<template>
    <v-checkbox v-if="['boolean', 'checkbox'].includes(field.type)" v-model="innerValue" disabled />
    <better-time v-else-if="['date', 'datetime'].includes(field.type)" :time="innerValue" />
    <span v-else>{{ value }}</span>
</template>

<script>
import baseMixins from './inputFields/baseMixins'
import baseCrud from '../mixins/baseCrud'

export default {
  name: 'TheCrudTableFieldNormal',
  mixins: [baseMixins, baseCrud]
}
</script>

<style scoped>

</style>
