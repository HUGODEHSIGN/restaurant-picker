// import { neon } from '@neondatabase/serverless';
import 'dotenv/config';
// import { drizzle } from 'drizzle-orm/neon-http';

// const sql = neon(process.env.NEON_DATABASE_URL!);
// const db = drizzle(sql);
// export default db;

// import { Pool } from '@neondatabase/serverless';
// import { drizzle } from 'drizzle-orm/neon-serverless';
// const pool = new Pool({ connectionString: process.env.NEON_DATABASE_URL! });
// const db = drizzle(pool);
// console.log(pool);

// export default db;

import { Pool, neonConfig } from '@neondatabase/serverless';
import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from 'ws';
import * as schema from './schema';

dotenv.config({ path: '.env.local' });
neonConfig.webSocketConstructor = ws;
const pool = new Pool({ connectionString: process.env.NEON_DATABASE_URL });

export const db = drizzle(pool, { schema });
