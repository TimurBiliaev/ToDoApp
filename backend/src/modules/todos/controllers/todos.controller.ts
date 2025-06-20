import { Controller } from '@nestjs/common';
import { Param, Body, Get, Post, Put, Delete } from '@nestjs/common/decorators';
import { response } from 'express';
import { TodosService } from '../services/todos.service';
import { createToDoDTO, updateToDoDto } from '../dtos/create-todo.dto';

@Controller('todos')
export class TodosController {
	constructor(private readonly todosService: TodosService){}

	@Get()
	getAllTodos() {
		return this.todosService.getAllTodos();
	}

	@Post('/createToDo')
	createToDo(@Body() createToDo: createToDoDTO) {
		return this.todosService.createNewTodo(createToDo.title, createToDo.text);
	}

	@Put(':id')
	updateToDo(@Param('id') id: string, @Body() updateTodo: updateToDoDto) {
		const index = parseInt(id, 10)
		return this.todosService.putTodo(index, updateTodo.newTitle, updateTodo.newText)
	}

	@Delete(':id')
	deleteToDo(@Param('id') id: string) {
		const index = parseInt(id, 10);
		return this.todosService.deleteTodo(index);
	}
}
