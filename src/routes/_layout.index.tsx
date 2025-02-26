import { buttonVariants } from "@/components/ui/button"
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react"
import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/")({
	component: Index,
})

function Index() {
	return (
		<div className="w-full flex-1 flex flex-col gap-5 items-center justify-center">
			<h1 className="text-xl font-bold">Hono Vite React Boilerplate</h1>
			<SignedIn>
				<div className="flex flex-col justify-center items-center gap-5">
					<UserButton />
					<Link
						to="/posts"
						className={buttonVariants({
							size: "sm",
							variant: "outline",
						})}>
						ir a los posts
					</Link>
				</div>
			</SignedIn>
			<SignedOut>
				<SignIn />
			</SignedOut>
		</div>
	)
}

export default Index
