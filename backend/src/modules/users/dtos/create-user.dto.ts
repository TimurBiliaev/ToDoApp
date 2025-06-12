import { IsEmail, IsString, MinLength } from 'class-validator';

export class createUserDTO{
	@IsString()
	name: string;

	@MinLength(6)
	password: string;

	@IsEmail()
	email: string
}