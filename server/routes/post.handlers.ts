import { TPostRoute } from "./post.routes"

export const getposts: AppRouteHandler<TPostRoute> = async (c) => {
	console.log("posts")
	return c.json(200)
}
