/**
 * Makeup bud content.
 * @memberof module:coz-bud-loader/lib
 * @function makeupBud
 * @param {Bud} bud - Configuration to evaluate.
 * @returns {Promise}
 */

'use strict'

const path = require('path')
const unorm = require('unorm')
const aglob = require('aglob')

/** @lends makeupBud */
async function makeupBud(buds) {
  buds = [].concat(buds || [])
  let results = []
  for (let bud of buds) {
    let src = bud.src && path.resolve(bud.src)
    if (!src) {
      results.push(bud)
      continue
    }
    let dirname = path.dirname(src) || bud.pwd || process.cwd()
    let basename = path.basename(src, path.extname(src))
    bud.path = path.resolve(dirname, bud.path || basename.replace(/^[\._]/, ''))
    bud.cwd = dirname
    bud.tmpl = bud.tmpl ||
      aglob.sync(
        [
          path.resolve(dirname, basename + '.*'),
          path.resolve(dirname, unorm.nfc(basename) + '.*'),
          path.resolve(dirname, unorm.nfd(basename) + '.*')
        ])
        .filter((tmpl) => path.resolve(tmpl) !== path.resolve(src))
        .filter((tmpl) => path.extname(tmpl) !== path.extname(src))
        .shift() || 'json'
    results.push(bud)
  }
  return results.reduce((a, b) => [].concat(a, b), [])
}

module.exports = makeupBud
