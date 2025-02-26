import env from "@/env"
import { createClerkClient } from "@clerk/backend"
import { Context } from "hono"
import { createMiddleware } from "hono/factory"
import { HTTPException } from "hono/http-exception"

export const clerkClient = createClerkClient({
	secretKey: env.CLERK_SECRET_KEY,
	publishableKey: env.VITE_CLERK_PUBLISHABLE_KEY,
})

export const auth = createMiddleware(async (c, next) => {
	const authState = await clerkClient.authenticateRequest(c.req.raw)
	if (!authState.isSignedIn) throw new HTTPException(401, { message: "Unauthorized" })

	// const userDB = await db.query.user.findFirst({
	// 	where: eq(user.externalId, authed.userId),
	// })
	//
	// if (!userDB) throw new HTTPException(401, { message: "Unauthorized" })

	c.set("clerkAuth", authState.toAuth())
	c.set("clerk", clerkClient)

	await next()
})

export const getAuth = (context: Context) => context.get("clerkAuth")
