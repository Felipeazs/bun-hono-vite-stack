import { ApiRoutes } from "@/server/app"
import { TPost } from "@/server/db/schema"
import { hc } from "hono/client"

const client = hc<ApiRoutes>("/api", {
	headers: {
		"Content-Type": "application/json",
	},
})

export const getPosts = async () => {
	return await client.posts
		.$get()
		.then((res) => res.json())
		.then((data) => data)
		.catch(console.error)
}

export const getPost = async (id: string) => {
	return await client.posts[":id"]
		.$get({ param: { id } })
		.then((res) => res.json())
		.then((data) => data)
		.catch(console.error)
}

export const createPost = async (post: TPost) => {
	return await client.posts
		.$post({ json: post })
		.then((res) => res.json())
		.then((data) => data)
		.catch(console.error)
}

export const updatePost = async ({ post, id }: { post: string; id: string }) => {
	console.log("update post", id, post)
	return await client.posts[":id"]
		.$put({ param: { id }, json: { post } })
		.then((res) => res.json())
		.then((data) => data)
		.catch(console.error)
}
