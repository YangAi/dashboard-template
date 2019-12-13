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
        旅行筛
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
          to: '/',
          icon: 'mdi-view-dashboard',
          label: '主页'
        },
        '内容',
        {
          icon: 'mdi-timeline-text-outline',
          label: '时间轴',
          children: [
            {
              to: 'Timelines.GoRadar',
              label: '旅行雷达'
            },
            {
              to: 'Timelines.List',
              label: '时间轴列表'
            },
            {
              to: 'Timelines.New',
              icon: 'mdi-timeline-text-outline',
              label: '新时间轴'
            }
          ]
        },
        {
          icon: 'mdi-tag-outline',
          label: '尾单监控',
          children: [
            {
              to: 'FinalSale.Pending',
              label: '旅行雷达'
            },
            {
              to: 'FinalSale.List',
              label: '时间轴列表'
            },
            {
              to: 'FinalSale.New',
              label: '手动添加'
            }
          ]
        },
        '数据',
        {
          icon: 'mdi-dots-horizontal',
          label: '监控日志',
          children: [
            {
              to: 'Logs.Spider',
              label: '爬虫'
            },
            {
              to: 'Logs.Notice',
              label: '通知'
            },
            {
              to: 'Logs.Credit',
              label: '积分'
            },
            {
              to: 'Logs.Wallet',
              label: '钱包'
            },
            {
              to: 'Logs.WePay',
              label: '微信支付'
            }
          ]
        }

      ]
    }
  }
}
</script>
