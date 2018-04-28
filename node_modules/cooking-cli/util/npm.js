'use strict'

const shelljs = require('shelljs')
const exec = require('./exec')
const PLUGIN_PATH = require('./path').PLUGIN_PATH
const checkRegistry = require('./check').registry
const config = require('./config')

const npm = (options, registry) => {
  registry = registry || config.get('registry')

  if (registry) {
    options.push(checkRegistry(registry))
  }

  const pwd = shelljs.pwd().stdout

  shelljs.cd(PLUGIN_PATH)
  options = options.concat(['--save', '--silent', '--save-prefix=>='])
  exec('npm', options, {stdio: 'inherit'})
  shelljs.cd(pwd)
}

exports.install = (name, registry) => npm(['install'].concat(name), registry)
exports.update = (name, registry) => npm(['update'].concat(name), registry)
exports.uninstall = name => npm(['uninstall'].concat(name))
exports.list = () => npm(['list', '--depth=0'])
