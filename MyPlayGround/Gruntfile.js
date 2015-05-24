/**
 * Created by prrathore on 5/23/15.
 */

'use strict';

var grunt = require('grunt');

grunt.registerTask('default', 'default task', function() {
    console.log('I am the default task.');
});

grunt.registerTask('hello', 'greeting task', function(name) {
   if(!name || !name.length)
        grunt.warn('you need to provide a name');

    console.log('hello ' + name + '!');

});