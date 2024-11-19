import { AppRouteHandler } from "../lib/types"
import { TPostRoute } from "./post.routes"

export const getposts: AppRouteHandler<TPostRoute> = async (c) => {
	await new Promise((r) => setTimeout(r, 2000))

	//TODO: Eliminar cuando se requiera
	const posts = [
		{
			id: 1,
			post: "test 1",
			createdAt: new Date(),
		},
	]

	return c.json(posts, 200)
}
