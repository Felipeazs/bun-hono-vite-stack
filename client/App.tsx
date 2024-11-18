import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import "./App.css"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"

import { getPosts } from "@/api"

function App() {
	const [recall, setRecall] = useState<boolean>(true)

	const { data: posts, isFetching } = useQuery({
		queryKey: ["posts"],
		queryFn: async () => {
			const res = await getPosts()
			setRecall(false)

			return res
		},
		enabled: recall,
	})

	return (
		<>
			<div className="flex justify-center gap-10">
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
			<h1>Vite + React</h1>
			<div className="card">
				{isFetching ? (
					<p>API calling...</p>
				) : (
					<p>Respuesta: {posts?.map((p) => <span key={p.id}>{p.post}</span>)} </p>
				)}
				<button onClick={() => setRecall(true)}>Recall</button>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	)
}

export default App
