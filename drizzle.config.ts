import { defineConfig, Config } from "drizzle-kit"
import env from "@/env"

export default defineConfig({
	dialect: "postgresql",
	schema: "./src/server/db/schema.ts",
	out: "./src/server/db/migrations",
	dbCredentials: {
		url: env.DATABASE_URI,
	},
} as Config)
