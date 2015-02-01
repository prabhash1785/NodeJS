/**
 * Create new logger instance.
 *
 * Created by prrathore on 2/1/15.
 */

var winston = require('winston');

var logger = new winston.Logger({
        transports: [
            new winston.transports.Console({
                colorize: true
            }),
            new winston.transports.File({
                level: "error",
                filename: "log/output.log"
            })
        ]
    }
);

logger.log('info', 'sending info level log using my custom logger');
logger.log('error', 'sending error level log using my custom logger');

logger.info("foo");
logger.error("bar");
