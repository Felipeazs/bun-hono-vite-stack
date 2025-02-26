import { createFileRoute, Link } from "@tanstack/react-router"

import Posts from "@/components/Posts"
import { buttonVariants } from "@/components/ui/button"

export const Route = createFileRoute("/_authenticated/_layout/posts")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="w-full flex-1 flex flex-col items-center justify-center">
			<div className="flex flex-col items-center justify-center gap-10 p-10">
				<Posts />
				<Link
					to="/"
					className={buttonVariants({
						size: "sm",
						variant: "outline",
					})}>
					Volver
				</Link>
			</div>
		</div>
	)
}
