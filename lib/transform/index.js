'use strict'

const S = require('string')

module.exports = function transformHook (options) {
  return (hook) => {
    for (let attribute in options) {
      let callback = options[attribute]
      let value = S(hook.data[attribute])
      let result = callback(value)
      
      hook.data[attribute] = result.toString()
    }
  }
}
