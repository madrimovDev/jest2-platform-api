import { PrismaClient } from "@prisma/client";
import QuestionService from "./question.service";
import { SessionService } from "./session.service";
import SetService from "./set.service";
import UserService from "./user.service";

const client: PrismaClient = new PrismaClient();

export const userService = new UserService(client);
export const setService = new SetService(client);
export const questionService = new QuestionService(client);
export const sessionService = new SessionService(client);