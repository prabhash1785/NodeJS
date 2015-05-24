/**
 * Created by prrathore on 1/24/15.
 */

module.exports = function(grunt) {

    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });

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

    //enable jshint grunt plugin
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //register the jshint task
    grunt.registerTask('lint', ['jshint']);

    //register the log task
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

    grunt.registerTask('default', 'My "default" task description.', function() {
        grunt.log.writeln('Currently running the "default" task.');
    });

    grunt.registerTask('sum', 'Print sum of two numbers', require('./tasks/sumofnumbers')(grunt));

};
