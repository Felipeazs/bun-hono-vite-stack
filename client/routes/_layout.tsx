import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout")({
	component: LayoutComponent,
})

function LayoutComponent() {
	return (
		<>
			<p>Navbar</p>
			<Outlet />
			<p>Footer</p>
		</>
	)
}
