"use strict";
exports.__esModule = true;
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = (0, express_1.Router)();
// crud routes
router.route("/")
    .post(function (req, res) { return controllers_1.complexController.create(req, res); })
    .get(function (req, res) { return controllers_1.complexController.findAll(req, res); });
router.route("/:id")
    .get(function (req, res) { return controllers_1.complexController.findOne(req, res); })
    .put(function (req, res) { return controllers_1.complexController.updateOne(req, res); })["delete"](function (req, res) { return controllers_1.complexController.deleteOne(req, res); });
exports["default"] = router;
//# sourceMappingURL=complex.routes.js.map