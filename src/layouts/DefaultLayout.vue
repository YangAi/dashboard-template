<template>
  <div>
    <the-header @drawerHandle="drawerOpen = !drawerOpen" />
    <v-content>
      <v-container fluid class="tw-pt-0">
        <v-divider />
      </v-container>
<!--      <v-container class="tw-pb-0">-->
<!--        <h1 class="headline">{{ $route.meta.title }}</h1>-->
<!--      </v-container>-->
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
