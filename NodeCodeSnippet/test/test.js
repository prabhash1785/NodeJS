/**
 * This can be run using mocha from command line.
 * Mocha by default looks for test directory in application root and if test is found then it executes test files
 * under test directory.
 *
 * Created by prrathore on 2/1/15.
 *
 */

var assert = require("assert")
describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    })
})
