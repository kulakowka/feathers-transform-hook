'use strict'

const S = require('string')

module.exports = function transformHook (options) {
  return (hook) => {
    let SData = {}
    for(let k in hook.data) {
      SData[k] = S(hook.data[k])
    }

    for (let attribute in options) {
      let callback = options[attribute]
      let result = callback(SData)
      hook.data[attribute] = result.toString()
    }
  }
}
