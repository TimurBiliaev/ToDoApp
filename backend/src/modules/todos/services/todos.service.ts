import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service'; 

@Injectable()
export class TodosService {
	constructor (private prisma: PrismaService){}

	getAllTodos() {
		const todos = this.prisma.todo.findMany()
		if (!todos[0]) {
			return {message: "todos is clesar!"}
		}
		return todos
	}

	createNewTodo(title: string, text: string) {
		try {			
			 return this.prisma.todo.create({
				data: {
					title: title,
					text: text,
					isActive: true
				}
			}
			); 
			
		} catch (error) {    
			return { message: "Something went wrong!" }
		}
	}

	async putTodo(index: number, newTitle: string, newText: string) {
		try {
			return await this.prisma.todo.update({
				where: { id: index },
				data: {title: newTitle, text: newText}
			})
		} catch (error) {
			return {message: "something wenr wrong!"}
		}
	}
	
	deleteTodo(index: number) {
		try {
			return this.prisma.todo.delete({
				where: {id: index}
			})
		} catch (error) {
			return{message: "something went wrong"}
		}
	}
}
