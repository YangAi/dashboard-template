<template>
  <v-card>
    <v-card-text>
      <the-crud-panel-new-form v-model="form" :resource="resource" />
    </v-card-text>
    <v-card-actions>
      <v-btn @click="submit">{{ $t('actions.submit') }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import baseCrud from '../mixins/baseCrud'
import availableFields from '../mixins/availableFields'
import TheCrudPanelNewForm from './TheCrudPanelNewForm'
import http from '../helpers/http'
export default {
  name: 'TheDetailContentForm',
  components: { TheCrudPanelNewForm },
  mixins: [baseCrud, availableFields],
  props: {
    value: {
      type: Object
    }
  },
  data () {
    return {
      componentType: 'form'
    }
  },
  computed: {
    form: {
      get () {
        return this.value
      },
      set (val) {
        return this.$emit('input', val)
      }
    }
  },
  methods: {
    async submit () {
      await http.update(this.resource, this.form)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
