import { PrismaClient, Set } from "@prisma/client";
export default class SetService {

    constructor(private client: PrismaClient) {}

    async getSets(userId: number) {
        return await this.client.set.findMany({
            where: {
                userId: userId
            }
        })
    }

    // get one set
    async getSet(setId: number) {
        return await this.client.set.findUnique({
            where: {
                id: setId,
            }
        })
    }

    async addSet(set: Set) {
        return await this.client.set.create({
            data: {
                name: set.name,
                userId: set.userId
            }
        })
    }

    // update set
    async updateSet(set: Set) {
        return await this.client.set.update({
            where: {
                id: set.id
            },
            data: {
                name: set.name,
            }
        })
    }

    async deleteSet(setId: number) {
        return await this.client.set.delete({
            where: {
                id: setId
            }
        })
    }
}