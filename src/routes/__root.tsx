import { createRootRouteWithContext, Outlet, ScrollRestoration } from "@tanstack/react-router"
import { QueryClient } from "@tanstack/react-query"

interface MyRouterContext {
	queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	component: () => (
		<>
			<ScrollRestoration />
			<div className="min-h-[calc(100vh-1px)] flex flex-col font-sans bg-brand-50 text-brand-950 antialiased">
				<main className="relative flex-1 flex flex-col">
					<Outlet />
				</main>
			</div>
		</>
	),
})
