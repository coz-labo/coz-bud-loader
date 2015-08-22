/**
 * Evaluate bud content.
 * @memberof module:coz-bud-loader/lib
 * @function evaluateBud
 * @param {object|function} bud - Module to evaluate.
 * @param {function} callback - Callback when done.
 */

"use strict";

var extend = require('extend'),
    async = require('async');

/** @lends evaluateBud */
function evaluateBud(bud, callback) {
    async.concatSeries([].concat(bud), function (bud, callback) {
        switch (typeof(bud)) {
            case 'function':
                var load = bud;
                load(function (err, bud) {
                    bud = [].concat(bud || []).map(function (bud) {
                        return extend({}, load, bud);
                    });
                    callback(err, bud);
                });
                break;
            default:
                callback(null, bud);
                break;
        }
    }, callback);
}

module.exports = evaluateBud;