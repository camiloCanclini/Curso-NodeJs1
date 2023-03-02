const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.align(),
        winston.format.printf((info)=>{
            return `[WinstonLogs - Nivel: ${info.level} - Timestamp: ${info.timestamp}] ${info.message}`
        })
    ),
    transports: [
        new winston.transports.Console(),
    ]
});

logger.info('Hello, world!');
logger.error('Something went wrong');
