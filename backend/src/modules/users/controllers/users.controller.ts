import { Controller } from '@nestjs/common';
import { Param, Body, Get, Post, Put, Delete } from '@nestjs/common/decorators';
import { UsersService } from '../services/users.service';
import { createUserDTO } from '../dtos/create-user.dto';
import { loginUserDTO } from '../dtos/login-user.dto';


@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) { };

	@Post()
	createUser(@Body() createUser: createUserDTO) {
		return this.usersService.registerUser(createUser);
	}

	@Post('login')
	loginUser(@Body() loginUser: loginUserDTO) {
		return this.usersService.login(loginUser.name, loginUser.password);
	}	

	@Get()
	getAllUsers() {
		return {
			message: "hello"
		}
	}
}
