<template>
  <div class="actions">
    <slot name="field.action.prepend" />
    <v-btn icon @click="$emit('update', item)">
      <v-icon small color="teal">mdi-pencil</v-icon>
    </v-btn>
    <v-btn icon @click="$emit('view', item)">
      <v-icon small color="blue">mdi-file-document-box-outline</v-icon>
    </v-btn>
    <v-btn icon @click="$emit('delete', item)">
      <v-icon small color="gray">mdi-trash-can</v-icon>
    </v-btn>
<!--    <v-btn icon v-else>-->
<!--      <v-icon samll>mdi-backup-restore</v-icon>-->
<!--    </v-btn>-->
    <slot name="field.action.append" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TheCrudTableFieldAction',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState('crud', [
      'resource',
      'primaryKey'
    ])
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
