import { OpenAPIHono } from "@hono/zod-openapi"
import { notFound, onError } from "stoker/middlewares"
import defaultHook from "stoker/openapi/default-hook"
import { logger } from "../middlewares/pino"
import { AppBindings } from "./types"

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

	app.onError(onError)
	app.notFound(notFound)

	return app
}
