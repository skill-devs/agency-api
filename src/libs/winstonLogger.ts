import { Request, Response, NextFunction } from "express"; // eslint-disable-line
import { format, transports, createLogger } from 'winston';

const {combine, timestamp, label, printf} = format;

// Logging levels severity from most important (error) to least important.
// error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5

// Custom log format  -  Visit winston´s logform to see built-in formats
const myFormat = printf(({level, message, label, timestamp}) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
  // return `${level}: ${message}`;
});

// define the custom settings for each transport (file, console)
const options = {
  file: {
    level: 'error',
    filename: `${process.env.PWD}/storage/logs/app.log`,
    handleExceptions: true,
    maxsize: 500_000, // 500KB
    maxFiles: 5,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
  },
};

// instantiate a new Winston Logger with the settings defined above
export const logger: any = createLogger({
  transports: [
    new transports.File(options.file),
  ],
  exceptionHandlers: [
    new transports.Console(options.console),
  ],
  exitOnError: false, // If false, handled exceptions will not exit the process
  silent: false, // If true, all logs are suppressed
  format: combine(
      label({label: 'my label'}),
      timestamp(),
      myFormat,
  ),
  // format: format.combine(format.splat(), format.simple()),
  level: 'debug', // Log only if level is less than or equal to this level
});

if (process.env.NODE_ENV !== 'production') {
  // Arriba defines los transports y aca seteas el que vas a usar
  // Esto se puede cambiar on runtime en cualquier otra parte
  logger.add(new transports.Console(options.console));
// logger.remove(file); // puedes remover el logger on runtime
}

export const loggerMid = (message: string) => (
  (req: Request, res: Response, next: NextFunction) => {
    logger.debug(message);
    next();
  }
);


// ignore specified routes
// app.use(unless('/example_route', middleware));

const unless = (ignorePaths: string[], middleware: Function) => {
    return (req: Request, res: Response, next: NextFunction) => {
      ignorePaths.forEach(path => {
        if (path === req.baseUrl) {
            return next();
        } else {
            return middleware(req, res, next);
        }
      });
    };
};
