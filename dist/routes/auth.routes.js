"use strict";
exports.__esModule = true;
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = (0, express_1.Router)();
router.post('/login', controllers_1.userController.login);
router.post('/register', controllers_1.userController.register);
exports["default"] = router;
//# sourceMappingURL=auth.routes.js.map