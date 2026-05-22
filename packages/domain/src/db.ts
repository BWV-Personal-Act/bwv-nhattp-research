import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

import * as schema from "./schema";
import { DB_TIMEZONE } from "./time";

const connectionString = process.env.DATABASE_URL || "";

pg.types.setTypeParser(1114, (value) => value);

const poolConnection = new pg.Pool({
  connectionString,
  options: `-c timezone=${DB_TIMEZONE}`,
});

export const db = drizzle(poolConnection, { schema });
