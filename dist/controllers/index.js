"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.sessionController = exports.questionController = exports.setController = exports.userController = void 0;
var services_1 = require("../services");
var question_controller_1 = __importDefault(require("./question.controller"));
var session_controller_1 = __importDefault(require("./session.controller"));
var set_controller_1 = __importDefault(require("./set.controller"));
var user_controller_1 = __importDefault(require("./user.controller"));
exports.userController = new user_controller_1["default"](services_1.userService);
exports.setController = new set_controller_1["default"](services_1.setService);
exports.questionController = new question_controller_1["default"](services_1.questionService);
exports.sessionController = new session_controller_1["default"](services_1.sessionService);
//# sourceMappingURL=index.js.map