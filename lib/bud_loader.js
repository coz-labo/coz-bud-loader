/**
 * Bud file loader.
 * @memberof module:bud-loader/lib
 * @inner
 * @constructor BudLoader
 * @param {object} config
 */

'use strict'

const cozBud = require('coz-bud')
const convertBud = require('./convert_bud')
const evaluateBud = require('./evaluate_bud')
const requireBud = require('./require_bud')
const makeupBud = require('./makeup_bud')
const co = require('co')

/** @lends BudLoader */
function BudLoader (config) {
  const s = this
  Object.assign(s, {})
}

BudLoader.prototype = {
  /**
   * Load bud.
   * @param {Bud|string} bud - Bud or source filename of it.
   * @returns {Promise}
   */
  load (bud) {
    const s = this
    bud = [].concat(bud).map(cozBud.create)
    return co(function * () {
      bud = yield requireBud(bud)
      bud = yield evaluateBud(bud)
      bud = yield makeupBud(bud)
      bud = yield convertBud(bud)
      return bud
    })
  }
}

module.exports = BudLoader

/**
 * Callback for bud load
 * @memberof module:coz-bud-loader/lib
 * @inner
 * @callback loadCallback
 * @param {?Error} err - Load error.
 * @param {Bud} bud - Loaded bud.
 */
