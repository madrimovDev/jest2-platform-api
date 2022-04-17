"use strict";
exports.__esModule = true;
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = (0, express_1.Router)();
router.post('/login', function (req, res) {
    controllers_1.userController.login(req, res);
});
router.post('/register', function (req, res) {
    controllers_1.userController.register(req, res);
});
exports["default"] = router;
//# sourceMappingURL=user.routes.js.map