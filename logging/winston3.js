const winston = require('winston');
const { format } = winston;

const fileTransport = new winston.transports.File({
  filename: 'logs/app.log',
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  )
});

const logger = winston.createLogger({
  transports: [ fileTransport]
});

logger.info('Hello, Winston!');
logger.error('Something went wrong!');