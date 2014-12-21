/**
 * Unit Test Data Object using Mocha module.
 * Testing is done using Mocha's TDD format.
 *
 * Run from command line using: mocha TestDataObject.js -u tdd
 *
 * Created by prrathore on 12/20/14.
 */

var assert = require('assert');

suite('Data Model Test Suite', function() {

    test('Data Equality', function() {
        var employee = require('../object/DataObject').emp1();
        console.log("emp: " + JSON.stringify(employee));
        employee.firstName = 'Amber';
        employee.lastName = 'Green';
        employee.department = 'family';

        assert.equal(employee.firstName, 'Amber');
        assert.equal(employee.lastName, 'Green');
        assert.equal(employee.department, 'family');

    });

    test('Data Inequality', function() {
       var employee = require('../object/DataObject').emp1();
       console.log("emp1: " + JSON.stringify(employee));
       employee.firstName = 'Rob';
       employee.lastName = 'Peter';

       assert.notEqual(employee.firstName, 'Joe', 'Should not match data');
    });

    test('Test on emp2 object', function() {
       var emp2 = require('../object/DataObject').emp2();
       console.log("emp2: " + JSON.stringify(emp2));
       emp2.firstName = 'Foo';
       emp2.lastName = 'Bar';
       emp2.country = 'US';

      console.log("final emp2: " + JSON.stringify(emp2));
       assert.equal(emp2.country, 'US');
    });

    test('Test on obj object 1', function() {
        var a = require('../object/DataObject').obj();
        console.log("a: " + JSON.stringify(a));

        a.member1 = 'member1';
        a.member2 = 'member2';

        assert.equal(a.member1, 'member1');
    });

    test('Test on obj object 2', function() {
        var p = {
            member1 : 'member1',
            member2 : 'member2',
            member3 : 'member3'
        };

        var b = require('../object/DataObject').obj(p);
        console.log("b: " + JSON.stringify(b));

        assert.equal(b.member2, 'member2');
        assert.notEqual(b.member3, 'member3');
    });

});


