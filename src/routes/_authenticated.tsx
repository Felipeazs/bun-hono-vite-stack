import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react"
import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/_authenticated")({
	loader: () => {
		console.log("authenticating...")
	},
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="w-full flex-1 flex flex-col gap-5 items-center justify-center">
			<SignedOut>
				<SignIn />
			</SignedOut>
			<SignedIn>
				<Outlet />
			</SignedIn>
		</div>
	)
}
