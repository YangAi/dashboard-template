<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="innerValue"
        label="Date"
        v-bind="$attrs">
        <template v-slot:append>
          <v-icon v-on="on">
            mdi-calendar-outline
          </v-icon>
        </template>
      </v-text-field>
    </template>
    <v-date-picker v-model="innerValue" @input="menu = false" />
  </v-menu>
</template>

<script>
// import dayjs from 'dayjs'
import BaseMixins from './BaseMixins'

export default {
  name: 'DateField',
  mixins: [BaseMixins],
  data () {
    return {
      menu: false
    }
  }
}
</script>

<style scoped>

</style>
