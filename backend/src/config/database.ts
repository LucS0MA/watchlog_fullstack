import pg from "pg";
const { Pool } = pg;

const port = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432;

export const pool = new Pool({
  database: process.env.DB_NAME ?? "watchlog",
  host: process.env.HOST ?? "localhost",
  password: process.env.DB_PASSWORD,
  port: port,
  user: process.env.DB_USER ?? "postgres",
});
