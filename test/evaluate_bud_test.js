/**
 * Test case for evaluateBud.
 * Runs with mocha.
 */
'use strict'

const evaluateBud = require('../lib/evaluate_bud.js')
const assert = require('assert')

describe('Evaluate bud', () => {
  it('Evaluate bud', async () => {
    let evaluated = await evaluateBud([
      () => Promise.resolve({ foo: 'bar' }),
      { hoge: 'fuge' }
    ])
    assert.deepEqual(evaluated, [{ foo: 'bar' }, { hoge: 'fuge' }])
  })
})

/* global describe, before, after, it */
