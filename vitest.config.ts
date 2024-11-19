import { loadEnv } from "vite"
import { defineConfig } from "vitest/config"
import path from "node:path"

export default defineConfig({
	test: {
		typecheck: {
			enabled: true,
		},
		env: loadEnv(".env", process.cwd(), ""),
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./"),
		},
	},
})
