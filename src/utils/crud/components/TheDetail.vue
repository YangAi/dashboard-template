<template>
  <v-card>
    <v-card-title>
      {{ $crud[resource].title }}详情 - {{ detail[$crud[resource].primaryKey || 'id'] }}
      <v-spacer />
      <template v-if="idList">
        <v-btn icon>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </template>
      <v-btn icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-btn color="primary">操作</v-btn>
    </v-card-text>
    <v-tabs v-model="activeTab">
      <v-tab href="#main">内容</v-tab>
      <v-tab v-for="tab in tabs" :key="tab.id" :href="`#${tab.id}`">{{ tab.title }}</v-tab>
    </v-tabs>
    <v-tabs-items v-model="activeTab">
      <v-tab-item value="main">
        <v-card-text>{{ detail }}</v-card-text>
      </v-tab-item>
      <v-tab-item v-for="tab in tabs" :key="tab.id" :value="tab.id">{{ detail[tab.id] }}</v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  name: 'TheDetail',
  props: {
    resource: {
      type: String,
      required: true
    },
    detail: {
      type: Object
    },
    idList: {
      type: [Array, Boolean],
      default: false
    }
  },
  computed: {
    tabs () {
      if (!this.$crud[this.resource].relatedModel) return []
      if (this._.isString(this.$crud[this.resource].relatedModel)) return [this.$crud[this.$crud[this.resource].relatedModel]]
      this._.forEach(this.$crud[this.resource].relatedModel, (model) => {

      })
      return this._.map(this.$crud[this.resource].relatedModel, (o) => {
        return this.$crud[o]
      })
    }
  },
  data () {
    return {
      activeTab: 'main'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
