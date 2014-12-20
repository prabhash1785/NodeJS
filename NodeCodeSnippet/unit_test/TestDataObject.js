/**
 * Unit Test Data Object using Mocha module.
 *
 * Created by prrathore on 12/20/14.
 */

var assert = require('assert');
var employee = require('../object/DataObject')();

suite('Data Model Test Suite', function() {

    test('Data Equality', function() {
        employee.firstName = 'Amber';
        employee.lastName = 'Green';
        employee.department = 'family';

        assert.equal(employee.firstName, 'Amber');
        assert.equal(employee.lastName, 'Green');
        assert.equal(employee.department, 'family');

    });

    test('Data Inequality', function() {
       employee.firstName = 'Rob';
       employee.lastName = 'Peter';

       assert.notEqual(employee.firstName, 'Joe', 'Should not match data');
    });

});


