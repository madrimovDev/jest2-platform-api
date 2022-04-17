"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.verify = exports.sign = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// jwt sign function
function sign(user, expiresIn) {
    console.log(user.role);
    var payload = {
        username: user.username,
        userId: user.id,
        role: user.role
    };
    return jsonwebtoken_1["default"].sign(payload, process.env.JWT_SECRET, { expiresIn: expiresIn });
}
exports.sign = sign;
function verify(token) {
    return jsonwebtoken_1["default"].verify(token, process.env.JWT_SECRET);
}
exports.verify = verify;
//# sourceMappingURL=index.js.map