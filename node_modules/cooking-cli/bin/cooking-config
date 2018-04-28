#!/usr/bin/env node
'use strict'

const logger = require('../util/logger')
const program = require('commander').parse(process.argv)
const config = require('../util/config')
const json = require('format-json')

const option = program.args[0]
const value = program.args[1] || ''

if (!option) {
  logger.log('--------------')
  logger.log('配置信息')
  logger.log('--------------')

  console.log(json.plain(config.get()))
  process.exit()
}

if (!config.set(option, value)) {
  logger.fatal('不存在配置项')
}
config.get(option)
logger.success(option + ' = ' + config.get(option))
