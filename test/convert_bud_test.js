/**
 * Test case for convertBud.
 * Runs with mocha.
 */

const convertBud = require('../lib/convert_bud.js')
const co = require('co')
const assert = require('assert')

describe('Convert bud', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Convert bud', () => co(function * () {
    let converted = [
      { force: false },
      { force: true }
    ]
    assert.ok(converted)
  }))
})
/* global describe, before, after, it */
