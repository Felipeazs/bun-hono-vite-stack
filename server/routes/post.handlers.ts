import db from "../db"
import { post } from "../db/schema"
import { AppRouteHandler } from "../lib/types"
import { TCreatePostRoute, TGetPostRoute } from "./post.routes"

//TODO: Eliminar cuando se requiera

export const getPosts: AppRouteHandler<TGetPostRoute> = async (c) => {
	await new Promise((r) => setTimeout(r, 2000))

	const posts = await db.query.post.findMany()

	return c.json({ posts }, 200)
}

export const createPost: AppRouteHandler<TCreatePostRoute> = async (c) => {
	const body = c.req.valid("json")

	const [res] = await db.insert(post).values(body).returning()
	console.log(res)

	return c.json(201)
}
