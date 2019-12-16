export default {
  props: {
    resource: {
      type: String
    }
  },
  computed: {
    model () {
      return this.$crud[this.resource]
    },
    primaryKey () {
      return this.model.primaryKey || 'id'
    }
  }
}
