/**
 * Test case for budLoader.
 * Runs with nodeunit.
 */
'use strict'

const BudLoader = require('../lib/bud_loader.js')

exports.setUp = function (done) {
  done()
}

exports.tearDown = function (done) {
  done()
}

exports[ 'Bud loader' ] = function (test) {
  var src = __dirname + '/../doc/mockups/mock-bud.bud';
  new BudLoader().load(src, function (err, bud) {
    test.ifError(err)
    test.ok(bud)
    test.done()
  })
}

