"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var role_model_1 = __importDefault(require("./role.model"));
var User = /** @class */ (function () {
    // create fields from prisma model
    function User(id, username, password, name, surname, role) {
        if (id === void 0) { id = undefined; }
        if (role === void 0) { role = role_model_1["default"].USER; }
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.role = role;
    }
    return User;
}());
exports["default"] = User;
//# sourceMappingURL=user.model.js.map