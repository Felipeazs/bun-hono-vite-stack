import { OpenAPIHono } from "@hono/zod-openapi"
import defaultHook from "stoker/openapi/default-hook"
import { AppBindings } from "./types"
import { logger } from "../middlewares/pino"

export function createRouter() {
	return new OpenAPIHono<AppBindings>({ strict: false, defaultHook })
}

export default function createApp() {
	const app = createRouter()

	app.use(logger())

	app.get("/health", async (c) => {
		c.status(200)
		return c.json("ok")
	})

	return app
}
