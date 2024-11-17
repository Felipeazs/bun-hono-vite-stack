import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react-swc"
import devServer from "@hono/vite-dev-server"
import adapter from "@hono/vite-dev-server/bun"

// https://vite.dev/config/
export default defineConfig({
	server: {
		port: 4000,
	},
	build: {
		outDir: "build",
	},
	plugins: [
		react(),
		devServer({
			entry: "server/app.ts",
			adapter,
			exclude: [
				/.*\.tsx?($|\?)/,
				/.*\.(s?css|less)($|\?)/,
				/.*\.(svg|png)($|\?)/,
				/^\/@.+$/,
				/^\/favicon\.ico$/,
				/^\/(public|assets|static)\/.+/,
				/^\/node_modules\/.*/,
			],
			injectClientScript: true,
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./"),
		},
	},
})
