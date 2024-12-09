CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"post" text NOT NULL,
	"created_at" timestamp DEFAULT '2024-12-01 12:16:15.731'
);
