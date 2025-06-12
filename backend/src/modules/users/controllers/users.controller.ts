import { Controller } from '@nestjs/common';
import { Param, Body, Get, Post, Put, Delete } from '@nestjs/common/decorators';
import { UsersService } from '../services/users.service';
import { createUserDTO } from '../dtos/create-user.dto';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) { };

	@Post()
	createUser(@Body() createUser: createUserDTO) {
		return {
			user_data: {
				name: createUser.name,
				email: createUser.email
			},
			message: "User created"
		}
	}

	@Get()
	getAllUsers() {
		return {
			message: "hello"
		}
	}
}
