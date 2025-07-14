import { Controller } from '@nestjs/common';
import { Param, Body, Get, Post, Put, Delete } from '@nestjs/common/decorators';
import { response } from 'express';
import { TodosService } from '../services/todos.service';
import { createToDoDTO, updateToDoDto } from '../dtos/create-todo.dto';
import { TodosRoutes } from '../todos.constants';

@Controller(TodosRoutes.MODULE)
export class TodosController {
	constructor(private readonly todosService: TodosService){}

	@Get(TodosRoutes.GET_FILTERED)
	getAllTodos() {
		return this.todosService.getAllTodos();
	}

	@Post(TodosRoutes.CREATE_TODO)
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
