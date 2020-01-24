export default {
  methods: {
    getAvailableFields (type) {
      let output = []
      // return every fields if model doesn't exist
      if (!this.model[type]) return this.model.fields
      // show config will overwrite hide config
      if (!this._.isEmpty(this.model[type].show)) {
        this._.forEach(this.model[type].show, (o) => {
          const field = this._.find(this.model.fields, ['value', o])
          output.push(field)
        })
      } else if (!this._.isEmpty(this.model[type].hide)) {
        this._.forEach(this.model.fields, (o) => {
          if (!this.model[type].hide.includes(o.value)) {
            output.push(o)
          }
        })
      } else {
        output = this.model.fields
      }
      return output
    }
  }
}
