<template>
  <the-crud-table-field-live-edit v-if="isLiveEdit" v-model="value" :field="field" :resource="resource"  />
  <the-crud-table-field-normal v-else v-model="innerValue" :field="field" />
</template>

<script>
import TheCrudTableFieldLiveEdit from './TheCrudTableFieldLiveEdit'
import baseMixins from './inputFields/baseMixins'
import baseCrud from '../mixins/baseCrud'
import TheCrudTableFieldNormal from './TheCrudTableFieldNormal'
export default {
  name: 'TheCrudTableField',
  mixins: [baseMixins, baseCrud],
  props: {
    disableLiveEdit: {
      type: Boolean,
      default: false
    }
  },
  components: { TheCrudTableFieldNormal, TheCrudTableFieldLiveEdit },
  computed: {
    innerValue: {
      get () {
        let output = this.value
        const arr = this.field.value.split('.')
        // console.log(arr, this.value['spring']['name'])
        arr.forEach((key) => {
          output = output[key]
          console.log('value', output)
          console.log(key, output)
        })
        return output
      }
    },
    isLiveEdit () {
      if (this.disableLiveEdit) return false
      if (this.model.guarded.includes(this.field.value)) return false
      return this.field.liveEdit || (this.model.table && this.model.table.liveEdit && this.model.table.liveEdit.includes(this.field.value))
    }
  },
  methods: {
    getObjectProperty () {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
