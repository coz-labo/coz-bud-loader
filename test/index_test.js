/**
 * Test for index.js
 */

"use strict";

var index = require('../lib/index.js');

exports['Eval index.'] = function(test){
    var loader = index({});
    test.ok(loader);
    test.done();
};
