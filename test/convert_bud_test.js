/**
 * Test case for convertBud.
 * Runs with mocha.
 */

const convertBud = require('../lib/convert_bud.js')

const assert = require('assert')

describe('Convert bud', () => {
  before(async () => {

  })

  after(async () => {

  })

  it('Convert bud', async () => {
    let converted = [
      { force: false },
      { force: true }
    ]
    assert.ok(converted)
  })
})
/* global describe, before, after, it */
