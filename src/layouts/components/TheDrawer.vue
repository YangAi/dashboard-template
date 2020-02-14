<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="open"
    class="tw-border-right tw-border-solid tw-border-gray-200 tw-p-4"
    src=""
    app
    floating
    mobile-break-point="991"
    persistent
    width="320"
  >
<!--    <template v-slot:img="attrs">-->
<!--      <v-img src="https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg"-->
<!--             gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)"-->
<!--             height="100%"-->
<!--      />-->
<!--    </template>-->

    <v-list-item two-line class="tw-mt-8">
<!--      <v-list-item-avatar color="white" size="48">-->
<!--        <v-img-->
<!--          src=""-->
<!--          height="40"-->
<!--          contain-->
<!--        />-->
<!--      </v-list-item-avatar>-->

      <v-list-item-title class="headline tracking-wide font-normal">
        {{ $config.appName }}
      </v-list-item-title>
    </v-list-item>

    <v-divider class="mx-3 mb-3" />

    <base-nav-list nav dense :list="list" exact active-class="green white--text" />

    <template v-slot:append>
      <v-list nav>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-package-up</v-icon>
          </v-list-item-action>

          <v-list-item-title class="font-weight-light">
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
import BaseNavList from '../../components/base/BaseNavList'
export default {
  name: 'TheDrawer',
  components: { BaseNavList },
  props: {
    value: {
      type: Boolean
    }
  },
  computed: {
    open: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  data () {
    return {
      image: 'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg',
      list: [
        {
          to: 'Home.Index',
          icon: 'mdi-view-dashboard',
          label: 'Homepage'
        },
        'Springs',
        {
          icon: 'mdi-timeline-text-outline',
          label: 'Spring',
          to: 'Springs.Index'
        },
        {
          icon: 'mdi-tag-outline',
          label: 'Records',
          to: 'Records.Index'
        },
        {
          icon: 'mdi-tag-outline',
          label: 'Messages',
          to: 'Messages.Index'
        },
        'Permissions',
        {
          to: 'FinalSale.New',
          icon: 'mdi-dots-horizontal',
          label: 'Users'
        },
        {
          to: 'FinalSale.New',
          icon: 'mdi-dots-horizontal',
          label: 'Roles'
        },
        'Logs',
        {
          to: 'Audits.Index',
          icon: 'mdi-dots-horizontal',
          label: 'Audits'
        }
      ]
    }
  }
}
</script>
