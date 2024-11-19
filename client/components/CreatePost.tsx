import { useForm } from "@tanstack/react-form"
import { zodValidator } from "@tanstack/zod-form-adapter"

import { createPost } from "@/api"
import { insertPostSchema } from "@/server/db/schema"
import { useMutation } from "@tanstack/react-query"
import FieldInfo from "./FieldInfo"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const CreatePost = ({ refetch }: { refetch: () => void }) => {
	const mutation = useMutation({
		mutationKey: ["Create-post"],
		mutationFn: createPost,
		onSuccess: () => {
			refetch()
		},
	})
	const form = useForm({
		validatorAdapter: zodValidator(),
		defaultValues: {
			post: "",
		},
		onSubmit: ({ value }) => {
			console.log(value)

			mutation.mutate(value)
			form.reset()
		},
	})

	return (
		<div>
			<h1>Crear Post</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					e.stopPropagation()
					form.handleSubmit()
				}}>
				<form.Field
					name="post"
					validators={{ onChange: insertPostSchema.shape.post }}
					children={(field) => (
						<>
							<div className="flex gap-2">
								<Input
									value={field.state.value}
									placeholder={field.name}
									onChange={(e) => field.handleChange(e.target.value)}
								/>
								<Button>Crear</Button>
							</div>
							<FieldInfo field={field} />
						</>
					)}
				/>
			</form>
		</div>
	)
}

export default CreatePost