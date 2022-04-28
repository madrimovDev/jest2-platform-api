"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.authMiddleware = void 0;
var security_1 = require("../security");
var permissions_json_1 = __importDefault(require("./permissions.json"));
var authMiddleware = function (req, res, next) {
    var path = permissions_json_1["default"].find(function (p) { return new RegExp(p.path).test(req.path); });
    console.log(permissions_json_1["default"][0].path);
    console.log(path);
    if (!path) {
        return res.status(500).send("Path not found: ".concat(req.originalUrl));
    }
    if (!path.role) {
        return next();
    }
    // check if token is not empty
    if (!req.headers.authorization) {
        return res.status(401).json({
            message: "Token is required"
        });
    }
    // check if token is valid
    if (!req.headers.authorization.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Token is invalid"
        });
    }
    // get payload from token
    var token = req.headers.authorization.split(" ")[1];
    try {
        var payload = (0, security_1.verify)(token);
        // check if payload is valid
        if (!payload) {
            return res.status(401).json({
                message: "Token is invalid"
            });
        }
        console.log(payload.role, path.role);
        if (path.role !== payload.role) {
            return res.status(401).json({
                message: "You don't have permission to access this resource"
            });
        }
        // add payload to request
        req.payload = payload;
        next();
    }
    catch (err) {
        res.status(401).send({
            message: 'session expired',
            error: err
        });
    }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map