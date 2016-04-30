/**
 * Convert bud content.
 * @memberof module:coz-bud-loader/lib
 * @function convertBud
 * @param {Bud} bud - Configuration to convert.
 * @returns {Promise}
 */

'use strict'

const co = require('co')
const cozBud = require('coz-bud')

/** @lends convertBud */
function convertBud (buds) {
  buds = [].concat(buds)
  return co(function * () {
    let results = []
    for (let bud of buds) {
      let converted = cozBud.create(bud)
      results.push(converted)
    }
    return results
  })
}

module.exports = convertBud
