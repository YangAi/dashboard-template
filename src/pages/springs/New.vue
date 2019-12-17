<template>
    <v-container fluid>
        <v-card style="max-width: 768px">
            <v-card-title>{{ $t('forms.new.title') }} Springs</v-card-title>
            <v-card-text>
                <the-crud-panel-new-form resource="spring" v-model="form" />
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import TheCrudPanelNewForm from '../../plugins/crud/components/TheCrudPanelNewForm'
export default {
  name: 'New',
  components: { TheCrudPanelNewForm },
  data () {
    return {
      form: {}
    }
  }
}
</script>

<style scoped>

</style>
