import { questionService, sessionService, setService as complexService, userService } from "../services";
import QuestionController from "./question.controller";
import SessionController from "./session.controller";
import ComplexController from "./complex.controller";
import UserController from "./user.controller";

export const userController = new UserController(userService);
export const complexController = new ComplexController(complexService);
export const questionController = new QuestionController(questionService);
export const sessionController = new SessionController(sessionService);