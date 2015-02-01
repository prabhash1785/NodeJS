/**
 * Sample code to depict usage of default Winston Logger.
 *
 * Created by prrathore on 2/1/15.
 */


var winston = require('winston');

//use log method with log level as arguement
winston.log('info', 'Hello distributed log files!'); //pass log level as first parameter
winston.log('warn', "Something not so good happened");
winston.log('error', "Something really bad happened");

//use appropriate log level method
winston.info("This is info level logging");
winston.warn("This is warn level logging");
winston.error("This is error level logging");

