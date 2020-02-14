<template>
    <v-container>
        <the-crud resource="record">
            <template v-slot:field.action.append="{ item }">
            </template>
            <template v-slot:detail.actions="{ detail }">
                <v-btn text class="tw-mr-4" color="primary" @click="reviewHandle('publish', detail)">Publish</v-btn>
                <v-btn text class="tw-mr-4" @click="reviewHandle('reject', detail)">Reject</v-btn>
            </template>
        </the-crud>
        <base-confirm-dialog v-model="dialog[action]"
                             :title="_.capitalize(action) + ' Record'"
                             :description="'Are you sure you want to ' + action + ' this record?'"
                             @confirm="review()" />
    </v-container>
</template>

<script>
import TheCrud from '../../plugins/crud/components/TheCrud'
import BaseConfirmDialog from '../../components/base/BaseConfirmDialog'
export default {
  name: 'Index',
  components: { BaseConfirmDialog, TheCrud },
  data () {
    return {
      dialog: {
        publish: false,
        reject: false
      },
      detail: {},
      action: 'publish'
    }
  },
  methods: {
    reviewHandle (action, detail) {
      this.dialog[action] = !this.dialog[action]
      this.action = action
      this.detail = detail
    },
    async review () {
      try {
        console.log(this.$api)
        const res = await this.$api.record.put(this.detail.id + '/review', {
          action: this.action + 'ed'
        })

        if (res.code === 0) {
          this.detail.status = this.action + 'ed'
          this.$toast.success(this._.capitalize(this.action) + ' success')
        }
      } catch (e) {}
    }
  }
}
</script>

<style scoped>

</style>
