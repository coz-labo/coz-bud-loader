/**
 * Convert bud content.
 * @memberof module:coz-bud-loader/lib
 * @function convertBud
 * @param {Bud} bud - Configuration to convert.
 * @returns {Promise}
 */

'use strict'

const cozBud = require('coz-bud')

/** @lends convertBud */
async function convertBud(buds) {
  buds = [].concat(buds)
  let results = []
  for (let bud of buds) {
    const converted = cozBud.create(bud)
    results.push(converted)
  }
  return results.reduce((a, b) => [].concat(a, b), [])
}

module.exports = convertBud
