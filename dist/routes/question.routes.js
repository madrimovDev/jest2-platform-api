"use strict";
exports.__esModule = true;
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = (0, express_1.Router)();
// create crud routes
router.route('/:cid/question')
    .post(function (req, res) { return controllers_1.questionController.create(req, res); })
    .get(function (req, res) { return controllers_1.questionController.findAll(req, res); })
    .put(function (req, res) { return controllers_1.questionController.updateAll(req, res); })["delete"](function (req, res) { return controllers_1.questionController.deleteMany(req, res); });
router.route('/:cid/question/:id')
    .post(function (req, res) { return controllers_1.questionController.create(req, res); })
    .get(function (req, res) { return controllers_1.questionController.findAll(req, res); })
    .put(function (req, res) { return controllers_1.questionController.updateAll(req, res); })["delete"](function (req, res) { return controllers_1.questionController.deleteOne(req, res); });
exports["default"] = router;
//# sourceMappingURL=question.routes.js.map