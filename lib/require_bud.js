/**
 * Require a module.
 * @memberof module:coz-bud-loader/lib
 * @function requireBud
 * @param {Bud} bud - Bud to require.
 * @returns {Promise}
 */

'use strict'

const co = require('co')
const fs = require('fs')
const path = require('path')

/** @lends requireBud */
function requireBud (buds) {
  buds = [].concat(buds || [])

  return co(function * () {
    let results = []
    for (let bud of buds) {
      let src = bud.src || bud
      if (typeof src === 'object') {
        // Seems already required.
        results.push(bud)
        continue
      }
      let filename = path.resolve(src)
      let exists = yield new Promise((resolve) =>
        fs.exists(filename, (exists) => resolve(exists))
      )
      let name = exists ? filename : src
      try {
        bud = require(name)
      } catch (catched) {
        throw new Error(`Failed to load ${name}: ${catched}`)
      }
      results.push(
        [].concat(bud).map((bud) => {
          bud.src = path.resolve(src)
          return bud
        })
      )
    }
    return results.reduce((a, b) => [].concat(a, b), [])
  })
}

module.exports = requireBud
