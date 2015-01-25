/**
 * Created by prrathore on 1/24/15.
 */

module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['event/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        log: {
            foo: [1, 2, 3],
            bar: 'hello world',
            baz: false
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('lint', ['jshint']);

    grunt.registerMultiTask('log', 'Log stuff.', function() {
        grunt.log.writeln(this.target + ': ' + this.data);
    });

    grunt.registerTask('foo', 'A sample task that logs stuff.', function(arg1, arg2) {
        if (arguments.length === 0) {
            grunt.log.writeln(this.name + ", no args");
        } else {
            grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
        }
    });

};
