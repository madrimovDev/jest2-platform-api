"use strict";
exports.__esModule = true;
var SessionWithComplex = /** @class */ (function () {
    function SessionWithComplex(id, user, path, complexPath, startTime, endTime, completed, complex, expired, remainingTime) {
        this.id = id;
        this.user = user;
        this.path = path;
        this.complexPath = complexPath;
        this.startTime = startTime;
        this.endTime = endTime;
        this.completed = completed;
        this.complex = complex;
        this.expired = expired;
        this.remainingTime = remainingTime;
    }
    return SessionWithComplex;
}());
exports["default"] = SessionWithComplex;
//# sourceMappingURL=session.model.js.map