import { updatePost } from "@/api"
import { insertPostSchema } from "@/server/db/schema"
import { useForm } from "@tanstack/react-form"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { zodValidator } from "@tanstack/zod-form-adapter"
import FieldInfo from "./FieldInfo"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

interface TPost {
	id: number
	post: string
	created_at: string | null
}

const EditarPost = ({ post }: { post: TPost }) => {
	const queryClient = useQueryClient()

	const { mutate: editPost } = useMutation({
		mutationKey: ["update-post"],
		mutationFn: updatePost,
		onError: () => console.log("error"),
		onSuccess: async () => {
			form.reset()
			await queryClient.invalidateQueries({ queryKey: ["get-posts"] })
		},
	})

	const form = useForm({
		validatorAdapter: zodValidator(),
		defaultValues: {
			post: "",
		},
		onSubmit: ({ value }) => {
			editPost({ post: value?.post, id: String(post.id) })
		},
	})

	return (
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
							<Button>Ediar</Button>
						</div>
						<FieldInfo field={field} />
					</>
				)}
			/>
		</form>
	)
}

export default EditarPost
