"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const user_controller_1 = require("./controller/user.controller");
const router_1 = require("../shared/routers/router");
class UserRouter extends router_1.BaseRouter {
    constructor() {
        super(user_controller_1.UserController);
    }
    routes() {
        this.router.get('/user', (req, res) => this.controller.getUsers(req, res));
    }
}
exports.UserRouter = UserRouter;
