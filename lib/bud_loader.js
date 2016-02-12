/**
 * Bud file loader.
 * @memberof module:bud-loader/lib
 * @inner
 * @constructor BudLoader
 * @param {object} config
 */

"use strict";

const path = require('path'),
    fs = require('fs'),
    async = require('async'),
    cozBud = require('coz-bud'),
    convertBud = require('./convert_bud'),
    evaluateBud = require('./evaluate_bud'),
    requireBud = require('./require_bud'),
    makeupBud = require('./makeup_bud');


/** @lends BudLoader */
function BudLoader(config) {
    let s = this;
}

BudLoader.prototype = {
    /**
     * Load bud.
     * @param {Bud|string} bud - Bud or source filename of it.
     * @param {loadCallback} callback - Callback when done.
     */
    load(bud, callback) {
        let s = this;
        bud = [].concat(bud).map(cozBud.create);
        async.waterfall([
            (callback) => {
                process.nextTick(() => {
                    callback(null, bud);
                });
            },
            (bud, callback) => {
                requireBud(bud, callback);
            },
            (bud, callback) => {
                evaluateBud(bud, callback);
            },
            (bud, callback) => {
                makeupBud(bud, callback);
            },
            (bud, callback) => {
                convertBud(bud, callback);
            }
        ], callback);
    }
};

module.exports = BudLoader;


/**
 * Callback for bud load
 * @memberof module:coz-bud-loader/lib
 * @inner
 * @callback loadCallback
 * @param {?Error} err - Load error.
 * @param {Bud} bud - Loaded bud.
 */