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
		<>
			<SignedOut>
				<SignIn />
			</SignedOut>
			<SignedIn>
				<Outlet />
			</SignedIn>
		</>
	)
}
