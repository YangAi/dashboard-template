<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="open"
    src=""
    app
    color="grey darken-2"
    dark
    floating
    mobile-break-point="991"
    persistent
    width="260"
  >
    <template v-slot:img="attrs">
      <v-img src="https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg"
             gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)"
             height="100%"
      />
    </template>

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

    <base-nav-list nav dense :list="list" />

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
          children: [
            {
              to: 'Springs.Index',
              label: 'All Springs'
            },
            {
              to: 'Springs.New',
              icon: 'mdi-timeline-text-outline',
              label: 'New Springs'
            }
          ]
        },
        {
          icon: 'mdi-tag-outline',
          label: 'Records',
          children: [
            {
              to: 'Records.Index',
              label: 'All Records'
            },
            {
              to: 'Records.New',
              label: 'New Record'
            }
          ]
        },
        {
          icon: 'mdi-tag-outline',
          label: 'Messages',
          children: [
            {
              to: 'Messages.Index',
              label: 'All Messages'
            },
            {
              to: 'Messages.New',
              label: 'New Messages'
            }
          ]
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
