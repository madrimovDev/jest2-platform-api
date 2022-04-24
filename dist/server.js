"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_json_1 = __importDefault(require("./swagger.json"));
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config({
    path: path_1["default"].join(__dirname, '../.env')
});
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var complex_routes_1 = __importDefault(require("./routes/complex.routes"));
var question_routes_1 = __importDefault(require("./routes/question.routes"));
var session_routes_1 = __importDefault(require("./routes/session.routes"));
var auth_middleware_1 = require("./middlewares/auth.middleware");
var app = (0, express_1["default"])();
//configure app to use bodyParser()
//this will let us get the data from a POST
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.use((0, cors_1["default"])());
app.use(auth_middleware_1.authMiddleware);
app.use('/api-docs/', swagger_ui_express_1["default"].serve, swagger_ui_express_1["default"].setup(swagger_json_1["default"]));
//Routes
app.use('/api', user_routes_1["default"]);
app.use('/api/complex', question_routes_1["default"]);
app.use('/api/complex', complex_routes_1["default"]);
app.use('/api/session', session_routes_1["default"]);
// run server
app.listen(process.env.PORT || 3000, function () {
    console.log('Server is running...');
});
//# sourceMappingURL=server.js.map