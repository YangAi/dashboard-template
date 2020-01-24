<template>
  <v-form ref="form">
    <v-row dense>
      <v-col cols="12" :md="['richtext', 'textarea'].includes(field.mode) ? 12 : 6" v-for="field in enabledFields"
             :key="field.value">
        <crud-input-field dense
                          :field="field"
                          v-model="form[field.value]" />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import CrudInputField from './CrudInputField'
import baseCrud from '../mixins/baseCrud'
import availableFields from '../mixins/availableFields'
export default {
  name: 'TheCrudPanelNewForm',
  mixins: [baseCrud, availableFields],
  components: { CrudInputField },
  props: {
    value: {
      type: Object
    }
  },
  created () {
    this.initialize()
  },
  computed: {
    enabledFields () {
      return this._.filter(this.fields, (field) => {
        return !(field.disabled === true || (this.model.guarded && this.model.guarded.includes(field.value)))
      })
    },
    form: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  data () {
    return {
      componentType: 'form'
    }
  },
  watch: {
    enabledFields: {
      handler () {
        this.initialize()
      },
      deep: true
    }
  },
  methods: {
    initialize () {
      // let temp = {}
      // this._.forEach(this.enabledFields, (field) => {
      //   temp[field.value] = this.value[field.value] || ''
      // })
      // this.form = temp
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
