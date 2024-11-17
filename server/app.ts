import { serveStatic } from "hono/bun"
import { readFile } from "node:fs/promises"
import env from "@/env"
import createApp from "./lib/create-app"

const app = createApp()

export const isProd = env.NODE_ENV === "production" || env.NODE_ENV === "testing"
let html = await readFile(isProd ? "build/index.html" : "index.html", "utf8")

if (!isProd) {
	// Inject Vite client code to the HTML
	html = html.replace(
		"<head>",
		`
    <script type="module">
        import RefreshRuntime from "/@react-refresh"
        RefreshRuntime.injectIntoGlobalHook(window)
        window.$RefreshReg$ = () => {}
        window.$RefreshSig$ = () => (type) => type
        window.__vite_plugin_react_preamble_installed__ = true
    </script>
    <script type="module" src="/@vite/client"></script>
    `,
	)
}

app.use("/assets/*", serveStatic({ root: isProd ? "build/" : "./" }))
app.get("/*", (c) => c.html(html))

export default {
	port: env.PORT || 4000,
	hostname: "0.0.0.0",
	fetch: app.fetch,
}
