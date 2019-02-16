/**
 * Test case for requireBud.
 * Runs with mocha.
 */
'use strict'

const requireBud = require('../lib/require_bud.js')

const assert = require('assert')

describe('', () => {
  before(async () => {

  })

  after(async () => {

  })

  it('Require bud', async () => {
    let bud = await requireBud([
      { foo: 'bar' }
    ])
    assert.deepEqual(bud, [
      { foo: 'bar' }
    ])
  })
})

/* global describe, before, after, it */
