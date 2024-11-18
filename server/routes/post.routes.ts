import { createRoute } from "@hono/zod-openapi"
import * as HttpStatusCode from "stoker/http-status-codes"

export const post = createRoute({
	path: "/posts",
	method: "get",
	tags: ["Posts"],
	responses: {
		[HttpStatusCode.OK]: {
			description: "Pago ok response",
		},
	},
})

export type TPostRoute = typeof post
