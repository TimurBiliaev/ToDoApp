import { post, get, put, del} from "./http.service";

const module = "todos/";

const todoRoutes = {
	module,
	create: `${module}createToDo`,
}


export async function getTodos() {
	const responce = await get(todoRoutes.module);

	return {
		message: responce,
	}
}

export async function createTodo(data: unknown) {

	const responce = await post(todoRoutes.create, data);

	return {
		message: responce,
	}
}


export async function updateTodo(data: unknown, params?: Record<string, string | number>) {

	const responce = await put(todoRoutes.module, data, params)

	return {
		message : responce,
	}
}

export async function deleteTodo(params?: Record<string, string | number>) {
	const responce = await del(todoRoutes.module, params);

	return {
		message : responce
	}
}
