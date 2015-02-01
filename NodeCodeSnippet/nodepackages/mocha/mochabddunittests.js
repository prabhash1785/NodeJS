/**
 * Mocha based BDD style unit testing.
 *
 * Created by prrathore on 2/1/15.
 */

var mocha = require('mocha');

var should = require('should');
var assert = require('assert');

describe('Array Test', function() {
   describe('index test', function() {
       it('should return -1 when the value is not present', function() {

           //assertion using should.js
           [1,2,3].indexOf(5).should.equal(-1);
           [1,2,3].indexOf(0).should.equal(-1);

       });

       it('should return -1 when the value is not present', function() {

           //assertion using Node assert core module
           assert.equal(-1, [1,2,3].indexOf(10));
           assert.equal(-1, [1,2,3].indexOf(7));

       });
   });
});
