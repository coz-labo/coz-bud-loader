/**
 * Require a module.
 * @memberof module:coz-bud-loader/lib
 * @function requireBud
 * @param {Bud} bud - Bud to require.
 * @param {function} callback - Callback when done.
 */

"use strict";

var async = require('async'),
    fs = require('fs'),
    path = require('path');

/** @lends requireBud */
function requireBud(bud, callback) {
    async.concatSeries([].concat(bud), function (bud, callback) {
        var src = bud.src || bud;
        if (typeof(src) === 'object') {
            // Seems already required.
            callback(null, bud);
            return;
        }
        async.waterfall([
            function (callback) {
                var filename = path.resolve(src);
                fs.exists(filename, function (exists) {
                    callback(null, exists ? filename : src);
                });
            },
            function (name) {
                var err = null;
                try {
                    bud = require(name);
                } catch (catched) {
                    err = "[BudLoader]" + catched;
                } finally {
                    bud = [].concat(bud || []).map(function (bud) {
                        bud.src = path.resolve(src);
                        return bud
                    });
                    callback(err, bud);
                }
            }
        ], callback);
    }, callback);
}

module.exports = requireBud;