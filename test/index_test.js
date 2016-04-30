/**
 * Test for index.js
 */

'use strict'

const index = require('../lib/index.js')
const co = require('co')
const assert = require('assert')

describe('', () => {
  it('Eval index.', () => co(function * () {
    var loader = index({})
    assert.ok(loader)
  }))
})

/* global describe, before, after, it */
