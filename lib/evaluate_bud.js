/**
 * Evaluate bud content.
 * @memberof module:coz-bud-loader/lib
 * @function evaluateBud
 * @param {object|function} bud - Module to evaluate.
 * @returns {Promise}
 */

'use strict'

const co = require('co')

/** @lends evaluateBud */
function evaluateBud (buds) {
  buds = [].concat(buds || [])
  return co(function * () {
    let results = []
    for (let bud of buds) {
      switch (typeof bud) {
        case 'function':
          let load = bud
          bud = yield new Promise((resolve, reject) => {
            let promise = load((err, bud) => {
              console.warn('[coz-bud-loader] Callback is now deprecated. Use promise interface insteead.')
              err ? reject(err) : resolve(bud)
            })
            if (promise) {
              promise.then(resolve, reject)
            }
          })
          bud = [].concat(bud || []).map((bud) =>
            Object.assign({}, load, bud)
          )
          results.push(bud)
          break
        default:
          results.push(bud)
          break
      }
    }
    return results
  })
}

module.exports = evaluateBud
