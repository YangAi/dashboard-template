<template>
  <v-dialog v-model="dialog" persistent max-width="780">
    <template v-slot:activator="{ on }">
      <slot name="activator" :on="on">
        <v-btn fab dark small color="blue" v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </slot>
    </template>
    <v-card>
      <v-card-title class="headline tw-py-8">{{ $t('actions.add') }} {{ model.title }}</v-card-title>
      <v-container class="tw-mb-4 tw-pt-0">
        <v-divider />
      </v-container>
      <v-card-text>
        <the-crud-panel-new-form v-model="form" :resource="resource" v-bind="$attrs" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="gray darken-1" text @click="dialog = false">{{ $t('actions.cancel')}}</v-btn>
        <v-btn color="green darken-1" text @click="submit">{{ $t('actions.submit')}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import TheCrudPanelNewForm from './TheNewForm'
import baseCrud from '../mixins/baseCrud'
export default {
  name: 'TheCrudPanelNewDialog',
  mixins: [baseCrud],
  components: { TheCrudPanelNewForm },
  data () {
    return {
      dialog: false,
      form: {}
    }
  },
  methods: {
    async submit () {
      try {
        const res = await this.$api[this.model.id].store(this.form)
        if (res) {
          this.$toast.success(this.$t('messages.stored.success'))
          this.dialog = false
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
