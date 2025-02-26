import { loadEnv } from "vite"
import { defineConfig } from "vitest/config"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
	plugins: [tsconfigPaths()],
	test: {
		typecheck: {
			enabled: true,
		},
		env: loadEnv(".env", process.cwd(), ""),
	},
	resolve: {
		alias: {
			"@": new URL("./src/", import.meta.url).pathname,
		},
	},
})
