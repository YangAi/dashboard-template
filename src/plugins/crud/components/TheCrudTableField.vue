<template>
  <the-crud-table-field-live-edit v-if="isLiveEdit" v-model="innerValue" :field="field" />
  <span v-else>{{ innerValue[field.value] }}</span>
</template>

<script>
import TheCrudTableFieldLiveEdit from './TheCrudTableFieldLiveEdit'
import baseMixins from './inputFields/baseMixins'
import baseCrud from '../mixins/baseCrud'
export default {
  name: 'TheCrudTableField',
  mixins: [baseMixins, baseCrud],
  components: { TheCrudTableFieldLiveEdit },
  computed: {
    isLiveEdit () {
      if (this.model.guarded.includes(this.field.value)) return false
      return this.field.liveEdit || (this.model.table && this.model.table.liveEdit && this.model.table.liveEdit.includes(this.field.value))
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
