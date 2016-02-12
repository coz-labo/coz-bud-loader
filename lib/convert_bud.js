/**
 * Convert bud content.
 * @memberof module:coz-bud-loader/lib
 * @function convertBud
 * @param {Bud} bud - Configuration to convert.
 * @param {function} callback - Callback when done.
 */

"use strict";

const async = require('async'),
    cozBud = require('coz-bud');

/** @lends convertBud */
function convertBud(bud, callback) {
    async.concatSeries([].concat(bud), (data, callback) => {
        callback(null, cozBud.create(data));
    }, callback);
}

module.exports = convertBud;