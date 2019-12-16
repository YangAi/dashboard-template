<template>
    <v-container>
        <v-card>
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
