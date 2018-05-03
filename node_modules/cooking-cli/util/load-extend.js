'use strict'

const logger = require('./logger')
const isObject = require('./is').Object
const isArray = require('./is').Array
const exec = require('./exec')
const pluginExists = require('./check').pluginExists

/* istanbul ignore next */
const importExtend = (extend, cooking, options) => {
  require(`cooking-${extend}`)(cooking, options)
  logger.success(`Loaded success: ${extend}`)
}

/* istanbul ignore next */
const installExtend = name => {
  logger.warn(`Auto install plugin: ${name}`)
  exec('cooking', ['import', name], {
    stdio: 'inherit'
  })
}

/* istanbul ignore next */
/**
 * 加载并装配插件
 * @param  {array} extends
 * @param  {object} config - webpack config
 */
module.exports = (_extends, cooking) => {
  const isObj = isObject(_extends)

  Object.keys(_extends || {}).reverse().forEach(key => {
    let extend = isObj ? key : _extends[key]
    let options = isObj ? _extends[key] : {}

    if (isArray(extend)) {
      options = extend[1]
      extend = extend[0]
    }

    const extendName = extend.split('@')[0]

    if (!pluginExists(`cooking-${extendName}`)) {
      installExtend(extend)
    }

    importExtend(extendName, cooking, options)
  })
  console.log()
}
