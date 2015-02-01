/**
 * Create a custom transport for Winston Logging.
 *
 * Created by prrathore on 2/1/15.
 */

var winston = require('winston');

winston
    .remove(winston.transports.Console)
    .add(winston.transports.Console, {
        level: "error",
        colorize: true,
        timestamp: true
    });

winston.info("test info"); //won't output because my custom transport doesn't have info log level
winston.error("test error");
