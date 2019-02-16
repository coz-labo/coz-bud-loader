/**
 * Evaluate bud content.
 * @memberof module:coz-bud-loader/lib
 * @function evaluateBud
 * @param {object|function} bud - Module to evaluate.
 * @returns {Promise}
 */

'use strict'

/** @lends evaluateBud */
async function evaluateBud(buds) {
  buds = [].concat(buds || [])
  let results = []
  for (let bud of buds) {
    switch (typeof bud) {
      case 'function':
        let load = bud
        bud = await new Promise((resolve, reject) => {
          let promise = load((err, bud) => {
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
  return results.reduce((a, b) => [].concat(a, b), [])
}

module.exports = evaluateBud
