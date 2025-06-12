import { Injectable } from '@nestjs/common';


@Injectable()
export class TodosService {
	private toDoList: string[] = []

	getAll() {
		return (this.toDoList);
	}

	createNewTodo(title: string) {
		this.toDoList.push(title);
		return {
			message: "Created",
			toDo: title,
		}
	}

	putTodo(index: number, newTitle: string) {
		this.toDoList[index] = newTitle;
		return {
			message: "updated",
			toDo: this.toDoList[index],
		}
	}
	
	deleteTodo(index: number) {
		delete this.toDoList[index]
		this.toDoList = this.toDoList.filter((n) => {return n != undefined})

		return {
			message: "deleted",
			toDoS: this.toDoList
		}
	}
}
