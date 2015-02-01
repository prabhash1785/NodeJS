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

logger.info("foo");
logger.error("bar");
