import { createFileRoute } from "@tanstack/react-router"
import reactLogo from "../../assets/react.svg"
import viteLogo from "/vite.svg"

import Posts from "@/components/Posts"

export const Route = createFileRoute("/_authenticated/_layout/posts")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="flex flex-col items-center justify-center gap-10 p-10">
			<div className="flex gap-5">
				<a
					href="https://vite.dev"
					target="_blank">
					<img
						src={viteLogo}
						className="logo"
						alt="Vite logo"
					/>
				</a>
				<a
					href="https://react.dev"
					target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<Posts />
		</div>
	)
}
