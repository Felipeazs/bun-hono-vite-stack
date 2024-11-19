import * as HttpStatusCode from "stoker/http-status-codes"

import db from "../db"
import { post } from "../db/schema"
import { AppRouteHandler } from "../lib/types"
import { TCreatePostRoute, TGetPostRoute } from "./post.routes"

//TODO: Eliminar cuando se requiera

export const getPosts: AppRouteHandler<TGetPostRoute> = async (c) => {
	await new Promise((r) => setTimeout(r, 2000))

	const posts = await db.query.post.findMany()
	if (!posts) return c.json({ posts: null, status: HttpStatusCode.NOT_FOUND })

	return c.json({ posts, status: HttpStatusCode.OK })
}

export const createPost: AppRouteHandler<TCreatePostRoute> = async (c) => {
	const body = c.req.valid("json")

	await db.insert(post).values(body).returning()

	return c.json({ status: HttpStatusCode.CREATED })
}
