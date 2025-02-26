import * as HttpStatusCode from "stoker/http-status-codes"

import { eq } from "drizzle-orm"
import { HTTPException } from "hono/http-exception"
import db from "../db"
import { post as postTable } from "../db/schema"
import { AppRouteHandler } from "../lib/types"
import { TCreatePostRoute, TGetPostRoute, TGetPostsRoute, TUpdatePostRoute } from "./post.routes"

export const getPosts: AppRouteHandler<TGetPostsRoute> = async (c) => {
	const posts = await db.query.post.findMany()
	if (!posts) throw new HTTPException(HttpStatusCode.NOT_FOUND, { message: "Posts not found" })

	return c.json({ posts, status: true }, HttpStatusCode.OK)
}

export const getPost: AppRouteHandler<TGetPostRoute> = async (c) => {
	const { id } = c.req.param()

	const post = await db.query.post.findFirst({
		where: eq(postTable.id, Number(id)),
	})

	if (!post) throw new HTTPException(HttpStatusCode.NOT_FOUND, { message: "Post not found" })

	return c.json({ post }, HttpStatusCode.OK)
}

export const createPost: AppRouteHandler<TCreatePostRoute> = async (c) => {
	const body = c.req.valid("json")

	const [new_post] = await db.insert(postTable).values(body).returning()
	if (!new_post)
		throw new HTTPException(HttpStatusCode.NO_CONTENT, { message: "Post not created" })

	return c.json(HttpStatusCode.CREATED)
}

export const updatePost: AppRouteHandler<TUpdatePostRoute> = async (c) => {
	const { post } = c.req.valid("json")
	const id = c.req.param("id")

	const [updated_post] = await db
		.update(postTable)
		.set({ post })
		.where(eq(postTable.id, Number(id)))
		.returning()

	if (!updated_post)
		throw new HTTPException(HttpStatusCode.NO_CONTENT, { message: "Post not edited" })

	return c.json(HttpStatusCode.CREATED)
}
