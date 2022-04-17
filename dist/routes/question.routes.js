"use strict";
exports.__esModule = true;
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = (0, express_1.Router)();
// create crud routes
router.route('/:setId')
    .post(function (req, res) { return controllers_1.questionController.addQuestionsBySet(req, res); })
    .get(function (req, res) { return controllers_1.questionController.getQuestions(req, res); });
router.route('/:setId/:id')
    .get(function (req, res) { return controllers_1.questionController.getQuestion(req, res); })
    .put(function (req, res) { return controllers_1.questionController.updateQuestionsBySet(req, res); })["delete"](function (req, res) { return controllers_1.questionController.deleteQuestion(req, res); });
exports["default"] = router;
//# sourceMappingURL=question.routes.js.map