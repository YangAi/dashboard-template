<template>
  <the-crud-table-field-live-edit v-if="field.liveEdit" v-model="innerValue" :field="field" />
  <span v-else>{{ innerValue[field.value] }}</span>
</template>

<script>
import TheCrudTableFieldLiveEdit from './TheCrudTableFieldLiveEdit'
import BaseMixins from './inputFields/BaseMixins'
export default {
  name: 'TheCrudTableField',
  mixins: [BaseMixins],
  components: { TheCrudTableFieldLiveEdit },
  props: {
    field: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
