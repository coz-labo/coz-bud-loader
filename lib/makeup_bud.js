/**
 * Makeup bud content.
 * @memberof module:coz-bud-loader/lib
 * @function makeupBud
 * @param {Bud} bud - Configuration to evaluate.
 * @param {function} callback - Callback when done.
 */

'use strict'

const async = require('async')
const path = require('path')
const unorm = require('unorm')
const expandglob = require('expandglob')

/** @lends makeupBud */
function makeupBud (bud, callback) {
  const s = this
  async.concatSeries([].concat(bud), (bud, callback) => {
    let src = bud.src && path.resolve(bud.src)
    if (src) {
      let dirname = path.dirname(src) || bud.pwd || process.cwd()
      let basename = path.basename(src, path.extname(src))
      bud.path = path.resolve(dirname, bud.path || basename.replace(/^[\._]/, ''))
      bud.cwd = dirname
      bud.tmpl = bud.tmpl ||
        expandglob.sync(
          [
            path.resolve(dirname, basename + '.*'),
            path.resolve(dirname, unorm.nfc(basename) + '.*'),
            path.resolve(dirname, unorm.nfd(basename) + '.*')
          ])
          .filter((tmpl) => tmpl !== src)
          .shift() || 'json'
    }
    callback(null, bud)
  }, callback)
}

module.exports = makeupBud
