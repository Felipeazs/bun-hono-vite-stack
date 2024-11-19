import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"
import { createSelectSchema, createInsertSchema } from "drizzle-zod"
import { z } from "zod"

export const post = pgTable("posts", {
	id: serial().primaryKey(),
	post: text("post").notNull(),
	createdAt: timestamp({ mode: "date" }).default(new Date()),
})

export const getPostSchema = createSelectSchema(post)
export const insertPostSchema = createInsertSchema(post, {
	post: () => z.string().trim().min(1, { message: "ingrese el post" }),
})
	.required({
		post: true,
	})
	.omit({
		id: true,
		createdAt: true,
	})

export type TPost = z.infer<typeof insertPostSchema>
