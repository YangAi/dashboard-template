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
import helpers from '../helpers/functions'
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
      try {
        const res = await this.$api[this.resource].update(this.form[this.model.primaryKey], helpers.cleanFormBeforeSubmit(this.model, this.form))
        if (res) {
          this.$toast.success(this.$t('messages.updated.success'))
        }
      } catch (e) {
        this.$toast.error(this.$t('messages.updated.error'))
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
