export default {
  created () {
    this.loadData()
  },
  data () {
    return {
      data: {},
      meta: {
        current_page: 0,
        per_page: 0,
        total: 0
      },
      query: {
        per_page: null,
        page: 1,
        status: '',
        search: ''
      }
    }
  },
  watch: {
    query: {
      deep: true,
      handler () {
        this.loadData()
      }
    }
  }
}
