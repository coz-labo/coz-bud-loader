/**
 * Test case for evaluateBud.
 * Runs with mocha.
 */
'use strict'

const evaluateBud = require('../lib/evaluate_bud.js')
const co = require('co')
const assert = require('assert')

describe('Evaluate bud', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Evaluate bud', () => co(function * () {
    let evaluated = yield evaluateBud([
      () => Promise.resolve({ foo: 'bar' }),
      { hoge: 'fuge' }
    ])
    assert.deepEqual(evaluated, [ { foo: 'bar' }, { hoge: 'fuge' } ])
  }))
})

/* global describe, before, after, it */