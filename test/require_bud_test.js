/**
 * Test case for requireBud.
 * Runs with mocha.
 */
'use strict'

const requireBud = require('../lib/require_bud.js')
const co = require('co')
const assert = require('assert')

describe('', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Require bud', () => co(function * () {
    let bud = yield requireBud([
      { foo: 'bar' }
    ])
    assert.deepEqual(bud, [
      { foo: 'bar' }
    ])
  }))
})

/* global describe, before, after, it */
