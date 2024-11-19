CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"post" text NOT NULL,
	"createdAt" timestamp DEFAULT '2024-11-19 18:48:11.178'
);
