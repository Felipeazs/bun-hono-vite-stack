import { SignIn } from "@clerk/clerk-react"

import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/")({
	component: Index,
})

function Index() {
	return (
		<div className="w-full flex-1 flex items-center justify-center">
			<SignIn forceRedirectUrl="/posts" />
		</div>
	)
}

export default Index
