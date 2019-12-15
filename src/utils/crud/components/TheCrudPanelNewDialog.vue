<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on }">
      <slot name="activator" :on="on">
        <v-btn icon v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </slot>
    </template>
    <v-card>
      <v-card-title class="headline">{{ $t('forms.new.title')}}</v-card-title>
      <v-card-text>
        <the-crud-panel-new-form v-model="form" v-bind="$attrs" />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="gray darken-1" text @click="dialog = false">{{ $t('actions.cancel')}}</v-btn>
        <v-btn color="green darken-1" text @click="submit">{{ $t('actions.submit')}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import TheCrudPanelNewForm from './TheCrudPanelNewForm'
export default {
  name: 'TheCrudPanelNewDialog',
  components: { TheCrudPanelNewForm },
  data () {
    return {
      dialog: false,
      form: {}
    }
  },
  methods: {
    submit () {
      console.log(this.form)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
