import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const post = pgTable("posts", {
	id: serial().primaryKey(),
	post: text("post"),
	createdAt: timestamp({ mode: "date" }).default(new Date()),
})
