import { SignedIn, UserButton } from "@clerk/clerk-react"

const Navbar = () => {
	return (
		<div className="flex justify-end w-full p-5">
			<SignedIn>
				<UserButton />
			</SignedIn>
		</div>
	)
}

export default Navbar
