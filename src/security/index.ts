import { User } from "@prisma/client";
import { Payload } from "../models/payload.model";
import Role from "../models/role.model";
import jwt from "jsonwebtoken"

// jwt sign function
export function sign(user: User, expiresIn?: string) {

    console.log(user.role);

    const payload: Payload = {
        username: user.username,
        userId: user.id,
        role: user.role as Role
    };

    return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn });
}

export function verify(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET!) as Payload;
}