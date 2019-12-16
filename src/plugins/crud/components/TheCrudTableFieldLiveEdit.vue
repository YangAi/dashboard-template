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
      <the-crud-table-field-normal v-model="innerValue[field.value]" :field="field" />
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
import CrudInputField from './CrudInputField'
import baseMixins from './inputFields/baseMixins'
import baseCrud from '../mixins/baseCrud'
import TheCrudTableFieldNormal from './TheCrudTableFieldNormal'
import helpers from '../helpers/functions'
export default {
  name: 'TheCrudTableFieldLiveEdit',
  mixins: [baseMixins, baseCrud],
  components: { TheCrudTableFieldNormal, CrudInputField },
  data () {
    return {
      backUp: ''
    }
  },
  methods: {
    async save () {
      try {
        const res = this.$api[this.resource].update(this.innerValue[this.model.primaryKey], helpers.cleanFormBeforeSubmit(this.model, this.innerValue))
        this.innerValue = res.data || res
        this.$toast.success(this.$t('messages.updated.success'))
      } catch (e) {
        this.$toast.error(this.$t('messages.updated.error'))
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
