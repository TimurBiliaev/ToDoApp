import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

			ignoreExpiration: false,

			secretOrKey: process.env.SECRET_KEY || "default_jwt"
		});
	}

	async validate(payload: any) {
		return {
			userId: payload.id,
			userName: payload.name,
		}
	}
}