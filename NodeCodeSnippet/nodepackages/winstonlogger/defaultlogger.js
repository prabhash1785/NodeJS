/**
 * Sample code to depict usage of default Winston Logger.
 *
 * Created by prrathore on 2/1/15.
 */


var winston = require('winston');

winston.log('info', 'Hello distributed log files!'); //pass log level as first parameter

winston.info("This is info level logging");
winston.error("This is error level logging");
