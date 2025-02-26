import { getPost } from "@/api"
import EditarPost from "@/components/EditarPost"
import { buttonVariants } from "@/components/ui/button"
import { useQuery } from "@tanstack/react-query"
import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/_authenticated/_layout/posts_/$id")({
	loader: ({ params }) => {
		console.log(params.id)
	},
	component: RouteComponent,
})

function RouteComponent() {
	const { id } = Route.useParams()
	const { data } = useQuery({
		queryKey: ["get-post", id],
		queryFn: async () => await getPost(id),
		staleTime: Infinity,
	})

	return (
		<div className="h-dvh">
			<p>Editar Post {id}</p>
			<div className="grid grid-cols-2 grid-rows-3">
				<div>
					<p>Id</p>
					<p>Post</p>
					<p>Created at:</p>
				</div>
				<div>
					<p>{data?.post.id}</p>
					<EditarPost post={data?.post!} />
					<p>{data?.post.created_at}</p>
				</div>
			</div>
			<Link
				to="/posts"
				className={buttonVariants({
					size: "sm",
					variant: "outline",
				})}>
				Volver
			</Link>
		</div>
	)
}
