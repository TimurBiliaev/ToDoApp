import Button from "../../shared/components/button/button.component";
import { Form, Field } from "react-final-form";
import { Input } from "../../shared/components/input/input.component";
import { createTodo } from "../../shared/services/todos.service";

interface ToDoFormValues{
	title: string,
	text: string
}

const onSubmit = (values: ToDoFormValues) => {
	try {
		createTodo(values)
	} catch (error) {
		console.log(error)
	}
}

const validate = (values: any) => {
	const errors: any = {}
	if (!values.title) {
		errors.title = "Title is requared!"
	}

	if (!values.text) {
		errors.text = "Text is requared!"
	}
	return errors
}



export const TodoForm  = () => (
	<Form
		onSubmit={onSubmit}
		validate={validate}
		render={({ handleSubmit, form }) => (
			<form onSubmit={handleSubmit}>
				<Field name="title">
					  {({ input, meta }) => (
						<Input input={input} meta={meta} />
  						)}

				</Field>

				<Field name="text">
					  {({ input, meta }) => (
    					<Input input={input} meta={meta} />
  						)}
				</Field>

				<button type="submit" >
						Add ToDo
				</button>
			</form>
		)}
	/>
)