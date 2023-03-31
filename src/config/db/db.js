import {Sequelize} from "sequelize";
import dotenv from 'dotenv'
import logger from "../logger/logger-config.js";
dotenv.config()


const {
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DIALECT,
    DB_HOST,
    DB_PORT,
    DB_TIMEZONE,
    DB_LOGGING,
    DB_POOL_MAX,
    DB_POOL_MIN,
    DB_POOL_ACQUIRE,
    DB_POOL_IDLE,
    DB_MIGRATION_STORAGE,
    DB_MIGRATION_STORAGE_PATH,
    DB_MIGRATION_STORAGE_TABLE_NAME,
    DB_MIGRATION_STORAGE_TABLE_SCHEMA,
    DB_MIGRATION_STORAGE_TABLE_ENGINE,
    DB_MIGRATION_ENABLE,
    DB_MIGRATION_RUN,
    DB_MIGRATION_DIR,
    DB_MIGRATION_SEEDING_DIR,
    DB_MIGRATION_SEEDING_STORAGE,
    DB_MIGRATION_SEEDING_STORAGE_PATH,
    DB_MIGRATION_SEEDING_TABLE_NAME,
} = process.env;
const db = new Sequelize(
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: DB_DIALECT,
        port: DB_PORT,
        timezone: DB_TIMEZONE,
        logging: false,
        pool: {
            max: parseInt(DB_POOL_MAX),
            min: parseInt(DB_POOL_MIN),
            acquire: DB_POOL_ACQUIRE,
            idle: DB_POOL_IDLE
        },
    });
export default db;