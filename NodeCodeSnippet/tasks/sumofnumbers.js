/**
 * This is a simple dummy task which will print sum of given two numbers.
 *
 * Created by prrathore on 5/23/15.
 */

function sum(grunt) {

    grunt.loadTasks('sumofnumbers');

    return {
        sum: function() {
            return "hello custom grunt task";
        }
    }

};

module.exports = sum;
