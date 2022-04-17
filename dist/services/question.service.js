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
var QuestionService = /** @class */ (function () {
    function QuestionService(prisma) {
        this.prisma = prisma;
    }
    QuestionService.prototype.updateQuestionsBySet = function (setId, questions) {
        return this.prisma.question.updateMany({
            where: {
                setId: setId
            },
            data: questions.map(function (question) {
                return {
                    text: question.text
                };
            })
        });
    };
    QuestionService.prototype.addVariants = function (questionId, variants) {
        return this.prisma.variant.createMany({
            data: variants.map(function (variant) {
                return {
                    questionId: questionId,
                    text: variant.text,
                    isCorrect: variant.isCorrect
                };
            })
        });
    };
    QuestionService.prototype.addQuestionsBySet = function (setId, questions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var array, _i, questions_1, question, newQuestion, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    array = [];
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 6, , 7]);
                                    _i = 0, questions_1 = questions;
                                    _a.label = 2;
                                case 2:
                                    if (!(_i < questions_1.length)) return [3 /*break*/, 5];
                                    question = questions_1[_i];
                                    question.setId = setId;
                                    return [4 /*yield*/, this.createQuestion(question)];
                                case 3:
                                    newQuestion = _a.sent();
                                    array.push(newQuestion);
                                    _a.label = 4;
                                case 4:
                                    _i++;
                                    return [3 /*break*/, 2];
                                case 5:
                                    resolve(array);
                                    return [3 /*break*/, 7];
                                case 6:
                                    err_1 = _a.sent();
                                    reject(err_1);
                                    return [3 /*break*/, 7];
                                case 7: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    QuestionService.prototype.getQuestions = function (setId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.question.findMany({
                            where: {
                                setId: setId
                            },
                            include: {
                                variants: true
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    QuestionService.prototype.getQuestion = function (questionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.question.findUnique({
                            where: {
                                id: questionId
                            },
                            include: {
                                variants: true
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    QuestionService.prototype.createQuestion = function (question) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.question.create({
                            data: {
                                text: question.text,
                                setId: question.setId,
                                variants: {
                                    createMany: {
                                        data: question.variants.map(function (variant) {
                                            return {
                                                text: variant.text,
                                                isCorrect: variant.isCorrect
                                            };
                                        })
                                    }
                                }
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    QuestionService.prototype.updateQuestion = function (question) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.question.update({
                            where: {
                                id: question.id
                            },
                            data: {
                                text: question.text
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    QuestionService.prototype.deleteQuestion = function (questionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.question["delete"]({
                            where: {
                                id: questionId
                            },
                            include: {
                                variants: true
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    QuestionService.prototype.deleteQuestionsBySet = function (setId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.question.deleteMany({
                            where: {
                                setId: setId
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return QuestionService;
}());
exports["default"] = QuestionService;
//# sourceMappingURL=question.service.js.map