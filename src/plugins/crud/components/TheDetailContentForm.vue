<template>
  <section class="crud-detail-content-form">
    <v-card-text>
      <the-crud-panel-new-form v-model="innerValue" :resource="resource" @form="formHandle" />
    </v-card-text>
    <v-card-actions>
      <v-btn @click="submit">{{ $t('actions.submit') }}</v-btn>
    </v-card-actions>
  </section>
</template>

<script>
import baseCrud from '../mixins/baseCrud'
import TheCrudPanelNewForm from './TheNewForm'
import http from '../helpers/http'
export default {
  name: 'TheDetailContentForm',
  components: { TheCrudPanelNewForm },
  mixins: [baseCrud],
  props: {
    value: {
      type: Object
    }
  },
  computed: {
    innerValue: {
      get () {
        return this.value
      },
      set (val) {
        return this.$emit('input', val)
      }
    }
  },
  data () {
    return {
      form: {}
    }
  },
  methods: {
    formHandle (val) {
      this.form = val
    },
    async submit () {
      try {
        let form = this.form
        form[this.primaryKey] = this.innerValue[this.primaryKey]
        const res = await http.update(this.resource, form)
        if (res) {
          this.$emit('submit', this.innerValue)
        }
      } catch (e) {}
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
