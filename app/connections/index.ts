import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

export async function loader() {
  console.log(process.env.SOME_SECRET);
}

const pool = new Pool({
  host: process.env.SOME_SECRET,
  user: process.env.SOME_SECRET,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

export const db = drizzle(pool);
