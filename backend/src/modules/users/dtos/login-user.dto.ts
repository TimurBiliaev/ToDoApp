import { IsString, MinLength } from "class-validator";

export class loginUserDTO{

	@IsString()
	name: string;

	@MinLength(6)
	password: string;
}