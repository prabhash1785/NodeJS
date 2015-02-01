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
        level: "info",
        colorize: true,
        timestamp: true
    });

winston.info("test info");
winston.error("test error");
