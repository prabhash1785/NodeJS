/**
 * Created by prrathore on 5/26/15.
 */

'use strict';

module.exports = function (grunt) {

    //this task doesn't need a configuration object
    grunt.registerTask('sayhi', 'Say Hi', function(name) {
        grunt.log.writeln('Hi ' + name);
    })

    //Multitask looks for targets defined in configuration object
    grunt.registerMultiTask('echo', 'echoes the provided param', function(arg) {
       //grunt.log.writeln('Arguement is: ' + arg);
        grunt.log.writeln(this.target + ' :: ' + this.data);
    });

}
