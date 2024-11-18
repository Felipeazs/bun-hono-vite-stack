import { createRouter } from "@/server/lib/create-app"
import * as routes from "./post.routes"
import * as handlers from "./post.handlers"

const router = createRouter().openapi(routes.post, handlers.getposts)

export default router
