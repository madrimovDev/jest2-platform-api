import { PrismaClient, Complex, Prisma } from "@prisma/client";
export default class SetService {

    constructor(private client: PrismaClient) {}

    async findAll(userId: number) {
        return await this.client.complex.findMany({
            where: {
                userId: userId
            }
        })
    }

    // get one set
    async findOne(complexId: number) {
        return await this.client.complex.findUnique({
            where: {
                id: complexId,
            },
            include: {
                questions: {
                    include: {
                        variants: true
                    }
                }
            }
        })
    }

    async createOne(complex: Complex) {
        return await this.client.complex.create({
            data: {
                name: complex.name,
                user: {
                    connect: {
                        id: complex.userId
                    }
                },
                time: new Date(complex.time),
                path: complex.path
            }
        })
    }

    // eEEupdate set
    async updateOne(complex: Complex) {
        return await this.client.complex.update({
            where: {
                id: complex.id
            },
            data: {
                name: complex.name,
                path: complex.path,
                time: new Date(complex.time),
            }
        })
    }

    async deleteOne(complexId: number) {
        return await this.client.complex.delete({
            where: {
                id: complexId
            }
        })
    }
}