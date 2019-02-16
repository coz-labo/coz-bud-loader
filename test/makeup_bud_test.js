/**
 * Test case for makeupBud.
 * Runs with mocha.
 */
'use strict'

const makeupBud = require('../lib/makeup_bud.js')

const assert = require('assert')

describe('makeup bud', () => {
  before(async () => {

  })

  after(async () => {

  })

  it('Makeup bud', async () => {
    let buds = await makeupBud([
      { data: { 'foo': 'bar' } }
    ])
    assert.deepEqual(buds, [ { data: { foo: 'bar' } } ])
  })
})

/* global describe, before, after, it */
