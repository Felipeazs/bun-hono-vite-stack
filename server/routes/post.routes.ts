import { createRoute, z } from "@hono/zod-openapi"
import * as HttpStatusCode from "stoker/http-status-codes"
import { getPostSchema, insertPostSchema } from "../db/schema"

export const getPosts = createRoute({
	path: "/posts",
	method: "get",
	tags: ["Posts"],
	responses: {
		[HttpStatusCode.OK]: {
			description: "Get Posts",
			content: {
				"application/json": {
					schema: z.object({
						posts: z.array(getPostSchema),
					}),
				},
			},
		},
		[HttpStatusCode.NOT_FOUND]: {
			description: "Posts not found",
		},
	},
})

export const createPost = createRoute({
	path: "/posts",
	method: "post",
	tags: ["Posts"],
	request: {
		body: {
			description: "The body of the Post",
			content: {
				"application/json": {
					schema: insertPostSchema,
				},
			},
		},
	},
	responses: {
		[HttpStatusCode.CREATED]: {
			description: "Post sucessfuly created",
			content: {
				"application/json": {
					schema: z.object({
						status: z.number(),
					}),
				},
			},
		},
	},
})

export type TGetPostRoute = typeof getPosts
export type TCreatePostRoute = typeof createPost
