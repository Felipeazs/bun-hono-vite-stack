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
	},
})

export const getPost = createRoute({
	path: "/posts/{id}",
	method: "get",
	tags: ["Posts"],
	middleware: auth,
	request: {
		params: z.object({
			id: z.string(),
		}),
	},
	responses: {
		[HttpStatusCode.OK]: {
			description: "Get Post by id",
			content: {
				"application/json": {
					schema: z.object({
						post: getPostSchema,
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
		},
	},
})

export const updatePost = createRoute({
	path: "/posts/{id}",
	method: "put",
	tags: ["Posts"],
	middleware: auth,
	request: {
		params: z.object({
			id: z.string(),
		}),
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
			description: "Post sucessfuly updated",
		},
	},
})

export type TGetPostsRoute = typeof getPosts
export type TGetPostRoute = typeof getPost
export type TCreatePostRoute = typeof createPost
export type TUpdatePostRoute = typeof updatePost
