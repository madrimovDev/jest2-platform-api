import { PrismaClient } from "@prisma/client";
import User from "../models/user.model";

export default class UserService {

    constructor(
        private client: PrismaClient
    ) {}

    // create user
    async createUser(user: User) {
        return this.client.user.create({
            data: {
                ...user
            }
        });
    }

    // get user by id
    async getUserById(id: number) {
        return this.client.user.findUnique({ where: { id } })
    }

    // get user by username
    async getUserByUsername(username: string) {
        return this.client.user.findUnique({ where: { username } })
    }

    // get all users
    async getAllUsers() {
        return this.client.user.findMany()
    }

    // update user
    async updateUser(id: number, user: User) {
        return this.client.user.update({
            where: { id },
            data: user
        });
    }
}