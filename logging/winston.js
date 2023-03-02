const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console(),
    ]
});

logger.info('Hello, world!');
logger.error('Something went wrong');
