<template>
  <div class="the-detail">
    <v-card-title>
<!--      TODO i18n-->
      {{ $crud[resource].title }}详情 - {{ detail[$crud[resource].primaryKey] }}
      <v-spacer />
      <template v-if="idList">
        <v-btn icon :loading="loading" @click="shiftDetail('prev')">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn icon :loading="loading" @click="shiftDetail('next')">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </template>
      <v-btn icon @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <slot name="detail.actions" :detail="detail" />
    </v-card-text>
    <v-tabs v-model="activeTab">
      <v-tab href="#main">内容</v-tab>
      <v-tab v-for="tab in tabs" :key="tab.key" :href="`#${tab.key}`">相关{{ tab.model.title }}</v-tab>
    </v-tabs>
    <v-tabs-items v-model="activeTab">
      <v-tab-item value="main">
        <v-container>
          <v-card class="tw-my-4">
            <v-card-text>
              <v-switch v-model="canHotEdit" label="实时数据编辑" />
            </v-card-text>
          </v-card>
          <component :is="canHotEdit ? 'the-detail-content-form' : 'the-detail-content-read-only'" :resource="resource" v-model="detail" />
        </v-container>
      </v-tab-item>
      <v-tab-item v-for="tab in tabs" :key="tab.key" :value="tab.key">
        <component :is="setComponent(tab.key)" :resource="tab.key" v-model="detail[tab.key]" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import TheDetailContentReadOnly from './TheDetailContentReadOnly'
import TheDetailContentForm from './TheDetailContentForm'
import TheDetailContentTable from './TheDetailContentTable'
import baseCrud from '../mixins/baseCrud'
export default {
  name: 'TheDetail',
  mixins: [baseCrud],
  components: { TheDetailContentTable, TheDetailContentForm, TheDetailContentReadOnly },
  props: {
    resource: {
      type: String,
      required: true
    },
    id: {
      type: [String, Number]
    },
    idList: {
      type: [Array, Boolean],
      default: false
    }
  },
  computed: {
    tabs () {
      if (!this.$crud[this.resource].relatedModel) return []

      const models = this._.isString(this.$crud[this.resource].relatedModel)
        ? [this.$crud[this.resource].relatedModel]
        : this.$crud[this.resource].relatedModel

      const pluralize = require('pluralize')
      let tabs = []

      this._.forEach(models, (o) => {
        const model = pluralize.singular(o)
        console.log(model)
        tabs.push({
          key: o,
          model: this.$crud[model]
        })
      })

      return tabs
    }
  },
  data () {
    return {
      componentType: 'detail',
      activeTab: 'main',
      activeIndex: null,
      loading: false,
      detail: {},
      canHotEdit: false
    }
  },
  watch: {
    id () {
      this.loadItem(this.id)
    }
  },
  methods: {
    async loadItem (id) {
      if (!id) return
      this.loading = true
      try {
        const res = await this.$api[this.resource].find(id, {
          include: this.$crud[this.resource].relatedModel
        })
        if (res) {
          this.detail = res.data || res
          if (!this._.isEmpty(this.idList)) this.activeIndex = this.idList.indexOf(this.id)
        }
      } catch (e) {
        console.log(e)
      }
      this.loading = false
    },
    shiftDetail (action) {
      if (action === 'prev') {
        if (this.activeIndex > 0) {
          this.activeIndex--
          this.$emit('shift', this.idList[this.activeIndex])
        } else {
          // TODO 加上i8n
          this.$noty.warning('已经第一条')
        }
      }
      if (action === 'next') {
        if (this.activeIndex < this.idList.length) {
          this.activeIndex++
          this.$emit('shift', this.idList[this.activeIndex])
        } else {
          // TODO 加上i8n
          this.$noty.warning('已经最后一条')
        }
      }
    },
    setComponent (key) {
      if (this._.every(this.detail[key], this._.isObject)) {
        return 'the-detail-content-table'
      }
      if (this.model.detail.editableModel.includes(key)) {
        return 'the-detail-content-form'
      } else {
        return 'the-detail-content-read-only'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
