import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import pg from "pg";

import { DB_TIMEZONE } from "./time";

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

async function runMigrate() {
  const connectionString = process.env.DATABASE_URL || "";

  const connection = new pg.Pool({
    connectionString,
    options: `-c timezone=${DB_TIMEZONE}`,
  });
  const db = drizzle(connection);

  await migrate(db, {
    migrationsFolder: path.resolve(__dirname, "../drizzle"),
  });

  await connection.end();
  process.exit(0);
}

runMigrate().catch(() => {
  process.exit(1);
});
