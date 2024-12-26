import { z, ZodError } from "zod"

const EnvSchema = z.object({
	NODE_ENV: z.string(),
	PORT: z.coerce.number().default(4000),
	LOG_LEVEL: z
		.enum(["fatal", "error", "warn", "info", "debug", "trace", "silent"])
		.default("debug"),
	DATABASE_URI: z.string(),
    REDIS_URL: z.string(),
	VITE_CLERK_PUBLISHABLE_KEY: z.string(),
	CLERK_SECRET_KEY: z.string(),
})

export type Env = z.infer<typeof EnvSchema>

let env: Env

try {
	env = EnvSchema.parse(process.env)
} catch (e) {
	const error = e as ZodError
	console.error("❌ Invalid environmental variable(s):")
	console.error(error.flatten().fieldErrors)
	process.exit(1)
}

export default env
