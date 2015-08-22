/**
 * Test case for budLoader.
 * Runs with nodeunit.
 */

var BudLoader = require('../lib/bud_loader.js');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Bud loader'] = function(test){
    var src = __dirname + '/../docs/mockups/mock-bud.bud';
    new BudLoader().load(src, function (err, bud) {
        test.ifError(err);
        test.ok(bud);
        test.done();
    });
};

