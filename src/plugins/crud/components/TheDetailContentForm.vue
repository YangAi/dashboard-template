<template>
  <v-card>
    <v-card-text>
      <the-crud-panel-new-form v-model="form" :resource="resource" />
    </v-card-text>
  </v-card>
</template>

<script>
import baseCrud from '../mixins/baseCrud'
import availableFields from '../mixins/availableFields'
import TheCrudPanelNewForm from './TheCrudPanelNewForm'

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
  }
}
</script>

<style lang="scss" scoped>

</style>
