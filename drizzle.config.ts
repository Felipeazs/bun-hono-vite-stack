import { defineConfig, Config } from "drizzle-kit"
import env from "@/env"

export default defineConfig({
	dialect: "postgresql",
	schema: "./server/db/schema.ts",
	out: "./server/db/migrations",
	dbCredentials: {
		url: env.DATABASE_URI,
	},
} as Config)
