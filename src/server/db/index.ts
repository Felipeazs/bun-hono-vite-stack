import env from "@/env"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

import * as schema from "./schema"

const queryClient = postgres(env.DATABASE_URI)
const db = drizzle({ client: queryClient, schema })

export default db
