"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.sessionService = exports.questionService = exports.setService = exports.userService = void 0;
var client_1 = require("@prisma/client");
var question_service_1 = __importDefault(require("./question.service"));
var session_service_1 = require("./session.service");
var complex_service_1 = __importDefault(require("./complex.service"));
var user_service_1 = __importDefault(require("./user.service"));
var client = new client_1.PrismaClient();
exports.userService = new user_service_1["default"](client);
exports.setService = new complex_service_1["default"](client);
exports.questionService = new question_service_1["default"](client);
exports.sessionService = new session_service_1.SessionService(client);
//# sourceMappingURL=index.js.map