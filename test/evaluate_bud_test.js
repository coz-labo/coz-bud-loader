/**
 * Test case for evaluateBud.
 * Runs with nodeunit.
 */

var evaluateBud = require('../lib/evaluate_bud.js');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Evaluate bud'] = function(test){
    evaluateBud(function (callback) {
        callback(null, {});
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

