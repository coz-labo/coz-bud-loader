/**
 * Bud file loader.
 * @memberof module:bud-loader/lib
 * @inner
 * @constructor BudLoader
 */

"use strict";

var path = require('path'),
    fs = require('fs'),
    async = require('async'),
    cozBud = require('coz-bud'),
    convertBud = require('./convert_bud'),
    evaluateBud = require('./evaluate_bud'),
    requireBud = require('./require_bud'),
    makeupBud = require('./makeup_bud');


/** @lends BudLoader */
function BudLoader() {
    var s = this;
}

BudLoader.prototype = {
    /**
     * Load bud.
     * @param {Bud|string} bud - Bud or source filename of it.
     * @param {loadCallback} callback - Callback when done.
     */
    load: function (bud, callback) {
        var s = this;
        bud = [].concat(bud).map(cozBud.create);
        async.waterfall([
            function nextTick(callback) {
                process.nextTick(function () {
                    callback(null, bud);
                });
            },
            function (bud, callback) {
                requireBud(bud, callback);
            },
            function (bud, callback) {
                evaluateBud(bud, callback);
            },
            function (bud, callback) {
                makeupBud(bud, callback);
            },
            function (bud, callback) {
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