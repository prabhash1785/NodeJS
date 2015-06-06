/**
 * Created by prrathore on 5/23/15.
 */

'use strict';

var grunt = require('grunt');

//load tasks from tasks directory
grunt.loadTasks('./tasks');

//use grunt-config-dir only when you are not using grunt.initConfig({})
//this could be used to pass options config object from the actual tasks defined in external files
//require('grunt-config-dir')(grunt, {
//    configDir: require('path').resolve('tasks')
//});

grunt.initConfig({
    echo: {
        param1: 'hello',
        param2: 'hi'

    },
    jshint: {
        options: {
            jshintrc: true
        },
        all : ['Gruntfile.js','routes/**/*.js', 'controllers/**/*.js', 'tasks/**/*.js']
    },
    clean: {
        log: 'npm-debug.log',
        temp: ['*.temporary'],
        browserifyFiles: '.build'
    },
    watch: {
        files: ['Gruntfile.js', 'tasks/**/*.js', 'routes/**/*.js'],
        tasks: 'jshint'
    },
    browserify: {
        webjs: {
            files: {
                '.build/bundle.js': ['routes/*.js', 'controllers/*.js']
            }
        }
    },
    uglify: {
        compress: {
            files: {
                '.build/bundle.min.js': ['.build/bundle.js']
            }
        }
    }
});

//load jshint task from NPM
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-browserify');
grunt.loadNpmTasks('grunt-contrib-uglify');

//To run: grunt default or grunt
grunt.registerTask('default', 'default task', function() {
    console.log('I am the default task.');
});

//To run: grunt hello:<param>
grunt.registerTask('hello', 'greeting task', function(name) {
   if(!name || !name.length) {
       grunt.warn('you need to provide a name');
   }

    console.log('hello ' + name + '!');

});

//Accepts n number of args
grunt.registerTask('hello2', 'greeting task two', function(name) {
    if(!name || !name.length)
        grunt.warn('you need to provide a name');
    // unfortunately arguments is not an array,
    // we need to convert it to use array methods like join()
    var args = Array.prototype.slice.call(arguments);
    var greet = 'hello ' + args.join(' ') + '!';
    console.log(greet);
});

// this task can run tasks with n number of args
grunt.registerTask('validateandruntaskv2', 'if task available then run given task with multiple args', function(taskname) {
    if(!taskname || !taskname.length) {
        grunt.fail.fatal('task name is needed to run this task');
    }

    var taskToCall = taskname;
    for(var i = 1; i < arguments.length; i++) {
        taskToCall += ':' + arguments[i];
    }
    console.log(taskToCall);

    if(!grunt.task.exists(taskname)) {
        grunt.log.writeln('this task does not exist!');
    } else {
        grunt.log.writeln(taskname + ' exists. Going to run this task');
        grunt.task.run(taskToCall);
    }
});

grunt.registerTask('sum', 'sum of two numbers', function sum(a, b) {
    if(!a || !b) {
        grunt.warn('This task needs two parameters to print the sum');
    }

    var c = parseInt(a) + parseInt(b); //parse the parameters to integer
    grunt.log.writeln('sum is: ' + c);
});

grunt.registerTask('gruntversion', 'get grunt version', function() {
   grunt.log.writeln('Grunt version is: ' + grunt.version);
});

grunt.registerTask('taskvalidator', 'validate if a task exist', function(taskname) {
   if(!taskname || !taskname.length) {
       grunt.fatal('Cannot run this task without task name');
   }

    grunt.log.writeln(taskname + ' exists: ' + grunt.task.exists(taskname));

});

grunt.registerTask('validateandruntask', 'if task available then run given task', function(taskname) {
   if(!taskname || !taskname.length) {
       grunt.warn('task name is needed to run this task');
   }

    if(!grunt.task.exists(taskname)) {
        grunt.log.writeln('this task does not exist!');
    } else {
        grunt.log.writeln(taskname + ' exists. Going to run this task');
        grunt.task.run(taskname);
    }

});

grunt.registerTask('multitask', 'runs multiple tasks', ['gruntversion', 'default', 'hello:Ricky']);