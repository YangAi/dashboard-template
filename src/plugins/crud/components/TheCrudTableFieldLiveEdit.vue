<template>
  <v-edit-dialog
    large
    :return-value.sync="innerValue[field.value]"
    :cancel-text="$t('actions.cancel')"
    :save-text="$t('actions.save')"
    @save="save"
    @cancel="cancel"
    @open="open"
    @close="close">
    <slot>
      {{ innerValue[field.value] }}
    </slot>
    <template v-slot:input>
      <crud-input-field :key="field.value"
                        :field="field"
                        v-model="innerValue[field.value]"
                        single-line
                        counter/>
    </template>
  </v-edit-dialog>
</template>

<script>
import { mapState } from 'vuex'
import CrudInputField from './CrudInputField'
import baseMixins from './inputFields/baseMixins'
export default {
  name: 'TheCrudTableFieldLiveEdit',
  mixins: [baseMixins],
  components: { CrudInputField },
  computed: {
    ...mapState('crud', [
      'resource',
      'primaryKey'
    ])
  },
  data () {
    return {
      backUp: ''
    }
  },
  methods: {
    async save () {
      try {
        const res = this.$api[this.resource].update(this.innerValue[this.primaryKey], this.innerValue)
        this.innerValue = res.data || res
        this.$toast.success(this.$t('messages.updated.success'))
      } catch (e) {
        console.log(e)
      }
    },
    cancel () {
      this.innerValue[this.field.value] = this.backUp
    },
    open () {
      this.backUp = this.innerValue[this.field.value]
    },
    close () {
      // this.$toast.success('close')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
