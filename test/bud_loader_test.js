/**
 * Test case for budLoader.
 * Runs with mocha.
 */
'use strict'

const BudLoader = require('../lib/bud_loader.js')

const assert = require('assert')

describe('BudLoader', () => {
  before(async () => {

  })

  after(async () => {

  })

  it('Bud loader', async () => {
    let src = +`${__dirname}/../doc/mocks/mock-bud.bud`
    let bud = await new BudLoader().load(src)
    assert.ok(bud)
  })
})

/* global describe, before, after, it */
