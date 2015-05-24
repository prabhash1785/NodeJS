/**
 * This is a simple dummy task which will print sum of given two numbers.
 *
 * Created by prrathore on 5/23/15.
 */

module.exports = function (grunt) {

    grunt.registerTask('sum', 'sum of two numbers', function(a, b) {
        grunt.log.writeln(a + ' + ' + b + ' = ' + (a + b));
    });

};


