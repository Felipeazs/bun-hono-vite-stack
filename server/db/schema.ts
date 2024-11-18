import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"
import { createSelectSchema } from "drizzle-zod"

export const post = pgTable("posts", {
	id: serial().primaryKey(),
	post: text("post"),
	createdAt: timestamp({ mode: "date" }).default(new Date()),
})

export const getPostSchema = createSelectSchema(post)
