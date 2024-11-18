import { createRoute, z } from "@hono/zod-openapi"
import * as HttpStatusCode from "stoker/http-status-codes"
import { getPostSchema } from "../db/schema"

export const post = createRoute({
	path: "/posts",
	method: "get",
	tags: ["Posts"],
	responses: {
		[HttpStatusCode.OK]: {
			description: "Pago ok response",
			content: {
				"application/json": {
					schema: z.array(getPostSchema),
				},
			},
		},
	},
})

export type TPostRoute = typeof post
