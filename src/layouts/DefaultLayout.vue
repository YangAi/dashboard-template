<template>
  <div>
    <the-header @drawerHandle="drawerOpen = !drawerOpen" />
    <v-content>
      <router-view />
    </v-content>
    <the-drawer v-model="drawerOpen" />
  </div>
</template>

<script>
import TheDrawer from './components/TheDrawer'
import TheHeader from './components/TheHeader'
export default {
  name: 'DefaultLayout',
  components: { TheHeader, TheDrawer },
  data () {
    return {
      drawerOpen: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
