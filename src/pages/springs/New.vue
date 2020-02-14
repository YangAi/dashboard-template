<template>
    <v-container>
        <v-card style="max-width: 768px">
            <v-card-title>
                New Spring
            </v-card-title>
            <v-card-text>
                <the-crud-panel-new-form :resource="resource" v-model="form" />
            </v-card-text>
            <v-card-actions class="tw-p-4">
                <v-btn dark large @click="submit">{{ $t('actions.submit') }}</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import TheCrudPanelNewForm from '../../plugins/crud/components/TheNewForm'
import http from '../../plugins/crud/helpers/http'
export default {
  name: 'New',
  components: { TheCrudPanelNewForm },
  data () {
    return {
      resource: 'spring',
      form: {}
    }
  },
  methods: {
    async submit () {
      const res = await http.store(this.resource, this.form)
      if (res) {
        this.$toast.success('success')
      }
    }
  }
}
</script>

<style scoped>

</style>
