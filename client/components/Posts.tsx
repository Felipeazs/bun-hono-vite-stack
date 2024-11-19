import { getPosts } from "@/api"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import CreatePost from "./CreatePost"
import { Button } from "./ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const Posts = () => {
	const [recall, setRecall] = useState<boolean>(true)

	const { data, isFetching, refetch } = useQuery({
		queryKey: ["posts"],
		queryFn: async () => {
			const res = await getPosts()
			setRecall(false)

			return res
		},
		enabled: recall,
	})
	return (
		<div className="flex flex-col gap-5">
			{isFetching ? (
				<p>API calling...</p>
			) : (
				<div>
					Respuesta:
					<Table className="text-center">
						<TableHeader>
							<TableRow>
								<TableHead>Posts</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{data?.posts.length ? (
								data.posts.map((p) => (
									<TableRow>
										<TableCell key={p.id}> {p.post}</TableCell>
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
			)}
			<Button
				variant="outline"
				onClick={() => setRecall(true)}>
				Get Posts
			</Button>
			<CreatePost refetch={refetch} />
		</div>
	)
}

export default Posts
