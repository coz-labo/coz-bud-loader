/**
 * Bud loader for coz.
 * @module coz-bud-loader
 * @version 1.0.0
 */

"use strict";


var BudLoader = require('./bud_loader');
function budLoader(config){
    return new BudLoader(config);
}

budLoader.budLoader = budLoader;

module.exports = budLoader;
