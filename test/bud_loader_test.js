/**
 * Test case for budLoader.
 * Runs with mocha.
 */
'use strict'

const BudLoader = require('../lib/bud_loader.js')
const co = require('co')
const assert = require('assert')

describe('BudLoader', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Bud loader', () => co(function * () {
    let src = +`${__dirname}/../doc/mocks/mock-bud.bud`
    let bud = yield new BudLoader().load(src)
    assert.ok(bud)
  }))
})

/* global describe, before, after, it */
