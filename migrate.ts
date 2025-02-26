import { drizzle } from "drizzle-orm/postgres-js"
import { migrate } from "drizzle-orm/postgres-js/migrator"
import postgres from "postgres"

import env from "@/env"

const migrationClient = postgres(env.DATABASE_URI, { max: 1 })
await migrate(drizzle(migrationClient), { migrationsFolder: "src/server/db/migrations" })
console.log("migration completed!")
