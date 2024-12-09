import { Link } from "@tanstack/react-router"
import { Button } from "./ui/button"

const NotFound = () => {
	return (
		<div className="flex flex-col gap-5 justify-center items-center p-20 h-[800px] md:h-screen text-black">
			<h1 className="text-4xl">Página no encontrada!</h1>
			<div>
				<Link to="/">
					<Button>Volver</Button>
				</Link>
			</div>
		</div>
	)
}

export default NotFound
