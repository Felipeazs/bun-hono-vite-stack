import { testClient } from "hono/testing"
import { afterAll, describe, expect, it } from "vitest"

import env from "@/env"
import { eq } from "drizzle-orm"
import db from "../db"
import { post as postTable } from "../db/schema"
import createApp from "../lib/create-app"
import router from "./post.index"

if (env.NODE_ENV !== "test") {
	throw new Error("NODE_ENV must be 'test'")
}

describe("Posts", () => {
	const client = testClient(createApp().route("/", router))

	it("Get posts", async () => {
		const res = await client.posts.$get()
		const json = await res.json()

		expect(json.status).toBe(true)
	})

	const newpost = {
		post: "test 1",
	}

	it("Create post", async () => {
		const res = await client.posts.$post({ json: newpost })
		const json = await res.json()

		expect(json.status).toBe(true)
	})

	afterAll(async () => {
		await db.delete(postTable).where(eq(postTable.post, "test 1"))
	})
})
