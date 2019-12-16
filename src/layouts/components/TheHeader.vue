<template>
  <v-app-bar id="core-app-bar"
             absolute
             app
             color="transparent"
             flat
             height="88">
    <v-btn icon @click.stop="onClick" class="md:tw-ml-2">
      <v-icon>mdi-view-list</v-icon>
    </v-btn>
    <v-toolbar-title class="tertiary--text font-weight-light align-self-center">
      {{ title || $route.meta.title || $t('app.header.title') }}
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <v-row align="center"
             class="mx-0">
        <v-text-field class="mr-4 purple-input"
                      color="purple"
                      label="Search..."
                      hide-details/>

        <v-btn icon
               to="/">
          <v-icon color="tertiary">mdi-view-dashboard</v-icon>
        </v-btn>
        <v-btn
          to="/me"
          icon
        >
          <v-icon color="tertiary">
            mdi-account
          </v-icon>
        </v-btn>
      </v-row>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheHeader',
  data: () => ({
    title: null,
    responsive: false
  }),
  created () {
    this.$bus.$on('setAppbarTitle', (title) => {
      this.title = title
    })
  },
  beforeDestroy () {
    this.$bus.$off('setAppbarTitle')
  },

  methods: {
    onClick () {
      this.$emit('drawerHandle')
    }
  }
}
</script>

<style>
  /* Fix coming in v2.0.8 */
  #core-app-bar {
    width: auto;
  }

  #core-app-bar a {
    text-decoration: none;
  }
</style>
