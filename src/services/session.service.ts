import { Answer, PrismaClient, Session } from "@prisma/client";
import SessionWithComplex from "../models/session.model";

const includeOptions = {
    complex: {
        include: {
            questions: {
                include: {
                    variants: true
                }
            }
        }
    }
}

export class SessionService {

    constructor(private client: PrismaClient) {}

    async findSessionByPath(path: string) {
        let session = await this.client.session.findUnique({
            where: {
                path: path
            },
            include: includeOptions
        }) as SessionWithComplex | null;

        if (!session) {
            throw new Error("Session not found");
        }

        return this.mapSession;
    }

    async completeSession(sessionId: number, answers: Answer[]) {
        return await this.client.session.update({
            where: {
                id: sessionId
            },
            data: {
                completed: true,
                endTime: new Date(),
                answers: {
                    create: answers
                }
            }
        });
    }

    async getSession(sessionId: number) {
        let session = await this.client.session.findUnique({
            where: {
                id: sessionId
            },
            include: includeOptions
        });
        return this.mapSession(session as SessionWithComplex);
    }

    async getSessions() {
        return await this.client.session.findMany()
    }

    async createSession(session: Session) {
        let newSession = await this.client.session.create({
            data: {
                user: session.user,
                complexId: session.complexId,
                startTime: session.startTime,
            },
            include: includeOptions
        });
        return this.mapSession(newSession as SessionWithComplex);
    }

    private mapSession(session: SessionWithComplex) {

        let time = new Date().getTime() - session.startTime.getTime()!;
        let remainingTime = session.complex.time.getTime() - time;

        session.expired = remainingTime > 0
        session.remainingTime = remainingTime;

        return session;
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