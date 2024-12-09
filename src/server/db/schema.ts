import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"
import { createSelectSchema, createInsertSchema } from "drizzle-zod"
import { z } from "zod"

export const post = pgTable("posts", {
	id: serial().primaryKey(),
	post: text("post").notNull(),
	created_at: timestamp("created_at", { mode: "date" }).default(new Date()),
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
		created_at: true,
	})

export type TPost = z.infer<typeof insertPostSchema>
