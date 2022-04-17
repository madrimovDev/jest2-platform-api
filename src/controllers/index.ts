import { questionService, sessionService, setService, userService } from "../services";
import QuestionController from "./question.controller";
import SessionController from "./session.controller";
import SetController from "./set.controller";
import UserController from "./user.controller";

export const userController = new UserController(userService);
export const setController = new SetController(setService);
export const questionController = new QuestionController(questionService);
export const sessionController = new SessionController(sessionService);