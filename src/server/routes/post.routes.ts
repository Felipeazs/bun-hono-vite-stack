import { createRoute, z } from "@hono/zod-openapi"
import * as HttpStatusCode from "stoker/http-status-codes"
import { getPostSchema, insertPostSchema } from "../db/schema"
import { auth } from "../middlewares/auth"

export const getPosts = createRoute({
	path: "/posts",
	method: "get",
	tags: ["Posts"],
	middleware: auth,
	responses: {
		[HttpStatusCode.OK]: {
			description: "Get Posts",
			content: {
				"application/json": {
					schema: z.object({
						posts: z.array(getPostSchema),
						status: z.boolean(),
					}),
				},
			},
		},
		[HttpStatusCode.NOT_FOUND]: {
			description: "Posts not found",
			content: {
				"application/json": {
					schema: z.object({
						posts: z.array(getPostSchema).optional(),
						status: z.boolean(),
					}),
				},
			},
		},
	},
})

export const createPost = createRoute({
	path: "/posts",
	method: "post",
	tags: ["Posts"],
	middleware: auth,
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
						status: z.boolean(),
					}),
				},
			},
		},
	},
})

export type TGetPostRoute = typeof getPosts
export type TCreatePostRoute = typeof createPost
