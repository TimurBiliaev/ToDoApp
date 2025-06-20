import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as jwt from "jsonwebtoken";

async function hashPassword(plainPassword: string): Promise<string> {
  const saltRounds = 10; 
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}

async function checkPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) { }
	
	async registerUser(data: { name: string, email: string, password: string }) {
		
		data.password = await hashPassword(data.password);

		try {
			return this.prisma.user.create(
			{
				data,
			}
			);
		} catch (error) {

			return { message: "Something went wrong!" }
			
		}

	
	}

	async login(name: string, password: string) {
		try {
			const user = await this.prisma.user.findFirst({
				where: {
					name: name,
				}
			});

			if (!user) {
				return {message: "please check data!"}	
			}

			const passwordIsManch = await checkPassword(password, user.password);

			if (!passwordIsManch) {
				return {message: "Wrong password!"}
			}

			return {
				message: "Auth success"
			}
			
		} catch (error) {
			return {
				message: "Something went wrong!"
			}
		}
	}

	forgotPassword() {
		return {
			undefined
		}
	}

	confirmForgot() {
		return undefined
	}

	checkAuth() {
		return undefined
	}


}
