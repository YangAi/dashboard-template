<template>
  <v-container>
    <v-card>
      <v-container>
        <the-crud resource="paymentLogs">
          <template v-slot:field.action.append="{ item }">
          </template>
        </the-crud>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import TheCrud from '../../utils/crud/components/TheCrud'
export default {
  name: 'Index',
  components: { TheCrud }
}
</script>

<style lang="scss" scoped>

</style>
