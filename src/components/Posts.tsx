import { getPosts } from "../api"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Button } from "./ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

import CreatePost from "./CreatePost"

const Posts = () => {
	const queryClient = useQueryClient()

	const { data, isFetching } = useQuery({
		queryKey: ["get-posts"],
		queryFn: async () => {
			const res = await getPosts()

			return res
		},
		staleTime: Infinity,
	})

	if (isFetching) {
		return <p>Fetching posts...</p>
	}

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
						</TableRow>
					</TableHeader>
					<TableBody>
						{data?.posts?.length ? (
							data.posts.map((p) => (
								<TableRow key={p.id}>
									<TableCell>{p.id}</TableCell>
									<TableCell>{p.post}</TableCell>
									<TableCell>{p.created_at?.substring(0, 10)}</TableCell>
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell>
									<span> No Posts to show</span>
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
				Get Posts
			</Button>
			<CreatePost />
		</div>
	)
}

export default Posts
