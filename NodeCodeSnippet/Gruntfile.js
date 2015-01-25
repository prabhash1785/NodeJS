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

};
