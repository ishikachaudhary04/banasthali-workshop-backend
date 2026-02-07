import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from '../model/index.js';

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '12345',
    database: 'local_db2',
    ssl: false,
    max: 20,
    min: 5,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});

pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

const postgreDb = drizzle(pool, { schema: {...schema}});

export default postgreDb;