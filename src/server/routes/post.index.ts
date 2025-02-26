import { createRouter } from "@/server/lib/create-app"
import * as routes from "./post.routes"
import * as handlers from "./post.handlers"

const router = createRouter()
	.openapi(routes.getPosts, handlers.getPosts)
	.openapi(routes.getPost, handlers.getPost)
	.openapi(routes.createPost, handlers.createPost)
	.openapi(routes.updatePost, handlers.updatePost)

export default router
