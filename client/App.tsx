import { useState } from "react"
import "./App.css"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import { useQuery } from "@tanstack/react-query"
import { getPosts } from "@/api"

function App() {
	const [count, setCount] = useState(0)

	const { data: posts, isLoading } = useQuery({
		queryKey: ["posts"],
		queryFn: getPosts,
	})

	return (
		<>
			<div>
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
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				{isLoading ? (
					<p>API calling...</p>
				) : (
					<p>Respuesta: {posts?.map((p) => <span>{p.post}</span>)} </p>
				)}
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	)
}

export default App
