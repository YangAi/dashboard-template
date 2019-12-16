<template>
  <v-container>
    <v-card>
      <v-container>
        <the-crud resource="event">
          <template v-slot:field.action.append="{ item }">
          </template>
          <template v-slot:detail.actions="{ detail }">
            <v-btn color="primary">操作slot</v-btn>
          </template>
        </the-crud>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import TheCrud from '../../plugins/crud/components/TheCrud'
export default {
  name: 'Index',
  components: { TheCrud }
}
</script>

<style lang="scss" scoped>

</style>
