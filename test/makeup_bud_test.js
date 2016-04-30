/**
 * Test case for makeupBud.
 * Runs with mocha.
 */
'use strict'

const makeupBud = require('../lib/makeup_bud.js')
const co = require('co')
const assert = require('assert')

describe('', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Makeup bud', () => co(function * () {
    let buds = yield makeupBud([
      { data: { 'foo': 'bar' } }
    ])
    assert.deepEqual(buds, [ { data: { foo: 'bar' } } ])
  }))
})

/* global describe, before, after, it */
