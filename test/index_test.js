/**
 * Test for index.js
 */

'use strict'

const index = require('../lib/index.js')

const assert = require('assert')

describe('', () => {
  it('Eval index.', async () => {
    var loader = index({})
    assert.ok(loader)
  })
})

/* global describe, before, after, it */
