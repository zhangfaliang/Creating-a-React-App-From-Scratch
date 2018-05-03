var cooking = require('cooking')
const getBaseConfig = require('cooking/util/get-base-config')
const merge = require('cooking/util/merge')
const loadExtend = require('../util/load-extend')

exports.set = function (config) {
  config = config || {}
  this.config = merge(config, getBaseConfig(config))

  loadExtend(config.extends, {
    add: this.add,
    remove: this.remove,
    config: this.config,
    _userConfig: config
  })

  return this
}

exports.add = cooking.add
exports.remove = cooking.remove
exports.resolve = cooking.resolve
