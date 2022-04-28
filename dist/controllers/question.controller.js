"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var QuestionController = /** @class */ (function () {
    function QuestionController(questionService) {
        this.questionService = questionService;
    }
    // add questions by set id
    QuestionController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var cid, questions;
            return __generator(this, function (_a) {
                cid = +req.params.cid;
                questions = req.body;
                // add questions with create question function
                this.questionService.createMany(cid, questions)
                    .then(function (questions) {
                    res.status(200).json({
                        message: "Questions added successfully",
                        questions: questions
                    });
                })["catch"](function (err) {
                    res.status(500).json({
                        message: "Error adding questions",
                        error: err
                    });
                    console.error(err);
                });
                return [2 /*return*/];
            });
        });
    };
    // async addQuestion(req: Request, res: Response) {
    //     let complexId = +req.params.id
    //     let question: QuestionWithVariants = req.body
    //     question.complexId = complexId
    //     // add question to database
    //     this.questionService.createQuestion(question)
    //         .then(question => {
    //             res.json({
    //                 message: "Question retrieved",
    //                 question
    //             })
    //         })
    //         .catch(err => {
    //             res.status(500).json({
    //                 message: "Error retrieving question",
    //                 error: err
    //             })
    //         })
    // }
    QuestionController.prototype.findAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var cid;
            return __generator(this, function (_a) {
                cid = +req.params.cid;
                // get questions from database
                this.questionService.findAll(cid)
                    .then(function (questions) {
                    res.json({
                        message: "Questions retrieved",
                        questions: questions
                    });
                })["catch"](function (err) {
                    res.status(500).json({
                        message: "Error retrieving questions",
                        error: err
                    });
                    console.error(err);
                });
                return [2 /*return*/];
            });
        });
    };
    // update questions by set id
    QuestionController.prototype.updateAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var cid, questions;
            return __generator(this, function (_a) {
                cid = +req.params.cid;
                questions = req.body;
                // update questions in database
                this.questionService.updateMany(cid, questions)
                    .then(function (questions) {
                    res.json({
                        message: "Questions updated successfully",
                        questions: questions
                    });
                })["catch"](function (err) {
                    res.status(500).json({
                        message: "Error updating questions",
                        error: err
                    });
                    console.error(err);
                });
                return [2 /*return*/];
            });
        });
    };
    QuestionController.prototype.updateOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var question;
            return __generator(this, function (_a) {
                question = req.body;
                // update question in database
                this.questionService.updateOne(question)
                    .then(function (question) {
                    res.json({
                        message: "Question updated",
                        question: question
                    });
                })["catch"](function (err) {
                    res.status(500).json({
                        message: "Error updating question",
                        error: err
                    });
                    console.error(err);
                });
                return [2 /*return*/];
            });
        });
    };
    QuestionController.prototype.deleteOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var questionId;
            return __generator(this, function (_a) {
                questionId = +req.params.id;
                // delete question from database
                this.questionService.deleteOne(questionId)
                    .then(function () {
                    res.json({
                        message: "Question deleted"
                    });
                })["catch"](function (err) {
                    res.status(500).json({
                        message: "Error deleting question",
                        error: err
                    });
                    console.error(err);
                });
                return [2 /*return*/];
            });
        });
    };
    // // get question by id
    // async getQuestion(req: Request, res: Response) {
    //     let questionId = +req.params.id
    //     // get question from database
    //     this.questionService.getQuestion(questionId)
    //         .then(question => {
    //             res.json({
    //                 message: "Question retrieved",
    //                 question
    //             })
    //         })
    //         .catch(err => {
    //             res.status(500).json({
    //                 message: "Error retrieving question",
    //                 error: err
    //             })
    //         })
    // }
    // delete questions by set id
    QuestionController.prototype.deleteMany = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // delete questions from database
                this.questionService.deleteMany(req.body)
                    .then(function () {
                    res.json({
                        message: "Questions deleted"
                    });
                })["catch"](function (err) {
                    res.status(500).json({
                        message: "Error deleting questions",
                        error: err
                    });
                    console.error(err);
                });
                return [2 /*return*/];
            });
        });
    };
    return QuestionController;
}());
exports["default"] = QuestionController;
//# sourceMappingURL=question.controller.js.map