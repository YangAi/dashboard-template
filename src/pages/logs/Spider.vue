<template>
  <main/>
</template>

<script>
// import loadApiData from '../../mixins/loadApiData'
export default {
  name: 'Spider',
  // mixins: [loadApiData],
  created () {
    this.loadData()
  },
  methods: {
    async loadData () {
      const res = await this.$api.backend.get('spider-logs')
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
