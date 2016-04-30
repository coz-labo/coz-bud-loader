'use strict'

const cozBudLoader = require('coz-bud-loader')

let loader = cozBudLoader({})

loader.load('**/.*.bud').then((bud) => {
  /* ... */
})
