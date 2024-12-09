import { UserButton } from "@clerk/clerk-react"
import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/_authenticated/_layout")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="w-full flex-1 flex flex-col items-center justify-center">
			<UserButton />
			<Outlet />
		</div>
	)
}
