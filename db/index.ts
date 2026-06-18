
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { sql } from "drizzle-orm";

// 1. Create the connection client
const queryClient = postgres(process.env.DATABASE_URL!);

// 2. Initialize Drizzle with the postgres client and schema
export const db = drizzle(queryClient, { schema });
// 2. Add this test block to immediately verify the connection
async function testConnection() {
  try {
    // Run a dummy query
    await db.execute(sql`SELECT 1`)
    console.log('🟢 Database connection successful!')
  } catch (error) {
    console.error('🔴 Database connection failed:')
    console.error(error)
  }
}

testConnection()
