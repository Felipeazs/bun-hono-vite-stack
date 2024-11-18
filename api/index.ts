import { ApiRoutes } from "@/server/app"
import { hc } from "hono/client"

const client = hc<ApiRoutes>("/api", {
	headers: {
		"Content-Type": "application/json",
	},
})

export const sendEmailContacto = async () => {
	return await client.posts
		.$get()
		.then((res) => res.json())
		.then((data) => data)
		.catch(console.error)
}
