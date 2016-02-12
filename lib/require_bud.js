/**
 * Require a module.
 * @memberof module:coz-bud-loader/lib
 * @function requireBud
 * @param {Bud} bud - Bud to require.
 * @param {function} callback - Callback when done.
 */

"use strict";

const async = require('async'),
    fs = require('fs'),
    path = require('path');

/** @lends requireBud */
function requireBud(bud, callback) {
    async.concatSeries([].concat(bud), (bud, callback) => {
        let src = bud.src || bud;
        if (typeof(src) === 'object') {
            // Seems already required.
            callback(null, bud);
            return;
        }
        async.waterfall([
            (callback) => {
                let filename = path.resolve(src);
                fs.exists(filename, (exists) => {
                    callback(null, exists ? filename : src);
                });
            },
            (name) => {
                let err = null;
                try {
                    bud = require(name);
                } catch (catched) {
                    err = `Failed to load ${name}: ${catched}`;
                } finally {
                    bud = [].concat(bud || []).map(bud => {
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