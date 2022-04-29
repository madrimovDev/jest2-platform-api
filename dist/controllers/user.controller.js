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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var security_1 = require("../security");
var user_model_1 = __importDefault(require("../models/user.model"));
var UserController = /** @class */ (function () {
    function UserController(userService) {
        this.userService = userService;
    }
    UserController.prototype.login = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, username, password, user, token, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, username = _a.username, password = _a.password;
                        // check if username and password is not empty
                        if (!username || !password) {
                            return [2 /*return*/, res.status(400).json({
                                    message: "Username and password are required"
                                })];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.userService.getUserByUsername(username)];
                    case 2:
                        user = _b.sent();
                        // check if user exists
                        if (!user) {
                            return [2 /*return*/, res.status(400).json({
                                    message: "User does not exist"
                                })];
                        }
                        // check if password is correct
                        if (!bcryptjs_1["default"].compareSync(password, user.password)) {
                            return [2 /*return*/, res.status(400).json({
                                    message: "Password is incorrect"
                                })];
                        }
                        token = (0, security_1.sign)(user, '2h');
                        res.json({
                            message: "Login successful",
                            username: user.username,
                            name: user.name,
                            surname: user.surname,
                            token: token
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        res.status(500).send({
                            message: 'Error process login',
                            error: err_1
                        });
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // register a new user
    UserController.prototype.register = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var oldUser, salt, hashedPassword, user, newUser, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // check if body is not empty
                        if (!req.body) {
                            return [2 /*return*/, res.status(400).json({
                                    message: "Body is required"
                                })];
                        }
                        // check if body properties are not empty
                        if (!req.body.username || !req.body.password || !req.body.name || !req.body.surname) {
                            return [2 /*return*/, res.status(400).json({
                                    message: "Username, password, name and surname are required"
                                })];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.userService.getUserByUsername(req.body.username)];
                    case 2:
                        oldUser = _a.sent();
                        if (oldUser) {
                            return [2 /*return*/, res.status(400).json({
                                    message: "Username is already taken"
                                })];
                        }
                        salt = bcryptjs_1["default"].genSaltSync(10);
                        hashedPassword = bcryptjs_1["default"].hashSync(req.body.password, salt);
                        user = new user_model_1["default"](undefined, req.body.username, hashedPassword, req.body.name, req.body.surname);
                        return [4 /*yield*/, this.userService.createUser(user)];
                    case 3:
                        newUser = _a.sent();
                        res.json({
                            message: "User created",
                            username: newUser.username,
                            name: newUser.name,
                            surname: newUser.surname,
                            token: (0, security_1.sign)(newUser, '2h')
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        err_2 = _a.sent();
                        return [2 /*return*/, res.status(500).json({
                                message: "Error process register",
                                error: err_2
                            })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports["default"] = UserController;
//# sourceMappingURL=user.controller.js.map