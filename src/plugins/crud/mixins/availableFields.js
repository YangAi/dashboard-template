export default {
  computed: {
    fields () {
      let output = []
      // return every fields if model doesn't exist
      if (!this.model[this.componentType]) return this.model.fields
      // show config will overwrite hide config
      if (!this._.isEmpty(this.model[this.componentType].show)) {
        this._.forEach(this.model[this.componentType].show, (o) => {
          const field = this._.find(this.model.fields, ['value', o])
          output.push(field)
        })
      } else if (!this._.isEmpty(this.model[this.componentType].hide)) {
        this._.forEach(this.model.fields, (o) => {
          if (!this.model[this.componentType].hide.includes(o.value)) {
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
