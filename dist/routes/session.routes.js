"use strict";
exports.__esModule = true;
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = (0, express_1.Router)();
// get all sessions | for admin
router.get('/', function (req, res) { return controllers_1.sessionController.findAll(req, res); });
// create new session
router.post('/start', function (req, res) { return controllers_1.sessionController.create(req, res); });
// get session by id
router.get('/:id', function (req, res) { return controllers_1.sessionController.findOne(req, res); });
// complete session
router.put('/:id', function (req, res) { return controllers_1.sessionController.complete(req, res); });
exports["default"] = router;
//# sourceMappingURL=session.routes.js.map