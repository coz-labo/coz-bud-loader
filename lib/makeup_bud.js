/**
 * Makeup bud content.
 * @memberof module:coz-bud-loader/lib
 * @function makeupBud
 * @param {Bud} bud - Configuration to evaluate.
 * @param {function} callback - Callback when done.
 */

"use strict";

var async = require('async'),
    path = require('path'),
    unorm = require('unorm'),
    expandglob = require('expandglob');

/** @lends makeupBud */
function makeupBud(bud, callback) {
    var s = this;
    async.concatSeries([].concat(bud), function (bud, callback) {
        var src = bud.src && path.resolve(bud.src) || null,
            dirname = src && path.dirname(src) || bud.pwd || process.cwd(),
            basename = path.basename(src, path.extname(src));
        bud.path = path.resolve(dirname, bud.path || basename.replace(/^[\._]/, ''));
        bud.cwd = dirname;
        bud.tmpl = bud.tmpl || expandglob.sync([
                path.resolve(dirname, basename + '.*'),
                path.resolve(dirname, unorm.nfc(basename) + '.*'),
                path.resolve(dirname, unorm.nfd(basename) + '.*')
            ])
                .filter(function (tmpl) {
                    return tmpl !== src;
                })
                .shift() || 'json';
        callback(null, bud);
    }, callback);
}

module.exports = makeupBud;