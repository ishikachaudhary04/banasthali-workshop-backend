import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  out: './drizzle/development',
  schema: './src/model/index.js',
  dbCredentials: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '12345',
    database: 'local_db_2',
    ssl: false
  }
});
