import { z, ZodError } from "zod"

const EnvSchema = z.object({
	NODE_ENV: z.string(),
	PORT: z.coerce.number(),
	LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace", "silent"]),
	DATABASE_URI: z.string(),
})

export type Env = z.infer<typeof EnvSchema>

let env: Env

try {
	env = EnvSchema.parse(process.env)
} catch (e) {
	const error = e as ZodError
	console.error("❌ Invalid env:")
	console.error(error.flatten().fieldErrors)
	process.exit(1)
}

export default env
