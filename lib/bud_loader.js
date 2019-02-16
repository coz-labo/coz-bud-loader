/**
 * Bud file loader.
 * @memberof module:bud-loader/lib
 * @inner
 * @class BudLoader
 * @param {object} config
 */

'use strict'

const cozBud = require('coz-bud')
const convertBud = require('./convert_bud')
const evaluateBud = require('./evaluate_bud')
const requireBud = require('./require_bud')
const makeupBud = require('./makeup_bud')

/** @lends BudLoader */
class BudLoader {
  /**
   * Load bud.
   * @param {Bud|string} bud - Bud or source filename of it.
   * @returns {Promise}
   */
  async load(bud) {
    bud = [].concat(bud).map(cozBud.create)
    bud = await requireBud(bud)
    bud = await evaluateBud(bud)
    bud = await makeupBud(bud)
    bud = await convertBud(bud)
    return bud
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
