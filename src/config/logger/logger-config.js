import pino from 'pino';
import dotenv from "dotenv";
dotenv.config()

const transport = pino.transport({
    target: 'pino-pretty',
    options: {
        colorize: true,
        translateTime: true,
    }
})

const logger = pino({
    level: process.env.LOG_LEVEL,
}, transport)
export default logger;