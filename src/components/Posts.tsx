import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Link } from "@tanstack/react-router"

import { getPosts } from "../api"
import CreatePost from "./CreatePost"
import { Button, buttonVariants } from "./ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const Posts = () => {
	const queryClient = useQueryClient()

	const { data, isFetching } = useQuery({
		queryKey: ["get-posts"],
		queryFn: getPosts,
		staleTime: Infinity,
	})

	return (
		<div className="flex flex-col gap-5">
			<div>
				Respuesta:
				<Table className="">
					<TableHeader>
						<TableRow>
							<TableHead>id</TableHead>
							<TableHead>Posts</TableHead>
							<TableHead>Created at</TableHead>
							<TableHead></TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{data?.posts?.length ? (
							data.posts.map((p) => (
								<TableRow key={p.id}>
									<TableCell>{p.id}</TableCell>
									<TableCell>{p.post}</TableCell>
									<TableCell>{p.created_at?.substring(0, 10)}</TableCell>
									<TableCell>
										<Link
											to={`/posts/${p.id}`}
											className={buttonVariants({
												size: "sm",
												variant: "outline",
											})}>
											Editar
										</Link>
									</TableCell>
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell>
									<span>No Posts to show</span>
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<Button
				variant="outline"
				onClick={async () =>
					await queryClient.invalidateQueries({ queryKey: ["get-posts"] })
				}>
				{isFetching ? "Fetching posts..." : "Get posts"}
			</Button>
			<CreatePost />
		</div>
	)
}

export default Posts
