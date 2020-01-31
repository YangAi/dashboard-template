<template>
  <v-form ref="form">
    <v-row dense>
      <v-col cols="12" :md="['richtext', 'textarea'].includes(field.mode) ? 12 : 6" v-for="field in enabledFields"
             :key="field.value">
        <slot :name="`new.form.${field.value}`" :field="field">
          <crud-input-field dense
                            :field="field"
                            v-model="form[field.value]" />
        </slot>
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
    this.$emit('form', this.enabledForm)
  },
  computed: {
    enabledFields () {
      return this._.filter(this.getAvailableFields('form'), (field) => {
        return !(field.disabled === true || (this.model.guarded && this.model.guarded.includes(field.value)))
      })
    },
    enabledForm: {
      get () {
        let form = {}
        this._.forEach(this.enabledFields, (item) => {
          form[item.value] = this.form[item.value]
        })
        return form
      },
      set (val) {
        this._.forEach(val, (item, key) => {
          this.form[key] = item
        })
      }
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
    enabledForm () {
      this.$emit('form', this.enabledForm)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
