/**
 *
 * A sample data object.
 *
 * Created by prrathore on 12/20/14.
 */

'use strict';

exports.emp1 = function() {
    var employee = {};

    employee.firstName = '';
    employee.lastName = '';
    employee.department = '';

    return employee;
}

exports.emp2 = function() {
    this.firstName = '';
    this.lastName = '';
    this.country = '';

    return this;
}

exports.obj = function(param) {
    var o = {};

    if(param === undefined) {
        return o;
    }

    o.member1 = param.member1;
    o.member2 = param.member2;

    return o;
}
