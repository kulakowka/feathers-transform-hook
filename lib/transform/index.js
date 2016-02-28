'use strict'

var S = require('string')
var k
var callback
var result
var SData

module.exports = function transformHook (options) {
  return (hook) => {
    SData = {}

    for (k in hook.data) {
      SData[k] = S(hook.data[k])
    }

    for (let attribute in options) {
      callback = options[attribute]
      result = callback(SData)
      hook.data[attribute] = result.toString()
    }
  }
}
