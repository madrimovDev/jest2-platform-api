import { PrismaClient, Session } from "@prisma/client";

export class SessionService {

    constructor(private client: PrismaClient) {}

    async getSession(sessionId: number) {
        return await this.client.session.findUnique({
            where: {
                id: sessionId
            }
        });
    }

    async getSessions() {
        return await this.client.session.findMany();
    }

    async createSession(session: Session) {
        return await this.client.session.create({
            data: {
                user: session.user,
                setId: session.setId
            }
        });
    }

    async updateSession(id: number, session: Session) {
        return await this.client.session.update({
            where: {
                id
            },
            data: {
                endTime: session.endTime,
                completed: session.completed
            }
        });
    }

    async deleteSession(sessionId: number) {
        return await this.client.session.delete({
            where: {
                id: sessionId
            }
        });
    }
}