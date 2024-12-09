import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createRouter, RouterProvider } from "@tanstack/react-router"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ClerkProvider } from "@clerk/clerk-react"
import "./index.css"

import NotFound from "@/components/NotFound.tsx"
import { routeTree } from "@/routeTree.gen.ts"

const queryClient = new QueryClient()

const router = createRouter({
	routeTree,
	context: { queryClient },
	defaultStaleTime: Infinity,
	defaultPreload: "intent",
	defaultNotFoundComponent: NotFound,
})

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router
	}
}

function MainApp() {
	return <RouterProvider router={router} />
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ClerkProvider
				publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
				afterSignOutUrl="/">
				<MainApp />
			</ClerkProvider>
		</QueryClientProvider>
	</StrictMode>,
)
