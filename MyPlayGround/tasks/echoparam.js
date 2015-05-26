/**
 * Created by prrathore on 5/26/15.
 */

'use strict';

module.exports = function (grunt) {

    grunt.registerMultiTask('echo', 'echoes the provided param', function(param) {
       grunt.log.writeln('Param is: ' + param);
    });

}
