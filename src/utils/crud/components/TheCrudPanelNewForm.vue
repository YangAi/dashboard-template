<template>
  <v-form ref="form">
    <crud-input-field v-for="field in enabledFields"
                      :key="field.value"
                      :field="field"
                      v-model="form[field.value]" />
  </v-form>
</template>

<script>
import CrudInputField from './CrudInputField'
export default {
  name: 'TheCrudPanelNewForm',
  components: { CrudInputField },
  props: {
    value: {
      type: Object
    },
    fields: {
      type: Array,
      required: true
    }
  },
  created () {
    this.initialize()
  },
  computed: {
    enabledFields () {
      return this._.filter(this.fields, (field) => {
        return field.disabled !== true && field.disabled !== 'true'
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
      let temp = {}
      this._.forEach(this.enabledFields, (field) => {
        temp[field.value] = this.value[field.value] || ''
      })
      this.form = temp
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
