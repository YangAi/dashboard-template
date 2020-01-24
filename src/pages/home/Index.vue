<template>
  <v-container>
    <v-card>
      <v-container>
        <test-component :field="{type: 'text', text: 'TTEST', hint: 'hint'}" v-model="val" />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import testComponent from '@plugins/crud/components/CrudInputField.js'
export default {
  name: 'Index',
  components: [testComponent],
  data () {
    return {
      val: 'value'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
