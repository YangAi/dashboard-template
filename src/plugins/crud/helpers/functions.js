// import Vue from 'vue'
import { isEmpty, forEach } from 'lodash'

export default {
  cleanFormBeforeSubmit (model, form) {
    if (isEmpty(model.guarded)) return form

    let output = {}

    forEach(form, (item, key) => {
      if (!model.guarded.includes(key) && !model.relatedModel.includes(key)) {
        if (isEmpty(model.form.show) && isEmpty(model.form.show)) {
          output[key] = item
        }
        if (!isEmpty(model.form.show)) {
          if (model.form.show.includes(key)) output[key] = item
        } else {
          if (!isEmpty(model.form.hide) && !model.form.hide.includes(key)) {
            output[key] = item
          }
        }
      }
    })
    return output
  },
  toSingular (text) {
    const pluralize = require('pluralize')
    return pluralize.singular(text)
  }
}
